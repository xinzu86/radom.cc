//代码编辑运行框
function $(id) {
	return document.getElementById(id);
}
function copyCode(obj) {
  var rng = document.body.createTextRange();
  rng.moveToElementText(obj);
  rng.scrollIntoView();
  rng.select();
  rng.execCommand("Copy");
  rng.collapse(false);
}
function runCode(obj) {
	var winname = window.open('', "_blank", '');
	winname.document.open('text/html', 'replace');
	winname.document.writeln(obj.value);
	winname.document.close();
}
function nullCode(obj) {
	obj.value = '';
}
//固定左侧导航
window.onscroll = function(){
	var sideNav,sideNavTop;
	sideNav = document.getElementById('sideNav');
	mainContent = document.getElementById('mainContent');
	sideNavTop = document.documentElement.scrollTop || document.body.scrollTop; 
	if( sideNavTop > 220 ){
		sideNav.className = 'navMenu navMenuFixed';
		mainContent.style.marginLeft = '257px';
	}else{
		sideNav.className = 'navMenu';
		mainContent.style.marginLeft = '0px';
	}
	funH();//固定footer至底部
}
//内容只一屏时固定footer至底部
var footer,bodyH;
footer = document.getElementById('copyrightId');
bodyH = document.body.clientHeight;
if( bodyH > 878 ){
	footer.style.cssText = 'position:fixed;bottom:0;';
}else{
	footer.setAttribute('style','');
}
function funH(){
	bodyH = document.body.clientHeight;
	if( bodyH > 878 ){
		footer.style.cssText = 'position:fixed;bottom:0;';
	}else{
		footer.setAttribute('style','');
	}
}
window.onresize = function(){
	funH();
}
//左侧导航当前选项加current
var sideNavLi;
sideNavLi = document.getElementById('sideNav').getElementsByTagName('li');
for( var i = 0; i < sideNavLi.length; i++ ){
	(function(_i){
		sideNavLi[_i].onclick = function(){
			for( var j = 0 ; j < sideNavLi.length ; j++ ){
				sideNavLi[j].removeAttribute('class');
			}
			sideNavLi[_i].className = 'current';
		}
	})(i)
}
