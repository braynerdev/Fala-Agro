import { Grid, TextInput, Select } from '@mantine/core'
import { CadastroUsuarioItf } from '../../Interface/CadastroUsuario'
import { formatNumero, formatCep } from '../../Services/Supabase/Mask'
import { useState } from 'react'
import { useRequisicaoEstados, useRequisicaoCep } from '../../Services/Requisicoes'

export function FormEndereco(titulo: CadastroUsuarioItf) {
    const [numero, setNumero] = useState('');
    
    const listaEstados = useRequisicaoEstados();
    const { cep, setCep, logradouro, setLogradouro, bairro, setBairro, cidade, setCidade, estadoSelecionado, setEstadoSelecionado } = useRequisicaoCep();
    
    return (
        <>
            <h2>{titulo.titulo}</h2>
            <Grid grow gutter="xs">
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <TextInput
                        maxLength={9}
                        radius="md"
                        label="CEP"
                        withAsterisk
                        required
                        placeholder="EX: 00000-000"
                        value={cep}
                        onChange={(event) => setCep(formatCep(event.currentTarget.value))}
                    />
                </Grid.Col>

                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <TextInput
                        radius="md"
                        value={logradouro}
                        onChange={(event) => setLogradouro(event.currentTarget.value)}
                        label="Logradouro"
                        withAsterisk
                        required
                        placeholder="EX: Rua, Avenida, Travessa, etc."
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <TextInput
                        maxLength={8}
                        value={numero}
                        onChange={(event) => setNumero(formatNumero(event.currentTarget.value))}
                        radius="md"
                        label="Número"
                        withAsterisk
                        required
                        placeholder="EX: 000"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <TextInput
                        radius="md"
                        label="Complemento"
                        placeholder="EX: Casa, Apt, etc."
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <TextInput
                        radius="md"
                        value={bairro}
                        onChange={(event) => setBairro(event.currentTarget.value)}
                        label="Bairro"
                        withAsterisk
                        required
                        placeholder="EX: Bairro"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <TextInput
                        radius="md"
                        value={cidade}
                        onChange={(event) => setCidade(event.currentTarget.value)}
                        label="Cidade"
                        withAsterisk
                        required
                        placeholder="EX: Cidade"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <Select
                        label="Estado"
                        placeholder="Selecione um estado"
                        data={listaEstados}
                        value={estadoSelecionado}
                        onChange={(value) => setEstadoSelecionado(value || '')}
                        withAsterisk
                        searchable
                    />
                </Grid.Col>
            </Grid>
            
        </>
    );
}
