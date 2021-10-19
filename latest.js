import {handleSearch,fetchData,createCard,displayData,getData} from './search.js'

 const randomData=()=>{
     return fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>res.json()).
     catch((e)=>console.log(e))}

 let fetchRandomData=async()=>{
     try{
         const {meals}=await randomData()
         await displayData(meals)
         await addLatestTag()
     }
     catch(e)
     {
         console.log(e)
     }
 }
function addLatestTag()
{
    let div=document.getElementsByClassName('receipe-box')[0].childNodes[0]
    let h2=document.createElement('h2')
    h2.textContent='Latest'
    div.insertBefore(h2,div.childNodes[0])
}

 fetchRandomData()
