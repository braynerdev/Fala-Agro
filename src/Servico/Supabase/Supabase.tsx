import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qoayxfnsbmnqbmvcioyw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvYXl4Zm5zYm1ucWJtdmNpb3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4Mjc4MzYsImV4cCI6MjA2MjQwMzgzNn0.JyEStb25H3cUKr2h0JFRoenz_zCum6LxNiK9J5Ai3_w'; // sua chave `anon`

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);