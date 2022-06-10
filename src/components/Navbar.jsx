import React from 'react'
import styledComponents from 'styled-components'
import Search from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge'
import Cart from '@material-ui/icons/ShoppingCartOutlined';

const Container = styledComponents.div`
    height: 60px;
`

const Wrapper = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styledComponents.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styledComponents.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styledComponents.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styledComponents.input`
  border: none;
`

const Center = styledComponents.div`
flex:1;
text-align: center;
`

const Logo = styledComponents.div`
font-weight: bold;
`

const Right = styledComponents.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end
`
const MenuItem = styledComponents.div`
font-size: 14px;
cursor:pointer;
margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Nike Ecommerce</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
                 <Cart />  
            </Badge>          
          </MenuItem>
        </Right>
      </Wrapper> 
    </Container>
  )
}

export default Navbar