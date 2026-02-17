
export interface Config {
    from: string;
    to: string;
    llm: string;
    language: string;
}

const defaultConfig: Config = {
    from: 'en',
    to: 'zh-CN',
    llm: 'perplexity',
    language: 'en'
};

export const getConfig = (): Promise<Config> => {
    return new Promise((resolve) => {
        chrome.storage.local.get("config", (result) => {
            if (result.config) {
                resolve(result.config as Config);
            } else {
                resolve(defaultConfig);
            }
        });
    });
};

export const setConfig = (config: Config): Promise<void> => {
    return new Promise((resolve) => {
        chrome.storage.local.set({ config }, () => {
            resolve();
        });
    });
};
