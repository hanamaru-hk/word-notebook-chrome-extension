import { Container, Title, Select, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export function Settings() {
    const { i18n } = useTranslation();

    return (
        <Container>
            <Title order={2} mb="md">Settings</Title>
            <Select
                label="Language"
                placeholder="Pick one"
                data={['en', 'zh-TW']}
                value={i18n.language}
                onChange={(value) => i18n.changeLanguage(value || 'en')}
            />
            <Text mt="md" size="sm" c="dimmed">
                Current Language: {i18n.language}
            </Text>
        </Container>
    );
}
