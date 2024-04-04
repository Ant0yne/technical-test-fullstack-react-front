import Pagination from "rc-pagination";

import "./queryPagination.scss";

const QueryPagination = ({ limit, setLimit, skip, setSkip, count }) => {
	return (
		<nav id="pagination">
			<Pagination
				showTotal={(total, range) =>
					`${range[0]} - ${range[1]} of ${total} Comics`
				}
				total={count}
				pageSize={limit}
				onChange={(current, pageSize) => {
					return setSkip(current * pageSize - pageSize);
				}}
			/>
			<select
				onChange={(e) => setLimit(e.target.value)}
				name="skip-select"
				id="skip-select">
				<option value="">100 results</option>
				<option value="50">50 results</option>
				<option value="25">25 results</option>
				<option value="10">10 results</option>
			</select>
		</nav>
	);
};

export default QueryPagination;
