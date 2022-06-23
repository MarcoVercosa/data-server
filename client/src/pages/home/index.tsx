import React from 'react'
import HeaderComponent from '../../components/header';
import { GetDataBackEndPost } from '../../fetch/fetchBackEnd';
import './index.css';

async function RenderResult(server: string, user: string, pass: string, option: string) {
  let result = await GetDataBackEndPost(option, server, user, pass)
  console.log(result)
}

function Home(): JSX.Element {
  return (
    <header className="App-header">
      <HeaderComponent RenderResult={RenderResult} />
    </header>

  );
}

export default Home;
