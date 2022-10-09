import {useLink} from "react-aria";
import * as React from "react";

const Link: React.FC<React.PropsWithChildren> = (props) => {
	let ref = React.useRef();
	let {linkProps} = useLink({...props, elementType: "span"}, ref);

	return (
		<span
			{...linkProps}
			ref={ref}
			className="cursor-pointer text-sky-800 hover:underline hover:underline-offset-4"
		>
			{props.children}
		</span>
	);
};

export default Link;
