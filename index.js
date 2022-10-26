let url = "https://kontests.net/api/v1/all"
const contentBox = document.querySelector('.content-box')
// console.log(cardContainer)

fetch(url)
.then( (value) => {
    return value.json()
})
.then( (value) => {
    console.log(value)
    ihtml =""
    for(let i in value){
        console.log(value[i])
        ihtml +=`
        <div class="card-container">
        <img src="code.webp" alt="" class="image">
        <h2 class="card-title">${value[i].name}</h2>
        <div class="card-body">
            <p class="content">${value[i].url}
            </p>
                 <h2 class="heading-two">Duration: ${value[i].duration}</h2>
                 <h4 class="heading-four">Start Time: ${value[i].start_time}</h4>
                 <h4 class="heading-four">End Time: ${value[i].end_time}</h4>
        </div>
    </div>
        `  
    }
    contentBox.innerHTML = ihtml
})



