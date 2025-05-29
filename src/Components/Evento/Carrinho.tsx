import React from "react";
import {
  Modal,
  Text,
  Stack,
  Divider,
  Box,
  Group
} from "@mantine/core";
import type { CarrinhoProps } from "../../Interface/Carrinho";
import styles from "./Carrinho.module.css";

const Carrinho: React.FC<CarrinhoProps> = ({
  opened,
  onClose,
  ingressos,
  onQuantidadeChange,
  onFinalizarCompra,
}) => {
  const total = ingressos.reduce(
    (acc, ingresso) => acc + ingresso.preco * ingresso.quantidade,
    0
  );

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text fw={700} ta="left">Ingressos</Text>}
      size="lg"
      centered
      withCloseButton
      radius="md"
      padding="lg"
    >
      {ingressos.length === 0 ? (
        <Text>Nenhum ingresso selecionado.</Text>
      ) : (
        <Stack gap="md">
          {ingressos.map((ingresso) => (
            <div key={ingresso.id} className={styles.ingressoItem}>
              <Box style={{ flexGrow: 1 }}>
                <Text fw={600}>{ingresso.nome}</Text>
                <Text size="sm">
                  R${ingresso.preco.toFixed(2)} <Text span c="dimmed">(+ R$15,00 taxa)</Text>
                </Text>
                <Text size="xs" c="dimmed">
                  venda até ##/##/####
                </Text>
              </Box>

              <Group gap={0} className={styles.quantidadeBox}>
                <button
                  className={styles.controleQuantidade}
                  onClick={() =>
                    onQuantidadeChange(ingresso.id, Math.max(ingresso.quantidade - 1, 0))
                  }
                  aria-label={`Diminuir quantidade de ${ingresso.nome}`}
                >
                  –
                </button>
                <Box className={styles.quantidadeValor}>{ingresso.quantidade}</Box>
                <button
                  className={styles.controleQuantidade}
                  onClick={() =>
                    onQuantidadeChange(ingresso.id, ingresso.quantidade + 1)
                  }
                  aria-label={`Aumentar quantidade de ${ingresso.nome}`}
                >
                  +
                </button>
              </Group>
            </div>
          ))}

          <Divider my="sm" />

          <div className={styles.totalGroup}>
            <Text fw={500}>Total:</Text>
            <Text fw={700}>R$ {total.toFixed(2)}</Text>
          </div>

          <button className={styles.botaoCompra} onClick={onFinalizarCompra}>
            Comprar
          </button>
        </Stack>
      )}
    </Modal>
  );
};

export default Carrinho;