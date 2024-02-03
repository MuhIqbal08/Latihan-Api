class FooterApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer-copyright" class="footer-copyright">
        <div class="container">
          <div class="hm-footer-copyright text-center">
            <p>
              &copy; copyright@MuhIqbal23. 
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-app', FooterApp);
