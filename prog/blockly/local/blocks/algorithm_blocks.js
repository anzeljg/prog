Blockly.Blocks.step1 = {
    init: function() {
        this.jsonInit({
            message0: "zbudi se",
            nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.step2 = {
    init: function() {
        this.jsonInit({
            message0: "vstani",
            previousStatement: null,
			nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.step3 = {
    init: function() {
        this.jsonInit({
            message0: "pozajtrkuj",
            previousStatement: null,
			nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.step4 = {
    init: function() {
        this.jsonInit({
            message0: "obuj si čevlje",
            previousStatement: null,
			nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.step5 = {
    init: function() {
        this.jsonInit({
            message0: "pojdi na avtobus",
            previousStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.stmt_a1 = {
    init: function() {
        this.jsonInit({
            message0: "stavek_A1",
            previousStatement: null,
			nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.stmt_a2 = {
    init: function() {
        this.jsonInit({
            message0: "stavek_A2",
            previousStatement: null,
			nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.stmt_b1 = {
    init: function() {
        this.jsonInit({
            message0: "stavek_B1",
            previousStatement: null,
			nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.stmt_b2 = {
    init: function() {
        this.jsonInit({
            message0: "stavek_B2",
            previousStatement: null,
			nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.ellipsis = {
    init: function() {
        this.jsonInit({
            message0: "...",
            previousStatement: null,
			nextStatement: null,
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.expression = {
    init: function() {
        this.jsonInit({
            message0: "izraz",
			output: "Number",
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.index = {
    init: function() {
        this.jsonInit({
            message0: "indeks",
			output: "Number",
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.index_a = {
    init: function() {
        this.jsonInit({
            message0: "a",
			output: "Number",
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.index_b = {
    init: function() {
        this.jsonInit({
            message0: "b",
			output: "Number",
			style: "math_blocks"
        })
    }
};
Blockly.Blocks.condition = {
    init: function() {
        this.jsonInit({
            message0: "pogoj",
			output: "Boolean",
			style: "logic_blocks"
        })
    }
};
Blockly.Blocks.condition1 = {
    init: function() {
        this.jsonInit({
            message0: "pogoj1",
			output: "Boolean",
			style: "logic_blocks"
        })
    }
};
Blockly.Blocks.condition2 = {
    init: function() {
        this.jsonInit({
            message0: "pogoj2",
			output: "Boolean",
			style: "logic_blocks"
        })
    }
};
Blockly.Blocks.condition3 = {
    init: function() {
        this.jsonInit({
            message0: "pogoj3",
			output: "Boolean",
			style: "logic_blocks"
        })
    }
};
Blockly.Blocks.everything_ok = {
    init: function() {
        this.jsonInit({
            message0: "vseJeVRedu",
			output: "Boolean",
			style: "logic_blocks"
        })
    }
};


Blockly.JavaScript['step1'] = function(block) {
  var code = 'wakeUp();\n';
  return code;
};
Blockly.JavaScript['step2'] = function(block) {
  var code = 'getUp();\n';
  return code;
};
Blockly.JavaScript['step3'] = function(block) {
  var code = 'eatBreakfast();\n';
  return code;
};
Blockly.JavaScript['step4'] = function(block) {
  var code = 'dressUp();\n';
  return code;
};
Blockly.JavaScript['step5'] = function(block) {
  var code = 'gotoBus();';
  return code;
};
Blockly.JavaScript['stmt_a1'] = function(block) {
  var code = 'stavek_A1();';
  return code;
};
Blockly.JavaScript['stmt_a2'] = function(block) {
  var code = 'stavek_A2();';
  return code;
};
Blockly.JavaScript['stmt_b1'] = function(block) {
  var code = 'stavek_B1();';
  return code;
};
Blockly.JavaScript['stmt_b2'] = function(block) {
  var code = 'stavek_B2();';
  return code;
};
Blockly.JavaScript['ellipsis'] = function(block) {
  var code = '// ...';
  return code;
};
Blockly.JavaScript['expression'] = function(block) {
  var code = 'izraz';
  return code;
};
Blockly.JavaScript['index'] = function(block) {
  var code = 'indeks';
  return code;
};
Blockly.JavaScript['index_a'] = function(block) {
  var code = 'a';
  return code;
};
Blockly.JavaScript['index_b'] = function(block) {
  var code = 'b';
  return code;
};
Blockly.JavaScript['condition'] = function(block) {
  var code = 'pogoj';
  return code;
};
Blockly.JavaScript['condition1'] = function(block) {
  var code = 'pogoj1';
  return code;
};
Blockly.JavaScript['condition2'] = function(block) {
  var code = 'pogoj2';
  return code;
};
Blockly.JavaScript['condition3'] = function(block) {
  var code = 'pogoj3';
  return code;
};
Blockly.JavaScript['everything_ok'] = function(block) {
  var code = 'vseJeVRedu()';
  return code;
};
