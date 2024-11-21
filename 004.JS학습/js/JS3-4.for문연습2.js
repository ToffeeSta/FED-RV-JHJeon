// JS3-4.for문 연습2 JS ////////////////

// 로딩 구역 ///////////////
window.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("로딩완료");

    // 0. 요구사항 분석 ////
    /* 이미지 개수만큼 for문을 돌려서 html태그를
    반복적으로 생성하여 대상 요소에 삽입해준다! */

    // 1. 대상선정 : .wrap
    const wrap =
      document.querySelector(".wrap");
    console.log("대상:", wrap);

    // 2. html코드 생성하기 ////
    let hCode = "<ul>";

    // for문으로 반복코드 생성하기 ////
    // for(시;한;증){코드}
    // 이미지가 1~50번까지 이므로 i는 1~50까지
    for (i = 1; i <= 50; i++) {
      hCode += `
        <li>
            <img src="./images/dress/${i}.jpg" alt="dress">
            <h3>옷이름</h3>
            <h4>가격</h4>
            </li>
        `;
    } // for문 //////////////
    hCode += "</ul>";
    // 3. html 코드 삽입하기
    wrap.innerHTML = hCode;
  }
); /////////// 로드함수 ///////////
