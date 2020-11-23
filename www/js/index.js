var vm = new Vue({
	el: '#app',
	data: {
		abouts: [
			{
				title: '研發人員',
				content: '網羅世界醫療與科技人才，專業研發團隊，經過這幾十年不斷的研發與突破，打造出獨一無二的核心技術，開啟智慧醫療領域新市場。藉由物聯網設備即時地傳輸至所屬之醫療團隊，提供遠距且即時的照護。',
				img: 'img/news1.jpg',
			},
			{
				title: '研發方向',
				content: '隨著移動物聯網的發展，未來醫療也將會朝「行動化」應用邁進，如智慧膠囊、智慧護腕、智慧健康檢測產品等將會廣泛被應用於醫療及民生照護環境中，借助智慧手持終端和感測器，有效地測量和傳輸健康資料。',
				img: 'img/news2.jpg',
			},
			{
				title: '研發理想',
				content: '在醫療 4.0 的時代掌握智慧醫療趨勢，克服現有法規、技術標準與產品定位的挑戰，在全世界智慧醫療領域站穩一席之地，是我們的目標。',
				img: 'img/news3.jpg',
			}
		],
		articles: [
			{
				title: '用藥安全辨識',
				content: '藥包機自動辨識供補管理、藥品圖文輔助辨識。藥品派送運用 RFID核對，提供病人用藥安全辨識服務，以提升醫療品質。',
				img: 'img/item1.jpg',
			},
			{
				title: '流程管理追蹤',
				content: '住院照護流程控管、貴重儀器管理。改善照護流程，提升病患服務滿意度。',
				img: 'img/item2.jpg',
			},
			{
				title: '長期照護管控',
				content: '健康行動醫療照護，運用 RFID 監控示警，達到主動關懷照護。',
				img: 'img/item3.jpg',
			},
			{
				title: '隔離病患管控',
				content: '運用 RFID 監控示警，對隔離病房監控定位、整合監視器輔助辨識的自動記錄接觸史、追蹤紀錄與管理。有效管制病人門禁，即時掌握病患活動範圍，預防院內感染及交互感染。',
				img: 'img/item4.jpg',
			},
			{
				title: '門禁管理',
				content: '將 RFID 運用於特殊治療區如手術室、呼吸照護病房等的門禁管理，加強安全照護。即時動態中央聯網紀錄，掌握病人及人員進出動態，防止病人進入危險區域，加強病患及員工人身安全。',
				img: 'img/item5.jpg',
			},
			{
				title: '數位學習管理',
				content: '利用 RFID 輔助醫師對特殊病患(如失智症等)的客製化治療管理。或是運用 RFID 主動提供住院病人之多媒體衛教。',
				img: 'img/item6.jpg',
			},
			{
				title: '洗腎照護流程',
				content: '運用 RFID 於洗腎病患的照護流程。',
				img: 'img/item7.jpg',
			},
			{
				title: '輸液管理',
				content: '運用 RFID 於醫療輸注液應用，如化療針劑的調製作業監控。該計畫前身在2007、2008年時於署立台中醫院試辦，爾後於2009年擴大試辦單位至社區醫院、療養院與醫學中心。',
				img: 'img/item8.jpg',
			},
			{
				title: '整合平台',
				content: '部分廠商為了進入智慧醫療應用，推出整合平台。如，華碩攜手8家智慧醫材夥伴，推出「OmniCare 智慧醫材共享平台」，提供多元醫療器材選擇與數據研究服務；未來還要將自家的 Zenbo 機器人導入病房，成為護理師的幫手2。',
				img: 'img/item9.jpg',
			},
		],
		products: [
			{
				name: '抗菌洗手乳',
				content: '綿密細緻的泡沫，徹底洗淨雙手，有效抑除細菌，在手部肌膚形成保護膜，長時間持續抗菌防護。添加護手配方，洗後輕爽不乾燥。',
				img: 'img/pd1.jpg',
				amount: 0,
				amountShow: 1,
				price: 100
			},
			{
				name: '一般醫療口罩',
				content: '內層使用親膚親水性不織布，可吸附配戴者之口沫並不易引起不適感。中層使用含有熔噴效果不織布。外層使用防潑水性不織布，防止液體滲入。',
				img: 'img/pd2.jpg',
				amount: 0,
				amountShow: 1,
				price: 130
			},
			{
				name: '捲筒衛生紙',
				content: '紙張貼合不易分離，使用時不易破裂。新雲朵壓花讓紙質更柔軟，給肌膚頂級雲柔處感。紙張加倍強韌、吸水力提升，且柔韌觸感再升級。',
				img: 'img/pd3.jpg',
				amount: 0,
				amountShow: 1,
				price: 150
			},
		],
		optionIndex: 1,
		aboutIndex: 0,
		articleIndex: 0,
		productIndex: 0 
	},
	methods: {
		minus(product){
			product.amountShow--
			product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow
		},
		plus(product){
			product.amountShow++
			product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
		},
		addToCart(product){
			product.amount += product.amountShow;
		},
		remove(product){
			product.amount = 0
		},
		checkout(){
			alert('目前尚無網路 請稍後再試')
		},
		subscript(){
			alert('成功訂閱')
		},
		next(){
			alert('確認訂購')
		}
	},
	computed: {
		about(){
			return this.abouts[this.aboutIndex]
		},
		article(){
			return this.articles[this.articleIndex]
		},
		product(){
			return this.products[this.productIndex]
		},
		productInCart(){
			return this.products
			.filter(p => p.amount)
			.map(p => {
				p.sum = p.amount * p.price
				p.num = p.amount
				return p
			})
		},
		total(){
			return this.productInCart
			.reduce((sum,p) => (p.sum+sum),0)
		},
		num(){
			return this.productInCart
			.reduce((num,p) => (p.num+num),0)
		}
	}
})