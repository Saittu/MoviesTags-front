import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    

    background-color: ${({ theme }) => theme.COLORS.BLACK_400};

    margin-bottom: 8px;
    border-radius: 10px;

    > svg {
        margin-left: 1.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    > input {
        width: 100%;
        height: 5.6rem;

        padding: 1.9rem 0 1.9rem 2.4rem;

        
        color:  ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;