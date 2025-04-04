import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="navbar">
        {/* 첫 번째 줄: interpark 텍스트 */}
        <div className="navbar-left">
          <div className="logo">Interpark</div>
        </div>

        {/* 두 번째 줄: 네비게이션 메뉴 */}
        <div className="navbar-right">
          <ul className="nav-links">
            <li><a href="#">홈</a></li>
            <li><a href="#">투어</a></li>
            <li><a href="#">티켓</a></li>
            <li><a href="#">해외여행쿠폰</a></li>
            <li><a href="#">국내여행쿠폰</a></li>
            <li><a href="#">여행혜택존</a></li>
            <li><a href="#">여행준비</a></li>
          </ul>

          <div className="search-bar">
            <input type="text" placeholder="검색" />
          </div>

          <div className="login-signup">
            <button>로그인</button>
            <button>회원가입</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
