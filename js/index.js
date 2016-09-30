var flag=1;
var info=getInfo();
$(function(){
  var p=0;
  $('.position').html('第'+flag+'页/共'+Math.ceil(info.length/5)+'页');
  for(var i=0;i<info.length;i++){
    var art="<article class='art' id="+i+">"+
    "<h3><a href='https://1415003719.github.io/zhx.github.com/article_html/article_1.html?id=1'>"+info[i].title+"</a></h3>"+
    "<p>"+info[i].details+"</p>"+
    "<div><span><i class='glyphicon glyphicon-time'></i><time class='time'>"+info[i].time+"</time></span></div></article>";
      $('.navgation').before(art);
      p++;
      if(p==5)
      return ;
  }
});
  function back(){
    var p=0;
    if(flag===1)return ;
    flag--;
    $('.position').html('第'+flag+'页/共'+Math.ceil(info.length/5)+'页');
    $('.art').remove();
    for(var i=5*(flag-1);i<info.length;i++){
      var art="<article class='art' id="+i+">"+
      "<h3><a href='#'>"+info[i].title+"</a></h3>"+
      "<p>"+info[i].details+"</p>"+
      "<div><span><i class='glyphicon glyphicon-time'></i><time class='time'>"+info[i].time+"</time></span></div></article>";
        $('.navgation').before(art);
        p++;
        if(p==5)
        return ;
    }
  }
  function next(){
    var p=0;
    if(flag===Math.ceil(info.length/5))return ;
    flag++;
    $('.position').html('第'+flag+'页/共'+Math.ceil(info.length/5)+'页');
    $('.art').remove();
    for(var i=5*(flag-1);i<info.length;i++){
      var art="<article class='art' id="+i+">"+
      "<h3><a href='#'>"+info[i].title+"</a></h3>"+
      "<p>"+info[i].details+"</p>"+
      "<div><span><i class='glyphicon glyphicon-time'></i><time class='time'>"+info[i].time+"</time></span></div></article>";
        $('.navgation').before(art);
        p++;
        if(p==5)
        return ;
    }
  }
function getInfo(){
  var info;
  $.ajax({
    url:'https://1415003719.github.io/zhx.github.com/info/info.json',
    type:'get',
    jsonp:'callback',
    dataType:'json',
    async:false,
    success:function(data){
      info=data.data;
    },
    error:function(err){
      console.log("异常"+err.status);
    }
    });
    return info;
}
