var canvas=document.getElementById('canvas');
var width=document.body.clientWidth;
var height=document.body.clientHeight;
var colors=['#24949A','#669A24','#9A8224','#9A2454','#94249A','#249A5A','#9A3B24'];
var ctx=canvas.getContext('2d');
	canvas.width=width;
	canvas.height=height;
var balls=[];
			setInterval(function(){	
				ctx.clearRect(0,0,width,height);
				for(var i=0;i<balls.length;i++){
					balls[i].drawBall();
					balls[i].move();
				}
				if(balls.length>400){
					balls.shift();
				}
			},10);

canvas.onmousemove=function(event){
		var x=event.clientX;
		var y=event.clientY;
		var r=Math.random()*50+10;
		var vx=Math.random()*10-5;
		var vy=0;
		var col='rgb('+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+')';
		var aball=new ball(x,y,r,vx,vy,col);
		balls.push(aball);
}
function ball(x,y,r,vx,vy,col){
	this.x=x;
	this.y=y;
	this.r=r;
	this.vx=vx;
	this.vy=vy;
	this.g=1;
	this.col=col;
	this.drawBall=function(){
			ctx.beginPath();
			ctx.fillStyle=this.col;
			ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
			ctx.fill();		
	};
	this.move=function(){
		this.x+=this.vx;
		this.y+=this.vy;
		this.vy=this.vy+this.g;
		if(this.x>width-this.r || this.x<this.r){
			this.vx=this.vx*-0.5;
		}
		if(this.vx<=0.1 && -this.vx<=0.1){
			this.vx=0;
		}
		if(this.y>height-this.r){
			this.y=height-this.r;
			this.vy=this.vy*-0.5;
		}
	}; 
}
function load (){  
   
    document.addEventListener('touchstart',touch, false);  
    document.addEventListener('touchmove',touch, false);  
    document.addEventListener('touchend',touch, false);  
       
    function touch (event){  
        var event = event || window.event;   
   
        switch(event.type){  
            case "touchstart":   
                break;  
            case "touchend":  
                break;  
            case "touchmove":  
                event.preventDefault();  
                 var x=event.changedTouches[0].clientX;
				var y=event.changedTouches[0].clientY;
				var r=Math.random()*50+10;
				var vx=Math.random()*10-5;
				var vy=0;
				var col='rgb('+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+','+Math.floor(Math.random()*225)+')';
				var aball=new ball(x,y,r,vx,vy,col);
				balls.push(aball);
                break;  
        }  
           
    }  
}  
window.addEventListener('load',load, false);