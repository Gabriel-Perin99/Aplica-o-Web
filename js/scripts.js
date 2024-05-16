//Função de Calculo do IMC
function calImc(){
    //pegando os valores dos inputs
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    
    
    

    if(altura == "" || peso == ""){
        alert("Preencha todos os campos!");
    }else {
        
        //convertendo os valores para numeros
        altura = parseFloat(altura);
        peso = parseInt(peso);

        //verificando se a altura é maior que zero e o peso é positivo
        if (altura > 0 && peso > 0){
            //calculando o imc
            var imc = peso / (altura * altura);
            imc = parseFloat(imc.toFixed(0));//arredondado com duas casas decimais
        }

    // crriando uma variavel para pegar as informações que serão dispostas em outro ducmento
    let resultadoID = '';
        
        
          
            /* Mostrando o IMC na tela */
    
    if (imc <=  18.5){
        resultadoID = "abaixoPeso";  
    } else if (imc > 18.5 && imc <= 24.9) {
        resultadoID = "normal";          
    } else if (imc > 25 && imc <= 29.9) {
        resultadoID = "sPeso";                  
    } else if (imc > 30 && imc <= 34.9) {
        resultadoID = "grauI";                             
    } else if (imc > 35 && imc <= 39.9) {
        resultadoID = "grauII";                            
    } else {
        resultadoID = "morb";
    }
    
    //variavel que linka o documento
    const url = './partials/clasificacao.html';
    //função para pegar o html
    fetch (url)
    .then(response => response.text())
    .then(data =>{
        //DOMparser é usado para analisar o HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        // Variaveis que puxam os resultados do Java e passa eles para o html
        const contentInfo = doc.getElementById(resultadoID);
        const resultadoHTML = document.getElementById('resultado');

        if (contentInfo){
            resultadoHTML.innerHTML = 'Seu IMC é ' + imc + ', Classificado como:'+ contentInfo.textContent; 
        } else{console.error('Não foi possivel carregar o conteudo');}
    })
            
    
            
    }
}
//Evento para Mostrar/Ocultar o Formulário
function hForm(){
    const btnForm = document.getElementById('btnForm');
    const form = document.getElementById('form');

    if (form.hasAttribute("hidden")){
        form.removeAttribute("hidden");
        btnForm.textContent = "Ocultar Formulário"
    }else{
        form.setAttribute("hidden", true);
        btnForm.textContent = "Mostrar Formulário"
    }
}
    
    

    



