
function print_text() {
    // 버튼을 눌렀을 때 실행할 코드
    // alert('잘 작동')
    // console.log($("#apple").text())
    // console.log($("#pineapple").text())
    // console.log($("ul > li.myList").text())
    // console.log($("#pineapple + li").text())
    // console.log($("ul > li[class]").text())
    //
    // console.log($("input[type=text]").val())
    // console.log($("ol > li.myList:first ").text())
    // console.log($("ol > li.myList:nth-child(2)").text())
    // console.log($("ol > li.myList:last").text())
    // $("input[type=text]").attr("size",10)



    var print = document.getElementById('print')
    print.innerText = ($("input[type=text]").val())
}

function my_func() {
    // select box 에서 과일이 변경되면 실행
    // 1. 선택한 과일의 인식
    var fruit = $("select > option:selected").text()
    var my_list = $("ul > li")
    my_list.each(function (idx, item) {
        // console.log($(item).text())
        if($(item).text() == fruit) {
            $(item).css("color", "red")
        } else{
            $(item).css("color", "black")
        }
    })  // each: 반복 함수

}