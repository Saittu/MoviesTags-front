import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;

    background-color: ${({ theme }) => theme.COLORS.BLACK_400};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    border: none;
    resize: none;

    margin: 3rem 0 0 0;

    border-radius: 1rem;

    padding: 1.9rem 1.6rem;

    ::placeholder {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;