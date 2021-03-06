var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
if(xhr.readyState === 4){
    var recipe = JSON.parse(xhr.responseText);
    var item = "";
    var item2 = "";
    var item3 = "";
    for(var i = 0; i < recipe.length; i++){
        if(recipe[i].featured === true){
            item2 += `<img class="mb-4" src=${recipe[i].image} style="height:47vh; width: 34vw; border-radius: 25px"/>`;
            item2 += `<div class="overlay-desc">`;
            item2 += `<p class="overlay-p">Featured</p>`;
            item2 += `<div class="ftr-desc">`;
            item2 += `<p class="ftr-name">${recipe[i].name}</p>`;
            item2 += `<p class="ftr-d">${recipe[i].description}</p>`;
            item2 += `</div>`;
            item2 += `</div>`;
            document.getElementById("featured").innerHTML=item2;
            item3 += `<div class="text-center pt-3 pb-2">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="32" height="32"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="#ecf0f1"></path><g fill="#000000"><path d="M86,10.33008l-4.95507,11.75781l-17.04883,40.48047l-53.33007,5.79492l39.89257,37.625l-11.33789,55.51368l46.77929,-28.47071l46.7373,28.47071l-11.2959,-55.51368l39.85058,-37.625l-53.28808,-5.79492zM86,38.00293l14.57129,34.55957l36.44922,3.94727l-27.29493,25.7832l7.55859,37.20508l-31.28418,-19.06446l-31.32617,19.06446l7.60058,-37.20508l-27.25293,-25.7832l36.40722,-3.94727z"></path></g></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="32" height="32"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="#ecf0f1"></path><g fill="#000000"><path d="M86,10.75l-21.79395,51.6504l-53.45605,5.83691l39.97656,37.75098l-11.25391,55.26172l46.52734,-28.34473l46.52734,28.34473l-11.25391,-55.26172l39.97656,-37.75098l-53.45605,-5.83691z"></path></g></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="32" height="32"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="#ecf0f1"></path><g fill="#000000"><path d="M86,10.75l-21.79395,51.6504l-53.45605,5.83691l39.97656,37.75098l-11.25391,55.26172l46.52734,-28.34473l46.52734,28.34473l-11.25391,-55.26172l39.97656,-37.75098l-53.45605,-5.83691z"></path></g></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="32" height="32"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="#ecf0f1"></path><g fill="#000000"><path d="M86,10.75l-21.79395,51.6504l-53.45605,5.83691l39.97656,37.75098l-11.25391,55.26172l46.52734,-28.34473l46.52734,28.34473l-11.25391,-55.26172l39.97656,-37.75098l-53.45605,-5.83691z"></path></g></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="32" height="32"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="#ecf0f1"></path><g fill="#000000"><path d="M86,10.75l-21.79395,51.6504l-53.45605,5.83691l39.97656,37.75098l-11.25391,55.26172l46.52734,-28.34473l46.52734,28.34473l-11.25391,-55.26172l39.97656,-37.75098l-53.45605,-5.83691z"></path></g></g></svg>
                        </div>`;
            item3 += `<div class="pb-5 text-end customer rounded-top px-2 py-3" style="background: #ECF0F1">325/543 customers rated this dish as the top dish.</div>`
            item3 += `<div class="bg-dark text-light px-3 py-4" style="border-radius: 0 0 20px 20px">${recipe[i].review}</div>`;
            document.getElementById('ratings').innerHTML = item3;
        }else{
            item += `<div class="item col-sm-12 col-lg-6 col-xl-4">`;
            item += `<div class="row my-3">`;
            item += `<div class="col-sm-6 col-lg-6">`;
            item += `<img style="max-width: 120px; min-width: 100px; max-height: 100px; min-height: 80px" src="${recipe[i].image}"/>`;
            item += `</div>`;
            item += `<div class="data col-sm-6 col-md-5 col-lg-6">`;
            item += `<p class="fw-bold mt-3 mb-0">${recipe[i].name}</p>`;
            item += `<p class="description my-1">${recipe[i].description}</p>`;
            item += `<a class="item-btn" href="https://justcook.butcherbox.com/recipes/" target="_blank">GO</a>`;
            item += `</div>`;
            item += `</div>`;
            item += `</div>`;
        }
    }
    document.getElementById("items").innerHTML=item;
}
};
xhr.open('GET', 'data.json');
xhr.send();
