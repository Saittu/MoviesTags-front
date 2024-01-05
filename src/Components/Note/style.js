import styled from "styled-components";

export const Container = styled.button`
    grid-area: note;

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SEC};

    border: none;
    border-radius: 16px;

    padding: 3.2rem;
    margin-bottom: 2.4rem;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > svg {
        width: 1.2rem;
        height: 1.2rem;
        flex-shrink: 0;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-overflow: ellipsis;
        font-size: 1.6rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
        margin: 1.5rem 0;
        text-align: justify;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 1.5rem;
    }
`;