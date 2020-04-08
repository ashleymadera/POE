window.onload = function () {
  console.log("working");

  const DOMAIN = 'http://poetrydb.org/author/';
  // const API_KEY;
  // const BASE_URL = ''
  const searchButton = document.getElementById('search')
  const input = document.getElementById('userInput')


  function searchInput() {
    let keyword = input.value;
    console.log(keyword)
    poemSearch()


  }

  searchButton.addEventListener('click', searchInput)

  async function poemSearch() {
    let keyword = input.value;
    console.log(`${DOMAIN}${keyword}`)
    const response = await axios.get(`${DOMAIN}${keyword}`)
    console.log(response)

    printList()
  }


  const searchList = document.querySelector('h4')

  async function printList() {
    let keyword = input.value;
    const URL = await axios.get(`${DOMAIN}${keyword}`)
    const listResponse = URL.data
    console.log(listResponse)

    listResponse.forEach(data => {
      const div = document.createElement('div')
      div.classList.add('item')
      // div.style.border = '2px solid black'
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


    // }
  }
}