/** @format */
import Image from "next/image";
import Link from "next/link";

const boxNav =
	"box-border text-small h-4 bg-slate-300 hover:bg-slate-400 p-2 align-middle mt-4 text-center rounded-sm";

export default function Header() {
	return (
		<div className="sticky top-0 z-30 flex gap-0 sm:gap-6 box-border p-0 sm:p-3  h-18 bg-slate-200 border-0 w-full">
			<div className="ml-4">
				<Image
					src="/headIcon.jpg"
					alt="Vercel Logo"
					className="h- auto object-cover"
					width={100}
					height={6}
					priority
				/>
			</div>
			<div className="text-center mr-2 sm:mr-0 pt-2">
				<Link
					href={"http://localhost:3001/ninjas/1"}
					className={boxNav}
				>
					About Us
				</Link>
			</div>
			<div className="text-center pt-2 mr-2 sm:mr-0">
				<Link
					href={"http://localhost:3001/ninjas/2"}
					className={boxNav}
				>
					PodCast
				</Link>
			</div>
			<div className="text-center pt-2">
				<Link
					href={"http://localhost:3001/ninjas/3"}
					className={boxNav}
				>
					Meetups
				</Link>
			</div>
			<div className="text-center pt-2">
				<Link
					href={"/"}
					className={boxNav}
				>
					Comments
				</Link>
			</div>
		</div>
	);
}
