export interface User {
    id: number;
    ativo: number;
    usuario: string;
    email: string;
    password: string;
}

export interface UserPermissaoVendedor {
    idUser: number;
    idPermissao: number;
}
