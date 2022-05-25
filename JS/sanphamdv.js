const products = [
    {
        id: 1,
        image: './assets/img/sp_1.png',
        name: '1: Chăm sóc da chuyên sâu, khôi phục làn da khỏe đẹp, chống hư tổn và lão hóa'
    },
    {
        id: 2,
        image: './assets/img/sp_3.jpg',
        name: '2: Dịch vụ điều trị mụn, sẹo, se khít lỗ chân lông và giảm vết sẹo thâm do mụn để lại'
    },
    {
        id: 3,
        image: './assets/img/sp_2.jpg',
        name: '3: Dịch vụ tắm trắng'
    },
    {
        id: 4,
        image: './assets/img/sp_4.jpg',
        name: '4: Dịch vụ trị nám, tàn nhang'
    },
    {
        id: 5,
        image: './assets/img/sp_3.jpg',
        name: '5: Chăm sóc da chuyên sâu, khôi phục làn da khỏe đẹp, chống hư tổn và lão hóa'
    },
    {
        id: 6,
        image: './assets/img/sp_1.png',
        name: '6: La Roche - Posay'
    },
    {
        id: 7,
        image: './assets/img/sp_4.jpg',
        name: '7: Dịch vụ điều trị mụn, sẹo, se khít lỗ chân lông và giảm vết sẹo thâm do mụn để lại'
    },
    {
        id: 8,
        image: './assets/img/sp_5.jpg',
        name: '8: Dịch vụ tắm trắng'
    },
    {
        id: 9,
        image: './assets/img/sp_4.jpg',
        name: '9: Dịch vụ trị nám, tàn nhang'
    },
    {
        id: 10,
        image: './assets/img/sp_3.jpg',
        name: '10: Dịch vụ điều trị mụn, sẹo, se khít lỗ chân lông và giảm vết sẹo thâm do mụn để lại'
    },
    {
        id: 11,
        image: './assets/img/sp_2.jpg',
        name: '11: Chăm sóc da chuyên sâu, khôi phục làn da khỏe đẹp, chống hư tổn và lão hóa'
    },
    {
        id: 12,
        image: './assets/img/sp_1.png',
        name: '12: Dịch vụ điều trị mụn, sẹo, se khít lỗ chân lông và giảm vết sẹo thâm do mụn để lại'
    },
    {
        id: 13,
        image: './assets/img/sp_4.jpg',
        name: '13: Dịch vụ trị nám, tàn nhang'
    },
    {
        id: 14,
        image: './assets/img/sp_3.jpg',
        name: '14: Dịch vụ điều trị mụn, sẹo, se khít lỗ chân lông và giảm vết sẹo thâm do mụn để lại'
    },
    {
        id: 15,
        image: './assets/img/sp_2.jpg',
        name: '15: Chăm sóc da chuyên sâu, khôi phục làn da khỏe đẹp, chống hư tổn và lão hóa'
    },
    {
        id: 16,
        image: './assets/img/sp_3.jpg',
        name: '16: Dịch vụ điều trị mụn, sẹo, se khít lỗ chân lông và giảm vết sẹo thâm do mụn để lại'
    },
    {
        id: 17,
        image: './assets/img/sp_2.jpg',
        name: '17: Chăm sóc da chuyên sâu, khôi phục làn da khỏe đẹp, chống hư tổn và lão hóa'
    },
    {
        id: 18,
        image: './assets/img/sp_1.png',
        name: '18: Dịch vụ điều trị mụn, sẹo, se khít lỗ chân lông và giảm vết sẹo thâm do mụn để lại'
    },
    {
        id: 19,
        image: './assets/img/sp_4.jpg',
        name: '19: Dịch vụ trị nám, tàn nhang'
    },
    {
        id: 20,
        image: './assets/img/sp_3.jpg',
        name: '20: Dịch vụ điều trị mụn, sẹo, se khít lỗ chân lông và giảm vết sẹo thâm do mụn để lại'
    },
    {
        id: 21,
        image: './assets/img/sp_2.jpg',
        name: '21: Chăm sóc da chuyên sâu, khôi phục làn da khỏe đẹp, chống hư tổn và lão hóa'
    }
    
]

let pageSize = 8;
let pageNumber = 1;
let start = 0;
let end = pageSize;
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

const pageCount = Math.ceil(products.length / pageSize);
// console.log(pageCount);

function getCurrentPage(pageNumber){
    start = (pageNumber - 1) * pageSize;
    end = pageNumber * pageSize;
}

function displayProduct(products){
    let row = '';
    for(let i = 0; i < products.length; i++){
        if(i >= start && i < end){
            row += `<li data-id="${products[i].id}">
                        <a href="./chitietsp.html" class="product-item">
                            <div class="product-avt">
                                <img src="${products[i].image}" alt="${products[i].name}">
                            </div>
                            <div class="product-desc">
                                <h3 class="name">${products[i].name}</h3> 
                                <button class="btn btn--around">Xem thêm</button>
                            </div>
                        </a>
                    </li>`;
        }
    }
    $(".products ul").html(row);
    // genderPagination();
}
displayProduct(products);
genderListPage();
function genderListPage(){
    let html = '';
    html += `<li class="active">${1}</li>`;
    for(let i = 2; i <= pageCount; i++){
        html += `<li>${i}</li>`
    }
    document.getElementById('number-page').innerHTML = html;
}

function changePage(){
    const currentPage = document.querySelectorAll('.number-page li');
    for(let i = 0; i < currentPage.length; i++){
        currentPage[i].addEventListener('click', ()=>{
            const value = i + 1;
            pageNumber = value;
            $('.number-page li').removeClass('active');
            currentPage[i].classList.add('active');
            if(pageNumber > 1 && pageNumber < pageCount){
                $('.btn-prev').removeClass('active-page')
                 $('.btn-next').removeClass('active-page')
            }
            if(pageNumber === 1){
                $('.btn-prev').addClass('active-page');
            }
            if(pageNumber === pageCount){
                $('.btn-next').addClass('active-page');
            }
            getCurrentPage(pageNumber);
            displayProduct(products);
        })
    }
}
changePage();

btnNext.addEventListener('click', () =>{
    pageNumber++;
    if(pageNumber > pageCount){
        pageNumber = pageCount;
    }
    if(pageNumber === pageCount){
        $('.btn-next').addClass('active-page');
    }
    $('.btn-prev').removeClass('active-page')
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${pageNumber - 1})`).addClass('active');
    getCurrentPage(pageNumber);
    displayProduct(products);
})

btnPrev.addEventListener('click', () =>{
    pageNumber--;
    if(pageNumber <= 1){
        pageNumber = 1;
    }
    if(pageNumber === 1){
        $('.btn-prev').addClass('active-page');
    }
    $('.btn-next').removeClass('active-page')
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${pageNumber - 1})`).addClass('active');
    getCurrentPage(pageNumber);
    displayProduct(products);
})

// Tìm kiếm
$('#inputSearch').keyup(function(){
    let name = $(this).val();
    name = name.trim();
    if(name){
        name = name.toLowerCase();
        let data = products.filter(function(item){
            return item.name.toLowerCase().includes(name);
        });
        displayProduct(data);
    }else{
        displayProduct(products);
    }
});



                    