<<<<<<< HEAD
/** @format */

import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
export const getStaticProps = async () => {
	const res = await fetch("https://63be6aa1585bedcb36acc7d4.mockapi.io/header");
	const data = await res.json();
	return {
		props: { ninjas: data },
	};
};
export default function Ninjas({ ninjas }) {
	return (
		<>
			<h1>About Us</h1>
			{ninjas.map(ninja => (
				<Link
					href={"/Ninjas/" + ninja.userid}
					key={ninja.userid}
				>
					<p>{ninja.title}</p>
				</Link>
			))}
		</>
	);
}
=======
/** @format */

import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
export const getStaticProps = async () => {
	const res = await fetch("https://63be6aa1585bedcb36acc7d4.mockapi.io/header");
	const data = await res.json();
	return {
		props: { ninjas: data },
	};
};
export default function Ninjas({ ninjas }) {
	return (
		<>
			<h1>About Us</h1>
			{ninjas.map(ninja => (
				<Link
					href={"/ninjas/" + ninja.userid}
					key={ninja.userid}
				>
					<p>{ninja.title}</p>
				</Link>
			))}
		</>
	);
}
>>>>>>> 56b5a69468cb6e38bc1886ee720f3b6d3ba99578
