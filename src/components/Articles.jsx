import styled from "styled-components";
import { Title, List, Iten, Paragraph } from "../GlobalStyled";
import Money from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

const Main = styled.section`
  width: 100%;
  height: 100vh;
  padding: 90px 120px;
  background-color: hsl(0, 0%, 98%);
`;

const H1 = styled(Title)`
  font-size: 2.1em;
  margin-bottom: 50px;
`;

const SubTitle = styled(Title)`
  font-size: 1.17em;
  padding: 10px 20px 0 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 183px;
  object-fit: cover;
  display: block;
  border-radius: 5px;
  margin-bottom: 25px;
`;

const Author = styled.span`
  padding: 20px;
  font-size: 0.7em;
  font-weight: 300;
  color: hsl(233, 8%, 62%);
`;

const ArticleP = styled(Paragraph)`
  padding: 0px 20px;
  font-size: 0.84em;
  margin-bottom: 25px;
`;

const ArticleLi = styled(Iten)`
  width: 260px;
  background-color: hsl(0, 0%, 100%);
  margin-right: 0 px;
  padding: 0px;
  border-radius: 5px;
`;

export default function Articles() {
  return (
    <Main>
      <H1>Latest Articles</H1>
      <List>
        <ArticleLi>
          <Image src={Money} alt="money" />
          <Author>By Claire Robinson</Author>
          <SubTitle>Receive money in any currency with no fees</SubTitle>
          <ArticleP>
            {" "}
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single …
          </ArticleP>
        </ArticleLi>
        <ArticleLi>
          <Image src={Restaurant} alt="restaurant" />
          <Author>By Wilson Hutton</Author>
          <SubTitle>Treat yourself without worrying about money</SubTitle>
          <ArticleP>
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </ArticleP>
        </ArticleLi>
        <ArticleLi>
          <Image src={Plane} alt="plane" />
          <Author>By Wilson Hutton</Author>
          <SubTitle> Take your Easybank card wherever you go</SubTitle>
          <ArticleP>
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </ArticleP>
        </ArticleLi>
        <ArticleLi>
          <Image src={Confetti} alt="confetti" />
          <Author>By Claire Robinson</Author>
          <SubTitle> Our invite-only Beta accounts are now live!</SubTitle>
          <ArticleP>
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </ArticleP>
        </ArticleLi>
      </List>
    </Main>
  );
}
