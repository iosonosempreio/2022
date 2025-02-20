import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import stylesPageTemplate from "../components/PageTemplate/PageTemplate.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames";

import { getContributionsData } from "../lib/contributions";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../styles/contributions.module.scss";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";

import MinglingCircles from "../components/MinglingCircles";

export default function Contributions({ allContributionsData, metaContent }) {
	const { basePath } = useRouter();
	const masonryBreakpoints = {
		default: 4,
		1400: 4,
		1200: 3,
		992: 2,
		768: 2,
		576: 2,
	};
	return (
		<>
			<MinglingCircles />
			<Head>
				<title>{"Visap'22 Contributions | VISAP'22"}</title>
				<meta name="description" content={metaContent} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className={classNames({ [stylesPageTemplate.windowFrame]: false })}>
				<Container>
					<Row>
						<Col
							sm={{ span: 12, offset: 0 }}
							md={{ span: 10, offset: 1 }}
							lg={{ span: 8, offset: 2 }}
							xl={{ span: 8, offset: 2 }}
							className={classNames(stylesPageTemplate.pageTitle, "mb-3")}
						>
							<h1 className={classNames("page-title")}>Visap&apos;22 Contributions</h1>
							<h6 className={classNames()}>Artworks, Pictorials and Papers</h6>
							<p className={classNames()}>
								Browse the online exhibit or download the <a href={basePath + "/VISAP22_catalogue_v6.pdf"} target="_blank" rel="noreferrer">VISAP&apos;22 catalogue</a>.
							</p>
						</Col>
						<Col
							sm={{ span: 12, offset: 0 }}
							md={{ span: 10, offset: 1 }}
							// lg={{ span: 8, offset: 2 }}
							// xl={{ span: 8, offset: 2 }}
							className={classNames(stylesPageTemplate.pageTitle, "mb-5")}
						>
							<ResponsiveMasonry columnsCountBreakPoints={masonryBreakpoints}>
								<Masonry gutter={"1.5rem"}>
									{allContributionsData.map((d, i) => (
										<Link key={"cont" + i} href={"/contributions/" + d.id} passHref>
											<div key={d.id} dataname={d.id} className={classNames(styles.contribution)}>
												<div className={classNames(styles.thumbnail)}>
													<ExportedImage
														src={basePath + "/images/contributions-media/" + d.pc_id + "/" + d.images[0].src}
														alt={"Preview image of " + d.title}
														layout="responsive"
														width={d.images[0].width}
														height={d.images[0].height}
														placeholder="blur"
													/>
												</div>
												<div className="px-3 pb-3">
													<h6 className={classNames(styles.category, "mt-2", "mb-1")}>{d.type}</h6>
													<h5 className={classNames(styles.title, "mb-2")}>{d.title}</h5>
													<p className={classNames(styles.authors, "mb-1")}>{d.authors.map((d) => `${d.name} ${d.surname}`).join(", ")}</p>
												</div>
											</div>
										</Link>
									))}
								</Masonry>
							</ResponsiveMasonry>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</>
	);
}

Contributions.defaultProps = {
	submenu: [],
	metaContent:
		"The VIS Arts Program (VISAP) is a mini-conference and exhibition where visualization researchers, designers, and artists come together to discuss works at the intersection of data visualization, art and design.",
};

export async function getStaticProps() {
	const allContributionsData = getContributionsData();
	return {
		props: {
			allContributionsData,
		},
	};
}
