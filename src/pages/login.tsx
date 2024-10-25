import React from "react";
import { GoogleLoginButton } from "../components/login/GoogleLoginButton";

export const Login: React.FC = () => {
	return (
		<div className="bg-login bg-centre">
			<div className="h-screen flex justify-center items-center">
				<div className="bg-white mx-4 p-8 rounded shadow-md h-2/6 w-1/6 rounded-2xl">
					<h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
					<GoogleLoginButton />
				</div>
			</div>
		</div>
	);
};
