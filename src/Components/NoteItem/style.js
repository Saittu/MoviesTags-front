import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    padding: 1.6rem;
    border-radius: 1rem;
    background-color: ${({ theme, isNew }) => isNew ? 'trasparent' : theme.COLORS.GRAY_300};
    border: ${({ theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : 'none'};

    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: clamp(1.2rem, 0.8rem + 1.25vw, 1.6rem);
    margin-right: 2.4rem;

    > input {
        border: none;
        outline: none;
        background-color: transparent;
        width: 11rem;
        

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: clamp(1.2rem, 0.8rem + 1.25vw, 1.6rem);

        &:disabled {
            display: none;
        }

        &::placeholder {
            font-size: clamp(1.2rem, 0.8rem + 1.25vw, 1.6rem);
        }
    }

    > button {
        background: none;
        border: none;
        line-height: 0;
        margin-left: 1.6rem;
        font-size: 2.2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;