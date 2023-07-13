function DetailsContainer({
	children, summaryText
}: {
	children: null | React.ReactNode;
	summaryText: string;
}): React.JSX.Element {
	// <pre className="details-content">{obj.contentText}</pre>
	return (
		<details className="unselectable">
			<summary className="unselectable">{summaryText}</summary>
			<pre className="unselectable details-content">
				{children}
			</pre>
		</details>
	)
}
export default DetailsContainer;