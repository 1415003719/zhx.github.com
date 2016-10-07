var canvas=document.getElementById('canvas');
var width=canvas.width;
var height=canvas.height;
var ctx=canvas.getContext('2d');

window.onload=function(){
	
	setInterval(function(){
		ctx.clearRect(0,0,width,height);
		drawRound(ctx);
		drawNumber(ctx);
		drawDot(ctx);
		var time=new Date();
		var hours=time.getHours()>12?time.getHours()-12:time.getHours();
		var minuts=time.getMinutes();
		var seconds=time.getSeconds();
		drawHours(ctx,hours);
		drawMinutes(ctx,minuts);
		drawSecond(ctx,seconds);
	},500);
};



//绘制时钟外圈
function drawRound(ctx){
	ctx.beginPath();
	ctx.lineWidth=8;
	ctx.strokeStyle="black";
	ctx.arc(300,200,160,0,2*Math.PI,true);
	ctx.stroke();
}
//绘制时钟数字
function drawNumber(ctx){
	ctx.beginPath();
	for(var i=1;i<=12;i++){
		ctx.font="100 25px impact";
		ctx.textAlign='center';
		ctx.textBaseline="middle";
		ctx.fillText(i,300+130*Math.sin(30*i/180*Math.PI),70+130*(1-Math.cos(i*30/180*Math.PI)));
	}
}
//绘制时钟的分钟点
function drawDot(ctx){
	for(var i=1;i<=60;i++){
		ctx.beginPath();
		ctx.arc(300+150*Math.sin(6*i/180*Math.PI),50+150*(1-Math.cos(i*6/180*Math.PI)),3,0,2*Math.PI,true);
		ctx.closePath();
		ctx.fillStyle="#ccc";
		ctx.fill();
	}
	for(var i=1;i<=12;i++){
		ctx.beginPath();
		ctx.arc(300+150*Math.sin(30*i/180*Math.PI),50+150*(1-Math.cos(i*30/180*Math.PI)),5,0,2*Math.PI,true);
		ctx.closePath();
		ctx.fillStyle="black";
		ctx.fill();
	}
}
//绘制时钟指针(小时)
function drawHours(ctx,rot){
	ctx.save();
	ctx.translate(300,200);
	ctx.rotate(rot*30/180*Math.PI);
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth=8;
	ctx.lineCap="round";
	ctx.moveTo(0,0);
	ctx.lineTo(0,-60);
	ctx.moveTo(0,0);
	ctx.lineTo(0,10);
	ctx.stroke();
	ctx.restore();
}
//绘制分钟指针
function drawMinutes(ctx,rot){
	ctx.save();
	ctx.translate(300,200);
	ctx.rotate(rot*6/180*Math.PI);
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth=6;
	ctx.lineCap="round";
	ctx.moveTo(0,0);
	ctx.lineTo(0,-100);
	ctx.moveTo(0,0);
	ctx.lineTo(0,15);
	ctx.stroke();
	ctx.restore();
}
//绘制秒钟指针
function drawSecond(ctx,rot){
	ctx.save();
	ctx.translate(300,200);
	ctx.rotate(rot*6/180*Math.PI);
	ctx.beginPath();
	ctx.strokeStyle="red";
	ctx.lineWidth=3;
	ctx.lineCap="round";
	ctx.moveTo(0,0);
	ctx.lineTo(0,-140);
	ctx.moveTo(0,0);
	ctx.lineTo(0,25);
	ctx.stroke();
	ctx.restore();
}