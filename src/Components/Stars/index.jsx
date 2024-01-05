import { Container } from "./style";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export function Stars({ rating }){
    let myArray = new Array(5).fill(undefined);

    return (
        <Container>

            {myArray.map((e, index) =>{
                if (index + 1 <= rating){
                    return (
                        <li key={String(index)} className="bg">
                            <FaStar/>
                        </li>
                    )
                } else {
                    return (
                        <li key={String(index)}>
                            <FaRegStar/>
                        </li>
                    )
                }
            })}

        </Container>
    )
}