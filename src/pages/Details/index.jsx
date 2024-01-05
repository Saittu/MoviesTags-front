import { Container, Content } from "./style";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import { ButtonText } from "../../Components/ButtonText";
import { FiArrowLeft, FiClock } from "react-icons/fi"
import { Note } from "../../Components/Note";
import { Stars } from "../../Components/Stars";
import { Tags } from "../../Components/Tags";
import { Link } from "react-router-dom";

export function Details(){
    const created = new Date();
    created.setTime(created.getTime() - 3 * 3600000);
    const day = created.getDate();
    const month = created.toLocaleString('default', { month: '2-digit' });
    const year = String(created.getFullYear()).slice(-2);
    const hours = String(created.getHours()).padStart(2, '0');
    const minutes = String(created.getMinutes()).padStart(2, '0');


    return (
        <Container>
            <Header/>

            <div>
                <Link to="/">
                    <ButtonText
                        icon={FiArrowLeft}
                        title="voltar"
                    />
                </Link>
            </div>

            <main>
                <Content>
                    <header>
                        <div>
                            <h1>Beleza Verdadeira</h1>

                            <Stars rating={5}/>
                        </div>

                        <div>
                            <img src="https://github.com/Saittu.png" alt="User Image" />

                            <span>
                                Por Jean Antonio
                            </span>

                            <FiClock/>

                            <span>
                                {day}/{month}/{year} às {hours} : {minutes}
                            </span>
                        </div>
                    </header>

                    <div>
                        <Tags title="Comédia"/>
                        <Tags title="Romance"/>
                    </div>

                    <article>
                        <p>Beleza Verdadeira, Lim Ju-kyung (Moon Ga-young) é uma menina de aparência comum que, da noite para o dia, se torna a garota mais popular por ser bonita. Por anos a jovem sofreu bullying de familiares e colegas de classe, até decidir como usar maquiagem a seu favor assistindo vídeos tutoriais no YouTube. Depois de dominar a arte, Lim Ju-kyung muda e se torna uma das garotas mais admiradas em seu novo colégio. Contudo, ela ainda carrega muita insegurança e baixa autoestima, optando por nunca revelar o rosto sem maquiagem aos novos colegas. Isso muda quando Lee Su-ho (Cha Eun-woo) a vê de rosto limpo e a reconhece. Su-ho também é um garoto popular na escola, mas prefere não ser o centro das atenções, constantemente se mantendo frio e distante dos outros. Por conta dos segredos que compartilham, Lee Su-ho e Lim Ju-kyung se aproximam e agora ela deve encontrar sua beleza verdadeira</p>
                    </article>
                        
                    
                </Content>
            </main>
        </Container>
    )
}