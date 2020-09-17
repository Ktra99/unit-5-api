let proxy = "https://cors-anywhere.herokuapp.com/"; //https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
let target = "https://randomuser.me/api/?results=12";

const fetchUser = () => {
	fetch(target) //fetches the api
	.then(response => response.json()) //recieve the data as json
	.then(data => createUser(data.results)) //creates user with the data
}

const createUser = (users) => {
	for (let i = 0; i <= 11; i++) {

		//adding data attribute values contaning info that will be implemented into the modal info section
		let phone = users[i].phone;
		let full_address = users[i].location.street.number + " " + users[i].location.street.name + ", " + users[i].location.city + " " + users[i].location.postcode;
		let date_uncut = users[i].dob.date;
		let day = date_uncut.substring(8, 10);
		let month = date_uncut.substring(5, 7);
		let year = date_uncut.substring(0, 4);

		//generating the card component

		let card = document.createElement("div");
		card.setAttribute("class", "card");
		card.setAttribute("data-phone", phone);
		card.setAttribute("data-address", full_address);
		card.setAttribute("data-dob", day + "/" + month + "/" + year);

		userlist.push(card);
		
		let card_img_container = document.createElement("div");
		card_img_container.setAttribute("class", "card-img-container");
		
		let card_img = document.createElement("img");
		card_img.setAttribute("class", "card-img");
		card_img.setAttribute("src", users[i].picture.large);
		card_img.setAttribute("alt", "profile picture")
		
		card_img_container.appendChild(card_img);
		card.appendChild(card_img_container);

		let card_info_container = document.createElement("div");
		card_info_container.setAttribute("class", "card-info-container");

		let card_name = document.createElement("h3");
		card_name.setAttribute("id", "name");
		card_name.setAttribute("class", "card-name cap");

		let firstname = users[i].name.first;
		let lastname = users[i].name.last;

		card_name.innerHTML = firstname + " " + lastname;

		let card_email = document.createElement("p");
		card_email.setAttribute("class", "card-text");
		card_email.innerHTML = users[i].email;

		let card_cap = document.createElement("p");
		card_cap.setAttribute("class", "card-text cap");
	
		let city = users[i].location.city;
		let state = users[i].location.state;

		card_cap.innerHTML = city + ", " + state;

		card_info_container.appendChild(card_name);
		card_info_container.appendChild(card_email);
		card_info_container.appendChild(card_cap);
 
		card.appendChild(card_info_container);
	}
	for(user of userlist){
		//appends each user to the page
		gallery.appendChild(user);

		//adds an event listener to each card that looks for a click 
		user.addEventListener("click", (event) => {

			//variables that will be used to display modal info
			let image, name, email, address, cell, full_addr, dob;


			//based on where the user clicked the info will be found through different pathways
			if(event.target.className == "card-img"){
				image = event.target.getAttribute("src");
				name = event.target.parentElement.parentElement.children[1].children[0].innerHTML;
				email = event.target.parentElement.parentElement.children[1].children[1].innerHTML;
				address = event.target.parentElement.parentElement.children[1].children[2].innerHTML;
				cell = event.target.parentElement.parentElement.dataset.phone;
				full_addr = event.target.parentElement.parentElement.dataset.address;
				dob = event.target.parentElement.parentElement.dataset.dob;
			}
			else if(event.target.className == "card"){
				image = event.target.children[0].children[0].getAttribute("src");
				name = event.target.children[1].children[0].innerHTML;
				email = event.target.children[1].children[1].innerHTML;
				address = event.target.children[1].children[2].innerHTML;
				cell = event.target.dataset.phone;
				full_addr = event.target.dataset.address;
				dob = event.target.dataset.dob;

			}
			else if(event.target.className == "card-info-container"){
				image = event.target.parentElement.children[0].children[0].getAttribute("src");
				name = event.target.children[0].innerHTML;
				email = event.target.children[1].innerHTML;
				address = event.target.children[2].innerHTML;
				cell = event.target.parentElement.dataset.phone;
				full_addr = event.target.parentElement.dataset.address;
				dob = event.target.parentElement.dataset.dob;

			}
			else if(event.target.className == "card-img-container"){
				image = event.target.children[0].getAttribute("src");
				name = event.target.parentElement.children[1].children[0].innerHTML;
				email = event.target.parentElement.children[1].children[1].innerHTML;
				address = event.target.parentElement.children[1].children[2].innerHTML;
				cell = event.target.parentElement.dataset.phone;
				full_addr = event.target.parentElement.dataset.address;
				dob = event.target.parentElement.dataset.dob;
			}
			else{
				image = event.target.parentElement.parentElement.children[0].children[0].getAttribute("src");
				name = event.target.parentElement.parentElement.children[1].children[0].innerHTML;
				email = event.target.parentElement.parentElement.children[1].children[1].innerHTML;
				address = event.target.parentElement.parentElement.children[1].children[2].innerHTML;
				cell = event.target.parentElement.parentElement.dataset.phone;
				full_addr = event.target.parentElement.parentElement.dataset.address;
				dob = event.target.parentElement.parentElement.dataset.dob;
			}

			//generating modal component

			let modal_container = document.createElement("div");
			modal_container.setAttribute("class", "modal-container");
			 
			document.body.appendChild(modal_container);
			 
			let modal = document.createElement("div");
			modal.setAttribute("class", "modal");
			 
			modal_container.appendChild(modal);
			 
			let modal_close_btn = document.createElement("button");
			modal_close_btn.setAttribute("id", "modal-close-btn");
			modal_close_btn.setAttribute("class", "modal-close-btn");

			modal_close_btn.addEventListener("click", () => {
				document.body.removeChild(modal_container);
			})
			 
			modal.appendChild(modal_close_btn);
			 
			let modal_close_btn_x = document.createElement("strong");
			modal_close_btn.innerHTML = "X";
			 
			modal_close_btn.appendChild(modal_close_btn_x);
			 
			let modal_info_container = document.createElement("div");
			modal_info_container.setAttribute("class", "modal-info-container");
			 
			modal.appendChild(modal_info_container);
			 
			let modal_img = document.createElement("img");
			modal_img.setAttribute("class", "modal-img");
			modal_img.setAttribute("src", image);
			modal_img.setAttribute("alt", "profile picture");
			 
			modal_info_container.appendChild(modal_img);
			 
			let modal_name_cap = document.createElement("h3");
			modal_name_cap.setAttribute("id", "name");
			modal_name_cap.setAttribute("class", "modal-name cap");
			modal_name_cap.innerHTML = name;
			 
			modal_info_container.appendChild(modal_name_cap);
			 
			let modal_email = document.createElement("p");
			modal_email.setAttribute("class", "modal-text");
			modal_email.innerHTML = email;
			 
			modal_info_container.appendChild(modal_email);
			 
			let modal_city = document.createElement("p");
			modal_city.setAttribute("class", "modal-text cap");
			modal_city.innerHTML = address;
			 
			modal_info_container.appendChild(modal_city);
			 
			let modal_hr = document.createElement("hr");
			 
			modal_info_container.appendChild(modal_hr);
			 
			let modal_phone = document.createElement("p");
			modal_phone.setAttribute("class", "modal-text");
			modal_phone.innerHTML = cell;
			 
			modal_info_container.appendChild(modal_phone);
			 
			let modal_address = document.createElement("p");
			modal_address.setAttribute("class", "modal-text");
			modal_address.innerHTML = full_addr;
			 
			modal_info_container.appendChild(modal_address);
			 
			let modal_birthday = document.createElement("p");
			modal_birthday.setAttribute("class", "modal-text");
			modal_birthday.innerHTML = dob;
			 
			modal_info_container.appendChild(modal_birthday);
		})
	}
}