import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(
    "https://oyyjxgyceutsfrlcjslx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95eWp4Z3ljZXV0c2ZybGNqc2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1Njk1MjMsImV4cCI6MjAzMDE0NTUyM30.PCx4vZWt7Uw_wlMWXR7fbg7T6tcHdE3fA0N3Q5CQMV0"
)