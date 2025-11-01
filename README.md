# JejU-Again (제주어게인)

**데이터 기반 '관광약자-지역상생' 맞춤형 내비게이션**

"가장 빠른 길이 아닌, 가장 편안한 길"

## 📋 프로젝트 개요

JejU-Again은 제주의 오버투어리즘(관광 쏠림 현상)과 관광약자(시니어, 영유아 동반 가족)의 관광 소외 문제를 동시에 해결하는 AI 기반 웹 애플리케이션입니다.

사용자의 프로필에 맞춰 혼잡을 회피하고, 읍면 지역의 숨겨진 장소를 연결하는 맞춤형 '안심 상생' 여행 코스를 제안합니다.

## ✨ 주요 기능

### [F1] 관광약자 프로파일링
- 5가지 프로필 선택: 액티브 시니어, 케어 시니어, 유아 동반 가족, 영아 동반 가족, 일반 관광객
- 프로필 정보는 로컬 스토리지에 저장

### [F2] AI 안심 코스 생성
- Claude Sonnet 4.0 API를 활용한 맞춤형 일정 생성
- 혼잡 지역 자동 회피
- 관광약자 선호도 기반 장소 추천
- 지역 상생을 위한 로컬 상점 포함

### [F3] 인터랙티브 지도 뷰
- Naver Maps API를 통한 코스 시각화
- 경유지 마커 표시 및 정보 제공
- 경로 연결 표시

### [F4] 실시간 혼잡도 시뮬레이션 (구현 예정)
- Mock 데이터를 통한 혼잡도 정보 제공
- 혼잡 지역 시각화

### [F5] Google Sheets 저장 (구현 예정)
- 생성된 일정 저장 기능
- 저장된 일정 조회 기능

## 🛠️ 기술 스택

| 구분 | 기술 | 설명 |
|------|------|------|
| **Frontend** | Next.js 16 (App Router) | React 기반 풀스택 프레임워크 |
| **Styling** | Tailwind CSS | 유틸리티 기반 CSS 프레임워크 |
| **Language** | TypeScript | 타입 안정성을 위한 언어 |
| **Backend** | Next.js API Routes | Serverless 함수로 동작 |
| **AI** | Claude Sonnet 4.0 | Anthropic AI API |
| **Maps** | Naver Maps API v3 | 한국 환경에 최적화된 지도 |
| **Database** | Google Sheets API | MVP용 경량 데이터베이스 |
| **Deployment** | Vercel | CI/CD 통합 배포 플랫폼 |

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd jeju-again

# 의존성 설치
npm install
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
# Anthropic Claude API
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Naver Maps API (Client ID for frontend)
NEXT_PUBLIC_NAVER_CLIENT_ID=your_naver_client_id_here

# Google Sheets API (Optional for MVP)
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id_here
```

### API 키 발급 방법

#### 1. Anthropic Claude API
1. [Anthropic Console](https://console.anthropic.com/)에 가입
2. API Keys 메뉴에서 새 API 키 생성
3. `.env.local`에 `ANTHROPIC_API_KEY`로 설정

#### 2. Naver Maps API
1. [Naver Cloud Platform](https://www.ncloud.com/)에 가입
2. AI·NAVER API > Maps > Application 등록
3. Client ID를 `.env.local`에 `NEXT_PUBLIC_NAVER_CLIENT_ID`로 설정

#### 3. Google Sheets API (선택사항)
1. [Google Cloud Console](https://console.cloud.google.com/)에서 프로젝트 생성
2. Google Sheets API 활성화
3. 서비스 계정 생성 및 JSON 키 다운로드
4. 키 정보를 `.env.local`에 설정

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
jeju-again/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── generate-itinerary/
│   │       └── route.ts      # 일정 생성 API
│   ├── page.tsx              # 메인 페이지
│   └── layout.tsx            # 레이아웃
├── components/               # React 컴포넌트
│   ├── ProfileSelection.tsx  # 프로필 선택
│   ├── ItineraryGenerator.tsx # 일정 생성기
│   ├── ItineraryForm.tsx     # 일정 입력 폼
│   ├── ItineraryDisplay.tsx  # 일정 표시
│   └── NaverMapView.tsx      # 지도 뷰
├── data/                     # Mock 데이터
│   ├── mockPOIs.json         # 관심 장소
│   ├── mockCongestion.json   # 혼잡도 정보
│   └── mockLocalShops.json   # 지역 상점
├── docs/                     # 문서
│   └── prd.md                # 제품 요구사항 문서
├── types/                    # TypeScript 타입 정의
│   └── index.ts
└── README.md
```

## 🎯 주요 목표 (OKR)

### 1. 관광약자의 여행 만족도 극대화
- 생성된 일정에 대한 사용자 만족도 4.5/5.0 달성
- '혼잡 회피' 기능 긍정 평가율 90%

### 2. 관광객의 읍면 지역 분산 유도
- AI 생성 일정의 80% 이상에 소외 읍면지역 POI 포함
- 핫플레이스 추천 비율 10% 미만 유지

### 3. 성공적인 MVP 출시
- 3개월 내 핵심 기능 구현 및 Vercel 배포 완료

## 👥 대상 사용자

### 액티브 시니어 (65-74세)
- 건강하지만 장시간 걷기가 부담스러운 분
- 조용한 숲길, 경치 좋은 카페 선호

### 케어 시니어 (75세 이상)
- 짧은 산책과 편안한 휴식 선호
- 접근성이 좋은 장소 필요

### 유아 동반 가족 (3-6세)
- 아이들이 뛰어놀 수 있는 체험 활동 선호
- 넓은 공간과 안전한 환경 필요

### 영아 동반 가족 (0-2세)
- 유모차 접근성과 수유실 필수
- 아이 케어 시설이 있는 장소 선호

## 🗺️ 로드맵

### Version 1.0 (MVP) - 현재
- ✅ 기본 프로파일링
- ✅ AI 코스 생성
- ✅ 지도 시각화
- ⏳ 혼잡도 시뮬레이션
- ⏳ Google Sheets 저장

### Version 1.1 (계획)
- 실제 제주 관광 데이터 통합
- 사용자 피드백 수집 기능

### Version 2.0 (계획)
- 실시간 혼잡도 API 연동
- 사용자 인증 시스템
- 소셜 공유 기능

## 📝 라이선스

MIT License

## 🤝 기여

이슈와 풀 리퀘스트를 환영합니다!

## 📧 문의

프로젝트 관련 문의사항이 있으시면 이슈를 생성해주세요.

---

**JejU-Again** - 제주의 모든 사람이 편안하게 여행할 수 있는 세상을 만듭니다.
