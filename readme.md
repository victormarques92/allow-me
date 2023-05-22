# Allow Me - Instruções de Utilização

Este é um guia básico para utilizar a aplicação Allow Me, que é uma aplicação React. A seguir estão as instruções para configurar e executar a aplicação em seu ambiente local.
A aplicação também pode ser vista [aqui](https://allow-me.vercel.app/).

## Pré-requisitos

Antes de prosseguir, verifique se o seguinte software está instalado em seu sistema:

- Node.js (versão 14 ou superior)
- npm (geralmente instalado junto com o Node.js)

## Instalação

Siga os passos abaixo para configurar a aplicação Allow Me em seu ambiente:

1. Faça o download ou clone este repositório em sua máquina local.

2. Abra o terminal e navegue até o diretório raiz da aplicação.

3. Execute o seguinte comando para instalar as dependências:

```shell
npm install
```

## Executando a Aplicação

Após a conclusão da instalação, execute o seguinte comando para iniciar a aplicação:

```shell
npm run dev
```

Isso iniciará o servidor de desenvolvimento e a aplicação estará acessível no seu navegador através da URL `http://localhost:5173`.

## Configuração Adicional

A aplicação Allow Me utiliza um arquivo JSON para fornecer dados. Certifique-se de ter um arquivo JSON válido e atualizado para que a aplicação funcione corretamente. Você pode modificar o arquivo JSON existente ou fornecer o seu próprio.

---

## Scripts Disponíveis

Aqui estão os principais scripts disponíveis para execução:

```shell
npm run dev
```

Este script inicia o servidor de desenvolvimento do Vite. Ele permite que você desenvolva a aplicação em um ambiente local enquanto observa as alterações nos arquivos para realizar recarregamento automático. O servidor será iniciado na porta 3000.

```shell
npm run build
```

Ao executar este script, o TypeScript (TSC) é primeiro executado para transpilar o código para JavaScript na pasta de construção. Em seguida, o Vite é usado para criar uma versão otimizada da aplicação para implantação em produção. Os arquivos resultantes são gerados na pasta `dist`.

```shell
npm run lint
```

Este script executa o ESLint para verificar e relatar quaisquer problemas relacionados à formatação e estilo do código. O ESLint é configurado com regras específicas para arquivos com extensões `.ts` e `.tsx` no diretório `src`. O comando `--max-warnings 0` especificado garante que qualquer aviso seja tratado como erro.

```shell
npm run preview
```

Este script inicia um servidor de visualização do Vite para visualizar a versão otimizada da aplicação construída usando o comando `build`. Ele permite que você verifique como a aplicação ficará em um ambiente de produção antes de implantá-la.

---

## Considerações Finais

Os scripts fornecidos simplificam várias tarefas ao desenvolver e implantar a aplicação Allow Me. É importante compreender o propósito de cada script para utilizá-los adequadamente. Certifique-se de executar os scripts no diretório raiz da aplicação.

Para obter mais detalhes sobre cada script, consulte o arquivo `package.json` e os arquivos de configuração relevantes, como o `vite.config.js` e o `.eslintrc.json`.

Utilize esses scripts conforme necessário para desenvolver, construir, verificar a formatação do código e visualizar a aplicação Allow Me de maneira eficiente e produtiva.

---

## Cobertura de Testes

Este projeto não possui cobertura de testes implementada.

---

## Suporte

Se você encontrar algum problema durante a instalação ou uso da aplicação, sinta-se à vontade para abrir uma issue neste repositório. Faremos o possível para ajudá-lo.

Aproveite a utilização da aplicação Allow Me!

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
