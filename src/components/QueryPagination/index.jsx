import Pagination from "rc-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import "./queryPagination.scss";

const QueryPagination = ({ limit, setLimit, skip, setSkip, count }) => {
	// The position in result to display
	const [show, setShow] = useState("");
	// The current page
	const [currentPage, setCurrentPage] = useState();

	/**
	 *
	 * @param {Number} total
	 * @param {Array} range
	 */
	const HandleShow = (total, range) => {
		useEffect(() => {
			// Calcul the current page and assign it to the state
			let tempCurrent = (Number(skip) + Number(limit)) / Number(limit);
			tempCurrent = Number(tempCurrent.toFixed(0));
			setCurrentPage(tempCurrent);

			// Calcul the range of items result we are at
			// assign the result to display to the state
			let temp = Number(tempCurrent) * Number(limit);
			temp = Number(temp.toFixed(0));
			range[1] = temp;
			range[0] = temp - Number(limit) + 1;
			const tempShow = `${range[0]} - ${range[1]} of ${total} Comics`;
			setShow(tempShow);
		});
	};

	// Change the skip state based on the page chosen
	const onPageChange = (current, pageSize) => {
		return setSkip(current * pageSize - pageSize);
	};

	return (
		<nav id="pagination">
			<Pagination
				showTotal={HandleShow}
				total={count}
				pageSize={limit}
				onChange={onPageChange}
				current={currentPage}
				prevIcon={<FontAwesomeIcon icon="fa-solid fa-arrow-left" />}
				nextIcon={<FontAwesomeIcon icon="fa-solid fa-arrow-right" />}
				jumpPrevIcon={<FontAwesomeIcon icon="fa-solid fa-ellipsis" />}
				jumpNextIcon={<FontAwesomeIcon icon="fa-solid fa-ellipsis" />}
				showLessItems={true}
			/>
			<div>
				<p>{show}</p>
			</div>
			<select
				onChange={(e) => setLimit(Number(e.target.value))}
				name="skip-select"
				id="skip-select"
				defaultValue={Number(limit)}>
				<option value={100}>100 results per page</option>
				<option value={50}>50 results per page</option>
				<option value={26}>26 results per page</option>
				<option value={10}>10 results per page</option>
			</select>
		</nav>
	);
};

export default QueryPagination;
