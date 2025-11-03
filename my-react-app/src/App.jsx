import { useState } from 'react'
import './App.css'
import cinemaImage from './assets/mgcinema cut.PNG'
import chatfoodImage from './assets/chatfood cut.PNG'
import mytestwebImage from './assets/mytestweb cut.PNG'

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
      <header className="header">
        <h1>이정건 포트폴리오</h1>
        <p className="subtitle">FullStack Developer</p>
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
        {/* 소개 섹션 */}
        <section id="about" className="section">
          <h2>👋 About Me</h2>
          <div className="about-content">
            <p>
              안녕하세요! 프론트엔드 개발을 즐기는 개발자입니다.
              사용자 경험과 아름다운 UI/UX를 만드는 것을 좋아합니다.
            </p>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section id="skills" className="section">
          <h2>🛠 Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-grid">
                <div className="skill-card">React</div>
                <div className="skill-card">JavaScript</div>
                <div className="skill-card">HTML/CSS</div>
                <div className="skill-card">jQuery</div>
                <div className="skill-card">axios</div>
                <div className="skill-card">Vite</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-grid">
                <div className="skill-card">Java</div>
                <div className="skill-card">Spring Boot</div>
                <div className="skill-card">MyBatis</div>
                <div className="skill-card">Python</div>
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
              <p className="project-period">2024/07~2024/10</p>
              <p className="project-period">참여도 70%</p>
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
                    <span>mySQL</span>
                    <span>eclips</span>
                    <span>Railway</span>
                  </div>
                  <p>구현 기능</p>
                  <p>로그인/로그아웃/회원가입/마이페이지/고객센터</p>
                  <p>영화링크<br/>영화차트/상세정보/감독및출현진/스틸컷/평점/리뷰/상영시간</p>
                  <p>극장링크<br/>날짜별상영스케줄/여러부가정보동적구현/스케줄링크</p>
                  <p>예매링크<br/>순차적예매/실시간좌석예매현황/가상결제</p>
                  <p>스토어링크<br/>상품차트/장바구니기능/구매기능/가상결제</p>
                  <p>관리자페이지<br/>웹사이트내 모든 데이터 실시간관리가능(영화스케줄,영화추가및삭제,극장관련,매출현황)</p>
                </div>
              )}
            </div>
            <div className="project-card">
              <h3>음식 추천 챗 사이트</h3>
              <p className="project-period">2025/10~2025/10</p>
              <p className="project-period">참여도 90%</p>
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
                    <span>postgreSQL</span>
                    <span>VSC + intellij</span>
                    <span>Render</span>
                  </div>
                  <p>구현 기능</p>
                  <p>로그인/회원가입</p>
                  <p>음식 추천 챗봇과의 대화</p>
                  <p>추천완료 후 관련음식 실시간 위치기반 지도 표시</p>
                </div>
              )}
            </div>
            <div className="project-card">
              <h3>간단개발 개인 사이트</h3>
              <p className="project-period">2024/09~2024/09</p>
              <p className="project-period">참여도 100%</p>
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
                    <span>Spring boot</span>
                    <span>postgreSQL</span>
                    <span>intellij</span>
                    <span>Render</span>
                  </div>
                  <p>구현 기능</p>
                  <p>로그인/로그아웃/회원가입</p>
                  <p>관리자페이지<br/>회원정보관리/회원가입승인</p>
                  <p>회원들간 실시간채팅기능</p>
                  <p>모게임관련 뽑기시뮬레이션</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="section">
          <h2>📧 Contact</h2>
          <div className="contact-content">
            <p>궁금한 점이 있으시면 언제든 연락주세요!</p>
            <div className="contact-links">
              <div className="info-card">jklee2772@naver.com</div>
              <a href="https://github.com/jglee2772" className='info-card' target="_blank" rel="noopener noreferrer">GitHub<br/> Click!</a>
              <div className='info-card'>010-2692-9779</div>
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
