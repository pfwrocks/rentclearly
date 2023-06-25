import { createClient, SupabaseClient } from '@supabase/supabase-js';

export default function supa_client(): SupabaseClient {
    const supa_url = process.env.SUPABASE_URL
    const supa_key = process.env.SUPABASE_ANON_KEY
    
    if (supa_url == undefined || supa_key == undefined) {
      throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be set")
    }
    
    const supabase = createClient(
        supa_url, 
        supa_key
    )

    return supabase
}
