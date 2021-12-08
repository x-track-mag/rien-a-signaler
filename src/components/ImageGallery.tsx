import { Grid, GridItem } from "@chakra-ui/layout";
import Link from "./base/Links";
import { CloudinaryImage } from "./CloudinaryImage";

/**
 * Just a responsive image grid
 * @param {ImageGallery} props
 * @returns {JSX.Element}
 */
export const ImageGallery = ({ catalog = [], ...moreProps }) => (
	<Grid
		className="image-gallery"
		templateColumns={{ sm: "1fr", md: `repeat(${catalog.length}, 1fr)` }}
		gap={{ sm: 4, md: 2 }}
		{...moreProps}
	>
		{catalog.map(({ id, pictures }, i) => {
			const { src, alt, width, height } = pictures[0]; // Take the first picture
			return (
				<GridItem key={`img-gallery-${i}`} height="100%" width="20%">
					<Link href={`/catalog/${id}`} lineHeight={0}>
						<CloudinaryImage src={src} alt={alt} ratio={width / height} />
					</Link>
				</GridItem>
			);
		})}
	</Grid>
);
