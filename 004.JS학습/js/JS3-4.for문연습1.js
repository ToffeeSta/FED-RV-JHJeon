// JS3-4.for문연습1 JS

/*********************************************** 
    [프로그램 요구사항]

    [1] 미니언즈 넣기
    1. 미니언즈 버튼을 클릭하면
    파란박스에 미니언즈 이미지가 추가되어 들어간다
    2. 이때 미니언즈 버튼마다 한번에 들어가는
    개수가 정해져있다.(1개, 5개, 10개)

    ((대상선정))
    (1) 이벤트대상 : .mini (click이벤트)
    (2) 변경대상 : .mini-space
    ______________________________________

    [2] 미니언즈 개수 표시하기
    1. 미니언즈를 넣을때 실시간 반영 개수를 표시한다.
    2. 이때 미니언즈 이미지가 3개씩 있으므로
    3의 배수로 표시해 준다!

    ((대상선정))
    (1) 이벤트대상 : .mini (click이벤트)
    (2) 변경대상 : .stxt span
    ______________________________________

    [3] 파란박스 리셋하기
    1. 리셋버튼을 클릭하면 파란박스의 미니언즈 이미지
    모두가 삭제 된다.
    2. 이때 미니언즈 개수도 0으로 초기화한다.

    ((대상선정))
    (1) 이벤트대상 : .rbtn (click이벤트)
    (2) 변경대상 : .mini-space


***********************************************/

// 1. 대상선정 ////////////////////////////////////
// 1-1. 이벤트 대상 : .mini
let mini =
  document.querySelectorAll(".mini");

// 1-2. 변경 대상 :.mini-space
let miniSpace = document.querySelector(
  ".mini-space"
);

// console.log("선택요소:", mini, mini.length + "개", miniSpace);

// 2. 이벤트 속성 셋팅하기 ///////////////////////////
// 이벤트 대상에게 click 이벤트와 함수를 연결한다

// 변수에 담긴 html컬렉션의 개수는? 변수.length
// 개수만큼 for문을 돌아서 클릭 이벤트를 세팅한다!

// mini.length miniCnt(count)변수에 담기
const cnt = mini.length;

for (let i = 0; i < cnt; i++) {
  // mini.item(0).onclick = insertMini;
  mini[i].onclick = insertMini;
} // for문 //////////////////

// 3. 함수 만들기 ///////////////////////////
function insertMini() {
  // this -> 호출한 요소 자신!
  // 1. 호출한 요소의 개수 속성 읽어오기 : data-num
  let miniNum =
    this.getAttribute("data-num");

  // 속성값 읽어오기 2가지
  // 1) 속성요소.속성명
  // 2) 속성요소.getAttribute(속성명)

  // 속성값 셋팅법 2가지
  // 1) 선택요소.속성명 = 값
  // 예) document.querySelector('img').src = 경로
  // 2) 선택요소.setAttribute(속성명, '값')
  // 예) document.querySelector('img').setAttribute("src", 경로)

  // 2. 함수 호출 확인
  console.log(
    "미니언즈 넣어봐바!",
    miniNum
  );

  // 3. 변경대상(miniSpace)요소에 이미지 넣기
  // += 대입 연산자 : 기존값에 새로운 값을 더함!

//   let miniCnt = 0;
  
  for (let i = 0; i < miniNum; i++) {
    miniSpace.innerHTML += `<img
                src="./images/Minions.png"
                alt="미니언즈"/>`;
    // miniCnt++;

  } ///// for문 //////////////////
} //////////// insertMini() ////////////
