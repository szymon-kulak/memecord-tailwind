import { IoClose } from "react-icons/io5";

function TopBar() {
	return (
		<div className="fixed top-0 flex h-6 w-screen justify-between bg-gray-900 px-4 py-1 text-xs text-white">
			<p>Memecord</p>
			<div className="place-self-end">
				<IoClose
					size="16"
					className="cursor-pointer transition-all duration-300 ease-linear hover:text-red-600 hover:shadow-sm"
				/>
			</div>
		</div>
	);
}

export default TopBar;
