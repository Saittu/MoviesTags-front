import styled from "styled-components";

export const Container = styled.button`
    grid-area: button;
    width: 100%;
    height: 5.6rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    background-color: ${({ theme }) => theme.COLORS.PINK};

    border: 0;
    border-radius: 10px;

    font-weight: 500;
    padding: 0 1.6rem;
    margin-top: 1.6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
    }
`;