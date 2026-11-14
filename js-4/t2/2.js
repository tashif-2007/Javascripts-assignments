const target = document.querySelector("#target");

const first_list = document.createElement("li");
first_list.appendChild(document.createTextNode("First item"));
target.appendChild(first_list);

const second_list = document.createElement("li");
second_list.appendChild(document.createTextNode("Second item"));
target.appendChild(second_list);

second_list.classList.add("my-item");

const third_list = document.createElement("li");
third_list.appendChild(document.createTextNode("Third item"));
target.appendChild(third_list);
