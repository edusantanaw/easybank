import styled from 'styled-components'
import Button from './Button'
import Intro_bg from '../images/bg-intro-desktop.svg'
import Intro_mobile from '../images/bg-intro-mobile.svg'
import IntroPhone from '../images/image-mockups.png'
import { Title, Paragraph } from '../GlobalStyled'

const HomeStyled = styled.section`
    width: 100%;
    max-height: 89vh;
    background-color: hsl(0, 0%, 98%);
    display: flex;
    @media(max-width:880px){
        flex-direction: column-reverse;
        height : 100%;
    }
    `
const Main = styled.div`
    width: 45%;
    height: 100%;
    margin: 130px 120px;
    
    @media (max-width: 890px){
        height: 1px;
    }
`

const Images = styled.div`
    width: 60%;
    height:100vh;
    background-image: url(${Intro_bg});
    background-size: cover;
    background-position: 20px -155px;
    background-repeat: no-repeat;
    overflow: hidden;
    display: flex;
    justify-content: center;

    @media(max-width:890px){
        background-image: url(${Intro_mobile});
        width: 100%;
        background-size: contain;
        background-position: 0px 0px;
        overflow:visible;
        height: 100%;
        z-index: 1;
        margin-top: 300px !important;
    }
    `

const Phone = styled.img`
    height:115%;
    margin-top: -103px;
    margin-left: 200px;
    @media(max-width: 890px){

        margin-left:0px;
        width: 100%;
        height: 100%;
        object-fit:contain;
        
    }
`


export default function Home() {
    return (
        <HomeStyled>
            <Main>
                <Title>Next generation digital banking</Title>
                <Paragraph>
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                </Paragraph>
                <Button />
            </Main>
            <Images>
                <Phone src={IntroPhone} alt="phone" />
            </Images>
        </HomeStyled>
    )
}