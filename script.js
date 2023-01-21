const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add () {

    const today = new Date ().toLocaleDateString('py-br').slice(0,-5)

    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso")
        return //faz o código parar e não seguir rodando
    }

    alert ("Adicionado com sucesso✅")
    nlwSetup.addDay(today)

}

function save() { //
    localStorage.setItem('NlwSetup@habits', JSON.stringify(nlwSetup.data)) //nessa linha do código estamos salvando os dados e os transformando em string com o JSON
}

//o localStorage é um elemento que guarda informações de quando eu fecho uma página e abro novamente, ele só salva os dados no console, mas não recontroi a pagina quando ela é recarregada



/* const data = {
    run: ['01-01', '01-02', '01-06', '01-07', '01-08'],
    takePills: ['01-03'],
    journal: ['01-02']
}*/

const data = JSON.parse(localStorage.getItem("NlwSetup@habits")) || {}//parse transforma de volta em objeto
nlwSetup.setData(data)
nlwSetup.load()  //com essa função, ao regarregar a página os dados não serão perdidos