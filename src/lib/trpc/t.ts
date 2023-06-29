import { initTRPC } from '@trpc/server';

import type { inferAsyncReturnType } from '@trpc/server';

import superjson from "superjson";
import { ZodError } from "zod";
import { prisma } from "$lib/db";


/* context definition */
type CreateContextOptions = Record<string, never>;

const createContext = (_opts: CreateContextOptions) => {
    return {
      prisma,
    };
  };
  
export type Context = inferAsyncReturnType<typeof createContext>;


/* main router definition */
const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/** helper for creating new routers */
export const createTRPCRouter = t.router;

/** helper for creating unauthenticated procedures and routes */
export const publicProcedure = t.procedure;
