import { createTRPCRouter, publicProcedure } from '$lib/trpc/t';

export const apartments = createTRPCRouter({
    list: publicProcedure.query(({ ctx }) => {
      return ctx.prisma.example.findMany();
    }),
});
