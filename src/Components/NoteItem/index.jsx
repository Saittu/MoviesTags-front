import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from "./style";

export function NoteItem({ isNew = false, ...rest}){
    return (
        <Container isnew={isNew}>
            <input
                type="text"
                readOnly={!isNew}
                placeholder='Novo Marcador'
                {...rest}
            />

            <button type="button">
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}