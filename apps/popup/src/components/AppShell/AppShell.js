import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActionIcon, AppShell, Burger, Group, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSettings, IconBook, IconX } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function ApplicationShell({ children }) {
    const [opened, { toggle }] = useDisclosure(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const links = [
        { icon: IconBook, label: 'Vocabulary List', to: '/vocabulary' },
        { icon: IconSettings, label: 'Settings', to: '/settings' },
    ];
    const mainLinks = links.map((link) => (_jsx(NavLink, { active: location.pathname === link.to, label: link.label, 
        /* @ts-ignore */
        leftSection: _jsx(link.icon, { size: "1rem", stroke: 1.5 }), onClick: () => {
            navigate(link.to);
            if (opened)
                toggle();
        } }, link.label)));
    return (_jsxs(AppShell, { header: { height: 60 }, navbar: { width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }, padding: "md", children: [_jsx(AppShell.Header, { children: _jsxs(Group, { h: "100%", px: "md", justify: "space-between", children: [_jsxs(Group, { children: [_jsx(Burger, { opened: opened, onClick: toggle, hiddenFrom: "sm", size: "sm" }), _jsx(Title, { order: 3, children: "Vocabulary Revision" })] }), _jsx(ActionIcon, { variant: "subtle", color: "gray", onClick: () => window.close(), children: _jsx(IconX, { size: "1.2rem" }) })] }) }), _jsx(AppShell.Navbar, { p: "md", children: mainLinks }), _jsx(AppShell.Main, { children: children })] }));
}
