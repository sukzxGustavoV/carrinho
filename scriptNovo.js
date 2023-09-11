const produtos = [
    {
        id: "1",
        nome: "Informática para Internet: Interfaces Web II",
        prof: "Prof. Kelly",
        preco_de: 80,
        preco_por: 50,
        descricao: "O melhor curso de JavaScript",
        imagem: "./assets/1.png",
    },
    {
        id: "2",
        nome: "Gestão de conteúdo Web II",
        prof: "Prof. Kelly",
        preco_de: 80,
        preco_por: 50,
        descricao: "O melhor curso de JavaScript",
        imagem: "./assets/3.png",
    },
    ];
    
    function renderizaProdutos(){
        let html = "";
        for (let i = 0; i < produtos.length; i++) {
            html = html + criaProduto(produtos[i], i);
        }
        return html;
    }
    
    function criaProduto(produto, index) {
        return `
        <div class="curso">
            <img class='inicio' title="t" src="${produto.imagem}" />
            <div class="curso-info">
                <h4>${produto.nome}</h4>
                <p>${produto.prof}</p>
                <p>${produto.descricao}</p>
            </div>
            <div class="curso-preco">
                <span class="preco-de"R$${produto.preco_de}</span>
                <span class="preco-por"R$${produto.preco_por}</span>
                <button class="btncar btn-add" data-index="${index}"></button>
            </div>
        </div>
        `;
    }
    const container = document.querySelector('#container')
    container.innerHTML = renderizaProdutos();

    const carrinhoItens = {};
    function renderizaCarrinho() { 
        let html = '';
        for (let produtoId in carrinhoItens) {
         html = html + criaItemCarrinho (carrinhoItens [produtoId]);
        }
    document.querySelector('.carrinho_itens').innerHTML = html;
    }
    
    function criaItemCarrinho (produto) {
    return `
    <div class="carrinho_compra">
    <h4>${produto.nome}</h4>
    <p>Preço unidade: ${produto.preco_por} | Quantidade: ${produto.quantidade}</p> 
    <p>Valor: R$: $ {produto.preco_por*produto.quantidade}</p>
    <button data-produto-id="${produto.id}" class="btn-remove"></button>
    </div>
    `;
    }
    function criacarrinhoTotal() {
        let total = 0;
        for (let produtold in carrinholtens) {
        total = total + carrinholtens [produtoId] .preco_por * carrinhoItens[produtold].quantidade;
        }
        document.querySelector('.carrinho_total').innerHTML = `
        <h4>Total: <strong> R$${total} </strong></h4>
        <a href="#" target="_blank">
        <ion-icon name="card-outline"></ion-icon> 
        <strong>Comprar Agora</strong>
            </a>
        `;}
        function adicionaItemNoCarrinho (produto) { 
            if (!carrinholtens [produto.id]) { 
                carrinhoItens [produto.id] = produto; 
                carrinhoItens [produto.id].quantidade = 0; 
            }++carrinhoItens [produto.id].quantidade; 
            renderizaCarrinho();
            criaCarrinhoTotal();}
            
            document.body.addEventListener('click', function (event) { 
                const elemento = event.target;
                if (elemento.classList.contains('btn-add')) {
                    const index = parseInt(elemento.getAttribute('data-index'), 10); 
                    const produto = produtos [index];
                
                adicionaItemNoCarrinho (produto);
                }
                if (elemento.classList.contains('btn-remove')) {
                    const produtoId = elemento.getAttribute('data-produto-id');
                    if (carrinholtens [produtoId].quantidade <= 1) { 
                        delete carrinhoItens [produtoId];
                    } else {
                        --carrinholtens [produtoId].quantidade;
                    }
                    renderizaCarrinho(); 
                    criaCarrinhoTotal();
                }
            });
                
                
                
   
        