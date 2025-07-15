import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rxhhdgsmypjwluhbtjyr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4aGhkZ3NteXBqd2x1aGJ0anlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTc1NTMsImV4cCI6MjA2ODE3MzU1M30.KWXcbDG1fYJPLemK87cAhz15TVtBJoiXyc-L5Kb5MpQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
