import analizadorVisitor from './generated/analizadorVisitor.js';

class CustomanalizadorVisitor extends analizadorVisitor {
  constructor() {
    super();
    this.memory = {};
  }

  visitAssignment(ctx) {
    const id = ctx.Identifier().getText();
    const value = this.visit(ctx.constant());
    this.memory[id] = value;
    console.log(`Asignación: ${id} = ${value}`);
    return value;
  }

  visitOutputStmt(ctx) {
    const text = this.visit(ctx.TextLiteral());
    console.log(`Salida: ${text}`);
    return text;
  }

  visitTextLiteral(ctx) {
    return ctx.getText().slice(1, -1); // quitar comillas
  }

  visitConstant(ctx) {
    if (ctx.Number()) {
      return parseInt(ctx.Number().getText());
    } else {
      return this.visit(ctx.TextLiteral());
    }
  }
}

export default CustomanalizadorVisitor;
