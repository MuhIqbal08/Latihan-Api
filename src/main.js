import 'regenerator-runtime';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/navbar-app';
import './component/comics-card';
import './component/detail-comic';
import './component/footer-app';
import './view/script';
import './baseApi/api';
import { topComic, comicDetail, searchComic } from './baseApi/data-source';

document.addEventListener('showDetail', async (event) => {
  const { malId } = event.detail;
  comicDetail(malId);
});

document.addEventListener('showSearch', async (event) => {
  const { searchValue } = event.detail;
  searchComic(searchValue);
});

topComic();
