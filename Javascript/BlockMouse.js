window.onload=function(){

    document.oncontextmenu = function (e) {
        alert(`이미지 훔쳐 가려고 마우스 오른쪽 버튼 누르다 나한테 걸렸냥? 
        그러지 말고 우리 불쌍한 길고양이들 후원 좀 해달라냥!`);
        return false;
    }


    document.onselectstart = function(e) {
        alert(`텍스트 퍼가려다 나한테 제대로 걸렸냥?
        한 번만 더 걸리면 가만 안 둔다냥!`);
        return false;
    }

}