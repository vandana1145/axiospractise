document.getElementById("btn").addEventListener("click", makerequest);


// API Single data fetch | Promise then
// function makerequest(){
//     console.log("Button Clicked")
//     config = {
//         params: {
//             id:1
//         }
//     }
//     axios.get('https://jsonplaceholder.typicode.com/posts/', config)
//     .then((res) => {
//         console.log(res)
//         data = res.data[0]
//         console.log("ID:", data.id)
//         console.log("Title:", data.title)
//         console.log("Body:", data.body)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// API Single data rendering in browser | Promise then
// function makerequest(){
//     console.log("Button Clicked")
//     axios('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res) => {
//         console.log(res)
//         console.log("Id:", res.data.id)
//         console.log("Title:", res.data.title)
//         console.log("Body:", res.data.body)
//         document.getElementById("div1").innerText = res.data.id
//         document.getElementById("div2").innerText = res.data.title
//         document.getElementById("div3").innerText = res.data.body
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// API Multiple data fetch | Promise then
// function makerequest(){
//     console.log("Button Clicked")
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         console.log(res)
//         console.log("Data:", res.data)
//         res.data.forEach(element => {
//             console.log("User ID:", element.userId)
//             console.log("ID:", element.id)
//             console.log("Title:", element.title)
//             console.log("Body:", element.body)
//         });
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// API Multiple data rendering in browser | Promise then
// function makerequest(){
//     console.log("Button Clicked")
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         console.log(res)
//         console.log("Data:", res.data)
//         let output = document.getElementById("alldata")
//         res.data.forEach(element => {
//             output.innerHTML += `
//             <div>UserId: ${element.userId}</div>
//             <div>Id: ${element.id}</div>
//             <div>Title: ${element.title}</div>
//             <div>Body: ${element.body}</div> <hr>
//             `
//         });
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }


// async await | single data fetch from api
// async function makerequest(){
//     try {
//         console.log("Button Clicked!")
//         const res = await axios('https://jsonplaceholder.typicode.com/posts/1')
//         console.log(res)
//         console.log("Data:", res.data)
//         console.log("User Id:", res.data.userId)
//         console.log("Id:", res.data.id)
//         console.log("Title:", res.data.title)
//         console.log("Body:", res.data.body)
//     } catch (error) {
//         console.log(error)
//     }
// }

// async await | single data rendering in browser
// async function makerequest(){
//     try {
//         console.log("Button Clicked!")
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         console.log(res)
//         document.getElementById("div1").innerHTML = res.data.id 
//         document.getElementById("div2").innerHTML = res.data.title
//         document.getElementById("div3").innerHTML = res.data.body
//     } catch (error) {
//         console.log(error)
//     }
// }

// async await | multiple data fetch from api
// async function makerequest(){
//     try {
//         console.log("Button Clicked!")
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//         console.log(res)
//         res.data.forEach(element => {
//             console.log("Id:", element.id)
//             console.log("Title:", element.title)
//             console.log("Body:", element.body)
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }

// async await | multiple data rendering in browser
async function makerequest(){
    try {
        console.log("Button Clicked!")
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res)
        console.log(res.data)
        let output = document.getElementById("alldata")
        res.data.forEach(element => {
            //appending the element objects to the output div
            output.innerHTML += `
            <div>Id: ${element.id}</div>
            <div>Title: ${element.title}</div>
            <div>Body: ${element.body}</div><hr>
            `
        });
    } catch (error) {
        console.log(error)
    }
}