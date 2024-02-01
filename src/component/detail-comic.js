import { comicDetail } from '../baseApi/data-source';
import 'bootstrap/dist/css/bootstrap.css';
import { hideElement, showElement } from '../view/script';

class DetailComic extends HTMLElement {
  constructor() {
    super();
    this.listComicDetailElement = document.querySelector('.container-detail');
  }

  async connectedCallback() {
    document.addEventListener('showDetail', async (event) => {
      const { malId } = event.detail;
      try {
        const komikDetail = await comicDetail(malId);
        this.renderComicDetail(komikDetail);
      } catch (error) {
        console.error(error);
      }
    });
  }

  renderComicDetail(comic) {
    this.listComicDetailElement.innerHTML = '';

    const alternativeTitles = comic.titles.map((title) => title.title).join(', ');
    const genres = comic.genres.map((genre) => genre.name).join(', ');
    const authors = comic.authors.map((author) => author.name).join(', ');
    const demographics = comic.demographics && comic.demographics.length > 0
      ? comic.demographics.map((demographic) => demographic.name).join(', ')
      : 'Unknown';
    const themes = comic.themes && comic.themes.length > 0
      ? comic.themes.map((theme) => theme.name).join(', ')
      : 'Unknown';

    this.listComicDetailElement.innerHTML += `
      <div class="card mb-3 text-bg-dark detail">
        <div class="row detail-row">
          <div class="row" style="border-radius: 10px;">
            <div class="col detail-col">
              <h3 class="card-title pt-2 col-sm-8 detail-title">${comic.title}</h3>
              <div class="col-sm-1 text-right pt-2 button-close">
                <button type="button" class="btn btn-outline-danger btn-sm btn-x">X</button>
              </div>
            </div>
          </div>
          <div class="col-md-4 pt-4 text-center">
            <img src="${comic.images.jpg.image_url}" class="img-fluid rounded-start" alt="..." style="height: 400px;">
          </div> 
          <div class="col-md-8">
            <div class="card-body pt-4">
              <ul class="list-group list-group-flush border-secondary">
                <li class="list-group-item text-bg-dark border-secondary">Alternative Titles: ${alternativeTitles}</li>
                <li class="list-group-item text-bg-dark border-secondary">Author: ${authors}</li>
                <li class="list-group-item text-bg-dark border-secondary">Member: ${comic.members}</li>
                <li class="list-group-item text-bg-dark border-secondary">Genre: ${genres}</li>
                <li class="list-group-item text-bg-dark border-secondary">Theme: ${themes}</li>
                <li class="list-group-item text-bg-dark border-secondary">Demographics: ${demographics}</li>
                <li class="list-group-item text-bg-dark border-secondary">Rank: ${comic.rank}</li>
                <li class="list-group-item text-bg-dark border-secondary">Popularity: ${comic.popularity}</li>
                <li class="list-group-item text-bg-dark border-secondary">Published: ${comic.published.string}</li>
              </ul>
            </div>
          </div>
          <h3 class="card-title pt-3 synopsis-title">Synopsis</h3>
          <p class="card-text mb-3 synopsis" style="padding-right:30px;">${comic.synopsis}</p>
        </div>
      </div>`;

    const xButton = this.listComicDetailElement.querySelector('.btn-x');
    xButton.addEventListener('click', () => {
      hideElement('.container-detail');
      showElement('.comic-card');
    });
  }
}

customElements.define('detail-comic', DetailComic);
