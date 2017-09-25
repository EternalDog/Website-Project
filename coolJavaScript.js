//Dominik Bahrynowski
//r00137275

var defaultPrice = [100, 130, 210];
var actualPrice = [0, 0, 0];
var finalPrice = 0;
var sizeModifier = [0.8, 1, 1.3];
var size = [0, 0, 0];
var width = [240, 200, 250];
var height = [240, 150, 250];
var extrasCost = [30, 60];

window.onload = init;
function init() {
	try {
	document.getElementById("price1").innerHTML = "Price: " + actualPrice[0];
	document.getElementById("price2").innerHTML = "Price: " + actualPrice[1];
	document.getElementById("price3").innerHTML = "Price: " + actualPrice[2];
	}
	catch(err) {}
	//alert("JS working");
}	


//functions for item actions
function item1function() {
	//get value from select
	var q = document.getElementById("item1q").value;
	//get value from radio and set size
	var s = 1;
	if (document.getElementById("s1s").checked) {
		s = sizeModifier[0];
		size[0] = s;
		smallImage(1);
	}
	else if (document.getElementById("s1m").checked) {
		s = sizeModifier[1];
		size[0] = s;
		mediumImage(1);
	}
	else if (document.getElementById("s1l").checked) {
		s = sizeModifier[2];
		size[0] = s;
		largeImage(1);
	}
	//get value from checkboxes and modify image
	var m = 0;
	if (document.getElementById("f1a").checked) {
		m += extrasCost[0];
		circularImage(1, true);
	}
	else {circularImage(1, false);}
	if (document.getElementById("f1b").checked) {
		m += extrasCost[1];
		opaqueImage(1, true);
	}
	else {opaqueImage(1, false);}
	
	//calculating price
	actualPrice[0] = ((defaultPrice[0] * s) + m) * q;
	document.getElementById("price1").innerHTML = "Price: " + actualPrice[0];
	fullPrice();
}

function item2function() {
	//get value from select
	var q = document.getElementById("item2q").value;
	//get value from radio and set size
	var s = 1;
	if (document.getElementById("s2s").checked) {
		s = sizeModifier[0];
		size[1] = s;
		smallImage(2);
	}
	else if (document.getElementById("s2m").checked) {
		s = sizeModifier[1];
		size[1] = s;
		mediumImage(2);
	}
	else if (document.getElementById("s2l").checked) {
		s = sizeModifier[2];
		size[1] = s;
		largeImage(2);
	}
	//get value from checkboxes and modify image
	var m = 0;
	if (document.getElementById("f2a").checked) {
		m += extrasCost[0];
		circularImage(2, true);
	}
	else {circularImage(2, false);}
	if (document.getElementById("f2b").checked) {
		m += extrasCost[1];
		opaqueImage(2, true);
	}
	else {opaqueImage(2, false);}
	
	//calculating price
	actualPrice[1] = ((defaultPrice[1] * s) + m) * q;
	document.getElementById("price2").innerHTML = "Price: " + actualPrice[1];
	fullPrice();
}

function item3function() {
	//get value from select
	var q = document.getElementById("item3q").value;
	//get value from radio and set size
	var s = 1;
	if (document.getElementById("s3s").checked) {
		s = sizeModifier[0];
		size[2] = s;
		smallImage(3);
	}
	else if (document.getElementById("s3m").checked) {
		s = sizeModifier[1];
		size[2] = s;
		mediumImage(3);
	}
	else if (document.getElementById("s3l").checked) {
		s = sizeModifier[2];
		size[2] = s;
		largeImage(3);
	}
	//get value from checkboxes and modify image
	var m = 0;
	if (document.getElementById("f3a").checked) {
		m += extrasCost[0];
		circularImage(3, true);
	}
	else {circularImage(3, false);}
	if (document.getElementById("f3b").checked) {
		m += extrasCost[1];
		opaqueImage(3, true);
	}
	else {opaqueImage(3, false);}
	
	//calculating price
	actualPrice[2] = ((defaultPrice[2] * s) + m) * q;
	document.getElementById("price3").innerHTML = "Price: " + actualPrice[2];
	fullPrice();
}

//functions for changing image size and modifications
function smallImage(n) {
if (n == 1){
		document.getElementById("img" + n).style.width = "180px";
		document.getElementById("img" + n).style.height = "180px";
	}
else if (n == 2){
		document.getElementById("img" + n).style.width = "160px";
		document.getElementById("img" + n).style.height = "120px";
	}	
else if (n == 3){
		document.getElementById("img" + n).style.width = "200px";
		document.getElementById("img" + n).style.height = "200px";
	}	
}

function mediumImage(n) {
	if (n == 1){
		document.getElementById("img" + n).style.width = "240px";
		document.getElementById("img" + n).style.height = "240px";
	}
	else if (n == 2){
		document.getElementById("img" + n).style.width = "200px";
		document.getElementById("img" + n).style.height = "150px";
	}	
	else if (n == 3){
		document.getElementById("img" + n).style.width = "250px";
		document.getElementById("img" + n).style.height = "250px";
	}	
}

function largeImage(n) {
	if (n == 1){
		document.getElementById("img" + n).style.width = "280px";
		document.getElementById("img" + n).style.height = "280px";
	}
	else if (n == 2){
		document.getElementById("img" + n).style.width = "220px";
		document.getElementById("img" + n).style.height = "167px";
	}	
	else if (n == 3){
		document.getElementById("img" + n).style.width = "280px";
		document.getElementById("img" + n).style.height = "280px";
	}	
}

function circularImage(n, state){
	if (state == true){
	document.getElementById("img" + n).style.borderRadius = "50%";
	}
	else {
	document.getElementById("img" + n).style.borderRadius = "2%";
	}
}

function opaqueImage(n, state){
	if (state == true){
	document.getElementById("img" + n).style.opacity = "0.75";
	}
	else {
	document.getElementById("img" + n).style.opacity = "1";
	}	
}



//input field validation
function checkifempty() {
	var t1 = document.getElementById("t1").value
	var t2 = document.getElementById("t2").value
	var t3 = document.getElementById("t3").value
	var t4 = document.getElementById("t4").value
	var t5 = document.getElementById("t5").value
	var t6 = document.getElementById("t6").value
	var t7 = document.getElementById("t7").value
	
    if (t1 == '' || t2 == '' || t3 == '' || t4 == '' || t5 == '' || t6 == '' || t7 == '') {
        document.getElementById("submit").disabled = true;
    }
	else {
		document.getElementById("submit").disabled = false;
	}
}

//continue button revealing detail input fields
function revealContent() {
	document.getElementById("content").style.height = "2050px";
	document.getElementById("detailInput").style.display = "inline";
	document.getElementById("continue").disabled = true;
}

//calculating full price
function fullPrice() {
	finalPrice = actualPrice[0] + actualPrice[1] + actualPrice[2];
	if (document.getElementById("hasDog").checked) {
		finalPrice = finalPrice * 0.8;
	}
	document.getElementById("fullPrice").innerHTML = "Final price: " + finalPrice;
}

