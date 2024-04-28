let bagItems=[];
onLoad();


function onLoad(){
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr?JSON.parse(bagItemsStr):[];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon();
}
function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
    bagItemCountElement.innerText = bagItems.length;
    }else{
        bagItemCountElement.style.visibility='hidden';
    }
}




function displayItemsOnHomePage(){
let itemsContainerElement =document.querySelector('.items-container');
if(!itemsContainerElement){
    return;
}


const items =[{
    id:'000',
    image:'images/iamges-1.jpg',
    rating:{
        stars:4.5,
        noOfReviews:1400,

    },
    company_name:'ZARYAN ORIENTAL CARPETS',
    item_name:'Soft Fluffy Shag Area Rugs for Living Room',
    current_price: 606,
    original_price: 1045,
    discount_percentage:42,
},
{
id:'001',
image:'images/images-15.jpg',
company_name:'MCLORD AQUA RENO R.O WATER PURIFIER ',
item_name:'RO+UV+COPPER WITH ZINC+MTDS ',
original_price:2599,
current_price:1507,
discount_percentage:42,
rating:{
    stars:4.3,
    noOfReviews:45,
},
},
{
    id:'002',
    image:'images/image-8.jpg',
    rating:{
        stars:4.6,
        noOfReviews:2300,

    },
    company_name:'GIGLICK ',
    item_name:'4XL Superior-Grade Faux Leather Filled with Beans Bean Bag ',
    current_price: 1875,
    original_price: 1999,
    discount_percentage:33,
},
{
    id:'003',
    image:'images/images-13.jpg',
    rating:{
        stars:4.7,
        noOfReviews:875,

    },
    company_name:'Comforto Hybrid Mattress',
    item_name:'Queen Size Mattress | Pocket Spring with Orthopedic',
    current_price: 12355,
    original_price: 13999,
    discount_percentage:31,
},
{
    id:'004',
    image:'images/images-14.jpg',
    rating:{
        stars:4.3,
        noOfReviews:16750,

    },
    company_name:'A to Z FurnitureModern',
    item_name:'Classic 4 Seater Fabric & Valvet Tufted 3+1 one ',
    current_price: 34999,
    original_price: 40001,
    discount_percentage:45,
},
{
    id:'005',
    image:'images/images-16.jpg',
    rating:{
        stars:4.8,
        noOfReviews:7856,

    },
    company_name:'iQOO Z7s 5G by vivo',
    item_name:' Ultra Bright AMOLED Display |  6nm Processor ',
    current_price: 20999,
    original_price: 22500,
    discount_percentage:45,
},
{
    id:'006',
    image:'images/images-17.jpg',
    rating:{
        stars:4.9,
        noOfReviews:3700,

    },
    company_name:'LEZINO ',
    item_name:'Manual Recliner Sofa in Black Color Leatherette ',
    current_price: 17900,
    original_price: 20000,
    discount_percentage:45,
},
{
    id:'007',
    image:'images/images-18.webp',
    rating:{
        stars:4.5,
        noOfReviews:3467,

    },
    company_name:'DHANVI AQUA ',
    item_name:'Black Color Copper RO Water Purifier with UV',
    current_price: 4399,
    original_price: 5000,
    discount_percentage:49,
},
{
    id:'008',
    image:'images/images-19.jpg',
    rating:{
        stars:4.8,
        noOfReviews:1678,

    },
    company_name:'SHINE WOOD ART',
    item_name:'3 +2 Seater Luxary Designed Velvet Tuffted Sofa',
    current_price: 13499,
    original_price: 15999,
    discount_percentage:59,
},
{
    id:'009',
    image:'images/images-22.jpg',
    rating:{
        stars:4.5,
        noOfReviews:1120,

    },
    company_name:'ENDEAVOUR',
    item_name:'WEAR Mens Regular Fit Trackpants ',
    current_price: 599,
    original_price: 799,
    discount_percentage:23,
},
{
    id:'010',
    image:'images/images-20.jpg',
    rating:{
        stars:4.5,
        noOfReviews:3564,

    },
    company_name:'rts Universal ',
    item_name:'International All in One Worldwide Travel Adapter ',
    current_price: 587,
    original_price: 800,
    discount_percentage:67,
},
{
    id:'011',
    image:'images/images-21.jpg',
    rating:{
        stars:4.9,
        noOfReviews:1234,

    },
    company_name:'ASHARAFI RUGS',
    item_name:' Carpets for Living Room Handwoven 3D ',
    current_price: 1299,
    original_price: 2500,
    discount_percentage:45,
},


]
let innerHTML='';
items.forEach(item=>{

    innerHTML+=`<div class="item-container">
    <img class="item-image"src="${item.image}" alt="item image">
    <div class="rating">
      ${item.rating.stars} ⭐| ${item.rating.noOfReviews} </div>
    <div class="company-name">${item.company_name}</div>
    <div class="item-name">${item.item_name}
    </div>
    <div class="price">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price">${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
<button class="btn-add-bag" onclick ="addToBag(${item.id})">    Add to Bag      </button>

</div>`
})

itemsContainerElement.innerHTML=innerHTML;
}