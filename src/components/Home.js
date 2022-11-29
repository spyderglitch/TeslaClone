import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section title="Model 3" desc="Order Online for Touchless Delivery" lbutton="Custom Order" rbutton="Existing Inventory" bgImage='model-3.jpg' />
        <Section title="Model Y" desc="Order Online for Touchless Delivery" lbutton="Custom Order" rbutton="Existing Inventory" bgImage='model-y.jpg' />
        <Section title="Model X" desc="Order Online for Touchless Delivery" lbutton="Custom Order" rbutton="Existing Inventory" bgImage='model-x.jpg' />
        <Section title="Model S" desc="Order Online for Touchless Delivery" lbutton="Custom Order" rbutton="Existing Inventory" bgImage='model-s.jpg' />
        <Section title="Solar Panel" desc="Lowest Cost Solar Panels In America" lbutton="Order Now" rbutton="Learn More" bgImage='solar-panel.jpg' />
        <Section title="Solar for New Roofs" desc="Produce Clean Energy From Your Roof" lbutton="Order Now" rbutton="Learn More" bgImage='solar-roof.jpg' />
        <Section title="Accessories" desc="" lbutton="Shop Now" bgImage='accessories.jpg' />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`