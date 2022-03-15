import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./PageTemplate.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Colophon from "../Colophon";
import classNames from "classnames";

export default function PageTemplate({ metaTitle, metaContent, children }) {
	return (
		<>
			<Head>
				<title>{metaTitle}</title>
				<meta name="description" content={metaContent} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className={styles.windowFrame}>
				<Container fluid>
					<Row>
						<Col md={3}>
							<div className={classNames("pt-4", "ps-3", "sticky-top")} style={{top:'3.5rem'}}>
								<Colophon />
							</div>
						</Col>
						<Col
							md={{ span: 6, offset: 0 }}
							className={classNames(styles.pageTitle, "mb-5")}
						>
							{children}
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</>
	);
}

PageTemplate.defaultProps = {
	metaContent: "The IEEE VIS Art Program forum.",
};
