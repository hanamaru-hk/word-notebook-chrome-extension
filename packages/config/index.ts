import { i18n } from "@repo/i18n";

type i18nType = typeof i18n

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
    /** Treat highlighted words as Japanese (not Chinese) for lookup. */
    treatAs: string;
}

export const defaultConfig: Config = {
    llm: LLMType.perplexity,
    language: 'en',
    newTab: true,
    firstTime: true,
    treatAs: "japanese",
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

export const getLookupPrompt = (i18n: i18nType, word: string, detail: boolean, focus: string) => {
    const normalText = i18n.t('app.common.prompt_lookup', { word })
    const focusText = focus === 'not_specified' ? '' : i18n.t('app.common.prompt_focus', { language: i18n.t(`app.settings.treat_as.${focus}`) })
    const detailText = detail ? i18n.t('app.common.prompt_detail') : ''

    return normalText + focusText + detailText
}
