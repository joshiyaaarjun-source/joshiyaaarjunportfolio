# Joshiyaa Arjun — Starry Portfolio

A polished, responsive Next.js portfolio with a dark blue / gold starry visual language, subtle motion, custom star cursor, responsive navigation, project storytelling, skills, hackathons, education, contact links, and downloadable resume.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm start
```

## Where to edit the portfolio

**Edit only this file for normal content updates:**

`app/content.ts`

It is deliberately separated from the UI so you do not need to hunt through `page.tsx` every time you win a hackathon or learn a new skill.

### Add a new hackathon

Open `app/content.ts` and add another object to `hackathons`:

```ts
{ medal: '01', name: 'NEW HACKATHON', result: '1st Place', role: 'Team Lead' },
```

Save, then run `npm run dev` and refresh the browser.

### Add a skill

Add it to an existing category:

```ts
Engineering: ['Python', 'Java', 'New Skill'],
```

Or create a new category:

```ts
AI: ['Computer Vision', 'RAG', 'Agents'],
```

The new category automatically appears as a clickable skill tab.

### Add a completely new simple section

Use the `customSections` array near the bottom of `app/content.ts`:

```ts
{
  id: 'leadership',
  label: 'Leadership',
  title: 'Building teams as carefully as products.',
  body: 'A short introduction for the new section.',
  items: [
    'Team Lead — National Hackathons',
    'Frontend / backend coordination',
    'Pitching and task allocation',
  ],
},
```

The section will be rendered automatically, and its label will automatically appear in the navigation. No `page.tsx` editing is needed for this kind of section.

### Update experience / projects / education

These are also data-driven in `app/content.ts`:

- `experience`
- `projects`
- `education`
- `skills`
- `hackathons`
- `contact`

### Update links

Change the URLs inside `contact` for GitHub, LinkedIn, or resume, or the `link` value on an experience entry for a company website.

## Viewer vs owner editing

The deployed website has **no edit/admin interface**. A visitor can only view and interact with the portfolio.

You are the editor because you control the source repository. To change content:

1. Edit `app/content.ts` locally (or edit that file in your private/owned GitHub repository).
2. Preview with `npm run dev`.
3. Commit/push the change.
4. Vercel automatically creates a new deployment if the project is connected to the repository.

Do **not** expose an admin dashboard or editing API unless you intentionally want a CMS later.

## Resume

The downloadable resume is in:

- `public/resume.pdf`
- `public/resume.docx`

The public Resume button downloads the PDF.

## Visual assets

The Starry Sky, number, palette, and other images originally supplied as visual references are **not used** in the site. The only intentionally used supplied visual is the JA logo at `public/ja-logo.png`, as specifically requested.

## Deployment

Recommended: deploy the repository with Vercel.

### GitHub → Vercel workflow

1. Create a GitHub repository for this project.
2. Upload/push the contents of `joshiyaa-portfolio` to that repository.
3. Import the repository into Vercel.
4. Keep the default Next.js build settings.
5. Deploy.
6. Every future push to the production branch can automatically redeploy the updated portfolio.

Your visitors only receive the built website; they do not receive access to your source files or editing controls.
