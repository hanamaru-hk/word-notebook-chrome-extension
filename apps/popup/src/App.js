import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import { ApplicationShell } from './components/AppShell/AppShell';
import { Vocabulary } from './pages/Vocabulary';
import { Settings } from './pages/Settings';
function App() {
    return (_jsx(ApplicationShell, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/vocabulary", replace: true }) }), _jsx(Route, { path: "/vocabulary", element: _jsx(Vocabulary, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) })] }) }));
}
export default App;
