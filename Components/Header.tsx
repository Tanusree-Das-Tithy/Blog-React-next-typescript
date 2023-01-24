/** @format */
import Image from "next/image";
import Link from "next/link";

const boxNav =
	"box-border h-4 bg-slate-300 hover:bg-slate-400 p-4 align-middle mt-4 text-center rounded-sm";

export default function Header() {
	return (
		<div className="sticky top-0 z-0 flex gap-6 box-border  h-20 bg-slate-200  p-4 border-4 space-x-8 w-full">
			<div className="ml-4">
				<Image
					src="/Images/headIcon.jpg"
					alt="Vercel Logo"
					className="w-20 h-18"
					width={100}
					height={6}
					priority
				/>
			</div>
			<div className="text-center pt-2">
				<Link
					href={"http://localhost:3000/Ninjas/1"}
					className={boxNav}
				>
					About Us
				</Link>
			</div>
			<div className="text-center pt-2">
				<Link
					href={"http://localhost:3000/Ninjas/2"}
					className={boxNav}
				>
					PodCast
				</Link>
			</div>
			<div className="text-center pt-2">
				<Link
					href={"http://localhost:3000/Ninjas/3"}
					className={boxNav}
				>
					Meetups
				</Link>
			</div>
		</div>
	);
}
