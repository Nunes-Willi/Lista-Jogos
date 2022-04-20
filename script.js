let listaJogos = [
    { id: 0, removido: false, item: 'Resident Evil 1'}, 
    { id: 1, removido: false, item: 'Resident evil 4'},
    { id: 2, removido: false, item: 'Resident Evil 5'},
    { id: 3, removido: false, item: 'Resident Evil 6'},
    { id: 4, removido: false, item: 'Assassin´s Creed: Black Flag'},
    { id: 5, removido: false, item: 'Call of Duty: World at War'},
]

function alternarItem(item) {
    const valor = listaJogos.find( (i) => i === item)
    valor.removido = !valor.removido
    renderListaJogos()
}

function addItemUL(item) {
    const inputItem = document.createElement('input')
    inputItem.setAttribute('type', 'checkbox')
    inputItem.addEventListener('click', () => alternarItem(item))
    
    const labelItem = document.createElement('label')
    labelItem.appendChild(inputItem)
    labelItem.appendChild(document.createTextNode(item.item))
    
    const itemLista = document.createElement('li')
    itemLista.appendChild(labelItem)
    if (item.removido) {
        itemLista.setAttribute('class', 'removed')
        inputItem.setAttribute('checked', true)
    }
    
    const lista = document.getElementById('lista-jogo')
    lista.appendChild(itemLista)
}

function renderListaJogos() {
    document.getElementById('lista-jogo').innerHTML = ''

    for (const item of listaJogos) {
        addItemUL(item)
    }
}

function addItem() {
    const newItemText = document.getElementById('new-item').value
    if (newItemText != '') {
        const newItem = {id: 1, item: newItemText}
        listaJogos.push(newItem)
        addItemUL(newItem)
    }
}

renderListaJogos()