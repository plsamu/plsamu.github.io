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
	RAL?: string
}): React.JSX.Element {
	return (
		<pre style={{ margin:"0", padding:"0", display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
			<LinkToBlank url={url} text={name} css={{ display: "inline", padding:"0", margin:"0" }} />
			<div>{workPosition}</div>
			{dates.map((date, index) => {
				return <div>{date}</div>
			})}
			<div style={{ display: "flex" }}>
				<div style={{ flex: "1" }}>Most used tech</div>
				<div style={{ flex: "2" }}>{heavyUseTech}</div>
			</div>
			{
				mediumUseTech !== "" ?
					<div style={{ display: "flex" }}>
						<div style={{ flex: "1" }}>Medium used tech</div>
						<div style={{ flex: "2" }}>{mediumUseTech}</div>
					</div> : null
			}
			{
				lowUseTech !== "" ?
					<div style={{ display: "flex" }}>
						<div style={{ flex: "1" }}>Low used tech</div>
						<div style={{ flex: "2" }}>{mediumUseTech}</div>
					</div> : null
			}
			{others !== "" ? <div>{others}</div> : null}
		</pre>
	)
}
export default WorkExp;