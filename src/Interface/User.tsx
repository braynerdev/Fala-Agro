export interface User {
    id: number;
    name: string;
    usuario: string;
    email: string;
    password: string;
    img?: string;
}

export interface UserPermissaoVendedor {
    idUser: number;
    idPermissao: number;
}
