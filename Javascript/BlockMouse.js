window.onload=function(){

    document.oncontextmenu = function (e) {
        alert(`이미지 훔쳐 가지 말고
우리 길고양이들 후원 좀 해달라냥! ฅ(=ↀᴥↀ=)ฅ`);
        return false;
    }


    document.onselectstart = function(e) {
        alert(`텍스트 퍼가려다 나한테 제대로 걸렸냥?
한 번만 더 걸리면 가만 안 둔다냥! ฅ(=ↀДↀ=)ฅ`);
        return false;
    }

}

