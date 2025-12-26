import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oihkawxvzxalspembije.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9paGthd3h2enhhbHNwZW1iaWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3MDYwNjAsImV4cCI6MjA4MjI4MjA2MH0.ieIY5yI7VSlTZl3HXg4kuExpBsH9pxwSPY06crIIowI";

export const supabase = createClient(supabaseUrl, supabaseKey);
