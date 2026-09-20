# Nat Hernández Portfolio — Design Direction

## Creative direction

This is a retro-modern editorial portfolio for a UX designer with a computer-science background. The visual system should feel equally comfortable in an art-school print studio, a design review, and a technical documentation room.

The overall direction is:

> A retro-modern editorial portfolio combining 1970s-inspired color and typography with contemporary neo-brutalist layouts, oversized display type, monospaced editorial text, flat geometric motifs, and an art-school print sensibility.

The design should communicate:

- Strong visual authorship without feeling decorative for its own sake.
- Clear systems thinking, structure, and technical fluency.
- Curiosity, experimentation, and a human point of view.
- Confidence through large type, high contrast, and generous negative space.

Avoid glossy gradients, generic SaaS styling, soft rounded cards, excessive shadows, stock photography, and overly polished corporate language.

## Typography

### Content font

Use **Intel One Mono** for all body copy, navigation, metadata, labels, captions, dates, and technical details.

- Monospaced and editorial.
- Compact but readable.
- Use regular weight for paragraphs and metadata.
- Use semibold or bold sparingly for emphasis, labels, and key phrases.
- Keep body copy short, structured, and intentional.

### Display font

Use **Monomaniac One** for headings, section titles, hero statements, project titles, and oversized labels.

- Large, bold, and slightly eccentric.
- Prefer uppercase for major display moments.
- Use tight line-height and generous tracking control.
- Let headings occupy space and create the composition rather than treating them as ordinary content labels.

### Type hierarchy

- Hero title: oversized display type, approximately `clamp(4rem, 14vw, 12rem)`.
- Section headings: large display type, approximately `clamp(2.5rem, 7vw, 6rem)`.
- Intro statement: Intel One Mono, medium or large size, with selective bold phrases.
- Metadata: Intel One Mono, small size, uppercase where useful, with generous letter spacing.
- Avoid introducing additional typefaces unless there is a clear editorial reason.

## Color system

Use the following colors as the core palette. Favor large, flat fields of color and strong contrast over subtle tonal variation.

| Token | Hex | Use |
| --- | --- | --- |
| `primary` | `#DC734B` | Main warm orange field, display text on dark backgrounds, borders, highlights, and graphic motifs |
| `secondary` | `#20452A` | Deep green field, primary dark surface, large project panels, and high-contrast text background |
| `accent` | `#6E6AB4` | Small accent marks, rules, tags, links, status details, and unexpected color interruptions |
| `paper` | `#F6EFE8` | Warm off-white editorial background and reading surface |
| `ink` | `#000000` | Primary text, display type, and high-contrast graphic details |

### Color behavior

- Use `#DC734B` and `#20452A` as the dominant visual pairing.
- Use the warm paper background to create a printed-page feeling.
- Reserve `#6E6AB4` for small, deliberate moments so it remains visually surprising.
- Prefer black or warm ink text over colored fields when contrast is sufficient.
- Do not add gradients to the core visual system.

## Blur-layer motif

Decorative elements and selected major headings use a light, approximately **1px blur**. This should read as a subtle printed softness or registration error—not as a conventional drop shadow.

### Implementation direction

Apply the effect directly to the selected element:

1. Apply `filter: blur(1px)` to the shape or heading.
2. Keep the blur subtle so the element remains legible and visually intentional.
3. Use a strong palette color for the element, commonly primary orange or ink.

Use this effect on:

- The main hero symbol or starburst.
- A few oversized hero or section headings.
- Select geometric ornaments.
- Occasional project-title treatments.

Do not apply blur to every heading, paragraph, image, or card. The restraint is what makes the motif feel intentional.

## Graphic language

Use a small vocabulary of flat, geometric motifs:

- Irregular starbursts and sun shapes.
- Thin horizontal rules.
- Rectangular frames and offset borders.
- Small squares, dots, and registration marks.
- Cropped oversized type.
- Simple diagrams or data-inspired marks.

Motifs should feel assembled, screen-printed, or cut from paper. Keep them mostly geometric and avoid illustrative detail.

## Layout and composition

### Overall structure

Use a long-form single-page editorial flow rather than a dashboard or grid of equal cards. The page should feel like a scrollable portfolio poster or a sequence of printed spreads.

Recommended order:

1. Compact header with name, role, year, and contact.
2. Hero field with symbol and oversized `PORTFOLIO` or equivalent title.
3. Dark green capabilities panel with large service labels.
4. Introductory profile block with portrait, bio, education, experience, and software skills.
5. Project case-study sections with clear role, date, context, and outcome.
6. Contact footer with a strong closing statement.

### Layout rules

- Use neo-brutalist blocks with hard edges, flat fills, and visible borders.
- Let sections alternate between warm paper, orange, and deep green fields.
- Combine asymmetric editorial columns with strict alignment in metadata areas.
- Use generous vertical pacing between major sections.
- Allow oversized type and graphic elements to extend toward or slightly past container edges.
- Keep content widths controlled so the monospaced text remains readable.
- Use borders and spacing to create structure instead of rounded containers or drop shadows.
- Keep offset display headings within the viewport; allow them to wrap naturally on narrow screens rather than clipping them horizontally.

### Responsive behavior

- Preserve the visual hierarchy at every viewport width.
- Let display type scale fluidly and wrap naturally rather than forcing horizontal scrolling.
- Collapse editorial columns into a readable vertical sequence on narrow screens.
- Keep metadata aligned and scannable; do not shrink it below comfortable reading size.
- Decorative marks may be cropped or removed on small screens when they interfere with content.

## Imagery and project storytelling

Photography should feel documentary and personal: process shots, portraits, sketches, interfaces, research artifacts, or imperfect studio images. Prefer images with visible texture and a point of view over polished stock imagery.

Each project should explain:

- What the project was and who it served.
- The designer's role.
- The problem or opportunity.
- The design or research approach.
- The outcome, learning, or impact.

For data-visualization and computer-science work, show the relationship between systems and people. Pair interface details, diagrams, or charts with plain-language explanations of the underlying problem.

## Voice and content

The voice is observant, direct, thoughtful, and specific.

- Write like a designer who can explain decisions clearly.
- Prefer concrete verbs over portfolio clichés.
- Show the connection between research, systems, aesthetics, and implementation.
- Make technical fluency visible without turning the portfolio into a résumé dump.
- Avoid phrases such as “passionate about,” “pixel-perfect,” “results-driven,” and “seamless experiences.”

## Interaction principles

- Links should be visibly identifiable through underlines, color, or a clear hover treatment.
- Hover states may shift an image, border, or graphic layer by a few pixels.
- Motion should feel physical and editorial: short, direct, and slightly imperfect.
- Do not use scroll-jacking, excessive parallax, or animation that delays access to content.
- Respect `prefers-reduced-motion` and disable decorative movement when requested.

## Accessibility

- Maintain readable contrast on all orange, green, paper, and accent surfaces.
- Never communicate meaning through color alone.
- Keep body text at a comfortable size and line height.
- Provide descriptive alternative text for meaningful images and empty alt text for decoration.
- Keep keyboard focus states visible against every background.
- Treat blur as decoration; supporting text and body copy must remain crisp and all blurred headings must remain legible.
