let container=document.getElementById("container")
async function getuser(){
    try{
        let input = document.getElementById("input_git").value;
        const res = await fetch(`https://api.github.com/users/${input}`)
        const data= await res.json()
        // console.log(data)
        // return data
        if(data===undefined){
            return false;
        }
        else{
            dhekao(data)
        }
        //trying to get repositries
        getrepos(input)
    }
    catch(err){
        console.log(err)
    }
    }


    //funciton to get repos
    async function getrepos(inp){

        const res = await fetch(`https://api.github.com/users/${inp}/repos`)
        const repdata = await res.json()
        addrepo(repdata)
    }
  


function dhekao(el){
    container.innerHTML=""
    const div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML=
    `
    <div id="photo">
    <img src="${el.avatar_url}">
    </div>

    <div id="bottom">
    <h1>${el.name}</h1>
    <p>${el.bio}</p>

    <ul>
    <li>${el.followers}<strong>Followers</strong></li>
    <li>${el.following}<strong>Following</strong></li>
    <li>${el.public_repos }<strong>Repository</strong></li>
    </ul>

    <div class="repos"></div>

    
    </div>
    `

//     console.log(el)
//   container.innerHTML=""
//    let div = document.createElement("div")

//    let naam = document.createElement("h1")
//    naam= el.name
   
//    let login =document.createElement("h2")
//    login = el.login

//    let image = document.createElement("img")
//    image.src=el.avatar_url

//    let pew = document.createElement("p")
//    pew.innerText=el.bio

//    div.append(naam,login,image,pew)


   container.append(div)
}


function addrepo(repdata){
    console.log(repdata)
    let repo = document.querySelector(".repos")
    repdata.map(function(elem){
        const lie = document.createElement('a')
        lie.classList.add('insiderepo')

        lie.href= elem.html_url;
        lie.innerText= elem.name;
        repo.append(lie)
    })
}







                                 //can make this funciton also where i can append data and get data too  but i have used this 
                                 //same thing in line no 9-14
// async function main(){

//     let data = await getuser()
    
//     if(data===undefined)return false
     
//     else{
//         dhekao(data)
//     }

// }

// 2. debouncing
let id;
function debounce(func,delay){

    if(id){
        clearTimeout(id)
    }
    

     id= setTimeout(function(){
        func()
    },delay)
}
