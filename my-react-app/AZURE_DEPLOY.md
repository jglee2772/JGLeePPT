# Azure Static Web Apps 배포 가이드

이 가이드는 React 포트폴리오를 Microsoft Azure Static Web Apps에 배포하는 방법을 설명합니다.

## 방법 1: Azure Portal을 통한 배포 (권장)

### 1단계: Azure Static Web Apps 리소스 생성

1. [Azure Portal](https://portal.azure.com)에 로그인
2. "리소스 만들기" 클릭
3. "Static Web App" 검색 후 선택
4. "만들기" 클릭

### 2단계: 기본 설정 구성

다음 정보를 입력하세요:

- **구독**: 사용할 Azure 구독 선택
- **리소스 그룹**: 새로 만들거나 기존 그룹 선택
- **이름**: 웹앱 이름 (예: `jglee-portfolio`)
- **플랜 유형**: 
  - **Free**: 무료 (개인 프로젝트에 적합)
  - **Standard**: 유료 (프로덕션 환경)
- **Azure Functions 및 스테이징 환경**: 필요시 선택
- **지역**: 가장 가까운 지역 선택 (예: `Korea Central`)

### 3단계: 배포 소스 연결

**GitHub를 사용하는 경우:**
1. "GitHub로 로그인" 클릭
2. GitHub 계정 인증
3. **조직**: GitHub 사용자명 또는 조직 선택
4. **리포지토리**: `my-react-app` 또는 실제 리포지토리 이름 선택
5. **분기**: `main` 또는 `master` 선택
6. **빌드 사전 설정**: "Custom" 선택
7. **앱 위치**: `/` (루트)
8. **API 위치**: 비워두기 (API 없음)
9. **출력 위치**: `dist` (Vite 빌드 출력 폴더)

**Azure DevOps를 사용하는 경우:**
- Azure DevOps 옵션 선택 후 조직 및 프로젝트 연결

### 4단계: 검토 및 생성

1. "검토 + 만들기" 클릭
2. 설정 확인 후 "만들기" 클릭
3. 배포가 완료될 때까지 대기 (약 2-3분)

### 5단계: 배포 확인

1. 리소스가 생성되면 "리소스로 이동" 클릭
2. "개요" 페이지에서 **URL** 확인
   - 예: `https://jglee-portfolio.azurestaticapps.net`
3. GitHub에 코드를 푸시하면 자동으로 배포됩니다

## 방법 2: Azure CLI를 통한 배포

### 사전 요구사항

1. [Azure CLI 설치](https://docs.microsoft.com/cli/azure/install-azure-cli)
2. Node.js 및 npm 설치 확인

### 1단계: Azure 로그인

```bash
az login
```

### 2단계: 리소스 그룹 생성 (없는 경우)

```bash
az group create --name myResourceGroup --location koreacentral
```

### 3단계: Static Web App 생성

```bash
az staticwebapp create \
  --name jglee-portfolio \
  --resource-group myResourceGroup \
  --location koreacentral \
  --sku Free
```

### 4단계: GitHub 연결

```bash
az staticwebapp appsettings set \
  --name jglee-portfolio \
  --resource-group myResourceGroup \
  --setting-names "GITHUB_TOKEN" \
  --setting-values "YOUR_GITHUB_TOKEN"
```

### 5단계: 로컬 빌드 및 배포

```bash
# 프로젝트 빌드
npm run build

# Azure에 배포
az staticwebapp deploy \
  --name jglee-portfolio \
  --resource-group myResourceGroup \
  --app-location "/" \
  --output-location "dist"
```

## 방법 3: GitHub Actions를 통한 자동 배포

이미 `.github/workflows/azure-static-web-apps.yml` 파일이 생성되어 있습니다.

### 1단계: Azure Static Web App 생성

방법 1 또는 방법 2를 사용하여 Static Web App 리소스를 생성하세요.

### 2단계: 배포 토큰 가져오기

1. Azure Portal에서 Static Web App 리소스로 이동
2. "개요" 페이지에서 **배포 토큰** 클릭
3. 토큰 복사

### 3단계: GitHub Secrets 설정

1. GitHub 리포지토리로 이동
2. **Settings** → **Secrets and variables** → **Actions** 클릭
3. **New repository secret** 클릭
4. 이름: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. 값: 2단계에서 복사한 배포 토큰
6. **Add secret** 클릭

### 4단계: 코드 푸시

```bash
git add .
git commit -m "Azure 배포 설정 추가"
git push origin main
```

GitHub Actions가 자동으로 빌드하고 배포합니다.

## vite.config.js 설정 확인

Azure Static Web Apps는 루트 경로에서 실행되므로, `vite.config.js`의 `base` 설정을 확인하세요:

```javascript
// Azure 배포용 (루트 경로)
base: '/'

// 또는 서브 경로가 필요한 경우
base: '/JGLeePPT/'
```

현재 설정이 `/JGLeePPT/`로 되어 있다면, Azure에서는 루트 경로(`/`)로 변경하는 것을 권장합니다.

## 배포 후 확인사항

1. **URL 접속**: Azure Portal에서 제공하는 URL로 접속
2. **자동 배포**: GitHub에 푸시하면 자동으로 재배포됨
3. **커스텀 도메인**: 필요시 Azure Portal에서 도메인 설정 가능

## 문제 해결

### 빌드 실패 시

1. Azure Portal → Static Web App → **배포** 탭 확인
2. 빌드 로그에서 오류 확인
3. `package.json`의 빌드 스크립트 확인: `"build": "vite build"`

### 404 오류 시

- `staticwebapp.config.json` 파일이 올바르게 설정되었는지 확인
- 모든 라우트가 `index.html`로 리다이렉트되도록 설정됨

### 자동 배포가 안 될 때

- GitHub Secrets에 `AZURE_STATIC_WEB_APPS_API_TOKEN`이 올바르게 설정되었는지 확인
- GitHub Actions 탭에서 워크플로우 실행 상태 확인

## 비용

- **Free 플랜**: 
  - 월 100GB 대역폭
  - 무제한 사이트
  - 커스텀 도메인 지원
  - SSL 인증서 자동 제공

- **Standard 플랜**: 
  - 더 많은 대역폭
  - 더 많은 기능
  - 프로덕션 환경에 적합

## 추가 리소스

- [Azure Static Web Apps 문서](https://docs.microsoft.com/azure/static-web-apps/)
- [Azure Static Web Apps 가격](https://azure.microsoft.com/pricing/details/app-service/static/)

