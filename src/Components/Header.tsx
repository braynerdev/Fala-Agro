import { useState } from 'react';
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconHome,
  IconSettings,
  IconStar,
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
  Anchor
} from '@mantine/core';
import logoFalaAgro from '../assets/img/Cópia de FALA-AGRO_logo-primária.png';
import classes from './Header.module.css';
import { supabase } from '../Servico/Supabase/Supabase';
import { useEffect } from 'react';
import { User } from '@supabase/supabase-js'
import { Avatar } from '@mantine/core';
import { useNavigate } from "react-router-dom";








export function Header() {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const logout = async () => {
    let { error } = await supabase.auth.signOut()
    if (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
    setUser(null);
  }
  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Erro ao pegar usuário:", error.message);
      } else {
        setUser(data.user);
      }
    }
    fetchUser();
  }, []);
  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group wrap='nowrap' justify="space-between">
          <Anchor href="/" component="a"><Image src={logoFalaAgro} w={200} /></Anchor>
          <Group>
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              leftSection={<IconSearch size={20} stroke={2} />}
              data={['Evento1', 'Evento2', 'Evento3', 'Evento4', 'Evento5']}
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
            {user?.id ? (
              <div>
                <Menu.Target>
                  <UnstyledButton
                    className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                  >
                    <Group gap={5} ta="center" w="max-content">
                      {user?.user_metadata?.img ? (
                        <Image radius={30} src={user?.user_metadata?.img} w={36} />
                      ) : (
                        <Avatar radius={30} name={user?.user_metadata?.nome} color="initials" w={36} />
                      )}
                      {innerWidth > 900 ? (
                        <Text fw={500} size="md" lh={1} mr={1}>
                          {user?.user_metadata?.displayName}
                        </Text>
                      ) : null}
                      <IconChevronDown size={16} stroke={2} />
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  {user?.user_metadata?.vendedor === true ? (
                    <>
                      <Menu.Item leftSection={<IconHome size={16} color={theme.colors.green[6]} stroke={1.5} />} onClick={() => navigate('/area-do-vendedor/perfil')}>
                        Area do Vendedor
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
                      <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />} onClick={() => logout()}>
                        Logout
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
                      <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />} onClick={() => logout()}>
                        Logout
                      </Menu.Item>

                      <Menu.Divider />
                    </>
                  )}
                </Menu.Dropdown>
              </div>
            ) : (
              <div className={classes.DivButtonLog}>
                <Button component="a" href="/login" radius="lg" variant="default" className={classes.buttonLog}>Entrar</Button>
              </div>

            )}
          </Menu>
        </Group>
      </Container>
    </div>
  );
}