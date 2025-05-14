import { supabase } from "./Supabase";


export const handleLogin = async (email: string, password: string, setError: Function) => {
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        setError(error.message);
        return;
    }

    console.log("Login bem-sucedido!");
};


