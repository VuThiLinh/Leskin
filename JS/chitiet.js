const ads = [
    {
        id: 1,
        image: './assets/img/sp_4.jpg',
        name: 'Dịch vụ trị nám, tàn nhang'
    },
    {
        id: 2,
        image: './assets/img/sp_4.jpg',
        name: 'Dịch vụ trị nám, tàn nhang'
    },
    {
        id: 3,
        image: './assets/img/sp_4.jpg',
        name: 'Dịch vụ trị nám, tàn nhang'
    },
    {
        id: 4,
        image: './assets/img/sp_4.jpg',
        name: 'Dịch vụ trị nám, tàn nhang'
    }
]

displayAds(ads);
function displayAds(){
    let html = '';
    for(let i = 0; i < ads.length; i++){
        html += `<li data-id="${ads[i].id}">
                    <a href="#" class="service-item">
                        <div class="service-avt">
                            <img class="img-fluid" src="${ads[i].image}" alt="${ads[i].name}">
                        </div>
                        <div class="service-desc">
                            <h3 class="name">${ads[i].name}</h3>
                            <button class="btn btn--around">Xem thêm</button>  
                        </div>
                    </a>
                </li>`;
    }
    $(".list-service ul").html(html);
}


