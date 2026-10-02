# Design QA — Hero crop, depth text, and orbit interaction

- Source visual truth: `C:\Users\karem\AppData\Local\Temp\codex-clipboard-c711f1d1-6263-43b6-bca6-61c8c0c72463.png` (desktop, 1927 × 1521 px) and `C:\Users\karem\AppData\Local\Temp\codex-clipboard-a2dc2396-e929-4825-a344-a47760f4d79f.png` (mobile reference)
- Browser-rendered implementation: Codex in-app Browser capture, local preview `http://localhost:4173/` (the browser API did not expose a filesystem path for the capture)
- Desktop viewport: 1280 × 720 CSS px at device pixel ratio 1.5
- Mobile viewport: 393 × 852 CSS px
- State: English, dark theme, page at top, hero assets fully loaded

## Findings

- No actionable P0, P1, or P2 issues remain in the requested surfaces.
- The desktop sculpture is fully contained by the hero stage: measured artwork bounds are y=85.8–822.4 within stage bounds y=57.3–850.9.
- The back layer of “motion.” now resolves to the same theme-aware foreground color as “Ideas” (`rgb(240, 241, 247)` in the verified dark theme), while the front duplicate remains an outline over the sculpture.
- All four orbit balls expose interactive controls and run their pop animation. Mouse click and keyboard Enter activation were both verified; touch/coarse-pointer bursts remain enabled.

## Required fidelity surfaces

- Fonts and typography: Existing Space Grotesk sizing, weight, tracking, and responsive placements are preserved. Only the requested `motion.` back-fill color changed.
- Spacing and layout rhythm: Desktop sculpture scale and vertical placement were adjusted so its transparent artwork no longer intersects the stage crop. The 393 × 852 mobile composition remains balanced and unchanged in scale.
- Colors and visual tokens: `motion.` now inherits `--ink`, matching `Ideas` in both light and dark themes. The front outline remains white for the depth effect.
- Image quality and asset fidelity: The original transparent cobalt PNG is retained without resampling or replacement.
- Copy and content: No copy changed.

## Focused-region evidence

- Desktop top edge: the blue sculpture now has visible breathing room above its highlight instead of a flat clipped edge.
- Title/model overlap: `motion.` is filled on the back layer and outlined on the foreground layer, preserving the intended dimensional overlap.
- Orbit controls: clicking a visible ball produced one active `.is-popping` state; keyboard activation produced the same result. Four named orbit controls appear in the accessibility tree.

## Comparison history

### Pass 1 — blocked

- P2: Desktop artwork exceeded the hero stage and was clipped at wide widths.
- P2: The `motion.` back layer used a hard-coded dark value, so it disappeared against the dark canvas instead of matching `Ideas`.
- P2: Orbit balls were visually animated but not independently interactive.

### Pass 2 — passed

- Reduced the wide-screen artwork width to `min(82%, 1180px)` and centered it vertically at 50%.
- Replaced the hard-coded motion fill with the theme token `var(--ink)`.
- Added pointer and keyboard activation, a ball compression/rebound animation, the existing joy burst/ripple language, larger invisible hit targets, focus styling, and accessible labels.
- Rechecked desktop and mobile captures after the fixes. Browser console reported no warnings or errors.

## Interaction verification

- Orbit ball mouse click: passed.
- Orbit ball keyboard Enter activation: passed.
- Mobile 393 × 852 responsive layout: passed.
- Browser console warnings/errors: none.
- Production build validation: passed.

## Follow-up polish

- No blocking follow-up items.

final result: passed
