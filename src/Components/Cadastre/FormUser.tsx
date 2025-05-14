import { Grid, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';
import { useState } from 'react';
import { formatCPF, formatTelefone } from '../../Services/Supabase/Mask';
import { IconCalendar } from '@tabler/icons-react';
import { CadastroUsuarioItf } from '../../Interface/CadastroUsuario';

export function FormCadastre(titulo: CadastroUsuarioItf) {
    const [cpf_cnpj, setCpfCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    return (
        <>
            <h2>{titulo.titulo}</h2>
            <Grid grow gutter="xs">
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                    <TextInput
                        radius="md"
                        label="Nome"
                        withAsterisk
                        required
                        placeholder="EX: João Silva"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 2 }}>
                    <DatePickerInput
                        radius="md"
                        valueFormat="DD/MM/YYYY"
                        locale='pt-BR'
                        minDate={dayjs().subtract(100, 'year').toDate()}
                        maxDate={dayjs().subtract(18, 'year').toDate()}
                        withAsterisk
                        required
                        label="Data de Nascimento"
                        placeholder="EX: 01/01/2000"
                        clearable
                        leftSection={<IconCalendar size={18} stroke={1.5} />}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 3 }}>
                    <TextInput
                        value={telefone}
                        onChange={(event) => setTelefone(formatTelefone(event.currentTarget.value))}
                        label="Telefone"
                        placeholder="EX: (00) 0 0000-0000"
                        withAsterisk
                        radius="md"
                        required
                        maxLength={16}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 4 }}>
                    <TextInput
                        value={cpf_cnpj}
                        onChange={(event) => setCpfCnpj(formatCPF(event.currentTarget.value))}
                        label="CPF | CNPJ"
                        placeholder="EX: 000.000.000-00 | 00.000.000/0000-00"
                        withAsterisk
                        radius="md"
                        required
                        maxLength={18}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 4 }}>
                    <TextInput
                        label="email"
                        placeholder="EX: email@email.com"
                        withAsterisk
                        radius="md"
                        required
                        maxLength={150}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 3 }}>
                    <TextInput
                        label="Usuário"
                        placeholder="EX: joao_silva"
                        withAsterisk
                        radius="md"
                        required
                        maxLength={40}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 5 }}>
                    <TextInput
                        label="Senha"
                        placeholder="EX: ********"
                        withAsterisk
                        radius="md"
                        required
                        maxLength={20}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 5 }}>
                    <TextInput
                        label="Confirmar Senha"
                        placeholder="EX: ********"
                        withAsterisk
                        radius="md"
                        required
                        maxLength={20}
                    />
                </Grid.Col>
            </Grid>
        </>
    );
}