

# 제품 요구사항 문서 (PRD): JejU-Again (제주어게인)

  * **프로젝트명:** JejU-Again (제주어게인)
  * **부제:** 데이터 기반 '관광약자-지역상생' 맞춤형 내비게이션
  * **작성일:** 2025년 11월 1일
  * **버전:** 1.1 (사용자 요구사항 반영)

## 1\. 개요

### 1.1. 제품 비전

'JejU-Again'은 제주의 고질적인 오버투어리즘(관광 쏠림 현상) [1]과 '다수 관광약자' (시니어, 영유아 동반 가족) [2]의 관광 소외 문제를 동시에 해결하는 지능형 웹 애플리케이션입니다.
"가장 빠른 길이 아닌, 가장 편안한 길"을 모토로, 사용자 프로필에 맞춰 혼잡을 회피하고 읍면 지역의 숨겨진 장소를 연결하는 맞춤형 '안심 상생' 여행 코스를 제안합니다.

### 1.2. 문제 정의

1.  **관광 쏠림 현상 (Overtourism):** 관광객의 90%가 특정 유명 관광지(예: 해안가, 제주시 동문시장)에 집중되어 [1] 관광객의 만족도는 하락하고 지역 주민의 피로도는 증가하며, 다수의 읍면 지역 상권은 소외됩니다.[1]
2.  **'다수 관광약자' 시장의 부재:** 제주 관광약자의 86%는 '시니어(고령자)'와 '영유아 동반 가족'입니다.[2] 이들은 '물리적 장벽'(휠체어 등)보다 '경험적 장벽'(극심한 혼잡, 소음, 대기 시간, 유아 케어 시설 부재)으로 인해 여행에 제약을 받습니다. 이 거대 시장을 위한 특화 서비스가 전무합니다.

### 1.3. 해결 방안

Next.js 기반 웹 앱을 통해, 사용자의 '관광약자 프로필'을 입력받습니다. **Claude Sonnet 4.0 API**를 활용하여, 제주관광 빅데이터(Mockup)를 기반으로 해당 프로필에 최적화된 '안심 코스'를 AI가 실시간으로 생성합니다. 이 코스는 의도적으로 혼잡 지역을 회피하고, 관광약자 선호도(예: 시니어-숲/오름, 영유아-체험) [2]가 높은 비인기 읍면 지역으로 사용자를 유도합니다. 생성된 코스는 Naver Maps API를 통해 시각화된 내비게이션 경로로 제공됩니다.

## 2\. 목표 및 핵심 성과 지표 (OKR)

| Objective (목표) | Key Results (핵심 결과) |
| :--- | :--- |
| **1. 관광약자(시니어, 영유아)의 여행 만족도 극대화** | KR 1.1: 생성된 일정에 대한 사용자 만족도 점수 4.5/5.0 달성<br>KR 1.2: 사용자가 '혼잡 회피' 기능을 긍정적으로 평가하는 비율 90% |
| **2. 관광객의 '읍면 지역' 분산 유도** | KR 2.1: AI가 생성하는 일정의 80% 이상이 '소외 읍면지역' POI를 1개 이상 포함<br>KR 2.2: '핫플레이스' (Mock 데이터상 '혼잡' 지역)가 추천 일정에 포함되는 비율 10% 미만 유지 |
| **3. 성공적인 MVP(Minimum Viable Product) 출시** | KR 3.1: 3개월 내 핵심 기능(프로파일링, AI 코스 생성, 지도 시각화, 일정 저장)을 구현하여 Vercel 배포 완료 |

## 3\. 대상 사용자 (User Personas)

### 3.1. Persona 1: 액티브 시니어 (김철수, 68세)

  * **특징:** 은퇴 후 아내와 2인 여행. 건강하지만 장시간 걷거나 계단이 많은 곳은 부담스러움.
  * **선호:** 조용한 숲길 [2], 경치 좋은 카페, 역사 유적지.
  * **불만 (Pain Point):** "관광지가 다 젊은 사람들뿐이라 시끄럽고 정신없어. 어딜 가나 줄 서야 하고... 조용히 산책하고 싶은데."
  * **요구 (Needs):** "사람 없고, 걷기 편하고, 주차하기 쉬운 '숨겨진 명소'를 추천해 줬으면 좋겠어."

### 3.2. Persona 2: 영유아 동반 가족 (이수진, 34세)

  * **특징:** 4세 아이, 1세 유아(유모차)와 함께하는 4인 가족.
  * **선호:** 아이들이 뛰어놀 수 있는 넓은 공간, 동물/식물 체험.[2]
  * **불만 (Pain Point):** "유모차 끌고 다니기 너무 힘들어요. '핫플' 맛집은 노키즈존이거나 계단뿐이고, 어딜 가나 사람이 많아 아이 잃어버릴까 봐 불안해요."
  * **요구 (Needs):** "유모차 접근이 가능하고, 수유실이 있으며, 아이들이 좋아할 만한 체험이 있는 '안심' 코스를 원해요."

## 4\. 제품 기능 (Functional Requirements)

### 4.1. [F1] 관광약자 프로파일링 (Onboarding)

  * **설명:** 앱 최초 진입 시, 사용자는 자신의 여행 유형을 정의하는 '안심 프로필'을 선택합니다.
  * **요구사항:**
      * `P0`: 프로필 선택 화면 UI (카드 형태).
      * `P0`: 선택 가능한 프로필 옵션:
        1.  **액티브 시니어** (65-74세, 걷기/자연 선호)
        2.  **케어 시니어** (75세+, 짧은 산책/카페 선호)
        3.  **유아 동반 가족** (3-6세, 체험/놀이 중심)
        4.  **영아 동반 가족** (0-2세, 유모차/수유실 필수)
        5.  **일반 관광객** (기본)
      * `P1`: 선택된 프로필 정보는 브라우저의 **로컬 스토리지(localStorage)에 저장됩니다. (MVP 범위에서는 회원가입 기능 제외)**

### 4.2. [F2] AI 안심 코스 생성 (Core Feature)

  * **설명:** 사용자가 프로필과 기본 정보를 입력하면, **Claude Sonnet 4.0 API**가 혼잡을 회피하는 맞춤형 일정을 생성합니다.
  * **요구사항:**
      * `P0`: 코스 생성 요청 UI:
          * 입력 1: '안심 프로필' (F1에서 자동 선택됨)
          * 입력 2: 여행 날짜 (Date Picker)
          * 입력 3: 희망 시간 (예: 반나절(4시간), 온종일(8시간))
          * 입력 4: 출발지 (Naver Maps API 연동 검색 또는 '제주공항' 기본값)
      * `P0`: '안심 코스 생성하기' 버튼 클릭 시, 백엔드 API (`/api/generate-itinerary`) 호출.
      * `P0`: 로딩 중 스켈레톤 UI 또는 스피너 표시.
      * `P0`: 생성된 코스(경유지 리스트)를 UI에 표시 (F3의 지도와 연동).
          * 각 경유지(Stop)는 장소명, 추천 시간, **"AI 추천 사유"** (예: "현재 '한적'하며, 유모차 접근이 가능한 숲길입니다.")를 반드시 포함해야 합니다.

### 4.3. [F3] 인터랙티브 지도 뷰 (Naver Maps API)

  * **설명:** [F2]에서 생성된 코스를 Naver Maps API를 통해 시각화합니다.
  * **요구사항:**
      * `P0`: Next.js 환경에서 Naver Maps API (예: `react-naver-maps`)를 로드합니다.
      * `P0`: 생성된 코스의 경유지를 커스텀 마커(예: 숫자 '1', '2', '3')로 지도에 표시합니다.
      * `P0`: Naver Maps Directions API를 활용하여 각 경유지를 잇는 최적 경로(Polyline)를 지도에 표시합니다.
      * `P1`: 마커 클릭 시, 해당 장소의 상세 정보(추천 사유, Mock POI 데이터)를 담은 정보창(InfoWindow)을 표시합니다.
      * `P1`: 지도와 일정 리스트(F2)는 상호작용합니다 (리스트 클릭 시 지도 이동, 마커 클릭 시 리스트 하이라이트).

### 4.4. [F4] 실시간 혼잡도 시뮬레이션

  * **설명:** 실제 `data.ijto.or.kr`의 실시간 API [3] 접근이 불가하므로, Mock 데이터를 통해 '혼잡 회피'의 당위성을 시각적으로 제공합니다.
  * **요구사항:**
      * `P1`: `mockCongestion.json` 데이터를 주기적으로(예: `setInterval` 30초) 페칭하는 시뮬레이션 구현.
      * `P2`: Naver Maps API의 커스텀 오버레이 기능을 활용하여, '주요 핫플레이스' 위치에 현재 '혼잡도' 아이콘(예: 😡 혼잡, 😐 보통, 😊 한적)을 표시합니다.
      * `P2`: 이 시뮬레이션은 AI가 왜 해당 장소들을 *회피*했는지 사용자에게 시각적으로 납득시키는 역할을 합니다.

### 4.5. [F5] '내 일정' 저장 (Google Sheets)

  * **설명:** 사용자가 생성된 '안심 코스'를 Google Sheets에 저장하고 추후에 다시 볼 수 있도록 합니다. (MVP에서는 별도 사용자 인증 없이, 생성된 일정의 고유 ID를 로컬 스토리지에 저장하여 관리합니다.)
  * **요구사항:**
      * `P1`: '내 일정 저장' 버튼 클릭 시, 생성된 일정(F2의 JSON 결과)을 Google Sheets에 저장하기 위한 백엔드 API (`/api/save-itinerary`)를 호출합니다.
      * `P1`: API는 성공 시 고유한 일정 ID(예: Google Sheet 행 번호 또는 UUID)를 반환하며, 이 ID는 클라이언트의 로컬 스토리지에 저장됩니다.
      * `P1`: '마이페이지' (또는 '저장된 일정')에서 로컬 스토리지에 저장된 ID 목록을 조회하고, ID를 클릭 시 백엔드 API (`/api/load-itinerary?id=...`)를 호출하여 Google Sheet에서 해당 코스를 다시 로드합니다.

## 5\. 기술 스택 및 아키텍처

| 구분 | 기술 | 사유 |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 14+ (App Router)** | React 기반의 풀스택 프레임워크, Vercel 배포 최적화. |
| **Deployment** | **Vercel** | Next.js와 완벽하게 통합되며, GitHub 연동 CI/CD가 간편함. |
| **UI/Styling** | **Tailwind CSS** | 유틸리티 기반 스타일링으로 빠른 프로토타이핑에 용이함. |
| **Backend** | **Next.js API Routes (Serverless)** | Vercel의 Serverless Function으로 동작하며, 별도 백엔드 서버 없이 API 구현 가능. |
| **Database** | **Google Sheets API** | **(사용자 지정)** MVP 범위 내에서 '내 일정 저장' 기능을 위한 경량 데이터베이스로 활용. |
| **Auth** | **(제외)** | **(사용자 지정)** MVP 범위에서는 별도 인증 기능 제외. (로컬 스토리지로 일정 ID 관리) |
| **Core AI Logic** | **Claude Sonnet 4.0 API** | **(사용자 지정)** 고성능 LLM으로, 복잡한 지침(Prompt)을 이해하고 구조화된 JSON 응답 생성에 탁월함. |
| **Maps** | **Naver Maps API v3 (NCP)** | 한국 환경(제주)에 가장 적합한 지도 데이터와 강력한 API(경로탐색, 커스텀 오버레이) 제공. |

-----

## 6\. 데이터 요구사항 (Mock Data)

모든 데이터는 `/src/data/` 경로에 JSON 파일로 생성하여 사용합니다.

### 6.1. `mockPOIs.json` (관심 장소)

  * **설명:** 제주도의 주요 관광지 및 비인기 장소 목록. AI가 코스를 생성하는 기본 재료.
  * **Schema:**
    ```json
    ```

,
"accessibility": { "stroller": false, "wheelchair": false, "parking": true }
},
{
"id": "POI045",
"name": "사려니숲길 (붉은오름 입구)",
"category": "FOREST",
"region": "Jocheon",
"lat": 33.4290, "lon": 126.6817,
"profile\_target":,
"accessibility": { "stroller": true, "wheelchair": true, "parking": true }
},
{
"id": "POI072",
"name": "보롬왓",
"category": "EXPERIENCE",
"region": "Pyoseon",
"lat": 33.4150, "lon": 126.7580,
"profile\_target":,
"accessibility": { "stroller": true, "wheelchair": false, "parking": true }
}
]
\`\`\`

### 6.2. `mockCongestion.json` (혼잡도 시뮬레이션)

  * **설명:** '핫플레이스'의 가상 실시간 혼잡도. [F4] 기능과 [F2]의 AI 프롬프트에 활용됨.
  * **Schema:**
    ```json
    {
      "timestamp": "2025-11-01T14:30:00Z",
      "levels":
    }
    ```

### 6.3. `mockLocalShops.json` (지역 상생 상점)

  * **설명:** 읍면 지역의 로컬 식당, 카페, 체험 농장 리스트. AI가 코스 중간에 포함시킬 '상생' POI.
  * **Schema:**
    ```json
    ```

,
"accessibility": { "stroller": true, "wheelchair": false, "parking": true }
}
]
\`\`\`

## 7\. API 설계 및 연동

### 7.1. 내부 API (Next.js)

  * `POST /api/generate-itinerary`:
      * **설명:** 프론트엔드로부터 사용자 요청을 받아, Mock 데이터를 취합하고 Claude API를 호출하여 최종 코스를 반환.
  * `POST /api/save-itinerary`:
      * **설명:** [F5] '내 일정 저장' 시, 클라이언트로부터 받은 일정 JSON을 Google Sheets API를 통해 시트에 추가.
  * `GET /api/load-itinerary?id=[sheet_row_id]`:
      * **설명:** [F5] '내 일정 조회' 시, Google Sheets API를 통해 특정 행(ID)의 일정 데이터를 조회하여 반환.

### 7.2. 외부 API 1: Claude Sonnet 4.0 API (Anthropic)

  * **설명:** `api/generate-itinerary` 내부에서 호출됩니다. 핵심은 'Prompt Engineering'입니다.
  * **Endpoint:** `https://api.anthropic.com/v1/messages`
  * **Key (ENV):** `ANTHROPIC_API_KEY`
  * **요청 프롬프트 (예시):**
    ```xml
    <system>
    당신은 제주도 관광 전문가 'JejU-Again'입니다. 당신의 임무는 '관광약자' 프로필에 맞춰 '혼잡을 회피'하고 '지역 상생'을 돕는 여행 코스를 생성하는 것입니다.

    # 지침
    1. 사용자의 프로필(${profile})에 맞는 장소를 ${mockPOIs} 목록에서 선택합니다.
    2. ${mockCongestion} 데이터를 참조하여 'CROWDED' 또는 'NORMAL' 상태인 장소는 *반드시* 제외합니다.
    3. ${duration_hours}에 맞춰 3~4개의 경유지를 선정합니다.
    4. 경유지 중 최소 1개는 ${mockLocalShops} 목록의 식당, 카페, 체험을 포함해야 합니다.
    5. 각 경유지별로 ${profile}에 맞춰 "reason" (추천 사유)을 1-2줄로 작성해야 합니다.
    6. 응답은 반드시 지정된 JSON 형식으로만 출력해야 합니다.
    </system>

    <user>
    # 사용자 요청
    - 프로필: ${profile}
    - 총 시간: ${duration_hours}
    - 출발지: 제주공항

    # 활용 가능 데이터
    - POIs: ${JSON.stringify(mockPOIs)}
    - 혼잡도: ${JSON.stringify(mockCongestion)}
    - 지역상점: ${JSON.stringify(mockLocalShops)}

    # 출력 JSON 형식
    {
      "stops": [
        { "poiId": "...", "name": "...", "time": "HH:MM - HH:MM", "reason": "..." }
      ]
    }
    </user>
    ```

### 7.3. 외부 API 2: Naver Maps API (NCP)

  * **설명:** 프론트엔드에서 지도 렌더링, 마커 표시, 경로 그리기에 사용됩니다.
  * **Key (ENV):** `NEXT_PUBLIC_NAVER_CLIENT_ID`
  * **주요 사용 기능:**
      * `new naver.maps.Map()`: 지도 초기화
      * `new naver.maps.Marker()`: 경유지 마커 표시
      * `new naver.maps.Polyline()`: 경로 표시
      * `new naver.maps.InfoWindow()`: 정보창 표시
      * `naver.maps.Service.directions()`: (선택) 경유지 간 운전 경로 Polyline 반환

### 7.4. 외부 API 3: Google Sheets API

  * **설명:** [F5] '내 일정' 저장을 위한 데이터베이스로 사용됩니다. Next.js 서버 측(API Routes)에서만 호출되어야 합니다.
  * **Key (ENV):** `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` (JSON 키 파일 내용), `GOOGLE_SHEET_ID`
  * **주요 사용 기능 (npm: `googleapis` 또는 `google-spreadsheet` 라이브러리 활용):**
      * `Authentication`: Google Cloud Console에서 생성한 서비스 계정(Service Account)을 사용하여 서버 측에서 인증합니다.
      * `spreadsheets.values.append()`: `/api/save-itinerary` 호출 시, JSON으로 직렬화된 일정 데이터를 시트의 새 행으로 추가합니다.
      * `spreadsheets.values.get()`: `/api/load-itinerary` 호출 시, 고유 ID(행 번호)를 기준으로 특정 행의 데이터를 불러옵니다.
  * **필수 설정:**
    1.  Google Cloud Console에서 프로젝트 생성 및 'Google Sheets API'를 활성화합니다.
    2.  서비스 계정을 생성하고, JSON 인증 키 파일을 발급받아 내용을 환경 변수로 안전하게 등록합니다.
    3.  데이터베이스로 사용할 Google Sheet 문서를 생성하고, 해당 시트를 발급받은 서비스 계정의 이메일 주소(`client_email`)와 '편집자(Editor)' 권한으로 공유해야 합니다.

## 8\. 비기능적 요구사항

  * **성능:** Vercel Edge Network를 활용하여 초기 페이지 로드(LCP) 2.5초 미만 달성. Naver Maps API 로드는 비동기(async) 처리.
  * **보안:** 모든 외부 API Key(Claude API Key, Google Sheets 서비스 계정 키)는 `process.env` (서버 환경 변수)로만 관리하며 클라이언트에 절대 노출 금지. `NEXT_PUBLIC_` 접두사는 Naver Client ID 등 클라이언트 노출이 불가피한 경우에만 제한적으로 사용.
  * **접근성 (A11y):** '관광약자'가 주 타겟이므로 WCAG 2.1 AA 레벨 준수. (명확한 대비, 큰 폰트 옵션, 키보드 탐색 지원)
  * **배포 (CI/CD):**
      * GitHub Repository와 Vercel 프로젝트 연동.
      * `main` 브랜치 Push 시: Production 자동 배포.
      * `dev` 브랜치 Push 시: Staging (Preview) URL 자동 배포.

## 9\. 릴리즈 계획 (가상)

### 9.1. Version 1.0 (MVP) - (본 PRD의 범위)

  * **핵심 기능:** F1, F2, F3, F4, F5.
  * **데이터:** Mock Data (JSON) 및 Google Sheets (일정 저장용)
  * **목표:** 핵심 가설(AI가 혼잡을 피하는 유용한 코스를 만드는가?) 및 Google Sheets를 DB로 활용하는 기능성 검증.

### 9.2. Version 1.1 (데이터 고도화)

  * **신규 기능:** `data.ijto.or.kr`의 다운로드 가능 데이터(CSV, Excel) [3]를 분석하여 `mockPOIs.json`을 실제 데이터 기반으로 고도화.

### 9.3. Version 2.0 (실시간 데이터 연동)

  * **신규 기능:** (제주관광공사 API가 공개될 경우) `mockCongestion.json`을 실제 실시간 혼잡도 API [3]로 교체하여 '시뮬레이션'이 아닌 '실시간' 서비스로 전환.