function exercicio04CalcularMediaIdades() {
    let indice = 0; 
    let idade = 0;
    let somaIdade = 9999;
   
    while (indice < 5) {
        
                
        let idade = parseInt(prompt("Digite a Idade do Paciente:"));
        
        indice = indice + 1;
        mediaIdade = idade / 5;
    }

   
    alert("Média de Idade dos Pacientes: " + mediaIdade);

}