

function start_clock() {
    // alert("클릭")
    // 시계를 출력
    // 현재 시간 구하기(시, 분, 초)
    // 이 시간을 HTML 특정 영역에 출력
    // 위의 작업을 *1초마다 반복*
    // JavaScript 는 특정_시간_마다 특정_함수를 반복_해주는 함수를 제공

    setInterval(function () {
        var today = new Date() // 날짜 객체 생성
        console.log(today.toLocaleString())
        // HTML_의 특정 위치를 지정
        var my_div = document.getElementById('myDiv')
        my_div.innerText = today.toLocaleString()
    }, 1000)
}



