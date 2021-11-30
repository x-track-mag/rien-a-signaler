/**
 * @typedef GlobalEnvironment
 * @property {String} siteName Used to build each page's title
 * @property {String} siteUrl Base URL (home page)
 * @property {String} siteDescription Used in the Head
 */
type GlobalEnvironment = {
	siteName: string;
	siteUrl: string;
	siteDescription: string;
};

const REQUIRED_ENVIRONMENT_VARS = [
	"NEXT_PUBLIC_SITE_URL",
	"NEXT_PUBLIC_SITE_NAME",
	"NEXT_PUBLIC_SITE_DESCRIPTION"
];

/**
 * Load the global environment variables
 * @returns {GlobalEnvironment}
 * @throws {Error} if one of the required var is not found
 */
export const loadEnv = (): GlobalEnvironment => {
	if (typeof window !== undefined) {
		// Public environment variables are inlined on the client side !
		return {
			siteName: process.env.NEXT_PUBLIC_SITE_NAME as string,
			siteUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
			siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION as string
		};
	}

	// Server Side
	const env = process.env;

	// Check that each environment variable is present
	REQUIRED_ENVIRONMENT_VARS.forEach((varName) => {
		if (env[varName] === undefined) {
			throw new Error(`Required environment variable '${varName}' was not found.
Check your '.env' file or create the secret in your Vercel project settings.`);
		}
	});

	return {
		siteName: env.NEXT_PUBLIC_SITE_NAME as string,
		siteUrl: env.NEXT_PUBLIC_SITE_URL as string,
		siteDescription: env.NEXT_PUBLIC_SITE_DESCRIPTION as string
	};
};
