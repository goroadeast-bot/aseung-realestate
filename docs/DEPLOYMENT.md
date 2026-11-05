# Headroom 없이 배포하기

이 홈페이지는 GitHub Pages로 배포된다. 채팅의 모델 제공자와 배포 경로는 별개이며, 이 프로젝트를 연 새 채팅에서 Git과 GitHub CLI로 계속 작업할 수 있다.

- 저장소: https://github.com/goroadeast-bot/aseung-realestate
- 운영 사이트: https://xn--2q1b16p8rcqvc8ye.com/
- 게시 원본: `main` 브랜치의 `/` 경로 (`legacy` Pages 빌드)
- 로컬 작업 폴더: `D:\claude_homepage`
- 이 PC의 실행 도구: `git`, `gh`, `node`; GitHub 계정은 `goroadeast-bot`이다. 인증 정보는 GitHub CLI의 기존 저장소를 이용하며 문서에 복사하지 않는다.

## 새 채팅에서 이어가기

기존 채팅에서 `This chat uses headroom, but your current provider is openai` 오류가 나면 이 폴더를 연 새 채팅에서 아래처럼 요청한다.

> AGENTS.md와 docs/DEPLOYMENT.md를 읽고, 최신 매물 순위를 갱신해 GitHub Pages로 배포해줘.

작업 맥락은 [작업 기록](WORK_LOG.md), 최근 `listing-ranking-audit-*.md`, `.serena/memories/listing-ranking-modal-update.md`에서 확인한다. 채팅 기록이나 전역 제공자 설정을 수정할 필요 없이 프로젝트 파일로 작업을 이어간다.

## 배포 절차

1. `git status --short`, `git branch --show-current`, `gh auth status`로 변경 사항, `main`, GitHub 인증을 확인한다. 다른 작업의 변경은 보존한다. 원격에 새 커밋이 있으면 내용을 확인하고 합친다.
2. 매물 배포 요청이면 5일장·제주교차로의 현재 유형별 순위를 새로 조회한다. 상세 페이지의 매물번호와 실제 사진을 모두 확인하고 `js/script.js`의 전문분야·대표·추천 배열을 함께 갱신한다. 원본 사진이 없거나 서비스 로고만 있으면 `images/listings/photo-unavailable.svg`를 사용한다. 세부 유형·개수 기준은 프로젝트 메모리와 최신 순위 기록을 따른다.
3. `index.html`의 CSS/JS 캐시 버전을 갱신하고, 참조 사진의 존재·파일 형식, 대표/전문분야 데이터 일치, 변경 범위를 확인한다. 아래 점검이 성공해야 게시한다.

   ```powershell
   Set-Location -LiteralPath 'D:\claude_homepage'
   node --check js/script.js
   git diff --check
   ```

4. 확인한 작업 파일만 `git add -- <파일 경로>`로 선택해 커밋하고 `git push origin main`을 실행한다. `.agents/` 같은 다른 작업의 미추적 파일은 포함하지 않는다. Pages 빌드는 GitHub에서 자동으로 시작된다.
5. 아래 조회에서 **푸시한 커밋과 같은 `headSha`**인 실행이 `completed / success`인지 확인한다. 이전 성공 실행을 새 배포 결과로 취급하지 않는다. 실행 중인 ID는 `gh run view <실행 ID> --repo goroadeast-bot/aseung-realestate`로 확인할 수 있다.

   ```powershell
   gh run list --repo goroadeast-bot/aseung-realestate --limit 5 --json databaseId,headSha,status,conclusion,url
   gh api repos/goroadeast-bot/aseung-realestate/pages/builds/latest --jq '{status:.status,commit:.commit,error:.error.message}'
   ```

6. 운영 사이트에서 새 캐시 버전과 실제 공개 JS 데이터를 확인하고, 참조 이미지가 모두 정상 응답하며 로컬 파일과 해시가 같은지 확인한다. HTML/CSS/JS 텍스트의 바이트는 `git show <게시한 커밋>:<파일 경로>` 결과와 대조한다. Windows 작업 폴더의 CRLF와 게시된 LF 차이를 배포 실패로 취급하지 않는다. 배포 커밋·Pages 실행 링크·측정 결과와 남은 문제를 [작업 기록](WORK_LOG.md)에 남긴다.

배포 경로만 정비하는 요청은 매물 순위를 바꾸지 않는다. Headroom 오류가 난 이전 채팅의 재시작 성공과 GitHub Pages 배포 성공도 별도로 구분한다.
