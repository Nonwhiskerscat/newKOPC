window.onload=function(){

    document.oncontextmenu = function (e) {
        function deleteBoard(seq){
            Swal.fire({
            title: '글을 삭제하시겠습니까???',
            text: "삭제하시면 다시 복구시킬 수 없습니다.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '삭제',
            cancelButtonText: '취소'
            }).then((result) => {
            if (result.value) {
                냐옹
            }
            })
        }
        
        return false;
    }


    document.onselectstart = function(e) {
        alert(`텍스트 퍼가려다 나한테 제대로 걸렸냥?
한 번만 더 걸리면 가만 안 둔다냥! ฅ(=ↀДↀ=)ฅ`);
        return false;
    }

}

