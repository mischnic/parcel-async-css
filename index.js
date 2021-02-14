let [a, b] = document.querySelectorAll("button");

a.onclick = () => {
	import("./a.js");
};

b.onclick = () => {
	import("./b.js");
};
