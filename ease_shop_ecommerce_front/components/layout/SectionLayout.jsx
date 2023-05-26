import { useRef } from "react";
import Link from "next/link";

import { Container } from "react-bootstrap";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import style from "./sectionlayout.module.scss";

const SectionLayout = ({ title, children, link, isSwiper, isContainerDisable = false, ...props }) => {
	const nextElementRef = useRef(null);
	const prevElementRef = useRef(null);

	return (
		<div className={style.sectionLayout} {...props}>
			<Container className={`${style.container} ${isContainerDisable ? style.disableContainer : ""}`} fluid="xl" style={{ position: "relative" }}>
				<header className={`${style.header} d-flex align-items-center justify-content-between`}>
					<h4 className={style.title}>{title}</h4>
					{link && (
						<span className={style.viewMore}>
							<Link href={link}>عرض المزيد</Link>
							<ArrowBackIcon fontSize="small" />
						</span>
					)}
					<div className={`${style.arrowWrapper} d-flex`}>
						{isSwiper && (
							<>
								<div className={style.arrow} ref={nextElementRef}>
									<ChevronRightIcon fontSize="small" className={style.arrowIcon} />
								</div>
								<div className={style.arrow} ref={prevElementRef}>
									<ChevronLeftIcon fontSize="small" className={style.arrowIcon} />
								</div>
							</>
						)}
					</div>
				</header>
				{typeof children === "function" ? children(nextElementRef, prevElementRef) : children}
			</Container>
		</div>
	);
};

export default SectionLayout;
