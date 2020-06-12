/* jshint esversion: 6 */

var tituloNotas = [];
var textoNotas = [];
var qntdStars = '';
var estadoJogo = '';

function addStar(qntd){
    if (qntd==1){
       qntdStars = '★ (1-5)';
    }else{
        if(qntd==2){
           qntdStars = '★★ (2-5)';
        }else{
            if(qntd==3){
               qntdStars = '★★★ (3-5)';
            }else{
                if(qntd==4){
                   qntdStars = '★★★★ (4-5)';
                }else{
                    qntdStars = '★★★★★ (5-5)';
                }
            }
        }
    }
}

function addNote() {
    const titulo = document.querySelector("#titulo").value;
    const comentario = document.querySelector("#comentario").value;

    tituloNotas.push(titulo + '  |  ' + qntdStars + '  |  • ' + estadoJogo);
    textoNotas.push(comentario);

    atualizarListaNotas();
}

/* Função utilizada para atualizar a lista de notas com os
    textos e títulos que estão nos arrays */
function atualizarListaNotas() {
    const elements = document.querySelectorAll(".item-show");

    for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    for (let i = 0; i < tituloNotas.length; i++) {
        const cloneItem = document.querySelector("#base-item").cloneNode(true);
        const parent = document.querySelector("#content");
        parent.appendChild(cloneItem);
        cloneItem.className = "item-show";
        cloneItem.querySelector(".item-title").textContent = i + '. ' + tituloNotas[i];
        cloneItem.querySelector(".item-comentario").textContent = textoNotas[i];
    }
}

/* Função para a parte de avaliação (estrelas), alterando o texto e o que irá enviar para o lembrete */
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

function editNote() {
    const indice = parseInt(prompt('Digite o índice do lembrete que deseja editar'));
    const titulo = prompt('Digite o título');
    const estado = prompt('Digite o estado | sugerido : desejado, comprado, jogando, zerado ou platinado; ');
    const stars = parseInt(prompt('Digite a quantidade de estrelas desejada'));  
    addStar(stars);
    const comentario = prompt('Digite o comentário');
    tituloNotas[indice] = titulo + '  |  ' + qntdStars + '  |  • ' + estado;
    textoNotas[indice] = comentario;
    atualizarListaNotas();
}

function deleteNote(){
    const indice = parseInt(prompt('Digite o índice do lembrete que deseja excluir'));
    const confirmar = confirm ('Tem certeza?');
    if (confirmar){
        tituloNotas.splice(indice, 1);
    textoNotas.splice(indice, 1); 
    atualizarListaNotas();
    }
}    