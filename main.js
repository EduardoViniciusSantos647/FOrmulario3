function coletarcep() {
    let input = document.querySelector('.Cep').value
    console.log(input)
    Dados(input)
}

async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    exibirdados(dados)
}

function exibirdados(dados) {
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("endereco").value = dados.logradouro
    document.getElementById("bairro").value = dados.bairro
    
}


const form = querySelector('form')
const submit = querySelector('button[type="submit"]')

form.addEventlistener('keydown', function(e) {

   if (e.key === 'Enter' && !e.shiftkey) {
      e.preventDefault()
      submit.click()
    
   }
})