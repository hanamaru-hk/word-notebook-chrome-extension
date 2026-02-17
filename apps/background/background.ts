import { createMenu, addMenuEventListeners } from './menu';

chrome.runtime.onInstalled.addListener((_reason) => {
    createMenu();
});

addMenuEventListeners();