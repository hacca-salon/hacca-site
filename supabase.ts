// supabase.ts
import { createClient } from '@supabase/supabase-js'

// .env から読み込む（VITE_ プレフィックスつき！）
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

// Supabaseクライアントを作成してエクスポート
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
