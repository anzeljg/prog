
Blockly.Blocks.turtle = {};

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.turtle.HUE = 30;

/**
 * Left turn arrow to be appended to messages.
 */
Blockly.Blocks.turtle.LEFT_TURN = ' \u21BA';

/**
 * Right turn arrow to be appended to messages.
 */
Blockly.Blocks.turtle.RIGHT_TURN = ' \u21BB';

/**
 * Turtle block definitions
 */

Blockly.Blocks.turtle_move = {
    init: function() {
        this.jsonInit({
            message0: "premakni se %1 za %2",
            args0: [{
                type: "field_dropdown",
                name: "DIR",
                options: [
                    ["naprej", "FORWARD"],
                    ["nazaj", "BACKWARD"]
                ]
            }, {
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Premakne želvo naprej ali nazaj.",
        })
    }
};

Blockly.Blocks.turtle_turn = {
    init: function() {
        this.jsonInit({
            message0: "obrni se %1 za %2",
            args0: [{
                type: "field_dropdown",
                name: "DIR",
                options: [
                    ["levo", "LEFT"],
                    ["desno", "RIGHT"]
                ]
            }, {
                type: "input_value",
                name: "ANGLE",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Obrne želvo levo ali desno.",
        })
    }
};

Blockly.Blocks.turtle_width = {
    init: function() {
        this.jsonInit({
            message0: "nastavi širino na %1",
            args0: [{
                type: "input_value",
                name: "WIDTH",
                check: "Number"
            }],
            inputsInline: false,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Nastavi širino črte, ki jo riše svinčnik.",
        })
    }
};

Blockly.Blocks.turtle_pen = {
    init: function() {
        this.jsonInit({
            message0: "svinčnik %1",
            args0: [{
                type: "field_dropdown",
                name: "PEN",
                options: [
                    ["dol", "DOWN"],
                    ["gor", "UP"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Spusti ali dvigne svinčnik.",
        })
    }
};

Blockly.Blocks.turtle_show = {
    init: function() {
        this.jsonInit({
            message0: "%1 želvo",
            args0: [{
                type: "field_dropdown",
                name: "VISIBLE",
                options: [
                    ["pokaži", "SHOW"],
                    ["skrij", "HIDE"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Pokaže ali skrije želvo.",
        })
    }
};

Blockly.Blocks.turtle_shape = {
    init: function() {
        this.jsonInit({
            message0: "nastavi obliko želve na %1",
            args0: [{
                type: "field_dropdown",
                name: "SHAPE",
                options: [
                    ["klasično", "CLASSIC"],
                    ["krog", "CIRCLE"],
                    ["kvadrat", "SQUARE"],
                    ["puščica", "ARROW"],
                    ["trikotnik", "TRIANGLE"],
                    ["želva", "TURTLE"]
                ]
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Nastavi obliko želve na izbrano obliko.",
        })
    }
};

Blockly.Blocks.turtle_setpos = {
    init: function() {
        this.jsonInit({
            message0: "nastavi položaj na %1 in %2",
            args0: [{
                type: "input_value",
                name: "POSX",
                check: "Number",
            }, {
                type: "input_value",
                name: "POSY",
                check: "Number",
            }],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Nastavi položaj želve na dani koordinati.",
        })
    }
};

Blockly.Blocks.turtle_color = {
    init: function() {
        this.jsonInit({
            message0: "nastavi barvo na %1",
            args0: [{
                type: "field_colour",
                name: "COLOR",
                colour: "#000000"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Nastavi barvo svinčnika na izbrano barvo.",
        })
    }
};

Blockly.Blocks.turtle_bgcolor = {
    init: function() {
        this.jsonInit({
            message0: "nastavi barvo ozadja na %1",
            args0: [{
                type: "field_colour",
                name: "COLOR",
                colour: "#ffcc66"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Nastavi barvo ozadja na izbrano barvo.",
        })
    }
};

Blockly.Blocks.turtle_circle = {
    init: function() {
        this.jsonInit({
            message0: "nariši krog s polmerom %1",
            args0: [{
                type: "input_value",
                name: "RADIUS",
                check: "Number"
            }],
            inputsInline: false,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Nariše krožni lok z danim polmerom in kotom.",
        })
    }
};

Blockly.Blocks.turtle_arc = {
    init: function() {
        this.jsonInit({
            message0: "nariši lok s polmerom %1 in kotom %2",
            args0: [{
                type: "input_value",
                name: "RADIUS",
                check: "Number",
            }, {
                type: "input_value",
                name: "ANGLE",
                check: "Number",
            }],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Nariše krožni lok z danim polmerom in kotom.",
        })
    }
};

Blockly.Blocks.turtle_pos = {
    init: function() {
        this.jsonInit({
            message0: "vrni položaj želve",
            output: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Vrne trnutni položaj želve.",
        })
    }
};

Blockly.Blocks.turtle_isdown = {
    init: function() {
        this.jsonInit({
            message0: "svinčnik riše",
            output: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Vrne resnično, če svinčnik riše, sicer vrne neresnično.",
        })
    }
};

Blockly.Blocks.turtle_reset = {
    init: function() {
        this.jsonInit({
            message0: "počisti vse",
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.turtle.HUE,
            tooltip: "Počisti celotno risalno površino.",
        })
    }
};

/**
 * Turtle block generator functions
 */

Blockly.Python['turtle_move'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = '';
  var dir = block.getFieldValue('DIR');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  if (dir == 'FORWARD') {
      code = 't.forward(' + value + ')\n';
  }
  else {
      code = 't.backward(' + value + ')\n';
  }
  return code;
};

Blockly.Python['turtle_turn'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = '';
  var dir = block.getFieldValue('DIR');
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  if (dir == 'LEFT') {
      code = 't.left(' + angle + ')\n';
  }
  else {
      code = 't.right(' + angle + ')\n';
  }
  return code;
};

Blockly.Python['turtle_width'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var code = 't.width('+ width + ')\n';
  return code;
};

Blockly.Python['turtle_pen'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = '';
  var pen = block.getFieldValue('PEN');
  if (pen == 'DOWN') {
      code = 't.pendown()\n';
  }
  else {
      code = 't.penup()\n';
  }
  return code;
};

Blockly.Python['turtle_show'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = '';
  var visible = block.getFieldValue('VISIBLE');
  if (visible == 'SHOW') {
      code = 't.showturtle()\n';
  }
  else {
      code = 't.hideturtle()\n';
  }
  return code;
};

Blockly.Python['turtle_shape'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var shape = block.getFieldValue('SHAPE').toLowerCase();
  var code = 't.shape(\''+ shape + '\')\n';
  return code;
};

Blockly.Python['turtle_setpos'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var posx = Blockly.Python.valueToCode(block, 'POSX', Blockly.Python.ORDER_ATOMIC);
  var posy = Blockly.Python.valueToCode(block, 'POSY', Blockly.Python.ORDER_ATOMIC);
  var code = 't.setpos('+ posx + ', ' + posy + ')\n';
  return code;
};

Blockly.Python['turtle_color'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var color = block.getFieldValue('COLOR');
  var code = 't.color(\''+ color + '\')\n';
  return code;
};

Blockly.Python['turtle_bgcolor'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var color = block.getFieldValue('COLOR');
  var code = 's.bgcolor(\''+ color + '\')\n';
  return code;
};

Blockly.Python['turtle_circle'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var radius = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC);
  var code = 't.circle('+ radius + ')\n';
  return code;
};

Blockly.Python['turtle_arc'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var radius = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC);
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  var code = 't.circle('+ radius + ', ' + angle + ')\n';
  return code;
};

Blockly.Python['turtle_pos'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = 't.pos()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['turtle_isdown'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = 't.isdown()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['turtle_reset'] = function(block) {
  Blockly.Python.definitions_.import_turtle = "import turtle\ns = turtle.Screen()\nt = turtle.Turtle()";

  var code = 't.reset()\n';
  return code;
};