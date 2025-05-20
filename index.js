import antlr4, { CharStreams, CommonTokenStream } from 'antlr4';
import analizadorLexer from './generated/analizadorLexer.js';
import analizadorParser from './generated/analizadorParser.js';
import CustomanalizadorVisitor from './CustomanalizadorVisitor.js';
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new analizadorLexer(inputStream);

    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();

    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema          | Token          |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        const lexema = token.text.padEnd(16);
        const symbolic = analizadorLexer.symbolicNames[token.type];
        const tokenType = (symbolic !== null && symbolic !== undefined)
            ? symbolic.padEnd(14)
            : `Token(${token.type})`.padEnd(14);
        console.log(`| ${lexema} | ${tokenType} |`);
    }

    console.log("--------------------------------------------------");

    inputStream = CharStreams.fromString(input);
    lexer = new analizadorLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new analizadorParser(tokenStream);
    const tree = parser.prog();

    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        console.log("\nÁrbol de derivación:");
        console.log(tree.toStringTree(parser.ruleNames, parser));
        const visitor = new CustomanalizadorVisitor();
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
