let userlist = []; //list of all the users

let gallery = document.getElementById("gallery");

search(); //generates search component
fetchUser(); //fetches 12 users and adds them to each card

//===================================================
 
/*let gallery = document.getElementById("gallery");
 
let card = document.createElement("div");
card.setAttribute("class", "card");
 
let card_img_container = document.createElement("div");
card_img_container.setAttribute("class", "card-img-container");
 
let card_img = document.createElement("img");
card_img.setAttribute("class", "card-img");
card_img.setAttribute("src", "https://placehold.it/90x90");
card_img.setAttribute("alt", "profile picture")
 
card_img_container.appendChild(card_img);
card.appendChild(card_img_container);
gallery.appendChild(card);
 
let card_info_container = document.createElement("div");
card_info_container.setAttribute("class", "card-info-container");
 
let card_name = document.createElement("h3");
card_name.setAttribute("id", "name");
card_name.setAttribute("class", "card-name cap");
card_name.innerHTML = "First Last";
 
let card_email = document.createElement("p");
card_email.setAttribute("class", "card-text");
card_email.innerHTML = "email";
 
let card_cap = document.createElement("p");
card_cap.setAttribute("class", "card-text cap");
card_cap.innerHTML = "city, state";
 
card_info_container.appendChild(card_name);
card_info_container.appendChild(card_email);
card_info_container.appendChild(card_cap);
 
card.appendChild(card_info_container);*/
 
//===================================================
 
/*let modal_container = document.createElement("div");
modal_container.setAttribute("class", "modal-container");
 
document.body.appendChild(modal_container);
 
let modal = document.createElement("div");
modal.setAttribute("class", "modal");
 
modal_container.appendChild(modal);
 
let modal_close_btn = document.createElement("button");
modal_close_btn.setAttribute("id", "modal-close-btn");
modal_close_btn.setAttribute("class", "modal-close-btn");
 
modal.appendChild(modal_close_btn);
 
let modal_close_btn_x = document.createElement("strong");
modal_close_btn.innerHTML = "X";
 
modal_close_btn.appendChild(modal_close_btn_x);
 
let modal_info_container = document.createElement("div");
modal_info_container.setAttribute("class", "modal-info-container");
 
modal.appendChild(modal_info_container);
 
let modal_img = document.createElement("img");
modal_img.setAttribute("class", "modal-img");
modal_img.setAttribute("src", "https://placehold.it/125x125");
modal_img.setAttribute("alt", "profile picture");
 
modal_info_container.appendChild(modal_img);
 
let modal_name_cap = document.createElement("h3");
modal_name_cap.setAttribute("id", "name");
modal_name_cap.setAttribute("class", "modal-name cap");
modal_name_cap.innerHTML = "name";
 
modal_info_container.appendChild(modal_name_cap);
 
let modal_email = document.createElement("p");
modal_email.setAttribute("class", "modal-text");
modal_email.innerHTML = "email";
 
modal_info_container.appendChild(modal_email);
 
let modal_city = document.createElement("p");
modal_city.setAttribute("class", "modal-text cap");
modal_city.innerHTML = "city";
 
modal_info_container.appendChild(modal_city);
 
let modal_hr = document.createElement("hr");
 
modal_info_container.appendChild(modal_hr);
 
let modal_phone = document.createElement("p");
modal_phone.setAttribute("class", "modal-text");
modal_phone.innerHTML = "(555) 555-5555";
 
modal_info_container.appendChild(modal_phone);
 
let modal_address = document.createElement("p");
modal_address.setAttribute("class", "modal-text");
modal_address.innerHTML = "123 Portland Ave., Portland, OR 97204";
 
modal_info_container.appendChild(modal_address);
 
let modal_birthday = document.createElement("p");
modal_birthday.setAttribute("class", "modal-text");
modal_birthday.innerHTML = "Birthday: 10/21/2015";
 
modal_info_container.appendChild(modal_birthday);*/