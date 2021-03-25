document.getElementById("btn").addEventListener("click", makerequest);

// Fetching data from text file using Promise then in axios
// Method1
// function makerequest(){
//     console.log("Button clicked!")
//     config = {
//         method: 'get',
//         url: 'data.txt'
//     }
//     const promiseObj = axios(config)
//     promiseObj.then((response) => { //axios needs only .then method whereas fetch api needs .then method twice
//         console.log(response)
//         console.log(response.data)
//     })
        //another way to congig axios
//     axios(config).then((response) => { 
//         console.log(response)
//         console.log(response.status)
//     })
// } 

//Method2
// function makerequest(){
//     console.log("Button Clicked!")
//     // passing the config object directly into axios can cut the code short
//     axios({
//         method: 'get', //'get' is default method in axios
//         url: 'data.txt'
//     }).then((response) => {
//         console.log(response)
//         console.log(response.data)
//     })
//     // shorthand for writing get method in axios
//     axios.get('data.txt').then((response) => {
//         console.log(response.status)
//     })
//     // we can avoid mentioning get method as it is default method. Method can also be passed as an object inside axios
//     axios('data.txt', {'method': 'get'}).then((response) => {
//         console.log(response.statusText)
//     })
// }

//Method3
// function makerequest(){
//     console.log("Button Clicked")
//     config = {
//         method: 'get'
//     }
//     axios.get('data.txt', config).then((response) => {
//         console.log(response)
//         console.log(response.data, response.status, response.statusText)
//     })
// }



// Promise then | Error handling in axios
// function makerequest(){
//     console.log("Button Clicked")
//     axios.get('data.txt')
//     .then((response) => {
//         console.log(response)
//         console.log(response.data, response.status, response.statusText)
//     }).catch((error) => {
//         console.log(error)
//     // any then method after catch will be displayed in the console, irrespective of the error occurance
//     }).then(() => {
//         console.log("Cleaned")
//     })
// }

// Promise then | Rendering data in the browser or web-page
function makerequest() {
    console.log("Button Clicked")
    axios.get('data.txt').then((response) => {
        console.log(response)
        console.log(response.data)
        console.log(response.status)
        document.getElementById("div1").innerText = response.data
        document.getElementById("div2").innerText = response.status
    }).catch((error) => {
        console.log(error)
    })
}