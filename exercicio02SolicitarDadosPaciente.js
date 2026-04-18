function exercicio02SolicitarDadosPaciente() {
    let indice = 0; 
    let quantidadePacientesCadastrados = 0;
   
    while (indice < 4) {
        
        let nomePaciente = prompt("Digite o nome do Paciente:").trim();          
        let idade = parseInt(prompt("Digite a Idade do Paciente:"));
        
        indice = indice + 1;
        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;
    }

   
    alert("Quantidade de pacientes que foram cadastrados: " + quantidadePacientesCadastrados);

}
 