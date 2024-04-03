import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<section id="section">
				<div className="div">
					<h1>Titre</h1>
				</div>
				<div className="div">
					<p>Test</p>
				</div>
				<div className="div">
					<button className="button">Button</button>
				</div>
				<div className="div">
					<button className="button">Button</button>
				</div>
				<div className="div">
					<button className="button">Button</button>
				</div>
			</section>
		</>
	);
}

export default App;
