import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Title, Select, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
export function Settings() {
    const { i18n } = useTranslation();
    return (_jsxs(Container, { children: [_jsx(Title, { order: 2, mb: "md", children: "Settings" }), _jsx(Select, { label: "Language", placeholder: "Pick one", data: ['en', 'zh-TW'], value: i18n.language, onChange: (value) => i18n.changeLanguage(value || 'en') }), _jsxs(Text, { mt: "md", size: "sm", c: "dimmed", children: ["Current Language: ", i18n.language] })] }));
}
