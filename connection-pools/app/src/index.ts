import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request: any, env: Env, ctx: any): Promise<any> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate());
		const res = await prisma.log.create({
			data: {
				// leveol:'infi',
				message: 'hello world frm connection pool',
				// meta: {
				// 	Headers: JSON.stringify(request.headers),
				// },
			},
		});
		console.log(res);

		return Response.json(res);
	},
} satisfies ExportedHandler<Env>;
