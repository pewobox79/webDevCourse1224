const posts =[
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

function getPosts(){

    setTimeout(()=>{

        let output =""
        posts.forEach((item)=>{
            output += `<p>${item.title}</p>`
        })
        postAnker.innerHTML = output

    },1000)
}

function createPost(postValue, callback){

    setTimeout(()=>{

        posts.push(postValue)
        //erst wenn posts vollständig ist, dann wird die callback function aktiviert 
        callback()
    },2000)

}

createPost({title: "post 3", body: "body 3"}, getPosts)