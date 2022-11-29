/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [isClose, setIsClose] = useState(true);
    const cars = useSelector(selectCars);
  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
            {cars && cars.map((car, index) => (
                <a key={index} href="#">{car}</a>
            ))}
            <a href="#">Solar Roof</a>
            <a href="#">Solar Panel</a>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick = {() => {setIsClose(false)}} />
        </RightMenu>
        {!isClose && <BurgerNav show={!isClose} >
            <CloseWrapper>
            <CustomClosebutton onClick = {() => {setIsClose(true)}} />
            </CloseWrapper>
            {cars && cars.map((car, index) => (
                <li key={index}><a href="#">{car}</a></li>
            ))}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">CyberTruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
        </BurgerNav>}
        
        
    </Container>
  )
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1; 
`

const Menu = styled.div`
    display: flex;
    padding-left: 100px;
    a {
        text-transform: uppercase;
        font-weight: 600;
        padding: 0 10px;
    }

    @media(max-width: 768px){
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a{
        text-transform: uppercase;
        font-weight: 600;
        padding: 0 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    width: 300px;
    z-index: 16;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    a{
        font-weight: 600;
    }
`

const CustomClosebutton = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`