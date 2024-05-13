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
          
            /* Mostrando o IMC na tela */
    
    if (imc <=  18.5){
        resultado = "Abaixo do Peso";  
    } else if (imc > 18.5 && imc <=  23.9) {
        resultado = "Peso Normal";          
    } else if (imc > 23.9 && imc <=  24.9) {
        resultado = "Levemente Acima do Peso";                  
    } else if (imc > 24.9 && imc <=    29.9) {
        resultado = "Obesidade Grau  I";                             
    } else if (imc > 29.9 && imc <=        34.9) {
        resultado = "Obesidade Grau II";                            
    } else {
        resultado = "Obesidade Morbida";
    }
    document.querySelector("#resultado").innerHTML="Seu IMC é: "+imc+". Classificação: "+resultado+"!";
            
    
            
    }
}
//Evento para Mostrar/Ocultar o Formulário
document.addEventListener('DOMContentLoaded', function(){
    const btnForm = document.getElementById('btnForm');
    const form = document.getElementById('form');

    btnForm.addEventListener('click', function(){
        if (form.style.display === 'none'){
            form.style.display = 'block';
            btnForm.textContent = "Ocultar Formulário"
        } else {
            form.style.display = 'none';
            btnForm.textContent = "Mostrar Formulário"
        }
    })

})

        

