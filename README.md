# 1주차 과제
> 원티드 프리온보딩 프론트엔드 5팀입니다.<br>
해당 레포지토리는 원티드 프리온보딩 사전과제로 만든 로그인/회원가입 기능이 있는 간략한 Todo List를 리팩토링한 레포지토리입니다.<br>
해당 프로젝트에서는 원티드에서 제공한 API를 사용하였습니다.

## [🔗 배포 URL](https://week1-assignment-bice.vercel.app/)
React App
Web site created using create-react-app

## 📆 진행 기간
**2023. 02. 21 ~ 2023. 02. 24**
<br>
<br>

## 👤 참여 인원
|   강승훈   |   김은우   |   박준수   |   박한나   |   석창환   |   이자윤   |   조현오   |
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|
|@seunghoonKang|@eunoo1995|@junsu1220|@hannaax|@Seok-CH|@jaypedia|@letsjo|
|<img src="https://avatars.githubusercontent.com/seunghoonKang" width="100">|<img src="https://avatars.githubusercontent.com/eunoo1995" width="100">|<img src="https://avatars.githubusercontent.com/junsu1220" width="100">|<img src="https://avatars.githubusercontent.com/hannaax" width="100">|<img src="https://avatars.githubusercontent.com/Seok-CH" width="100">|<img src="https://avatars.githubusercontent.com/jaypedia" width="100">|<img src="https://avatars.githubusercontent.com/letsjo" width="100">|
<br>

## 📄 Assignments

### #1 로그인/회원가입 기능 구현
<details>
<summary><h4>대표 요구사항</h4></summary>
<div markdown="1">

- [x]  회원가입, 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
- [x] 회원가입 페이지에서 버튼 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동
- [x] 로그인 페이지에서 버튼 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동
- [x] 로그인 여부에 따른 리다이렉트 처리를 구현

#### 구현 gif

</div>
</details>

### #2  Todo Create / Read

<details>
<summary><h4>대표 요구사항</h4></summary>
<div markdown="1">

- [x] /todo경로에 접속하면 투두 리스트의 목록 보이기
- [x] 목록에서는 TODO의 내용과 완료 여부가 표시
- [x] TODO의 완료 여부는 <input type="checkbox" />를 통해 표현
- [x] TODO는 li tag를 이용해 감싸기 
- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button 만들기

#### 구현 gif

</div>
</details>

### #3  Todo Update / Delete

<details>
<summary><h4>대표 요구사항</h4></summary>
<div markdown="1">

 - [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 구현
 - [x] TODO 우측에 수정버튼과 삭제 버튼 구현
 - [x] 투두 리스트의 삭제 기능을 구현
 - [x] 투두 리스트의 수정 기능을 구현
 
 #### 구현 gif
 
 </div>
</details>
 
<br>

## 🏃 진행 방식

### 🔥 Discord 채널을 활용한 주기적인 회의 진행
- 주기적인 회의를 통해 서로의 의견을 나누고, 다음 할 일에 대한 계획을 수립하였습니다.

### 🔥 [Issue 생성](https://github.com/wanted-pre-onboarding-team5/wanted-pre-onboarding-frontend-week1/issues)
- 개발 진행 과정을 요구사항을 분석하여 큰 단락으로 나누어 issue를 생성하였습니다.

### 🔥 [Pull requests](https://github.com/wanted-pre-onboarding-team5/wanted-pre-onboarding-frontend-week1)
- 로그인/회원가입 구현, TodoList(create/read), TodoList(update/delete), refactoring 네 번의 코드 리뷰를 진행하였습니다.

### 🔥 Notion을 활용한 관리
- 진행한 프로젝트의 문서화를 위해 notion을 활용하여 모든 구성원이 의견을 남기고 기록을 정리하였습니다.




<br>

## 🔧 사용 라이브러리

<div> 
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> 
  <img src="https://img.shields.io/badge/husky-5D4F85?style=for-the-badge&logo=husky&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"> 
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"> 
</div>

<br>

**axios** : 서버와 비동기 통신을 위해 사용했습니다. <br>
**react-router** : 직관적인 API로 SPA를 구축할 때 라우팅을 수월하게 할 수 있어 사용했습니다. <br>
**eslint** : 팀원간 코드 컨벤션을 통일하기 위해 사용했습니다. <br>
**prettier** : 팀원간 코드 포맷을 통일하기 위해 사용했습니다. <br>
**husky** : git hook의 사용을 강제하여 전원이 동일한 컨벤션을 유지하기 위해 사용했습니다.

<br>

## 📂 디렉토리 구조 ( 리팩토링 후 구조로 변경해야 함)

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜loginApi.js
 ┃ ┗ 📜todoApi.js
 ┣ 📂components
 ┃ ┗ 📂TodoList
 ┃ ┃ ┣ 📂TodoItem
 ┃ ┃ ┃ ┣ 📜hook.jsx
 ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┣ 📂constants
 ┃ ┣ 📜index.js
 ┃ ┣ 📜path.js
 ┃ ┗ 📜storage.js
 ┣ 📂hooks
 ┃ ┣ 📜useCheckAccount.jsx
 ┃ ┣ 📜useInput.jsx
 ┃ ┗ 📜useMovePage.jsx
 ┣ 📂pages
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂Root
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜loader.js
 ┃ ┣ 📂SignIn
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜loader.js
 ┃ ┣ 📂SignUp
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜hook.jsx
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜loader.js
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┃ ┣ 📜index.js
 ┃ ┣ 📜storage.js
 ┃ ┗ 📜validate.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜router.js
```
<br>

## ⏯️ 프로젝트 실행

```
git clone URL ( 자윤님 코드에 환경변수가 사용되었다면 해당 로직 정보 추가하기)

cd project wanted-pre-onboarding-frontend-week1

npm install

npm start
```


