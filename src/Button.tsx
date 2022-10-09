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
			className={clsx(
				"truncate rounded border px-3 py-1 disabled:border-neutral-200 disabled:bg-neutral-50 disabled:text-neutral-400 dark:disabled:border-neutral-600 dark:disabled:bg-inherit dark:disabled:text-neutral-500",
				variant === "default" &&
					"border-gray-300 bg-white pressed:bg-slate-100 dark:border-gray-500 dark:bg-inherit dark:text-gray-300 dark:pressed:bg-white/30",
				variant === "primary" &&
					"border-sky-700 bg-sky-800 text-white pressed:bg-sky-600 dark:bg-sky-600 dark:pressed:bg-sky-700",
				variant === "danger" &&
					"border-gray-300 bg-white text-red-700 pressed:bg-red-50 dark:border-sky-600 dark:bg-inherit dark:text-red-400 dark:pressed:bg-pink-500/40"
			)}
		>
			{children}
		</button>
	);
};

export default Button;
