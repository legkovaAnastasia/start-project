import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const StyledContact = styled.section`
    
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.light};
    border: 2px solid ;
    padding: 7px 15px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05rem;
    color: ${theme.colors.primary};

    &:focus-visible {
        outline: ${theme.colors.secondary};
        border: 2px solid ${theme.colors.secondary};
    }

    &::placeholder {
        text-transform: capitalize;
    }
`

export const S = {
    StyledContact,
    StyledForm,
    Field
}