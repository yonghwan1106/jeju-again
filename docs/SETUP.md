# JejU-Again 설정 가이드

## 필수 환경 변수 설정

프로젝트를 실행하기 위해 다음 API 키들이 필요합니다.

### 1. Anthropic Claude API 키 발급 (필수)

#### 단계별 가이드:

1. **Anthropic Console 접속**
   - [https://console.anthropic.com/](https://console.anthropic.com/)에 접속
   - Google 계정 또는 이메일로 회원가입/로그인

2. **API 키 생성**
   - 좌측 메뉴에서 "API Keys" 선택
   - "Create Key" 버튼 클릭
   - 키 이름 입력 (예: "jeju-again-dev")
   - 생성된 API 키를 복사 (한 번만 표시됩니다!)

3. **환경 변수 설정**
   ```bash
   # .env.local 파일에 추가
   ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
   ```

#### 주의사항:
- API 키는 비공개로 유지해야 합니다
- Git에 커밋하지 마세요 (.gitignore에 이미 포함됨)
- 무료 티어: $5 크레딧 제공 (약 100-200개 일정 생성 가능)

---

### 2. Naver Maps API 키 발급 (필수)

#### 단계별 가이드:

1. **Naver Cloud Platform 가입**
   - [https://www.ncloud.com/](https://www.ncloud.com/) 접속
   - 회원가입 및 인증 완료 (휴대폰 인증 필요)

2. **프로젝트 생성**
   - Console > Services > AI·NAVER API > Maps 선택
   - "이용 신청하기" 클릭

3. **Application 등록**
   - "Application 등록" 버튼 클릭
   - 정보 입력:
     - Application 이름: JejU-Again
     - Service 선택: Web Dynamic Map
     - 서비스 URL: http://localhost:3000 (개발용)
     - 배포 후: Vercel URL 추가 (예: https://jeju-again.vercel.app)

4. **Client ID 복사**
   - 등록 완료 후 Application 목록에서 Client ID 확인
   - Client ID 복사

5. **환경 변수 설정**
   ```bash
   # .env.local 파일에 추가
   NEXT_PUBLIC_NAVER_CLIENT_ID=your_client_id_here
   ```

#### Vercel 배포 후 추가 설정:
```bash
# Vercel 프로젝트 설정에서 환경 변수 추가
vercel env add NEXT_PUBLIC_NAVER_CLIENT_ID
```

그리고 NCP Console에서:
- Application 설정 > 서비스 URL에 Vercel URL 추가

---

### 3. Google Sheets API 키 발급 (선택사항)

일정 저장 기능을 사용하려면 필요합니다. MVP에서는 선택사항입니다.

#### 단계별 가이드:

1. **Google Cloud Console 접속**
   - [https://console.cloud.google.com/](https://console.cloud.google.com/)
   - 프로젝트 생성 (예: jeju-again)

2. **API 활성화**
   - APIs & Services > Library
   - "Google Sheets API" 검색 및 활성화

3. **서비스 계정 생성**
   - APIs & Services > Credentials
   - "Create Credentials" > "Service Account"
   - 이름: jeju-again-service
   - 역할: Editor

4. **JSON 키 다운로드**
   - 생성된 서비스 계정 클릭
   - Keys > Add Key > Create new key
   - JSON 선택 및 다운로드

5. **Google Sheet 생성 및 공유**
   - Google Sheets에서 새 시트 생성
   - 시트 이름: JejU-Again-Itineraries
   - 시트 URL에서 ID 복사 (예: /d/{SHEET_ID}/edit)
   - 우측 상단 "공유" 클릭
   - JSON 파일의 `client_email` 추가 (편집자 권한)

6. **환경 변수 설정**
   ```bash
   # .env.local 파일에 추가
   GOOGLE_SERVICE_ACCOUNT_EMAIL=jeju-again-service@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEET_ID=1abc...xyz
   ```

---

## 환경 변수 확인

`.env.local` 파일이 다음과 같이 설정되어 있는지 확인하세요:

```env
# 필수
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
NEXT_PUBLIC_NAVER_CLIENT_ID=your_client_id_here

# 선택사항 (일정 저장 기능)
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
```

## Vercel 환경 변수 설정

Vercel에 배포할 때는 환경 변수를 설정해야 합니다:

### 방법 1: Vercel Dashboard
1. Vercel 프로젝트 > Settings > Environment Variables
2. 각 환경 변수 추가:
   - Name: ANTHROPIC_API_KEY
   - Value: (API 키 붙여넣기)
   - Environments: Production, Preview, Development

### 방법 2: Vercel CLI
```bash
vercel env add ANTHROPIC_API_KEY
vercel env add NEXT_PUBLIC_NAVER_CLIENT_ID
```

## 문제 해결

### Claude API 키가 작동하지 않는 경우
- Mock 데이터로 폴백됩니다
- API 키 형식 확인: `sk-ant-api03-`로 시작
- 크레딧 잔액 확인

### Naver Maps가 표시되지 않는 경우
- Client ID가 올바른지 확인
- NCP Console에서 서비스 URL이 등록되어 있는지 확인
- 브라우저 콘솔에서 에러 메시지 확인

### 일정 저장이 실패하는 경우
- Google Sheets API가 활성화되어 있는지 확인
- 서비스 계정이 시트에 편집자 권한이 있는지 확인
- Private Key의 줄바꿈(`\n`)이 올바르게 이스케이프되어 있는지 확인

## 추가 지원

문제가 계속되면 GitHub Issues에 문의하세요.
