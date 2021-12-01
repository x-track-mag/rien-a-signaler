/**
 * @typedef GlobalEnvironment
 * @property {String} siteName Used to build each page's title
 * @property {String} siteUrl Base URL (home page)
 * @property {String} siteDescription Used in the Head
 * @property {String} snipcartApiKey Used in the Head
 */
export type GlobalEnvironment = {
	siteName: string;
	siteUrl: string;
	siteDescription: string;
	snipcartApiKey: string;
};

const REQUIRED_ENVIRONMENT_VARS = [
	"NEXT_PUBLIC_SITE_URL",
	"NEXT_PUBLIC_SITE_NAME",
	"NEXT_PUBLIC_SITE_DESCRIPTION",
	"NEXT_PUBLIC_SNIPCART_API_KEY"
];

/**
 * Load the global environment variables
 * @param {String} [varName] Name of a specific value to extract
 * @returns {GlobalEnvironment|string}
 * @throws {Error} if one of the required var is not found
 */
export const loadEnv = (varName?: string): GlobalEnvironment | string => {
	if (typeof window === undefined) {
		// Check on the server side only
		// that all the required environment variables are present
		REQUIRED_ENVIRONMENT_VARS.forEach((varName) => {
			if (process.env[varName] === undefined) {
				throw new Error(`Required environment variable '${varName}' was not found.
Check your '.env' file or create the requested secret in your Vercel project settings.
${JSON.stringify(process.env, null, "\t")}`);
			}
		});
	}

	// Note : public environment variables (prefixed with NEXT_PUBLIC) are inlined on the client side !
	const env = {
		siteName: process.env.NEXT_PUBLIC_SITE_NAME as string,
		siteUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
		siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION as string,
		snipcartApiKey: process.env.NEXT_PUBLIC_SNIPCART_API_KEY as string
	};

	return varName ? env[varName] : env;
};
