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
  Checkbox,
  Image,
  Box,
  Select,
} from '@mantine/core';
import { useLocation } from 'react-router-dom';
import classes from './Checkout.module.css';

const Checkout: React.FC = () => {
  const location = useLocation();
  const ingressos = location.state?.ingressos ?? [];
  const evento = location.state?.evento ?? null;

  const total = ingressos.reduce(
    (acc: number, ing: any) => acc + ing.preco * ing.quantidade,
    0
  );

  const taxas = 15;
  const totalComTaxas = total + taxas;

  return (
    <Container size="xl" py="xl">
      <div className={classes.checkoutContainer}>
        <div className={classes.leftColumn}>
          <Paper withBorder className={classes.section}>
            <Title order={4} className={classes.sectionTitle} data-index="1">
              Dados de recebimento
            </Title>

            <TextInput label="Nome completo" placeholder="Nome Sobrenome" required />
            <TextInput label="E-mail" placeholder="exemplo@email.com" required mt="sm" />
            <TextInput label="Confirmação de E-mail" placeholder="exemplo@email.com" required mt="sm" />

            <Box className={classes.infoBox}>
              <Text size="sm" c="dimmed" ta="center">
                Os ingressos são enviados para o E-mail assim que recebermos a confirmação do pagamento
              </Text>
            </Box>

            <Group justify="flex-end" mt="md">
              <Button className={classes.confirmButton}>Confirmar</Button>
            </Group>
          </Paper>

          <Paper withBorder className={classes.section}>
            <Title order={4} className={classes.sectionTitle} data-index="2">
              Informações do ingresso
            </Title>

            {ingressos.map((ing: any) => (
              <Text key={ing.id} fw={600}>
                {ing.quantidade}x {ing.nome} - {ing.tipo}
              </Text>
            ))}

            <Checkbox
              label={
                <>
                  Ao clicar em confirmar, você está ciente dos nossos{' '}
                  <a href="#" className={classes.link}>Termos e Condições</a>.
                </>
              }
              defaultChecked
              mt="sm"
            />

            <TextInput label="Informe o CPF" placeholder="CPF (Apenas números)" required mt="sm" />

            <Text size="xs" c="dimmed" mt="xs">
              Ao confirmar, declaro as informações como verdadeiras.
            </Text>

            <Group justify="flex-end" mt="md">
              <Button className={classes.confirmButton}>Confirmar</Button>
            </Group>
          </Paper>

          <Paper withBorder className={classes.section}>
            <Title order={4} className={classes.sectionTitle} data-index="3">
              Forma de pagamento
            </Title>

            <Text fw={500} mb="xs">Adicione seu cartão</Text>

            <Select
              label="Bandeira do cartão"
              placeholder="Selecione a bandeira"
              data={['Visa', 'Mastercard', 'Elo', 'Hipercard', 'American Express']}
              required
              mt="sm"
            />

            <TextInput label="Nome impresso no cartão" required mt="sm" />
            <TextInput label="Número do cartão" placeholder="0000 0000 0000 0000" required mt="sm" />
            <Group grow mt="sm">
              <TextInput label="Data de validade" placeholder="MM/AA" required />
              <TextInput label="Código de segurança" placeholder="000" required />
            </Group>

            <Divider my="lg" />

            <Text fw={500} mb="xs">
              Parcelamento{' '}
              <a href="#" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                Veja as condições de parcelamento
              </a>
            </Text>

            <Radio.Group name="parcelas" defaultValue="1x">
              <Stack gap="xs">
                <Radio value="1x" label={`1x de R$ ${totalComTaxas.toFixed(2)}`} />
                <Radio value="2x" label={`2x de R$ ${(totalComTaxas / 2).toFixed(2)}`} />
                <Radio value="3x" label={`3x de R$ ${(totalComTaxas / 3).toFixed(2)}`} />
                <Radio value="4x" label={`4x de R$ ${(totalComTaxas / 4).toFixed(2)}`} />
                <Radio value="6x" label={`6x de R$ ${(totalComTaxas / 6).toFixed(2)}`} />
              </Stack>
            </Radio.Group>

            <Group justify="flex-end" mt="md">
              <Button className={classes.confirmButton}>Confirmar</Button>
            </Group>
          </Paper>
        </div>

        <div className={classes.rightColumn}>
          <Paper withBorder shadow="sm" p="md" radius="md" mb="md">
            {evento && (
              <>
                <Image src={evento.imagemCartaz ?? evento.imagem} alt="Cartaz do Evento" radius="md" />
                <Box mt="md">
                  <Text fw={600} color="green">{evento.nome}</Text>
                  <Text size="sm">📅 {evento.data}</Text>
                  <Text size="sm">📍 {evento.local}</Text>
                </Box>
              </>
            )}
          </Paper>

          <Paper withBorder shadow="sm" p="md" radius="md">
            <Text fw={600} color="green">Resumo do pedido</Text>
            <Text size="sm" mt="xs">Terça-feira, 18 de março</Text>
            <Divider my="sm" />

            <Text fw={600}>Ingresso comum</Text>
            {ingressos.map((ing: any) => (
              <Box key={ing.id}>
                <Group justify="space-between">
                  <Text>{ing.quantidade}x {ing.nome}</Text>
                  <Text fw={600}>R$ {(ing.preco * ing.quantidade).toFixed(2)}</Text>
                </Group>
                <Text size="xs" c="dimmed">R$ {ing.preco.toFixed(2)} cada</Text>
              </Box>
            ))}

            <Divider my="sm" />
            <Group justify="space-between">
              <Text>Forma de entrega</Text>
              <Text fw={600}>R$ 0,00</Text>
            </Group>
            <Text size="xs" c="dimmed">Disponível no celular e para impressão</Text>

            <Group justify="space-between" mt="sm">
              <Text>Taxas</Text>
              <Text fw={600}>R$ {taxas.toFixed(2)}</Text>
            </Group>

            <Divider my="sm" />
            <Group justify="space-between">
              <Text fw={600}>Total</Text>
              <Text fw={600}>R$ {totalComTaxas.toFixed(2)}</Text>
            </Group>
            <Text size="xs" mt={2}>1 item</Text>
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
