import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  Text,
  TextInput,
  Title,
  PasswordInput,
  Image,
  Flex,

} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './Login.module.css';
import logoFalaAgro from '../assets/img/Cópia de FALA-AGRO_logo-primária.png';
import { GoogleButton } from '../Components/Login/ButtonGoogle';
import { FacebookButton } from '../Components/Login/ButtonFacebook';
import { useState, FormEvent } from 'react';
import { supabase } from '../Services/Supabase/Supabase';
import { useNavigate } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const login = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });
    if (error) {
      return Notifications.show({
        title: 'Erro ao fazer login',
        color: 'red',
        message: 'Email ou senha inválidos',
        autoClose: 5000,
        classNames: {
          root: classes.notification,
        },
      });;
    }
    navigate('/index');
  };
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          <Image
            radius="md"

            src={logoFalaAgro} alt="Logo FalaAgro"
          />
        </Title>
        <Flex
          direction={'column'}
          className={classes.socialButtons}

        >
          <GoogleButton>Entrar com Google</GoogleButton>
          <FacebookButton>Entrar com Facebook</FacebookButton>
        </Flex>
        <Text ta="center" mt="md" className={classes.text}>
          ou faça login com e-mail
        </Text>

        <form onSubmit={login}>
          <TextInput
            classNames={{ input: `${classes.formInputs} ${form.errors.email ? classes.inputError : ''}` }}
            label="Email"
            placeholder="hello@gmail.com"
            size="lg"
            radius="lg"
            required={true}
            key={form.key('email')}
            {...form.getInputProps('email')}
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <PasswordInput
            classNames={{ input: `${classes.formInputs} ${form.errors.password ? classes.inputError : ''}`, visibilityToggle: classes.visibilityToggle }}
            label="Senha"
            placeholder="*********"
            mt='1%'
            size="lg"
            radius="lg"
            required={true}
            key={form.key('password')}
            {...form.getInputProps('password')}
            value={senha}
            onChange={(event) => setSenha(event.currentTarget.value)}
          />
          <Checkbox
            classNames={{ input: classes.formInputs }}
            color="var(--primaria-verde)"
            label="Lembrar de mim"
            mt="5%"
            size="md"
            radius="lg"
          />
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: 'var(--primaria-verde)', to: 'var(--secundaria-verde-claro-fechado)', deg: 90 }}
            fullWidth
            mt="5%"
            size="md"
            radius="lg"
            className={classes.button}
          >
            Login
          </Button>
        </form>

        <Text className={classes.Cadastrese} ta="center" mt="2%">
          Não tem uma conta?{' '}
          <Anchor c="var(--primaria-verde)" href="/cadastro/usuario" fw={700} underline="hover" className={classes.linkCadastro}>
            Cadastre-se
          </Anchor>
        </Text>
      </Paper>
    </div >
  );
}