# Emmanuel Rubio — Shopify VA Portfolio

HTML + Tailwind CSS + vanilla JavaScript. No framework or backend required.

## Open in VS Code
1. Extract this ZIP.
2. In VS Code, select **File → Open Folder** and choose the extracted folder.
3. Open `dist/index.html` using the Live Server extension, or open that file directly in your browser.

The compiled stylesheet is included, so no installation is required to view or edit text.

## What to edit
| File | Purpose |
| --- | --- |
| `dist/content.js` | Your details, services, packages, projects, education, and tools |
| `dist/index.html` | Page sections, headings, buttons, and metadata |
| `dist/styles.css` | Colors, layout, responsive design, modal styling |
| `dist/app.js` | Drag/swipe banner, background motion, modal, menu, and interactions |
| `dist/Emmanuel-Rubio-CV.pdf` | Replace this file with your updated CV, keeping the same filename |
| `dist/logos/` | Local tool logos |

## Rebuild Tailwind only when changing utility classes
Install Node.js, then run in the VS Code terminal:

```sh
npm install
npm run build:css
```

Use `npm run watch:css` during ongoing utility-class edits. Changes to `styles.css` and text do not require a rebuild. Refresh your browser after editing.

## Interactions
- Tools scroll continuously; hover, keyboard focus, drag, or swipe temporarily stops automatic movement.
- Drag with a mouse, swipe on touch screens, or focus the banner and use left/right arrow keys.
- The footer's Reduce motion setting stops background and automatic banner movement. System reduced-motion preferences are respected.
- Project details open in a centered modal. Close with the close button, Escape, or a click outside.
- Email buttons open the visitor's email application; there is no form backend.

## Assets and content
Tool logos are from Simple Icons (CC0); brand trademarks remain their owners’ property. Project cards are typographic presentations, not screenshots. The included CV is the resume you supplied.

The ZIP excludes dependencies, Git history, and hosted-site configuration. The `dist` folder is the complete static website.

## Latest layout updates
- Desktop hero uses `dist/images/emmanuel-portrait.png`, a background-removed and enhanced version of your supplied photo. Mobile hero shows text and actions only.
- Sections reveal as they enter the viewport, respecting reduced-motion settings.
- On mobile, projects use a horizontal swipe row with scroll snapping. The focused row also supports arrow keys.
- Buttons use filled colors, subtle shadows, and hover/press feedback.

Portrait asset: edited with the built-in image-generation tool. Prompt: remove the gray background to transparent alpha, improve clarity while preserving the person's identity, glasses, graduation gown, and pose.

The current hero portrait uses your replacement photo with the visible necktie. The background was removed and clarity enhanced with the built-in image tool, preserving facial features and clothing; the closer crop makes the subject larger.

## Hero layout
The hero headline uses three fixed lines and scales with its text column. On desktop, text and portrait have equal-width columns; the text determines their shared height. The portrait fills its column with a top-aligned crop. Mobile retains the text-only hero.

## Light blue theme
The site opens in a light theme with blue accents. The final CSS section contains theme colors. The background uses separated honeycomb cells with slow blue pulses and gentle drifting motion. It sits behind all page content and never captures clicks. Edit `paintAmbient()` in `dist/app.js` to adjust their opacity or geometry. Reduce motion stops background animation.

## Smaller futuristic cells
Cell radius is 30px on desktop and 22px on mobile. A slow diagonal glow and sparse cyan edge highlights create movement. Contrast is reduced toward the center behind content; all effects stay below text, respect Reduce motion, and pause while the tab is hidden. Adjust the radius and alpha values in `paintAmbient()` to customize the effect.

## Latest additions
GasketCity is listed as a TALL-stack ecommerce project. A transparent graduation cap appears on portrait hover or keyboard focus and resizes with the portrait. The cap is a separate generated asset in `dist/images/graduation-cap.png`; the face is unchanged. Honeycomb motion and glow are softer.

## Project carousel and portrait
Projects show three cards on desktop, two on tablet, and one swipeable card on mobile. Previous/Next rotate the three existing cards on desktop and scroll between cards on smaller screens. Screenshots are mapped to their matching projects. Hover/focus crossfades to the full `emmanuel-with-cap.png` portrait, replacing the old floating cap effect.

Portrait states now share a single calculated scale and position; hover does not refit the person to the added cap. Project screenshots use cover cropping to fill their frames edge to edge.

## Code formatting

Run `npm install`, then `npm run format` to keep the editable code consistently formatted.
`dist/content.js` contains your details; `dist/index.html` contains the page structure;
`dist/styles.css` controls the design; `dist/app.js` handles interactions.
`dist/tailwind.css` is generated; edit `input.css` and run `npm run build:css` instead.
