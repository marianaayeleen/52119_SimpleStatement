// Generated from analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,11,36,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,1,0,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,1,1,0,1,2,32,
0,13,1,0,0,0,2,20,1,0,0,0,4,22,1,0,0,0,6,27,1,0,0,0,8,33,1,0,0,0,10,12,3,
2,1,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,16,1,0,
0,0,15,13,1,0,0,0,16,17,5,0,0,1,17,1,1,0,0,0,18,21,3,4,2,0,19,21,3,6,3,0,
20,18,1,0,0,0,20,19,1,0,0,0,21,3,1,0,0,0,22,23,5,3,0,0,23,24,5,10,0,0,24,
25,3,8,4,0,25,26,5,7,0,0,26,5,1,0,0,0,27,28,5,4,0,0,28,29,5,5,0,0,29,30,
5,1,0,0,30,31,5,6,0,0,31,32,5,7,0,0,32,7,1,0,0,0,33,34,7,0,0,0,34,9,1,0,
0,0,2,13,20];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, null, null, null, "'output'", "'('", "')'", 
                            "';'", "'{'", "'}'", "'='" ];
    static symbolicNames = [ null, "TextLiteral", "Number", "Identifier", 
                             "OUTPUT", "LPAREN", "RPAREN", "SEMI", "LBRACE", 
                             "RBRACE", "IGUAL", "WS" ];
    static ruleNames = [ "prog", "stat", "assignment", "outputStmt", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 10;
	            this.stat();
	            this.state = 15;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 16;
	        this.match(analizadorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_stat);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.assignment();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.outputStmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(analizadorParser.Identifier);
	        this.state = 23;
	        this.match(analizadorParser.IGUAL);
	        this.state = 24;
	        this.constant();
	        this.state = 25;
	        this.match(analizadorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputStmt() {
	    let localctx = new OutputStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_outputStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(analizadorParser.OUTPUT);
	        this.state = 28;
	        this.match(analizadorParser.LPAREN);
	        this.state = 29;
	        this.match(analizadorParser.TextLiteral);
	        this.state = 30;
	        this.match(analizadorParser.RPAREN);
	        this.state = 31;
	        this.match(analizadorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.TextLiteral = 1;
analizadorParser.Number = 2;
analizadorParser.Identifier = 3;
analizadorParser.OUTPUT = 4;
analizadorParser.LPAREN = 5;
analizadorParser.RPAREN = 6;
analizadorParser.SEMI = 7;
analizadorParser.LBRACE = 8;
analizadorParser.RBRACE = 9;
analizadorParser.IGUAL = 10;
analizadorParser.WS = 11;

analizadorParser.RULE_prog = 0;
analizadorParser.RULE_stat = 1;
analizadorParser.RULE_assignment = 2;
analizadorParser.RULE_outputStmt = 3;
analizadorParser.RULE_constant = 4;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(analizadorParser.EOF, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_stat;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	outputStmt() {
	    return this.getTypedRuleContext(OutputStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_assignment;
    }

	Identifier() {
	    return this.getToken(analizadorParser.Identifier, 0);
	};

	IGUAL() {
	    return this.getToken(analizadorParser.IGUAL, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	SEMI() {
	    return this.getToken(analizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OutputStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_outputStmt;
    }

	OUTPUT() {
	    return this.getToken(analizadorParser.OUTPUT, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	TextLiteral() {
	    return this.getToken(analizadorParser.TextLiteral, 0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(analizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterOutputStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitOutputStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitOutputStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_constant;
    }

	Number() {
	    return this.getToken(analizadorParser.Number, 0);
	};

	TextLiteral() {
	    return this.getToken(analizadorParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ProgContext = ProgContext; 
analizadorParser.StatContext = StatContext; 
analizadorParser.AssignmentContext = AssignmentContext; 
analizadorParser.OutputStmtContext = OutputStmtContext; 
analizadorParser.ConstantContext = ConstantContext; 
