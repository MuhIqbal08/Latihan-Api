import 'regenerator-runtime';
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component/navbar-app";
import "./component/comics-card.js";
import "./component/detail-comic.js";
import "./baseApi/api.js";
import { topComic, comicDetail } from './baseApi/data-source';

topComic();
comicDetail();