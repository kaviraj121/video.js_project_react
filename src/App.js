import React from 'react';
import styled from 'styled-components';
import Videos from './Components/Videos';
import { GlobalProvider } from './context/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPlayer from './Components/VideoPlayer';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AppStyled className="App">
          <h1>Video</h1>
          <Routes>
            <Route path='/' element={<Videos />} />
            <Route path='/videos/:id' element={<VideoPlayer />} />
          </Routes>
        </AppStyled>
      </GlobalProvider>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  h1 {
    color: #fff;
    
    -webkit-background-clip: text;
    
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default App;
