import { setThemeDark, setThemeLight } from '@/js/theme_changer';
import '../css/toggle-theme-changer.css'
import { ChangeEvent, useEffect, useState } from 'react';

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
			<span className='toggleThemeSpan'>Light</span>
		</div>
	</div>

}
export default ToggleThemeChanger;
