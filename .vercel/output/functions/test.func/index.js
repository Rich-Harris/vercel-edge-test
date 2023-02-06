export default function handler(request) {
	return Response.json({
		VERCEL_REGION: process.env.VERCEL_REGION || 'undefined',
		['x-vercel-edge-region']: request.headers.get('x-vercel-edge-region'),
		['x-vercel-ip-country-region']: request.headers.get(
			'x-vercel-ip-country-region'
		)
	});
}
