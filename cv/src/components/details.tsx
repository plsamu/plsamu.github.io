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
			<div className="unselectable details-content">
				{children}
			</div>
		</details>
	)
}
export default DetailsContainer;