function LinkToBlank({ url, text }: { url: string; text: string }): React.JSX.Element {
	return <a href={url} target="_blank">{text}</a>
}
export default LinkToBlank;