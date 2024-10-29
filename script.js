


function calcular(){
    var vendas = parseFloat(document.getElementById('vendas').value);
    var pix = parseFloat(document.getElementById('pix').value);
    var cartao = parseFloat(document.getElementById('cartao').value);
    var caixa = parseFloat(document.getElementById('caixa').value);
    var despesas = parseFloat(document.getElementById('despesas').value);

    var faturamento = (pix + cartao + caixa);
    var custos = (faturamento - despesas);
    var comparativo = (custos - vendas);

    //document.getElementById('log').innerHTML = 'A recolher: ' + resultado3;
    alert('Faturamento total: R$ ' + vendas);
    alert('Diferença: R$ ' + comparativo.toFixed(2));
}

// function diferenca(){
//     var le = parseFloat(document.getElementById('saldoLe').value);
//     var jb = parseFloat(document.getElementById('saldoJb').value);
//     var despesa = parseFloat(document.getElementById('despesas').value);
//     var premioFut = parseFloat(document.getElementById('premioFut').value);

//     var boletim = (le + jb);
//     var custos = (despesa + premioFut);
//     var resultado3 = (boletim - custos);
//     var caixa = parseFloat(document.getElementById('caixa').value);
//     var diferenca = (resultado3 - caixa);

//     alert('Diferença de caixa: R$ ' + diferenca.toFixed(2))
// }

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}