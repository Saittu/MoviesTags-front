import { Container } from "./style";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import { Tags } from "../Tags"
import { Stars } from "../Stars"

export function Note( { data, text,  ...rest }) {
    return (
        <Container>
            <h1>{data.title}</h1>

            <Stars rating={data.rating}/>

            <p>{data.text}</p>

            {
                data.tags && <footer>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }


        </Container>

    )
}