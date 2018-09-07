Blockly.Blocks.step1 = {
    init: function() {
        this.jsonInit({
            message0: "zbudi se",
            nextStatement: null,
            colour: 210
        })
    }
};
Blockly.Blocks.step2 = {
    init: function() {
        this.jsonInit({
            message0: "vstani",
            previousStatement: null,
			nextStatement: null,
            colour: 210
        })
    }
};
Blockly.Blocks.step3 = {
    init: function() {
        this.jsonInit({
            message0: "pozajtrkuj",
            previousStatement: null,
			nextStatement: null,
            colour: 210
        })
    }
};
Blockly.Blocks.step4 = {
    init: function() {
        this.jsonInit({
            message0: "obuj si čevlje",
            previousStatement: null,
			nextStatement: null,
            colour: 210
        })
    }
};
Blockly.Blocks.step5 = {
    init: function() {
        this.jsonInit({
            message0: "pojdi na avtobus",
            previousStatement: null,
            colour: 210
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
