        

	
document.addEventListener('DOMContentLoaded',function(){
    (function(win,doc){
    function change(){
        doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
    }
    change();
        win.addEventListener('resize',change,false);
    })(window,document);
    var oM=document.querySelector('menu');
    var oMenu=document.getElementById('menu');
    var oUl1=document.querySelector('.lg_up');
    var aLi1=oUl1.children;
    var oUl2=document.querySelector('.lg_down');
    var aLi2=oUl2.children;
    var iNow=0;
    var x=0;
    var oA=document.querySelector('.lg_up li .active');
    oM.addEventListener('touchstart',function(){
    	oMenu.style.display='block';
    },false);
    for(var i=0;i<aLi1.length;i++){
        aLi1[i].index=i;
        aLi1[i].addEventListener('touchstart',function(){
            for(var i=0;i<aLi1.length;i++){
                aLi1[i].className='';
                oA.className='';
            }
            this.className='active';
            oUl2.style.transform='translate('+-this.index*16+'rem)';
            oUl2.style.transition='1s all ease';
        },false);
    }
    oUl2.addEventListener('touchstart',function(ev){
        var downX = ev.targetTouches[0].pageX;
        var disX = downX - x;
        function fnMove(ev){
            x = ev.targetTouches[0].pageX - disX;
            oUl2.style.transform = 'translateX('+x+'px)';
        }
    function fnEnd(ev){
        document.removeEventListener('touchmove',fnMove,false);
        document.removeEventListener('touchend',fnEnd,false);
        var upX = ev.changedTouches[0].pageX;
        oUl2.style.transition = '1s all ease';
        //移动距离大于50px
        if(Math.abs(upX - downX)>50){
            //切换
            //往左走
            if(downX>upX){
                iNow++;
                if(iNow==aLi2.length) iNow=aLi2.length-1;
                x = -aLi2[0].offsetWidth*iNow;
                oUl2.style.transform = 'translateX('+x+'px)';
            }else{
                //往右走
                iNow--;
                if(iNow==-1) iNow = 0;
                x = -aLi2[0].offsetWidth*iNow;
                oUl2.style.transform = 'translateX('+x+'px)';
            }
        }else{
                //原地不动
                x = -aLi2[0].offsetWidth*iNow;
                oUl2.style.transform = 'translateX('+x+'px)';
            }
            for(var i=0; i<aLi1.length; i++){
                aLi1[i].className='';
                oA.className='';
            }
            aLi1[iNow].className='active';
        }
        document.addEventListener('touchmove',fnMove,false);
        document.addEventListener('touchend',fnEnd,false);
        ev.preventDefault();
    },false);

},false);

	   