import { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import ChannelSelect from "./ChannelSelect";
import Messages from "./Messages";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex min-h-screen bg-gray-900">
			<TopBar />
			<SideBar />
			<ChannelSelect />
			<Messages />
		</div>
	);
}

export default App;
