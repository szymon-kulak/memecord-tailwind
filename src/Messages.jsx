import { FaAsterisk, FaHashtag, FaTractor } from "react-icons/fa";

function userProfile(name, avatar) {
	this.name = name;
	this.avatar = avatar;
}

const Szymon = new userProfile(
	"Szymon",
	(
		<FaHashtag
			className="mr-2 inline-block h-10 w-10 cursor-pointer rounded-3xl bg-red-800 p-2 align-middle"
			size="32"
		/>
	),
);

const David = new userProfile(
	"David",
	(
		<FaAsterisk
			className="mr-2 inline-block h-10 w-10 cursor-pointer rounded-3xl bg-yellow-500 p-2 align-middle"
			size="32"
		/>
	),
);

const Alfred = new userProfile(
	"Alfred",
	(
		<FaTractor
			className="mr-2 inline-block h-10 w-10 cursor-pointer rounded-3xl bg-amber-900 p-2 align-middle"
			size="32"
		/>
	),
);

const Message = ({ user, time, text }) => {
	return (
		<div className="h-min-16 m-2 w-full rounded-lg bg-gray-700 p-4 hover:bg-gray-800">
			{user.avatar}
			<h2 className="inline-block cursor-pointer align-middle text-lg font-semibold text-blue-500">
				{user.name}
			</h2>
			<h3 className="ml-2 inline-block align-middle text-sm text-gray-400">
				{time}
			</h3>
			<p className="ml-12 block">{text}</p>
		</div>
	);
};

function Messages() {
	return (
		<div className="min-h-screen w-screen bg-gray-800">
			<div className="fixed left-80 top-6 min-h-screen w-screen rounded-tl-xl bg-gray-700 text-white">
				<div className="h-12 w-full border-b border-gray-900 p-2 pl-6 text-left align-middle text-xl font-bold text-white">
					<FaHashtag
						className="inline-block align-baseline"
						size="16"
					/>{" "}
					Coding
				</div>
				<Message
					user={Szymon}
					text="Hello World!"
					time="Yesterday, 21:37"
				/>
				<Message
					user={David}
					text="What's up my man!"
					time="Yesterday, 22:22"
				/>
				<Message
					user={Szymon}
					text="All good mate, just trying some TailwindCSS."
					time="Yesterday, 22:24"
				/>
				<Message
					user={Alfred}
					text="Well, is it any good or?"
					time="00:24"
				/>
				<Message
					user={David}
					text="It's awesome bro, I use it in every project rn. Can't ever go back to plain CSS."
					time="08:40"
				/>
				<Message
					user={Szymon}
					text="Yeah, I was a hater but having styles right in your JSX is super convenient."
					time="09:50"
				/>
				<Message
					user={Szymon}
					text="You know I'm not the greatest when it comes to CSS, though."
					time="09:51"
				/>
				<Message
					user={Alfred}
					text="Learned that the hard way!"
					time="12:24"
				/>
			</div>
		</div>
	);
}

export default Messages;
