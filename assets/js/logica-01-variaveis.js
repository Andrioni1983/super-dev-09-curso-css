function exemploMensagem() {
    alert("Hello World minha primeira mensagem Gustavo");
}

function exemploString() {
    let nome = "Elias";
    let sobrenome = "Otto com dois T";

    
    sobrenome = "Otto";

    alert(nome);
    alert(sobrenome);
}

function exemploStringConcatenacao() {
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    let texto = nomeProduto + " " + marcaProduto;
    alert(texto);
}

function exemploNumeroInteiro() {
    let produto = "Pc Gamer da Xuxa";
    
    let quantidadePcs = 16; 
    let quantidadeMemoriaPorPc = 2;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;


    alert("produto: " + produto + 
        "\nQuantidade de Pcs: " + quantidadePcs +
        "\nMemória Ram por PC: " + quantidadeMemoriaPorPc + "GB" +
        "\nTotal de Gb dos PCs: " + totalGb + "GB");
}

function exemploFloat() {
    let endereco = "rua XV de Novembro";
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;

    alert("m² do terreno: " + metroQuadrado);
}

function exemploBoolean() {
    let tenhoFeriasVencidas = false;
    tenhoFeriasVencidas = true;
    
    
    alert("Férias vencidas? " + tenhoFeriasVencidas); 
}

function calcularSalario() {
    let colaborador = "Judity Silva";
    let email = "judity.gamer@gg.com";
    let valorHora = 150.60; 
    let horasPorMes = 50;
    let beneficioDonate = 3500.98;

    let salarioBruto = valorHora * horasPorMes;
    let salarioLiquido = salarioBruto + beneficioDonate;

    
    alert(
        "Colaborador: " + colaborador + "\n" +
        "Email: " + email + "\n" +
        "Valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
        "Horas por mês: " + horasPorMes + "h\n" +
        "Salário bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
        "Benefício Donate: R$ " + beneficioDonate.toFixed(2) + "\n" +
        "Salário líquido: R$ " + salarioLiquido.toFixed(2)
    );
}

function calcularTempoMes() {
    let segundosPorMinuto = 60;
    let minutosPorHora = 60;
    let horasPorDia = 24;

    let segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
    
    
    alert("Segundos em um dia: " + segundosPorDia);
}