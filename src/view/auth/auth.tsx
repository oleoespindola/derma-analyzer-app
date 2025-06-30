import { useState } from "react";
import SingIn from "./singIn";
import SingUp from "./singUp";
import Link from "../../components/common/link";



const Auth = () => {

    const [singIn, setSingIn] = useState(true);
    const toggleForm = () => {
        setSingIn((singIn) => !singIn);
    }


    return (
        <>
            <div className="flex w-full h-full justify-center bg-neutral-800">
                <div className="flex flex-col w-full h-full justify-center items-center">

                    <div className="flex w-10/12 lg:w-8/12 justify-center bg-neutral-900 rounded-lg">
                        <div className="flex flex-col shadow-lg p-5 items-center gap-y-5 w-full md:w-3/8 ">

                            <div className="flex gap-x-2">
                                <img src="./app-ico.svg" alt="Logo da Página" width={25} />
                                <div>Derma Analizer</div>
                            </div>

                            {singIn ? <SingIn /> : <SingUp />}

                            <span className="w-full border-b-1 border-neutral-500"></span>

                            <div className="flex gap-x-2">
                                <Link onClick={toggleForm} text={singIn ? 'Cadastre-se' : 'Login'} />
                                {singIn && <Link text="Esquceu a senha?" />}
                            </div>

                        </div>
                        <div className="hidden lg:flex md:w-5/8 justify-center">
                            <div className="flex flex-col w-full justify-center text-center gap-y-8 p-4">

                                <p className="text-2xl">Bem Vindo!</p>
                                <p>Este sistema utiliza inteligência artificial para auxiliar na análise de imagens de pele, com foco em possíveis sinais de câncer. </p>
                                <div className="flex justify-center">
                                    <img src="./undraw_science.svg" alt="Cientista" width={150} />
                                </div>
                                <p><strong>Atenção:</strong> os resultados apresentados não substituem uma avaliação médica profissional. <strong>Este projeto é experimental.</strong></p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Auth;