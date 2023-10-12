import jwtDecode from "jwt-decode";
import { client } from "../../../sanity/lib/client";

export const createUserSession = async (credential: any, addUser: any) => {
	const decoded: { name: string; picture: string; sub: string; email: string } =
		jwtDecode(credential);

	const { name, picture, sub, email } = decoded;

	const user = {
		_id: sub,
		_type: "user",
		name: name,
		email: email,
		image: picture,
	};

	addUser(user);

	await client.createIfNotExists(user);
};
