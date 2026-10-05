# 전예원 | Data Engineer Portfolio

공공 API 수집부터 정제, DB 설계, 벡터 검색, AWS EC2 배포와 운영까지 데이터 파이프라인 전 과정을 직접 설계하고 운영한 프로젝트 포트폴리오입니다.

- 웹 포트폴리오: https://<GitHub아이디>.github.io
- PDF: [assets/portfolio.pdf](assets/portfolio.pdf)

| 프로젝트 | 역할 | 핵심 성과 |
|---|---|---|
| LawSight: AI 판례 분석 및 소송 전략 시스템 | 팀장(PM), Data·DB·Infra 총괄 | 판례 3,503 → 41,438건, 검색 응답 20~60초 → 0.68초, 실서비스 운영 |
| My Task Pilot: AI Agent 업무 자동화 | Data / AI | SQLite → PostgreSQL+pgvector 전환, 운영 DB 6/6 테이블 정합성 검증 |
| 영화 예매 플랫폼 | 개인(단독) | 표준 기반 논리·물리 ERD → PostgreSQL → 예약 기능 구현 |

---

## 게시 방법 (GitHub Pages, 약 10분)

1. GitHub에 로그인한 뒤 **New repository**를 누릅니다.
   - 저장소 이름을 `<GitHub아이디>.github.io`로 정확히 입력합니다. 예: `yewon-jeon.github.io`
   - Public으로 설정하고 Create를 누릅니다.
2. 만들어진 저장소 화면에서 **uploading an existing file**을 누르고, 이 폴더 안의 파일과 폴더를 모두 끌어다 놓은 뒤 Commit합니다.
   - 올릴 것: `index.html`, `README.md`, `.nojekyll`, `assets/` 폴더 전체
   - `.nojekyll`이 숨김 파일이라 보이지 않아도 괜찮습니다. 없어도 사이트는 동작합니다.
3. 저장소의 **Settings → Pages**에서 Source를 `Deploy from a branch`, Branch를 `main` / `(root)`로 두고 Save합니다.
4. 1~2분 뒤 `https://<GitHub아이디>.github.io`에 접속해 확인합니다.

## 수정할 곳

- **GitHub 주소와 이메일**: `index.html` 위쪽의 `window.PROFILE`에 입력합니다. 비워 두면 버튼이 숨겨집니다.
- **PDF 교체**: `assets/portfolio.pdf`의 글꼴이 원본과 다를 수 있습니다. PowerPoint에서 공개용 PPT를 열어 **파일 → 내보내기 → PDF**로 저장하고, 같은 이름(`portfolio.pdf`)으로 덮어쓰면 됩니다.
- **회사별 지원 문구**: 이 사이트에는 특정 회사명을 넣지 않았습니다. 여러 회사에 같은 링크를 그대로 써도 됩니다.
