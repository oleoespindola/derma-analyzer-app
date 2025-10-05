import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ButtonIco from "../../components/common/buttonIco";
import History from "./history";

const Common = () => {

    const navigate = useNavigate();

    const [navOpen, setNavOpen] = useState<boolean>(false);

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <>
            <div className="flex w-full h-full bg-neutral-100">

                {navOpen ?
                    <div className="flex justify-center bg-neutral-300 w-6/12 h-full lg:w-2/12">
                        <div className="flex flex-col w-full h-full justify-between pt-2 pb-2">

                            <div className="flex-col">
                                <ButtonIco src="./menu.svg" alt='Recolher Menu' onClick={() => setNavOpen(!navOpen)} />
                                <br />
                                <div className="ml-4 mr-4 gap-x-2">
                                    Bem Vindo, {localStorage.getItem("name")}!
                                </div>
                            </div>

                            <ButtonIco src='./logout.svg' alt='Sair' onClick={logout} text="Sair" />

                        </div>
                    </div>
                    :
                    <div className="flex justify-center bg-neutral-300 w-2/12 h-full lg:w-15">
                        <div className="flex flex-col w-full h-full justify-between items-center pt-2 pb-2">

                            <ButtonIco src="./menu.svg" alt='Expandir Menu' onClick={() => setNavOpen(!navOpen)} />
                            <ButtonIco src='./logout.svg' alt='Sair' onClick={logout} />

                        </div>
                    </div>
                }

                <History />
            </div>
        </>
    )
}

export default Common;