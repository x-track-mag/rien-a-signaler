import { SimpleGrid } from "@chakra-ui/layout";
import Link from "./base/Links";
import { CloudinaryImage } from "./CloudinaryImage";

/**
 * Just a responsive image grid
 * @param {ImageGallery} props
 * @returns {JSX.Element}
 */
export const ImageGallery = ({ catalog = [], ...moreProps }) => (
	<SimpleGrid
		className="image-gallery"
		columns={{ sm: 1, md: 5 }}
		templateColumns={{ sm: "1fr", md: `repeat(${catalog.length}, 1fr)` }}
		gap={{ sm: 4, md: 2 }}
		{...moreProps}
	>
		{catalog.map(({ id, pictures }, i) => {
			const { src, alt, width, height } = pictures[0]; // Take the first picture
			return (
				<Link key={`img-gallery-${i}`} href={`/catalog/${id}`} lineHeight={0}>
					<CloudinaryImage src={src} alt={alt} ratio={width / height} />
				</Link>
			);
		})}
	</SimpleGrid>
);
