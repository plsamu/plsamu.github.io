import { CSSProperties } from "react";

function LinkToBlank({ url, text, css }: { url: string; text: string, css?: CSSProperties }): React.JSX.Element {
	return <div style={{display: "inline"}}>
		<a href={url} target="_blank" style={css}>{text}</a>
	</div>
}
export default LinkToBlank;