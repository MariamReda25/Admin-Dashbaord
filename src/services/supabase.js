import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = `https://pmkxsswysavlapkxccze.supabase.co`;
const supabaseKey = `sb_publishable_s-3gL-dHueEOeT8zSK7qtg_mpCuHC4N`;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
