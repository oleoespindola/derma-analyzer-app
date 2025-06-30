import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ButtonIco from "../../components/common/buttonIco";

const Common = () => {

    const navigate = useNavigate();

    const [navOpen, setNavOpen] = useState<boolean>(false);

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <>
            <div className="flex justify-center w-full h-full bg-neutral-800">
                <div className="flex flex-col justify-center w-full h-full">

                    {navOpen?
                        <div className="flex justify-center bg-neutral-900 w-6/12 h-full lg:w-2/12">
                            <div className="flex flex-col w-full h-full justify-between pt-2 pb-2">
                                
                                <ButtonIco src="./menu.svg" alt='Recolher Menu' onClick={() => setNavOpen(!navOpen)} />

                                <ButtonIco src='./logout.svg' alt='Sair' onClick={logout} text="Sair"/>

                            </div>
                        </div>
                        :
                        <div className="flex justify-center bg-neutral-900 w-2/12 h-full lg:w-15">
                            <div className="flex flex-col w-full h-full justify-between pt-2 pb-2">
                                
                                <ButtonIco src="./menu.svg" alt='Expandir Menu' onClick={() => setNavOpen(!navOpen)} />
                                <ButtonIco src='./logout.svg' alt='Sair' onClick={logout}/>

                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default Common;