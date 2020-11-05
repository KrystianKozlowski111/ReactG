import React from 'react';
import {
  WorkedWith,
  WorkedHeader,
  WorkedText,
  OurClients,
  Partners,
  ClientsContainer,
} from './Clients.style';
import xiaomi from '../../assets/images/Xiaomi.svg';
import Tinder from '../../assets/images/Tinder.svg';
import Apple from '../../assets/images/Apple.svg';
import Nike from '../../assets/images/Nike.svg';
import AMD from '../../assets/images/AMD.svg';
const Clients = () => {
  return (
    <>
      <ClientsContainer>
        <OurClients>Our Clients</OurClients>

        <WorkedWith>
          <WorkedHeader>— We worked with</WorkedHeader>
          <WorkedText>
            Our favorite brands are our friends! We help them to <br /> achieve
            their goals, they help us to stay sharp.
          </WorkedText>
        </WorkedWith>
      </ClientsContainer>
      <Partners>
        <img src={xiaomi} className="App-xiaomi" alt="xiaomi" />
        <img src={Tinder} className="App-Tinder" alt="Tinder" />
        <img src={Apple} className="App-Apple" alt="Apple" />
        <img src={Nike} className="App-Nike" alt="Nike" />
        <img src={AMD} className="App-AMD" alt="AMD" />
      </Partners>
    </>
  );
};

export default Clients;
