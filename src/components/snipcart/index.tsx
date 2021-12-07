import { Button } from "@chakra-ui/react";
import { makeSnipcartProduct } from "lib/snipart";

export const SnipCartButton = ({ product }) => {
	const { id, name, price, url, image } = makeSnipcartProduct(product);
	return (
		<Button
			className="snipcart-add-item"
			bgColor="brand.green"
			_hover={{ bgColor: "brand.yellow" }}
			mt={2}
			data-item-id={id}
			data-item-name={`${name}`}
			data-item-price={price}
			data-item-url={`${url}`}
			data-item-image={image}
		>
			Commander pour&nbsp;
			<code>
				<strong>{price} €</strong>
			</code>
		</Button>
	);
};
