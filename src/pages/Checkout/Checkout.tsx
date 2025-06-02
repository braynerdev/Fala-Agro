  import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    Group,
    Image,
    Paper,
    Radio,
    Select,
    Stack,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
  import { useEffect, useRef, useState } from 'react';
  import { useLocation, useNavigate } from 'react-router-dom';
  import classes from './Checkout.module.css';

  type Ingresso = {
    id: string;
    nome: string;
    tipo: string;
    preco: number;
    quantidade: number;
  };

  const Checkout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const ingressos: Ingresso[] = location.state?.ingressos ?? [];
    const evento = location.state?.evento ?? null;

    const [formaPagamento, setFormaPagamento] = useState<'pix' | 'credito' | ''>('');
    const [pixStep, setPixStep] = useState<'documento' | 'qrcode' | ''>('');
    const [tipoDocumento, setTipoDocumento] = useState<'cpf' | 'cnpj' | ''>('');
    const [documento, setDocumento] = useState('');

    const [bandeiraCartao, setBandeiraCartao] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [validade, setValidade] = useState('');
    const [cvc, setCvc] = useState('');

    const [timer, setTimer] = useState(300);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
      if (!evento || ingressos.length === 0) {
        navigate('/', { replace: true });
      }
    }, [evento, ingressos, navigate]);

    useEffect(() => {
      if (pixStep === 'qrcode') {
        intervalRef.current = window.setInterval(() => {
          setTimer(prev => {
            if (prev <= 1) {
              clearInterval(intervalRef.current!);
              setPixStep('');
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }

      return () => clearInterval(intervalRef.current!);
    }, [pixStep]);

    const total = ingressos.reduce((acc, ing) => acc + ing.preco * ing.quantidade, 0);
    const taxas = 15;
    const totalComTaxas = total + taxas;

    const formatTime = (time: number) => {
      const min = String(Math.floor(time / 60)).padStart(2, '0');
      const sec = String(time % 60).padStart(2, '0');
      return `${min}:${sec}`;
    };

    const renderBotaoConfirmar = (onClick?: () => void, disabled = false) => (
      <Group justify="flex-end" mt="md">
        <Button color="#92d500" className={classes.confirmButton} onClick={onClick} disabled={disabled}>
          Confirmar
        </Button>
      </Group>
    );

    const handleSubmitCredito = () => {
      console.log('Finalizar com cartão', { bandeiraCartao, nomeCartao, numeroCartao, validade, cvc });
    };

    return (
      <Container size="xl" py="xl">
        <div className={classes.checkoutContainer}>
          <div className={classes.leftColumn}>
            <Paper withBorder className={classes.section}>
              <Title order={4} className={classes.sectionTitle}>Dados de recebimento</Title>
              <TextInput label="Nome completo" required />
              <TextInput label="E-mail" required mt="sm" />
              <TextInput label="Confirmação de E-mail" required mt="sm" />
              <Box className={classes.infoBox}>
                <Text size="sm" c="dimmed" ta="center">
                  Os ingressos são enviados para o e-mail após a confirmação do pagamento.
                </Text>
              </Box>
              {renderBotaoConfirmar()}
            </Paper>

            <Paper withBorder className={classes.section}>
              <Title order={4} className={classes.sectionTitle}>Informações do ingresso</Title>
              {ingressos.map(ing => (
                <Text key={ing.id} fw={600}>
                  {ing.quantidade}x {ing.nome} - {ing.tipo}
                </Text>
              ))}
              <Checkbox
                color="#92d500"
                label={
                  <>
                    Ao clicar em confirmar, você está ciente dos nossos{' '}
                    <a href="#" className={classes.link}>Termos e Condições</a>.
                  </>
                }
                defaultChecked
                mt="sm"
              />
              <TextInput label="Informe o CPF" placeholder="Apenas números" required mt="sm" />
              <Text size="xs" c="dimmed" mt="xs">
                Ao confirmar, declaro as informações como verdadeiras.
              </Text>
              {renderBotaoConfirmar()}
            </Paper>

            <Paper withBorder className={classes.section}>
              <Title order={4} className={classes.sectionTitle}>Forma de pagamento</Title>
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
                  <Radio color="#92d500" value="credito" label="💳 Cartão de Crédito" />
                  <Radio color="#92d500" value="pix" label="🟢 Pix" />
                </Stack>
              </Radio.Group>

              {formaPagamento === 'pix' && pixStep !== 'qrcode' && (
                <>
                  <Text mt="sm">Ao final da compra, um <b>QR Code será gerado</b>.</Text>
                  <Radio.Group
                    value={tipoDocumento}
                    onChange={value => setTipoDocumento(value as 'cpf' | 'cnpj')}
                    label="Tipo de documento"
                    required
                    mt="md"
                  >
                    <Group mt="xs">
                      <Radio color="#92d500" value="cpf" label="CPF" />
                      <Radio color="#92d500" value="cnpj" label="CNPJ" />
                    </Group>
                  </Radio.Group>
                  <TextInput
                    label="CPF/CNPJ"
                    placeholder="Digite aqui"
                    value={documento}
                    onChange={e => setDocumento(e.currentTarget.value)}
                    required
                    mt="sm"
                  />
                  {renderBotaoConfirmar(() => setPixStep('qrcode'), !tipoDocumento || !documento)}
                </>
              )}

              {formaPagamento === 'pix' && pixStep === 'qrcode' && (
                <Box mt="md" ta="center">
                  <Text fw={600} mb="sm">Escaneie o QR Code antes do tempo acabar</Text>
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

              {formaPagamento === 'credito' && (
                <>
                  <Divider my="lg" />
                  <Text fw={500} mb="xs">Adicione seu cartão</Text>
                  <Select
                    label="Bandeira do cartão"
                    data={['Visa', 'Mastercard', 'Elo', 'Hipercard', 'American Express']}
                    value={bandeiraCartao}
                    onChange={(value) => setBandeiraCartao(value ?? "")}
                    required
                  />
                  <TextInput label="Nome impresso no cartão" value={nomeCartao} onChange={e => setNomeCartao(e.currentTarget.value)} required mt="sm" />
                  <TextInput label="Número do cartão" value={numeroCartao} onChange={e => setNumeroCartao(e.currentTarget.value)} required mt="sm" />
                  <Group grow mt="sm">
                    <TextInput label="Validade" placeholder="MM/AA" value={validade} onChange={e => setValidade(e.currentTarget.value)} required />
                    <TextInput label="CVC" placeholder="000" value={cvc} onChange={e => setCvc(e.currentTarget.value)} required />
                  </Group>

                  <Divider my="lg" />
                  <Text fw={500} mb="xs">Parcelamento</Text>
                  <Radio.Group name="parcelas" defaultValue="1x">
                    <Stack gap="xs">
                      {[1, 2, 3, 4, 6].map(parcela => (
                        <Radio
                          key={parcela}
                          color="#92d500"
                          value={`${parcela}x`}
                          label={`${parcela}x de R$ ${(totalComTaxas / parcela).toFixed(2)}`}
                        />
                      ))}
                    </Stack>
                  </Radio.Group>

                  <Group justify="flex-end" mt="md">
                    <Button
                      color="#92d500"
                      className={classes.confirmButton}
                      onClick={handleSubmitCredito}
                      disabled={
                        !bandeiraCartao || !nomeCartao || !numeroCartao || !validade || !cvc
                      }
                    >
                      Comprar Agora
                    </Button>
                  </Group>
                </>
              )}
            </Paper>
          </div>

          <div className={classes.rightColumn}>
          <Paper withBorder shadow="sm" p="md" radius="md" mb="md">
            {evento && (
              <>
                <Image src={evento.imagemCartaz ?? evento.imagem} alt="Cartaz do Evento" radius="md" />
                <Box mt="md">
                  <Text fw={600} color="green">{evento.nome}</Text>
                  <Text size="sm">📅 {evento.dataTime.toLocaleDateString()}</Text>
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
