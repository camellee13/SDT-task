$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header-sroll").addClass("small")
    }
    else {
        $("#header-sroll").removeClass("small")
    }
});
$(document).ready(function () {
    var enTasks = [
        {
            num: "1"
            , task: "到提供免費塑膠袋的店家消費時（如便當店、早餐店、小吃攤等），若還有手可以拿或還有地方擺放， 「不」拿店家免費提供的塑膠袋"
	    }
        , {
            num: "2"
            , task: "到不提供免費塑膠袋的店家消費時（如藥妝店、飲料店、西點麵包店、書局、超市等），若還有手可以拿或還有地方擺放， 「不」額外購買塑膠袋提取物品"
        }
        , {
            num: "3"
            , task: "在公共空間協助關閉無人使用的燈"
        }
        , {
            num: "4"
            , task: "在公共空間協助關閉他人未關緊的水龍頭"
        }
        , {
            num: "5"
            , task: "買完東西後，留著乾淨的塑膠袋以供日後再利用"
        }
        , {
            num: "6"
            , task: "將可回收的垃圾分類出來做回收"
        }
        , {
            num: "7"
            , task: "用餐後，將廚餘分類出來做回收"
        }
        , {
            num: "8"
            , task: "出門購物前，攜帶包包、袋子或容器來裝商品"
        }
        , {
            num: "9"
            , task: "外帶餐點或飲料時，使用自備的環保「容器」"
        }
        , {
            num: "10"
            , task: "在外用餐或外帶餐點時，「不」拿店家免費提供的免洗「餐具」"
        }
        , {
            num: "11"
            , task: "在公共空間、街道上或野外，撿起垃圾桶附近的小型垃圾並投入"
        }


	];
    var exTasks = [
        {
            num: "1"
            , task: "上下樓時，若走樓梯在能力範圍內，選擇走樓梯而「不」搭乘電梯或手扶梯"
        }
        , {
            num: "2"
            , task: "在能力範圍內步行或騎腳踏車前往騎機車或開車亦可抵達的目的地"
        }
        , {
            num: "3"
            , task: "在空閒時間做中度運動，中度運動：持續從事10分鐘以上還能順暢地對話，但無法唱歌。這類活動會讓人覺得有點累，呼吸及心跳比平常快一些，也會流一些汗。（如急速步行、有氧舞蹈、健身操、高山郊遊、棒球、高爾夫球、乒乓球、舞蹈、腳踏車）"
        }
        , {
            num: "4"
            , task: "在空閒時間做重度運動，重度活動：持續從事10分鐘以上時，無法邊活動，邊跟人輕鬆說話。這類活動會讓身體感覺很累，呼吸和心跳比平常快很多，也會流很多汗。（如滑雪、籃球、足球、橄欖球、網球、爬山、跑步、游泳）"
        }
    ];
    var eatTasks = [
        {
            num: "1"
            , task: "定時吃三餐"
        }
        , {
            num: "2"
            , task: "用餐時細嚼慢嚥"
        }
        , {
            num: "3"
            , task: "口渴或很熱時，「不」喝汽水、可樂、運動飲料、加糖的茶或咖啡飲料而喝白開水"
        }
        , {
            num: "4"
            , task: "用餐時食用綠色蔬菜"
        }
        , {
            num: "5"
            , task: "食用水果"
        }
        , {
            num: "6"
            , task: "用餐時，「不」食用甜食或零食"
        }
        , {
            num: "7"
            , task: "用餐時，「不」食用油炸或含油高的食物（如腰果、花生、瓜子、洋芋片、炸雞）"
        }
        , {
            num: "8"
            , task: "夜晚時「不」吃宵夜"
        }
    ];
    $('#enTaskBtn').click(function (evt) {
        var enTaskList = $('#enTaskList');
        var exTaskList = $('#exTaskList');
        var eatTaskList = $('#eatTaskList');
        $(enTaskList).empty();
        $(exTaskList).empty();
        $(eatTaskList).empty();
        for (i = 0; i < 7; i += 1) {
            var ranEnItem = Math.floor(Math.random() * enTasks.length);
            var ranExItem = Math.floor(Math.random() * exTasks.length);
            var ranEatItem = Math.floor(Math.random() * eatTasks.length);
            enTaskList.append('<tr><td>' + enTasks[ranEnItem].num + '</td><td>' + enTasks[ranEnItem].task + '</td></tr>');
            exTaskList.append('<tr><td>' + exTasks[ranExItem].num + '</td><td>' + exTasks[ranExItem].task + '</td></tr>');
            eatTaskList.append('<tr><td>' + eatTasks[ranEatItem].num + '</td><td>' + eatTasks[ranEatItem].task + '</td></tr>');
        };
    });
});