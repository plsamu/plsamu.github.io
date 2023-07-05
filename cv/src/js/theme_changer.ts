export default function toogleThemeColor() {
	let localStorage = window.localStorage;
	console.log("localStorage theme: ", localStorage.theme);
	if (localStorage.theme === undefined) {
		localStorage.setItem('theme', 'light');
	}
	// window.matchMedia('(prefers-color-scheme: dark)').matches
	if (localStorage.theme === 'dark') {
		console.log("remove dark")
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add('light')
		localStorage.setItem('theme', 'light');
	} else {
		console.log("add dark")
		document.documentElement.classList.remove('light')
		document.documentElement.classList.add('dark')
		localStorage.setItem('theme', 'dark');
	}
}