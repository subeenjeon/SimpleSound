$(document).ready(function() {
	$("#playSound").click(function() {
		$(this).toggleClass("state1");
		$(this).toggleClass("state2");

		$("#birdSound")[0].load();
		$("#birdSound")[0].play();
	});
});
