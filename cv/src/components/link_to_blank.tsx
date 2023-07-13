import { CSSProperties } from "react";

function LinkToBlank({ url, text, css }: { url: string; text: string, css?: CSSProperties }): React.JSX.Element {
	return <div style={{paddingTop:"5px", marginBottom:"5px"}}>
		<a href={url} target="_blank" style={{ display: "inline", ...css}}>{text}</a>
	</div>
}
export default LinkToBlank;