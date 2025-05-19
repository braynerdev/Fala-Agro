import {
  Container,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Radio,
  Group,
  Divider,
  Stack,
} from '@mantine/core';
import { useLocation } from 'react-router-dom';

const Checkout: React.FC = () => {
  const location = useLocation();
  const ingressos = location.state?.ingressos ?? [];

  const total = ingressos.reduce(
    (acc: number, ing: any) => acc + ing.preco * ing.quantidade,
    0
  );

  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="xl" ta="center">Finalizar Compra</Title>

      <Stack gap="xl">
        <Paper withBorder shadow="sm" p="md" radius="md">
          <Title order={4} mb="sm" c="green">1. Dados de recebimento</Title>
          <TextInput label="Nome completo" placeholder="Nome e sobrenome" required />
          <TextInput label="E-mail" placeholder="exemplo@email.com" required mt="sm" />
          <TextInput label="Confirmação de e-mail" placeholder="exemplo@email.com" required mt="sm" />
          <Text size="sm" c="dimmed" mt="sm">
            Os ingressos são enviados para o e-mail assim que recebermos a confirmação de pagamento.
          </Text>
          <Button mt="md" color="lime">Confirmar</Button>
        </Paper>

        <Paper withBorder shadow="sm" p="md" radius="md">
          <Title order={4} mb="sm" c="green">2. Informações do ingresso</Title>
          {ingressos.map((ing: any) => (
            <Text key={ing.id} fw={500}>{ing.quantidade}x {ing.nome}</Text>
          ))}
          <Text mt="sm" size="sm" c="dimmed">
            Ao clicar em confirmar, você aceita os nossos{' '}
            <a href="#" style={{ color: '#4c6ef5' }}>Termos e Condições</a>.
          </Text>
          <TextInput label="Informe o CPF" placeholder="CPF (apenas números)" required mt="sm" />
          <Button mt="md" color="lime">Confirmar</Button>
        </Paper>

        <Paper withBorder shadow="sm" p="md" radius="md">
          <Title order={4} mb="sm" c="green">3. Forma de pagamento</Title>
          <Text mb="sm">Cartão emitido no Brasil?</Text>
          <Radio.Group defaultValue="sim">
            <Group>
              <Radio value="sim" label="Sim" />
              <Radio value="nao" label="Não" />
            </Group>
          </Radio.Group>

          <TextInput label="Nome impresso no cartão" required mt="md" />
          <TextInput label="Número do cartão" required mt="sm" />
          <Group grow mt="sm">
            <TextInput label="Data de validade" placeholder="MM/AA" required />
            <TextInput label="Código de segurança" placeholder="000" required />
          </Group>

          <Divider my="lg" />

          <Text fw={500} mb="sm">Parcelamento</Text>
          <Radio.Group name="parcelas" defaultValue="1x">
            <Stack gap="xs">
              <Radio value="1x" label={`1x de R$ ${total.toFixed(2)}`} />
              <Radio value="2x" label={`2x de R$ ${(total / 2).toFixed(2)}`} />
              <Radio value="3x" label={`3x de R$ ${(total / 3).toFixed(2)}`} />
            </Stack>
          </Radio.Group>

          <Button mt="md" color="lime" fullWidth>Confirmar</Button>
        </Paper>
      </Stack>
    </Container>
  );
};

export default Checkout;
