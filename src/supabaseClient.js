import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bmtbwfkfrgehewylbtng.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdGJ3ZmtmcmdlaGV3eWxidG5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3Njk2MDYsImV4cCI6MjA1MDM0NTYwNn0.BGk61M6AWotjrlNkbg_7V8dU7IJNiFYeapm2mPyMbRU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
