import './App.css';
import * as React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom'
import { Navbar } from './components/shared/Navbar';
import { StepperContainer } from './components/stepers/StepperContainer';
import { Step1 } from './components/stepers/Step1';
import { Step2 } from './components/stepers/Step2';
import { Step3 } from './components/stepers/Step3';

function App() {
  return (
    <>
      <Navbar />
      <StepperContainer />
      {/* <Step1 /> */}
      {/* <Step2 /> */}
      {/* <Step3 /> */}

    </>
  );

}



export default App;
