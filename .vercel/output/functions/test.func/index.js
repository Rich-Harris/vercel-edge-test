export default function handler(request) {
	return new Response(
		`region: ${request.headers.get('x-vercel-edge-region') ?? 'unknown'}`
	);
}
