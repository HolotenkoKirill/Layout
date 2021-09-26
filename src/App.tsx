import React, { FunctionComponent } from "react";
import {
  Header,
  MenuContainer,
  MenuLink,
  CallUsButton,
  LogoContainer,
  BurderMenu
} from "./Header.style";
import {
  FirstScreen,
  Mountains,
  TravelWithUs,
  TextBlock,
  FirstScreenDescription,
  FirstScreenHeading,
  FirstScreenOrderNow
} from "./FirstScreen.style";
import GlobalStyle, { Container, Heading, LeftHeading } from "./GlobalStyle.style";
import Logo from "./assets/header/Logo.png";
import MountainsPhoto from "./assets/about-us/About-us.png";
import { AboutUs, TextBlockAboutUs, AboutUsDescription, ReadMore, Images } from "./AboutUS.style";
import {
  Description,
  Icon,
  OurJournal,
  PostDescription,
  PostImg,
  PostNumber,
  Posts,
  Subtitle,
  Title
} from "./OurJournal.style";
import heart from "./assets/our-journal/icons/heart.svg";
import leaf from "./assets/our-journal/icons/leaf.svg";
import drop from "./assets/our-journal/icons/drop.svg";
import forest from "./assets/our-journal/bgs/forest.png";
import lake from "./assets/our-journal/bgs/lake.png";
import hill from "./assets/our-journal/bgs/hill.png";
import {
  Form,
  Input,
  Offer,
  OfferDescription,
  OrderNow,
  Separartor,
  Notification
} from "./Offer.style";
import {
  IconDescription,
  IconDescriptionContainer,
  IconTitle,
  Scheme,
  SchemeSVG,
  SchemeTextContainer
} from "./Scheme.style";
import schemeSVG from "./assets/scheme/scheme.svg";
import {
  Card,
  Cards,
  CurrentPrice,
  Dest,
  OldPrice,
  PriceContainer,
  Stars,
  Travel,
  TripDesc
} from "./Travel.style";
import { destinations, schemeData, menuLinks } from "./data";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <MenuContainer>
          <LogoContainer>
            <img src={Logo} alt="Mountains" />
          </LogoContainer>
          {menuLinks.map((item) => (
            <MenuLink href={item.link}>{item.menuItem}</MenuLink>
          ))}
          <CallUsButton>call us</CallUsButton>
          <BurderMenu></BurderMenu>
        </MenuContainer>
      </Header>
      <FirstScreen>
        <TextBlock>
          <FirstScreenHeading>
            <TravelWithUs>TRAVEL WITH US</TravelWithUs>
            <Mountains>
              <br />
              to the Mountains
            </Mountains>
          </FirstScreenHeading>
          <FirstScreenDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />
            elit, sed do eiusmod tempor incidid
          </FirstScreenDescription>
          <FirstScreenOrderNow>order now</FirstScreenOrderNow>
        </TextBlock>
      </FirstScreen>
      <AboutUs>
        <Container orientation="row">
          <TextBlockAboutUs>
            <LeftHeading>About us</LeftHeading>
            <AboutUsDescription>
              Aliquam sed posuere urna, et gravida nisl. Praesent interdum nisl libero, pretium
              egestas purus eleifend vitae. Mauris suscipit vel lectus at luctus.
            </AboutUsDescription>
            <ReadMore>Read more</ReadMore>
          </TextBlockAboutUs>
          <Images src={MountainsPhoto} alt="mountains" />
        </Container>
      </AboutUs>
      <OurJournal>
        <Container orientation="column">
          <Heading>Our gournal</Heading>
          <Posts>
            <PostImg bg={forest}>
              <Icon src={heart} />
            </PostImg>
            <PostDescription>
              <Title>Love</Title>
              <Subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</Subtitle>
              <Description>
                You know how to make best coffee in the universe? Or, maybe you’re very good in
                designing gloves? Tell everyone about your experience and skills.
              </Description>
              <PostNumber>01</PostNumber>
            </PostDescription>
            <PostImg bg={lake}>
              <Icon src={leaf} />
            </PostImg>
            <PostDescription>
              <Title>Tree</Title>
              <Subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</Subtitle>
              <Description>
                The way to a successful brand is hard, but always very interesting. Share the full
                story of your project – from the very first day until now.
              </Description>
              <PostNumber>02</PostNumber>
            </PostDescription>
            <PostImg bg={hill}>
              <Icon src={drop} />
            </PostImg>
            <PostDescription>
              <Title>Water</Title>
              <Subtitle>LITTLE PIECES OF OUR PROUDNESS</Subtitle>
              <Description>
                What do you do better than your competitors? What are you proud of? What details and
                advantages of your product you want people to know about?
              </Description>
              <PostNumber>03</PostNumber>
            </PostDescription>
          </Posts>
        </Container>
      </OurJournal>
      <Offer>
        <Container orientation="column">
          <LeftHeading>Do you wanna go?</LeftHeading>
          <OfferDescription>
            Aliquam sed posuere urna, et gravida nisl. Praesent <br />
            interdum nisl libero, pretium egestas purus eleifend vitae. Mauris suscipit vel lectus
            at luctus.
          </OfferDescription>
          <Form>
            <Input type="text" placeholder="Your name:" />
            <Separartor />
            <Input type="text" placeholder="Your phone:" />
            <OrderNow type="submit" value="Order now" />
          </Form>
          <Notification>* Your data will not be transferred</Notification>
        </Container>
      </Offer>
      <Scheme>
        <Container orientation="column">
          <Heading>How we work</Heading>
          <SchemeSVG src={schemeSVG} alt="scheme" />
          <SchemeTextContainer>
            {schemeData.map((desc) => (
              <IconDescriptionContainer>
                <IconTitle>{desc.title}</IconTitle>
                <IconDescription>{desc.descritpion}</IconDescription>
              </IconDescriptionContainer>
            ))}
          </SchemeTextContainer>
        </Container>
      </Scheme>
      <Travel>
        <Container orientation="column">
          <Heading>Travel with us</Heading>
          <Cards>
            {destinations.map((card) => (
              <Card img={card.bg}>
                <Stars src={card.stars} />
                <div>
                  <Dest>{card.name}</Dest>
                  <TripDesc>Lorem ipsum dolor si amet, consectetur</TripDesc>
                </div>
                <PriceContainer>
                  <OldPrice>3150</OldPrice>
                  <CurrentPrice>{card.price}</CurrentPrice>
                </PriceContainer>
              </Card>
            ))}
          </Cards>
        </Container>
      </Travel>
    </>
  );
};

export default App;
