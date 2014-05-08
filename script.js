$(document).ready(function() {
	$("#BT01").click(function() {
		$(this).toggleClass("state1");
		$(this).toggleClass("state2");

		$("#click")[0].load();
		$("#click")[0].play();
	});
});
