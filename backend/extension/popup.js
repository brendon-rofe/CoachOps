const STORAGE_KEY = "connect_events";

function fmt(ts) {
  try {
    const d = new Date(ts);

    // ex: "30 Oct 2025"
    const dateStr = d.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    // ex: "20:31"
    const timeStr = d.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `Sent on ${dateStr} at ${timeStr}`;
  } catch {
    return "Sent (time unknown)";
  }
}

function renderEventCard(evt) {
  const { name, url } = evt;
  const initial =
    name && typeof name === "string" && name.trim().length > 0
      ? name.trim()[0].toUpperCase()
      : "?";

  return `
    <div class="card">
      <div class="card-main">
        <div class="avatar">${initial}</div>

        <div class="card-text">
          <p class="name-line">${name || "Unknown"}</p>
          <p class="meta-line">${fmt(evt.ts)}</p>
          <p class="meta-line">Connect request sent</p>
        </div>
      </div>

      <div class="card-footer">
        <a
          class="open-btn"
          href="${url}"
          target="_blank"
          rel="noreferrer"
        >
          Open profile
        </a>
      </div>
    </div>
  `;
}

// Reads from storage and updates DOM
async function render() {
  const { [STORAGE_KEY]: stored } = await chrome.storage.local.get(STORAGE_KEY);

  let events = stored || [];
  if (!Array.isArray(events)) events = [];

  const list = document.getElementById("list");
  const badge = document.getElementById("count-badge");

  if (!events.length) {
    badge.textContent = "0";
    list.innerHTML = `
      <div class="empty-state">No invites tracked yet.</div>
    `;
    return;
  }

  badge.textContent = String(events.length);

  // newest first (already unshifted in background/content, but let's keep this explicit)
  const recent = events.slice(0, 20);

  list.innerHTML = recent.map(renderEventCard).join("");
}

// Clears storage and then re-renders
async function clearLog() {
  await chrome.storage.local.set({ [STORAGE_KEY]: [] });
  await render();
}

// Hook up events and initial load
async function init() {
  // attach click handler to Clear button
  const clearBtn = document.getElementById("clear-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", async () => {
      await clearLog();
    });
  }

  const dashboardBtn = document.getElementById("dashboard-btn");
  if (dashboardBtn) {
    dashboardBtn.addEventListener("click", () => {
      chrome.tabs.create({ url: "http://localhost:4200" });
    });
  }

  // initial render
  await render();
}

init();
