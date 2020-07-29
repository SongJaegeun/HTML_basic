function call_ajax() {

    $('.h2').text($('#date_name').val() + ' 기준')

    $.ajax({
        async : true, // 비동기 방식의 호출(default)
        url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=d2c58d2f3eff50170942afc3c3507071',
        data : {
            targetDt : $("input[type=date]").val().replace(/-/gi,'')
        },
        type : "GET",
        timeout : 3000,
        dataType : "json", // 결과 JSON을 JS 객체로 변환
        success : function(result) {
            $('tbody').empty()
            var box_result = result.boxOfficeResult.dailyBoxOfficeList
            $.each(box_result, function(idx, item) {
                var tr = $("<tr></tr>")
                var rankTd = $("<td></td>").text(item.rank + '등')
                var nameTd = $("<td></td>").text(item.movieNm)
                var salesTd = $("<td></td>").text(item.salesAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '(원)')
                var cntTd = $("<td></td>").text(item.audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '(명)')
                var infoTd = $("<td></td>")
                var infoBtn = $("<input />").attr("type", "button")
                    .attr("value", "상세정보")
                infoBtn.on("click", function () {

                    $.ajax({
                        async : true,
                        url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=d2c58d2f3eff50170942afc3c3507071',
                        data : {
                            movieCd : item.movieCd
                        },
                        type : "GET",
                        timeout : 3000,
                        dataType : 'json',
                        success : function (result) {
                            info_result = result.movieInfoResult.movieInfo
                            var generesTd = $('<td></td>>')
                            for(i=0; i<info_result.genres.length; i++) {
                                generesTd.append(info_result.genres[i].genreNm + ', ')
                            }
                            var actorTd = $('<td></td>>')
                            for(i=0; i<info_result.actors.length; i++) {
                                actorTd.append(info_result.actors[i].peopleNm + ', ')
                            }


                            alert("영화제목: " + info_result.movieNm + "\n" +
                                "제작년도: " + info_result.prdtYear + "\n" +
                                "장르: " + generesTd.text().slice(0, -2) + "\n" +
                                "감독명: " + info_result.directors[0].peopleNm + "\n" +
                                "배우명: " + actorTd.text().slice(0, -2))

                        }
                    })
                })

                $.ajax({
                    async : false, // 비동기 방식의 호출(default)

                    url : 'https://dapi.kakao.com/v2/search/image',
                    data : {
                        query: item.movieNm.replace(/#/gi,'') + " 포스터",
                        sort: "accuracy"
                    },
                    beforeSend : function(xhr) {
                        xhr.setRequestHeader("Authorization", "KakaoAK 0af367089a4c4a6739e95453e1ba9991")
                    },

                    type : "GET",
                    timeout : 3000,
                    dataType : "json",
                    success : function(result) {
                        images = result.documents

                        image_url = images[0].thumbnail_url

                        }
                    },

                )


                var posterTd = $("<td></td>")
                var posterImg = $("<img />").attr("src", image_url).attr("width", '150px').attr("height", '150px')

                posterTd.append(posterImg)
                $(infoTd).append(infoBtn)
                $(tr).append(rankTd)
                $(tr).append(posterTd)
                $(tr).append(nameTd)
                $(tr).append(salesTd)
                $(tr).append(cntTd)
                $(tr).append(infoTd)

                $('tbody').append(tr)

            })

                           },

        error : function (error) {
            alert('실패')

        }
    })

    }

