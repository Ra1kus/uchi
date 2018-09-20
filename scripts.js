$(document).ready(function() {

	let aVal = [6,7,8,9];

	let a = aVal[Math.floor(Math.random()*aVal.length)];

	let cVal = [11,12,13,14];

	let c = cVal[Math.floor(Math.random()*cVal.length)];

	let b = c - a;

	$('#num_1').append(a);
	$('#num_2').append(b);

	$('#arrow_1').width(38 * a);
	$('#arrow_2').width(38 * b);

	$("#val_1").on("input", function() {
		$(this).val($(this).val().replace (/\D/, ''));
	    if ( $(this).val() == a ) {
	    	$(this).addClass('correct').removeClass('incorrect').prop('disabled', true);
	    	$('#num_1').removeClass('incorrect');
	    	$('.input_cont').last().addClass('active');
	    	$("#val_2").focus();
	    } else {
	    	$(this).addClass('incorrect');
	    	$('#num_1').addClass('incorrect')
	    }
	});

	$("#val_2").on("input", function() {
		$(this).val($(this).val().replace (/\D/, ''));
	    if ( $(this).val() == b ) {
	    	$(this).addClass('correct').removeClass('incorrect').prop('disabled', true);
	    	$('#num_2').removeClass('incorrect');
	    	$('#result').prop('disabled', false).val('').focus();
	    } else {
	    	$(this).addClass('incorrect');
	    	$('#num_2').addClass('incorrect')
	    }
	});

	$("#result").on("input", function() {
		$(this).val($(this).val().replace (/\D/, ''));
	    if ( $(this).val() == c ) {
	    	$(this).addClass('correct').removeClass('incorrect').prop('disabled', true);
	    	$('.popup, .popup_overlay').fadeIn(300);
	    } else {
	    	$(this).addClass('incorrect');
	    }
	});

	$('.close_popup').on('click', function() {
		$('.popup, .popup_overlay').fadeOut(300);
		return false
	})

});