const product = [
    {
        id: 1,
        image: './assets/img/sp_4.jpg',
        title: '1: Cẩm nang ngăn ngừa lão hóa từ dưỡng da đến trang điểm',
        time: '10/08/2021'
    },
    {
        id: 2,
        image: './assets/img/sp_5.jpg',
        title: '2: Dịch vụ Massage thư giãn – Cũng là một trong những dịch vụ để tar lời câu hỏi “Spa có những dịch vụ gì?”',
        time: '10/08/2021'
    },
    {
        id: 3,
        image: './assets/img/sp_3.jpg',
        title: '3: Trải nghiệm công nghệ giảм béᴏ ĐIÊUKHẮC BODY  Ưu đãi đặc biệt trị giá 1300K với giá trải nghiệm chỉ còn 399K',
        time: '10/08/2021'
    },
    {
        id: 4,
        image: './assets/img/sp_2.jpg',
        title: '4: Cẩm nang ngăn ngừa lão hóa từ dưỡng da đến trang điểm',
        time: '10/08/2021'
    },
    {
        id: 5,
        image: './assets/img/sp_1.png',
        title: '5: Tặng ngay  phần quà trị giá 320K cho 68 bạn đặng kí đầu tiên',
        time: '10/08/2021'
    },
    {
        id: 6,
        image: './assets/img/sp_4.jpg',
        title: '6: Điêu Khắc Giảм Béᴏ Đùi',
        time: '10/08/2021'
    },
    {
        id: 7,
        image: './assets/img/sp_3.jpg',
        title: '7: Cẩm nang ngăn ngừa lão hóa từ dưỡng da đến trang điểm',
        time: '10/08/2021'
    },
    {
        id: 8,
        image: './assets/img/sp_1.png',
        title: '8: Cẩm nang ngăn ngừa lão hóa từ dưỡng da đến trang điểm',
        time: '10/08/2021'
    },
    {
        id: 9,
        image: './assets/img/sp_4.jpg',
        title: '9: Cẩm nang ngăn ngừa lão hóa từ dưỡng da đến trang điểm',
        time: '10/08/2021'
    },
    {
        id: 10,
        image: './assets/img/sp_5.jpg',
        title: '10: Điêu Khắc Giảм Béᴏ Đùi',
        time: '10/08/2021'
    },
    {
        id: 11,
        image: './assets/img/sp_3.jpg',
        title: '11: Cẩm nang ngăn ngừa lão hóa từ dưỡng da đến trang điểm',
        time: '10/08/2021'
    },
    {
        id: 12,
        image: './assets/img/sp_2.jpg',
        title: '12: Cẩm nang ngăn ngừa lão hóa từ dưỡng da đến trang điểm',
        time: '10/08/2021'
    },
    {
        id: 13,
        image: './assets/img/sp_1.png',
        title: '13: Điêu Khắc Giảм Béᴏ Bắp Chân',
        time: '10/08/2021'
    },
    {
        id: 14,
        image: './assets/img/sp_4.jpg',
        title: '14: Trẻ Hóa Xóa Nhăn Điêu Khắc Mặt V-Line',
        time: '10/08/2021'
    },
    {
        id: 15,
        image: './assets/img/sp_3.jpg',
        title: '15: Tặng ngay  phần quà trị giá 320K cho 68 bạn đặng kí đầu tiên',
        time: '10/08/2021'
    },
    {
        id: 16,
        image: './assets/img/sp_1.png',
        title: '16: Cẩm nang ngăn ngừa lão hóa từ dưỡng da đến trang điểm',
        time: '10/08/2021'
    }
]

let perPage = 6;
let currentPage = 1;
let start = 0;
let end = perPage;

const totalPages = Math.ceil(product.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

function getCurrentPage(currentPage){
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    console.log(start,end);
}


function renderProduct(){
    html = '';
    const content = product.map((item, index)=>{
        if(index >= start && index < end){
            html += '<div class="content__product__item">',
            html += '<a>';
            html += '<img class="img-fluid" src= ' + item.image + '>';
            html += '</a>';
            html += '<a>';
            html += '<h3>' + item.title + '</h3>';
            html += '<p>' + item.time + '</p>';
            html += '</a>';
            html += '</div>';
            return html;
        }
    })
    document.getElementById('product').innerHTML = html;
}

renderProduct();
renderListPage();

function renderListPage(){
    let html = '';
    html += `<li class="active"><a>${1}</a></li>`;
    for(let i = 2; i <= totalPages; i++){
        html += `<li><a>${i}</a></li>`
    }
    document.getElementById('number-page').innerHTML = html;
}

function changePage(){
    const currentPages = document.querySelectorAll('.number-page li');
    for(let i = 0; i < currentPages.length; i++){
        currentPages[i].addEventListener('click', ()=>{
            const value = i + 1;
            currentPage = value;
            $('.number-page li').removeClass('active');
            currentPages[i].classList.add('active');
            if(currentPage > 1 && currentPage < totalPages){
                $('.btn-prev').removeClass('active-page')
                 $('.btn-next').removeClass('active-page')
            }
            if(currentPage === 1){
                $('.btn-prev').addClass('active-page');
            }
            if(currentPage === totalPages){
                $('.btn-next').addClass('active-page');
            }
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}
changePage();

btnNext.addEventListener('click', ()=>{
    currentPage++;
    
    if(currentPage > totalPages){
        currentPage = totalPages;
    }
    if(currentPage === totalPages){
        $('.btn-next').addClass('active-page')
    }
    $('.btn-prev').removeClass('active-page')
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage - 1})`).addClass('active');
    getCurrentPage(currentPage);

    renderProduct();
})

btnPrev.addEventListener('click', ()=>{
    currentPage--;
    
    if(currentPage <= 1){
        currentPage = 1;
    }
    if(currentPage === 1){
        $('.btn-prev').addClass('active-page')
    }
    $('.btn-next').removeClass('active-page')
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage - 1})`).addClass('active');
    // console.log(start,end);
    getCurrentPage(currentPage);
    renderProduct();
})

