import { Paper } from "@mantine/core";
import classes from "./CardNews.module.css";
import { Text } from "@mantine/core";
import { Title } from "@mantine/core";
import { Noticias } from "../../Interface/Dados/News";

export interface CardNoticiaProps {
    noticias: Noticias[];
    title: string;
}


export function CardNoticia({ noticias, title }: CardNoticiaProps) {
    return (
        <>
            <div className={classes.titleContainer}>{title}</div>
            <div className={classes.container}>
                <div className={classes.noticiaPrincipal}>
                    {noticias.filter((item) => item.principal === true && item.ativo === true).sort(() => Math.random() - 0.5).slice(0, 1).map((item) => (
                        <Paper
                            shadow="md"
                            p="xl"
                            radius="md"
                            style={{ backgroundImage: `url(${item.image})` }}
                            className={classes.card}
                        >
                            <div>
                                <Text className={classes.category} size="xs">
                                    {item.category}
                                </Text>
                                <Title order={3} className={classes.title}>
                                    {item.title}
                                </Title>
                            </div>
                        </Paper>
                    ))}
                </div>
                <div className={classes.noticiaSecundaria}>
                    {noticias.filter((item) => item.ativo === true && item.principal === false).sort(() => Math.random() - 0.5).slice(0, 4).map((item) => (
                        <Paper
                            shadow="md"
                            p="xl"
                            radius="md"
                            style={{ backgroundImage: `url(${item.image})` }}
                            className={classes.card}

                        >
                            <div>
                                <Text className={classes.category} size="xs">
                                    {item.category}
                                </Text>
                                <Title order={3} className={classes.title}>
                                    {item.title}
                                </Title>
                            </div>
                        </Paper>
                    ))}
                </div>
            </div>
        </>
    );
}