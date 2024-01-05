import styled from "styled-components";

export const Container = styled.span`
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 8px;
    font-size: clamp(1rem, 0.8rem + 0.625vw, 1.2rem);
    min-width: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.BLACK_300};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;

    &:last-of-type {
        margin-right: 0;
    }
`;
