import { Fragment } from "react";

const Nl2Br = ({ children = "" }) => (
	<>
		{children.split("\n").map((line = "", key) => (
			<Fragment key={key}>
				{key > 0 && <br />}
				{line}
			</Fragment>
		))}
	</>
);

export default Nl2Br;
