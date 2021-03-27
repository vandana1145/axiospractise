document.getElementById("btn").addEventListener("click", makerequest);

// Promise then | Posting data to api
// function makerequest(){
//     console.log("Button Clicked!")
//     // const config = {
//     //     method: 'POST',
//     //     url: 'https://reqres.in/api/users',
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     //     data: '{"name":"Hello_World", "job":"Web-dev"}'
//     // }
//     // axios(config).then((res) => { //here the then method is to handle the response coming from the server after calling the axios(config) method
//     //     console.log(res)
//     //     console.log(res.data)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

//     // Shorthand for POST
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     axios.post('https://reqres.in/api/users', '{"name":"Hello_World", "job":"Web-dev"}', config).then((res) => {
//         console.log(res)
//         console.log(res.data)
//         console.log(res.data.name)
//         console.log(res.data.job)
//     }).catch((error) => {
//         console.log(error)
//     })
// }


// async and await | Posting data to api
// async function makerequest(){
//     try {
//         console.log("Button Clicked!")
//         const config = {
//             method: 'POST',
//             url: 'https://reqres.in/api/users',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             data: '{"name":"Vandana Tiwari", "job":"Web-dev"}'
//         }
//         const res = await axios(config)
//         console.log(res)
//         console.log(res.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Shorthand
async function makerequest(){
    try {
        console.log("Button Clicked!")
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('https://reqres.in/api/users', '{"name":"Vandana Tiwari", "job":"Web-dev"}', config)
        console.log(res)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}
    