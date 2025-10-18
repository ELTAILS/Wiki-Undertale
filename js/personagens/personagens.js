document.addEventListener("DOMContentLoaded", () => {
    const containerPersonagens = document.getElementById('containerPersonagens');
    // console.log(containerPersonagens);

    containerPersonagens.innerHTML = "";

    databasePersonagens.forEach(p => {
        containerPersonagens.innerHTML += `
            <article class="cardPersonagens">
                <div class="cardImg">
                    <img src="${p.img}" alt="Imagem do personagem ${p.nome}">
                </div>
                <div class="cardConteudo">
                    <h2 class="mensagemH2">${p.nome}</h2>
                    <div class="mensagemP">
                        <p>Statics: <i class="fa-solid fa-gun"></i> At ${p.statics.at} | <i class="fa-solid fa-shield"></i> Def ${p.statics.def}</p>
                        <p><i class="fa-solid fa-house"></i> Local: ${p.local}</p>
                        <p>Forma Pacifista: ${p.formaPacifista}</p>
                    </div>
                </div>
            </article>
        `;
    });
});