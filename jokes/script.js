//using PROMISES
// const jokes=document.querySelector('#joke');
// const jokeBtn=document.querySelector('#jokeBtn');
// const generateJokes=()=>{ 
//     const setHeader={
//         headers:{
//             Accept:"application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res)=>res.json())
//     .then((data)=>{
//         jokes.innerHTML=data.joke;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }
// jokeBtn.addEventListener('click',generateJokes);
// generateJokes();


//using ASYNNC AWAIT 

//function x () {} //...Normal function
//async function x () {} //...Normal async function

//const x = () => {} //...fatArrow function
//const x = async() => {} //...async fatArrow function

const jokes=document.querySelector('#joke');
const jokeBtn=document.querySelector('#jokeBtn');

const generateJokes= async()=>{ 
    try {
        const setHeader={
            headers:{
                Accept:"application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/',setHeader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(`the error is ${error}`);
    }
    
}
jokeBtn.addEventListener('click',generateJokes);
generateJokes();