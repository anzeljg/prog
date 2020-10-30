/*
 *
 * RIN Light Theme for use with RIN e-textbook
 *
 */

'use strict';


// Temporary holding object.
Blockly.Themes.rin_light = {};

Blockly.Themes.rin_light.defaultBlockStyles = {
  "logic_blocks": {
    "colourPrimary": "#0098e5" // HSV(200, 1, 0.9)
  },
  "loop_blocks": {
    "colourPrimary": "#e50099" // HSV(320, 1, 0.9)
  },
  "math_blocks": {
    "colourPrimary": "#004ce5" // HSV(220, 1, 0.9)
  },
  "list_blocks": {
    "colourPrimary": "#e52600" // HSV(10, 1, 0.9)
  },
  "text_blocks": {
    "colourPrimary": "#e5bf00" // HSV(50, 1, 0.9)
  },
  "variable_blocks": {
    "colourPrimary": "#9900e5" // HSV(280, 1, 0.9)
  },
  "procedure_blocks": {
    "colourPrimary": "#00e500" // HSV(140, 1, 0.9)
  },
  "turtle_blocks": {
    "colourPrimary": "#e57200" // HSV(30, 1, 0.9)
  }
};

Blockly.Themes.rin_light.categoryStyles = {
  "logic_category": {
    "colour": "#0098e5"
  },
  "loop_category": {
    "colour": "#e50099"
  },
  "math_category": {
    "colour": "#004ce5" // HSV(220, 1, 0.9)
  },
  "list_category": {
    "colour": "#e52600" // HSV(10, 1, 0.9)
  },
  "text_category": {
    "colour": "#e5bf00" // HSV(50, 1, 0.9)
  },
  "variable_category": {
    "colour": "#9900e5" // HSV(280, 1, 0.9)
  },
  "procedure_category": {
    "colour": "#00e500" // HSV(140, 1, 0.9)
  },
  "turtle_category": {
    "colour": "#e57200" // HSV(30, 1, 0.9)
  }
};


Blockly.Themes.rin_light =
    new Blockly.Theme(
	    'rin_light',
		Blockly.Themes.rin_light.defaultBlockStyles,
        Blockly.Themes.rin_light.categoryStyles
	);
