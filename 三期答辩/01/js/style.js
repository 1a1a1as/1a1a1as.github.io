

var example1 = new Vue({
  el: '#center',
  data: {
    items: [
        {img:'img/1.jpg',name:'超越昨天的自己',p:'MK-1训练系列',span:'立即购买'},
        {img:'img/2.jpg',name:'浑然天成的贴合',p:'UA SPORTSTYLE 运动休闲系列',span:'立即购买'},
        {img:'img/3.jpg',name:'UA HOVR 芯片跑鞋',p:'',span:'立即购买'},
    ]
  }
});
var example2 = new Vue({
  el: '#tuijian',
  data: {
    items: [
        {img:'img/t1.jpg',p:'MK-1训练系列',span:'￥999.0'},
        {img:'img/t2.png',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
        {img:'img/t3.png',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
        {img:'img/t4.png',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        {img:'img/t4.png',p:'男士UA Vanish短裤 ',span:'￥759.0'},
        {img:'img/t5.png',p:'男士UA MK-1 Patterned短裤',span:'￥1899.0'},
        {img:'img/t7.png',p:'男士UA RailFit NP休闲鞋',span:'￥599.0'},
        {img:'img/t8.png',p:'男士UA HOVR Sonic 芯片跑鞋',span:'￥599.0'},
        {img:'img/t9.png',p:'中性UA跑步腰带',span:'￥1999.0'},
        {img:'img/t10.png',p:'男士UA Flash 1 Panel运动帽',span:'￥2999.0'},
        {img:'img/t11.png',p:'男士UA Threadborne训练帽',span:'￥249.0'},
        {img:'img/t12.png',p:'男士UA Speedpocket Swyft 5英寸短裤 ',span:'￥399.0'},
        {img:'img/t13.png',p:'男童UA X Level短裤',span:'￥399.0'},
        {img:'img/t14.jpg',p:'中性UA Ozsee Elevated背包',span:'￥999.0'},
        {img:'img/t15.jpg',p:'女童UA Branded Crop T恤',span:'￥199.0'},
        {img:'img/t16.jpg',p:'女小童UA Fat Tire II凉鞋',span:'￥399.0'},
        {img:'img/t17.jpg',p:'男童UA Soccer Soda T恤',span:'￥199.0'},
        {img:'img/t18.png',p:'女士UA Perpetual短袖上衣',span:'￥499.0'},
        {img:'img/t19.png',p:'女士UA SpeedForm Europa芯片跑鞋',span:'￥1099.0'},
        {img:'img/t20.png',p:'中性UA Expandable背包',span:'￥329.0'},
    ]
  }
});


var example3 = new Vue({
  el: "#fenlei",
  data:{
    items:[
                {img:'img/l1',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/l2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/l3.png',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/l4',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
                
        
            ],
      items1:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
                
        
            ],
      items2:[
                {img:'img/sn1',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/sn2.jpg',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/sn3.jpg',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/sn4',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
                
        
            ],
      items3:[
                {img:'img/s1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/s2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/s3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/s4',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
                
        
            ],
      items4:[
                {img:'img/l7',p:'男士UA RailFit NP休闲鞋',span:'￥599.0'},
                {img:'img/l8.png',p:'男士UA HOVR Sonic 芯片跑鞋',span:'￥599.0'},
                {img:'img/l9.png',p:'中性UA跑步腰带',span:'￥1999.0'},
                {img:'img/l10.png',p:'男士UA Flash 1 Panel运动帽',span:'￥2999.0'},
        
            ],
      items5:[
                {img:'img/n5',p:'男士UA Vanish短裤 ',span:'￥759.0'},
                {img:'img/n6.jpg',p:'男士UA MK-1 Patterned短裤',span:'￥1899.0'},
                {img:'img/n7',p:'男士UA RailFit NP休闲鞋',span:'￥599.0'},
                {img:'img/n8',p:'男士UA HOVR Sonic 芯片跑鞋',span:'￥599.0'}
        
            ],
      items6:[
                {img:'img/sn1',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/sn2.jpg',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/sn3.jpg',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/sn4',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items7:[
                {img:'img/s1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/s2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/s3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/s4',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items8:[
                {img:'img/l8.png',p:'男士UA HOVR Sonic 芯片跑鞋',span:'￥599.0'},
                {img:'img/l9.png',p:'中性UA跑步腰带',span:'￥1999.0'},
                {img:'img/l10.png',p:'男士UA Flash 1 Panel运动帽',span:'￥2999.0'},
                {img:'img/l11',p:'男士UA Threadborne训练帽',span:'￥249.0'},
        
            ],
      items9:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items10:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items11:[
                 {img:'img/n5',p:'男士UA Vanish短裤 ',span:'￥759.0'},
                {img:'img/n6.jpg',p:'男士UA MK-1 Patterned短裤',span:'￥1899.0'},
                {img:'img/n7',p:'男士UA RailFit NP休闲鞋',span:'￥599.0'},
                {img:'img/n8',p:'男士UA HOVR Sonic 芯片跑鞋',span:'￥599.0'}
        
            ],
      items12:[
                {img:'img/l7',p:'男士UA RailFit NP休闲鞋',span:'￥599.0'},
                {img:'img/l8.png',p:'男士UA HOVR Sonic 芯片跑鞋',span:'￥599.0'},
                {img:'img/l9.png',p:'中性UA跑步腰带',span:'￥1999.0'},
                {img:'img/l10.png',p:'男士UA Flash 1 Panel运动帽',span:'￥2999.0'},
        
            ],
      items13:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
        
            ],
      items14:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/l10.png',p:'男士UA Flash 1 Panel运动帽',span:'￥2999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'}
        
            ],
      items15:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n7',p:'男士UA RailFit NP休闲鞋',span:'￥599.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
        
            ],
      items16:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items17:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items18:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items19:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items20:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items21:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items22:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items23:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items24:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items25:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items26:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items27:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items28:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items29:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ],
      items30:[
                {img:'img/n1.png',p:'MK-1训练系列',span:'￥999.0'},
                {img:'img/n2',p:'UA SPORTSTYLE 运动休闲系列',span:'￥999.0'},
                {img:'img/n3',p:'男士UA Magnetico Pro FG足球鞋',span:'￥1799.0'},
                {img:'img/n4.jpg',p:'男士UA Speedpocket Long 2合1短裤',span:'￥599.0'},
        
            ]
  }
});
var rLU=document.querySelectorAll(".home .right .list .r-list-ul li .a1 i"),
    sub = document.querySelectorAll(".home .right .list .r-list-ul li .sub-menu");

for(var b=0;b<sub.length;b++){
  sub[b].style.display = "none";  
}
for(var i=0;i<rLU.length;i++){
    rLU[i].index=i;
    
    rLU[i].onclick=function(){
        
        if(sub[this.index].style.display=="none"){
            for(var n=0;n<sub.length;n++){
            sub[n].style.height="0px";
            sub[n].style.display="none";
            }
            sub[this.index].style.display="block";
            sub[this.index].style.height="100%";
        }else if(sub[this.index].style.display=="block"){
            sub[this.index].style.display="none";
            sub[this.index].style.height="0px";
        }
               
        
    }
}



var uls=document.querySelectorAll(".home footer .f-nav #lis");

var nones= document.querySelectorAll(".home footer .f-nav #none");
for(var b=0;b<nones.length;b++){
  nones[b].style.height="0%";  
}
for(var i=0;i<uls.length;i++){
    uls[i].index=i;
    uls[i].onclick=function(){
        if(nones[this.index].style.height=="0%"){
            nones[0].style.height="0%";
        nones[1].style.height="0%";
        uls[0].style.borderBottom="none";
        uls[1].style.borderBottom="none";
        this.style.borderBottom="3px solid #979797";
        nones[this.index].style.height="100%";
        nones[this.index].style.transition="1s";
        }else if(nones[this.index].style.height=="100%"){
            this.style.borderBottom="none";
            nones[this.index].style.height="0%";
            nones[this.index].style.transition="1s";
        }
        console.log(nones[this.index].style.height);
    }
}


 
 $(function(){
    $(window).scroll(function(){
            if($(window).scrollTop()>500){
                $("#top").fadeIn(1000);
            }else{
                $("#top").fadeOut(1000);
            }
        })
        
        $('#top').click(function(){
            $('html , body').animate({scrollTop: 0},'slow');
        });

})

 
 var ss=document.querySelector(".home .right .ss"),
     qx=document.querySelector(".home .right .ss #qx"),
     i1=document.querySelector(".home .right #i1");

i1.onclick=function(){
   ss.style.display="block"; 
}
qx.onclick=function(){
    ss.style.display="none";
}

var k3=document.querySelector(".home .right .kcdh .k3"),
    k2=document.querySelector(".home .right .kcdh .k2"),
    kcdh=document.querySelector(".home .right .kcdh"),
    gth=document.querySelectorAll(".home .right .kcdh i");


setTimeout(function(){
    k2.style.opacity="0";
    k2.style.display="none";
},2000);

if(kcdh!==""){ 
    
if(localStorage.kcdh=="flash"){
    kcdh.style.display="none";
    
}else{
    kcdh.style.display="block";
}
gth[0].onclick=function(){
    kcdh.style.opacity="0";
    setInterval(function(){
    kcdh.style.display="none";
    },2000)
    localStorage.kcdh="flash";
}
gth[1].onclick=function(){
    kcdh.style.opacity="0";
    setInterval(function(){
    kcdh.style.display="none";
    },2000)
    localStorage.kcdh="flash";
}
}



