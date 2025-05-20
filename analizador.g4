grammar analizador;

prog: (stat)* EOF;

stat: assignment
    | outputStmt
    ;

assignment: Identifier '=' constant ';' ;

outputStmt: 'output' '(' TextLiteral ')' ';' ;

constant: Number
        | TextLiteral
        ;

// -----------------------------
// LÉXICO
// -----------------------------

TextLiteral: '"' (~["\r\n])* '"' ;

Number: [0-9]+ ;

Identifier: [a-zA-Z] [a-zA-Z0-9_]* ;
OUTPUT : 'output' ;
LPAREN : '(' ;
RPAREN : ')' ;
SEMI   : ';' ;
LBRACE : '{' ;
RBRACE : '}' ;
IGUAL  : '=' ;

WS: [ \t\r\n]+ -> skip ;
