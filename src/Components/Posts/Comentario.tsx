import { Avatar, Group, Text } from '@mantine/core';

interface ComentarioProps {
    avatar: string;
    nome: string;
    tempo: string;
    comentario: string;
}

export function Comentario({ avatar, nome, tempo, comentario }: ComentarioProps) {
  return (
    <div>
      <Group>
        <Avatar
          src={avatar}
          alt={nome}
          radius="xl"
        />
        <div>
          <Text size="sm">{nome}</Text>
          <Text size="xs" c="dimmed">
            {tempo} minutos atrás
          </Text>
        </div>
      </Group>
      <Text pl={54} pt="sm" size="sm" w={400}>
        {comentario}
      </Text>
    </div>
  );
}