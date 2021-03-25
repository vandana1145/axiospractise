document.getElementById("btn").addEventListener("click", makerequest);


function makerequest(){
    console.log("Button clicked!")
    config = {
        method: 'get',
        url: 'data.txt'
    }
    const promiseObj = axios(config)
    promiseObj.then((response) => {
        console.log(response)
        console.log(response.data)
    })
} 