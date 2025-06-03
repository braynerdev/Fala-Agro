import { Container, Group } from "@mantine/core";
import classes from "../Header.module.css";
import logoFalaAgro from "../../assets/img/Cópia de FALA-AGRO_logo-primária.png"
import { Image } from "@mantine/core";

export function Header() {

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group wrap='nowrap' justify="center" align="center">
          <Image src={logoFalaAgro} w={200} />
        </Group>
      </Container>
    </div>
  );
}