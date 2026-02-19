export enum LLMType {
    perplexity = 'perplexity',
    googleAI = 'googleAI',
    google = 'google',
}

export const llmLink: Record<LLMType, string> = {
    [LLMType.perplexity]: 'https://www.perplexity.ai/search/new?q=',
    [LLMType.googleAI]: 'https://www.google.com/search?udm=50&aep=11&q=',
    [LLMType.google]: 'https://www.google.com/search?q=',
}

export interface Config {
    llm: LLMType;
    language: string;
    newTab: boolean;
    firstTime: boolean;
}

export const defaultConfig: Config = {
    llm: LLMType.perplexity,
    language: 'en',
    newTab: true,
    firstTime: true
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
