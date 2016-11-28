//线条效果代码
var lineCanvas=document.getElementById('lineCanvas');
var lineContext=lineCanvas.getContext('2d');
lineContext.moveTo(50,50);
lineContext.lineTo(250,250);
lineContext.lineWidth=5;
lineContext.strokeStyle="green";
lineContext.stroke();

//基本图形示例
var moreCanvas=document.getElementById('moreCanvas');
var moreContext=moreCanvas.getContext('2d');

//矩形
moreContext.beginPath();
moreContext.rect(50,20,50,100);
moreContext.font="bold 20px Arial";
moreContext.fillText("rect(50,20,50,100)",0,150);
moreContext.lineWidth=3;
moreContext.closePath();
moreContext.stroke();

//填充矩形
moreContext.beginPath();
moreContext.fillStyle="green";
moreContext.fillRect(250,20,50,100);
moreContext.font="bold 20px Arial";
moreContext.fillText("fillRect(250,20,50,100)",200,150);
moreContext.closePath();
moreContext.stroke();

//圆形
moreContext.beginPath();
moreContext.fillStyle="black";
moreContext.arc(550,60,50,0,2*Math.PI,true);
moreContext.font="bold 20px Arial";
moreContext.fillText("arc(550,60,50,0,2*Math.PI,true)",450,150);
moreContext.closePath();
moreContext.stroke();

//圆弧
moreContext.beginPath();
moreContext.moveTo(800,10);
moreContext.arcTo(870,70,800,130,70);
moreContext.font="bold 20px Arial";
moreContext.fillText("moreContext.moveTo(800,10);",750,150);
moreContext.fillText("moreContext.arcTo(870,70,800,130,70);",750,200);

moreContext.stroke();
