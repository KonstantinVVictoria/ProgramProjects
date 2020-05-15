console.log('loadedScript')

const button = document.getElementById('results')
const output = document.getElementById('output')
const input =  document.getElementById('input')
const array = []

input.onkeypress = function(e) {
    if(e.keyCode === 13) {
        array.push(input.value)
        input.value = ""
    }
}

button.onclick = function() {
    let index =  Math.round(Math.random() * (array.length - 1))
    output.textContent = array[index]
}