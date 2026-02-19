import { Table, ScrollArea, Pagination, Button, ActionIcon, Modal, Group, Text } from '@mantine/core';
import { IconTrash, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import { getVocabulary, deleteWord, Vocabulary as VocabularyType } from '@repo/database';
import { useEffect, useState } from 'react';
import { getConfig, llmLink, getLookupPrompt } from '@repo/config';



export function Vocabulary() {
    const { i18n, t } = useTranslation();
    const [vocabularies, setVocabularies] = useState<VocabularyType[]>([]);
    const [activePage, setPage] = useState(1);
    const itemsPerPage = 10;
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

    const refresh = () => getVocabulary().then(setVocabularies);

    useEffect(() => {
        refresh();
    }, []);

    const totalPages = Math.ceil(vocabularies.length / itemsPerPage);
    const paginatedVocabularies = vocabularies.slice(
        (activePage - 1) * itemsPerPage,
        activePage * itemsPerPage
    );

    const handleLookup = async (word: string) => {
        const config = await getConfig();
        chrome.tabs.create(
            {
                url: `${llmLink[config.llm]}${encodeURIComponent(getLookupPrompt(i18n, word || '', true, config.treatAs)) || ''} `
            },
            () => { }
        );
    }

    const handleRemove = (id: string) => {
        setPendingDeleteId(id);
        setConfirmOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!pendingDeleteId) return;
        await deleteWord(pendingDeleteId);
        setConfirmOpen(false);
        setPendingDeleteId(null);
        refresh();
    };

    const handleCancelDelete = () => {
        setConfirmOpen(false);
        setPendingDeleteId(null);
    };

    const rows = paginatedVocabularies.map((vocab) => (
        <Table.Tr key={vocab.id}>
            <Table.Td>{vocab.word}</Table.Td>
            <Table.Td>
                <a href={vocab.url} target="_blank" rel="noreferrer">
                    {t('app.to')}
                </a>
            </Table.Td>
            <Table.Td>
                <ActionIcon
                    variant="subtle"
                    aria-label={t('app.vocabulary.table.lookup')}
                    onClick={() => handleLookup(vocab.word)}
                >
                    <IconSearch size={16} />
                </ActionIcon>
            </Table.Td>
            <Table.Td>
                <ActionIcon
                    variant="subtle"
                    color="red"
                    aria-label={t('app.vocabulary.table.remove')}
                    onClick={() => handleRemove(vocab.id)}
                >
                    <IconTrash size={16} />
                </ActionIcon>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Modal
                opened={confirmOpen}
                onClose={handleCancelDelete}
                title={t('app.vocabulary.delete.title')}
                centered
            >
                <Text mb="sm">{t('app.vocabulary.delete.confirm_message')}</Text>
                <Group justify="flex-end">
                    <Button variant="default" size="xs" onClick={handleCancelDelete}>
                        {t('app.vocabulary.delete.cancel')}
                    </Button>
                    <Button color="red" size="xs" onClick={handleConfirmDelete}>
                        {t('app.vocabulary.delete.confirm')}
                    </Button>
                </Group>
            </Modal>
            <ScrollArea h={350} offsetScrollbars>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>{t('app.vocabulary.table.word')}</Table.Th>
                            <Table.Th>{t('app.vocabulary.table.url')}</Table.Th>
                            <Table.Th>{t('app.vocabulary.table.lookup')}</Table.Th>
                            <Table.Th>{t('app.vocabulary.table.remove')}</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </ScrollArea>
            <Pagination total={totalPages} value={activePage} onChange={setPage} mt="sm" />
        </>
    );
}
