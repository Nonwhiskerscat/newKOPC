# 한국 고양이 보호협회

<div align="center">
  <a href="http://kidcatnyantopia.net/works/pages/newKopc/index.html">
  <img src="https://user-images.githubusercontent.com/114633489/218716619-8929cae6-5e93-434b-b946-09af5902d150.png">
  </a>
</div>

<div align="justify">
<br>
  <p align="justify"><a href="https://github.com/Nonwhiskerscat">수염 없냥</a>의 첫 번째 프로젝트, 고양이 보호협회 페이지 리뉴얼 대작전!, <s>어...? 그러면 좀 이상한가?</s> 안녕하십니까, 해당 프로젝트를 맡은 <b>수염 없냥</b>입니다. 처음 이 프로젝트를 맡게 되었을 때, HTML, CSS가 익숙하지 않았고, 제이쿼리에서 '제'자도 모르는 초보 개발자였습니다. 물론 웹 페이지를 완성하긴 했지만, 약간 아쉬움이 드는 프로젝트라고도 생각합니다. 지금부터 고양이 보호협회 페이지 리뉴얼 홈페이지에 대해 설명하겠습니다. <s>어이 거기 페이지 접속한 닝겐아, 뒤로가기 누르지 말고 스크롤바를 내리라냥!</s></p>
</div>

## Contents
- [기본 정보](#기본-정보)
- [프로젝트 계기](#프로젝트-계기)
- [디자인](#디자인)
  - [톤앤 매너](#톤앤-매너)
  - [폰트 패밀리](#폰트-패밀리)
- [코딩](#코딩)
  - [웹키트를 활용한 스크롤바 스타일링](#웹키트를-활용한-스크롤바-스타일링)
  - [숫자 카운팅 효과](#숫자-카운팅-효과)
  - [뷰포트에 따른 css 애니메이션](#뷰포트에-따른-css-애니메이션)
  - [Alert 플러그인](#alert-플러그인)
- [최종 결과물](#최종-결과물)
  - [로고](#로고)
  - [헤더 및 인트로](#헤더-및-인트로)
  - [후원 및 챌린지](#후원-및-챌린지)
  - [포토존 및 뉴스존](#포토존-및-뉴스존)
  - [커뮤니티](#커뮤니티)
  - [푸터](#푸터)
  - [Alert 메시지](#alert-메시지)
  - [다크모드 라이트모드](#다크모드-라이트모드)
- [최종 시안](#최종-시안)
- [프로젝트 후기](#프로젝트-후기)
- [마무리 인사](#마무리-인사)

## 기본 정보

### 개요

> <h3>주제&nbsp&nbsp:bookmark:</h3>
> <p align="justify">홈페이지 리뉴얼</p>
<br>

> <h3>목표&nbsp&nbsp:clipboard:</h3>
> <p align="justify">기존 한국 고양이 보호협회 사이트(<a href="https://www.catcare.or.kr/">링크</a>)의 메인페이지를 새롭게 디자인하고, 현대의 트렌드에 맞는 로고 디자인 리뉴얼하기!!</p>
> 
<br>

> <h3>제작 비용&nbsp&nbsp:moneybag:</h3>
> <p align="justify">인건비 + 점심값 + 전기세 + 학원까지 왔다갔다 하는 교통비 + 인터넷 이용료를 제외한 개인적인 비용은 들지 않았습니다. 굳이 말하자면 월 62,000원씩이나 나가는 어도비 구독료?? <s>넘나 비싼것...  </s> :crying_cat_face::crying_cat_face: </p>

<br><br>

### 사용 TOOL

<div display="flex" align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <img src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white">
  <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=white">
</div>
<br><br>

### 제작 기간

<div align="center">
<h3>:date:&nbsp&nbsp2022년 09월 15일 ~ 2022년 10월 05일 (총 20일)</h3>
</div><br>

> <h3>기획 과정(09.15 ~ 09.17)&nbsp&nbsp:egg:</h3>
> <p>리뉴얼 홈페이지 선정(고민 1도 안 했음 :smile_cat::smile_cat:), 와이어프레임 제작</p>
<br>

> <h3>디자인 과정(09.17 ~ 09.21)&nbsp&nbsp:hatching_chick:</h3>
> <p>다크 모드 시안 디자인  :last_quarter_moon:, 라이트 모드 시안 디자인 :sunny:, 로고 제작</p>
<br>

> <h3>코딩 과정(09.22 ~ 10.02)&nbsp&nbsp:hatched_chick:</h3>
> <p>HTML 코딩, CSS 코딩, Jquery 코딩</p>
<br>

> <h3>검토 및 마무리 과정(10.03 ~ 10.05)&nbsp&nbsp:rooster:</h3>
> <p>크로스 브라우징, 피드백 및 테스트, 호스팅 </p>
<br>

## 프로젝트 계기

### BI/CI 디자인

<div align="center">
  <img src="https://user-images.githubusercontent.com/114633489/219616566-f5a66bbc-4f18-4bac-896f-a038dba8c8a6.jpg">
  <p><b>사진 1.1</b> 현 고양이 보호협회 심볼마크 및 로고</p>
</div>

<p align="justify">고양이와 사람이 공존하는 모습을 형상적으로 잘 표현한 것 같지만 색상의 사용이 단조롭다 생각했습니다. 그리고 아래를 칼로 잰 듯이 자른 듯한 심볼마크는 상용화가 어렵다고 생각하여 BI/CI 리뉴얼의 필요성을 느꼈습니다.</p>
<br>

### 메인 페이지
<div align="center">
  <img src="https://user-images.githubusercontent.com/114633489/219618944-bc784f87-03fe-476b-a0b5-f1a1aca7fd67.png">
  <p><b>사진 1.2</b> 현 고양이 보호협회 메인 페이지</p>
</div>

<p align="justify">우선 기존 페이지는 메인 페이지 안에 다양한 기능과 커뮤니티 게시판이 배치되어 있어, 서브페이지를 거치지 않고, 주요 기능을 이용할 수 있는 장점이 있습니다. 하지만 현대에 24인치 이상의 모니터와 같은 빅 사이즈 스크린이 보편화 되고 있어 다음과 같은 레이아웃은 다양한 기능을 페이지 하나로 이용할 수 있는 장점이 사라지고 오히려 작은 폰트와 사진 크기로 인해 가독성이 떨어진다는 단점만 부각될 뿐입니다. 2000년대 중후반 구글, 네이버, 다음과 같은 경우에도 이러한 디자인을 채택하였는데 현재에는 이미 리뉴얼하여 사용되고 있습니다. 하지만 이 사이트는 2020년대 중반을 향해 달려가는 지금도 그 당시의 디자인을 사용하고 있다는 점입니다. <s>이러면 내 후원금이 길고양이를 위해 적극적으로 이용이 되는지, 아니면 어디 이상한 데로 빠져 나가는지 의심 좀 했습니다. 고양이 보호협회 직원 여러분들 죄송합니다...</s>, 현재는 그리고 페이지의 아이덴티티 컬러인 푸른 계열의 색을 사용하지 않았다는 점이 약간 걸린 것 같았습니다. 그래서 이번 프로젝트에서 고양이 보호협회의 메인 페이지를 리뉴얼하고자 하였습니다.</p>
<br>


## 디자인
### 톤앤 매너
<div align="center">
  <img src="https://user-images.githubusercontent.com/114633489/219620755-b245ae21-294b-4df9-aa88-b50ab1278cca.png">
  <p><b>사진 2.1</b> 리뉴얼되는 고양이 보호협회 홈페이지의 톤앤 매너</p>
</div>

<p align="justify">
삼색 고양이가 띄고 있는 중명도 고채도의 오렌지 계열인 <b>#E7A335</b>을 강조색으로, 검회색 계열인 <b>#33333을</b>, 흰색인 <b>#ffffff</b>를 각각 다크모드, 라이트모드의 주조색으로 선정하였습니다. 그리고 세 가지의 컬러를 홈페이지 스타일링에 적극적으로 활용하여 고양이 보호협회가 지니고 있는 정체성을 명확히 부여하였습니다.
</p>

<hr>

### 폰트 패밀리
<div align="center">
  <img src="https://user-images.githubusercontent.com/114633489/219622903-fa52887f-0fd6-4f61-9710-6dde561c8a26.png">
  <p><b>사진 2.2</b> 리뉴얼되는 고양이 보호협회 홈페이지의 폰트 패밀리</p>
</div>
<p align="justify">
전체적인 폰트는 고딕체를 활용하여 가독성을 높이려 했는데, 그 중 가장 깔끔하고 디자인 측면에서도 현대적인 <b>210 구름고딕</b>을 채택하였고, 그 중에서 웹 호스팅을 했을 때 깨지지 않고 크로스 브라우징에 적합한 <b>210 구름고딕 030</b>과 <b>210 구름고딕 050</b>을 사용하였습니다. 다만, 210 구름 고딕은 사용에 있어 자유롭지만 <b>상업적인 이용과 개개인적으로 변형이 불가능한 폰트</b>입니다. 물론 사용하는 것은 좋지만 상업적으로 이용하다 경찰 삐뽀삐뽀:oncoming_police_car: 하고 재수가 없으면 헌법 재판소 견학:office: 할 수 있으니 사용하실 때 주의하시길 바랍니다.
</p>

<hr>


## 코딩
### 웹키트를 활용한 스크롤바 스타일링
``` CSS
html {
    overflow: overlay;
}

html::-webkit-scrollbar {
    width: 8px;
}

html::-webkit-scrollbar-thumb {
    background-color: #e7a335;
    opacity: 0.5;
    border-radius: 8px;
}

html::-webkit-scrollbar-track {
    border-radius: 8px;
}
```
<div align="center"><b>코드블럭 1</b> main.css 중 기존 스크롤바를 커스터마이징 할 수 있는 css 코드</div><br>
 
<p align="justify">
우선 기존 scroll 바의 default인 뒷배경과 상단 혹은 하단 끝에 있는 화살표를 날리기 위해, html의 overflow 속성의 값을 overlay로 주었습니다. 그리고 스크롤바의 반경은 <b>&::-webkit-scrollbar</b>에서 설정하였고, thumb를 통해 스크롤 바의 색상을 고양이 보호협회 페이지의 아이덴티티 컬러인 #e7a335로 설정하였습니다. 게다가 저는 이 프로젝트 외에 대부분의 포트폴리오 페이지의 스크롤바를 다음과 같이 스타일링하였습니다.
</p>
<hr>

### 숫자 카운팅 효과
``` JavaScript
window.addEventListener('load',function(){
    var memberCountConTxt= 144783;

    $({ val : 0 }).animate({ val : memberCountConTxt }, {
    duration: 4000,
    step: function() {
    var num = numberWithCommas(Math.floor(this.val));
        $(".dial").text(num);
    },
    
    complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $(".dial").text(num);
    }
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});
```
<div align="center"><b>코드블럭 2</b> RollingNumber.js 중 멤버 수를 카운팅 할 수 있는 js코드</div><br>

<p align="justify">숫자가 0부터 고보협 회원 수인 약 15만까지 카운팅 효과를 주기 위해 jquery의 animate 중 step과 complete를 사용하였습니다. 그리고 <b>toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");</b>를 적용하여 고보협 회원 수를 천 단위마다 콤마(,)로 끊어 사용자가 보다 숫자를 읽기 쉽게 하도록 구현하였습니다.</p>
 
<hr>

### 뷰포트에 따른 css 애니메이션
``` JavaScript
$(window).on("load", function () {
    function fade() {
      let animation_height = $(window).innerHeight() * 0.5;
      let ratio = Math.round((1 / animation_height) * 10000) / 10000;
        $(".fadeL").each(function () {
        let objectTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).innerHeight();
        if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height) {
            $(this).css({
                transition: "opacity 1s ease-out",
                transition: "right 1s ease-out",
                opacity: 1,
                right: "0px",
            });
            } else {
            $(this).css({
                transition: "opacity 1s ease-out",
                opacity: (windowBottom - objectTop) * ratio,
                transition: "right 1s ease-out",
                right: `${1920 * (1 - (windowBottom - objectTop) * ratio)}px`,
            });
            }
        } else {
            $(this).css({
            opacity: 0,
            right: "1920px",
            });
        }
        });
    }
    $(".fadeL").css({
        opacity: 0,
        right: "1920px",
    });
    fade();

    $(window).scroll(function () {
        fade();
    });
});
```
<div align="center"><b>코드블럭 3.1</b>뷰포트에 따라 왼쪽에서 오른쪽으로 이동하는 효과</div><br>

``` JavaScript
$(window).on("load", function () {
    function fade() {
        let animation_height = $(window).innerHeight() * 0.5;
        let ratio = Math.round((1 / animation_height) * 10000) / 10000;
        $(".fadeB").each(function () {
        let objectTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).innerHeight();
        if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height) {
            $(this).css({
                transition: "opacity 1s ease-out",
                transition: "top 1s ease-out",
                opacity: 1,
                top: "0px",
            });
            } else {
            $(this).css({
                transition: "opacity 1s ease-out",
                opacity: (windowBottom - objectTop) * ratio,
                transition: "top 1s ease-out",
                top: `${600 * (1 - (windowBottom - objectTop) * ratio)}px`,
            });
            }
        } else {
            $(this).css({
            opacity: 0,
            top: "600px",
            });
        }
        });
    }
    $(".fadeB").css({
        opacity: 0,
        top: "600px",
    });
    fade();

    $(window).scroll(function () {
        fade();
    });
});
```
<div align="center"><b>코드블럭 3.2</b>뷰포트에 따라 아래에서 위로 이동하는 효과</div><br>
<p align="justify">
 오브젝트의 Y좌표와 스크롤의 Y좌표를 비교하면서 해당 뷰포트 좌표에 도달했을 때, 투명도가 점점 짙어지고, 오브젝트가 뷰포트 내에 들어오는 효과를 부여하였습니다. 이를 구현하기 위해 animate() 함수를 사용하였습니다. 사실 이 코드는 코드펜을 통해 외부에서 긁어온 코드라 제 코드에 맞게 커스터마이징 하는 데에 시간이 좀 걸렸습니다...
</p>
 
<hr>

### Alert 플러그인
``` JavaScript
window.onload=function(){
    document.onselectstart = function(e) {
        Swal.fire({
            title: "<h5 style='color:#e7a335'>" + '텍스트 도둑질 금지!' + "</h5>",
            html: "<p style='color:#fff; font-size:18px'>"+'텍스트 퍼가려다 나한테 제대로 걸렸냥? <br>한 번만 더 걸리면 가만 안 둔다냥! ฅ(=ↀДↀ=)ฅ'+"</p>",
            imageUrl: './img/기타/alert1(다크).png',
            imageWidth: '200px',
            imageHeight: '200px',
            imageAlt: 'Custom image',
            background: '#333333',
            confirmButtonColor: '#e7a335',
            font: '#fff'
        })
        return false;
    }


    document.oncontextmenu = function (e) {
        Swal.fire({
            title: "<h5 style='color:#e7a335'>"+'오른쪽 마우스 클릭 금지!'+"</h5>",
            html: "<p style='color:#fff; font-size:18px'>"+'이미지 훔쳐 가지 말고 <br>우리 길고양이들 후원 좀 해주라냥! ฅ(=ↀᴥↀ=)ฅ'+"</p>",
            imageUrl: './img/기타/alert1(다크).png',
            imageWidth: '200px',
            imageHeight: '200px',
            imageAlt: 'Custom image',
            background: '#333333',
            confirmButtonColor: '#e7a335'
        })
        return false;
    }
}
```
<div align="center"><b>코드블럭 4</b> BlockMouse.js 코드 중 좌클릭 혹은 우클릭 이벤트 시 발생하는 함수를 구현한 코드</div><br>

<p align="justify">이미지 및 텍스트 불펌을 방지하기 위해 <b>sweet alert</b> 플러그인을 활용하여 마우스 좌클릭 혹은 우클릭 시 Alert 창을 생성하며 prevent defalut 효과를 주었습니다. <s>이거 제작할 당시에는 코딩 1개월차 코린이라서 외부 플러그인을 사용할 수 밖에 없었다는 것은 안 비밀...</s></p>
 
<br>
          

## 최종 결과물

### 로고
          
<br>

><h3>New Logo</h3>
          
<div align="center">
  <img src="https://user-images.githubusercontent.com/114633489/220625059-0ac4d81d-efab-4100-9c5b-0a28b267b873.png">
  <p align="center"><b>사진 3.1</b> 라이트 로고 국문(좌), 라이트 로고 국제(우)</p>
</div> 
          
          
<br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/114633489/220625053-a461f2a9-f8d7-406f-bc92-24cc0964b30e.png">
  <p align="center"><b>사진 3.2</b> 다크 로고 국문(좌), 다크 로고 국제(우)</p>
</div> 

<p align="justify"><b>리뉴얼 된 로고는 피난처 혹은 보호소에서 케어 받고 있는 고양이의 모습</b>을 로고로 형상화 하여 디자인하였고 <b>아이덴티티 컬러인 #e7a335, #333333</b>에 투명도를 주어 로고에 직접 적용하여습니다.</p>

<br>

><h3>Mock Up</h3>

<div align="center">
  <table width="100%">
    <tr>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/220631707-259768b9-96b6-4680-971b-5fe0ec4e9443.png"></td>
      <td><img width="100%" src="https://user-images.githubusercontent.com/114633489/220631753-91fce4db-3e44-4c88-9698-dd60c096034a.png"></td>  
    </tr>
    <tr>
      <td width="50%" align="center"><b>사진 4.1</b> 고양이 보호협회 벽 디자인 목업</td>
      <td width="50%" align="center"><b>사진 4.2</b> 고양이 보호협회 엽서 목업</td>
    </tr>
  </table>
</div>


<p align="justify">다음과 같이 목업도 했습니다. <s>합성 티가 너무 난다... 목업 실력 실화가...</s></p>

<hr>
          
### 헤더 및 인트로
<div align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/114633489/221553742-64d68a0d-9fbf-4b1f-87d8-176d255292f2.gif">
  <p align="center"><b>사진 4</b> 리뉴얼 된 사이트의 헤더+인트로 부분</p>
</div>

<p align="justify"><s>사진 화질 실화가...</s> 헤더 부분 혹은 인트로 부분은 <b>인간과 고양이가 공존하는 모습이 담긴 사진</b>을 선정하여 타이틀 포토로 선정했습니다. 그리고 GNB와 같은 경우 마우스 Hover 시 일부 메뉴만 펼쳐지는 기존 페이지와 달리 <b>리뉴얼 페이지에서는 전체 페이지가 펼쳐지도록 수정</b>하였습니다. 그리고 구석에 게재되어 있던 회원 수 정보를 인트로 부분으로 옮겼고, 숫자 카운팅 효과를 추가하여 역동성을 부여하였고 리뉴얼 된 로고를 중앙 상단에 배치하여 고양이 보호협회 홈페이지의 정체성을 뚜렷하게 부여하였습니다.</p>

<hr>

### 후원 및 챌린지

<div align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/114633489/221553727-b569aeeb-beb9-4155-842a-2226922e0b09.gif">
  <p align="center"><b>사진 5</b> 리뉴얼 된 사이트의 후원+챌린지 부분</p>
</div>

<p align="justify">기존 페이지 한 켠에 광고처럼 있었던 후원 부분을 하나의 섹션으로 독립시켰습니다. 그리고 기존에 서브페이지에 게재된 고양이 보호협회의 역할을 메인 페이지에 배치 시킴으로써 고보협이 어떤 일을 도맡하 하는 지에 대해 명시하였습니다.</p>

<hr>

### 포토존 및 뉴스존

<div align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/114633489/221553733-7aa8bc15-2c4b-412e-8866-6fad9051eb68.gif">
  <p align="center"><b>사진 6</b> 리뉴얼 된 사이트의 포토존+뉴스존 부분</p>
</div>

<p align="justify">기존 페이지에서는 전체 메인 페이지에서 이 부분이 차지하는 비율이 적었는데, 리뉴얼 이후, 그 비율을 높였습니다. 특히, 해당 부분에는 고양이 모양의 일러스트를 활용하여 보는 이에 친근감을 부여하였습니다.</p>

<hr>

### 커뮤니티


<div align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/114633489/221553733-7aa8bc15-2c4b-412e-8866-6fad9051eb68.gif">
  <p align="center"><b>사진 7</b> 리뉴얼 된 사이트의 커뮤니티 부분</p>
</div>

<p align="justify">진부한 레이아웃과 단순한 글자 정렬로 구성된 커뮤니티 또한 고양이 사진을 활용하여 업그레이드 하였고, 글자 또한 화면 확대 없이 한 눈에 볼 수 있도록 키워 가독성을 높였습니다.</p>

<hr>

### 푸터

<div align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/114633489/221555313-5acf3d9c-cf71-4bbb-87ad-1002eca86509.png">
  <p align="center"><b>사진 8</b> 리뉴얼 된 사이트의 푸터 부분</p>
</div>

<p align="justify">footer 부분은 기존의 사이트에 톤앤 매너를 아이덴티티 컬러로 업그레이드 하였고, 후원 문의 form을 추가하여 기존 사이트에 비해 접근성을 한 층 강화시켰습니다. 그리고 고양이 보호협회 공식 인스타그램 사진 및 게시물을 푸터 하단에 추가하여 SNS과의 접근성도 한층 더 높였습니다.</p>

<hr>

### Alert 메시지

<div align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/114633489/221553722-3d4d9d87-7ca4-49fe-9149-2b383e16eb10.gif">
  <p align="center"><b>사진 9</b> 리뉴얼 된 사이트의 Alert 메시지</p>
</div>

<p align="justify">Sweet Alert 플러그인을 활용하였으며, alert에 사용된 일러스트는 직접 제작하였습니다. <s>뭐 그리 대단한 것도 아니고 제작하는 데 30분도 걸리지 않았습니다.</s> 텍스트 도둑질 금지, 이미지 불펌 금지... 의도는 좋았으나 왼쪽 마우스를 실수로 클릭했을 때도 이 창이 뜬다. 이게 뭐여 ㅠㅠ...</p>

<hr>

### 다크모드 라이트모드

<div align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/114633489/221553699-10d75cf2-a2a0-4c67-b3a6-b73729326b60.gif">
  <p align="center"><b>사진 10</b> 리뉴얼 된 사이트의 다크모드 혹은 라이트모드</p>
</div>

<p align="justify">라이트모드와 다크모드를 지원하는 현대 웹 사이트의 트렌드에 맞게 고양이 보호협회 리뉴얼 사이트에도 이 기능을 추가하였습니다. <s>하지만 그 때는 제이쿼리를 사용하지 못해서 html  파일, css 파일을 2개씩이나 만들어 어거지로 구현했습니다...</s></p>

<hr>


## 프로젝트 후기

> <h3>소감&nbsp&nbsp:clipboard:</h3>
> <p align="justify"></p>
<br>

> <h3>개선된 점&nbsp&nbsp:crystal_ball:</h3>
> <p align="justify"></p>
<br>

> <h3>반성할 점&nbsp&nbsp:moneybag:</h3>
> <p align="justify"> </p>

> <h3>뒷 이야기&nbsp&nbsp:crystal_ball:</h3>
> <p align="justify">경이롭게도 프로젝트 이전에 <b>수염 없냥은 이 페이지를 알고 있었다</b>.:scream_cat: 게다가 <b>회원으로 가입하여 후원까지 하고 있었다</b>. :scream_cat::scream_cat: 더 놀라운 것은... 아... 뭐였더라?... 아무튼 매번 방문하는 사이트니까, 리뉴얼이 쉽기는 개뿔... 디자인 짜 내느라 죽는 줄 알았다.</p>
<br>

## 최종 시안



## 마무리 인사
  
<div align="center">
  <img width=100% src="https://user-images.githubusercontent.com/114633489/217474872-f4aa3e25-f0b1-46d5-be9b-4ad4dd4b2706.png">
</div>

<p align="justify"></p>





