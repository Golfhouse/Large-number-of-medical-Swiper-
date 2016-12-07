(function(win,doc){
		function change(){
			doc.documentElement.style.fontSize=40*doc.documentElement.clientWidth/320+'px';
		}
		change();
		window.addEventListener('resize',change,false);
	})(window,document);
	window.onload=function(){
		$("#menu_ico").click(function(){
			$("#menu").css("display","block");
		});
		$("#box_1,#box_2,#box_3").click(function(){
			$("#menu").css("display","none");
		});
		document.body.addEventListener("touchmove",function(event){
			event.preventDefault();
		});
	};