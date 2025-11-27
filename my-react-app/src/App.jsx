import { useState } from 'react'
import './App.css'
import cinemaImage from './assets/mgcinema cut.PNG'
import chatfoodImage from './assets/chatfood cut.PNG'
import mytestwebImage from './assets/mytestweb cut.PNG'
import pptbgimg from './assets/pptbgimg.PNG'
import insimimg from './assets/insim cut.PNG'

function App() {
  const [showDetails, setShowDetails] = useState({
    cinema: false,
    chatfood: false,
    mytestweb: false,
    insim: false
  })

  const [showProblemSolving, setShowProblemSolving] = useState({
    cinema: false,
    chatfood: false,
    mytestweb: false,
    insim: false
  })

  const toggleDetails = (project) => {
    setShowDetails(prev => ({
      ...prev,
      [project]: !prev[project]
    }))
  }

  const toggleProblemSolving = (project) => {
    setShowProblemSolving(prev => ({
      ...prev,
      [project]: !prev[project]
    }))
  }

  return (
    <div className="portfolio">
      {/* 네비게이션 */}
      <nav className="nav">
        <a href="#about">소개</a>
        <a href="#skills">기술</a>
        <a href="#projects">프로젝트</a>
        <a href="#contact">연락처</a>
      </nav>

      {/* 헤더 */}
      <header id="about" className="header" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${pptbgimg})` }}>
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
                <div className="skill-card">Django</div>
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
              <p className="project-period">담당 역할 : 팀장  /  팀원7명</p>
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
                    <p>로그인/로그아웃/회원가입/마이페이지/고객센터/railway베포</p>
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
              <button className="detail-btn" onClick={() => toggleProblemSolving('cinema')}>
                {showProblemSolving.cinema ? '▲ 문제 해결 과정 닫기' : '▼ 문제 해결 과정 보기'}
              </button>
              {showProblemSolving.cinema && (
                <div className="detail-content">
                  <div>
                    <p>문제 해결 과정</p>
                    <p><strong>1. 영화 상세 정보 로딩 지연 문제</strong><br/>
                    초기에는 영화 상세 정보를 페이지 로드 시 모두 불러와 성능 저하 발생<br/>
                    → 해결: AJAX를 활용한 지연 로딩(Lazy Loading) 구현으로 필요한 데이터만 동적으로 로드</p>
                    <p><strong>2. 실시간 좌석 예매 동기화 오류</strong><br/>
                    여러 사용자가 동시에 같은 좌석을 예매할 수 있는 문제 발생<br/>
                    → 해결: 데이터베이스 트랜잭션과 낙관적 잠금(Optimistic Locking) 적용하여 동시성 제어</p>
                    <p><strong>3. 영화 차트 정렬 및 필터링 기능 오작동</strong><br/>
                    jQuery 이벤트 핸들러가 중복 바인딩되어 필터링이 제대로 동작하지 않음<br/>
                    → 해결: 이벤트 위임(Event Delegation) 패턴 적용 및 이벤트 리스너 중복 방지 로직 추가</p>
                    <p><strong>4. 영화 평점 및 리뷰 실시간 업데이트 문제</strong><br/>
                    새로 작성된 리뷰가 즉시 반영되지 않는 문제<br/>
                    → 해결: AJAX 폴링(Polling) 방식에서 WebSocket으로 전환하여 실시간 업데이트 구현</p>
                    <p><strong>5. 스틸컷 이미지 로딩 최적화</strong><br/>
                    많은 스틸컷 이미지로 인한 페이지 로딩 속도 저하<br/>
                    → 해결: 이미지 지연 로딩(Lazy Loading) 및 썸네일 생성으로 초기 로딩 시간 단축</p>
                    <p><strong>기타 소통 문제</strong><br/>
                    각 기능 속성명 난잡화 및 중복 등등<br/>
                    → 해결: 관련 페이지 프론트 담당이 class 및 id 이름 사전 생성 후 관련 기능 담당자에게 전달<br/><br/>
                    DB 데이터의 일관성과 연관성 부족 및 데이터의 중복성 증가<br/>
                    → 해결: 모든 DB 테이블을 p-id와f-id 연결화 및 정리 후 중복컬럼 제거</p>
                  </div>
                </div>
              )}
            </div>
            <div className="project-card">
              <h3>면접 시뮬레이션 사이트<br/>(개발중)</h3>
              <p className="project-period">2025/11 ~ 2025/12</p>
              <p className="project-period">담당 역할 : 팀장  /  팀원5명</p>
              <p className="project-period">참여도 : (개발중)</p>
              <p><a href="http://13.125.180.201/" target="_blank" rel="noopener noreferrer">http://13.125.180.201/</a></p>
              <img src={insimimg} alt="면접시뮬사이트 컷" className="project-image" />
              <button className="detail-btn" onClick={() => toggleDetails('insim')}>
                {showDetails.insim ? '▲ 세부사항 닫기' : '▼ 세부사항 보기'}
              </button>
              {showDetails.insim && (
                <div className="detail-content">
                  <div className="project-tags">
                    <span>HTML/CSS</span>
                    <span>React</span>
                    <span>JavaScript/Axios</span>
                    <span>Python</span>
                    <span>Django REST Framework</span>
                    <span>MySQL</span>
                    <span>VScode</span>
                    <span>AWS</span>
                  </div>
                  <div>
                  <p>구현 기능</p>
                    <p>기본정보/면접 시뮬레이션/인적성검사/이력서작성/AWS베포</p>
                    <p><strong>면접 시뮬레이션 페이지</strong><br/>렌덤 면접관 배정 / 특정직업 면접진행 / 진행 후 피드백</p>
                    <p><strong>인적성 검사 페이지</strong><br/>개인성향 파악 테스트 / 결과에 맞는 직업 추천</p>
                    <p><strong>이력서 작성 페이지</strong><br/>일반적인 이력서 작성 진행 / 실시간 AI 작성 피드백</p>
                  </div>
                  <div>
                    <p>개선점 및 현황</p>
                    <p>현재 개발 중</p>
                  </div>
                </div>
              )}
              <button className="detail-btn" onClick={() => toggleProblemSolving('insim')}>
                {showProblemSolving.insim ? '▲ 문제 해결 과정 닫기' : '▼ 문제 해결 과정 보기'}
              </button>
              {showProblemSolving.insim && (
                <div className="detail-content">
                  <div>
                    <p>문제 해결 과정</p>
                    <p><strong>1. React와 Django REST Framework 간 CORS 오류</strong><br/>
                    프론트엔드(React)와 백엔드(Django) 서버 간 통신 시 CORS 정책으로 인한 요청 차단 발생<br/>
                    → 해결: Django의 django-cors-headers 미들웨어 설정 및 허용할 Origin 명시하여 CORS 문제 해결</p>
                    <p><strong>2. 면접관 랜덤 배정 알고리즘 개선</strong><br/>
                    초기에는 단순 랜덤 배정으로 사용자 경험 저하 및 중복 배정 문제 발생<br/>
                    → 해결: 사용자 이력 및 직업 유형을 고려한 가중치 기반 랜덤 배정 알고리즘 구현</p>
                    <p><strong>3. AI 피드백 응답 지연 문제</strong><br/>
                    이력서 작성 시 AI 피드백 API 호출이 동기적으로 처리되어 사용자 대기 시간 증가<br/>
                    → 해결: 비동기 처리 및 로딩 상태 표시, 부분 피드백 제공으로 사용자 경험 개선</p>
                    <p><strong>4. AWS 배포 시 환경 변수 관리</strong><br/>
                    로컬과 프로덕션 환경의 설정 차이로 인한 배포 오류 발생<br/>
                    → 해결: 환경 변수를 AWS Systems Manager Parameter Store로 관리하여 보안성과 유지보수성 향상</p>
                    <p><strong>5. 인적성 검사 결과 저장 및 분석 최적화</strong><br/>
                    대량의 검사 결과 데이터 처리 시 성능 저하 발생<br/>
                    → 해결: 미해결상태</p>
                  </div>
                </div>
              )}
            </div>
            <div className="project-card">
              <h3>음식 추천 챗 사이트</h3>
              <p className="project-period">2025/10 ~ 2025/10</p>
              <p className="project-period">담당 역할 : 팀장  /  팀원3명</p>
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
                    <p>Render베포</p>
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
              <button className="detail-btn" onClick={() => toggleProblemSolving('chatfood')}>
                {showProblemSolving.chatfood ? '▲ 문제 해결 과정 닫기' : '▼ 문제 해결 과정 보기'}
              </button>
              {showProblemSolving.chatfood && (
                <div className="detail-content">
                  <div>
                    <p>문제 해결 과정</p>
                    <p><strong>1. Spring Boot와 Flask 서버 간 통신 오류</strong><br/>
                    두 서버 간 API 통신 시 타임아웃 및 연결 불안정 문제 발생<br/>
                    → 해결: RestTemplate의 타임아웃 설정 조정 및 재시도 로직(Retry Mechanism) 구현으로 안정성 향상</p>
                    <p><strong>2. 챗봇 응답 지연 및 타임아웃 문제</strong><br/>
                    Flask 서버의 AI 챗봇 API 응답 시간이 길어 사용자 대기 시간 증가<br/>
                    → 해결: 비동기 처리 및 WebSocket 도입, 진행 상태 표시로 사용자 경험 개선</p>
                    <p><strong>3. 위치 기반 지도 API 연동 오류</strong><br/>
                    추천된 음식점의 위치 정보를 지도에 표시하는 과정에서 좌표 변환 오류 발생<br/>
                    → 해결: 좌표계 변환 로직 추가 및 지오코딩 API 오류 처리 강화</p>
                    <p><strong>4. PostgreSQL 데이터베이스 연결 풀 관리</strong><br/>
                    동시 접속자 증가 시 데이터베이스 연결 부족으로 인한 오류 발생<br/>
                    → 해결: HikariCP 연결 풀 설정 최적화 및 연결 수 모니터링으로 안정성 확보</p>
                    <p><strong>5. Render 배포 시 빌드 실패 문제</strong><br/>
                    Spring Boot와 Flask 서버를 동시에 배포하는 과정에서 의존성 충돌 발생<br/>
                    → 해결: 각 서버를 별도 서비스로 분리 배포 및 환경 변수 분리 관리로 해결</p>
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
                    <p>Render베포</p>
                  </div>
                  <div>
                    <p>개선점 및 현황</p>
                    <p>전체적인 가독성 개선 필요</p>
                    <p>편의성 개선 필요</p>
                    <p>현재 추가 개발 계획 없음</p>
                  </div>
                </div>
              )}
              <button className="detail-btn" onClick={() => toggleProblemSolving('mytestweb')}>
                {showProblemSolving.mytestweb ? '▲ 문제 해결 과정 닫기' : '▼ 문제 해결 과정 보기'}
              </button>
              {showProblemSolving.mytestweb && (
                <div className="detail-content">
                  <div>
                    <p>문제 해결 과정</p>
                    <p></p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="lastc" className="section">
          <h2>💬 마무리 멘트</h2>
          <div className="closing-content">
            <p>
              다양한 프로젝트를 통해 풀스택 개발 역량을 쌓아왔으며, 팀 프로젝트에서 팀장으로서 
              협업과 소통의 중요성을 경험했습니다. 문제 해결 과정에서 끊임없이 학습하고 개선하는 자세로 
              성장해왔습니다.
            </p>
            <p>
              앞으로도 지속적인 학습을 통해 기술 역량을 강화하고, 취업 후에도 학점은행제를 통해 
              기본 역량을 보완하며 전문성을 더욱 높여나가겠습니다.
            </p>
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
