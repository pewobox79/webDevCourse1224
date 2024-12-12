const posts = [
    {
        title: "post 1",
        body: "body 1"
    },
    {
        title: "post 2",
        body: "body 2"
    }
]

const postAnker = document.getElementById("posts")

function getPosts() {

    setTimeout(() => {

        let output = ""
        posts.forEach((item) => {
            output += `<p>${item.title}</p>`
        })
        postAnker.innerHTML = output

    }, 1000)
}

function createPost(postValue){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(postValue)

            //simulierte error situation
            const error = false;

            if(!error){
                resolve()
            }else{
                reject("error: somthing is wrong")
            }

        }, 2000)

    })

}

createPost({title: "post 3", body: "body 3"}).then(getPosts)