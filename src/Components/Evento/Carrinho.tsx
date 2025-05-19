import React from "react";
import {
  Modal,
  Text,
  Stack,
  Divider,
  Box,
  Group,
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
      title={<Text fw={700} ta="center">Ingressos</Text>}
      size="lg"
      centered
    >
      {ingressos.length === 0 ? (
        <Text>Nenhum ingresso selecionado.</Text>
      ) : (
        <Stack gap={16}>
          {ingressos.map((ingresso) => (
            <div key={ingresso.id} className={styles.ingressoItem}>
              <Box>
                <Text className={styles.ingressoNome}>{ingresso.nome}</Text>
                <Text className={styles.ingressoPreco}>
                  R$ {ingresso.preco.toFixed(2)}
                </Text>
              </Box>

              <Group gap="xs" align="center">
                <button
                  className={styles.controleQuantidade}
                  onClick={() =>
                    onQuantidadeChange(ingresso.id, Math.max(ingresso.quantidade - 1, 0))
                  }
                  aria-label={`Diminuir quantidade de ${ingresso.nome}`}
                >
                  –
                </button>
                <Text>{ingresso.quantidade}</Text>
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

          <Divider />

          <div className={styles.totalGroup}>
            <Text>Total:</Text>
            <Text>R$ {total.toFixed(2)}</Text>
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
