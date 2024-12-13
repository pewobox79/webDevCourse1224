
const promise1 = Promise.resolve("hallo world"); 
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{

    setTimeout(()=>{

        resolve("hallo aus promise 3")

    }, 2000)
})

const promise4 = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

//promise all managed die jeweilge dauer und gibt erst am Ende alle daten Weiter!
Promise.all([promise1, promise2, promise4, promise3]).then(data => console.log(data))
