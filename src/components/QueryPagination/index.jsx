import { useNavigate } from "react-router-dom";

import Pagination from "rc-pagination";

import "./queryPagination.scss";

const QueryPagination = ({ limit, setLimit, skip, setSkip, count }) => {
	const navigate = useNavigate();

	function Select(props) {
		return <select {...props} />;
	}

	function Option(props) {
		const temp = { ...props };
		const arr = temp.children.split(" ");
		temp.children = arr[0] + " results";
		console.log(temp);
		props = { ...temp };
		return <option {...props} />;
	}

	Select.Option = Option;

	const onShowSizeChange = (current, pageSize) => {
		setLimit(pageSize);
	};

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
				onShowSizeChange={onShowSizeChange}
				pageSizeOptions={["10", "25", "50"]}
				selectComponentClass={Select}
			/>
		</nav>
	);
};

export default QueryPagination;
