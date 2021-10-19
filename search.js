import navbar from './navbar.js'
console.log(navbar)
document.body.innerHTML=navbar()
let container =document.querySelector('#navbar')
console.log(container.innerHTML)


function getData(receipeName){
   
return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${receipeName}`).
then((response)=>response.json()).
catch((e)=>console.log(e))
}





function displayData(data)
{
    console.log(data)
let container=document.getElementById('show-data')
container.innerHTML=null
const div=document.createElement('div')
div.className='receipe-box'
if(!data)
return 
for(const result of data)
{
    
    const card=createCard(result)
    div.append(card)

}
container.append(div)
}
function createCard(result)
{
    console.log(result.strMealThumb)
     let div=document.createElement('div')
     let heading=document.createElement('h4')
     let instruction=document.createElement('p')
    instruction.innerHTML=`<span>instruction</span>: ${result.strInstructions}`
     heading.innerHTML=result.strMeal
     let p=document.createElement('p')
     p.innerHTML=`<span>Categroy</span>: ${result.strCategory}`
     let img=document.createElement('img')
     img.src=result.strMealThumb
     div.append(img,heading,p,instruction)

     return div
    

}


async function fetchData(search)
{
    try{
       
        const {meals}=await getData(search)
        displayData(meals)
    }
    catch(e){
        console.log(e)
    }
}



function handleSearch()
{
    console.log('calling')
    let search=document.getElementById('search-box').value
    if(search)
    fetchData(search)
}


window.addEventListener('load',()=>{
    let btn=document.querySelector('button')
    btn.addEventListener('click',handleSearch)
})

export {handleSearch,fetchData,createCard,displayData,getData}