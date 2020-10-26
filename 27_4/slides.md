---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->
# 28.1 - Autenticação com JWT

<!-- slide vertical=true -->

## O que vamos aprender?

1. O que é JWT;
2. Como funciona o JWT;
3. Como implementar o JWT;
	
<!-- slide -->

## O que é JWT?

JSON WEB TOKEN.

<!-- slide vertical=true -->

## Algoritmos de criptografia

* Simétrica
* Assimétrica

<!-- slide vertical=true -->

## O que é Hash?

<!-- slide vertical=true -->

## O que é HMAC?

O HMAC é um um algoritmo para gerar um MAC (código de autenticação de mensagem) criptografado através de algum algoritmo de hash (algoritmos que codificam mensagens) como md5, sha1 ou sha256, a partir de um segredo (como uma senha) e de uma mensagem qualquer.

<!-- slide vertical=true -->

## O que é RSA?

O RSA é um algorítmo de criptografia assimétrica que utiliza, como já vimos, uma chave pública e uma privada. Tudo que é criptografado pela chave pública só pode ser descriptografado pela chave privada, o que quer dizer que uma mensagem criptografada com uma chave pública só pode ser lida pela pessoa que gerou aquele par de chaves, pois essa pessoa é a única que possui a chave privada para descriptografá-la.

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/h6w73lgj?section=f6fed573-9af6-4164-a1cb-1ebcb5f2cac2)

<!-- slide -->

## Como funciona o JWT?

Um token JWT é formato por três partes: **Header**, **Payload** e **Assinatura**;

<!-- slide vertical=true -->

## Como um token é gerado?

[Imagem](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-28/28-1/images/pipeline.png?token=AAGW4NSSNMEN2RZETYCBQXS7UBB4Q)

<!-- slide vertical=true -->

## Como ver as partes do token JWT

[Link](https://jwt.io/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.reGQzG3OKdoIMWLDKOZ4TICJit3EW69cQE72E2CfzRE)

## Decodificar para base64

```bash
echo eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 | base64 -d
```

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/h6w73lgj?section=f6fed573-9af6-4164-a1cb-1ebcb5f2cac2)

<!-- slide vertical=true -->

<!-- slide  -->

## Como implementar o JWT

1. Como criar um token JWT.
2. Como validar um token JWT.

<!-- slide vertical=true -->

Lets`code!

