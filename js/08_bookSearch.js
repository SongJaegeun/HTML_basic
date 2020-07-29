function call_ajax() {
    // 입력 텍스트 상자_에서 키보드_가 입력이 들어_왔을 때
    // 모든 키가 아닌 'Enter'의 경우_에만 처리
    if(event.keyCode === 13) {
        // AJAX call_을 이용_하여 데이터_를 받아_오는 코드
        // alert('입력')
        // 만약 입력된 key_가 enter key_이면 수행 되는 함수
        // 서버쪽 프로_그램 호출
        // jQuery 이용
        // ajax 의 인자로 JS 객체를 선언
        // JS 객체: {key : value, key : value ...}
        // data : 서버_프로_그램_에게 넘겨줄 데이터
        $.ajax({
            async : true, // 비동기 방식의 호출(default)
            url : 'http://192.168.0.200:8080/bookSearch/search',
            data : {
                keyword : $("input[type=text]").val()
            },
            type : "GET",
            timeout : 3000,
            dataType : "json", // 결과 JSON을 JS 객체로 변환
            success : function(result) {
                $('tbody').empty()
                for(i=0; i<=result.length; i++){
                    console.log(result[i])
                    var tr = $("<tr></tr>")  // <tr></tr>
                    var imgTd = $("<td></td>")   // <td></td>
                    var img = $("<img />").attr("src", result[i].img)
                    imgTd.append(img)
                    var titleTd = $('<td></td>').text(result[i].title)
                    var authorTd = $('<td></td>').text(result[i].author)
                    var priceTd = $('<td></td>').text(result[i].price)
                    var delTd = $("<td></td>")
                    var delBtn = $("<input />").attr("type", "button")
                        .attr("value", "삭제")
                    delBtn.on("click", function () {
                        // 현재 클릭된 버튼에 대한 정보를 찾아서 삭제
                        $(this).parent().parent().remove()
                    })   // 부모: parent(), 자식: child(), 형제: ~~sibling~~()
                    delTd.append(delBtn)
                    $(tr).append(imgTd)
                    $(tr).append(titleTd)
                    $(tr).append(authorTd)
                    $(tr).append(priceTd)
                    $(tr).append(delTd)
                    $("tbody").append(tr)
                }
            },
            error : function (error) {
                alert('실패')

            }
        })
    }
}

function deletebook() {
    $(this).remove()
}