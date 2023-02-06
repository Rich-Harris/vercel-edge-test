export default function handler(request) {
	return new Response(`region: ${process.env.VERCEL_REGION}`);
}
