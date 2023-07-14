import DetailsContainer from "./details";
import Experience from "./experience";
import LinkToBlank from "./link_to_blank";
import WorkExp from "./work-exp";

const degree = "Bachelor's degree in Computer Science (L-31)"
const aboutMe = `I evolve over time. I don't know who I will be in one year, mostly it depends on the
environment, but I have some fixed points: music and my projects.
I like traveling, but I also like to keep the earth habitable, so I prefer trains,
buses, bike. I went to MCH2022 in July and it was one of my most liked experiences.`

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
					mediumUseTech="Git, Github, POP_OS, Conventional Commit, Git Flow, React Native, Expo, nvm"
					others="Never worked with libraries, or framework for complex animations."
				/>
				<WorkExp
					name="aizoOn"
					url="https://www.aizoongroup.com"
					workPosition="Backend Dev - Cyber Software Engineer"
					dates={["10/2022 -> presente, Apprenticeship contract"]}
					heavyUseTech="Java Spring Boot, Spring Security, Maven, Docker, MongoDB, Mongo Compass, MySQL, DBeaver, Joplin, IntelliJ, MobaXterm, GitLab"
					mediumUseTech="NodeJS, JPA, Hibernate, MyBatis, Grafana, InfluxDB, Telegraf"
					lowUseTech="Kafka, Zeek, SonarLint, Sonarqube, Gitlab pipelines"
					css={{ marginTop: "20px" }}
				/>
			</DetailsContainer>
			<DetailsContainer summaryText={"Explorations"}>
				<Experience
					heavyUseTech="Arch Linux, Raspian, Debian, NextJS, VSCode, Microsoft, Python"
					mediumUseTech="nmap, OpenSSL, Wireguard"
					lowUseTech="HexChat, WeeChat, GPG"
					others=""
				/>
			</DetailsContainer>
			<DetailsContainer summaryText={"Qualifications and licenses"}>
				{degree}
				<br></br>
				Thesis: <LinkToBlank
					url={"https://computerscience.unicam.it/marcantoni/tesi/Tor%20da%20frontend%20Android%20a%20backend.pdf"}
					text={"Tor, da frontend Android a backend"}
					css={{ display: "inline" }}
				/>
				<br></br>
				car license: B
			</DetailsContainer>
			<DetailsContainer summaryText={"Personal Experiences"}>
				<LinkToBlank
					url={"https://en.wikipedia.org/wiki/May_Contain_Hackers"}
					text={"MCH"}
				/>
				Erasmus (6 months)
				<br></br>
				<LinkToBlank
					url={"https://cyberchallenge.it/"}
					text={"Cyber Challenge IT"}
				/>
				<LinkToBlank
					url={"https://italia.campus-party.org/"}
					text={"CPIT2"}
				/>
				Scout (8 years)
				<br></br>
				<LinkToBlank
					url={"https://www.kumfestival.it/kum-cantieri/"}
					text={"Kum festival"}
				/>
			</DetailsContainer>
			<DetailsContainer summaryText={"About me"}>
				{aboutMe}
			</DetailsContainer>
		</div>
	)
}
export default Column2;