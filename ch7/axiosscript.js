document.getElementById("btn").addEventListener("click", makerequest);


function makerequest(){
    console.log("Button Clicked!")
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
        console.log(res)
        let img = (res.data.message)
        document.getElementById("img").setAttribute('src', img)
    }).catch((error) => {
        console.log(error)
    })
}