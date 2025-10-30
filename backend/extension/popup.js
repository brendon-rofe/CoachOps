const STORAGE_KEY = 'connect_events';

function fmt(ts) {
  try {
    return new Date(ts).toLocaleString();
  } catch {
    return String(ts);
  }
}

async function load() {
  console.log('[ConnectChecker POPUP] loading...');
  const got = await chrome.storage.local.get(STORAGE_KEY);
  const events = got[STORAGE_KEY] || [];
  console.log('[ConnectChecker POPUP] events:', events);

  const list = document.getElementById('list');

  if (!events.length) {
    list.textContent = 'No events yet.';
    return;
  }

  list.innerHTML = events.slice(0, 20).map(e => `
    <div class="row">
      <div>
        <span class="status">${(e.status || '').toUpperCase()}</span>
        ${e.name ? ` • ${e.name}` : ''}
      </div>
      <div class="meta">
        ${fmt(e.ts)} • <a href="${e.url}" target="_blank" rel="noreferrer">Open profile</a>
      </div>
    </div>
  `).join('');
}

// run immediately when popup opens
load();
