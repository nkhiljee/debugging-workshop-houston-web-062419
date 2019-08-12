document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  // function fetchJoke(){

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      fetch('https://icanhazdadjoke.com/', {
        headers: {
          "Accept": "application/json"
        }
      })
      .then(res => res.json())
      .then(jokeData => {
      var username = event.target[0].value      
      if(username) {
        const newJokeLi = document.createElement('li')
        newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${jokeData.joke}`
        jokeList.append(newJokeLi)

      }
      // fetchJoke()
    
      })

    })

  // }

})



// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('joke-form')
//   const jokeList = document.getElementById('joke-list')
//   const newJokeLi = document.createElement('li')

//   function fetchJoke(){
//     fetch('https://icanhazdadjoke.com/', {
//       headers: {
//         "Accept": "application/json"
//       }
//     })
//     .then(res => res.json())
//     .then(jokeData => {
  

//   form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     var username = event.target[0].value 
//     if(username == "") //return;
//     // fetchJoke()
//     newJokeLi.innerHTML = `
//     <span class="username">${username} says:</span> ${jokeData.joke}
//     `
//     jokeList.append(newJokeLi)
//   })
// })
// }})