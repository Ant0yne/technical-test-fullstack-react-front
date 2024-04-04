// COMPONENTS
import QueryPagination from "../QueryPagination";

import "./hero.scss";

const Hero = ({ limit, setLimit, skip, setSkip, search, setSearch, count }) => {
	return (
		<section>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					// sendQuery();
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
				count={count}
			/>
		</section>
	);
};

export default Hero;
