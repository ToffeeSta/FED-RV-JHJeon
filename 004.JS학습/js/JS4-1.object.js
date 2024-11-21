
//////////////////////////////////
// 초이스 파트 버튼 만들기 ////////
//////////////////////////////////
// 버튼에 사용할 이름 배열만들기
const choiceName = [
    "탐쌤",
    "훈련생1",
    "훈련생2",
    "훈련생3",
    "훈련생4",
    "훈련생5",
    "훈련생6",
    "훈련생7",
    "훈련생8",
    "훈련생9",
    "훈련생10",
  ];
  
  // 배열확인
  console.log("버튼배열:", choiceName);
  
  // 버튼을 넣을 대상 : target[6]
  
  // 버튼을 어떻게 넣지?
  // 대답: 버튼이름 배열의 수만큼 버튼을 넣는다
  // -> for문 사용 : for(시;한;증){코드}
  // -> 배열의 개수 : 배열변수.length
  // (1) 시작값 : let i = 0 (배열주소 0부터)
  // (2) 한계값 : i < choiceName.length
  // (3) 증감 : i++
  
  // 배열의 개수를 미리구하여 변수에 할당
  let cnt = choiceName.length;
  
  // 첫번째 버튼에 선택표시 클래스 on을
  // 넣기 위해 for문 순회시 i값이 0일 경우
  // 그자리에 클래스 설정코드를 넣으려면
  // 삼항연산자를 사용하면 된다!
  // ->식: i==0?'class="on"':''
  // ->해석: i가0인가? true면 앞에것 출력
  // false 면 뒤엣것 출력
  
  for (let i = 0; i < cnt; i++) {
    target[6].innerHTML += `<button
      ${i == 0 ? 'class="on"' : ""}
      style="margin-left:5px"
      >
        ${choiceName[i]}초이스</button>`;
  
    // 줄바꿈태그는 5번째,10번째에서 넣기
    if (i == 4 || i == 9) {
      target[6].innerHTML += "<br>";
    } /// if ///
  } /////////// for문 ////////
  
  // 초이스 박스 줄간격조정
  target[6].style.lineHeight = "30px";
  target[6].style.height = "auto";
  target[6].style.padding = "10px 0";
  
  //////////////////////////////
  // 위에서 넣은 버튼을 순회하며
  // 클릭이벤트 함수를 설정해 준다!
  ///////////////////////////////
  // 이벤트 대상: target[6]하위 button
  let choiceBtn =
    target[6].querySelectorAll("button");
  
  // 버튼 개수 구하기
  let cntBtn = choiceBtn.length;
  
  console.log(
    "초이스버튼들:",
    choiceBtn,
    cntBtn,
    "개"
  );
  
  /// 버튼 개수만큼 순회하며 onclick속성에
  // 익명함수 할당하기(기능구현)
  for (let i = 0; i < cntBtn; i++) {
    // 대상: choiceBtn 변수에 할당된 button요소
    choiceBtn[i].onclick = function () {
      // this는 이벤트할당된 요소자신!
      // 버튼데이터 읽기
      let btnTxt = this.innerText;
      // 함수호출 확인
      console.log("내가 누구게?", btnTxt);
  
      // 영화정보 변경전 찍어보기
      // 각자 자기의 변수를 찍는다!
      console.log(
        "변경전영화객체",
        tomObj
      );
  
      switch (btnTxt) {
        // 자기자신 오브젝트
        case "탐쌤초이스":
          // 객체의 내용을 덮어쓰기 변경함
          tomObj = ssgObj;
          break;
  
        case "훈련생1초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생2초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생3초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생4초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생5초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생6초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생7초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생8초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생9초이스":
          tomObj = ssgObj;
          break;
  
        case "훈련생10초이스":
          tomObj = ssgObj;
          break;
  
      }
  
      console.log(
        "변경후영화객체",
        tomObj
      );
  
      // 변경데이터 확인 후 바로위박스
      // 영화정보 업데이트 함수를 호출한다!
      showMovieInfo();
  
      // JS클래스 내장객체: classList
      // add() / remove() 메서드사용!
  
      // 버튼에 클래스 on 모두 빼기
      for (let i = 0; i < cntBtn; i++) {
        choiceBtn[i].classList.remove(
          "on"
        );
      } ////// for문 ///
      // 클릭된 버튼에 클래스 on넣기
      // 클릭된 버튼 자신은 this!
      this.classList.add("on");
    }; ////// click 이벤트 함수 /////
    // console.log(choiceBtn[i]);
  } ////////// for문 ////////////
  /////////////// 초이스 버튼 셋팅하기 //////////////