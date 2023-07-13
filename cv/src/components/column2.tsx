import DetailsContainer from "./details";
import LinkToBlank from "./link_to_blank";

function Column2(): React.JSX.Element {

	return (
		<div className="column2">
			<DetailsContainer summaryText={"Qualifications"}>
				Bachelor's degree in Computer Science (L-31)
				<br></br>
				Thesis: <LinkToBlank
					url={"https://computerscience.unicam.it/marcantoni/tesi/Tor%20da%20frontend%20Android%20a%20backend.pdf"}
					text={"Tor, da frontend Android a backend"} 
					css={{display:"inline"}}
					/>
			</DetailsContainer>
		</div>
	)
}
export default Column2;