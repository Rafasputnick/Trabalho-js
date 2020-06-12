/* jshint esversion: 6 */

//guarda informações dos titulos dos lembretes.
var tituloNotas = [];
//guarda informações dos textos dos lembretes.
var textoNotas = [];
//guarda informações do texto de estrelas que será usado no título dos lembretes.
var qntdStars = '';
//guarda informações do estado do jogo que será usado no título dos lembretes.
var estadoJogo = '';

//Função para adicionar o valor adequada ao número de estrelas (será usada no título do lembrete)
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

//Função para adicionar os valores de titulo e texto na string que será usada como base as informações.
function addNote() {
    //marcando o local onde será adicionado os valores base
    const titulo = document.querySelector("#titulo").value;
    const comentario = document.querySelector("#comentario").value;
    //adiciona os valores ao final das arrays que servirão como base aos lembretes 
    tituloNotas.push(titulo + '  |  ' + qntdStars + '  |  • ' + estadoJogo);
    textoNotas.push(comentario);

    //chama a função para atualizar os lembretes
    updateListNotes();
}

// Função para atualizar a lista de notas com ostextos e títulos que estão nos arrays.
function updateListNotes() {
    const elements = document.querySelectorAll(".item-show");

    //remove todos lembretes
    for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    //adiciona os lembretes atualizados conforme as arrays bases
    for (let i = 0; i < tituloNotas.length; i++) {
        const cloneItem = document.querySelector("#base-item").cloneNode(true);
        const parent = document.querySelector("#content");
        parent.appendChild(cloneItem);
        cloneItem.className = "item-show";
        cloneItem.querySelector(".item-title").textContent = i + '. ' + tituloNotas[i];
        cloneItem.querySelector(".item-comentario").textContent = textoNotas[i];
    }
}

//Função para a parte de avaliação (estrelas), alterando o texto e o que se encontra no div header.
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

//Função que permite edição dos valores dentro de um lembrete 
function editNote() {
    
    //pede o número do indice ao usuário
    const indice = parseInt(prompt('Digite o índice do lembrete que deseja editar:'));
    
    //pede o texto do titulo do lembrete  ao usuário
    const titulo = prompt('Digite o título:');
    
    //pede o texto do estado do lembrete  ao usuário
    const estado = prompt('Digite o estado do jogo | sugerido : Desejado, Comprado, Jogando, Zerado ou Platinado: ');
    
    //pede o numero de estrelas desejadas ao usuario
    const stars = parseInt(prompt('Digite a quantidade de estrelas:'));  
    //chama a função que irá atribuir o texto de acordo com o número de estrelas
    addStar(stars);
    
    //pede o texto do comentário ao usuário
    const comentario = prompt('Digite o comentário:');
    
    //atribui os novos valores ao lembrete desejado
    tituloNotas[indice] = titulo + '  |  ' + qntdStars + '  |  • ' + estado;
    textoNotas[indice] = comentario;

    //chama a função para atualizar a lista
    updateListNotes();
}

//Funçao para deletar um dos lembretes 
function deleteNote(){
    
    //perguntando o indice ao usuario
    const indice = parseInt(prompt('Digite o índice do lembrete que deseja excluir'));
    
    //perguntando ao usuário se tem certeza da decisão e atribuindo um valor booleano a variavel confirmar
    const confirmar = confirm ('Tem certeza?');
    
    //se for true execute
    if (confirmar){
        //apaga o conteúdo das arrays
        tituloNotas.splice(indice, 1);
        textoNotas.splice(indice, 1); 
        //chama a função para atualizar a lista
        updateListNotes();
    }
}    