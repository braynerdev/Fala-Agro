export interface Ingresso {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

export interface CarrinhoProps {
  opened: boolean;
  onClose: () => void;
  ingressos: Ingresso[];
  onQuantidadeChange: (id: number, quantidade: number) => void;
  onFinalizarCompra: () => void;
}
