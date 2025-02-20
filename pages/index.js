import styles from "../styles/Home.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import InteractiveLogo from "../components/InteractiveLogo";
import classNames from "classnames";
import GalleryHome from "../components/GalleryHome";
import ResponsiveVideo from "../components/ResponsiveVideo";
// import Dates from "../components/Dates";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExportedImage from "next-image-export-optimizer";
import MinglingCircles from "../components/MinglingCircles";

import logoUniVictoria from "../public/images/logo_UNI_VICT_CS.jpeg";
import logoIEEE from "../public/images/ieee-logo-black.png";
import logoSchoolVisualArts from "../public/images/School_Of_Visual_Arts_Linear_Black_Web.png";
import logoCreativeInformatics from "../public/images/logo_CI_black.png";
import logoAutodesk from "../public/images/logo-autodesk.png";

export default function Home() {
	return (
		<>
			<Head>
				<title>VISAP22</title>
				<meta
					name="description"
					content={"VISAP is a mini-conference and exhibition that showcases and discusses works at the intersection of data visualization, art and design."}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<MinglingCircles />
			<div className={classNames({ [styles.windowFrame]: false })}>
				<Container fluid>
					<Row>
						<Col>
							<InteractiveLogo />
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col
							sm={{ span: 12, offset: 0 }}
							md={{ span: 10, offset: 1 }}
							lg={{ span: 8, offset: 2 }}
							xl={{ span: 8, offset: 2 }}
							className={classNames(styles.pageTitle, "mb-5")}
						>
							<h6 className={classNames("mb-3")}>Oklahoma City, USA (Hybrid), 16-21 October 2022</h6>
							<p>
								The VIS Arts Program (VISAP) is a mini-conference and exhibition where visualization researchers, designers, and artists come together to
								showcase and discuss works at the intersection of data visualization, art and design. It is the biggest associated event in the{" "}
								<a href="http://ieeevis.org/year/2022/welcome">IEEE VIS conference</a>, and its main goal is to foster new thinking, discussion, and
								collaboration across and between fields of research and practice.
							</p>
							<p>
								VISAP welcomes a wide range of submissions, including interactive artworks, design projects, novel visualization tools and applications,
								art-science or artist-in-lab projects, critical interpretations and evaluations of data visualizations, and philosophical meditations on the
								intersections between art and research. These can either be submitted to a paper track, or to an exhibition track (see details below).
							</p>
							<p>
								VISAP will take place in hybrid form this year. Accepted works to the paper and exhibition track can be presented either virtually or in-person.
							</p>
							<p>
								Accepted works will be published on the official VISAP website and in a dedicated exhibition catalogue. Papers and pictorials will be indexed in
								the IEEE Xplore digital library.
							</p>
							<h5 className={classNames("mt-4")}>
								The theme for VISAP’22 is <span className={classNames("text-gradient")}>Mingling Spaces</span>
							</h5>
							<p>
								For 10 years the VIS Arts Program, and before this the VIS Arts Show, have represented a mingling space, a space “to bring or mix together or
								with something else, usually without fundamental loss of identity” [Merriam-Webster].
								<br />
								VISAP’22 will take place in a hybrid format, and we will therefore experiment with different forms of mingling, attempting to bridge and mix not
								only disciplines, methodologies and techniques but also the virtual and the physical, the immaterial and the material; people and artifacts
								online and offline, remote and on-site. In line with this experiment, we invite submissions that explore, re-interpret, speculate and reflect on
								the idea of mingling spaces.
							</p>
							<p>
								Read more about the theme in the <Link href="/call-for-entries">Call for Entries</Link> page.
							</p>
							<h5 className={classNames("mt-4")} id="supporters">
								Supporters
							</h5>
							<p>VISAP&apos;22 is possible thanks to the support of:</p>
							<div className="logos my-5">
								<a className="logo" href="https://www.autodesk.com/" target="_blank" rel="noreferrer">
									<ExportedImage src={logoAutodesk} alt="Autodesk Logo" layout="fill" objectFit="contain" objectPosition="left center" />
								</a>
							</div>
							<div className="logos mb-5">
								<a className="logo" href="https://www.uvic.ca/ecs/computerscience" target="_blank" rel="noreferrer">
									<ExportedImage
										src={logoUniVictoria}
										alt="Logo of Department of computer science, University of Victoria"
										layout="fill"
										objectFit="contain"
										objectPosition="left center"
									/>
								</a>
							</div>
							<div className="logos mb-5">
								<a className="logo" href="https://www.ou.edu/finearts/visual-arts" target="_blank" rel="noreferrer">
									<ExportedImage
										src={logoSchoolVisualArts}
										alt="Logo of School of Visual Arts, University of Oklahoma"
										layout="fill"
										objectFit="contain"
										objectPosition="left center"
									/>
								</a>
							</div>
							<div className="logos mb-5">
								<a className="logo" href="http://ieeevis.org/year/2022/welcome" target="_blank" rel="noreferrer">
									<ExportedImage src={logoIEEE} alt="Logo of IEEE" layout="fill" objectFit="contain" objectPosition="left center" />
								</a>
							</div>
							<div className="logos mb-5">
								<a className="logo" href="https://creativeinformatics.org/" target="_blank" rel="noreferrer">
									<ExportedImage src={logoCreativeInformatics} alt="Logo of IEEE" layout="fill" objectFit="contain" objectPosition="left center" />
								</a>
							</div>

							{/* <h5 className={classNames("mt-4")}>From VISAP&apos;21</h5>
							<h6 className={classNames("mt-3")}>Exhibition</h6>
							<GalleryHome classNameProp="mt-3" />
							<h6 className={classNames("mt-3")}>Fast Forwards</h6>
							<ResponsiveVideo classNameProp="mt-3" url="https://www.youtube.com/watch?v=Tv1Anrwf8z4" />
							<p className={classNames("mt-3")}>
								Discover more in the website of <Link href="https://visap.net/2021/">Visap21</Link>
							</p> */}
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</>
	);
}
