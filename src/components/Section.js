import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
    const { title, desc, lbutton, rbutton, bgImage } = props;
  return (
    <Wrap bgImage = {bgImage} >
        <ItemText>
            <Fade bottom>
                <h1>{title}</h1>
                <p>{desc}</p>
            </Fade>
        </ItemText>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {lbutton}
                    </LeftButton>
                    { rbutton && 
                    <RightButton>
                        {rbutton}
                    </RightButton> }
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg' />
            </Fade>
        </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width:768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius:100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;


`
const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.65;
`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
margin-left: 46%;
animation: animateDown infinite 1.5s;

`

const Buttons = styled.div`

`