import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    border: none;
    font-size: 1%.8;
`;