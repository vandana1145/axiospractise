document.getElementById("btn").addEventListener("click", makerequest);

// Promise then | Post form data to an api
// function makerequest(e){
//     e.preventDefault()
//     let name = document.getElementById("name").value
//     let job = document.getElementById("job").value
//     console.log("Button Clicked!")
//     const config = {
//         method: 'POST',
//         url: 'https://reqres.in/api/users',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: JSON.stringify({name:name, job:job})
//     }
//     axios(config).then((res) => {
//         console.log(res.data)
//     }).catch((error) => {
//         console.log(error)
//     })
// }


// async await | Post form data to an api
async function makerequest(e){
    e.preventDefault()
    console.log("Button Clicked!")
    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({name:name, job:job})
        }
        const res = await axios.post('https://reqres.in/api/users', config)
        console.log(res.data)
    } catch (error) {
        console.log(error)   
    }
}