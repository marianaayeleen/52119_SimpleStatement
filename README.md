ANALIZADOR   
Sanchez Mariana  
Legajo: 52119  
TEMA: 39568_20  
Modo de Uso :  
Para clonar el repositorio se debe seguir el siguiente comando: 
Elegí una carpeta donde quieras clonar el proyecto, y ejecutá: 
git clone https://github.com/marianaayeleen/52119_SimpleStatement.git 

Para correr el proyecto en JavaScript con ANTLR4 en Visual Studio Code  
requisitos previos: 
1.	Node.js instalado 
-Verificá con: 
node -v 
npm -v 
2 .ANTLR 4 .jar ya descargado 
3. Archivos generados por ANTLR en la carpeta /generated 
-Esto debe estar hecho con: 
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -o generated analizador.g4 
-Abrir una terminal en Visual Studio Code y ejecutar:  
node index.js 
-Esto va a hacer lo siguiente: 
 •Leer el contenido de input.txt (si existe). 
 •Analizarlo con tu gramática. 
 •Mostrar los tokens y el árbol de derivación. 
 •Informar si hay errores de sintaxis.

¿Como correr otros ejemplos ?  
-Cambiá la entrada en el index.js así: 
input = fs.readFileSync('Ejemplo1Correcto.txt', 'utf8'); 
-Y después ejecutá nuevamente: 
node index.js 
Para visualizar los árboles de derivación se debe seleccionar lo siguiente:  
Run—> Start Debugging 
 
 
Ejemplos con ambos ejemplos correctos : 
x = 42; 
output("Hola mundo"); 

![Hola Mundo](https://github.com/user-attachments/assets/74410f8b-405b-4cc6-9ca6-0fcfa60d41e0)



texto = "Bienvenidos!" 

output("Programa iniciado") 

![Bienvenidos](https://github.com/user-attachments/assets/1ffdceaf-fdb0-43ab-a004-66301f6b018a)

En la Carpeta se va a encontrar lo siguiente:  

52119-main 
Carpeta raíz del proyecto. 
 .antlr 
Archivos intermedios generados por ANTLR para depuración (por ejemplo .tokens, .interp). No son necesarios para ejecutar el código, pero ANTLR los genera automáticamente. 
 
 
 
 .vscode 
Configuraciones de VS Code para este proyecto (por ejemplo, cómo lanzar el debugger). 
 
 generated 
Contiene todos los archivos .js generados automáticamente por ANTLR a partir de tu gramática analizador.g4, incluyendo: 
analizadorLexer.js 
analizadorParser.js 
analizadorVisitor.js 
 
Archivos .tokens, .interp y otros auxiliares 
Node_modules 
Carpeta creada por npm. Contiene todas las dependencias del proyecto. No se sube al repositorio. 
 analizador.g4 
La gramatica ANTLR en formato .g4. Este es el "corazón" del proyecto. 
La gramática es el siguiente :  
 
 antlr-4.13.2-complete.jar 
El compilador ANTLR (versión completa). Es para generar el contenido de /generated. 
 
 CustomanalizadorVisitor.js 
Es el archivo donde se define la lógica semántica visitando los nodos del árbol. 
 index.js 
El archivo principal. Ejecuta el análisis léxico y sintáctico, muestra tokens y árbol, y llama al visitor. 
El contenido de index.js es el siguiente:  
 
input.txt 
Archivo con una entrada de prueba. Se puede reemplazar por otros. 
 
 EjemploXCorrecto.txt y EjemploXIncorrecto 
Archivos con ejemplos válidos y no válidos según tu gramática. Los usás para pruebas. 
 
 
 package.json y package-lock.json 
Metadatos del proyecto Node.js. El primero define dependencias y configuración básica. 
 
