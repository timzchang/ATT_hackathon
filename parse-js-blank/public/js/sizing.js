window.onload = function init() {
	resize();
	initMap();
};

window.onresize = function resizewin() {
	resize();
};

function resize() {
	var win = $(window);
	var win_width = win.width();
	var win_height = win.height();
	setheight("main",win_height);
	setheight("toolbar",win_height/10);
	setheight("lower",win_height*9/10 - 2);
	setwidth("map",2*win_width/3-3);
	setwidth("friends",win_width/6-3);
	setwidth("locations",win_width/6-3);
};

function setwidth(id, width) {
	document.getElementById(id).style.width = (width + "px");
}

function setheight(id, height) {
	document.getElementById(id).style.height = (height + "px");
}
