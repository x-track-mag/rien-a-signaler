module.exports = {
	images: {
		// @see https://nextjs.org/docs/api-reference/next/image#built-in-loaders
		loader: "cloudinary",
		path: "https://res.cloudinary.com/x-track/"
	},
	experimental: {
		urlImports: ["https://firebasestorage.googleapis.com"]
	}
};
