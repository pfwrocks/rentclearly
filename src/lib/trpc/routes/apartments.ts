import prisma from '$lib/prisma';
import { t } from "$lib/trpc/t";
import { logger } from '$lib/trpc/middleware/logger';

export const apartments = t.router({
  list: t.procedure
    .use(logger)
    .query(() => 
      prisma.apartment.findMany())
});
