# 🌟 Instant Bio – GitHub Pages Template

Instant Bio is a fast, zero-setup personal bio page powered entirely by `profile.json`. Just click **Use this template**, personalize your JSON, and go live in under 2 minutes.

---

## 🚀 How to Use

1. Click **Use this template** at the top of the repo.

2. Name your new repo (e.g. `mehul`, `my-bio`, etc.)

3. GitHub Pages will auto-deploy to:

   ```
   https://your-username.github.io/your-repo-name/
   ```

4. Edit `profile.json` to update your name, headline, photo, and bio content.

5. ✅ Done! Share your live profile anywhere.

---

## 🧩 profile.json Schema (v1.0.0)

```json
{
  "version": "1.0.0",
  "name": "Mehul Gohil",
  "email": "mehul@example.com",
  "contact": "https://mehul.dev/contact",
  "headline": "WordPress Expert & SaaS Developer",
  "short_description": "Helping businesses scale with blazing-fast WordPress solutions.",
  "keywords": "WordPress developer, SaaS builder, freelance expert, plugin developer",
  "photo_url": "https://your-username.github.io/your-repo-name/assets/photo.jpg",
  "description": "<strong>Mehul</strong> is a <em>Certified WordPress Expert</em> helping teams build performant, secure, and scalable digital products.",
  "ui": "wds",
  "hovercard": true,
  "social": [
    { "platform": "twitter", "url": "https://twitter.com/mehul" },
    { "platform": "linkedin", "url": "https://linkedin.com/in/mehul" },
    { "platform": "github", "url": "https://github.com/mehul" }
  ],
  "links": [
    {
      "category": "Social",
      "items": [
        { "title": "Twitter", "url": "https://twitter.com/mehul" },
        { "title": "LinkedIn", "url": "https://linkedin.com/in/mehul" }
      ]
    },
    {
      "category": "Projects",
      "items": [
        { "title": "OneCaptcha", "url": "https://onecaptcha.com" },
        { "title": "Pet Gratitude", "url": "https://petgratitude.com" }
      ]
    }
  ]
}
```

> 💡 Supports HTML formatting in `description`

### Supported Social Platforms

The `social` array provides dedicated icons for these platforms:

- twitter (or x)
- linkedin
- github
- facebook
- instagram
- youtube
- tiktok
- mastodon
- dribbble
- behance
- medium
- dev
- stackoverflow

For other platforms, a generic link icon will be displayed.

---

## 🎨 UI Options

| Slug  | Description                       |
| ----- | --------------------------------- |
| `wds` | WordPress Design System (default) |

More UI kits coming soon!

---

## ✨ Features

* **Social Icons** - Display social media profiles with dedicated platform icons
* **Download as PDF** - Allow visitors to download your bio as a PDF document
* **SEO Optimized** - Dynamic meta tags for better search engine visibility 
* **Mobile-Friendly** - Responsive design that works on all devices
* **Zero Setup** - Just edit profile.json and you're live!

---

## 🔄 Updating Your Live Site

* Edit `profile.json` in the GitHub web editor or push changes via Git
* The live site auto-updates — no rebuilds needed

---

## 🧪 Coming Soon

* `embed.js` to show hovercards on any website
* Additional UI themes (Tailwind, Bootstrap)
* GitHub Action to auto-enable Pages on fork

---

## 📄 License

MIT License — free to use, fork, remix, and deploy.

---

## 🙌 Credits

Made with ❤️ by [Mehul Gohil](https://mehulgohil.com) – Helping developers build performant WordPress and SaaS tools.
