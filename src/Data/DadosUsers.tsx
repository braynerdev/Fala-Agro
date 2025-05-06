import { User, UserPermissaoVendedor } from '../Interface/User';

export const UsersData: User[] = [
    {
        id: 1,
        name: 'João Victor de Souza Brayner',
        usuario: 'braynerdev',
        email: 'joao@gmail.com',
        password: '120879Jvb@',
        img: 'https://github.com/braynerdev.png',
    },
    {
        id: 2,
        name: 'Maria de Souza',
        usuario: 'maria',
        email: 'maria@gmail.com',
        password: '1234Jvb@',
        img: 'https://github.com/Danlopesbraga.png',
    },
    {
        id: 3,
        name: 'Tota de Souza',
        usuario: 'tota',
        email: 'tota@gmail.com',
        password: '09876Jvb@',
        img: 'https://github.com/thomaseizinger.png',
    },
    {
        id: 4,
        name: 'Vinicius de Carvalho',
        usuario: 'vinicius',
        email: 'vinicius@gmail.com',
        password: '09876Jvb@',
        img: 'https://github.com/EricLBuehler.png',
    },
    {
        id: 5,
        name: 'alexandre',
        usuario: 'alexandre',
        email: 'alexandre@gmail.com',
        password: '09876Jvb@',
    }
]

export const UserPermission: UserPermissaoVendedor[] = [
    {
        idUser: 1,
        idPermissao: 1,
    },
    {
        idUser: 4,
        idPermissao: 2,
    }
]