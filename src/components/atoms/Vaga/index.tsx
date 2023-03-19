import React from "react";

function Vaga() {
	return (
		<div className="w-full h-24 py-4 flex border border-gray-300 rounded-lg">
			<div className="w-32 lg:w-36 border-r border-gray-300 flex justify-center items-center">
				<p>1 hora atrás</p>
			</div>
			<div className="flex flex-col lg:flex-row lg:justify-between">
				<div className="lg:w-1/2 pl-6 lg:border-r border-gray-300 flex items-center">
					<h3>Título</h3>
				</div>
				<ul className="flex items-center flex-wrap pl-6 space-x-4">
					<li>Front-end</li>
					<li>Back-end</li>
					<li>Full-stack</li>
					<li>Mobile</li>
				</ul>
			</div>
		</div>
	);
}

export default Vaga;
