import Pagination from "rc-pagination";

import "./queryPagination.scss";

const QueryPagination = ({ limit, setLimit, skip, setSkip, count }) => {
	// Calcul the current page and place the pagination to it
	let currentPage = (skip + limit) / limit;

	// Calcul the right range of items displayed on skip changed
	const handleShow = (total, range) => {
		const temp = currentPage * limit;
		range[1] = temp;
		range[0] = temp - limit + 1;
		return `${range[0]} - ${range[1]} of ${total} Comics`;
	};

	// Change the skip state based on the page chosen
	const onPageChange = (current, pageSize) => {
		return setSkip(current * pageSize - pageSize);
	};

	return (
		<nav id="pagination">
			<Pagination
				showTotal={handleShow}
				total={count}
				pageSize={limit}
				onChange={onPageChange}
				current={currentPage}
			/>
			<select
				onChange={(e) => setLimit(Number(e.target.value))}
				name="skip-select"
				id="skip-select">
				<option value="100">100 results</option>
				<option value="50">50 results</option>
				<option value="25">25 results</option>
				<option value="10">10 results</option>
			</select>
		</nav>
	);
};

export default QueryPagination;
