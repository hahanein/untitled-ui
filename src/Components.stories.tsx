import Link from "./Link";
import Badge from "./Badge";
import * as React from "react";
import Button from "./Button";
import Header from "./Header";
import QuestionMarkCircleIcon from "@heroicons/react/24/solid/QuestionMarkCircleIcon";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/solid/ArrowRightOnRectangleIcon";
import TextField from "./TextField";
import Tabs from "./Tabs";
import MagnifyingGlassIcon from "@heroicons/react/20/solid/MagnifyingGlassIcon";
import PencilSquareIcon from "@heroicons/react/20/solid/PencilSquareIcon";
import {Item} from "react-stately";
import Action from "./Action";

export const Badges: React.FC = () => (
	<div className="flex flex-row gap-2">
		<Badge>simple</Badge>
		<Badge variant="gray">gray</Badge>
		<Badge variant="valid">valid</Badge>
		<Badge variant="invalid">invalid</Badge>
		<Badge variant="disabled">disabled</Badge>
	</div>
);

export const ButtonsAndActions: React.FC = () => (
	<div className="flex flex-col gap-16">
		<div className="grid grid-cols-3 gap-8">
			<Button>Button default</Button>
			<Button variant="primary">Button primary</Button>
			<Button variant="danger">Button danger</Button>
			<Button isDisabled>Button default</Button>
			<Button variant="primary" isDisabled>
				Button primary
			</Button>
			<Button variant="danger" isDisabled>
				Button danger
			</Button>
			<Action icon={<PencilSquareIcon />}>Icon action</Action>
			<Action>Text action</Action>
			<Action isDisabled>Disabled text action</Action>
		</div>
		<div className="dark grid grid-cols-3 gap-8 bg-black p-8 text-white">
			<span className="col-span-3 underline underline-offset-8">Dark</span>
			<Button>Button default</Button>
			<Button variant="primary">Button primary</Button>
			<Button variant="danger">Button danger</Button>
			<Button isDisabled>Button default</Button>
			<Button variant="primary" isDisabled>
				Button primary
			</Button>
			<Button variant="danger" isDisabled>
				Button danger
			</Button>
			<Action icon={<PencilSquareIcon />}>Icon action</Action>
			<Action>Text action</Action>
			<Action isDisabled>Disabled text action</Action>
		</div>
	</div>
);

export const Headers: React.FC = () => (
	<Header>
		<h1 className="font-bold text-white">NAC</h1>
		<div className="flex flex-row items-center gap-3">
			<span className="w-40">
				<TextField
					label="Search"
					labelVisuallyHidden
					placeholder="Search"
					icon={<MagnifyingGlassIcon />}
				/>
			</span>
			<div className="ml-1 h-full w-[1px] bg-neutral-600">&nbsp;</div>
			<QuestionMarkCircleIcon
				height={28}
				className="transition-150 cursor-pointer transition-colors hover:text-orange-300"
			/>
			<UserCircleIcon
				height={28}
				className="transition-150 cursor-pointer transition-colors hover:text-orange-300"
			/>
			<span className="font-semibold">01:42</span>
			<ArrowRightOnRectangleIcon
				height={28}
				className="cursor-pointer transition-colors duration-150 hover:text-orange-300"
			/>
		</div>
	</Header>
);

export const Links: React.FC = () => (
	<>
		<Link>Ordinary link</Link>
		<p className="w-60">
			<Link>Link with a very long text, wrapping over lines</Link>
		</p>
	</>
);

export const TextFields: React.FC = () => (
	<div className="flex flex-col gap-8">
		<div className="grid grid-cols-2 gap-4">
			<TextField label="Engine ID" />
			<TextField
				label="Context Name"
				description="A context identifies a collection of information accessible for an SNMP entity."
			/>
			<TextField
				label="User Name"
				errorMessage={'"Dickbutt" is not a valid user name.'}
				value="Dickbutt"
			/>
			<TextField label="Host" defaultValue="localhost" isDisabled />
			<TextField
				label="Search"
				labelVisuallyHidden
				placeholder="Search"
				icon={<MagnifyingGlassIcon />}
			/>
		</div>
		<div className="dark grid grid-cols-2 gap-4 bg-black p-4 text-white">
			<span className="underline underline-offset-8">Dark</span>
			<TextField
				label="Context Name"
				description="A context identifies a collection of information accessible for an SNMP entity."
			/>
			<TextField
				label="User Name"
				errorMessage={'"Dickbutt" is not a valid user name.'}
				value="Dickbutt"
			/>
			<TextField label="Host" defaultValue="localhost" isDisabled />
			<TextField
				label="Search"
				labelVisuallyHidden
				placeholder="Search"
				icon={<MagnifyingGlassIcon />}
			/>
		</div>
	</div>
);

export const TabList: React.FC = () => (
	<Tabs aria-label="History of Ancient Rome">
		<Item key="FoR" title="Founding of Rome">
			Arma virumque cano, Troiae qui primus ab oris.
		</Item>
		<Item key="MaR" title="Monarchy and Republic">
			Senatus Populusque Romanus.
		</Item>
		<Item key="Emp" title="Empire">
			Alea jacta est.
		</Item>
	</Tabs>
);
