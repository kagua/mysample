/*
訪問回数カウントスクリプト
	最終訪問日が今日より以前ならカウンターをカウントアップ
	the_counter()関数によって、現在の訪問回数を取得可能
*/

var d = new Date();
var today = d.getFullYear()+"/"+("0"+(d.getMonth()+1)).slice(-2)+"/"+("0"+d.getDate()).slice(-2);

//cookieの期限は365日に設定(任意の日数に変更可能)
d.setTime(d.getTime()+365*24*60*60*1000);
var limit = d.toGMTString();

//var cnt = 1;
var cookie = document.cookie + ";";







if(navigator.cookieEnabled){
	var cStart = cookie.indexOf("last_visited=");
	var cEnd = cookie.indexOf(";",cStart);

	//最終訪問日が記録されていた場合
	if(cStart != -1){
		var last_visited_day = cookie.substring(cStart+13,cEnd);

		//cookieから訪問回数を取得
		var cStart = cookie.indexOf("counts=");
		var cEnd = cookie.indexOf(";",cStart);
		if(cStart != -1)
				cnt = parseInt(cookie.substring(cStart+7,cEnd));

		//todayと比較して最終訪問が今日より以前の場合、訪問回数をカウントアップ
		if(today > last_visited_day)
			cnt++;
	}

	//新しい値をcookieに書き込む
	document.cookie = "counts="+cnt+";path=/;expires="+limit;
	document.cookie = "last_visited="+today+";path=/;expires="+limit;
}


function the_counter(){
	document.write(cnt);
}
