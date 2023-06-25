import type { VercelRequest, VercelResponse } from '@vercel/node';
import supa_client from '../../utils/supabase_client';
import * as z from "zod";

export default async (request: VercelRequest, response: VercelResponse) => {

    const supabase = supa_client()

    const User = z.object({
        email: z.string().email(),
        password: z.string().max(100),
    });    
            
    const { email, password }: {email: string, password: string} = request.body;

    const user_submission = User.safeParse({ email: email, password: password });

    if (user_submission.success) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: user_submission.data.email,
            password: user_submission.data.password,
        });
        
        if (error) {
            response.status(400).json({ error: error.message })
        } else {
            response.status(200).json({ success: data });
        }
    } else {
        response.status(400).json({ error: user_submission })
    }
}
