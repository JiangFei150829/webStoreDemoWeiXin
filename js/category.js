$(function(){
//==========================================模拟数据================================================	
	var array_left = ["送水服务","快递服务","家政服务"]; 
	//送水
	var array_songsui_NF = ["农夫山泉","1L","2￥","我们只做大自然的搬运工，农夫山泉有点甜"];
	var array_songsui_CY = ["纯悦","1L","1￥","我们只做大自然的搬运工，纯悦有点甜"];
	var array_songsui_LS = ["崂山矿泉水","1L","2.5￥","我们只做大自然的搬运工，崂山矿泉水有点甜"]; 
	var array_songsui_CY1 = ["纯悦","3L","2￥","我们只做大自然的搬运工，纯悦有点甜"];
	var array_songsui_LS1 = ["崂山矿泉水","3L","5￥","我们只做大自然的搬运工，崂山矿泉水有点甜"]; 
    var array_songsuiData = [["分类1",array_songsui_NF,array_songsui_CY,array_songsui_LS],["分类1",array_songsui_CY1,array_songsui_LS1]];
	
	//快递
	var array_kuaidi_SF = ["顺丰","1kg","2￥","我们只做大自然的搬运工，农夫山泉有点甜"];
	var array_kuaidi_ZT = ["中通","1kg","1￥","我们只做大自然的搬运工，纯悦有点甜"];
	var array_kuaidi_ST = ["申通","1kg","2.5￥","我们只做大自然的搬运工，崂山矿泉水有点甜"]; 
	var array_kuaidi_YT = ["运通","3kg","2￥","我们只做大自然的搬运工，纯悦有点甜"];
	 
	var array_kuaidiData =  [["分类1",array_kuaidi_SF,array_kuaidi_ZT,array_kuaidi_ST,array_kuaidi_YT]];
	//家政
	var array_jiazheng_MJS = ["TM","1H","20￥","我们只做大自然的搬运工，农夫山泉有点甜"];
	var array_jiazheng_MJS1 = ["TM1","1H","20￥","我们只做大自然的搬运工，农夫山泉有点甜"];
	var array_jiazhengData = [["分类1",array_jiazheng_MJS,array_jiazheng_MJS1]];
	//所有的数据
	var arrayData = [array_left,array_songsuiData,array_kuaidiData,array_jiazhengData];
//====================================================================================================
	$(".main .left").css("height",$(window).height()-99);
    $(".main .right").css("height",$(window).height()-99);
	//左侧栏
	for(var i = 0;i<arrayData[0].length;i++){
		var htmlLeft= "<li>"+arrayData[0][i]+"</li>";
		//$(".left_ul").append(htmlLeft); 	
	}
	
	  
  $(".main ul li").click(function(){
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        $(".right_content").css("display","none");
        $(".right_content").eq($(this).index()).css("display","block")
        console.log($(this).index());
    });
   
});


