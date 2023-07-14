import Experience from "./experience";
import LinkToBlank from "./link_to_blank";

function WorkExp({
	name,
	url,
	workPosition,
	dates,
	heavyUseTech,
	mediumUseTech = "",
	lowUseTech = "",
	others = "",
	css,
	RAL,
}: {
	name: string;
	url: string,
	workPosition: string,
	dates: string[],
	heavyUseTech: string,
	mediumUseTech?: string,
	lowUseTech?: string,
	others?: string,
	css?: React.CSSProperties,
	RAL?: string
}): React.JSX.Element {
	return (
		<pre style={{ margin: "0", padding: "0", display: "flex", justifyContent: "space-around", flexDirection: "column", ...css }}>
			<LinkToBlank url={url} text={name} css={{ /* display: "inline", */ padding: "0", margin: "0", fontSize: "20px", fontWeight: "bold" }} />
			<br></br>
			<div>{workPosition}</div>
			<br></br>
			{dates.map((date, index) => {
				return <div key={index}>{date}</div>
			})}
			<br></br>
			<Experience heavyUseTech={heavyUseTech} mediumUseTech={mediumUseTech} lowUseTech={lowUseTech} others={others} />
		</pre>
	)
}
export default WorkExp;