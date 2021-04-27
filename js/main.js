
$('#s1').addClass("active");

$("#s1").click(function () {
	$('html, body').animate({
		scrollTop: $("#home").offset().top - 65
	}, 1000);
	return false;
});

$("#s2").click(function () {
	$('html, body').animate({
		scrollTop: $("#projets").offset().top - 100
	}, 1000);
	return false;
});

$("#s3").click(function () {
	$('html, body').animate({
		scrollTop: $("#about").offset().top - 100
	}, 1000);
	return false;
});

$("#s4").click(function () {
	$(this).addClass("active");
	$('html, body').animate({
		scrollTop: $("#competence").offset().top - 100
	}, 1000);
	return false;
});
$("#s5").click(function () {
	$(this).addClass("active");
	$('html, body').animate({
		scrollTop: $("#contact").offset().top - 100
	}, 1000);
	return false;
});

$("#toTop").click(function () {
	$('html, body').animate({
		scrollTop: $("#home").offset().top - 65
	}, 1000);
	return false;
});

$('#home').waypoint(function () {
	$("nav ul li").children().removeClass("active");
	$("#s1").addClass("active");
}, {
	offset: 101
});

$('#projets').waypoint(function () {
	$("nav ul li").children().removeClass("active");
	$("#s2").addClass("active");
}, {
	offset: 101
});

$('#about').waypoint(function () {
	$("nav ul li").children().removeClass("active");
	$("#s3").addClass("active");
}, {
	offset: 101
});

$('#competence').waypoint(function () {
	$("nav ul li").children().removeClass("active");
	$("#s4").addClass("active");
}, {
	offset: 101
});

$('#contact').waypoint(function () {
	$("nav ul li").children().removeClass("active");
	$("#s5").addClass("active");
}, {
	offset: 101
});

(jQuery)