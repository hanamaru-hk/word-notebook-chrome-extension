import { ActionIcon, AppShell, Burger, Group, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSettings, IconBook, IconX } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function ApplicationShell({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    const links = [
        { icon: IconBook, label: 'Vocabulary List', to: '/vocabulary' },
        { icon: IconSettings, label: 'Settings', to: '/settings' },
    ];

    const mainLinks = links.map((link) => (
        <NavLink
            key={link.label}
            active={location.pathname === link.to}
            label={link.label}
            /* @ts-ignore */
            leftSection={<link.icon size="1rem" stroke={1.5} />}
            onClick={() => {
                navigate(link.to);
                if (opened) toggle();
            }}
        />
    ));

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md" justify="space-between">
                    <Group>
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        <Title order={3}>Vocabulary Revision</Title>
                    </Group>
                    <ActionIcon variant="subtle" color="gray" onClick={() => window.close()}>
                        {/* @ts-ignore */}
                        <IconX size="1.2rem" />
                    </ActionIcon>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                {mainLinks}
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
