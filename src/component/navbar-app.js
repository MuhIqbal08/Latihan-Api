import { searchComic } from '../baseApi/data-source';
import { showElement, hideElement } from '../view/script';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="navbar-container">
        <a class="navbar-brand" href="index.html">MY COMICS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="nav-list">
          <ul>
            <li>
              <form id="searchForm" class="d-flex" role="search">
                <input id="searchInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button id="searchButtonElement" class="btn btn-outline-danger" type="submit">Search</button>
              </form>
            </li>
          </ul>
        </nav>
      </header>
    `;

    const searchForm = this.querySelector('#searchForm');
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const searchInput = this.querySelector('#searchInput');
      const searchValue = searchInput.value.trim();

      const showSearchEvent = new CustomEvent('showSearch', {
        detail: {
          searchValue,
        },
      });
      document.dispatchEvent(showSearchEvent);

      const comicsCard = document.querySelector('comics-card');

      if (searchValue === '') {
        alert('Please enter a search term.');
        hideElement('.container-detail');
        showElement('.comic-card');
        // const topData = await topComic(searchValue);
        // if (comicsCard) {
        //   comicsCard.innerHTML = '';
        //   comicsCard.renderAllComics(topData);
        // }
      } else {
        const searchData = await searchComic(searchValue);
        if (comicsCard) {
          comicsCard.innerHTML = '';
          comicsCard.renderAllComics(searchData);
        }
      }
    });
  }
}

customElements.define('navbar-app', NavBar);
