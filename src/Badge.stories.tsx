import Badge from "./Badge";
import * as React from "react";

export const Default: React.FC = () => (
	<div className="flex flex-row gap-2">
		<Badge>simple</Badge>
		<Badge variant="gray">gray</Badge>
		<Badge variant="valid">valid</Badge>
		<Badge variant="invalid">invalid</Badge>
		<Badge variant="disabled">disabled</Badge>
	</div>
);
