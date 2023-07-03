function DetailsContainer(obj: {
	children: null | React.ReactNode;
	summaryText: string;
	contentText: string;
}): React.JSX.Element {
	return (
		<details className="unselectable">
			<summary className="unselectable">{obj.summaryText}</summary>
			<div className="unselectable details-content">{obj.contentText}</div>
		</details>
	)
}
export default DetailsContainer;