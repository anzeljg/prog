/*
 *
 * RIN Dark Theme for use with RIN e-textbook
 *
 */

'use strict';


// Temporary holding object.
Blockly.Themes.rin_dark = {};

Blockly.Themes.rin_dark.defaultBlockStyles = {
  "logic_blocks": {
    "colourPrimary": "#00a8c6"
  },
  "loop_blocks": {
    "colourPrimary": "#af4474"
  },
  "math_blocks": {
    "colourPrimary": "#337ab7"
  },
  "list_blocks": {
    "colourPrimary": "#d62237"
  },
  "text_blocks": {
    "colourPrimary": "#b8ba37"
  },
  "variable_blocks": {
    "colourPrimary": "#a51da5"
  },
  "procedure_blocks": {
    "colourPrimary": "#8ec07c"
  },
  "turtle_blocks": {
    "colourPrimary": "#f9bc41"
  }
};

Blockly.Themes.rin_dark.categoryStyles = {
  "logic_category": {
    "colour": "#00a8c6"
  },
  "loop_category": {
    "colour": "#af4474"
  },
  "math_category": {
    "colour": "#337ab7"
  },
  "list_category": {
    "colour": "#d62237"
  },
  "text_category": {
    "colour": "#b8ba37"
  },
  "variable_category": {
    "colour": "#a51da5"
  },
  "procedure_category": {
    "colour": "#8ec07c"
  },
  "turtle_category": {
    "colour": "#f9bc41"
  }
};

Blockly.Themes.rin_dark.componentStyles = {
   "workspaceBackgroundColour": "#202020",
   "toolboxBackgroundColour": "#404040",
   "toolboxForegroundColour": "#999999",
   "flyoutBackgroundColour": "#606060",
   "flyoutForegroundColour": "#999999",
   "scrollbarColour": "#404040"
}

Blockly.Themes.rin_dark =
    new Blockly.Theme(
	    'rin_dark',
		Blockly.Themes.rin_dark.defaultBlockStyles,
        Blockly.Themes.rin_dark.categoryStyles,
        Blockly.Themes.rin_dark.componentStyles
	);
