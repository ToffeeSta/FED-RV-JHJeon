// JS1.기본사용법 JS ////////////

console.log("JS1.기본사용법 시작~!");

// 함수는 코드를 저장하는 구역임
// 함수명은 코드저장소의 주소다!
// 함수의 호출은 함수명()
/**************************************** 
    함수명 : 김비서나와라
    기능 : 김비서박스에 각종 변경하기
****************************************/
function 김비서나와라() {
  // 1. 함수호출확인!
  console.log("김비서 나왔다~!");

  // 2. HTML넣기 : 이벤트 속성에서 인라인코드로
  // 이미 실행함!(이미지 넣기)

  // 3. CSS변경하기 //////
  // 대상선정 : .pbox
  // 클래스는 여러개 사용할 수 있으므로
  // HTML컬랙션 집합에 수집되어 사용됨!
  // getElementsByClassName(클래스명)
  // 0,1,2,... 이런 순서로 수집함
  // 하나뿐이어도 0번째라고 해야함!
  console.log(
    document.getElementsByClassName(
      "pbox"
    )
  );

  // 변수에 대상 할당하기
  var pbox1 = document
    .getElementsByClassName("pbox")
    .item(0);
  // 변수는 특정메모리 공간이다!
  // 선언과 동시에 할당하여 값을 저장함
  // 변수는 여기를 "봐!" var 로 선언
  // var 변수명 = 값

  // [변수를 사용하는 이유?]
  // - 변수는 재사용
  // - 변수는 저장 메모리공간 주소
  // - 변수는 따옴표안쓴 문자
  // - 변수는 띄어쓰기 없음
  // - 변수는 호출시 값 출력
  // - 변수는 재할당시 다른값 덮어씀
  // - 변수는 한번만 선언 var(let/const)
  // - var는 variable(변수)라는 단어에서 나온말!

  ////// 변경내용 ////////////////////
  // 3-1. 배경이미지 넣기
  pbox1.style.background =
    "url(./images/kimbs.jpg) no-repeat top/cover";
  // .pbox중 첫번째 (0번)를 선택함!
  // item(순번)

  // 3-2. 글자색 변경하기
  pbox1.style.color = "white";

  // 3-3. 글자 크기 변경하기
  pbox1.style.fontSize = "40px";

  // 3-4. 글자 그림자 적용하기
  pbox1.style.textShadow =
    "2px 2px 2px #000"; // (x, y, blur, color)

  // 3-5. 트랜지션
  // 백틱은 줄바꿈 자유로움
  pbox1.style.transition = `
    2s,
    top 4s 2s,
    left 2s 2s,
    rotate 3s 3s,
    translate 1s 2s,
    scale 2s 6s
  `;

  // 3-6. 크기 변경
  pbox1.style.width = "600px";
  pbox1.style.height = "600px";

  // 3-7. 줄간격
  pbox1.style.lineHeight = "100px";

  // 3-8. 원 만들기
  pbox1.style.borderRadius = "50%";

  // 3-9 중앙 이동을 위한 top,left 값 변경
  pbox1.style.top = "50%";
  pbox1.style.left = "50%";

  // 3-10 트랜스폼 변경 : 중앙이동, 360도 회전, 스케일 변경
  pbox1.style.translate = " -50% -50% ";
  pbox1.style.rotate = "360deg ";
  pbox1.style.scale = "1.3 ";
  // pbox1.style.transform = "translate(-50%, -50%) rotate(360deg) scale(1.3)";
  // 만약 속성명을 잘못쓰면 브라우저가 출력에서 제외한다!
  // 예전 브라우저는 에러 발생했지만, 요즘은 에러 안남!

  // 전체 배경색 바꾸기
  // 대상: body
  // JS에서 body는 특별히 취급 document.body로 선택
  var body = document.body;
  body.style.backgroundColor =
    "lightgreen";
  body.style.transition = " 3s 5s ";
} //////////// 김비서나와라 함수 //////////
