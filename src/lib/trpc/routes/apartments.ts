import { t } from '$lib/trpc/t';

export const apartments = t.router({
    list: t.procedure
        .query(() => {
            return {
              message: 'hello',
            };
        })
});