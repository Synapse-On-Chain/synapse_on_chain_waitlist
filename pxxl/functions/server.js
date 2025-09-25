const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const app = express();

// ✅ Allowed origins (no trailing slashes)
const allowedOrigins = [
  "https://synapseonchain.xyz",
  "https://synapse-waitlist.pxxl.click"
];

// ✅ Apply CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow curl/postman/no-origin requests

      // ✅ Check if origin starts with any allowed origin (flexible)
      const allowed = allowedOrigins.some(url => origin.startsWith(url));

      if (!allowed) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }

      return callback(null, true);
    },
  })
);

app.use(express.json());

// ✅ Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// 🚀 POST route
app.post("/server", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // ✅ Insert email into Supabase waitlist table
  const { error } = await supabase.from("waitlist").insert([{ email }]);

  // ✅ Log errors from Supabase for debugging
  if (error) {
    console.error("Supabase insert error:", error); // <-- added logging
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Subscription successful!" });
});

// ✅ Start hosted server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});