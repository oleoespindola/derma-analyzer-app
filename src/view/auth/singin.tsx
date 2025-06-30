import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/common/button";
import InputText from "../../components/common/inputText";

import api from "../../services/api";

interface UserResponse {
    sub: string;
    name: string;
    token: string;
}

const SingIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password , setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    const handleSingIn = async ()  => {
        setLoading(true);
        try {
            const response = await api.post<UserResponse>('users/auth', {
                email: email,
                password: password
            })

            localStorage.setItem('sub', response.data.sub);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('token', response.data.token);

            navigate('/app')

        } catch (error: any) {
            alert(error.response.data.detail);
        }
        setLoading(false);
    }

    return (
        <>
            <div className="flex flex-col gap-y-4 w-full">
                <InputText type="email" placeHolder="E-mail" onChange={e => setEmail(e.target.value)} value={email}/>
                <InputText type="password" placeHolder="Senha" onChange={e => setPassword(e.target.value)} value={password}/>
                <Button text="Entrar" onClick={handleSingIn} loading={loading} />
            </div>
        </>
    )
}

export default SingIn;