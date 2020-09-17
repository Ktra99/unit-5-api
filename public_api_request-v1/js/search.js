const search = () => {
	let search_container = document.getElementsByClassName("search-container")[0];
	let form = document.createElement("form");
	form.setAttribute("action", "#");
	form.setAttribute("method", "get");
	let input = document.createElement("input");
	input.setAttribute("type", "search");
	input.setAttribute("id", "search-input");
	input.setAttribute("class", "search-input");
	input.setAttribute("placeholder", "Search...");
	let submit = document.createElement("input");
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "🔍"); //&#x1F50D; didn't work properly
	submit.setAttribute("id", "search-submit");
	submit.setAttribute("class", "search-submit");
	form.appendChild(input);
	form.appendChild(submit);
	search_container.appendChild(form);
}