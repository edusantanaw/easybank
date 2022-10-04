import styled from 'styled-components'

const ButtonStyled = styled.button`
    width: 195px;
    height: 46px;
    border: none;
    background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
    border-radius: 21px;
    color: hsl(0, 0%, 100%);
    font-size: 1em;
    font-weight: 400;
    cursor:pointer;
    &:hover{
        background: linear-gradient(to right, hsl(150, 65%, 51%), hsl(240, 8%, 62%));
    }
   
    `

export default function Button(){
    return(
        <ButtonStyled>Request Invite</ButtonStyled>
    )
}