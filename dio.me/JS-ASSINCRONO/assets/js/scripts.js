const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //Armazenar o endereço do API (muito com criar a BASE_URL)
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');


const getCats = async () => {
    try{
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
};

const loadImg = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);
loadImg();