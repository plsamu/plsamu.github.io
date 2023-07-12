import { setThemeDark, setThemeLight } from '@/js/theme_changer';
import '../css/toggle-theme-changer.css'
import { useEffect, useState } from 'react';

function ToggleThemeChanger(): React.JSX.Element {
	const [checked, setChecked] = useState<boolean>();
	useEffect(() => {
		let theme = window.localStorage.theme
		if (theme === 'dark' || theme === undefined) {
			setThemeDark()
			setChecked(true)
		} else {
			setThemeLight()
			setChecked(false)
		}
	}, [])

	function handleOnChange() {
		let theme = window.localStorage.theme
		theme === undefined || theme === 'dark' ? setThemeLight() : setThemeDark()
		setChecked((state) => !state)
	}

	// do not use onChange...
	return <div className='toggleThemeContainerRoot'>
		<div className='toggleThemeContainer'>
			<input onClick={handleOnChange} type="checkbox" className="toggle" defaultChecked={checked} />
			<div style={{
				width: "98%", 
				height: "100%", 
				display: "flex", 
				flexDirection: "row", 
				alignItems: "center",
			}}>
				<span className='toggleThemeSpan'>Light</span>
				<span className='toggleThemeSpan'>Dark</span>
			</div>
		</div>
	</div>

}
export default ToggleThemeChanger;
