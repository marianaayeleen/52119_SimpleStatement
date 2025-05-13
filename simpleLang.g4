grammar simpleLang;

prog: stat+;

stat: decl
| assign
 | expr ';'
 ;

decl: ('let' | 'var') ID ('=' expr)? ';';
assign: ID '=' expr ';';

expr: expr op=(MUL | DIV) expr # MulDiv
| expr op=(ADD | SUB) expr # AddSub
| '(' expr ')' # Parens
 | ID # Id
 | NUMBER # Number
 ;

// Tokens
LET: 'let';
VAR: 'var';
SEMI: ';';
ASSIGN: '=';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
ID: [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;