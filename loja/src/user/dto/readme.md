Libs usadas:
npm install class-validator class-transformer

Alteração no MAIN.TS realizada:

app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
 );
 
  // para resolver dependencias
  useContainer(app.select(AppModule), { fallbackOnErrors: true });



 transform: true: com isso, indicamos que queremos que o pipe transforme o JSON recebido na requisição para um objeto da classe que vamos usar como tipo do parâmetro no método do controller decorado com o @Body.

 whitelist: true: Essa configuração indica que as chaves do JSON devem ser iguais ao do objeto no qual o JSON será transformado, ignorando chaves que não são pareáveis a atributos do objeto.

 forbidNonWhitelisted: true: Através dessa configuração, indicamos que qualquer chave que vier que não tiver par no objeto final deverá causar um erro, o que sinaliza que o cliente da nossa API está tentando enviar dados que não aceitamos.

 