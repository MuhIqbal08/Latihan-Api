import { topComic } from "../baseApi/data-source";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import DataSource from "../baseApi/data-source";

class ComicCard extends HTMLElement {

  async connectedCallback(){
      
    const manhwaData = await topComic();

    const renderAllComics = (comics) => {
        const listComicElement = document.querySelector('.comic-card');
      listComicElement.innerHTML = '';
      
    //   const validComics = comics.filter((comic) => comic.chapters !== null );

      comics.forEach(comic => {
                let badgeColor;
                switch (comic.type) {
                    case 'Manhwa':
                        badgeColor = 'primary';
                        break;
                    case 'Manga':
                        badgeColor = 'danger';
                        break;
                    case 'Manhua':
                        badgeColor = 'warning';
                        break;
                    default:
                        badgeColor = 'secondary'; // Default color for other types
                }

                const chapterInfo = comic.chapters ? `${comic.chapters}` : 'Unknown';

                listComicElement.innerHTML += `
                    <div class="col">
                      <div class="card h-100 bg-dark text-light">
                          <span class="badge text-bg-${badgeColor}"
                              style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">${comic.type}</span>
                          <!-- <span class="badge text-bg-primary"
                                      style="align-self: center; position:absolute; right:5px; margin-top:5px; z-index:3;">Manhwa</span> -->
                          <img src="${comic.images.jpg.image_url}" class="card-img-top rounded-0"
                              alt="${comic.title}">
                          <div class="card-body">
                              <h5 class="card-title text-center"><span data-dbid=${comic.mal_id}>${comic.title}</span></h5>
                              <div class="card-text pt-2">
                                  <p class="card-text">Chapters:  ${chapterInfo}</p>
                                  <p class="card-text">Status: ${comic.status}</p>
                                  <p class="card-text">Rating: ${comic.score}</p>
                              </div>
                          </div>
                      </div>
                  </div>
                `;

                const titleElements = document.querySelectorAll('.card-title');
                titleElements.forEach((titleElement) => {
                    titleElement.addEventListener('click', async (event) => {
                        const malId = event.target.getAttribute("data-dbid");
                        console.log("Klik berhasil: ", malId);
                        await DataSource.comicDetail(malId);
                    });
                });
      })
    }
    renderAllComics(manhwaData);
  }
}

customElements.define('comics-card', ComicCard);