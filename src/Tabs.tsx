import {useTab, useTabList, useTabPanel} from "react-aria";
import * as React from "react";
import {TabListProps, useTabListState} from "react-stately";
import clsx from "clsx";

interface Props extends TabListProps<any> {}
const Tabs: React.FC<Props> = (props) => {
	const state = useTabListState(props);
	const ref = React.useRef();
	const {tabListProps} = useTabList(props, state, ref);
	return (
		<div className={`tabs ${props.orientation || ""}`}>
			<div {...tabListProps} ref={ref}>
				{[...state.collection].map((item) => (
					<Tab
						key={item.key}
						item={item}
						state={state}
						orientation={props.orientation}
					/>
				))}
			</div>
			<TabPanel key={state.selectedItem?.key} state={state} />
		</div>
	);
};

const Tab: React.FC = ({item, state, orientation}) => {
	const {key, rendered} = item;
	const ref = React.useRef();
	const {tabProps, isSelected, isDisabled} = useTab({key}, state, ref);
	return (
		<div {...tabProps} ref={ref} className={clsx(isSelected && "")}>
			{rendered}
		</div>
	);
};

const TabPanel: React.FC = ({state, ...props}) => {
	const ref = React.useRef();
	const {tabPanelProps} = useTabPanel(props, state, ref);
	return (
		<div {...tabPanelProps} ref={ref}>
			{state.selectedItem?.props.children}
		</div>
	);
};

export default Tabs;
