import { Grid, TextInput, PasswordInput, Progress, Text, Popover, Box } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';
import { formatCPF, formatTelefone } from '../../Services/Supabase/Mask';
import { IconCalendar, IconX, IconCheck } from '@tabler/icons-react';
import { CadastroUsuarioItf } from '../../Interface/CadastroUsuario';
import { useState } from 'react';


function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
    return (
        <Text
            c={meets ? 'teal' : 'red'}
            style={{ display: 'flex', alignItems: 'center' }}
            mt={7}
            size="sm"
        >
            {meets ? <IconCheck size={14} /> : <IconX size={14} />}
            <Box ml={10}>{label}</Box>
        </Text>
    );
}
const requirements = [
    { re: /[0-9]/, label: 'Contém número' },
    { re: /[a-z]/, label: 'Contém letra minúscula' },
    { re: /[A-Z]/, label: 'Contém letra maiúscula' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Contém símbolo especial' },
];

function getStrength(password: string) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export function FormCadastre(titulo: CadastroUsuarioItf) {
    const [cpf_cnpj, setCpfCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [value, setValue] = useState('');
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
    ));

    const strength = getStrength(value);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';
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
                    <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
                        <Popover.Target>
                            <div
                                onFocusCapture={() => setPopoverOpened(true)}
                                onBlurCapture={() => setPopoverOpened(false)}
                            >
                                <PasswordInput
                                    withAsterisk
                                    label="Senha"
                                    placeholder="EX: ********"
                                    value={value}
                                    onChange={(event) => setValue(event.currentTarget.value)}
                                />
                            </div>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <Progress color={color} value={strength} size={5} mb="xs" />
                            <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
                            {checks}
                        </Popover.Dropdown>
                    </Popover>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 5 }}>
                    <PasswordInput
                        radius="md"
                        label="Confirmar Senha"
                        withAsterisk
                        placeholder="EX: ********"
                    />
                </Grid.Col>
            </Grid>
        </>
    );
}