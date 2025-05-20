grammar analizador;

prog: (simpleStatement)* EOF;

simpleStatement: assignmentStatement
    | outputStatement
    ;

assignmentStatement: Identifier '=' constant ';' ;

outputStatement: 'output' '(' TextLiteral ')' ';' ;

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
