# Daniel Li — Engineering Portfolio

A responsive static portfolio for an Electrical and Computer Engineering student at UT Austin. Dark navy theme, five project case studies, clearly labeled image placeholders, and a downloadable factual resume draft. No framework, package installation, or backend is required.

## Preview locally

Install Node.js (18 or newer), then run from this folder:

```sh
node build.mjs
node check.mjs
node serve.mjs
```

Open http://127.0.0.1:4173/engineering-portfolio/. Stop the preview with Ctrl+C.

## Deploy on GitHub Pages

The target repository is https://github.com/danielwhli/engineering-portfolio.

1. Push this folder's contents to the repository's `main` branch. Keep `.github/workflows/deploy.yml`.
2. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, or push another commit to `main`.
4. After the workflow succeeds, the site is available at https://danielwhli.github.io/engineering-portfolio/.

The workflow builds the static pages, checks internal links, uploads `dist/`, and deploys it. Generated links are relative so project pages, downloads, and assets work under the repository subpath. The 404 page and local preview mount use `/engineering-portfolio/`; update those two values if the repository is renamed or moved to a custom domain.

Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Update content

Edit `content.mjs`, then run `node build.mjs` and `node check.mjs`. Commit the edits; GitHub Actions rebuilds automatically.

- `profile`: name, bio, university, optional contact links, and resume status. Email, GitHub, and LinkedIn footer links appear only when supplied. The hosting repository is not automatically treated as a personal profile link.
- `skills`: skill groups and the tools represented by the supplied project facts. No proficiency ratings are implied.
- `projects`: titles, summaries, contribution statements, case-study sections, tags, and image captions.
- `dist/assets/site.css`: visual design and responsive layouts.
- `dist/assets/main.js`: accessible mobile navigation and project filters. All project content remains available without JavaScript.

## Replace image placeholders

Put a compressed image in `dist/assets/`, then set the corresponding gallery item in `content.mjs`:

```js
{ label: 'Full mechanism assembly', image: 'turret-assembly.webp', alt: 'Describe the actual mechanism and relevant visible details.' }
```

Use just the filename in `image`; it is resolved relative to `assets/`. Add meaningful alt text. Empty `image` values retain clearly labeled placeholders. Set a project's `coverImage` and `coverAlt` to replace its homepage card and case-study cover. The homepage hero remains a clearly labeled conceptual schematic. All remaining schematics are deliberately conceptual, not representations of actual CAD geometry.

## Resume

`dist/assets/daniel-li-resume.pdf` is a one-page **draft** compiled only from the supplied facts. Contact details, dates, GPA, expected graduation, work history, measured results, awards, and unsupported skills are omitted. Replace it with Daniel's verified resume before treating it as a final application document. To remove draft labels afterwards, set `profile.resume.draft` to `false` and update `profile.resume.label`.

## Accessibility and content

Semantic landmarks and headings, skip navigation, visible keyboard focus, labeled filters, live filter counts, mobile menu state and Escape handling, reduced-motion support, print styles, and responsive layouts are included. Schematics are decorative; adjacent text describes them as placeholders. No tracking, external font requests, or runtime CDN dependencies are used.

Design context is distinguished from personal accomplishments. Project documentation that was not supplied is listed as pending. There are no invented results, performance figures, competition placements, participant counts, or delivery dates.
