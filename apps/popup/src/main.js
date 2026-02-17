import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { MemoryRouter } from 'react-router-dom';
import App from './App'; // Removed .tsx extension for compatibility
import '@mantine/core/styles.css';
import './index.css';
import { initI18nReact } from 'i18n';
initI18nReact();
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(MantineProvider, { children: _jsx(MemoryRouter, { children: _jsx(App, {}) }) }) }));
