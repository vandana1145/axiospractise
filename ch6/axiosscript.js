document.getElementById("btn").addEventListener("click", makerequest);

// Axios Instance
const ai = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// Get request | Single data
// function makerequest(){
//     console.log("Button Clicked")
//     ai('/posts/1')
//     .then((res) => {
//         console.log(res.data)
//         console.log("Id:", res.data.id)
//         console.log("Title:", res.data.title)
//         console.log("Body:", res.data.body)
//     }).catch((error) => {
//         console.log(error)
//     })
// }


// Get request | Multiple data
function makerequest(){
    console.log("Button Clicked")
    ai('/posts/')
    .then((res) => {
        console.log(res.data)
        res.data.forEach(element => {
            console.log("Id:", element.id)
            console.log("Title:", element.title)
            console.log("Body:", element.body) 
        });
    }).catch((error) => {
        console.log(error)
    })
}