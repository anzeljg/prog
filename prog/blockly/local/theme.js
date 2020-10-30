$(function() {
	// Theme 1 toggle
    $('#theme').change(function() {
	    if ($(this).prop('checked') == true) {
			CodeEditor.workspace.setTheme(Blockly.Themes.rin_dark);
	    } else {
			CodeEditor.workspace.setTheme(Blockly.Themes.rin_light);
	    }
		$('#content1_python').toggleClass('rin_light rin_dark');
    })
	$('#tab1_python').click(function() {
		if ($('#theme').prop('checked') == true) {
    		$('#content1_python').removeClass('rin_light');
    		$('#content1_python').addClass('rin_dark');
		}
	})

	// Theme 2 toggle
    $('#theme2').change(function() {
	    if ($(this).prop('checked') == true) {
			CodeEditor2.workspace.setTheme(Blockly.Themes.rin_dark);
	    } else {
			CodeEditor2.workspace.setTheme(Blockly.Themes.rin_light);
	    }
		$('#content2_python').toggleClass('rin_light rin_dark');
    })
	$('#tab2_python').click(function() {
		if ($('#theme2').prop('checked') == true) {
    		$('#content2_python').removeClass('rin_light');
    		$('#content2_python').addClass('rin_dark');
		}
	})

	// Theme 3 toggle
    $('#theme3').change(function() {
	    if ($(this).prop('checked') == true) {
			CodeEditor3.workspace.setTheme(Blockly.Themes.rin_dark);
	    } else {
			CodeEditor3.workspace.setTheme(Blockly.Themes.rin_light);
	    }
		$('#content3_python').toggleClass('rin_light rin_dark');
    })
	$('#tab3_python').click(function() {
		if ($('#theme3').prop('checked') == true) {
    		$('#content3_python').removeClass('rin_light');
    		$('#content3_python').addClass('rin_dark');
		}
	})

})
