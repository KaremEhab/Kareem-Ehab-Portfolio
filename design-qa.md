# Projects Orbit Design QA

## Evidence

- Source visual truth: `C:\Users\karem\Videos\Screen Recordings\Screen Recording 2026-10-03 130306.mp4`
- Source dimensions: 1428 × 802 px, 30 fps, 11.57 seconds.
- Implementation: `http://127.0.0.1:3000/?qa=1#projects`
- Implementation screenshot: captured from Codex in-app Browser tab `4` during this QA run. The browser backend displayed the PNG evidence but did not expose a filesystem path.
- Desktop viewport: 1280 × 720 CSS px at the browser's default density.
- Mobile viewport: 390 × 844 CSS px at the browser's default density.
- States compared: opening cover, horizontal strip, complete circular orbit, rotated orbit, selected-cover expansion, full-viewport cover, mobile orbit, and dark appearance.

## Full-view comparison evidence

- The implementation follows the reference sequence: one small centered cover → a horizontal image strip with oversized title → a circular image orbit → orbit rotation → a centered selected cover expanding to the viewport.
- The original header and the portfolio's existing light/dark tokens intentionally replace the reference video's header and gray-to-mauve background, per the user's explicit direction.
- Ten real portfolio visuals are used around the orbit; no decorative placeholders replace project content.
- The central project name, number, discipline, and selected project update together.

## Focused region comparison evidence

- Central title lockup: checked at desktop and mobile orbit states for hierarchy, spacing, wrapping, and contrast.
- Orbit geometry: checked at desktop and mobile for a complete ring, consistent center, no horizontal document overflow, and selected-tile depth.
- Selected-cover transition: checked at 86% and 100% scroll progress; the cover expands continuously from its orbit position to the viewport.
- Header: verified as the existing four-link header with its existing menu and appearance behavior.

## Comparison history

1. Earlier issue — [P2] the opening cover shifted left after choosing a different project.
   - Fix: row positions are now calculated relative to the selected tile rather than the collection midpoint.
   - Post-fix evidence: the opening cover is centered for the active project on desktop and mobile.
2. Earlier issue — [P2] the reference palette conflicted with the requested portfolio colors.
   - Fix: removed the gray/mauve color interpolation and bound the section to `--paper`, `--ink`, `--muted`, `--border`, and `--blue`.
   - Post-fix evidence: light mode resolves to `rgb(245, 245, 243)` / dark mode to `rgb(16, 18, 24)` while preserving the same motion.
3. Earlier issue — [P2] the section's micro heading competed with the fixed desktop header.
   - Fix: moved the micro heading below the existing 80 px header; mobile retains a tighter offset below its 54 px header.
   - Post-fix evidence: header and section labels occupy separate vertical bands.
4. Earlier issue — [P2] the existing difference-blend header lost contrast on the light project background.
   - Fix: while the orbit section is visible, the unchanged header structure now uses the portfolio's `--ink` color; its supplied white SVG logo is inverted only in light appearance.
   - Post-fix evidence: logo, navigation, active underline, and menu control remain visible in both light and dark appearances.

## Required fidelity surfaces

- Fonts and typography: existing Inter, DM Sans, and Space Mono families retained; uppercase lockup, compressed line-height, and small monospaced labels match the reference's hierarchy.
- Spacing and layout rhythm: pinned 520svh desktop / 440svh mobile sequence, centered opening cover, horizontal strip, elliptical orbit, and full-screen final cover verified.
- Colors and visual tokens: deliberate product-specific adaptation using the existing portfolio tokens; light and dark appearances both verified.
- Image quality and asset fidelity: only supplied portfolio raster and SVG assets are used. Images use cover/contain behavior appropriate to screenshots and logo cards, with no generated substitutes.
- Copy and content: project names, numbering, disciplines, labels, and actions use the portfolio's real project content.

## Findings

- No remaining P0, P1, or P2 fidelity issues.

## Follow-up polish

- [P3] Additional project-specific hero images can replace repeated supporting screens when new case-study artwork becomes available.

## Verification

- Primary interactions tested: scroll-driven sequence, project selection, title update, keyboard selection support, case-study opening, appearance switching, and menu/header persistence.
- Console errors: none.
- Production build verification: passed.

## Sequential project story extension — 2026-10-03

- Extended the selected-cover moment into five full-screen project chapters: Morrow → Gather → Forma → Olfah → Bazooka.
- Continued scrolling now performs a layered card handoff: the current chapter lifts and soft-tilts away while the next chapter scales into the viewport from beneath it.
- Added real supporting UI screens to the Morrow, Gather, and Forma chapters so the showcase presents interface work as well as campaign covers.
- Added a persistent chapter rail with direct project jumps, active-state feedback, keyboard previous/next behavior, and case-study actions.
- Retained the existing four-link header, menu behavior, appearance settings, and portfolio color tokens.
- Desktop QA: verified Morrow, Gather, and Forma chapter states, direct chapter navigation, fixed header readability, and continuous scroll behavior.
- Mobile QA at 390 × 844: verified full-width action treatment, horizontal chapter index, readable card copy, no project-action/FAB collision, and no horizontal overflow.
- Dark appearance QA: verified chapter card, header, navigation, and CTA contrast.
- Console warnings/errors: none.
- Production build verification: passed.

final result: passed
