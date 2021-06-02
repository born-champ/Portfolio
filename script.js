$(document).ready(function){
	$(window).ready(function){
		if(this.scrollY>20){
			$('.navbar').addclass("sticky")
		}else{
			$('.navbar').removeclass("sticky")

		}
	}
}