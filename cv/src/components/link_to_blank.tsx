import { CSSProperties } from "react";

function LinkToBlank({ url, text, css }: { url: string; text: string, css?: CSSProperties }): React.JSX.Element {
	return <a href={url} target="_blank" style={css}>{text}</a>
}
export default LinkToBlank;