export const saveConfig = async (key, value) => {
    const all = await retrieveAll();
    if (!all.config || Object.keys(all.config).length === 0) {
        all.config = {};
    }
    all.config[key] = value;
    await new Promise<void>(resolve => chrome.storage.local.set(all, () => {
        resolve();
    }));
};