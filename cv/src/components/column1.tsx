import LinkToBlank from "./link_to_blank";

function Column1(): React.JSX.Element {
let title = String.raw`Languages:
x/10    W R X
Italian 9 9 8
English 7 8 7
Spanish 5 8 6
`;
	return (
		<div className="column1 unselectable">
			<p>Samuele Plescia</p>
			<pre>{title}</pre>
			<LinkToBlank url={"https://github.com/plsamu?tab=repositories"} text={"github repository"} />
			<LinkToBlank url={"https://sp0.gitbook.io"} text={"gitbook"} />
			<LinkToBlank url={"https://www.linkedin.com/in/samueleplescia/"} text={"linkedin"} />
		</div>
	)
}
export default Column1;