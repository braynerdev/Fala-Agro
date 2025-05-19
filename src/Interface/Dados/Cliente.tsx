export interface Cliente {
    nome: string;
    data_nascimento: Date;
    foto_perfil?: string;    
    cpf_cnpj: string;
}