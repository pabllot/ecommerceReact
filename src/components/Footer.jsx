import Facebook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import Twitter from "@material-ui/icons/Twitter"
import Map from "@material-ui/icons/Room"
import Phone from "@material-ui/icons/Phone"
import Mail from "@material-ui/icons/MailOutlined"
import styled from "styled-components"
import { mobile }  from '../responsive'

const Container = styled.div`
display:  flex;
${mobile({ flexDirection: "column"})};
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1`
${mobile({ textAlign: "center"})};`

const Desc = styled.p`
margin: 20px 0px;
${mobile({ textAlign: "center"})};
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none"})};
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 30%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>NIKE.</Logo>
            <Desc>Nike is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem> Woman Fashion </ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Map style={{marginRight:"10px"}}/>
            HQ in Beaverton, City in Oregon
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}} />
            +1 234 566 765
            </ContactItem>
            <ContactItem><Mail style={{marginRight:"10px"}} />
            nikeecommerce@nike.com
            </ContactItem>
            <Payment src="images/purse.png" />
        </Right>
    </Container>
  )
}

export default Footer