import DetailsContainer from "./details";
import LinkToBlank from "./link_to_blank";
import WorkExp from "./work-exp";

function Column2(): React.JSX.Element {
	return (
		<div className="column2">
			<DetailsContainer summaryText={"Working experiences"}>
				<WorkExp
					name="Nautes SRL"
					url="https://www.nautes.com/it"
					workPosition="Frontend Android Dev"
					dates={[
						"05/2021 -> 08/2021, University internship",
						"09/2021 -> 12/2021, Work stage contract",
						"01/2022 -> 09/2022, Apprenticeship contract"
					]}
					heavyUseTech="Android Kotlin, RX Java, Retrofit, Android Studio, Android Room, creation of npm packages, bash, Gradle build system, aar bundle"
					mediumUseTech="Git, Github, POP_OS, Conventional Commit, Git Flow, React Native"
					others="Never worked with libraries, or framework for complex animations."
				/>
				<WorkExp
					name="aizoOn"
					url="https://www.aizoongroup.com"
					workPosition="Backend Dev - Cyber Software Engineer"
					dates={["10/2022 -> presente, Apprenticeship contract"]}
					heavyUseTech="Java Spring Boot, Spring Security, Maven, Docker, MongoDB, Mongo Compass, MySQL, DBeaver, Joplin, IntelliJ, MobaXterm, GitLab"
					mediumUseTech="NodeJS"
					lowUseTech="Kafka, Zeek"
					css={{ marginTop: "20px" }}
				/>
			</DetailsContainer>
			<DetailsContainer summaryText={"Qualifications and licenses"}>
				Bachelor's degree in Computer Science (L-31)
				<br></br>
				Thesis: <LinkToBlank
					url={"https://computerscience.unicam.it/marcantoni/tesi/Tor%20da%20frontend%20Android%20a%20backend.pdf"}
					text={"Tor, da frontend Android a backend"}
					css={{ display: "inline" }}
				/>
				<br></br>
				<br></br>
				car license: B
			</DetailsContainer>
		</div>
	)
}
export default Column2;