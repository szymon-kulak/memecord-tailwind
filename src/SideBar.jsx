import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBarIcon = ({ icon, tooltip }) => (
	<div className="sidebar-icon group relative mx-auto my-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-800 text-green-500 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl hover:bg-green-600 hover:text-white">
		{icon}
		<span class="sidebar-tooltip absolute left-14 z-50 m-2 w-auto min-w-max origin-left scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
			{tooltip}
		</span>
	</div>
);

function SideBar() {
	return (
		<div className="fixed left-0 top-6 m-0 flex h-screen w-16 flex-col bg-gray-900 text-white shadow">
			<SideBarIcon icon={<FaFire size="28" />} tooltip={"Fire"} />
			<SideBarIcon
				icon={<BsFillLightningFill size="20" />}
				tooltip={"Fast"}
			/>
			<SideBarIcon
				icon={<FaPoo size="20" />}
				tooltip={"Negative Feedback"}
			/>
			<SideBarIcon icon={<BsPlus size="32" />} tooltip={"Add"} />
		</div>
	);
}

export default SideBar;
