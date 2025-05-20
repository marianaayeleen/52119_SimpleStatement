// Generated from analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,70,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,0,1,0,1,1,4,1,34,8,1,11,1,12,1,35,1,2,1,2,5,2,40,8,
2,10,2,12,2,43,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,
7,1,7,1,8,1,8,1,9,1,9,1,10,4,10,65,8,10,11,10,12,10,66,1,10,1,10,0,0,11,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,1,0,5,3,0,10,10,13,13,
34,34,1,0,48,57,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,
13,32,32,73,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,
0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,
0,0,0,1,23,1,0,0,0,3,33,1,0,0,0,5,37,1,0,0,0,7,44,1,0,0,0,9,51,1,0,0,0,11,
53,1,0,0,0,13,55,1,0,0,0,15,57,1,0,0,0,17,59,1,0,0,0,19,61,1,0,0,0,21,64,
1,0,0,0,23,27,5,34,0,0,24,26,8,0,0,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,
0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,34,0,0,31,2,1,0,
0,0,32,34,7,1,0,0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,
0,36,4,1,0,0,0,37,41,7,2,0,0,38,40,7,3,0,0,39,38,1,0,0,0,40,43,1,0,0,0,41,
39,1,0,0,0,41,42,1,0,0,0,42,6,1,0,0,0,43,41,1,0,0,0,44,45,5,111,0,0,45,46,
5,117,0,0,46,47,5,116,0,0,47,48,5,112,0,0,48,49,5,117,0,0,49,50,5,116,0,
0,50,8,1,0,0,0,51,52,5,40,0,0,52,10,1,0,0,0,53,54,5,41,0,0,54,12,1,0,0,0,
55,56,5,59,0,0,56,14,1,0,0,0,57,58,5,123,0,0,58,16,1,0,0,0,59,60,5,125,0,
0,60,18,1,0,0,0,61,62,5,61,0,0,62,20,1,0,0,0,63,65,7,4,0,0,64,63,1,0,0,0,
65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,6,10,0,0,69,
22,1,0,0,0,5,0,27,35,41,66,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class analizadorLexer extends antlr4.Lexer {

    static grammarFileName = "analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, "'output'", "'('", "')'", 
                         "';'", "'{'", "'}'", "'='" ];
	static symbolicNames = [ null, "TextLiteral", "Number", "Identifier", "OUTPUT", 
                          "LPAREN", "RPAREN", "SEMI", "LBRACE", "RBRACE", 
                          "IGUAL", "WS" ];
	static ruleNames = [ "TextLiteral", "Number", "Identifier", "OUTPUT", "LPAREN", 
                      "RPAREN", "SEMI", "LBRACE", "RBRACE", "IGUAL", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

analizadorLexer.EOF = antlr4.Token.EOF;
analizadorLexer.TextLiteral = 1;
analizadorLexer.Number = 2;
analizadorLexer.Identifier = 3;
analizadorLexer.OUTPUT = 4;
analizadorLexer.LPAREN = 5;
analizadorLexer.RPAREN = 6;
analizadorLexer.SEMI = 7;
analizadorLexer.LBRACE = 8;
analizadorLexer.RBRACE = 9;
analizadorLexer.IGUAL = 10;
analizadorLexer.WS = 11;



