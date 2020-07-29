$(document).ready(function () {
    // Browser_에 내용이 완전히 출력_되면 그 시점에 실행
    // li를 찾아서 각각에 대해 event 처리 지정
    $("ul > li").on("mouseover", function () {
        $(this).addClass("myStyle")
    })
    $("ul > li").on("mouseleave", function () {
        $(this).removeClass("myStyle")
    })
})

function insert_text() {
    $("#myDiv").html("<h1>이것은 소리없는 아우성</h1>")  // .html 은 태그_적용도 가능
}

function delete_div() {
    // $("#deletDiv").remove()  // 전부 제거
    $("#deletDiv").empty()   // 후손만 제거
}

function add_list() {
    // 없는 태그를 만들기
    // <li></li>
    var my_li = $("<li></li>").text("김길동")
    // 태그를 생성한 후 원하는 위치에 붙힘
    // 1. append() : 맨 마지막 자식_으로 추가
    // $("ul").append(my_li)
    // 2. prepend() : 첫번째 자식_으로 추가
    // $("ul").prepend(my_li)
    // 3. after() : 형제로 붙이고 다음 형제
    // $("ul > li:nth-child(3)").after(my_li)
    // 4. before()
    $("ul > li:nth-child(3)").before(my_li).on("mouseover", function () {
        $(this).addClass('myStyle')

    })
}

