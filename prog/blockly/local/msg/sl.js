var MSG = {
  title: "Koda",
  blocks: "Delčki",
  linkTooltip: "Shrani in poveži z delčki.",
  runTooltip: "Poženi program, določen z delčki v delovnem prostoru.",
  badCode: "Napaka programa:\n%1",
  timeout: "Preseženo največje število iteracij izvajanja.",
  trashTooltip: "Odstrani vse delčke.",
  catLogic: "Pogoji",
  catLoops: "Zanke",
  catMath: "Matematika",
  catText: "Besedilo",
  catLists: "Tabele",
  catColour: "Barve",
  catVariables: "Spremenljivke",
  catFunctions: "Funkcije",
  catTurtle: "Želva",
  catDict: "Slovarji",
  catSets: "Množice",
  catTuples: "n-terice",
  listVariable: "tabela",
  textVariable: "besedilo",
  dictVariable: "slovar",
  httpRequestError: "Pojavila se je težava z zahtevo.",
  linkAlert: "Deli svoje delčke s povezavo:\n\n%1",
  hashError: "Oprosti, '%1' ne ustreza nobenemu shranjenemu programu.",
  xmlError: "Ne morem naložiti datoteke. Morda je bila ustvarjena z drugo različico programa Blockly?",
  badXml: "Napaka pri razčlenjevanju XML:\n%1\n\nKlikni 'V redu' in opusti spremembe ali 'Prekliči' za nadaljevanje urejanja XML."
};

/*
    // Dictionaries Blocks
    Blockly.Msg.LANG_CATEGORY_DICTIONARIES = 'Dictionaries';
    Blockly.Msg.LANG_DICTIONARIES_CREATE_EMPTY_TITLE = 'create empty dictionary';
    Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_EMPTY_HELPURL = '/reference/blocks/dictionaries.html#create-empty-dictionary';

    Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_TITLE = 'make a dictionary';
    Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_TOOLTIP = 'Create a dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_HELPURL = '/reference/blocks/dictionaries.html#make-a-dictionary';

    Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_CONTAINER_TITLE_ADD = 'dict';
    Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this dictionary block.';

    Blockly.Msg.LANG_DICTIONARIES_PAIR_TITLE = 'pair';
    Blockly.Msg.LANG_DICTIONARIES_PAIR_TOOLTIP = 'Add a pair to the dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_PAIR_HELPURL = '/reference/blocks/dictionaries.html#pair';

    Blockly.Msg.LANG_DICTIONARIES_PAIR_INPUT = 'key %1 value %2';
    Blockly.Msg.LANG_DICTIONARIES_PAIR_TOOLTIP = 'Creates a pair with the key and value provided.';
    Blockly.Msg.LANG_DICTIONARIES_MAKE_PAIR_TITLE = 'make a pair';

    Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_INPUT = 'set value for key %1 in dictionary %2 to %3';
    Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_TITLE = 'set dict pair';
    Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_TOOLTIP = 'Set a pair in a dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_HELPURL = '/reference/blocks/dictionaries.html#set-value-for-key';

    Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_INPUT = 'remove entry for key %2 from dictionary %1';
    Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_TITLE = 'remove entry for key from dictionary';
    Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_TOOLTIP = 'Delete a pair in a dictionary given its key.';
    Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_HELPURL = '/reference/blocks/dictionaries.html#delete-entry-for-key';

    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_INPUT = 'get value for key %1 in dictionary %2 or if not found %3';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_TOOLTIP = 'Returns the value in the dictionary associated with the key.';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_TITLE = 'look up in a dict';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_HELPURL = '/reference/blocks/dictionaries.html#get-value-for-key';

    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_INPUT = 'get value at key path %1 in dictionary %2 or if not found %3';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_TOOLTIP = 'Returns the value in the nested dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_TITLE = 'recursive look up in a dict';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_HELPURL = '/reference/blocks/dictionaries.html#get-value-at-key-path';

    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_INPUT = 'set value for key path %1 in dictionary %2 to %3';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_TOOLTIP = 'Sets the value at a path in a tree starting from the given dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_TITLE = 'set value at key path of dictionary';
    Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_HELPURL = '/reference/blocks/dictionaries.html#set-value-for-key-path';

    Blockly.Msg.LANG_DICTIONARIES_GETTERS_TITLE = 'get';
    Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TITLE = 'keys';
    Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_INPUT = 'dictionary';
    Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TOOLTIP = 'Returns a list of all of the keys in the dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_HELPURL = '/reference/blocks/dictionaries.html#get-keys';
    Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TYPEBLOCK = 'get keys';

    Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_TITLE = 'values';
    Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_INPUT = 'dictionary';
    Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_TOOLTIP = 'Returns a list of all of the values in the dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_HELPURL = '/reference/blocks/dictionaries.html#get-values';
    Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TYPEBLOCK = 'get values';

    Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_INPUT = 'is key in dictionary? key %1 dictionary %2';
    Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_TOOLTIP = 'Check if a key is in a dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_TITLE = 'is key in dict?';
    Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_HELPURL = '/reference/blocks/dictionaries.html#is-key-in-dictionary';

    Blockly.Msg.LANG_DICTIONARIES_LENGTH_TITLE = 'size of dictionary';
    Blockly.Msg.LANG_DICTIONARIES_LENGTH_INPUT = 'dictionary';
    Blockly.Msg.LANG_DICTIONARIES_LENGTH_TOOLTIP = 'Returns the number of key-value pairs in the dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_LENGTH_HELPURL = '/reference/blocks/dictionaries.html#size-of-dictionary';

    Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_TITLE = 'list of pairs to dictionary';
    Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_INPUT = 'pairs';
    Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_TOOLTIP = 'Converts a list of pairs to a dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_HELPURL = '/reference/blocks/dictionaries.html#list-of-pairs-to-dictionary';

    Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_TITLE = 'dictionary to list of pairs';
    Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_INPUT = 'dictionary';
    Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_TOOLTIP = 'Converts a dictionary to a list of pairs.';
    Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_HELPURL = '/reference/blocks/dictionaries.html#dictionary-to-list-of-pairs';

    Blockly.Msg.LANG_DICTIONARIES_COPY_TITLE = 'copy dictionary';
    Blockly.Msg.LANG_DICTIONARIES_COPY_INPUT = 'dictionary';
    Blockly.Msg.LANG_DICTIONARIES_COPY_TOOLTIP = 'Returns a shallow copy of the dictionary';
    Blockly.Msg.LANG_DICTIONARIES_COPY_HELPURL = '/reference/blocks/dictionaries.html#copy-dictionary';

    Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_INPUT = 'merge into dictionary %1 from dictionary %2';
    Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_TOOLTIP = 'Copies the pairs of the "From" dictionary into the "To" dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_TITLE = 'combine dictionaries';
    Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_HELPURL = '/reference/blocks/dictionaries.html#merge-into-dictionary';

    Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_TITLE = 'list by walking key path %1 in dictionary or list %2';
    Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_TOOLTIP = 'Starts from the given dictionary and follows it and its children\'s keys based on the given path, returning a list of nodes found at the end of the walk.';
    Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_HELPURL = '/reference/blocks/dictionaries.html#list-by-walking-key-path';

    Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_TITLE = 'walk all at level';
    Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_TOOLTIP = 'Used in the list by walking key path block, explores every node at a given level on the walk.';
    Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_HELPURL = '/reference/blocks/dictionaries.html#walk-all-at-level';

    Blockly.Msg.LANG_DICTIONARIES_IS_DICT_TITLE = 'is a dictionary? %1';
    Blockly.Msg.LANG_DICTIONARIES_IS_DICT_TOOLTIP = 'Tests if something is a dictionary.';
    Blockly.Msg.LANG_DICTIONARIES_IS_DICT_HELPURL = '/reference/blocks/dictionaries.html#is-a-dictionary';
*/