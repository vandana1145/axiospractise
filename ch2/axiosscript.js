document.getElementById("btn").addEventListener("click", makerequest);

// Promise then | fetch json data
// Method1
// function makerequest(){
//     console.log("Button Clicked")
//     config = {
//         method: 'get',
//         url: 'data.json'
//     }
//     const promiseObj = axios(config)
//     promiseObj.then((res) => {
//         console.log(res)
//         console.log(res.data)
//         console.log(res.status)
//     })
//     axios('data.json').then((response) => {
//         console.log(response)
//         console.log(response.statusText)
//     })
// }

// Method2
// function makerequest(){
//     console.log("Button Clicked")
//     // different shorthands for making requests in axios
//     // axios.get('data.json').then((response) => {
//     //     console.log(response)
//     // })

//     // axios({
//     //     method: 'get', 
//     //     url: 'data.json'
//     // }).then((res) => {
//     //     console.log(res.data)
//     // })

//     // axios('data.json', {'method': 'get'}).then((res) => {
//     //     console.log(res.status)
//     // })

//     axios('data.json').then((res) => {
//         console.log(res.data)
//     })
// }


// Promise then | Error Handling
// function makerequest(){
//     console.log("Button Clicked")
//     axios.get('data1.json')
//     .then((res) => {
//         console.log(res)
//         console.log(res.data)
//         console.log(res.data.name)
//         console.log(res.data.occupation)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// Promise then | Json data rendering in the webpage or browser
// function makerequest(){
//     console.log("Button Clicked")
//     axios('data.json', {'method':'get'})
//     .then((res) => {
//         console.log(res)
//         document.getElementById("div1").innerText = res.data.name
//         document.getElementById("div2").innerHTML = res.data.occupation
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// async await | fetching json data
// async function makerequest(){
//     console.log("Button Clicked")
//     config = {
//         method: 'get',
//         url: 'data.json'
//     }
//     // const res = await axios(config)
//     // console.log(res)
//     const response = await axios('data.json', {method: 'get'})
//     console.log(response.data)
// }

// async await | error handling
// async function makerequest(){
//     try {
//         console.log("Button Clicked")
//         const res = await axios.get('data1.json')
//         console.log(res)
//         console.log(res.data.name)
//     } catch (error) {
//         console.log(error)
//     }
// }

// async await | json data rendering in the web-page
async function makerequest(){
    try {
        console.log("Button Clicked")
        const res = await axios.get('data.json')
        console.log(res)
        document.getElementById("div1").innerText = res.data.name
        document.getElementById("div2").innerText = res.data.occupation
    } catch (error) {
        console.log(error)
    }
}