import { Button, ButtonProps } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';
import classes from './Buttons.module.css';

export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
    return <Button radius="lg" leftSection={<GoogleIcon />} variant="default" className={classes.googleButton} {...props} />;
}