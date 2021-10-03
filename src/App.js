import { useState } from 'react';
import { Header } from './components/Header';
import { GridButtons } from './components/GridButtons';
import { Sentences } from './components/Sentences';

export const App = ()=>{

  const [tense, setTense]=useState(null);

  const changeTense = ({target:{name}})=>{
    setTense(name);
  }

  return(
    <>
      <Header />
      <GridButtons onChangeTense={changeTense} />
      <Sentences tense={tense} />
    </>
  );
}