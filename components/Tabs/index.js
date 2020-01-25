// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: 
// https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics')
topics.classList.add('topics')

const createNewTab = x => {

    const tab = document.createElement('div')
    topics.append(tab)
    tab.classList.add('tab')
    tab.textContent = x
    


    console.log('tab', tab)
    return tab
}
    
const axiosPromise = axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    let temp = (response.data.topics)
    temp.forEach(x => {
        topics.append(createNewTab(x))
    })
    console.log('res', temp)

})
