import {
	AriaTextFieldOptions,
	useTextField,
	useVisuallyHidden,
} from "react-aria";
import * as React from "react";
import clsx from "clsx";

interface InputProps extends React.DOMAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {icon, ...inputProps} = props;
	return (
		<span className="relative">
			{icon && (
				<div className="pointer-events-none absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform text-slate-400 dark:text-slate-500">
					{icon}
				</div>
			)}
			<input
				{...inputProps}
				ref={ref}
				className={clsx(
					"box-border w-full rounded border border-slate-300 px-2 text-inherit disabled:border-neutral-200 disabled:bg-neutral-50 disabled:text-neutral-400 invalid:border-red-700 dark:border-slate-500 dark:bg-inherit dark:placeholder:text-slate-500 dark:disabled:border-neutral-700 dark:disabled:bg-neutral-900 dark:disabled:text-neutral-600 dark:invalid:border-pink-600",
					icon && "pl-7"
				)}
			/>
		</span>
	);
});

interface LabelProps extends React.DOMAttributes<HTMLLabelElement> {
	isDisabled?: boolean;
}

const Label: React.FC<LabelProps> = (props) => {
	const {isDisabled, ...labelProps} = props;
	return (
		<label
			{...labelProps}
			className={clsx(
				"text-sm dark:text-slate-400",
				isDisabled && "text-neutral-400 dark:text-neutral-500"
			)}
		/>
	);
};

const Description: React.FC<React.DOMAttributes<HTMLDivElement>> = (props) => (
	<div {...props} className="text-sm text-slate-700 dark:text-slate-400" />
);

const ErrorMessage: React.FC<React.DOMAttributes<HTMLDivElement>> = (props) => (
	<div {...props} className="text-sm text-red-700 dark:text-pink-600" />
);

interface Props extends AriaTextFieldOptions<"input"> {
	icon?: React.ReactNode;
	labelVisuallyHidden?: boolean;
}

const TextField: React.FC<Props> = (props) => {
	const {label, labelVisuallyHidden} = props;
	const ref = React.useRef();
	const {labelProps, inputProps, descriptionProps, errorMessageProps} =
		useTextField(props, ref);
	const visuallyHiddenLabel = useVisuallyHidden(labelProps);

	return (
		<div className="flex flex-col gap-1">
			<Label
				{...(labelVisuallyHidden
					? visuallyHiddenLabel.visuallyHiddenProps
					: labelProps)}
				isDisabled={inputProps.disabled}
			>
				{label}
			</Label>
			<Input
				{...inputProps}
				aria-invalid={Boolean(props.errorMessage)}
				icon={props.icon}
			/>
			{props.description && (
				<Description {...descriptionProps}>{props.description}</Description>
			)}
			{props.errorMessage && (
				<ErrorMessage {...errorMessageProps}>{props.errorMessage}</ErrorMessage>
			)}
		</div>
	);
};

export default TextField;
