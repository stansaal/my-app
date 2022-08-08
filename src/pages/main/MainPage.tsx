import React from "react";
import cn from "classnames";

//layout
import { MainLayout } from "../../layouts";

//sections
import FeaturedSection from "./sections/Featured";
import RecentSection from "./sections/Recent";

import { ReactComponent as PhoneSVG } from "../../assets/img/phone.svg";

import PhoneSRC from "../../assets/img/phone.svg";

import s from "./MainPage.module.scss";

const MainPage = () => {
	return (
		<MainLayout>
			<div className="container">
				<div className="mainheading">
					<h1 className={cn("sitetitle", s.heading)}>
						Mediumish <PhoneSVG />
					</h1>
					<p className="lead">
						Bootstrap theme, medium style, simply perfect for bloggers <img src={PhoneSRC} alt="" />
					</p>
				</div>
				<FeaturedSection />
				<RecentSection />
			</div>
		</MainLayout>
	);
};

export default MainPage;
