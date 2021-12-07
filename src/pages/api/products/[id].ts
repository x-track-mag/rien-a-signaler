import { makeSnipcartProduct } from "lib/snipart";
import { NextApiRequest, NextApiResponse } from "next";
import catalog from "../../../../_content/catalog.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const id = req.query.id;
	// Find the product
	const product = catalog.find((p) => p.id === id);
	if (product) {
		res.status(200).json(makeSnipcartProduct(product));
	} else {
		res.status(404).json({
			code: 404,
			message: "Not Found"
		});
	}
}
