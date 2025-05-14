import { createClient } from '@supabase/supabase-js'


const SERVICE_KEY = 'SUPABASE_SERVICE_KEY'
const SUPABASE_URL = "https://qoayxfnsbmnqbmvcioyw.supabase.co"

export const supabase = createClient(SUPABASE_URL, SERVICE_KEY)