```markdown
# Synapse On-Chain Waitlist 🚀

This repository contains the **waitlist application** for **Synapse On-Chain**, a learn-to-earn blockchain platform.  
The waitlist allows users to sign up with their email and get notified when Synapse On-Chain launches.  

## ✨ Features

- 📩 Email-based waitlist sign-up.  
- 🔐 Secure data storage using [Supabase](https://supabase.com).  
- ⚡ Serverless backend powered by Express + Netlify Functions.  
- 🎨 Responsive frontend built with Tailwind CSS.  
- 🔗 Integrated with Synapse On-Chain branding.  

---

## 🗂️ Project Structure

```

pxxl/
└── functions/
├── server.js       # Express server wrapped in Netlify Functions
├── .env            # Environment variables (Supabase keys, etc.)
├── package.json    # Backend dependencies
├── package-lock.json
└── README.md

index.html                # Landing page with waitlist form
thank-you.html            # Success page after joining waitlist
pxxl.toml                 # Netlify configuration
.gitignore

````

---

## 🛠️ Tech Stack

- **Frontend**: HTML, Tailwind CSS, FontAwesome  
- **Backend**: Node.js, Express, Serverless (Netlify)  
- **Database**: Supabase (Postgres)  
- **Hosting**: Netlify  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Synapse-On-Chain/synapse_on_chain_waitlist.git
cd synapse_on_chain_waitlist
````

### 2. Install dependencies

```bash
cd pxxl/functions
npm install
```

### 3. Set environment variables

Create a `.env` file inside `pxxl/functions/`:

```env
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run locally

```bash
npm start
```

---

## 🌍 Deployment (Netlify)

1. Push code to GitHub.
2. Connect repo to Netlify.
3. Ensure **Netlify functions** are configured in `pxxl.toml`.
4. Add environment variables in Netlify dashboard.
5. Deploy 🚀.

---

## 📬 API Endpoint

The serverless function runs at:

```
POST /.pxxl/functions/server
```

**Request body:**

```json
{
  "email": "user@example.com"
}
```

**Response:**

```json
{
  "message": "Subscription successful!"
}
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the **ISC License**.

```

---

Do you also want me to add a **Netlify deploy badge** at the top of the README so visitors can deploy their own copy with one click?
```
