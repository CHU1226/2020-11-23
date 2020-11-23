$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>0)
			$('.navbar').addClass('navbar-top')
		else
			$('.navbar').removeClass('navbar-top')
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>0)
			$('.left,.right').addClass('center')
	});
	text("people",12700,13000)
	text("join",200,500)
	text("share",500,800)
	function text(className,start,end){
		var timer = setInterval(() => {
			start++
			$('.'+className).text(start + "+");
			if(start >= end){
				clearInterval(timer)
			}
		})
	};
	$('.team li:first').addClass('bg-gray')
	$('.team li').click(function(){
		$(this).addClass('bg-gray').siblings().removeClass()
	});
	$('.pd-block:first').addClass('bg-green')
	$('.pd-block').click(function(){
		$(this).addClass('bg-green').siblings().removeClass('bg-green');
		$('.alltext span').addClass('run');
		setTimeout(() => {
			$('.alltext span').removeClass('run');
		},1000)
	});
	$(document).on('click','.q-btn',function(){
		$('.msg-box').append(`
			<div class="p-qu">
				<p>${$(this).text()}</p>
			</div>`)
		setTimeout(() => {
			$('.msg-box').append(`
			<div class="r-ans">
				<p>${({
				q1: '台灣擁有先進醫療與資通訊（Information and Communication Technology ，ICT）技術優勢，如何在在醫療 4.0 的時代掌握智慧醫療趨勢，克服現有法規、技術標準與產品定位的挑戰，在全世界智慧醫療領域站穩一席之地，是當前政府積極推動的重點計劃。',
				q2: '隨著移動物聯網的發展，未來醫療也將會朝「行動化」應用邁進，如智慧膠囊、智 慧護腕、智慧健康檢測產品等將會廣泛被應用於醫療及民生照護環境中，借助智慧手持 終端和感測器，有效地測量和傳輸健康資料。',
				q3: '物聯網是一種建立在互聯網上的泛在網路，物聯網技術的重要基礎和核心仍舊是互聯網， 互聯網連接了所有的人和資訊內容，提供標準化服務，再通過各種有線和無線網路與互聯網融合，將物件的資訊準確地傳遞出去，這將成為未來趨勢，也為實際應用的領域打開無限可 能。',
				q4: '本網站皆使用貨到付款，消費滿299可免運費，如商品有瑕疵、損壞，請於七日內將商品寄回，逾時恕不受理。',
			})[$(this).val()]}</p>
			</div>`)
		},1000)
	});
	$('.fa-robot').click(function(){
		$('.chatbot').fadeToggle()
	});
	$('.addToCart').click(function(){
		$('.check').fadeIn();
		setTimeout(() => {
			$('.check').fadeOut();
		},800)
	});
	$('.select-box .col-md-4:first').addClass('bg-gray');
	$('.select-box .col-md-4').click(function(){
		$(this).addClass('bg-gray').siblings().removeClass('bg-gray');
	})
})