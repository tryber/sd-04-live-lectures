<!-- slide -->
​
# Aula 26.5 - Praticando Express
​
<!-- slide vertical=true -->
​
# Estrutura de uma requisição HTTP
​
<!-- slide vertical=true -->
​
```bash
http -v POST postman-echo.com/post\?email=turma4@betrybe.com \
name="Turma 04" \
students=56
```
​
```http
POST /post?email=turma4@betrybe.com HTTP/1.1
Accept: application/json, */*;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 26
Content-Type: application/json
Host: postman-echo.com
User-Agent: HTTPie/2.1.0
​
{
    "name": "Turma04",
    "studentes": 56
}
```
​
<!-- slide vertical=true -->
​
## De onde podemos obter informação
​
- Caminho
​
  - Params
  - Query
​
- Headers
​
- Body
​
<!-- slide vertical=true -->
​
O node recebe esse payload de texto, processa essas informações, extrai e as passa para o Express. O Express entende essas informações e, com base nelas, decide qual middleware chamar
​
<!-- slide -->
​
# Express
​
<!-- slide vertical=true -->
​
O Express é, então, uma ferramenta para facilitar o processamento e a resposta de requisições HTTP. Ele é o responsável por saber que parte do nosso código (middleware) executar para cada tipo de requisição baseado em
​
<!-- slide vertical=true -->
​
# É tudo middleware
​
<!-- slide vertical=true -->
​
## Anatomia de um middleware
​
```javascript
const middlewareFunction = (req, res, next) => {
  // req.params
  // req.query
  // req.headers
  // req.body
  // res.status
  // res.json
  // res.send
  // res.end
  // next
};
```
​
<!-- slide vertical=true -->
​
## Middlewares de erro
​
```javascript
const errorMiddlewareFunction = (err, req, res, next) => {
  // req.params
  // req.query
  // req.headers
  // req.body
  // res.status
  // res.json
  // res.send
  // res.end
  // next
};
```
​
<!-- slide vertical=true -->
​
## Registrando middlewares
​
```js
// Executado em qualquer requisição
app.use(middlewareFunction);
// Executado em qualquer requisição para /path*
app.use('/path', middlewareFunction);
​
// Executado em requisições do tipo GET para /path
app.get('/path', middlewareFunction);
// Executado em requisições do tipo POST para /path
app.post('/path', middlewareFunction);
// Executado em requisições do tipo PUT para /path
app.put('/path', middlewareFunction);
// Executado em requisições do tipo DELETE para /path
app.delete('/path', middlewareFunction);
​
// Executado em requisições de qualquer tipo para /path
app.all('/path', middlewareFunction);
​
// Executado quando algo é passado para `next`
app.use(errorMiddlewareFunction);
```