var canvas=document.getElementById('canvas');
var width=document.body.clientWidth;
var height=document.body.clientHeight;
	canvas.width=width;
	canvas.height=height;
var ctx=canvas.getContext('2d');
var balls=[];
window.onload=function(){
		canvas.onmousemove=function(event){
			var r=Math.random()*50+10;
			var color='rgb('+Math.floor(Math.random()*225)+','+
						Math.floor(Math.random()*225)+','+
						Math.floor(Math.random()*225)+')';
			var vx=Math.random()*20-10;
			var vy=0;
			var aball=new ball(event.clientX,event.clientY,r,vx,vy,color);
			balls.push(aball);
		};
		setInterval(function(){
			ctx.clearRect(0,0,width,height);
			for(var i=0;i<balls.length;i++){
				balls[i].drawBall();
				balls[i].move();
			}
			if (balls.length>400) {
				balls.shift();
			}
		},10);
};



function ball(x,y,r,vx,vy,color){
	this.x=x;
	this.y=y;
	this.r=r;
	this.vx=vx;
	this.vy=vy;
	this.g=2;
	this.color=color;
	this.drawBall=function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
		ctx.closePath();
		ctx.fillStyle=color;
		ctx.fill();
	};
	this.move=function(){
		this.x=this.x+this.vx;
		this.y=this.y+this.vy;
		this.vy=this.vy+this.g;
		if(this.x>=width-this.r || this.x<=this.r){
			this.vx=-this.vx*0.5;
		}
		if(this.y>=height-this.r){
			this.y=height-this.r;
			this.vy=-this.vy*0.5;
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
               	var r=Math.random()*50+10;
				var color='rgb('+Math.floor(Math.random()*225)+','+
						Math.floor(Math.random()*225)+','+
						Math.floor(Math.random()*225)+')';
				var vx=Math.random()*20-10;
				var vy=0;
				var aball=new ball(event.touches[0].clientX,event.touches[0].clientY,r,vx,vy,color);
				balls.push(aball);  
                break;  
        }  
           
    }  
}  
window.addEventListener('load',load, false);  