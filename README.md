# carrinho

- ( const produtos = [...]):
Um array chamado produtosque contém objetos, cada um representando um produto. Cada objeto tem propriedades como: id, nome, prof, preco_de, preco_por, descricao e imagem.

- renderizaProdutos
Esta função percorre o array de produtos e cria o HTML correspondente para cada um, chamando a função criaProduto para gerar a estrutura HTML.

- criaProduto
Recebe um objeto 'produto' e um 'index' como argumentos e retorna uma string contendo uma estrutura HTML para exibir o produto. A estrutura inclui elementos como: <img>, <h4>, <p>e <button>, preenchidos com as informações do produto.

- renderizaProdutos
A função é chamada, gerando o HTML para todos os produtos, e esse HTML é inserido no elemento com o ID containerno documento HTML.

- carrinhoItens
O objeto carrinhoItens é usado para rastrear os itens no carrinho. Ele é inicializado como um objeto vazio.

- renderizaCarrinho
Gera o HTML para os itens do carrinho a partir do objeto 'carrinhoItens'.

- criaItemCarrinho
Recebe um objeto 'produto' e retorna o HTML para exibir um item no carrinho, incluindo informações como: nome, preço unitário, quantidade e valor total.

- criaCarrinhoTotal
Calcula e exibe o valor total do carrinho.

- adicionaItemNoCarrinho
Adiciona um item ao carrinho. Se o produto já estiver no carrinho, a quantidade é incrementada; caso contrário, o produto é adicionado ao carrinho.

- document.body
Ele verifica se o elemento clicado possui uma classe 'btn-add' (indicando que é um botão de adição ao carrinho) e, se sim, chama a função 'adicionaItemNoCarrinho'.
Outro ouvinte de eventos lida com a remoção de itens do carrinho quando um botão com a classe 'btn-remove' é clicado.
