

## Carousel Adjustments

The current carousel uses `h-[70vh]` which is quite tall. The plan is to make it more compact, responsive, and user-friendly:

### Changes to `src/components/HeroCarousel.tsx`

1. **Reduce height** — Change from `h-[70vh]` to responsive heights: `h-[40vh] sm:h-[45vh] md:h-[50vh]` — smaller on mobile, slightly larger on desktop, but overall more compact than the current 70vh.

2. **Better rounded corners** — Use `rounded-xl` for a cleaner look.

3. **Softer gradient overlay** — Reduce the heavy gradient so images are more visible and friendly.

4. **Smaller, cleaner navigation controls** — Reduce button size from `h-10 w-10` to `h-8 w-8` with smaller icons, making them less intrusive.

5. **Keep everything else** — Auto-play, dot indicators, and smooth animations remain unchanged.

These are minimal, focused changes to the single file `HeroCarousel.tsx`.

