$(function() {
	$(".select2").click(function() {
		if($(".citylist").css("display") == "none") {
			$(".select").css("border-bottom", "none");
			$(".citylist").css("display", "block");

		} else {
			$(".select").css("border-bottom", "dashed 1px #898989");
			$(".citylist").css("display", "none");
		}
	})
	
	$("#all").click(function(){
		$(".select2").html($(this).html());
		$(".select").css("border-bottom", "dashed 1px #898989");
		$(".citylist").css("display", "none");
	})
	$("#nanning").click(function(){
		$(".select2").html($(this).html());
		$(".select").css("border-bottom", "dashed 1px #898989");
		$(".citylist").css("display", "none");
	})
	$("#guilin").click(function(){
		$(".select2").html($(this).html());
		$(".select").css("border-bottom", "dashed 1px #898989");
		$(".citylist").css("display", "none");
	})
	$("#zhengzhou").click(function(){
		$(".select2").html($(this).html());
		$(".select").css("border-bottom", "dashed 1px #898989");
		$(".citylist").css("display", "none");
	})
	
	
});