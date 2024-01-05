import { FiMail, FiLock, FiArrowLeft} from "react-icons/fi"

import { Container, Form, Background } from "./style";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";


export function SignUp() {
    return (
        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Crie sua conta</h2>

                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiMail}
                />

                <Input
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                />

                <Button
                    
                    title="Cadastrar"
                />

                <Link to="/">
                    <FiArrowLeft/>
                    Voltar para o login
                </Link>

            </Form>

            <Background/>
        </Container>

    )
}