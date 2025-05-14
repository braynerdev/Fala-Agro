


export const formatTelefone = (value: string) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{1})/, '($1) $2 ')
        .replace(/(\d{4})(\d{4})/, '$1-$2');
}


export const formatCPF = (value: string) => {
    if (value.length <= 14) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
}

export const formatNumero = (value: string) => {
    return value
        .replace(/\D/g, '');
}

export const formatCep = (value: string) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2');
}
