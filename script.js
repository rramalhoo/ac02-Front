//EX01

let votos = [] 

function ex01() {
  let voto = parseInt(document.getElementById("voto").value)
  document.getElementById("voto").value = "" 

  if (voto === -1) {
    mostrarResultado()
    return
  }

  votos.push(voto)
  alert("Voto registrado!")
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
  let percC1 = totalVotos ? ((totalC1 / totalVotos) * 100).toFixed(1) : "0.0"
  let percC2 = totalVotos ? ((totalC2 / totalVotos) * 100).toFixed(1) : "0.0"
  let percOutros = totalVotos ? (((totalBranco + totalNulo) / totalVotos) * 100).toFixed(1) : "0.0"

  let vencedor = ""
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
    return
  }

  if (valor < 0) {
    alert("Digite um valor válido (ou -1 para encerrar)")
    return
  }

  vendas.push(valor)
  alert("Venda registrada!")
}

function mostrarResumoVendas() {
  if (vendas.length === 0) {
    document.getElementById("resultadoEx2").innerHTML = "<p>Nenhuma venda registrada.</p>"
    return
  }

  let maior = Math.max(...vendas)
  let menor = Math.min(...vendas)
  let soma = vendas.reduce((total, v) => total + v, 0)
  let media = (soma / vendas.length).toFixed(2)

  document.getElementById("resultadoEx2").innerHTML = `
    <h2>Resumo das Vendas</h2>
    <p><b>Maior venda:</b> R$ ${maior.toFixed(2)}</p>
    <p><b>Menor venda:</b> R$ ${menor.toFixed(2)}</p>
    <p><b>Média das vendas:</b> R$ ${media}</p>
  `
}



//EX03

