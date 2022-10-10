import {
	AriaTabListProps,
	AriaTabPanelProps,
	AriaTabProps,
	useTab,
	useTabList,
	useTabPanel,
} from "react-aria";
import * as React from "react";
import {TabListProps, TabListState, useTabListState} from "react-stately";
import {Node} from "@react-types/shared";
import clsx from "clsx";

interface Props extends TabListProps<any> {}

const Tabs: React.FC<Props> = (props) => {
	const state = useTabListState(props);
	const ref = React.useRef();
	const {tabListProps} = useTabList(props, state, ref);
	return (
		<div
			className={clsx(
				"flex gap-2",
				props["aria-orientation"] === "vertical" ? "flex-row" : "flex-col"
			)}
		>
			<div
				{...tabListProps}
				ref={ref}
				className={clsx(
					"flex gap-2",
					props["aria-orientation"] === "vertical"
						? "flex-col items-stretch"
						: "flex-row"
				)}
			>
				{Array.from(state.collection).map((item) => (
					<Tab
						key={item.key}
						item={item}
						state={state}
						aria-orientation={props["aria-orientation"]}
					/>
				))}
			</div>
			<TabPanel key={state.selectedItem?.key} state={state} />
		</div>
	);
};

interface TabProps extends AriaTabProps {
	item: Node<unknown>;
	state: TabListState<unknown>;
}

const Tab: React.FC<TabProps> = (props) => {
	const {item, state, ...ariaTabProps} = props;
	const {key, rendered} = item;
	const ref = React.useRef();
	const {tabProps} = useTab({...ariaTabProps, key}, state, ref);
	return (
		<div
			{...tabProps}
			ref={ref}
			className={clsx(
				props["aria-orientation"] === "vertical"
					? "selected:border-inline-end-8 selected:border-inline-end selected:border-inline-end-sky-600"
					: // ? "selected:border-r-4 selected:border-r-sky-600 selected:pr-2"
					  "selected:border-b-4 selected:border-b-sky-600 selected:pb-1"
			)}
		>
			{rendered}
		</div>
	);
};

interface TabPanelProps extends AriaTabPanelProps {
	state: TabListState<unknown>;
}

const TabPanel: React.FC<TabPanelProps> = ({state, ...props}) => {
	const ref = React.useRef();
	const {tabPanelProps} = useTabPanel(props, state, ref);
	return (
		<div {...tabPanelProps} ref={ref}>
			{state.selectedItem?.props.children}
		</div>
	);
};

export default Tabs;
