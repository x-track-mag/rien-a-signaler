import { makeSnipcartProduct } from "lib/snipart";
import { NextApiRequest, NextApiResponse } from "next";
import catalog from "../../../../_content/catalog.json";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(catalog.map(makeSnipcartProduct));
}
