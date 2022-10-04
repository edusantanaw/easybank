import styled from "styled-components"
import { Title, List, Iten, Paragraph } from "../GlobalStyled"
import Online from '../images/icon-online.svg'
import Budgeting from '../images/icon-budgeting.svg'
import Onboarding from '../images/icon-onboarding.svg'
import Api from '../images/icon-api.svg'

const Section = styled.section`
    padding: 100px 120px;
    width:100%;
    height: 100vh;
    background-color:hsl(220, 16%, 96%);
`
const H1 = styled(Title)`
    font-size: 2.1em;
`

const HomeP= styled(Paragraph)`
    margin-top: 25px;
    font-size: 1.2em;
    font-weight: 400;
    max-width: 740px;
    margin-bottom: 30px;
`

const Image = styled.img`
    margin-top: 18px;    
    width: 65px;
`
const H2 = styled(Title)`
    font-size: 1.5em;
    margin-top:27px
`

const SubP = styled(Paragraph)`
    font-size: 1.04em;
    font-weight: 300;
`

export default function About() {
    return (
        <Section>
            <H1>Why choose EasyBank?</H1>
            <HomeP>
                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.
            </HomeP>
            <List>
                <Iten>
                    <Image src={Online} alt='credit card' />
                    <H2>Online Banking</H2>
                    <SubP>
                        Our modern web and mobile applications allow you to keep track of your finances
                        wherever you are in the world.
                    </SubP>
                </Iten>
                <Iten>
                    <Image src={Budgeting} alt='credit card' />
                    <H2>Simple Budgeting</H2>
                    <SubP>  Simple Budgeting
                        See exactly where your money goes each month. Receive notifications when you’re
                        close to hitting your limits.</SubP>
                </Iten>
                <Iten>
                    <Image src={Onboarding} alt='credit card' />
                    <H2>Fast Onboarding</H2>
                    <SubP>  We don't do branches. Open your account in minutes online and start taking control
                        of your finances right away.
                    </SubP>
                </Iten>
                <Iten>
                    <Image src={Api} alt='credit card' />
                    <H2>Open API</H2>
                    <SubP>
                        Manage your savings, investments, pension, and much more from one account. Tracking
                        your money has never been easier.
                    </SubP>
                </Iten>
            </List>
        </Section>
    )
}