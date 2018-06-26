let btn = document.querySelector('.right header .m-menu-icon'),
    nav = document.querySelector('.left'),
    mask = document.querySelector('.mask'),
    right = document.querySelector('.right'),
    body = document.querySelector("body");
console.log(btn);
btn.onclick=function () {
    mask.style.display="block";
    nav.style.left="0%";
    right.style.left="80%";
    body.style.height="100%";
    body.style.overflow="hidden";
    
}

mask.onclick=function () {
    this.style.display="none";
    nav.style.left="-80%";
    right.style.left="0%";
    nav.style.transition="0.5s";
    right.style.transition="0.5s";
    body.style.height="100%";
    body.style.overflow="scroll";
}


var pills= document.querySelectorAll(".nav-pills li.clearfix .a1 i"),
    menus=document.querySelectorAll(".nav-pills li.clearfix .sub-menu"),
    boxs=document.querySelectorAll(".sub-menu .block-xs i"),
    list=document.querySelector(".left .list");

for(var i=0;i<pills.length;i++){
    pills[i].index=i;
    pills[i].onclick=function(){
        menus[this.index].style.left="100%";
        menus[this.index].style.transition="0.5s";
        list.style.left="-100%";
        list.style.transition="0.5s";
    }
    
}
for(var b=0;b<boxs.length;b++){
    boxs[b].index1=b;
    boxs[b].onclick=function(){
        menus[this.index1].style.left="-100%";
        menus[this.index1].style.transition="0.5s";
        list.style.left="0%";
        list.style.transition="0.5s";
    }
}



