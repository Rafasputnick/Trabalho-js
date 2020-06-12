/* jshint esversion: 6 */

var tituloNotas = [];
var textoNotas = [];
var qntdStars = '';
var estadoJogo = '';

/* Função chamada ao clicar no botão "Gravar lembrete" */
function gravarNota() {
    /* Obtém os valores digitados nas caixas de texto (título)
        e descrição da nota */
    const titulo = document.querySelector("#titulo").value;
    const texto = document.querySelector("#texto").value;
    
    /* Adiciona os titulos e descrições no final do array */
    tituloNotas.push(titulo + '  |  ' + qntdStars + '  |  ' + estadoJogo);
    textoNotas.push(texto);

    /* Solicita a atualização da tela */
    atualizarListaNotas();
}

/* Função utilizada para atualizar a lista de notas com os
    textos e títulos que estão nos arrays */
function atualizarListaNotas() {
    /* Obtém todos os itens de notas sendo exibidos */
    const elements = document.querySelectorAll(".item-show");

    /* Itera pelos itens e solicita a remoção dos mesmos */
    for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    /* Com a lista visual de itens "limpa", itera pelo array de notas
        usando os títulos como referência */
    for (let i = 0; i < tituloNotas.length; i++) {
        /* Clona o item de referência para criar um item novo */
        const cloneItem = document.querySelector("#base-item").cloneNode(true);
        /* Associa o item de referência ao container de listas */
        const parent = document.querySelector("#content");
        parent.appendChild(cloneItem);

        /* Faz o item aparecer */
        cloneItem.className = "item-show";

        /* Configura o titulo e o texto das notas com base no item do array */
        cloneItem.querySelector(".item-title").textContent = tituloNotas[i];
        cloneItem.querySelector(".item-text").textContent = textoNotas[i];
    }
}

function starOnMouseOver(qntd){
    const star1 = document.querySelector('#star1');
    const star2 = document.querySelector('#star2');
    const star3 = document.querySelector('#star3');
    const star4 = document.querySelector('#star4');
    const star5 = document.querySelector('#star5');
    if (qntd==1){
        star1.textContent = '★';
        star2.textContent = '☆';
        star3.textContent = '☆';
        star4.textContent = '☆';
        star5.textContent = '☆';
    }else{
        if(qntd==2){
            star1.textContent = '★';
            star2.textContent = '★';
            star3.textContent = '☆';
            star4.textContent = '☆';
            star5.textContent = '☆';
        }else{
            if(qntd==3){
                star1.textContent = '★';
                star2.textContent = '★';
                star3.textContent = '★';
                star4.textContent = '☆';
                star5.textContent = '☆';
            }else{
                if(qntd==4){
                    star1.textContent = '★';
                    star2.textContent = '★';
                    star3.textContent = '★';
                    star4.textContent = '★';
                    star5.textContent = '☆';
                }else{
                    star1.textContent = '★';
                    star2.textContent = '★';
                    star3.textContent = '★';
                    star4.textContent = '★';
                    star5.textContent = '★';
                }
            }
        }
    }
}
