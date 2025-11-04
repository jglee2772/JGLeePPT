# GitHub Pages 배포 가이드

## 1. GitHub 리포지토리 생성

1. GitHub에 새 리포지토리를 생성합니다 (예: `portfolio`)
2. 리포지토리를 로컬에 클론합니다

## 2. 프로젝트 설정

### vite.config.js 수정
- `base` 경로를 실제 리포지토리 이름으로 변경하세요
- 예: 리포지토리 이름이 `portfolio`라면 `base: '/portfolio/'`로 설정

### 패키지 설치
```bash
npm install
```

## 3. GitHub Pages 설정

1. GitHub 리포지토리 페이지로 이동
2. Settings → Pages로 이동
3. Source에서 "Deploy from a branch" 선택
4. Branch: `gh-pages` 선택
5. Folder: `/ (root)` 선택
6. Save 클릭

## 4. 배포

### 첫 배포
```bash
npm run deploy
```

### 이후 업데이트
코드를 수정한 후 **두 가지 모두** 실행해야 합니다:

1. **소스 코드 저장** (main 브랜치)
   ```bash
   git add .
   git commit -m "변경 사항 설명"
   git push origin main
   ```

2. **사이트 배포** (gh-pages 브랜치)
   ```bash
   npm run deploy
   ```

**중요**: 
- `git push origin main`: 소스 코드를 GitHub에 저장 (버전 관리)
- `npm run deploy`: 빌드된 파일을 gh-pages 브랜치에 배포 (실제 사이트 업데이트)
- 두 작업 모두 해야 소스 코드도 저장되고 사이트도 업데이트됩니다!

## 5. 접속 확인

배포가 완료되면 (몇 분 소요):
- URL: `https://[사용자명].github.io/JGLeePPT/`
- 예: `https://jglee2772.github.io/JGLeePPT/`

## 주의사항

- `vite.config.js`의 `base` 경로가 리포지토리 이름과 일치해야 합니다
- 배포 후 변경사항 반영까지 1-2분 정도 소요될 수 있습니다
- `gh-pages` 브랜치가 자동으로 생성됩니다

