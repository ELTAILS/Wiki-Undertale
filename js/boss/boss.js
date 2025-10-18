document.addEventListener('DOMContentLoaded', () => {
    const containerBoss = document.getElementById('containerBoss');
    // console.log(containerBoss);
    containerBoss.innerHTML = "";
    // console.log(databaseBoss);
    
    databaseBoss.forEach(b => {
        containerBoss.innerHTML += `
            <article class="cardPersonagens cardBoss">
                <div class="cardImg">
                    <img src="${b.img}" alt="imagen do boss ${b.nome}">
                </div>
                <div class="cardConteudo">
                    <h2 class="mensagemH2">${b.nome}</h2>
                    <div class="mensagemP">
                        <p>Statics <i class="fa-solid fa-gun"></i> At ${b.statics.at} | <i class="fa-solid fa-shield"></i> Def ${b.statics.def}</p>
                        <p>Forma Pacifista: ${b.formaPacifista}</p>
                        <p><i class="fa-solid fa-calendar"></i> Evento: ${b.evento}</p>
                    </div>
                </div>
            </article>
        `
    });

});