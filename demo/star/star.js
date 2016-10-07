var w=document.body.clientWidth;
var h=document.body.clientHeight;

var canvas=document.getElementById('canvas');
	canvas.width=w;
	canvas.height=h;
var ctx=canvas.getContext('2d');

window.onload=init;
function init(){
	drawBackground(ctx);
	drawStars(ctx);
	drawMoon(ctx);
	drawC(ctx)
}

// 绘制星空的背景
function drawBackground(ctx){
	ctx.beginPath();
	var grd=ctx.createLinearGradient(0,0,0,h);
		grd.addColorStop(0.0,"black");
		grd.addColorStop(1.0,"#035");
	ctx.rect(0,0,w,h);
	ctx.fillStyle=grd;
	ctx.fill();
}

// 绘制一个星星
function drawStar(ctx){
	ctx.beginPath();
	for(var i=0;i<5;i++){
		ctx.lineTo(Math.cos((18+i*72)/180*Math.PI),
			-Math.sin((18+i*72)/180*Math.PI));
		ctx.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,
			-Math.sin((54+i*72)/180*Math.PI)*0.5);
	}
	ctx.closePath();
	ctx.fillStyle="#fb3";
	ctx.strokeStyle="#fd5";
	ctx.lineWidth=3;
	ctx.fill();
	ctx.stroke();
}

// 绘制多个星星
function drawStars(ctx){
	for(var i=0;i<200;i++){
		var x=Math.random()*canvas.width;
		var y=Math.random()*canvas.height*0.6;
		var r=Math.random()*3;
		var rot=Math.random()*360;
		ctx.save();
		ctx.translate(x,y);
		ctx.scale(r,r);
		ctx.rotate(rot);
		drawStar(ctx);
		ctx.restore();
	}
}
//画月亮
function drawMoon(ctx){
        ctx.save();
        ctx.translate(1400,200);//把原点坐标移到(1400,200)方便旋转月亮
        ctx.rotate(30/180*Math.PI);
        ctx.beginPath();
        ctx.arc(0,0,100,Math.PI/2,-Math.PI/2,true);
        ctx.moveTo(0,-100);
        ctx.arcTo(200,0,0,100,111.8);
        ctx.fillStyle="#fd5";
        ctx.fill();
        ctx.restore();
}
//画草地
  function drawC(ctx){
        var grd=ctx.createLinearGradient(0,1000,0,0);
        grd.addColorStop(0.0,"#030");
        grd.addColorStop(1.0,"#580");
        ctx.fillStyle=grd;
        ctx.beginPath();
        ctx.moveTo(0, 600);
        ctx.bezierCurveTo(720, 350, 760, 1000, 1920, 700);
        ctx.lineTo(1920,1000);
        ctx.lineTo(0,1000);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }