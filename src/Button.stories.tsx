import Button from "./Button";
import * as React from "react";

export const Default: React.FC = () => (
	<div className="grid grid-cols-3 gap-2">
		<Button>Button default</Button>
		<Button variant="primary">Button primary</Button>
		<Button variant="danger">Button danger</Button>
		<Button isDisabled>Button default</Button>
		<Button variant="primary" isDisabled>
			Button primary
		</Button>
		<Button variant="danger" isDisabled>
			Button danger
		</Button>
	</div>
);
