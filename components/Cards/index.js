// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
 const cardsContainer = document.querySelector('.cards-container')
 cardsContainer.classList.add('cards-container')


const axiosPromise2 = axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response2 => {
       // console.log('res2', response2.data.articles)
        let temp2 = Object.values(response2.data.articles)
 
       // temp.forEach(x => {
       //     console.log(temp2[`${x}`])
       // })
     //   console.log("temp2", (temp2))
        temp2.forEach(array => {
            array.forEach(index => {
             //   console.log("index", index)
                cardsContainer.append(createCard(index))
            })
        })
    // let temp = (response.data.topics)
    // temp.forEach(x => {
    //     topics.append(createNewTab(x))
    })
//console.log("axios 2", axiosPromise2)
const createCard = something => {
    const card = document.createElement('div')
    card.classList.add('card')
    cardsContainer.append(card)
    
    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = something.headline
    card.append(headline)

    const author = document.createElement('div')
    author.classList.add('author')
    card.append(author)

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('img-container')
    author.append(imageContainer)

    const image = document.createElement('img')
    image.src = `${something.authorPhoto}`
    imageContainer.append(image)
    

    const name = document.createElement('span')
    name.textContent = `By ${something.authorName}`
    author.append(name)

    return card
}

