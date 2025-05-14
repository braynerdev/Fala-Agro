import { useEffect, useState } from 'react';
import { Estados } from '../Interface/Estados';
import { Notifications } from '@mantine/notifications';

export function useRequisicaoEstados() {
    const [listaEstados, setListaEstados] = useState<{ value: string, label: string }[]>([]);

    useEffect(() => {
        fetch('https://brasilapi.com.br/api/ibge/uf/v1')
            .then(response => response.json())
            .then((data: Estados[]) => {
                console.log(data);
                const estados = data.map((item) => ({
                    value: item.sigla,
                    label: item.nome,
                }));
                setListaEstados(estados);
            })
            .catch((error) => {
                console.error('Erro ao buscar estados:', error);
            });
    }, []);

    return listaEstados;
}

export function useRequisicaoCep() {
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estadoSelecionado, setEstadoSelecionado] = useState('');

    useEffect(() => {
        if (cep.length === 9) {
            fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
                .then(response => response.json())
                .then(data => {
                    if (data.name == "CepPromiseError") {
                        setLogradouro('');
                        setBairro('');
                        setCidade('');
                        setEstadoSelecionado('');
                        Notifications.show({
                            title: 'Erro ao buscar CEP',
                            color: 'red',
                            message: 'CEP inválido ou não encontrado.',
                        });
                        return;
                    } else {
                        setLogradouro(data.street || '');
                        setBairro(data.neighborhood || '');
                        setCidade(data.city || '');
                        setEstadoSelecionado(data.state || '');
                        Notifications.show({
                            title: 'CEP encontrado',
                            color: 'green',
                            message: 'CEP encontrado com sucesso.',
                        });
                    }

                })
                .catch(() => {
                    setLogradouro('');
                    setBairro('');
                    setCidade('');
                    setEstadoSelecionado('');
                    Notifications.show({
                        title: 'Erro ao buscar CEP',
                        color: 'red',
                        message: 'CEP inválido ou não encontrado.',
                    });
                });
        }
    }, [cep]);
    return {
        cep, setCep,
        logradouro, setLogradouro,
        bairro, setBairro,
        cidade, setCidade,
        estadoSelecionado, setEstadoSelecionado,
    };
}
