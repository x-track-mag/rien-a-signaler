export interface ISnipartProduct {
	id: string;
	name: string;
	price: number;
	url: string;
	description: string;
	image: StaticImageData;
}

export interface IProducts {
	products: ISnipartProduct[];
}

/**
 * Map the internal product representation to Snipoacrt format
 * @param {ProductDescription} product
 * @returns {ISnipartProduct}
 */
export const makeSnipcartProduct = ({ id, title, description, price, pictures }) => ({
	id,
	name: title + " - " + description,
	price,
	image: "https://res.cloudinary.com/x-track/image/upload/" + pictures[0].src,
	description,
	url: "/api/products/" + id
});
