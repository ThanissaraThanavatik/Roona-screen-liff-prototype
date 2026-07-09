import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./cn-BLSKlp9E.js";function s({className:t,...o}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{"aria-hidden":"true",className:"mt-auto h-6 shrink-0"}),e.jsx("div",{className:n("sticky bottom-0 z-10 -mx-4 border-t border-[var(--color-border-default)] bg-white px-4 py-3 shadow-elevation-sticky",t),...o})]})}s.__docgenInfo={description:`StickyActionBar — the pinned bottom action bar for LIFF working-screens (SCR-FORM "ตรวจ", and any
future screen that fixes a primary action to the bottom). Reuse this everywhere a screen pins a
bottom action so the treatment stays consistent across the flow (chosen 2026-07-06).

Behaviour:
- A \`mt-auto h-6\` spacer is rendered just above the bar: \`mt-auto\` pins the bar (and its 24px gap)
  to the bottom of the flex column when content is short; when content scrolls, \`mt-auto\` collapses
  and the \`h-6\` keeps a guaranteed 24px gap so the last element never butts the bar's top border.
  The gap is baked in here (not per-screen \`pb-*\`) so every screen using this bar stays consistent
  (decided 2026-07-08). Callers must NOT add their own bottom padding for the bar.
- \`sticky bottom-0\`: keeps the bar pinned to the viewport bottom while the content scrolls behind it.
- Full-bleed: \`-mx-4 px-4\` cancels the LiffShell \`<main>\` p-4 gutter so the bar reaches the screen
  edges and reads as chrome, then restores inner padding for the action. (Assumes the shell's 16px
  gutter — the standard LIFF layout.)
- Contrast: an UPWARD elevation shadow + top border lift the bar above the scrolling content. On the
  sunken (gray-50) canvas the bar and the white content are both light, so separation comes from
  elevation, not color (design decision "A — Elevation", SCR-FORM sticky-footer pass).

NOTE (token): the upward shadow is now the \`--shadow-elevation-sticky\` token (shadows.json
\`elevation.sticky\` → \`shadow-elevation-sticky\`), promoted when the pattern spread to the bottom
Sheet (SCR-HIST filter drawer). Both share it so bottom-pinned chrome reads as one elevation system.
The neutral elevation.* scale still ships downward shadows only.`,methods:[],displayName:"StickyActionBar"};export{s as S};
