import { Button, ButtonProps } from '@mantine/core';
import { FacebookIcon } from './FacebookIcon';
import classes from './botoes.module.css';

export function FacebookButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
    return <Button radius="lg" leftSection={<FacebookIcon />} className={classes.facebookButton} {...props} />;
}