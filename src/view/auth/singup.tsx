import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/common/button";
import InputText from "../../components/common/inputText";

import api from "../../services/api";

interface UserResponse {
    sub: string;
    name: string;
    access_token: string;
}

const SingUp = () => {

    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSingUp = async () => {
        setLoading(true);
        try {
            const response = await api.post<UserResponse>('users/new', {
                name: name,
                email: email,
                password: password
            })

            localStorage.setItem('sub', response.data.sub);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('token', response.data.access_token);

            navigate('/app')
            
        } catch (error: any) {
            alert(error.response.data.detail);
        }
        setLoading(false);
    }

    return (
        <>
            <div className="flex flex-col gap-y-4 w-full">
                <InputText type="text" placeHolder="Nome" value={name} onChange={e => setName(e.target.value)} />
                <InputText type="email" placeHolder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <InputText type="password" placeHolder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                <Button text="Cadastrar" loading={loading} onClick={handleSingUp} />
            </div>
        </>
    )
}

export default SingUp;