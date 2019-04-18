
//设置cookie
function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

//读取cookies 
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
} 
//获取url参数
function get(p){
		var url= document.URL.toString();
		var tmpStr=p+"=";
		var tmp_reg=eval("/[\?&]"+tmpStr+"/i");
		if(url.search(tmp_reg)==-1)return null;
		else{
			var a=url.split(/[\?&]/);
			for(var i=0;i<a.length;i++)
				if(a[i].search(eval("/^"+tmpStr+"/i"))!=-1)return a[i].substring(tmpStr.length);
		}
}

var temp_ad = get('ad');
if(temp_ad){
    setCookie('cookie_ad',temp_ad);
}

function getAd(){
    if(temp_ad){
        return temp_ad;
    }
    return getCookie('cookie_ad');
}



