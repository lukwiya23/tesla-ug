import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu'
import HeadShake from 'react-reveal/HeadShake';
import CloseIcon from "@material-ui/icons/Close"
import {useState} from 'react'
import {selectCars} from '../slices/carSlice'
import {useSelector} from 'react-redux'

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
  
        <Container>
            <HeadShake>
            <a href="">
                <img src="/images/logo.svg" alt="" />
            </a>

            {/* middle nav menu */}
            <Menu>
                {cars && cars.map((car, index)=>(
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>

            {/* Right nav Menu */}      
            <RightMenu>     
            <a href="#">SHOP</a>
            <a href="#">TESLA ACCOUNT</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            </HeadShake>

            {/* RIGHT MOBILE NAVIGATION */}
            <BurgerNav show={burgerStatus}>
            {/* close icon */}
                <CloseWrapper>
                <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                {/* nav */}
                {cars && cars.map((car, index)=>(
                    <li><a key={index} href="#">{car}</a></li>
                ))}
            <li><a href="">Exisiting Inventory</a></li>
            <li><a href="">Used Inventory</a></li>
            <li><a href="">Trade-In</a></li>
            <li><a href="">CyberTruck</a></li>
            <li><a href="">Roadster</a></li>
            <li><a href="">Exisiting Inventory</a></li>
            </BurgerNav>
        </Container>
   
    )
}

export default Header

const Container = styled.div`
z-index:1;
min-height:10vh;
position:fixed;
display: flex;
align-items:center;
padding: 0 20px;
top:0;
left:0;
right:0;
justify-content: space-between;
`

const Menu = styled.div`
display: flex;
align-items:center;
flex: 1;
justify-content: center;

a{
    font-weight: 600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap: nowrap;
}
@media (max-width:768px){
    display:none;
}
`

const RightMenu = styled.div`
display: flex;
align-items:center;
a{
    font-weight: 600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap: nowrap;

    @media (max-width:768px){
        display:none;
    }
}
`

const CustomMenu = styled(MenuIcon) `
cursor: pointer;
transition: all.3s ease-out;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
text-align:start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: all.3s ease-in-out;

li{
    padding: 15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);

    a{
        font-weight:600;
    }
}

`

const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content:flex-end;
margin-top: 25px;
transition: all.5s ease-out;
`