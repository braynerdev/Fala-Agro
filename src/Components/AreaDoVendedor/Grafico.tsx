import { AreaChart } from '@mantine/charts';
import { data } from '../../Data/AreaDoVendedor';
import '@mantine/charts/styles.css';
import { Flex } from '@mantine/core';

export function Grafico() {
  return (
    <Flex justify="center" direction="column" w="83%" mx="auto" gap="2rem">
    <h2>Gráfico de Vendas</h2>
    <AreaChart
      h={600}
      data={data}
      dataKey="date"
      series={[
        { name: 'Vendas', color: 'indigo.6' },
      ]}
      w="100%"
      curveType="bump"
    />
    </Flex>
  );
}