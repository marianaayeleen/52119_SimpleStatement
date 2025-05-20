import analizadorVisitor from './generated/analizadorVisitor.js';

export default class CustomanalizadorVisitor extends analizadorVisitor {
    constructor() {
        super();
        this.variables = {};  // Para guardar variables asignadas
    }

    visitAssignmentStatement(ctx) {
        const id = ctx.Identifier().getText();
        const value = ctx.constant().getText();
        this.variables[id] = value;
        console.log(`Asignación: ${id} = ${value}`);
    }

    visitOutputStatement(ctx) {
        const text = ctx.TextLiteral().getText();
        console.log(`Salida: ${text}`);
    }
}
