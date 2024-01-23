class NavBar extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <header class="navbar-container">
        <a class="navbar-brand" href="index.html">MY COMICS</a>
        <nav class="nav-list">
            <ul>
                <li><a href="#">Beranda</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#project">Project</a></li>
                <li><a><img src="img/moon.png" id="Itheme"></a></li>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </ul>
        </nav>
    </header>
    `;
  }

}


customElements.define('navbar-app', NavBar)