import { Container, Profile } from "./style";

import { ButtonText } from "../ButtonText";
import { Input } from "../Input"

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input
                type="text"
                placeholder="Pesquisar pelo título."    
            />

            <Profile to="/Profile">
                <div>
                    <strong>Jean Antonio</strong>
                    <a href="#">
                        <ButtonText
                            title="Sair"
                        />
                    </a>
                </div>

                <img src="https://github.com/Saittu.png" alt="Image User" to="/Profile"/>
            </Profile>

        </Container>

    )
}