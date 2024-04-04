import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

import "./dropFiles.scss";

const DropFiles = ({ file, setFile }) => {
	const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
		useDropzone({ maxFiles: 1 });

	// Update the state with the files with what is added to the component
	useEffect(() => {
		setFile(acceptedFiles[0]);
	}, [acceptedFiles, setFile]);

	return (
		<>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				{/* Display a different message when some files are drag 'n' drop above the div */}
				{isDragActive ? (
					<p>Déposer ici</p>
				) : (
					<p>
						Faites glisser votre photo de profil ici (ou cliquez dans le cadre)
					</p>
				)}
			</div>
			<aside>
				{file && (
					<img
						src={URL.createObjectURL(file)}
						alt=""
						className="img-file-dropzone"
						key={file.path}
					/>
				)}
			</aside>
		</>
	);
};

export default DropFiles;
