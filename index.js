//variables

const generalBtn = document.getElementById("general");
const artsBtn = document.getElementById("arts");
const businessBtn = document.getElementById("business");
const computersBtn = document.getElementById("computers");
const financeBtn = document.getElementById("finance");
const gamesBtn = document.getElementById("games");
const healthBtn = document.getElementById("health");
const home_lifeBtn = document.getElementById("home_life");
const internetBtn = document.getElementById("internet");
const lawBtn = document.getElementById("law");
const newsBtn = document.getElementById("newspaper");
const recreationBtn = document.getElementById("recreation");
const educationBtn = document.getElementById("education");
const scienceBtn = document.getElementById("science");
const s_improvementBtn = document.getElementById("s_improvement");
const shoppingBtn = document.getElementById("shopping");
const societyBtn = document.getElementById("society");
const sportsBtn = document.getElementById("sports");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");
//Array
var newsDataArr = [];

//apis

const API_KEY = "288bacef5df04be9ad002e3ace9c2def"
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const ARTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey="
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="
const COMPUTERS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey="
const FINANCE_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="
const GAMES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey="
const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey="
const HOME_LIFE = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const INTERNET = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const LAW_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const NEWS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=&apiKey="
const RECREATION_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const SCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey="
const S_IMPROVEMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey="
const SHOPPING_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const SOCIETY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey="
const SPORTS_NEWS ="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="

window.onload = function() {
    newsType.innerHTML="";
    fetchHeadlines();
};

generalBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>General news</h3>";
    fetchGeneralNews();
});

artsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Arts news</h3>";
    fetchArtsNews();
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Business news</h3>";
    fetchBusinessNews();
});

computersBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Computers news</h3>";
    fetchComputersNews();
});

financeBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Finance news</h3>";
    fetchFinanceNews();
});

gamesBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>General news</h3>";
    fetchGamesNews();
});

healthBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Health news</h3>";
    fetchHealthNews();
});

home_lifeBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Home Life news</h3>";
    fetchhome_LifeNews();
});

internetBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Internet news</h3>";
    fetchInternetNews();
});

lawBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Law news</h3>";
    fetchLawNews();
});

newsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>News news</h3>";
    fetchNewsNews();
});

recreationBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Recreation news</h3>";
    fetchRecreationNews();
});

educationBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Education news</h3>";
    fetchEducationNews();
});

s_improvementBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Self Improvement news</h3>";
    fetchs_ImprovementNews();
});

shoppingBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Shopping news</h3>";
    fetchShoppingNews();
});

societyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Society news</h3>";
    fetchSocietyNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h3>Sports news</h3>";
    fetchSportsNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchArtsNews = async () =>{
    const response = await fetch(ARTS_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors

    }
    displayNews();
}

const fetchBusinessNews = async () =>{
    const response = await fetch(BUSINESS_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchComputersNews = async () =>{
    const response = await fetch(COMPUTERS_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchFinanceNews = async () =>{
    const response = await fetch(FINANCE_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchGamesNews = async () =>{
    const response = await fetch(GAMES_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchHealthNews = async () =>{
    const response = await fetch(HEALTH_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchhome_LifeNews = async () =>{
    const response = await fetch(HOME_LIFE_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchInternetNews = async () =>{
    const response = await fetch(INTERNET_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchLawNews = async () =>{
    const response = await fetch(LAW_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchNewsNews = async () =>{
    const response = await fetch(NEWS_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchRecreationNews = async () =>{
    const response = await fetch(RECREATION_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchEducationNews = async () =>{
    const response = await fetch(EDUCATION_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchs_ImprovementNews = async () =>{
    const response = await fetch(S_IMPROVEMENT_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchShoppingNews = async () =>{
    const response = await fetch(SHOPPING_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const fetchSocietyNews = async () =>{
    const response = await fetch(SOCIETY_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchSportsNews = async () =>{
    const response = await fetch(SPORTS_NEWS+API_KEY)
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}




function displayNews(){

    newsdetails.innerHTML = "";

   if(newsDataArr.length == 0){
        newsBtn.details.innerHTML = "<h5> No data found.</h5>"
        return;
    }

   newsDataArr.forEach(news => {

    var date = news.publishedAt.split("T");
    
    var col = document.createElement('div');
    col.className="col-sm-12 col-md-4 col-lg-5 p-2 card-black";

    var card = document.createElement('div');
    card.className = "p-2";

    var image = document.createElement('img');
    image.setAttribute("height","matchparent");
    image.setAttribute("width","100%");
    image.src=news.urlToImage;

    var cardBody = document.createElement('div');
    
    var newsHeading = document.createElement('h5');
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement('h6');
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var discription = document.createElement('p');
    discription.className="text-muted";
    discription.innerHTML = news.description;

    var link = document.createElement('a');
    link.className="btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML="Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(discription);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
});

}

