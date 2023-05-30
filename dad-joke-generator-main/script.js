const apikey="g2Ddt9240/MzrlIbvdIlVQ==DbC1f0ai0u5x8eMZ";
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const jokeEl=document.getElementById("joke")

const options={
    method:"GET",
    headers:{"X-Api-Key":apikey
    },
};

async function getJoke(){

    try {
        jokeEl.innerText="updating..."
        const response=await fetch(apiurl,options)
        const data=await response.json()
        jokeEl.innerText=data[0].joke;
    } catch (error) {
        jokeEl.innerText="Error ! Please try again later..."
    } 
}

