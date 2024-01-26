import { FaHashtag } from "react-icons/fa";

const ChannelLink = ({ channelName }) => {
	return (
		<div className="mx-4 my-1 cursor-pointer rounded-xl p-1 text-white transition-all duration-300 ease-linear hover:bg-gray-700">
			<FaHashtag
				className="inline-block align-baseline text-gray-500"
				size="14"
			/>{" "}
			<h1 className=" inline-block align-baseline text-lg">
				{channelName}
			</h1>
		</div>
	);
};

function ChannelSelect() {
	return (
		<div className="min-h-screen w-64 bg-gray-900">
			<div className="fixed left-16 top-6 z-40 min-h-screen w-64 rounded-tl-xl bg-gray-800">
				<div className="h-12 w-full border-b border-gray-900 p-2 text-center text-2xl font-bold text-white">
					Channel Select
				</div>
				<ChannelLink channelName={"Announcements"} />
				<ChannelLink channelName={"Gaming"} />
				<ChannelLink channelName={"Coding"} />
				<ChannelLink channelName={"Audio"} />
			</div>
		</div>
	);
}

export default ChannelSelect;
