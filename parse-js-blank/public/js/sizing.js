window.onresize = function resizewin() {
	resize();
};

function resize() {
	setheight("main",window_height());
	if(ismobile()) {
		document.getElementById("main").style.font = "20px trebuchet, bold,sans-serif";
		setheight("toolbar",50);
		setheight("lower",window_height() - 50 - 2);
		setwidth("friends",200);
		setwidth("ulist",200-8);
		setwidth("locations",200);
		setwidth("loclist",200-8);
		setwidth("dialog",300);
		setheight("dialog",250);
		setleft("dialog",window_width()/2-150);
		settop("dialog",window_height()/2-125);
		if(isfriendout() && !islocout()) {
			if(window_width()<400) {
				setwidth("locations",window_width()-200);
				setwidth("loclist",window_width()-200-8);
			}
		} else if(islocout() && !isfriendout()) {
			if(window_width()<400) {
				setwidth("friends",window_width()-200);
				setwidth("friendlist",window_width()-200-8);
			}
		} else {
			if(window_width()<400) {
				setwidth("friends",window_width()/2);
				setwidth("friendlist",window_width()/2-8);
				setwidth("locations",window_width()/2);
				setwidth("loclist",window_width()/2-8);
			}
		}
	} else {
		document.getElementById("main").style.font = "24px trebuchet, bold,sans-serif";
		setheight("toolbar",window_height()/10);
		setheight("lower",window_height()*9/10 - 2);
		setwidth("friends",window_width()/6-7);
		setwidth("ulist",window_width()/6-7-8);
		setwidth("locations",window_width()/6-7);
		setwidth("loclist",window_width()/6-7-8);
		setwidth("dialog",window_width()/3);
		setheight("dialog",window_height()/2);
		setleft("dialog",window_width()/3);
		settop("dialog",window_height()/4);
	}
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

function ismobile() {
	return (window_width()<=500) || (window_height()<=500);
};
