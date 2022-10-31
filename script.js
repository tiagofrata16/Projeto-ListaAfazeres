let tarefa = document.getElementById('tarefa')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let vetor = []
// arrow function
const isTexto = (t) => {
    if(t.length == 0){
        return false
    } else{
        return true
    }
}
//arrow function
const tamanho = (t) => {
     if(t.length < 5 || t.length > 20){
        return true
     } else {
        return false
     }
}
//funcao principal
function gravar(){
 
     if (isTexto(tarefa.value) && !tamanho(tarefa.value)){ //chamada das funcoes para a validação do sistema
        vetor.push(String(tarefa.value))
        let item = document.createElement('option')  //cricao de elemento html
        item.text = `${tarefa.value}`
        lista.appendChild(item)
     } else {
        window.alert('ERRO-Preencha adequadamente o espaço')
     }
     res.innerHTML = `A frase tem ${tarefa.value.length} caracteres`
     tarefa.value = ``
}