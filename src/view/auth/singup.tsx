import Button from "../../components/common/button";
import InputText from "../../components/common/inputText";

const SingUp = () => {
    return (
        <>
            <div className="flex flex-col gap-y-4 w-full">
                <InputText type="text" placeHolder="Nome" />
                <InputText type="email" placeHolder="E-mail" />
                <InputText type="password" placeHolder="Senha" />
                <Button text="Cadastrar"/>
            </div>
        </>
    )
}

export default SingUp;