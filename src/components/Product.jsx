import styled from 'styled-components'
import Search from '@material-ui/icons/Search'
import Favorite from '@material-ui/icons/FavoriteBorderOutlined'
import Cart from '@material-ui/icons/ShoppingCartOutlined'
import { mobile }  from '../responsive'

const InfoContainer = styled.div`
opacity: 0;
width:100%;
height:100%;
position: absolute;
top:0;
left:0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
position: relative;

&:hover ${InfoContainer}{
    opacity: 1;
}
`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`

const Image = styled.img`
height:75%;
width: 100%;
z-index: 2;
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
    background-color: gray;
    transform: scale(1.1);
}
`


const Product = ({ item }) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <InfoContainer>
            <Icon>
                <Cart />
            </Icon>
            <Icon>
                <Search />
            </Icon>
            <Icon>
                <Favorite />
            </Icon>
        </InfoContainer>
    </Container>
  )
}

export default Product
