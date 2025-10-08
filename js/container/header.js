document.addEventListener("DOMContentLoaded",function () {
    const header = `
    <header>
        <div class="header">

            <div class="logoHeader">
                <a href="index.html"><img src="img/logoHeader.png" alt="logo-header"></a>
            </div>

            <div class="nav">
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Personagens</a></li>
                        <li><a href="#">Boss</a></li>
                        <li><a href="#">Armas</a></li>
                        <li><a href="#">Rotas</a></li>
                    </ul>
                </nav>
            </div>

        </div>
        <hr>
    </header> 
    `;
    document.body.insertAdjacentHTML("afterbegin",header);
});