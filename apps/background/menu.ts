import { getConfig } from "@/packages/config";

export const createMenu = () => {
    chrome.contextMenus.create({
        type: 'normal',
        contexts: ['selection'],
        title: 'Check "%s"',
        id: 'vocabulary-revision-lite'
    });
};

export const addMenuEventListeners = () => {
    chrome.contextMenus.onClicked.addListener(
        async (info) => {
            const text = info.selectionText;

            const config = await getConfig();

            const url = await new Promise(resolve => chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => resolve(tabs[0] ? tabs[0].url : tabs[0])));

            // saveVocab(null, text, config.from, config.to, url);

            chrome.tabs.create(
                {
                    url: `https://translate.google.com/?sl=${config.from}&tl=${config.to}&text=${text}&op=translate`
                },
                () => {

                }
            );
        }
    );
};