import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jlpewvkklcjvlmzrleqe.supabase.co";
const supabaseKey = "sb_publishable_Fl3sfS4gIKsFLRCEqixrFg_-tsEX4Ix";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
