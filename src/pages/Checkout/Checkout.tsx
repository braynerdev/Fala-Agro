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
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './Checkout.module.css';
import { useEffect, useState, useRef } from 'react';

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ingressos = location.state?.ingressos ?? [];
  const evento = location.state?.evento ?? null;

  const [formaPagamento, setFormaPagamento] = useState<'pix' | 'credito' | ''>('');
  const [pixStep, setPixStep] = useState<'documento' | 'qrcode' | ''>('');
  const [tipoDocumento, setTipoDocumento] = useState<'cpf' | 'cnpj' | ''>('');
  const [documento, setDocumento] = useState('');
  const [timer, setTimer] = useState(300); // 5 minutos
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!evento || ingressos.length === 0) {
      navigate('/', { replace: true });
    }
  }, [evento, ingressos, navigate]);

  useEffect(() => {
    if (pixStep === 'qrcode') {
      intervalRef.current = window.setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setPixStep('');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [pixStep]);

  const total = ingressos.reduce(
    (acc: number, ing: any) => acc + ing.preco * ing.quantidade,
    0
  );

  const taxas = 15;
  const totalComTaxas = total + taxas;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Container size="xl" py="xl">
      <div className={classes.checkoutContainer}>
        <div className={classes.leftColumn}>
          {/* 1 - Dados de recebimento */}
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

          {/* 2 - Informações do ingresso */}
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

          {/* 3 - Forma de pagamento */}
          <Paper withBorder className={classes.section}>
            <Title order={4} className={classes.sectionTitle} data-index="3">
              Forma de pagamento
            </Title>

            <Radio.Group
              value={formaPagamento}
              onChange={(value: string) => {
                setFormaPagamento(value as 'pix' | 'credito');
                setPixStep('');
                setTimer(300);
              }}
              mt="sm"
            >
              <Stack gap="xs">
                <Radio value="credito" label="💳 Cartão de Crédito" />
                <Radio value="pix" label="🟢 Pix" />
              </Stack>
            </Radio.Group>

            {/* 📲 PIX - Etapas */}
            {formaPagamento === 'pix' && pixStep !== 'qrcode' && (
              <>
                <Text mt="sm">
                  Ao final da compra, um <b>QR Code será gerado</b>. Use o aplicativo do banco para escaneá-lo e realizar o pagamento.
                </Text>

                <Group mt="md">
                  <Radio.Group
                    value={tipoDocumento}
                    onChange={(value) => setTipoDocumento(value as 'cpf' | 'cnpj')}
                    label="Tipo de documento"
                    required
                  >
                    <Group mt="xs">
                      <Radio value="cpf" label="CPF" />
                      <Radio value="cnpj" label="CNPJ" />
                    </Group>
                  </Radio.Group>

                  <TextInput
                    label="CPF/CNPJ"
                    placeholder="Digite aqui"
                    value={documento}
                    onChange={(e) => setDocumento(e.currentTarget.value)}
                    required
                  />
                </Group>

                <Group justify="flex-end" mt="md">
                  <Button
                    className={classes.confirmButton}
                    disabled={!tipoDocumento || !documento}
                    onClick={() => setPixStep('qrcode')}
                  >
                    Gerar QR Code
                  </Button>
                </Group>
              </>
            )}

            {formaPagamento === 'pix' && pixStep === 'qrcode' && (
              <Box mt="md" ta="center">
                <Text fw={600} mb="sm">
                  Escaneie o QR CODE e pague antes do tempo acabar
                </Text>
                <Image src="/seu-qrcode-gerado.png" alt="QR Code Pix" maw={200} mx="auto" />
                <Box
                  mt="md"
                  style={{
                    backgroundColor: '#92D500',
                    color: 'white',
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontWeight: 'bold',
                  }}
                >
                  {formatTime(timer)}
                </Box>
              </Box>
            )}

            {/* 💳 Cartão de crédito */}
            {formaPagamento === 'credito' && (
              <>
                <Divider my="lg" />
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
                  <TextInput label="Validade" placeholder="MM/AA" required />
                  <TextInput label="CVC" placeholder="000" required />
                </Group>

                <Divider my="lg" />
                <Text fw={500} mb="xs">
                  Parcelamento{' '}
                  <a href="#" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                    Veja as condições
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
              </>
            )}
          </Paper>
        </div>

        {/* Resumo do pedido */}
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
            <Text size="sm" mt="xs">{evento?.data}</Text>
            <Divider my="sm" />

            <Text fw={600}>Ingresso(s)</Text>
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
            <Text size="xs" mt={2}>{ingressos.length} item(s)</Text>
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
