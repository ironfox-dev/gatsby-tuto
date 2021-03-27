import React from 'react';
import Header from "../components/Header";
import Container from "../components/Cotainer"

import "../styles/global.css";

const color = {
  color: '#00fff0',
}

const Home = () => {
  return (
    <Container style={color}>
      <Header title={'Amazing Pandas Eating Things'} />
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Container>
  )
}

export default Home;