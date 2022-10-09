import * as React from "react";

const Header: React.FC<React.PropsWithChildren> = (props) => {
	const {children} = props;

	return (
		<header className="dark flex h-20 w-full flex-row items-center justify-between bg-black px-12 text-slate-400">
			{children}
		</header>
	);
};

export default Header;
