// /top-headlines?country=ar&category=technology&page=1&pageSize=12&apiKey=${apiKey}
// API
// 1. es autenticar -> significa decir quien soy, permite a la api que recurso consumos etc
// 2. es autorizar -> significa que puedo hacer dentro de la api,es decir ,permisos que tengo

const APIKEY = '6612309c9187454fadbcfc570db0a3b1';
const container = document.querySelector('#container');
const btnPrevious =  document.querySelector('#btnPrevious');
const btnNext = document.querySelector('#btnNext');
const pageSpan = document.querySelector('#pageSpan');
const PAGE_SIZE = 12;
let page = 1
let lastPage;

const renderCards = async () => {
  //adquisicion de data
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ar&category=technology&page=${page}&pageSize=${PAGE_SIZE}&apiKey=${APIKEY}`
  );
  const data = await response.json();
  lastPage = Math.ceil(data.totalResults/PAGE_SIZE);
  //render cards
  container.innerHTML = data.articles.map(
    (article) => `<div class="card">
  <img
  src="${article.urlToImage}"
  alt="${article.title}"/>
<div class="info">
  <a
    href="${article.url}"
    target="_blank"
    rel="noopener noreferrer"
    ><h3 class="info_title">
      ${article.title}
    </h3>
  </a>

  <p class="info_description">
    ${article.description}
  </p>
</div>
</div>`
  ).join("");
  pageSpan.innerHTML = page;
};

renderCards();

btnNext.addEventListener("click", () =>{
  //cuando funciona 
  // la pagina actual es mas chica que la ultima
  if(page < lastPage){
    page++;
    renderCards();
  }
  // habilitar el btn de Anterior

  if(page > 1){
    btnPrevious.classList.remove("btn--disabled");
  }

  // deshabilitar el btn de siguiente
  // la condicion es que llegue al final
  if(page >= lastPage){
    btnNext.classList.add("btn--disabled");
  }
  
})

btnPrevious.addEventListener("click", () =>{
  // Cuando se puede apretar el btn de Anterior
  // cuando sea mayor 1
  if(page > 1){
    page--;
    renderCards();
  }

  //deshabilitando el btn anterior
  // cuando la pagina sea 1 o menor
  if(page <= 1){
      btnPrevious.classList.add("btn--disabled");  
  }

  // habilita el boton de Siguiente
  // cuando la pagina  sea mas chica  que  la ultima
  if(page <= lastPage){
    btnNext.classList.remove("btn--disabled");
  }
})