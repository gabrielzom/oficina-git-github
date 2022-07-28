const button = document.getElementById('click-here')
button.addEventListener('click', (event) => changeText(event))

function changeText(event) {

  console.log('Objeto gerado no evento ->')

  const h1 = document.getElementById('hello-world')

  h1.innerText === 'Hello, world !' 
    ? h1.innerText = event.target.innerText
    : h1.innerText = 'Hello, world !'
}