import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

import "./dropFiles.scss";

const DropFiles = ({ file, setFile }) => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
	});

	// Update the state with the files with what is added to the component
	useEffect(() => {
		setFile(acceptedFiles[0]);
	}, [acceptedFiles, setFile]);

	return (
		<>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<p>
					Drag and drop your avatar picture here (or click here to upload it)
				</p>
			</div>
			<aside>
				{file && (
					<img
						src={URL.createObjectURL(file)}
						alt="The avatar you uploaded"
						className="img-file-dropzone"
						key={file.path}
					/>
				)}
			</aside>
		</>
	);
};

export default DropFiles;
