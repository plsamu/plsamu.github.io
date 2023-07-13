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
				return <div>{date}</div>
			})}
			<br></br>
			<div style={{ display: "flex" }}>
				<div style={{ flex: "1", borderRight: "1px solid var(--border-color)" }}>Most used tech</div>
				<div style={{ flex: "2", marginLeft: "10px" }}>{heavyUseTech}</div>
			</div>
			<br></br>
			{
				mediumUseTech !== "" ? <>
					<div style={{ display: "flex" }}>
						<div style={{ flex: "1", borderRight: "1px solid var(--border-color)" }}>Medium used tech</div>
						<div style={{ flex: "2", marginLeft: "10px" }}>{mediumUseTech}</div>
					</div>
					<br></br>
				</>
					: null
			}
			{
				lowUseTech !== "" ? <>
					<div style={{ display: "flex" }}>
						<div style={{ flex: "1", borderRight: "1px solid var(--border-color)" }}>Low used tech</div>
						<div style={{ flex: "2", marginLeft: "10px" }}>{lowUseTech}</div>
					</div><br></br>
				</>
					: null
			}
			{others !== "" ? <div>{others}</div> : null}
		</pre>
	)
}
export default WorkExp;