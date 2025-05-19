import { IconHeart, IconMapPin, IconCalendar, IconClock } from '@tabler/icons-react';
import { Button, Card, Group, Image, Text } from '@mantine/core';
import classes from './CardEvents.module.css';
import { Eventos } from '../../Interface/Dados/Events';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardEventosProps {
    evento: Eventos;
}

export function CardEventos({ evento }: CardEventosProps) {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={evento.imagem} alt={evento.nome} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="md" fw={500} className={classes.title}>
                        {evento.nome}
                    </Text>
                </Group>
                <Text fz="xs" mt="0.1rem" className={classes.infoCard}>
                    <IconCalendar stroke={1.5} size={16} />{evento.dataTime.getDate().toString().padStart(2, '0')}/{(evento.dataTime.getMonth() + 1).toString().padStart(2, '0')}/{evento.dataTime.getFullYear()}
                </Text>
                <Text fz="xs" mt="0.1rem" className={classes.infoCard}>
                    <IconClock stroke={1.5} size={16} />{evento.dataTime.getHours().toString().padStart(2, '0')}:{evento.dataTime.getMinutes().toString().padStart(2, '0')}
                </Text>
                <Text fz="xs" mt="0.1rem" className={classes.infoCard}>
                    <IconMapPin stroke={1.5} size={16} />{evento.local}
                </Text>
            </Card.Section>

            <Group mt="xs">
                <Button
                    radius="md"
                    style={{ flex: 1 }}
                    color="var(--primaria-verde)"
                    onClick={() => navigate(`/evento/${evento.id}`)}
                >
                    Detalhes
                </Button>
                <Button radius="md" variant="transparent" color="transparent" onClick={() => setLiked(!liked)}>
                    <IconHeart style={{ fill: liked ? 'red' : '' }} className={`${classes.like} ${liked ? classes.liked : ''}`} stroke={1.5} />
                </Button>
            </Group>
        </Card>
    );
}
