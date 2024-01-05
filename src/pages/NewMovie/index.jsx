import { FiArrowLeft } from "react-icons/fi"

import { Container, Form, Content } from "./style";

import { Link } from "react-router-dom";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { TextArea } from "../../Components/TextArea";
import { NoteItem } from "../../Components/NoteItem";

export function NewMovie(){
    return (
        <Container>
            <Header/>

            <Link to="/">
                <ButtonText
                    icon={FiArrowLeft}
                    title="Voltar"
                />
            </Link>

            <main>
                <Content>
                    <header>
                        <h1>Novo Filme</h1>
                    </header>

                    <Form>
                        <div className="twoColumns">
                            <Input
                                placeholder="Título"
                                type="text"
                            />

                            <Input
                                placeholder="Sua nota (de 0 a 5)"
                                type="number"
                                min="0"
                                max="5"
                            />
                        </div>
                        <TextArea 
                            placeholder="observações"
                        />

                        <Section className="New" title="Marcadores">
                            <div className="tags">
                                <NoteItem value="Comédia"/>
                                <NoteItem isNew placeholder="Nova tag"/>
                            </div>
                        </Section>
                        <div className="twoColumns">
                            <Button title="Limpar"/>
                            <Button title="Salvar alterações"/>
                        </div>
                    </Form>
                </Content>
            </main>

        </Container>

    )
}