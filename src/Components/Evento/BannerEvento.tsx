import React from "react";
import { Box, Button, Group, Image, Overlay, Stack, Text, Title } from "@mantine/core";
import { IconCalendarEvent, IconClock, IconMapPin } from "@tabler/icons-react";
import { BannerEventoProps } from "../../Interface/BannerEvento";
import classes from "./BannerEvento.module.css";

interface BannerEventoPropsComCarrinho extends BannerEventoProps {
  abrirCarrinho: () => void;
}

const BannerEvento: React.FC<BannerEventoPropsComCarrinho> = ({ nome, data, dias, local, imagemBanner, imagemCartaz, abrirCarrinho, }) => {
  return (
    <Box
      className={classes.banner}
      style={{ backgroundImage: `url(${imagemBanner})` }}
      pos="relative"
    >
      <Overlay color="#000" opacity={0.90} zIndex={0} />
      <Group justify="space-between" maw={1200} mx="auto" p="xl" className={classes.content}>
        <Stack gap="sm" className={classes.info}>
          <Title order={1} className={classes.titulo}>{nome}</Title>
          <Stack gap={4} className={classes.lista}>
            <Group><IconCalendarEvent size={18} /><Text>{data}</Text></Group>
            <Group><IconClock size={18} /><Text>{dias}</Text></Group>
            <Group><IconMapPin size={18} /><Text>{local}</Text></Group>
          </Stack>
          <Button
            color="lime"
            radius="md"
            size="md"
            mt="sm"
            fw={700}
            onClick={abrirCarrinho}
          >
            Comprar ingresso
          </Button>
        </Stack>
        <Box className={classes.imagemCartazContainer}>
          <Image src={imagemCartaz} alt={`Cartaz do evento ${nome}`} radius="md" />
        </Box>
      </Group>
    </Box>
  );
};

export default BannerEvento;
