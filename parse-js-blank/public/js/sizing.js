window.onresize = function resizewin() {
	resize();
};

function resize() {
	setheight("main",window_height());
	setheight("toolbar",window_height()/10);
	setheight("lower",window_height()*9/10 - 2);
	setwidth("friends",window_width()/6-7);
	setwidth("locations",window_width()/6-7);
	setwidth("dialog",window_width()/3);
	setheight("dialog",window_height()/2);
	setleft("dialog",window_width()/3);
	settop("dialog",window_height()/4);
	updatemapwidth();
};

function setwidth(id, width) {
	document.getElementById(id).style.width = (width + "px");
};

function setheight(id, height) {
	document.getElementById(id).style.height = (height + "px");
};

function setleft(id, pix) {
	document.getElementById(id).style.left = (pix + "px");
};

function settop(id, pix) {
	document.getElementById(id).style.top = (pix + "px");
};

function window_width() {
	var win = $(window);
	return win_width = win.width();
};

function window_height() {
	var win = $(window);
	return win_height = win.height();
};
