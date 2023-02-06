export default function handler(request) {
	return Response.json({
		VERCEL_REGION: process.env.VERCEL_REGION || 'undefined',
		headers: Object.fromEntries(request.headers)
	});
}
