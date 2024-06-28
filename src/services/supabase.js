import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pxyywxmoaxdsnvlciccq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4eXl3eG1vYXhkc252bGNpY2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNzM3ODMsImV4cCI6MjAzNDg0OTc4M30.Y6gtHwiqaW7Hn5SA2La7we878o0EcMGFYk1l6zD4fJg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
