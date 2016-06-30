//when user checks yes, show only one address and 
//hide parent info
$('#submit-parent-info').on("click", function(event) {
	$('#same-house').show();
	$('#parent-info').hide();
});

$('input[name=resideYes]').change(function(){
	if($(this).is(':checked')) {
        $('#address').show();
        $('#parent-info').hide();
    } else {
      //  $('#separate-addresses').show();
    }    

});

//when user checks no, show two address inputs
//and hide parent info
$('input[name=resideNo]').change(function() {
	if($(this).is(':checked')) {
		$('#separate-addresses').show();
		$('#parent-info').hide();
	}
});
//when user clicks on the submit button, 
//hide address info
//show child info
$('#submit-address-info').on("click", function(event) {
	event.preventDefault();
	$('#address').hide();
	$('#which-house').hide();
	$('#child-info').show();

});
//when user clicks on the submit button, 
//hide address info
//show child info
$('#submit-separate-address-info').on("click", function(event) {
	event.preventDefault();
	$('#separate-addresses').hide();
	$('#child-info').show();
});
/*
function secondSubmit () {
	var oneAddSubmit = $('#submit-address-info').submit();
	var twoAddSubmit = $('#submit-separate-address-info').submit();

	if (oneAddSubmit || twoAddSubmit) {
		$('#submit-address-info').hide();
		$('#submit-separate-address-info').hide();
	}
}
*/

