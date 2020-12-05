$(document).ready(function() {
	$('#i-2').click(function() {
		$('#input10').attr("type","text");
		$('#i-3').css({'display':'inline'});
		$('#i-2').css({'display':'none'});
	});

	$('#i-3').click(function() {
		$('#input10').attr("type","password");
		$('#i-3').css({'display':'none'});
		$('#i-2').css({'display':'inline'});
	});
});