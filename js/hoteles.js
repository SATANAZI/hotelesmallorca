async function getHoteles() {
    let url = 'js/hoteles.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function printHoteles() {
    console.log("Hola");
    let hoteles = await getHoteles();
    let html = '';
    hoteles.forEach(hotel => {
        let htmlSegment = `<div class="hotel">
                            <img src="${hotel.icones[0]}" >
                            <h2>${hotel.nom}</h2>
                            <a>${hotel.descripcio}</a>
                        </div>`;
        html += htmlSegment;
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

printHoteles();