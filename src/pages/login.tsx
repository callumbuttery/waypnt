import { GoogleLogin } from "@react-oauth/google";
import React from "react";

export const Login: React.FC = () => {
	const handleSuccess = (response: any) => {
		console.log("Success: ", response);
	};

	const handleFailure = () => {
		console.log("Failure");
	};

	return (
		<div className="bg-login bg-centre">
			<div className="h-screen flex justify-center items-center">
				<div className="bg-white mx-4 p-8 rounded shadow-md h-2/6 w-1/6 rounded-2xl">
					<h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
					<div className="mt-28 w-full flex flex-row justify-center items-center">
						<GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
					</div>
				</div>
			</div>
		</div>
	);
};
