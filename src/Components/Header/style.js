import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 10.8rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    justify-content: space-between;
    align-items:center;

    padding: 0 12rem;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-weight: 700;
        font-size: 2.6rem;
        margin-right: 6.4rem; 
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;    
    

    > img {
        width: 6.4rem;
        height: 6.4rem;
        
        border-radius: 50%;
    }

    > div {
        display:flex;
        flex-direction: column;
        align-items: flex-end;

        margin:0 9px;
        margin-left: 6.4rem;
        line-height: 2.4rem;
        white-space: nowrap;

        > strong {
            
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 700;
        }

        > a, button {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        
    }
`;