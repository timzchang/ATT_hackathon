window.onresize = function resizewin() {
	resize();
};

function resize() {
	setheight("main",window_height());
	setheight("toolbar",window_height()/10);
	setheight("lower",window_height()*9/10 - 2);
	setwidth("friends",window_width()/6-7);
	setwidth("locations",window_width()/6-7);
	updatemapwidth();
};

function setwidth(id, width) {
	document.getElementById(id).style.width = (width + "px");
};

function setheight(id, height) {
	document.getElementById(id).style.height = (height + "px");
};

function window_width() {
	var win = $(window);
	return win_width = win.width();
};

function window_height() {
	var win = $(window);
	return win_height = win.height();
};
