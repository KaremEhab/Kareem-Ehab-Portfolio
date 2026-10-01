# Design QA — Selected “Ideas in motion” Hero

- Source visual truth: `/workspace/scratch/a61597f15bea/upload/01-image.png`
- Browser-rendered implementation: `/workspace/scratch/a61597f15bea/qa/implementation-hero-final.jpeg`
- Combined comparison: `/workspace/scratch/a61597f15bea/qa/hero-comparison-final.png`
- Production URL: `https://karem-ehab-design.kareemehab.chatgpt.site`
- State: English, light hero canvas, page at top, fully loaded
- Browser viewport: 1200 × 750 CSS px, device scale factor 1
- Source pixels: 1488 × 1057; normalized by cropping the top 1488 × 930 hero region and resizing to 1200 × 750
- Implementation pixels: 1200 × 750

## Full-view comparison evidence

The final side-by-side comparison preserves the selected concept’s main composition: logo-only header, centered navigation, cream gallery canvas, oversized “Ideas in motion.” typography, cobalt orbital sculpture, lime/coral satellites, thin orbit lines, centered supporting line, and dark CTA. The sculpture overlaps “Ideas” while the opening “m” of “motion” turns white over the cobalt surface, matching the reference depth treatment.

## Required fidelity surfaces

- Fonts and typography: Space Grotesk matches the reference’s geometric grotesk character. Display scale, tight tracking, line placement, and black/white/lime hierarchy are visually aligned.
- Spacing and layout rhythm: Header offsets, sculpture scale, title positions, centered caption, and CTA rhythm match the normalized reference. The live header remains compatible with its existing docked state.
- Colors and tokens: Warm cream, near-black, cobalt, electric lime, and coral match the target direction. Contrast remains strong on the fixed hero canvas.
- Image quality and asset fidelity: The hero uses a dedicated transparent 1488 × 1057 rendered PNG with clean alpha, sharp highlights, and no placeholder or CSS-drawn substitute.
- Copy and content: “Ideas in motion.”, “UI/UX design with clarity, rhythm, and joy.”, and “Explore my work” match the selected design. Arabic equivalents remain available through the site locale control.

## Focused-region comparison evidence

The title/model overlap was reviewed separately at the left “Ideas” edge and the foreground “motion” word. The final implementation keeps “Ideas” behind the sculpture, “in” above it, and the white first letter of “motion” over the blue surface before returning to black type and a lime period.

## Comparison history

### Pass 1 — blocked

- P2: The sculpture sat too low and left, reducing the whitespace around the supporting sentence.
- P2: The foreground “motion” word lacked the selected reference’s white leading letter over the cobalt form.
- Fixes: shifted the artwork upward/right, moved the display words upward, refined the motion word alignment, and added the white first-letter depth treatment.

### Pass 2 — passed

- Post-fix evidence: `/workspace/scratch/a61597f15bea/qa/hero-comparison-final.png`
- No actionable P0, P1, or P2 differences remain.

## Interaction verification

- Scroll-driven artwork movement and the hero-to-work transition were tested in the cloud browser.
- “Explore my work” updates the URL to `#work` and lands the selected-work section beneath the fixed header.
- The fixed menu opens and closes successfully.
- Browser logs showed no site-origin errors; only unrelated browser-extension metadata errors were present.

## Follow-up polish

- P3: No separate mobile reference was supplied. The mobile composition uses purpose-built responsive rules, but a future mobile-specific art-direction pass could tune the crop further on very narrow screens.

final result: passed
