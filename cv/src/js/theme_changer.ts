export default function toogleThemeColor() {
	let localStorage = window.localStorage;
	if (localStorage.theme === undefined) {
		localStorage.setItem('theme', 'dark');
	}
	console.log("actual theme in localStorage: ", localStorage.theme);
	if (localStorage.theme === 'dark') {
		console.log("remove dark")
		document.documentElement.setAttribute("data-theme", "light");
		// document.documentElement.classList.remove('dark')
		// document.documentElement.classList.add('light')
		localStorage.setItem('theme', 'light');
	} else {
		console.log("add dark")
		document.documentElement.setAttribute("data-theme", "dark");
		// document.documentElement.classList.remove('light')
		// document.documentElement.classList.add('dark')
		localStorage.setItem('theme', 'dark');
	}
}