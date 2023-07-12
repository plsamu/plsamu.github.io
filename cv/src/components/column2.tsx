import DetailsContainer from "./details";

function Column2(): React.JSX.Element {
	return (
		<div className="column2">
			<DetailsContainer children summaryText={"Qualifications"} contentText={"Degree"} />
		</div>
	)
}
export default Column2;