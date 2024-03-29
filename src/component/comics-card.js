import { topComic, searchComic } from '../baseApi/data-source';
import 'bootstrap/dist/css/bootstrap.css';
import { hideElement, showElement } from '../view/script';

class ComicCard extends HTMLElement {
  async connectedCallback() {
    const manhwaData = await topComic();
    this.renderAllComics(manhwaData);

    document.addEventListener('showSearch', async (event) => {
      const searchData = event.detail.searchValue;
      const searchResults = await searchComic(searchData);
      this.renderAllComics(searchResults);
    });
  }

  renderAllComics(comics) {
    const listComicElement = document.querySelector('.row');
    listComicElement.innerHTML = '';

    // const validComics = comics.filter((comic) => comic.score !== null);
    comics.forEach((comic) => {
      const badgeColor = this.getBadgeColor(comic.type);
      const chapterInfo = comic.chapters ? `${comic.chapters}` : 'Unknown';

      listComicElement.innerHTML += `
        <div class="col">
          <div class="card h-100 bg-dark text-light">
            <span class="badge text-bg-${badgeColor}" style="border-bottom-left-radius: 0; border-bottom-right-radius: 0;">${comic.type}</span>
            <img src="${comic.images.jpg.image_url}" class="card-img-top rounded-0" alt="${comic.title}">
            <div class="card-body">
              <h5 class="card-title text-center title-comic"><span data-dbid="${comic.mal_id}">${comic.title}</span></h5>
              <div class="card-text pt-2">
                <p class="card-text">Chapters: ${chapterInfo}</p>
                <p class="card-text">Status: ${comic.status}</p>
                <p class="card-text">Rating: ${comic.score}</p>
              </div>
            </div>
          </div>
        </div>`;
    });

    hideElement('.container-detail');

    const titleElements = document.querySelectorAll('.card-title');
    titleElements.forEach((titleElement) => {
      titleElement.addEventListener('click', (event) => {
        const malId = event.target.getAttribute('data-dbid');
        console.log('Klik berhasil: ', malId);
        const showDetailEvent = new CustomEvent('showDetail', {
          detail: {
            malId,
          },
        });

        document.dispatchEvent(showDetailEvent);
        showElement('.container-detail');
        hideElement('.comic-card');
      });
    });
  }

  getBadgeColor(type) {
    switch (type) {
      case 'Manhwa':
        return 'primary';
      case 'Manga':
        return 'danger';
      case 'Manhua':
        return 'warning';
      default:
        return 'secondary';
    }
  }
}

customElements.define('comics-card', ComicCard);
