import { Anchor, Flex, Group, Progress, Table, Text } from '@mantine/core';
import classes from './Tabela.module.css';
import { data2 } from '../../Dados/AreaDoVendedor';


export function Tabela() {
  const rows = data2.map((row) => {
    const totalReviews = row.vendas.negative + row.vendas.positive;
    const positiveReviews = (row.vendas.positive / totalReviews) * 100;
    const negativeReviews = (row.vendas.negative / totalReviews) * 100;

    return (
      <Table.Tr key={row.title}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.title}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.data}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.local}
          </Anchor>
        </Table.Td>
        <Table.Td>{Intl.NumberFormat().format(totalReviews)}</Table.Td>
        <Table.Td>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" fw={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section
              className={classes.progressSection}
              value={positiveReviews}
              color="teal"
            />

            <Progress.Section
              className={classes.progressSection}
              value={negativeReviews}
              color="red"
            />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Flex direction="column" w="83%" justify="center" mx="auto"
    gap="2rem">
        <h2>Eventos</h2>
        <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="xs" w="100%">
            <Table.Thead>
            <Table.Tr>
                <Table.Th>Nome</Table.Th>
                <Table.Th>Data</Table.Th>
                <Table.Th>Local</Table.Th>
                <Table.Th>Vendas</Table.Th>
                <Table.Th>Distribuição de Vendas</Table.Th>
            </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </Table.ScrollContainer>
    </Flex>
  );
}