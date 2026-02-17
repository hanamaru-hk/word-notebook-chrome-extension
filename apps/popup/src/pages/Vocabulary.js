import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table, Title, Container } from '@mantine/core';
const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];
export function Vocabulary() {
    const rows = elements.map((element) => (_jsxs(Table.Tr, { children: [_jsx(Table.Td, { children: element.position }), _jsx(Table.Td, { children: element.name }), _jsx(Table.Td, { children: element.symbol }), _jsx(Table.Td, { children: element.mass })] }, element.name)));
    return (_jsxs(Container, { children: [_jsx(Title, { order: 2, mb: "md", children: "Vocabulary List" }), _jsxs(Table, { children: [_jsx(Table.Thead, { children: _jsxs(Table.Tr, { children: [_jsx(Table.Th, { children: "Element position" }), _jsx(Table.Th, { children: "Element name" }), _jsx(Table.Th, { children: "Symbol" }), _jsx(Table.Th, { children: "Atomic mass" })] }) }), _jsx(Table.Tbody, { children: rows })] })] }));
}
