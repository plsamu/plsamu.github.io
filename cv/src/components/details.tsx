function DetailsContainer({
	children, summaryText, css
}: {
	children: null | React.ReactNode;
	summaryText: string;
	css?: React.CSSProperties;
}): React.JSX.Element {
	// <pre className="details-content">{obj.contentText}</pre>
	return (
		<details className="unselectable" style={css}>
			<summary className="unselectable">{summaryText}</summary>
			<pre className="unselectable details-content">
				{children}
			</pre>
		</details>
	)
}
export default DetailsContainer;