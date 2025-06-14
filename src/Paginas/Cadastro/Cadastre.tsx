import classes from './Cadastre.module.css'
import { Button, Flex, Grid, TextInput, Select, Text, Popover, Box, Progress, PasswordInput } from '@mantine/core'
import { useState, FormEvent } from 'react'
import { useRequisicaoEstados, useRequisicaoCep } from '../../Servico/Requisicoes'
import { formatNumero, formatCep, formatCPF, formatTelefone } from '../../Servico/Mascaras'
import { IconCalendar, IconX, IconCheck } from '@tabler/icons-react'
import '@mantine/dates/styles.css';
import { supabase } from '../../Servico/Supabase/Supabase';
import { useNavigate } from "react-router-dom";
import { Notifications } from '@mantine/notifications';



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
const formatDate = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/([0-9]{2})([0-9]{2})/, '$1/$2')
      .replace(/([0-9]{2})([0-9]{2})/, '$1/$2')
      .replace(/([0-9]{4})$/, '$1');
  };

export function Cadastre() {
    
 
    const [cpf_cnpj, setCpfCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [numero, setNumero] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [complemento, setComplemento] = useState('');
    const navigate = useNavigate();

    const cadastroUsuario = (e:FormEvent) => {
        e.preventDefault();
        let valido: boolean = true;
    
        if (nome.split(' ').length < 2) {
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'Nome inválido, Precisa ter pelo menos 2 nomes',
                
                autoClose: 5000,
              });;
            valido = false;
        }
        const formatacao_dt_nascimento = dataNascimento?.split('/');
        const dia = parseInt(formatacao_dt_nascimento![0]);
        const mes = parseInt(formatacao_dt_nascimento![1]);
        const ano = parseInt(formatacao_dt_nascimento![2]);

        if (dataNascimento?.length != 10){
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'Data de nascimento inválida, Precisa ter 8 caracteres',
                autoClose: 5000,
              });;
            valido = false;
        }

        if (dia > 31 || dia < 1 || mes > 12 || mes < 1 || ano > new Date().getFullYear() - 18 || ano < 1900){
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'Data de nascimento inválida',
                autoClose: 5000,
              });;
            valido = false;
        }
        if (telefone.length < 16){
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'Telefone inválido, Precisa ter pelo menos 14 caracteres',
                autoClose: 5000,
              });;
            valido = false;
        }
        if (cpf_cnpj.length != 14 && cpf_cnpj.length != 18){
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'CPF|CNPJ inválido, Precisa ter 14 caracteres ou 18 caracteres',
                autoClose: 5000,
              });;
            valido = false;
        }
        const emailSplit = email.split('@');
        if (emailSplit.length !== 2 ||
            !emailSplit[1].includes('.') ||
            emailSplit[1].split('.').pop()!.length < 2){
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'Email inválido',
                autoClose: 5000,
              });;
            valido = false;
        }
        
        if (senha && !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(senha)){
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'Senha inválida, Precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula, um número e um símbolo especial',
                autoClose: 5000,
              });;
            valido = false;
        }
        if (senha !== confirmarSenha){
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'Senhas não coincidem',
                autoClose: 5000,
              });;
            valido = false;
        }
        if (cep.length != 9){
            Notifications.show({
                title: 'Erro ao fazer cadastro',
                color: 'red',
                message: 'CEP inválido, Precisa ter 8 caracteres',
                autoClose: 5000,
              });;
            valido = false;
        }
        
        if (valido){
            CadastreUsuario(e);
        }
                
    }
    const CadastreUsuario = async (e: FormEvent) => {
        e.preventDefault();
        let { error } = await supabase.auth.signUp({
            email: email,
            password: senha,
            options: {
                data: {
                    displayName: usuario,
                    nome: nome,
                    telefone: telefone,
                    cpf_cnpj: cpf_cnpj,
                    dataNascimento: dataNascimento,
                    cep: cep,
                    logradouro: logradouro,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estadoSelecionado,
                    phone: numero,
                    complemento: complemento,
                    vendedor: true,
                    admin: false,
                }
            }
        })

        if (error) {
            return error.message;
        }


        navigate('/login');
    }

    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(senha)} />
    ));

    const strength = getStrength(senha);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';


    const listaEstados = useRequisicaoEstados();
    const { cep, setCep, logradouro, setLogradouro, bairro, setBairro, cidade, setCidade, estadoSelecionado, setEstadoSelecionado } = useRequisicaoCep();

    return (
        <div className={classes.container}>
            <div className={classes.cardContainer}>
                <main>
                    <form onSubmit={cadastroUsuario}>
                        <div className={classes.formDiv}>
                            <h2>Usuário</h2>
                            <Grid grow gutter="xs">
                                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}>
                                    <TextInput
                                        radius="md"
                                        label="Nome"
                                        withAsterisk
                                        required
                                        value={nome}
                                        onChange={(event) => setNome(event.currentTarget.value)}
                                        placeholder="EX: João Silva"
                                        
                                    />
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 2 }}>
                                    <TextInput
                                        label="Data de Nascimento"
                                        placeholder="EX: 01/01/2000"
                                        leftSection={
                                            <IconCalendar size={18} stroke={1.5} />
                                        }
                                        required
                                        maxLength={10}
                                        minLength={10}
                                        value={dataNascimento || ''}
                                        onChange={(event) => setDataNascimento(formatDate(event.currentTarget.value))}
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
                                        type="email"
                                        placeholder="EX: email@email.com"
                                        withAsterisk
                                        radius="md"
                                        required
                                        value={email}
                                        onChange={(event) => setEmail(event.currentTarget.value)}
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
                                        value={usuario}
                                        onChange={(event) => setUsuario(event.currentTarget.value)}
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
                                                    value={senha}
                                                    required
                                                    radius="md"
                                                    onChange={(event) => setSenha(event.currentTarget.value)}
                                                />
                                            </div>
                                        </Popover.Target>
                                        <Popover.Dropdown>
                                            <Progress color={color} value={strength} size={5} mb="xs" />
                                            <PasswordRequirement label="Senha deve ter pelo menos 6 caracteres" meets={senha.length > 5} />
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
                                        required
                                        value={confirmarSenha}
                                        onChange={(event) => setConfirmarSenha(event.currentTarget.value)}
                                    />
                                </Grid.Col>
                            </Grid>
                        </div>



                        <div className={classes.formDiv}>
                            <h2>Endereço</h2>
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
                                        value={complemento}
                                        onChange={(event) => setComplemento(event.currentTarget.value)}
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
                                        required
                                    />
                                </Grid.Col>
                            </Grid>
                        </div>


                        <Flex>
                            <Button variant="filled" bg="var(--primaria-verde)" size="md" radius="xl" type="submit">Enviar</Button>
                        </Flex>
                    </form>
                </main>
            </div>
        </div>
    );
}