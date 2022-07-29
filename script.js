
class Shop {
    /**
     * 
     * @param {string} name 
     * @param {Item[]} products
     * @param {string} address 
     * @param {Vendor} vendor
     */
    constructor(name, address) {
        this.name = name;
        this.products = [];
        this.vendors = [];
        this.address = address;
    }

    addVendor(vendor) {
        let findVendor = this.vendors.find((value) => value.name === vendor.name);
        if (!findVendor) {
            this.vendors.push(vendor);
        } else {
            throw new Error(`${vendor.name} is already in the shop`);
        }
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
}

class Item {
    /**
     * 
     * @param {string} name 
     * @param {number} quantity 
     * @param {number} price 
     * @param {string} vendorName
     * @param {string} imgURL 
     */
    constructor(name, quantity, price, vendorName, imgURL) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.vendorName = vendorName;
        this.imgURL = imgURL;
    }
}


class Vendor {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
}

let corsairVendor = new Vendor("Corsair Company", "California - US");

let listItems = [
    new Item(
        "Corsair M65",
        100,
        62,
        "Corsair Company",
        "https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png"
    ),
    new Item(
        "IRONCLAW RGB WIRELESS",
        2,
        89,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/h2f/h71/9212227518494/-CH-9317011-NA-Gallery-IRONCLAW-RGB-WIRELESS-01.png"
    ),

    new Item(
        "HARPOON RGB",
        23,
        29,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/h24/h83/9439530975262/-CH-9301011-NA-Gallery-HARPOON-RGB-01.png"
    ),

    new Item(
        "KATAR PRO Ultra-Light",
        20,
        32,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/hf7/h63/9586833195038/base-katar-pro-config/Gallery/KATAR_PRO_WIRED_01/-base-katar-pro-config-Gallery-KATAR-PRO-WIRED-01.png_1200Wx1200H"
    ),

    new Item(
        "SABRE PRO CHAMPION SERIES",
        200,
        40,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/hcd/h1b/9764375330846/base-sabre-pro-champion/Gallery/CH-9303101_01/-base-sabre-pro-champion-Gallery-CH-9303101-01.png_1200Wx1200H"
    ),

    new Item(
        "KATAR PRO XT Ultra-Light",
        89,
        44,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/h08/h9f/9653707997214/base-katar-pro-xt-config/Gallery/KATAR_PRO_XT_01/-base-katar-pro-xt-config-Gallery-KATAR-PRO-XT-01.png_1200Wx1200H"
    ),

    new Item(
        "NIGHTSWORD RGB",
        10,
        59,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/h0c/h29/9246076633118/-CH-9306011-NA-Gallery-NIGHTSWORD-RGB-01.png"
    ),

    new Item(
        "SABRE PRO RGB WIRELESS",
        32,
        99,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/hcb/h9a/9847163322398/base-sabre-rgb-pro-wireless-champion/Gallery/SABRE_RGB_PRO_WIRELESS_01/-base-sabre-rgb-pro-wireless-champion-Gallery-SABRE-RGB-PRO-WIRELESS-01.png_1200Wx1200H"
    ),

    new Item(
        "M65 RGB ULTRA WIRELESS",
        55,
        129,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/he6/h14/9877849866270/base-m65-rgb-ultra-wireless-config/Gallery/M65_RGB_ULTRA_WIRELESS_01/-base-m65-rgb-ultra-wireless-config-Gallery-M65-RGB-ULTRA-WIRELESS-01.png_1200Wx1200H"
    ),

    new Item(
        "Cosair M55 RGB PRO BLACK",
        5,
        35,
        "Corsair Company",
        "https://www.corsair.com/medias/sys_master/images/images/h80/h26/9236962869278/-CH-9308011-NA-Gallery-M55-RGB-PRO-BLACK-01.png"
    )

    
    
];

let shop = new Shop("Market 1", "214 Narcos");
shop.addVendor(corsairVendor);
for (let item of listItems) {
    shop.addProduct(item);
}
console.log(shop.getProducts());


/**
 * 
 * @param {Item} item 
 * @returns 
 */

function createItemElm(item){
    let itemElm = document.createElement("div");
    itemElm.className ="box pink";
    itemElm.innerHTML =`
    <div class="card">

    <div class="imgBox">
        <img src="${item.imgURL}"
            alt="mouse corsair" class="mouse">
    </div>

    <div class="contentBox">
        <h3>${item.name}</h3>
        <h2 class="price">${item.price} €</h2>
        <a href="#" class="buy">Buy Now</a>
    </div>

</div>`;
    return itemElm;
}
let parent = document.getElementsByClassName("parent")[0];

for (let i=0; i<listItems.length; i++){
    let newItem = createItemElm(listItems[i]);
    parent.appendChild(newItem);
}