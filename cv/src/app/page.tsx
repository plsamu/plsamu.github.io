import DetailsContainer from "@/components/details"

export default function Home() {
	return (
		<main className="flex">
			<DetailsContainer children summaryText={"Qualifications"} contentText={"Degree"} />
		</main>
	)
}
