function Experience({
	heavyUseTech,
	mediumUseTech = "",
	lowUseTech = "",
	others = "",
	css,
}: {
	heavyUseTech: string,
	mediumUseTech?: string,
	lowUseTech?: string,
	others?: string,
	css?: React.CSSProperties,
}): React.JSX.Element {
	return (
		<pre style={{ margin: "0", padding: "0", display: "flex", justifyContent: "space-around", flexDirection: "column", ...css }}>
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
export default Experience;