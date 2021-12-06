import { AspectRatio } from "@chakra-ui/layout";
import { HTMLChakraProps } from "@chakra-ui/system";
import Image from "next/image";

interface CloudinaryImageProps extends HTMLChakraProps<"div"> {
	src: string;
	alt: string;
	ratio: number;
}

/**
 * Wrap the responsive image inside an aspect ratio (width/height)
 * @param {CloudinaryImageProps} props
 * @returns {JSX.Element}
 */
export const CloudinaryImage = ({
	src,
	alt,
	ratio = 1.25,
	...moreProps
}: CloudinaryImageProps) => (
	<AspectRatio ratio={ratio} {...moreProps}>
		<Image src={src} layout="fill" alt={alt} />
	</AspectRatio>
);
