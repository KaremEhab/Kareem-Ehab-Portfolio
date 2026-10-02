# Silver portrait

The About hero uses the user's silver portrait as a transparent texture on a 100 × 100 WebGL relief mesh. Nose, cheeks, forehead and neck have approximate depth. This is a 2.5D portrait, not a reconstructed full head or a rigged 360-degree model. Turns are bounded to preserve the frontal likeness.

Features: damped pointer tracking, subtle eye texture movement, shader eyelid blink, idle breathing, greeting nod, pause/resume, reduced-motion support, offscreen/hidden-tab suspension, static image fallback.

Asset: `dist/karem-silver-portrait.png`
Created with the built-in image-generation tool from the user-supplied silver face image.

Prompt: “Use case: background-extraction. Edit target: supplied silver portrait. Remove white background and floor shadow only. Preserve exactly this man's likeness, silver chrome material, curly hair, open eyes, mustache, beard, neck and bust silhouette. Keep frontal view, unchanged facial proportions and lighting. Entire bust centered with small transparent margins. No text or other objects. Transparent PNG for interactive web portrait.”

Reference: https://www.gionatannese.com/about and user screenshots. Live browser inspection was denied; exact reference motion parity is not claimed.
