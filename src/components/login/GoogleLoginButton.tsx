import { GoogleLogin } from "@react-oauth/google";

export const GoogleLoginButton: React.FC = () => {
	const handleSuccess = (response: any) => {
		console.log("Success: ", response);
	};

	const handleFailure = () => {
		console.log("Failure");
	};

	return (
		<div className="mt-28 w-full flex flex-row justify-center items-center">
			<GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
		</div>
	);
};
