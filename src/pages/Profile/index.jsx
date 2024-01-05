import { Container, Avatar, Form } from "./style";
import { Link } from "react-router-dom";

import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { FiMail, FiLock, FiCamera, FiArrowLeft, FiUser} from "react-icons/fi"

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Avatar>
                <img 
                src="https://github.com/Saittu.png" 
                alt="User Image" />
                <label htmlFor="avatar">
                    <FiCamera/>
                    <input
                    id="avatar"
                    type="file"
                    />
                </label>
            </Avatar>

            <Form>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}