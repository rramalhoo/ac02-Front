//EX01

let votos = []

function ex01() {
  let voto = parseInt(document.getElementById("voto").value)
  document.getElementById("voto").value = ""

  if (voto === -1) {
    mostrarResultado()
  } else {
    votos.push(voto)
    alert("Voto registrado!")
  }
}

function mostrarResultado() {
  let totalC1 = 0
  let totalC2 = 0
  let totalBranco = 0
  let totalNulo = 0

  for (let v of votos) {
    if (v === 1) totalC1++
    else if (v === 2) totalC2++
    else if (v === 0) totalBranco++
    else totalNulo++
  }

  let totalVotos = votos.length

  let percC1 = ((totalC1 / divisor) * 100).toFixed(1)
  let percC2 = ((totalC2 / divisor) * 100).toFixed(1)
  let percOutros = (((totalBranco + totalNulo) / divisor) * 100).toFixed(1)

  let vencedor
  if (totalC1 > totalC2) vencedor = "Candidato 1"
  else if (totalC2 > totalC1) vencedor = "Candidato 2"
  else vencedor = "Empate"

  document.getElementById("resultadoEx1").innerHTML = `
    <h2>Resultado da Eleição</h2>
    <p><b>Total de votos:</b> ${totalVotos}</p>
    <p>Candidato 1: ${totalC1} votos (${percC1}%)</p>
    <p>Candidato 2: ${totalC2} votos (${percC2}%)</p>
    <p>Votos em branco: ${totalBranco}</p>
    <p>Votos nulos: ${totalNulo}</p>
    <p><b>Porcentagem de brancos + nulos:</b> ${percOutros}%</p>
    <h3>Vencedor: ${vencedor}</h3>
  `
}





//EX02

let vendas = []

function ex02() {
  let valor = parseFloat(document.getElementById("venda").value)
  document.getElementById("venda").value = ""

  if (valor === -1) {
    mostrarResumoVendas()
  } else if (valor < 0) {
    alert("Digite um valor válido (ou -1 para encerrar)")
  } else {
    vendas.push(valor)
    alert("Venda registrada!")
  }
}

function mostrarResumoVendas() {
  let resultado = document.getElementById("resultadoEx2")

  if (vendas.length === 0) {
    resultado.innerHTML = "<p>Nenhuma venda registrada.</p>"
  } else {
    let maior = vendas[0]
    let menor = vendas[0]
    let soma = 0

    for (let i = 0; i < vendas.length; i++) {
      let valor = vendas[i]
      soma += valor

      if (valor > maior) {
        maior = valor
      }
      if (valor < menor) {
        menor = valor
      }
    }

    let media = (soma / vendas.length).toFixed(2)

    resultado.innerHTML = `
      <h2>Resumo das Vendas</h2>
      <p><b>Maior venda:</b> R$ ${maior.toFixed(2)}</p>
      <p><b>Menor venda:</b> R$ ${menor.toFixed(2)}</p>
      <p><b>Média das vendas:</b> R$ ${media}</p>
    `
  }
}





//EX03

const produtos = []
const quantidades = []
let totalProdutos = 0
let totalItens = 0

document.getElementById('adicionar').addEventListener('click', () => {
    const produtoInput = document.getElementById('produto').value
    const quantidadeInput = parseInt(document.getElementById('quantidade').value)

    if (produtoInput && quantidadeInput > 0) {
        produtos.push(produtoInput)
        quantidades.push(quantidadeInput)

        totalProdutos++;
        totalItens += quantidadeInput;

        document.getElementById('produto').value = ''
        document.getElementById('quantidade').value = ''
    } else {
        alert("Por favor, insira um produto e uma quantidade válida.")
    }
})

document.getElementById('finalizar').addEventListener('click', () => {
    if (totalProdutos === 0) {
        alert("Nenhum produto foi adicionado.")
        return
    }

    const produtoMaisFrequente = encontrarProdutoMaisFrequente()
    const quantidadeProdutoEspecifico = prompt("Digite o nome do produto que deseja consultar:")

    let quantidadeEspecifica = 0
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i] === quantidadeProdutoEspecifico) {
            quantidadeEspecifica += quantidades[i]
        }
    }

    const resultados = `
        Total de produtos inseridos: ${totalProdutos}<br>
        Quantidade total de itens no estoque: ${totalItens}<br>
        Produto mais frequente: ${produtoMaisFrequente.nome} (${produtoMaisFrequente.quantidade})<br>
        Quantidade do produto "${quantidadeProdutoEspecifico}": ${quantidadeEspecifica}
    `;

    document.getElementById('resultadosEx3').innerHTML = resultados
});

function encontrarProdutoMaisFrequente() {
    const mapaFrequencias = {}

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        if (!mapaFrequencias[produto]) {
            mapaFrequencias[produto] = 0
        }
        mapaFrequencias[produto] += quantidades[i]
    }

    let produtoMaisFrequente = { nome: '', quantidade: 0 }

    for (const produto in mapaFrequencias) {
        if (mapaFrequencias[produto] > produtoMaisFrequente.quantidade) {
            produtoMaisFrequente = { nome: produto, quantidade: mapaFrequencias[produto] };
        }
    }

    return produtoMaisFrequente
}