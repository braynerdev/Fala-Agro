import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // ✅ adicionado useNavigate
import { eventos } from '../../Data/Events';
import BannerEvento from '../../Components/Evento/BannerEvento';
import Carrinho from '../../Components/Evento/Carrinho';
import {
  Container,
  Title,
  Text,
  Anchor,
  Divider,
  Stack,
  Group,
  Button,
} from '@mantine/core';
import { IconCalendar, IconMapPin, IconClock, IconMap } from '@tabler/icons-react';

const PaginaEvento: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const evento = eventos.find((e) => e.id === Number(id));

  const navigate = useNavigate();

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [ingressos, setIngressos] = useState([
    { id: 1, nome: 'Ingresso VIP', preco: 150, quantidade: 0 },
    { id: 2, nome: 'Ingresso Normal', preco: 70, quantidade: 0 },
  ]);

  if (!evento) {
    return (
      <Container mt="xl">
        <Title order={2} c="red" ta="center">
          Evento não encontrado.
        </Title>
      </Container>
    );
  }

  const dataFormatada = evento.dataTime.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const horaFormatada = evento.dataTime.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const abrirCarrinho = () => setCarrinhoAberto(true);

  const onQuantidadeChange = (id: number, quantidade: number) => {
    setIngressos((current) =>
      current.map((ing) => (ing.id === id ? { ...ing, quantidade } : ing))
    );
  };

  const onFinalizarCompra = () => {
    setCarrinhoAberto(false);
    navigate('/checkout');
  };

  return (
    <>
      <BannerEvento
        nome={evento.nome}
        data={dataFormatada}
        dias={`${horaFormatada}`}
        local={evento.local}
        imagemBanner={evento.imagemBanner}
        imagemCartaz={evento.imagemCartaz ?? evento.imagem}
        abrirCarrinho={abrirCarrinho}
      />

      <Container size="lg" py="xl">
        <Stack gap="lg">
          {evento.descricao ? (
            <>
              <Title order={3} mb="sm" c="green">
                Sobre o evento
              </Title>
              <Text mb="md">{evento.descricao}</Text>
            </>
          ) : (
            <>
              <Title order={3} mb="sm" c="green">
                Sobre o evento
              </Title>
              <Text mb="md" color="dimmed">
                Descrição do evento não disponível.
              </Text>
            </>
          )}

          <Group justify="space-around" mt="md">
            <Stack align="center" gap={4}>
              <IconCalendar color="#92D500" size={32} />
              <Text size="sm" ta="center">{dataFormatada}</Text>
            </Stack>
            <Stack align="center" gap={4}>
              <IconMapPin color="#92D500" size={32} />
              <Text size="sm" ta="center">{evento.local}</Text>
            </Stack>
            <Stack align="center" gap={4}>
              <IconClock color="#92D500" size={32} />
              <Text size="sm" ta="center">A partir das {horaFormatada}</Text>
            </Stack>
          </Group>

          {Array.isArray(evento.estrutura) && evento.estrutura.length > 0 && (
            <>
              <Title order={4} mt="xl">Estrutura</Title>
              <ul style={{ paddingLeft: 20, marginTop: 8, marginBottom: 8 }}>
                {evento.estrutura.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>
                    <Text size="sm">{item}</Text>
                  </li>
                ))}
              </ul>
            </>
          )}

          {Array.isArray(evento.setores) && evento.setores.length > 0 && (
            <>
              <Title order={4} mt="xl">Setores contemplados</Title>
              <ul style={{ paddingLeft: 20, marginTop: 8, marginBottom: 8 }}>
                {evento.setores.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>
                    <Text size="sm">{item}</Text>
                  </li>
                ))}
              </ul>
            </>
          )}

          {evento.endereco && (
            <>
              <Divider my="xl" />
              <Stack gap={4}>
                <Text fw={600}>Local</Text>
                <Text>{evento.endereco}</Text>
                {evento.linkMapa && (
                  <Button
                    component="a"
                    href={evento.linkMapa}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftSection={<IconMap size={18} />}
                    variant="light"
                    color="#92D500"
                    radius="xl"
                    w="fit-content"
                  >
                    Ver no mapa
                  </Button>
                )}
              </Stack>
            </>
          )}

          <Divider my="xl" />
          <Text ta="center" size="sm" c="dimmed">
            <Anchor href="#" style={{ color: '#92D500' }}>Termos e políticas</Anchor> |{' '}
            <Anchor href="#" style={{ color: '#92D500' }}>Denunciar este evento</Anchor>
          </Text>
        </Stack>
      </Container>

      <Carrinho
        opened={carrinhoAberto}
        onClose={() => setCarrinhoAberto(false)}
        ingressos={ingressos}
        onQuantidadeChange={onQuantidadeChange}
        onFinalizarCompra={onFinalizarCompra}
      />
    </>
  );
};

export default PaginaEvento;
