# Ravana Agency - Mobile & Performance Optimization Plan

## 1. Persona & Continued Mission

As "The Architect," my mission is to evolve the Ravana agency website, transforming the current desktop-centric design into a "natively mobile," exceptionally fast, and equally impressive mobile experience. This plan outlines the audit, refinement, and testing strategy to achieve a flawless presentation on any screen size.

## 2. Responsive Breakpoint Strategy

We will adhere to Tailwind CSS's standard responsive breakpoints to ensure a consistent and scalable design system. The layout will adapt at each breakpoint to optimize content presentation and usability.

- **`sm` (640px):** The primary mobile breakpoint. All multi-column layouts will collapse to a single column. Typography will be scaled for smaller screens, and touch targets will be enlarged.
- **`md` (768px):** Tablet portrait view. Some layouts may introduce a second column where appropriate (e.g., service cards), but the primary navigation will remain mobile-centric (hamburger menu).
- **`lg` (1024px):** Tablet landscape and small desktops. The layout will transition to the full desktop experience, including the desktop navigation bar and more complex grid structures.
- **`xl` (1280px):** Standard desktop and larger screens. No significant layout changes from `lg`, but container widths may be adjusted to prevent content from stretching excessively.

## 3. Component Refactoring Checklist

The following components have been identified for specific mobile refactoring:

- **[ ] Navbar (`components/layout/Navbar.tsx`):**
    -   **Action:** Create a new `MobileNav.tsx` component.
    -   **Plan:** Implement a hamburger menu icon that toggles a full-screen overlay or a slide-out panel. The navigation links will be presented as a vertical list for easy tapping. This component will be conditionally rendered on `md` screens and below.

- **[ ] Hero Section (`components/sections/HeroSection.tsx`):**
    -   **Action:** Simplify animations and adjust text layout for vertical viewports.
    -   **Plan:** The complex WebGL background animation will be disabled on `md` screens and below to prioritize performance. The headline and sub-headline will be stacked vertically with adjusted font sizes to prevent overflow and maintain readability.

- **[ ] Service Cards / Portfolio Grid (`components/sections/ServicesSection.tsx`, `app/portfolio/page.tsx`):**
    -   **Action:** Collapse multi-column grids into a single, touch-friendly column.
    -   **Plan:** All `grid-cols-*` and `flex-row` layouts will be refactored to `grid-cols-1` or `flex-col` on `sm` screens. Padding and margins will be adjusted to ensure proper spacing in a single-column view.

- **[ ] Footer (`components/layout/Footer.tsx`):**
    -   **Action:** Restack footer columns for readability.
    -   **Plan:** The multi-column footer layout will collapse into a single column on `sm` screens. Link groups and contact information will be stacked vertically.

## 4. Animation & Performance Optimization

- **[ ] Conditional Animations:**
    -   **Strategy:** Implement a custom `useMediaQuery` hook to detect the user's viewport size. This hook will be used to conditionally disable or simplify performance-intensive animations (e.g., WebGL, complex Framer Motion effects) on screens smaller than the `lg` breakpoint.

- **[ ] Image Optimization:**
    -   **Strategy:** Audit all `<img>` tags and replace them with Next.js's `<Image>` component. Ensure `sizes` and `priority` props are used correctly to serve optimized, responsive images and improve LCP.

- **[ ] Bundle Size Analysis:**
    -   **Strategy:** Integrate `@next/bundle-analyzer` to inspect the application's JavaScript bundles. Identify and investigate any large dependencies that could be code-split, lazy-loaded, or replaced with smaller alternatives.

## 5. Touch Interaction Refinement

- **[ ] Hover State Translation:**
    -   **Strategy:** Review all UI elements with `:hover` effects. For interactive components like service cards, replace hover-to-reveal content with a clear tap-to-reveal mechanism. A small icon or "View More" text will be added to signify interactivity.

- **[ ] Target Size Increase:**
    -   **Strategy:** Audit all interactive elements (buttons, links, form inputs). Ensure every touch target meets the recommended accessibility guideline of at least 44x44 CSS pixels to prevent accidental taps.

- **[ ] Disable Custom Cursor:**
    -   **Strategy:** The `AnimatedCursor` component will be conditionally rendered using the `useMediaQuery` hook, disabling it on `md` screens and below where it is redundant.

## 6. Testing Protocol

A rigorous testing protocol will be followed to ensure a high-quality release.

- **[ ] Device Simulation:** Use browser developer tools (Chrome, Firefox, Safari) to test the layout and functionality across a range of simulated devices (e.g., iPhone 12, Pixel 5, iPad Pro).
- **[ ] Physical Device Testing:** Conduct tests on at least one physical iOS and Android device to verify touch interaction accuracy, performance, and visual fidelity.
- **[ ] Lighthouse Audit:** Run a Lighthouse audit before and after the optimization phase. The primary goal is to achieve a score of 95+ across Performance, Accessibility, Best Practices, and SEO.
