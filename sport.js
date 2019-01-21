const baseurl = 'https://www.thesportsdb.com/api/v1/json/1/';
const key = '1';
let url;

const searchCity= document.querySelector('.city');
const searchName =document.querySelector(".name");
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const teamList = document.querySelector('ul');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) { //function is ran when searchForm from previous section is "submit" 
    e.preventDefault();
    url = baseurl + 'searchteams.php?t=' + searchCity.value + searchName.value;
    console.log(url)
    
    fetch(url)
      .then(function(response) {
          console.log(response);
        // return response.json();
        })
        .then(function(json) {
            console.log(json);
        displayResults(json); 
        });
      }
      function displayResults(json) {
        let teamResults = json.teams[0].strTeam;
        console.log(teamResults);
  };
  
  
  // for(let i = 0; i < teamResults.length; i++) {
  //   let article = document.createElement('article');
  //   let heading = document.createElement('h2');
  //   let link = document.createElement('a');
  //   let img = document.createElement('img');
  //   let para = document.createElement('p');
  //   let clearfix = document.createElement('div');
  //   let span = document.createElement('span');
    
  //   let current = teamResults[i];
    
  //   span.textContent += current.teamResults[i].value + '';
  //   para.appendChild(span);
  //   console.log(current);



  //   article.appendChild(heading);
  //   heading.appendChild(link);
  //   article.appendChild(img); 
  //   article.appendChild(para);
  //   article.appendChild(clearfix);
  //   section.appendChild(article);
  // }
// };




