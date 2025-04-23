"use strict";
// index.html에서 가장 먼저 불러오는 JS - index.ts
// -> ts파일은 js파일로 컴파일 후 dist폴더에 bundle.js로 배포됨!
Object.defineProperty(exports, "__esModule", { value: true });
// 외부 ts파일 불러오기 ////
var devTeam_1 = require("./devTeam");
function greet(name) {
    return "\uC548\uB155, ".concat(name, "~!");
}
console.log(greet("찐친 개발자"));
console.log(greet("타입스크립트"));
console.log(greet("JS 개발자"));
console.log(greet("코딩의 신"));
// 1. 기본타입 선언
var userName = "김상중하";
var age = 20;
var isActive = true;
console.log("😎 기본타입");
console.log(userName, age, isActive);
// 2. 배열 타입 선언
var numbers = [1, 2, 3, 4, 5];
var names = ["찐친", "타입스크립트", "JS", "코딩의 신"];
console.log("😎 배열타입");
console.log(numbers);
console.log(names);
// 3. 튜플 (Tuple) 타입 선언
var userInfo = ["김상중하", 20];
console.log("😎 튜플타입");
console.log(userInfo);
// 4. 유니온 타입 선언
var unionType = "loading";
console.log("😎 유니온타입");
console.log(unionType);
// 위의 데이터 형을 적용한 새로운 변수선언 할당
var user1 = {
    name: "Alice",
    age: 25,
};
var user2 = {
    name: "Bob",
    age: 30,
    isActive: true,
};
var user3 = {
    name: "Charlie",
    age: 35,
    isActive: false,
};
console.log("😎 객체타입");
console.log(user1);
console.log(user2);
console.log(user3);
// 6. 함수에 타입 선언
function sayGoodBye(name, isOpt, message // 선택적 매개변수는 맨끝에 위치함
) {
    return "".concat(name, "! ").concat(message ? message : "", " ").concat(isOpt ? "잘가!" : "안녕!", " ");
}
console.log("😎 함수타입");
console.log(sayGoodBye("찐친 개발자", true));
console.log(sayGoodBye("타입스크립트", true, "완전멋쪄!"));
console.log(sayGoodBye("JS 개발자", false));
console.log(sayGoodBye("코딩의 신", false, "하이!"));
// 7. void 함수 : 리턴값이 없는 함수
function logMessage(msg) {
    console.log("🍊", msg);
}
console.log("😎 void 함수");
logMessage("코딩의 신");
logMessage("타입스크립트");
// 인터섹션 타입을 적용한 새로운 변수선언 할당
var employee1 = {
    name: "조삼모사",
    company: "한국교통공사",
};
var employee2 = {
    name: "김하루방",
    company: "삼성전자",
};
console.log("😎 인터섹션타입");
console.log(employee1);
console.log(employee2);
// 결국 인터섹션은 타입을 여러개 동시에 적용하는 것!
var student1 = {
    name: "강상모",
    home: "서울",
    age: 20,
};
var student2 = {
    name: "갈매기",
    home: "부산",
    age: 21,
};
console.log("😎 인터섹션타입");
console.log(student1);
console.log(student2);
// 9. enum 타입 선언
// -> 상수 데이터를 안정적으로 쓰기 위한 타입
// -> 이놈(enum)! 에러잡아!
var AISystem;
(function (AISystem) {
    AISystem["Cgpt"] = "Chat GPT";
    AISystem["DallE"] = "DALL-E";
    AISystem["MidJourney"] = "MidJourney";
    AISystem["StableDiffusion"] = "Stable Diffusion";
    AISystem["Cop"] = "Copilot";
})(AISystem || (AISystem = {}));
console.log("😎 enum타입");
console.log(AISystem.Cgpt);
console.log(AISystem.DallE);
console.log(AISystem.MidJourney);
console.log(AISystem.StableDiffusion);
console.log(AISystem.Cop);
// 10. 제네릭(Generics) 타입 함수에 적용하기
// -> 타입을 외부에서 유연하게 전달받을 수 있는 방식
// 배열요소 콘솔 출력 제네릭함수
function printArray(arr) {
    console.log("😎 제네릭타입");
    arr.forEach(function (val, idx) {
        console.log(idx, '번째 : ', val);
    });
} //////// printArray 제네릭 함수 //////
// 숫자 배열 제네릭함수 호출예
var numberArray = [1000, 2000, 3000, 4000, 5000];
// 제네릭 함수 호출시 형을 지정하여 호출하기
// printArray<number>(numberArray);
// 데이터 형을 지정하지 않아도 자동으로 형을 감지한다!(타입추론)
printArray(numberArray);
// 문자 배열 제네릭함수 호출예
var stringArray = ["코딩의 신", "타입스크립트", "리액트"];
printArray(stringArray);
// 사용자정보 전달 : 객체를 변수에 할당함! ////
var userResponse = {
    data: { name: "강상모", age: 20 },
    success: true,
};
console.log("😎 제네릭타입");
console.log(userResponse);
// 해당타입을 사용하는 변수
var farewellMessage = sayGoodBye("난 개발천재야!", true, "정말로 굿바이~~!");
console.log("😎 제네릭 ReturnType");
console.log(farewellMessage);
// ★★★★★★★★★★★★★★★★★★★★★ //
// 개발자 회사 샘플 찍어보기 //////////////////
// ★★★★★★★★★★★★★★★★★★★★★ //
console.log("😎 개발자 회사 샘플 찍어보기");
console.log("👷‍♀️🦸‍♀️전체 개발자 리스트:", devTeam_1.devTeam);
console.log("👷‍♀️🦸‍♀️Frontend 개발자 리스트:");
console.log((0, devTeam_1.findByRole)(devTeam_1.devTeam, devTeam_1.Role.Frontend));
console.log("👷‍♀️🦸‍♀️Backend 개발자 리스트:");
console.log((0, devTeam_1.findByRole)(devTeam_1.devTeam, devTeam_1.Role.Backend));
console.log("👷‍♀️🦸‍♀️Fullstack 개발자 리스트:");
console.log((0, devTeam_1.findByRole)(devTeam_1.devTeam, devTeam_1.Role.Fullstack));
console.log("👷‍♀️🦸‍♀️현재 활동중인 개발자 리스트:");
console.log((0, devTeam_1.getActiveDevelopers)(devTeam_1.devTeam));
console.log("👷‍♀️🦸‍♀️TypeScript 스킬을 가진 개발자 리스트:");
console.log((0, devTeam_1.findBySkill)(devTeam_1.devTeam, devTeam_1.Skill.TypeScript));
console.log("👷‍♀️🦸‍♀️React 스킬을 가진 개발자 리스트:");
console.log((0, devTeam_1.findBySkill)(devTeam_1.devTeam, devTeam_1.Skill.React));
console.log("👷‍♀️🦸‍♀️VueJS 스킬을 가진 개발자 리스트:");
console.log((0, devTeam_1.findBySkill)(devTeam_1.devTeam, devTeam_1.Skill.VueJs));
console.log("👷‍♀️🦸‍♀️팀 매니저 정보:");
console.log(devTeam_1.teamManager);
// 중고급 개발자 필터링 함수 호출하여 결과 받기 /////
var seniorDevelopers = (0, devTeam_1.getSeniorDevelopers)(devTeam_1.devTeam, function (dev) { return dev.year >= 5; });
console.log("👷‍♀️🦸‍♀️중고급 개발자 리스트:");
console.log(seniorDevelopers);
// 모든 개발자를 화면에 출력해 보자! ////////
// -> 개발자 등급과 보너스도 출력하기
var devListContainer = document.getElementById('dev-list');
// 개발자 목록 출력하기 /////
devTeam_1.devTeam.map(function (dev) {
    // (1) 개발자 정보 출력을 위한 div 요소 생성
    var devInfo = document.createElement('div');
    // (2) 개발자 정보 div에 클래스 추가
    devInfo.classList.add('dev-info');
    // (3) 개발자 레벨과 보너스 정보 조회하기
    var devBonus = (0, devTeam_1.getDevBonus)(dev.year);
    // (4) 개발자 정보 div에 HTML 추가
    // -> 개발자 이름, 나이, 경력, 역할, 기술스택, 등급, 보너스
    devInfo.innerHTML = "\n    <h3>\uD83D\uDC68\u200D\uD83C\uDF3E Developer: ".concat(dev.name, "</h3>\n    <p>\uD83C\uDF8D Age: ").concat(dev.age, "\uC138</p>\n    <p>\uD83C\uDF8E Year: ").concat(dev.year, "\uB144\uCC28</p>\n    <p>\uD83C\uDFA1 Role: ").concat(dev.role, "\uAC1C\uBC1C\uC790</p>\n    <p>\uD83E\uDD7D Skills: ").concat(dev.skills.join(', '), "</p>\n    <p>\uD83E\uDD47 Level: ").concat(devBonus.level, "</p>\n    <p>\uD83D\uDCC0 Bonus: ").concat(devBonus.bonus.toLocaleString() + '만원', "</p>\n    <hr />\n  ");
    devListContainer.appendChild(devInfo);
}); ///// map //////
