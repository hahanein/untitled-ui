import * as React from "react";
import clsx from "clsx";

interface Props {
	variant?: "default" | "gray" | "valid" | "invalid" | "disabled";
	label?: "string";
}

const Badge: React.FC<React.PropsWithChildren<Props>> = (props) => {
	const {children, variant, label} = props;

	return (
		<div
			role="status"
			aria-label={label}
			className={clsx(
				"rounded border border-gray-300 px-2 text-sm",
				variant === "gray" && "bg-gray-100",
				variant === "valid" && "bg-white text-green-700",
				variant === "invalid" && "bg-white text-red-700",
				variant === "disabled" && "bg-white text-red-900",
				(variant === "default" || variant == null) && "bg-white"
			)}
		>
			{children}
		</div>
	);
};

export default Badge;
