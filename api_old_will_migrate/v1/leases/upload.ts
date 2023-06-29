import type { VercelRequest, VercelResponse } from '@vercel/node';
import supa_client from '../../utils/_supabase_client';

export default async (request: VercelRequest, response: VercelResponse) => {
    try {
        const supabase = supa_client()
                
        const buffer: Buffer = request.body;
        
        const { data, error } = await supabase.storage.from("leases").upload("leases/test.jpg", buffer);
        if (error) { 
            throw new Error(error.message);
        }

        response.status(200).json({ body: data });
    } catch (error) {
        response.status(400).json({ error: error.message })
    }
}
