import Pagination from "rc-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import "./queryPagination.scss";

const QueryPagination = ({ limit, setLimit, skip, setSkip, count }) => {
	const [show, setShow] = useState("");

	// Give the numbers of items displayed and the count
	let tempShow;
	useEffect(() => {
		setShow(tempShow);
	}, [setShow]);

	// Calcul the current page and place the pagination to it
	let currentPage = (skip + limit) / limit;

	// Calcul the right range of items displayed on skip changed
	const handleShow = (total, range) => {
		const temp = currentPage * limit;
		range[1] = temp;
		range[0] = temp - limit + 1;
		tempShow = `${range[0]} - ${range[1]} of ${total} Comics`;
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
				id="skip-select">
				<option value="100">100 results per page</option>
				<option value="50">50 results per page</option>
				<option value="26">26 results per page</option>
				<option value="10">10 results per page</option>
			</select>
		</nav>
	);
};

export default QueryPagination;
