document.addEventListener("DOMContentLoaded",function () {
    const footer = `
    <footer>
        <hr>
        <div class="footer">
            <div class="footerMenu">

                <div class="navFooter">
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Personagens</a></li>
                            <li><a href="#">Boss</a></li>
                            <li><a href="#">Itens</a></li>
                            <li><a href="#">Rotas</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="avisoFooter">
                    <p><small>⚠️ Este site é um projeto de demonstração inspirado no jogo <em>Undertale</em>, desenvolvido apenas para fins educativos e sem fins lucrativos. Todos os direitos autorais sobre o jogo e seus personagens pertencem a Toby Fox.</small></p>
                </div>

                <div class="agradecimentoFooter">
                    <p>🙏 Agradecemos por acessar este projeto! Esperamos que ele inspire você a aprender mais sobre desenvolvimento web e o incrível universo de Undertale.</p>
                </div>

            </div>

            <div class="direitosFooter">
                <p>&copy; 2025 Wiki Undertale</p>
            </div>

        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML("beforeend",footer);
});