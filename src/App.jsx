import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* 콘텐츠 영역 */}
      </div>
      <Footer /> {/* 푸터를 맨 하단에 추가 */}
    </div>
  );
}

export default App;
