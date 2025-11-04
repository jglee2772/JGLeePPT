import { useState } from 'react'
import './App.css'
import cinemaImage from './assets/mgcinema cut.PNG'
import chatfoodImage from './assets/chatfood cut.PNG'
import mytestwebImage from './assets/mytestweb cut.PNG'
import pptbgimg from './assets/pptbgimg.PNG'

function App() {
  const [showDetails, setShowDetails] = useState({
    cinema: false,
    chatfood: false,
    mytestweb: false
  })

  const toggleDetails = (project) => {
    setShowDetails(prev => ({
      ...prev,
      [project]: !prev[project]
    }))
  }

  return (
    <div className="portfolio">
      {/* 헤더 */}
      <header id="about" className="header" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pptbgimg})` }}>
        <div className="header-content">
          <h2>👋 About Me</h2>
          <div className="about-content">
            <p>
              안녕하세요! 풀스택 개발자 이정건입니다.
            </p>
            <p>
              프론트엔드와 백엔드 개발을 모두 경험하며, 사용자 중심의 웹 애플리케이션을 개발하는 것을 즐깁니다.
              React, JavaScript를 활용한 동적인 UI 구현과 Java Spring Boot 기반의 백엔드 개발에 능숙하며,
              실시간 기능 구현과 서버 연동 경험을 보유하고 있습니다.
            </p>
            <p>
              프로젝트를 통해 영화관 예매 시스템, AI 챗봇 기반 음식 추천 서비스, 실시간 채팅 기능 등
              다양한 웹 애플리케이션을 개발했으며, 사용자 경험을 최우선으로 생각하며 개발합니다.
              또한 관리자 페이지 개발과 데이터베이스 설계, 서버 배포까지 전 과정을 경험했습니다.
            </p>
            <p>
              지속적인 학습과 성장을 추구하며, 새로운 기술에 대한 열정을 가지고 있습니다.
              협업을 통해 더 나은 결과물을 만들어가는 것을 좋아합니다.
            </p>
          </div>
        </div>
      </header>

      {/* 네비게이션 */}
      <nav className="nav">
        <a href="#about">소개</a>
        <a href="#skills">기술</a>
        <a href="#projects">프로젝트</a>
        <a href="#contact">연락처</a>
      </nav>

      {/* 메인 콘텐츠 */}
      <main className="main">
        {/* 기술 스택 섹션 */}
        <section id="skills" className="section">
          <h2>🛠 Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-grid">
                <div className="skill-card">HTML/CSS</div>
                <div className="skill-card">JavaScript</div>
                <div className="skill-card">React/Vite</div>
                <div className="skill-card">jQuery</div>
                <div className="skill-card">axios/ajax</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-grid">
                <div className="skill-card">Java</div>
                <div className="skill-card">Spring Boot</div>
                <div className="skill-card">MyBatis</div>
                <div className="skill-card">Python</div>
                <div className="skill-card">Flask</div>
                <div className="skill-card">Node.js</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="skills-grid">
                <div className="skill-card">MySQL</div>
                <div className="skill-card">PostgreSQL</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>DevOps & Tools</h3>
              <div className="skills-grid">
                <div className="skill-card">Git</div>
                <div className="skill-card">Render</div>
                <div className="skill-card">Railway</div>
                <div className="skill-card">VS Code</div>
                <div className="skill-card">IntelliJ</div>
                <div className="skill-card">Eclipse</div>
              </div>
            </div>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className="section">
          <h2>💼 Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>영화관 사이트</h3>
              <p className="project-period">2024/07 ~ 2024/10</p>
              <p className="project-period">담당 역할 : 팀장</p>
              <p className="project-period">참여도 : 60%</p>
              <p><a href="https://mycinema-production.up.railway.app" target="_blank" rel="noopener noreferrer">https://mycinema-production.up.railway.app</a></p>
              <img src={cinemaImage} alt="시네마 컷" className="project-image" />
              <button className="detail-btn" onClick={() => toggleDetails('cinema')}>
                {showDetails.cinema ? '▲ 세부사항 닫기' : '▼ 세부사항 보기'}
              </button>
              {showDetails.cinema && (
                <div className="detail-content">
                  <div className="project-tags">
                    <span>HTML/CSS</span>
                    <span>JavaScript/jQuery+ajax</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>MySQL</span>
                    <span>Eclipse</span>
                    <span>Railway</span>
                  </div>
                  <div>
                  <p>구현 기능</p>
                    <p>로그인/로그아웃/회원가입/마이페이지/고객센터</p>
                    <p><strong>영화 링크</strong><br/>영화 차트 / 상세 정보 / 감독 및 출연진 / 스틸컷 / 평점 / 리뷰 / 상영 시간</p>
                    <p><strong>극장 링크</strong><br/>날짜별 상영 스케줄 / 여러 부가 정보 동적 구현 / 스케줄 링크</p>
                    <p><strong>예매 링크</strong><br/>순차적 예매 / 실시간 좌석 예매 현황 / 가상 결제</p>
                    <p><strong>스토어 링크</strong><br/>상품 차트 / 장바구니 기능 / 구매 기능 / 가상 결제</p>
                    <p><strong>관리자 페이지</strong><br/>웹사이트 내 모든 데이터 실시간 관리 가능 (영화 스케줄, 영화 추가 및 삭제, 극장 관련, 매출 현황)</p>
                  </div>
                  <div>
                    <p>개선점 및 현황</p>
                    <p>각 페이지의 CSS 개선 필요</p>
                    <p>영화 링크 페이지 내의 기능들 문제 수정 (가장 문제가 많았던 담당)</p>
                    <p>현재 세부적인 기능 개선 중</p>
                  </div>
                </div>
              )}
            </div>
            <div className="project-card">
              <h3>음식 추천 챗 사이트</h3>
              <p className="project-period">2024/10 ~ 2024/10</p>
              <p className="project-period">담당 역할 : 팀장</p>
              <p className="project-period">참여도 : 80%</p>
              <p><a href="https://chatfood-spring-boot.onrender.com" target="_blank" rel="noopener noreferrer">https://chatfood-spring-boot.onrender.com</a></p>
              <img src={chatfoodImage} alt="챗푸드 컷" className="project-image" />
              <button className="detail-btn" onClick={() => toggleDetails('chatfood')}>
                {showDetails.chatfood ? '▲ 세부사항 닫기' : '▼ 세부사항 보기'}
              </button>
              {showDetails.chatfood && (
                <div className="detail-content">
                  <div className="project-tags">
                    <span>HTML/CSS</span>
                    <span>JavaScript+axios</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Python</span>
                    <span>Flask</span>
                    <span>PostgreSQL</span>
                    <span>VS Code + IntelliJ</span>
                    <span>Render</span>
                  </div>
                  <div>
                    <p>구현 기능</p>
                    <p>로그인/회원가입</p>
                    <p>음식 추천 챗봇과의 대화</p>
                    <p>추천 완료 후 관련 음식 실시간 위치 기반 지도 표시</p>
                    <p>Spring 서버(메인)와 Flask 서버(API화) 2개 서버 연동</p>
                  </div>
                  <div>
                    <p>개선점 및 현황</p>
                    <p>사용자 기반 추천 로직 수정</p>
                    <p>사용자 간의 소통 구간 추가</p>
                    <p>사용자 개인 상태 관리 기능 추가</p>
                    <p>현재 회원 관리 페이지 구상 중</p>
                  </div>
                </div>
              )}
            </div>
            <div className="project-card">
              <h3>간단개발 개인 사이트</h3>
              <p className="project-period">2024/09 ~ 2024/09</p>
              <p className="project-period">담당 역할 : 1인 개발</p>
              <p className="project-period">참여도 : 100%</p>
              <p><a href="https://mytestweb-y6jg.onrender.com" target="_blank" rel="noopener noreferrer">https://mytestweb-y6jg.onrender.com</a></p>
              <img src={mytestwebImage} alt="마이테스트웹 컷" className="project-image" />
              <button className="detail-btn" onClick={() => toggleDetails('mytestweb')}>
                {showDetails.mytestweb ? '▲ 세부사항 닫기' : '▼ 세부사항 보기'}
              </button>
              {showDetails.mytestweb && (
                <div className="detail-content">
                  <div className="project-tags">
                    <span>HTML/CSS</span>
                    <span>JavaScript</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>PostgreSQL</span>
                    <span>IntelliJ</span>
                    <span>Render</span>
                  </div>
                  <div>
                    <p>구현 기능</p>
                    <p>로그인/로그아웃/회원가입</p>
                    <p><strong>관리자 페이지</strong><br/>회원 정보 관리 / 회원가입 승인</p>
                    <p>회원 간 실시간 채팅 기능</p>
                    <p>모바일 게임 관련 뽑기 시뮬레이션</p>
                  </div>
                  <div>
                    <p>개선점 및 현황</p>
                    <p>전체적인 가독성 개선 필요</p>
                    <p>편의성 개선 필요</p>
                    <p>현재 추가 개발 계획 없음</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="section">
          <h2>📧 Contact</h2>
          <div className="contact-content">
            <p>궁금한 점이 있으시면 언제든지 연락주세요!</p>
            <div className="contact-links">
              <div className="info-card">
                <div className="contact-label">이메일</div>
                <div className="contact-value">jklee2772@naver.com</div>
              </div>
              <a href="https://github.com/jglee2772" className="info-card" target="_blank" rel="noopener noreferrer">
                <div className="contact-label">GitHub</div>
                <div className="contact-value">프로필 보기 →</div>
              </a>
              <div className="info-card">
                <div className="contact-label">전화번호</div>
                <div className="contact-value">010-2692-9779</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="footer">
        <p>&copy; 2024 이정건. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
