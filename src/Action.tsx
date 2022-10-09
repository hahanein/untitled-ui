import * as React from "react";
import {AriaButtonProps, useButton} from "react-aria";

interface Props extends AriaButtonProps<"button"> {
	icon?: React.ReactNode;
}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
	const ref = React.useRef();
	const {buttonProps, isPressed} = useButton(props, ref);
	const {children, icon} = props;

	return (
		<button
			{...buttonProps}
			ref={ref}
			aria-pressed={isPressed}
			className="truncate rounded px-3 py-1 text-sky-800 transition-colors hover:text-orange-600 disabled:text-neutral-400 dark:text-sky-200 dark:hover:text-orange-300 dark:disabled:bg-inherit dark:disabled:text-neutral-500"
		>
			{icon && (
				<span className="[&>svg]:-mt-1 [&>svg]:inline-block [&>svg]:h-4 [&>svg]:pr-2">
					{icon}
				</span>
			)}
			{children}
		</button>
	);
};

export default Button;
