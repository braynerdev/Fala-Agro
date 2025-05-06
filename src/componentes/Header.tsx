import { useState } from 'react';
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconHome,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
  IconSearch,
} from '@tabler/icons-react';
import cx from 'clsx';
import {
  Container,
  Group,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
  Image,
  Button,
  Autocomplete,
} from '@mantine/core';
import logoFalaAgro from '../assets/img/Cópia de FALA-AGRO_logo-primária.png';
import classes from './Header.module.css';
import { User } from '../Interface/User';
import { UsersData, UserPermission } from '../Data/DadosUsers';




function user(UsersData: User[]) {
  const usuario = UsersData.find(User => User.id === 0);
  const permissao = UserPermission.find(User => User.idUser === usuario?.id);
  if (permissao) {
    const user_permission = {
      usuario: usuario? usuario : null,
      permissao: permissao
    }
    return user_permission
  }else{
    const user_permission = {
      usuario: usuario,
      permissao: null
    }
    return user_permission
  }
};


export function Header() {
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group wrap='nowrap' justify="space-between">
          <Image src={logoFalaAgro} h={50} />
          <Group>
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              leftSection={<IconSearch size={20} stroke={2} />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
              visibleFrom="xs"
              size="md"
              radius="lg"
              limit={3}
            />
          </Group>
          <Menu
            width={240}
            position="bottom-start"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            {user(UsersData).usuario? (
              <div style={{ width: 'max-content' }}>
                <Menu.Target>
                  <UnstyledButton
                    className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                  >
                    <Group gap={7} ta="center">
                      <Image radius={30} src={user(UsersData)?.usuario?.img} h={36} />
                      <Text fw={500} size="md" lh={1} mr={1}>
                        {user(UsersData)?.usuario?.usuario}
                      </Text>
                      <IconChevronDown size={16} stroke={2} />
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  {user(UsersData)?.permissao?.idPermissao === 1 ? (
                    <>
                      <Menu.Item leftSection={<IconHome size={16} color={theme.colors.green[6]} stroke={1.5} />}>
                        <a href="/area-do-vendedor/perfil">Area do Vendedor</a>
                      </Menu.Item>
                      <Menu.Item leftSection={<IconHeart size={16} color={theme.colors.red[6]} stroke={1.5} />}>
                        Curtidas
                      </Menu.Item>
                      
                      <Menu.Item
                        leftSection={<IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />}
                      >
                        Eventos Favoritos
                      </Menu.Item>

                      <Menu.Label>Settings</Menu.Label>
                      <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                        Configurações
                      </Menu.Item>
                      <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
                        Trocar conta
                      </Menu.Item>
                      <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

                      <Menu.Divider />

                      <Menu.Label>Danger zone</Menu.Label>
                      <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
                        Deletar conta
                      </Menu.Item>
                    </>
                  ) : (
                    <>
                      <Menu.Item leftSection={<IconHeart size={16} color={theme.colors.red[6]} stroke={1.5} />}>
                        Curtidas
                      </Menu.Item>

                      <Menu.Item
                        leftSection={<IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />}
                      >
                        Eventos Favoritos
                      </Menu.Item>

                      <Menu.Label>Settings</Menu.Label>
                      <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                        Configurações
                      </Menu.Item>
                      <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
                        Trocar conta
                      </Menu.Item>
                      <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

                      <Menu.Divider />

                      <Menu.Label>Danger zone</Menu.Label>
                      <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
                        Deletar conta
                      </Menu.Item>
                    </>
                  )}
                </Menu.Dropdown>
              </div>
            ) : (
              <div className={classes.DivButtonLog}>
                <Button component="a" href="/login" radius="lg" variant="default" className={classes.buttonLog}>Entrar</Button>
                <Button component="a" href="/login" radius="lg" variant="default" className={classes.buttonLog}>Cadastre-se</Button>
              </div>

            )}
          </Menu>
        </Group>
      </Container>
    </div>
  );
}