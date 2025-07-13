# Barosa - 자동 업로드 시스템

이 프로젝트는 GitHub에 자동으로 수정본을 업로드하는 시스템을 포함하고 있습니다.

## 🚀 자동 업로드 방법

### 1. GitHub Actions (권장)
- `.github/workflows/` 폴더에 자동 업로드 워크플로우가 설정되어 있습니다
- 파일을 수정하고 GitHub에 푸시하면 자동으로 배포됩니다
- GitHub Pages에서 `https://barosa.shop`으로 접속 가능합니다

### 2. 로컬 자동 감지 스크립트
```bash
# 자동 감지 모드 (파일 변경 시 자동 업로드)
./auto-upload.sh

# Ctrl+C로 종료
```

### 3. 빠른 업로드 스크립트
```bash
# 현재 변경사항을 즉시 업로드
./quick-upload.sh
```

## 📁 프로젝트 구조

```
barosa/
├── .github/workflows/     # GitHub Actions 워크플로우
│   ├── auto-commit.yml    # 자동 커밋 워크플로우
│   └── auto-deploy.yml    # 자동 배포 워크플로우
├── calculator37/          # 계산기 서비스
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── translations.js
├── index.html             # 메인페이지
├── styles.css             # 메인 스타일
├── script.js              # 메인 스크립트
├── translations.js        # 다국어 번역
├── auto-upload.sh         # 자동 감지 스크립트
├── quick-upload.sh        # 빠른 업로드 스크립트
├── sitemap.xml           # 사이트맵
├── robots.txt            # 검색엔진 설정
└── CNAME                 # 도메인 설정
```

## 🌐 지원 언어

- 🇰🇷 한국어 (기본)
- 🇺🇸 영어
- 🇯🇵 일본어
- 🇨🇳 중국어
- 🇪🇸 스페인어
- 🇫🇷 프랑스어
- 🇩🇪 독일어
- 🇷🇺 러시아어
- 🇵🇹 포르투갈어
- 🇮🇹 이탈리아어

## 🔧 설정 방법

### 1. Git 저장소 설정
```bash
# 원격 저장소 추가 (아직 설정하지 않은 경우)
git remote add origin https://github.com/IamG37/Calcurator37.git

# 브랜치를 main으로 설정
git branch -M main
```

### 2. GitHub Pages 설정
1. GitHub 저장소 설정 → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Custom domain: barosa.shop

### 3. 도메인 설정
- `CNAME` 파일에 `barosa.shop`이 설정되어 있습니다
- DNS 설정에서 CNAME 레코드를 `username.github.io`로 설정하세요

## 📝 사용법

### 자동 감지 모드
```bash
./auto-upload.sh
```
- 파일을 수정하면 5초 후 자동으로 감지하여 업로드
- 터미널을 계속 열어두어야 함

### 수동 업로드
```bash
./quick-upload.sh
```
- 현재 변경사항을 즉시 업로드
- 한 번만 실행하면 됨

### GitHub Actions
- 파일을 수정하고 GitHub에 푸시하면 자동으로 배포
- 별도 설정 불필요

## 🔍 문제 해결

### 푸시 실패 시
```bash
# 원격 저장소 확인
git remote -v

# 브랜치 확인
git branch -a

# 강제 푸시 (주의: 기존 히스토리 덮어씀)
git push origin main --force
```

### 권한 문제 시
```bash
# 스크립트 실행 권한 부여
chmod +x auto-upload.sh
chmod +x quick-upload.sh
```

## 📞 지원

문제가 발생하면 GitHub Issues에 문의해주세요.

---

**Barosa** - 자동화된 웹 서비스 플랫폼 