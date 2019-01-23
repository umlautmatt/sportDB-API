const baseurl = 'https://www.thesportsdb.com/api/v1/json/1/';
const key = '1';
let url;

const searchCity= document.querySelector('.city');
const searchName =document.querySelector('.name');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const teamList = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) { //function is ran when searchForm from previous section is "submit" 
    e.preventDefault();
    url = baseurl + 'searchteams.php?t=' + searchCity.value 
    // + searchName.value;
    console.log(url)
    
    fetch(url)
      .then(function(result) {
          console.log(result);
        return result.json();
        })
        .then(function(json) {
            console.log(json);
        displayResults(json); 
        });
}
function displayResults(json) {
  while (teamList.firstChild) {
    teamList.removeChild(teamList.firstChild);//
}
    // let teamResults = json.teams[0].strTeam;
    let teamResults = json.teams;
    console.log(teamResults);
    
    
    for(let i = 0; i < teamResults.length; i++) {
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let manager = document.createElement('h1');
      let stadium = document.createElement('h2');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');

      let current = teamResults[i];
      console.log("Current:", current);
      
      heading.textContent = current.strTeam;
      manager.textContent = 'Head Coach: ' + current.strManager;
      stadium.textContent = 'Stadium: ' + current.strStadium;
      para.textContent = current.strDescriptionEN;
      // console.log()
      
      article.appendChild(heading);
      article.appendChild(stadium); 
      article.appendChild(manager);
      article.appendChild(para);
      article.appendChild(clearfix);
      teamList.appendChild(article);
    }
    
  };



