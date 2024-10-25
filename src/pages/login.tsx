import React from "react";

export const Login: React.FC = () => {
	return (
		<div className="bg-login bg-centre">
			<div className="h-screen flex justify-center items-center">
				<div className="bg-white mx-4 p-8 rounded shadow-md h-2/6 w-1/6">
					<h1 className="text-3xl font-bold mb-8 text-center">Login</h1>

					<div className="my-10 w-full flex flex-row justify-center items-center">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
