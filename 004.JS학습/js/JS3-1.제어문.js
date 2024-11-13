// JS3-1.제어문.js ////////////

// 본 파일 로딩 확인
console.log("나. 제어문 테스트");

// 1. if문 처리를 ㅇ위한 함수 만들기 //////
/************************************ 
    함수명: showJumsu
    기능: 점수에 따른 평가를 출력함
        1. 점수에 따른 메시지 출력
        2. 점수에 따른 메시지 글자색 변경
        3. 점수에 따른 칭찬 스티커 보이기
************************************/
// 이름있는 함수를 선언적 함수라고 함!
function showJumsu() {
  // 1. 함수 호출 확인
  console.log("내 평가를 알려줘!");

  // 2. 대상 선정/////
  // 2-1. 점수 입력 요소 : input#jumsu
  var jumsu =
    document.querySelector("#jumsu");

  // 2-2. 출력요소 : #jexp
  var jexp =
    document.querySelector(".jexp");

  var jshow =
    document.querySelector(".jshow");

    // 3.점수 입력값 읽어오기 : jumsu변수의 input 요소값
    var score = jumsu.value;

  // 4. ��수에 따른 ��가 출력
  console.log(
    "선택요소: ",
    jumsu,
    jexp,
    jshow,
    score
  );

  if (score >= "90") {
    console.log("90점 이상");
  } else {
    console.log("90점 미만");
  }
  
} /////////showJumsu함수///////////
