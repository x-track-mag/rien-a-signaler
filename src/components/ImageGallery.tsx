import { SimpleGrid } from "@chakra-ui/layout";
import { CloudinaryImage } from "./CloudinaryImage";

/**
 * Just a responsive image grid
 * @param {ImageGallery} props
 * @returns {JSX.Element}
 */
export const ImageGallery = ({ pictures = [], ...moreProps }) => (
	<SimpleGrid
		className="image-gallery"
		columns={{ sm: 1, md: 5 }}
		templateColumns={{ sm: "1fr", md: `repeat(${pictures.length}, 1fr)` }}
		gap={{ sm: 4, md: 2 }}
		{...moreProps}
	>
		{pictures.map(({ src, alt, width, height }, i) => (
			<CloudinaryImage
				key={`img-gallery-${i}`}
				src={src}
				alt={alt}
				ratio={width / height}
			/>
		))}
	</SimpleGrid>
);
