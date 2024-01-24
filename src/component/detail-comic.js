import { comicDetail } from "../baseApi/data-source";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import DataSource from "../baseApi/data-source";
// import DataSource from "../baseApi/data-source"

class DetailComic extends HTMLElement {

    // async getComicDetail(malId) {
    //     try {
    //         const detailData = await DataSource.comicDetail(malId);
    //         console.log(detailData);
    //     }catch (error) {
    //         console.error(error);
    //     }
    // }

    async connectedCallback() {
        // const comicId = 2
        const comicData = await comicDetail();
        
        const renderComicDetail = (comic) => {
            const listComicDetailElement = document.querySelector('.detail-card');
            listComicDetailElement.innerHTML = '';

            const alternativeTitles = comic.titles.map(title => title.title).join(', ');

                listComicDetailElement.innerHTML += `
                    <div class="card mb-3 text-bg-dark detail">
                <div class="row" style="padding-left: 22px;">
                    <div class="row border-bottom border-secondary" style="border-radius: 10px; padding-left: 50px; color: crimson;">
                        <h3 class="card-title pt-2 col-md-8">${comic.title}</h3>
                        <div class="col-md-1 text-right pt-2" style="padding-left: 350px;">
                            <button type="button" class="btn btn-outline-danger btn-sm">X</button>
                        </div>
                    </div>
                    
                    <div class="col-md-4 pt-4 text-center">
                        <img src="${comic.images.jpg.image_url}" class="img-fluid rounded-start" alt="..." style="height: 400px;">
                    </div> 
                    <div class="col-md-8">
                        <div class="card-body pt-4">
                            <ul class="list-group list-group-flush border-secondary">
                                <li class="list-group-item text-bg-dark border-secondary">Alternatif Titles: ${alternativeTitles}</li>
                                <li class="list-group-item text-bg-dark border-secondary">Author: </li>
                                <li class="list-group-item text-bg-dark border-secondary">Ilustrator: </li>
                                <li class="list-group-item text-bg-dark border-secondary">Genre: </li>
                                <li class="list-group-item text-bg-dark border-secondary">Theme: </li>
                                <li class="list-group-item text-bg-dark border-secondary">Demographics: </li>
                                <li class="list-group-item text-bg-dark border-secondary">Rank: </li>
                                <li class="list-group-item text-bg-dark border-secondary">Popularity: </li>
                                <li class="list-group-item text-bg-dark border-secondary">Published: </li>
                            </ul>
                        </div>
                    </div>
                    <h3 class="card-title pt-3">solo leveling</h3>
                    <p class="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>
                `;

                // listComicDetailElement.style.display = 'block'
        }
        
        renderComicDetail(comicData);
  }
}

customElements.define('detail-comic', DetailComic);