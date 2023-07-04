import DetailsContainer from "@/components/details"
import LinkToBlank from "@/components/link_to_blank"

export default function Home() {
	return (
		<main>
			<div className="row">
				<div className="column1">
					<p>Samuele Plescia</p>
					<LinkToBlank url={"https://github.com/plsamu?tab=repositories"} text={"github repository"} />
				</div>
				<div className="column2">
					<DetailsContainer children summaryText={"Qualifications"} contentText={"Degree"} />
				</div>
			</div>
		</main>
	)
}
