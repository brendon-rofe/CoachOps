const STORAGE_KEY = 'connect_events';

async function getEvents() {
  const { [STORAGE_KEY]: events = [] } = await chrome.storage.local.get(STORAGE_KEY);
  return events;
}

async function addEvent(evt) {
  const events = await getEvents();
  events.unshift(evt);
  await chrome.storage.local.set({
    [STORAGE_KEY]: events.slice(0, 500),
  });
  console.log('[ConnectChecker BG] Stored event:', evt);
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('[ConnectChecker BG] onMessage:', msg);

  if (msg?.type === 'connect-event' && msg.payload) {
    addEvent(msg.payload);
    sendResponse({ ok: true });
    return true; // keep message channel alive for async
  }

  sendResponse({ ok: false, reason: 'unknown message type' });
});
