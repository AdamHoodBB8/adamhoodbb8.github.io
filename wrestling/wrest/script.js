//TMDB

const API_KEY = 'api_key=7ef2b3f45ca15a12c9867e4e98738050';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' +API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const ppvs =  [
        {
            "title":"WMXXX",
            "poster_path":"https://upload.wikimedia.org/wikipedia/en/8/8f/WrestleMania_XXX_Poster.png",
            "vote_average":"8.76",
            "overview":"Wrestlemania 30",
            "matches":[
                {
                    "champion":"Daniel Bryan",
                    "championimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/Daniel_Bryan_Pro--bfcf96f308903d00574ccf88318215f0.png",
                    "challenger":"Triple H",
                    "challengerimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2018/01/TripleH_Pro--56cf96e32ae35b75ff370574dfd29bf0.png"
                },
                {
                    "champion":"John Cena",
                    "championimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/John_Cena_Pro--c49ac192e6c71d6dde11351ad70975d4.png",
                    "challenger":"Bray Wyatt",
                    "challengerimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2019/10/SuperStar_Bray_Fiend--fdf9d5e3777cbff27bbe1ef6b0c1ece0.png"
                },
                {
                    "champion":"Brock Lesnar",
                    "championimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2021/09/Brock_Lesnar_09102021rf_056_Profile--c2d758d7cd3478c2aaa0fe79120b673e.png",
                    "challenger":"The Undertaker",
                    "challengerimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/Undertaker_Pro--e73c07b669f8d823088cf8de4cebfde8.png"
                },
                {
                    "champion":"Daniel Bryan",
                    "championimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/Daniel_Bryan_Pro--bfcf96f308903d00574ccf88318215f0.png",
                    "challenger":"Batista",
                    "challengerimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/rd-talent/Profile/Batista_pro.png"
                }
            ]
        },
        {
            "title":"WMXXXI",
            "poster_path":"https://upload.wikimedia.org/wikipedia/en/0/02/WM31Poster.png",
            "vote_average":"8.40",
            "overview":"Wrestlemania 31",
            "matches":[
                {
                    "champion":"Brock Lesnar", 
                    "challenger":"Roman Reigns"
                }
            ]
        }
    ];

    const danielBryan =  [
        {
            "title":"Daniel Bryan",
            "poster_path":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/Daniel_Bryan_Pro--bfcf96f308903d00574ccf88318215f0.png",
            "vote_average":"8.76",
            "overview":"Daniel Bryan is a Wrestler",
            "matches":[
                {
                    "show":"Fastlane 2021",
                    "champion":"Daniel Bryan",
                    "championimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/Daniel_Bryan_Pro--bfcf96f308903d00574ccf88318215f0.png",
                    "challenger":"Roman Reigns",
                    "challengerimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2022/04/Roman_Profile--f2e24f84ca2679ca0be9da35cb9be6fd.png",
                    "matchvote":"8.33"
                },
                {
                    "show":"Elimination Chamber 2021",
                    "champion":"Daniel Bryan",
                    "championimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/Daniel_Bryan_Pro--bfcf96f308903d00574ccf88318215f0.png",
                    "challenger":"Roman Reigns",
                    "challengerimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2022/04/Roman_Profile--f2e24f84ca2679ca0be9da35cb9be6fd.png",
                    "matchvote":"N/A"
                },
                {
                    "show":"WrestleMania 36",
                    "champion":"Daniel Bryan",
                    "championimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/Daniel_Bryan_Pro--bfcf96f308903d00574ccf88318215f0.png",
                    "challenger":"Sami Zayn",
                    "challengerimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2021/01/ZAYN_09182020jg_0108-2_Profile--da2326b249846c36571588d27a1370c1.png",
                    "matchvote":"4.87"
                },
                {
                    "show":"Elimination Chamber 2020",
                    "champion":"Daniel Bryan",
                    "championimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2020/01/Daniel_Bryan_Pro--bfcf96f308903d00574ccf88318215f0.png",
                    "challenger":"Drew Gulak",
                    "challengerimage":"https://www.wwe.com/f/styles/talent_champion_lg/public/all/2021/11/Drew_Gulak_Pro--746e11f2d0128414ae3d22ca04ff7a4a.png",
                    "matchvote":"8.33"
                }
            ]
        },
    ];

showPPVs(ppvs)

function showPPVs(data){

    main.innerHTML = '';

    data.forEach((ppv, i) => {
        const {title, poster_path, vote_average, overview, matches} = ppv;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `<img src="${poster_path}" alt="${title}">

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</button>
        </div>

        <div class="overview">
            <h3>Overview</h3>
           ${overview}
           <button id="button-${i}" class="${getColor(vote_average)}">^</button>
        </div>`

        main.appendChild(movieEl);

        document.getElementById('button-' + i).addEventListener('click', e => showPPV(ppv));

    })

    console.log("showMovies")
}

function showPPV(data) {
    console.log("ppv")
    main.innerHTML = '';

    const {title, poster_path, vote_average, overview, matches} = data;
    const movieEl = document.createElement('div');
    movieEl.classList.add('ppv');
    movieEl.innerHTML = `<img src="${poster_path}" alt="${title}">

    <div class="ppv-info">
        <h3>${title}</h3>
    </div>

    <div class="ppv-overview">
        <h3>Overview</h3>
        ${overview}
    </div>
    <h4>Matches</h4>`



    matches.forEach(match => {
        const matchEl = document.createElement('div');

        matchEl.innerHTML = `<div class="match">
            <img src="${match.championimage}" alt="${title}">
            <img src="${match.challengerimage}" alt="${title}">
            <p>${match.champion} vs. ${match.challenger}</p>
            <button id="button-1" class="${getColor(vote_average)}">^</button>
            </div>
        `;

        movieEl.appendChild(matchEl)
       
    })

    main.appendChild(movieEl);
    document.getElementById('button-1').addEventListener('click', e => showWrestler(danielBryan));


}

function showWrestler(data) {
    main.innerHTML = '';

    const {title, poster_path, overview, matches} = data;
    const movieEl = document.createElement('div');
    movieEl.classList.add('wrestler');
    movieEl.innerHTML = `<img src="${poster_path}" alt="${title}">

    <div class="wrestler-info">
        <h3>${title}</h3>
    </div>

    <div class="wrestler-overview">
        <h3>Overview</h3>
        ${overview}
    </div>
    <h4>Matches</h4>`


    matches.forEach(match => {
        console.log("wrestler")
        const wrestlerEl = document.createElement('div');

        wrestlerEl.innerHTML = `<div class="match">
            <img src="${match.championimage}" alt="${title}">
            <img src="${match.challengerimage}" alt="${title}">
            <p>${match.champion} vs. ${match.challenger}</p>
            </div>
        `;

        movieEl.appendChild(wrestlerEl)
        

    })
    
    main.appendChild(movieEl);

}


function getColor(vote){
    if(vote>= 8){
        return "green"
    }else if(vote >= 5){
        return "orange"
    }else{
        return "red"
    }
}

form.addEventListener('submit', e =>{
    e.preventDefault();

    const searchTerm = search.value;

    console.log(searchTerm)

    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }
})