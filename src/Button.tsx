import * as React from "react";
import {AriaButtonProps, useButton} from "react-aria";
import clsx from "clsx";

interface Props extends AriaButtonProps<"button"> {
	variant?: "default" | "primary" | "danger";
}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
	const ref = React.useRef();
	const {buttonProps, isPressed} = useButton(props, ref);
	const {children, variant = "default"} = props;

	return (
		<button
			{...buttonProps}
			ref={ref}
			aria-pressed={isPressed}
			data-x={variant}
			className={clsx(
				"rounded border px-3 py-1 disabled:border-neutral-200 disabled:bg-neutral-50 disabled:text-neutral-400",
				variant === "default" &&
					"border-gray-300 bg-white pressed:bg-slate-100",
				variant === "primary" &&
					"border-sky-600 bg-sky-700 text-white pressed:bg-sky-600",
				variant === "danger" &&
					"border-gray-300 bg-white text-red-700 pressed:bg-slate-100"
			)}
		>
			{children}
		</button>
	);
};

export default Button;
