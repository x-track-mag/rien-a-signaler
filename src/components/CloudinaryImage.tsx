import { AspectRatio } from "@chakra-ui/layout";
import Image from "next/image";

/**
 * Wrap the responsive image inside an aspect ratio (width/height)
 * @param {CloudinaryImage} props
 * @returns {JSX.Element}
 */
export const CloudinaryImage = ({ src, alt, ratio = 1.25 }) => (
	<AspectRatio ratio={ratio}>
		<Image src={src} layout="fill" alt={alt} />
	</AspectRatio>
);
