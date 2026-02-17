import { Routes, Route, Navigate } from 'react-router-dom';
import { ApplicationShell } from './components/AppShell/AppShell';
import { Vocabulary } from './pages/Vocabulary';
import { Settings } from './pages/Settings';

function App() {
    return (
        <ApplicationShell>
            {/* @ts-ignore */}
            <Routes>
                {/* @ts-ignore */}
                <Route path="/" element={<Navigate to="/vocabulary" replace />} />
                {/* @ts-ignore */}
                <Route path="/vocabulary" element={<Vocabulary />} />
                {/* @ts-ignore */}
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </ApplicationShell>
    );
}

export default App;
