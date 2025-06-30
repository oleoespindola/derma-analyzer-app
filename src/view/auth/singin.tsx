import Button from "../../components/common/button";
import InputText from "../../components/common/inputText";

const SingIn = () => {
    return (
        <>
            <div className="flex flex-col gap-y-4 w-full">
                <InputText type="email" placeHolder="E-mail" />
                <InputText type="password" placeHolder="Senha" />
                <Button text="Entrar"/>
            </div>
        </>
    )
}

export default SingIn;