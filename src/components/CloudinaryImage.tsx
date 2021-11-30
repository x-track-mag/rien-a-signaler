import { AspectRatio } from "@chakra-ui/layout";
import Image from "next/image";

type CloudinaryImageProps = {
	src: string;
	alt: string;
	ratio: number;
};

/**
 * Wrap the responsive image inside an aspect ratio (width/height)
 * @param {CloudinaryImageProps} props
 * @returns {JSX.Element}
 */
export const CloudinaryImage = ({ src, alt, ratio = 1.25 }: CloudinaryImageProps) => (
	<AspectRatio ratio={ratio}>
		<Image src={src} layout="fill" alt={alt} />
	</AspectRatio>
);
