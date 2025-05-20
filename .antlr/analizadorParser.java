// Generated from c:/Users/daian/Desktop/aye/52119-main/52119-main/analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class analizadorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		TextLiteral=1, Number=2, Identifier=3, OUTPUT=4, LPAREN=5, RPAREN=6, SEMI=7, 
		LBRACE=8, RBRACE=9, IGUAL=10, WS=11;
	public static final int
		RULE_prog = 0, RULE_stat = 1, RULE_assignment = 2, RULE_outputStmt = 3, 
		RULE_constant = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "stat", "assignment", "outputStmt", "constant"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'output'", "'('", "')'", "';'", "'{'", "'}'", 
			"'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TextLiteral", "Number", "Identifier", "OUTPUT", "LPAREN", "RPAREN", 
			"SEMI", "LBRACE", "RBRACE", "IGUAL", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "analizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public analizadorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(analizadorParser.EOF, 0); }
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Identifier || _la==OUTPUT) {
				{
				{
				setState(10);
				stat();
				}
				}
				setState(15);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(16);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatContext extends ParserRuleContext {
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public OutputStmtContext outputStmt() {
			return getRuleContext(OutputStmtContext.class,0);
		}
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stat);
		try {
			setState(20);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(18);
				assignment();
				}
				break;
			case OUTPUT:
				enterOuterAlt(_localctx, 2);
				{
				setState(19);
				outputStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(analizadorParser.Identifier, 0); }
		public TerminalNode IGUAL() { return getToken(analizadorParser.IGUAL, 0); }
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(analizadorParser.SEMI, 0); }
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(Identifier);
			setState(23);
			match(IGUAL);
			setState(24);
			constant();
			setState(25);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OutputStmtContext extends ParserRuleContext {
		public TerminalNode OUTPUT() { return getToken(analizadorParser.OUTPUT, 0); }
		public TerminalNode LPAREN() { return getToken(analizadorParser.LPAREN, 0); }
		public TerminalNode TextLiteral() { return getToken(analizadorParser.TextLiteral, 0); }
		public TerminalNode RPAREN() { return getToken(analizadorParser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(analizadorParser.SEMI, 0); }
		public OutputStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputStmt; }
	}

	public final OutputStmtContext outputStmt() throws RecognitionException {
		OutputStmtContext _localctx = new OutputStmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_outputStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			match(OUTPUT);
			setState(28);
			match(LPAREN);
			setState(29);
			match(TextLiteral);
			setState(30);
			match(RPAREN);
			setState(31);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstantContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(analizadorParser.Number, 0); }
		public TerminalNode TextLiteral() { return getToken(analizadorParser.TextLiteral, 0); }
		public ConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant; }
	}

	public final ConstantContext constant() throws RecognitionException {
		ConstantContext _localctx = new ConstantContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_constant);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			_la = _input.LA(1);
			if ( !(_la==TextLiteral || _la==Number) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000b$\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0005\u0000\f\b\u0000\n\u0000\f\u0000\u000f\t\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0003\u0001\u0015\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0000\u0000\u0005\u0000\u0002\u0004\u0006\b\u0000\u0001\u0001"+
		"\u0000\u0001\u0002 \u0000\r\u0001\u0000\u0000\u0000\u0002\u0014\u0001"+
		"\u0000\u0000\u0000\u0004\u0016\u0001\u0000\u0000\u0000\u0006\u001b\u0001"+
		"\u0000\u0000\u0000\b!\u0001\u0000\u0000\u0000\n\f\u0003\u0002\u0001\u0000"+
		"\u000b\n\u0001\u0000\u0000\u0000\f\u000f\u0001\u0000\u0000\u0000\r\u000b"+
		"\u0001\u0000\u0000\u0000\r\u000e\u0001\u0000\u0000\u0000\u000e\u0010\u0001"+
		"\u0000\u0000\u0000\u000f\r\u0001\u0000\u0000\u0000\u0010\u0011\u0005\u0000"+
		"\u0000\u0001\u0011\u0001\u0001\u0000\u0000\u0000\u0012\u0015\u0003\u0004"+
		"\u0002\u0000\u0013\u0015\u0003\u0006\u0003\u0000\u0014\u0012\u0001\u0000"+
		"\u0000\u0000\u0014\u0013\u0001\u0000\u0000\u0000\u0015\u0003\u0001\u0000"+
		"\u0000\u0000\u0016\u0017\u0005\u0003\u0000\u0000\u0017\u0018\u0005\n\u0000"+
		"\u0000\u0018\u0019\u0003\b\u0004\u0000\u0019\u001a\u0005\u0007\u0000\u0000"+
		"\u001a\u0005\u0001\u0000\u0000\u0000\u001b\u001c\u0005\u0004\u0000\u0000"+
		"\u001c\u001d\u0005\u0005\u0000\u0000\u001d\u001e\u0005\u0001\u0000\u0000"+
		"\u001e\u001f\u0005\u0006\u0000\u0000\u001f \u0005\u0007\u0000\u0000 \u0007"+
		"\u0001\u0000\u0000\u0000!\"\u0007\u0000\u0000\u0000\"\t\u0001\u0000\u0000"+
		"\u0000\u0002\r\u0014";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}