import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.47.12/+esm";

// Use environment variables or a secure way to load these in production
const projectUrl = "https://dgvgxfszkiseozxzmvyv.supabase.co";
const projectApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndmd4ZnN6a2lzZW96eHptdnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0ODg1NDgsImV4cCI6MjA1MjA2NDU0OH0.qwP-8E-Z52fNR63RNl3eTnTownSy_q7Keilcc3g_INY";

const supabase = createClient(projectUrl, projectApiKey);

console.log('Supabase Instance: ', supabase);

let btn = document.getElementById("signup-btn");
btn.addEventListener("click", async () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both fields!");
        return;
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error("Error signing up:", error.message);
            alert("Signup failed: " + error.message);
        } else {
            console.log("Signup successful:", data);
            alert("Signup successful! Please check your email.");
        }

        // Clear the input fields after signup attempt
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

    } catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred. Please try again.");
    }
});

  
  
  // const projectApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndmd4ZnN6a2lzZW96eHptdnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0ODg1NDgsImV4cCI6MjA1MjA2NDU0OH0.qwP-8E-Z52fNR63RNl3eTnTownSy_q7Keilcc3g_INY";