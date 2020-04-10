window.onload = function () {
  console.log("working");

  const DOMAIN = 'http://poetrydb.org/author/';

  const searchButton = document.getElementById('search')
  const input = document.getElementById('userInput')
  let searchList = document.querySelector('h4')
  const searchListSection = document.querySelector('.searchList')

  //functon called from click eventlistener
  function searchInput() {
    searchList.remove()
    searchList = document.createElement('h4')
    searchList.innerText = 'List'
    searchListSection.appendChild(searchList)
    let keyword = input.value;
    console.log(keyword)
    poemSearch()


  }

  searchButton.addEventListener('click', searchInput)
  // API call for search information
  async function poemSearch() {
    let keyword = input.value;
    console.log(`${DOMAIN}${keyword}`)
    const response = await axios.get(`${DOMAIN}${keyword}`)
    console.log(response)
    printList()
  }


  //print functon called from search button
  async function printList() {
    let keyword = input.value;
    const URL = await axios.get(`${DOMAIN}${keyword}`)
    const listResponse = URL.data
    console.log(listResponse)

    listResponse.forEach(data => {
      const div = document.createElement('div')
      div.classList.add('item')
      searchList.appendChild(div)

      let title = data.title
      let showTitle = document.createElement('ul')
      showTitle.innerHTML = `${title}`
      div.append(showTitle)

      let lines = data.lines
      let showLines = document.createElement('li')
      showLines.innerHTML = `${lines}`
      showTitle.append(showLines)
    })



  }
}