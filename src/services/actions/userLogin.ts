"use server";
import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";

export const userLogin = async (values: FieldValues) => {
	const res = await fetch(`https://camps-back.vercel.app/api/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
		cache: "no-store",
	});

	const userInfo = await res.json();

	if (userInfo?.data?.token) {
		setAccessToken(userInfo?.data?.token);
	}

	return userInfo;
};
