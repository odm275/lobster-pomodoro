import React, { Component } from 'react';

import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import ShortBreak from '../../components/Breaks/ShortBreak';
import LongBreak from '../../components/Breaks/LongBreak';
import Timer from '../../components/Timer/Timer';
import StartButton from '../../components/Productive/StartButton';
import ResetButton from '../../components/Productive/ResetButton';
import Footer from '../../components/Footer';
//  Layout HOC
import Row from '../../components/HOC/Row';
import RowRight from '../../components/HOC/RowRight';
import RowCenter from '../../components/HOC/RowCenter';


class Home extends Component {
  render() {
    return (
      <div className="home">
       <RowRight>
        <Navbar/>
       </RowRight>
       <Row>
        <ShortBreak/>
        <LongBreak/>
       </Row>
       <RowCenter>
        <Timer/>
       </RowCenter>
       <Row>
        <ResetButton/>
        <StartButton/>
       </Row>
       <Footer/>
      </div>
    );
  }
}


//  Glue containers
//  <Timer/>
//  <Settings/>

export default Home;