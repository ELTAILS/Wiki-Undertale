document.addEventListener("DOMContentLoaded",function () {
    const header = `
    <header id="header">

        <div class="header">

            <div class="logoHeader">
                <a href="index.html"><img src="img/logoHeader.png" alt="logo-header"></a>
            </div>

            <div class="nav">
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="personagens.html">Personagens</a></li>
                        <li><a href="boss.html">Boss</a></li>
                        <li><a href="itens.html">Itens</a></li>
                        <li><a href="rotas.html">Rotas</a></li>
                    </ul>
                </nav>
            </div>

        </div>
        <hr>
    </header> 

    <button id="btnHeader" aria-label="botão do cabeçario">
        <i class="fa-solid fa-bars"></i>
    </button>
    `;
    document.body.insertAdjacentHTML("afterbegin",header);
});

document.addEventListener('DOMContentLoaded',() => {
    const btnHeader = document.getElementById('btnHeader');
    const header = document.getElementById('header');

    btnHeader.addEventListener('click', () => {
        header.classList.toggle('aberto');
    });
});