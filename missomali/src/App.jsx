import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header';
import TImer from './components/timer/TImer';
import Competitors from './components/competitors/Competitors';
import { VoteModal } from './components/modal/VoteModal';

function App() {
  return (
    <>
     <Header/>
     <TImer/>
     <Competitors/>
    <VoteModal/>
    </>
  )
}

export default App
