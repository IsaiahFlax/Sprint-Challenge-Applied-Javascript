// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header() {
    const header = document.querySelector('.header-container')
    const date = document.createElement('span')
    date.textContent = 'SMARCH 28, 2019'
    const title = document.createElement('h2')
    const temp = document.createElement('span')
    temp.textContent = '98°'

    
    header.append(date)
    header.append(title)
    header.append(temp)


    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

return header

console.log("header", header())

}
console.log("header", header())