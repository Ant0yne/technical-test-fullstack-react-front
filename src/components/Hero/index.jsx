import { useNavigate } from "react-router-dom";

// COMPONENTS
import QueryPagination from "../QueryPagination";

import "./hero.scss";

const Hero = ({
	limit,
	setLimit,
	skip,
	setSkip,
	search,
	setSearch,
	pageType,
}) => {
	const navigate = useNavigate();

	/**
	 *
	 * function when subimitting the form
	 *
	 * add all the query to the url then navigate to this url
	 *
	 */
	const sendQuery = () => {
		if (pageType === "charac") {
			let url = "/characters?";
			url = url + "name=" + search;
			navigate(url);
		} else {
			let url = "/comics?";
			url = url + "title=" + search;
			navigate(url);
		}
	};

	return (
		<section>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					sendQuery();
				}}>
				<input
					type="text"
					name="search-bar"
					id="search-bar"
					placeholder="Rechercher des comics"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>
			<QueryPagination
				skip={skip}
				setSkip={setSkip}
				limit={limit}
				setLimit={setLimit}
			/>
		</section>
	);
};

export default Hero;
