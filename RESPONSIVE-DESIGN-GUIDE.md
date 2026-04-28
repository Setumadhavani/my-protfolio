# Responsive Design Guide

## Quick Reference for Future Development

### Breakpoint System

```css
/* Mobile First Approach */

/* Extra Small Devices (< 400px) */
@media (max-width: 400px) { }

/* Small Mobile (< 480px) */
@media (max-width: 480px) { }

/* Mobile (< 600px) */
@media (max-width: 600px) { }

/* Tablet (< 768px) */
@media (max-width: 768px) { }

/* Small Tablet (< 900px) */
@media (max-width: 900px) { }

/* Desktop (< 1200px) */
@media (max-width: 1200px) { }

/* Large Desktop (< 1600px) */
@media (max-width: 1600px) { }
```

### Common Responsive Patterns

#### 1. Responsive Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

#### 2. Responsive Typography
```css
.heading {
  font-size: clamp(2rem, 5vw, 4rem);
}

/* Or with media queries */
.heading {
  font-size: 4rem;
}

@media (max-width: 768px) {
  .heading {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .heading {
    font-size: 2rem;
  }
}
```

#### 3. Responsive Spacing
```css
.section {
  padding: 6rem 0;
}

@media (max-width: 768px) {
  .section {
    padding: 4rem 0;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 3rem 0;
  }
}
```

#### 4. Responsive Container
```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
}
```

#### 5. Responsive Flexbox
```css
.flex-container {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
    gap: 1.5rem;
  }
}
```

#### 6. Responsive Images
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* For background images */
.bg-image {
  background-size: cover;
  background-position: center;
}

@media (max-width: 768px) {
  .bg-image {
    background-size: contain;
  }
}
```

#### 7. Touch-Friendly Buttons
```css
button, a {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.5rem;
}

@media (max-width: 768px) {
  button, a {
    padding: 0.85rem 1.75rem;
  }
}
```

#### 8. Responsive Navigation
```css
.nav {
  display: flex;
  gap: 2rem;
}

@media (max-width: 900px) {
  .nav {
    display: none; /* Show mobile menu instead */
  }
  
  .mobile-menu {
    display: block;
  }
}
```

#### 9. Responsive Modal
```css
.modal {
  width: 600px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .modal {
    width: 95vw;
    max-height: 85vh;
  }
}
```

#### 10. Responsive Cards
```css
.card {
  padding: 2rem;
}

@media (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 1rem;
  }
}
```

### CSS Variables for Responsive Design

```css
:root {
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  
  /* Font Sizes */
  --font-xs: 0.75rem;
  --font-sm: 0.875rem;
  --font-base: 1rem;
  --font-lg: 1.25rem;
  --font-xl: 1.5rem;
  --font-2xl: 2rem;
  --font-3xl: 3rem;
  --font-4xl: 4rem;
  
  /* Container */
  --container-max: 1400px;
  --container-padding: 3rem;
}

@media (max-width: 768px) {
  :root {
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
    --container-padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  :root {
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --container-padding: 1rem;
  }
}
```

### Utility Classes

```css
/* Hide on mobile */
@media (max-width: 768px) {
  .hide-mobile {
    display: none !important;
  }
}

/* Show only on mobile */
.show-mobile {
  display: none;
}

@media (max-width: 768px) {
  .show-mobile {
    display: block;
  }
}

/* Full width on mobile */
@media (max-width: 768px) {
  .full-width-mobile {
    width: 100% !important;
  }
}

/* Stack on mobile */
@media (max-width: 768px) {
  .stack-mobile {
    flex-direction: column !important;
  }
}

/* Center on mobile */
@media (max-width: 768px) {
  .center-mobile {
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
```

### Performance Optimizations

#### 1. Disable Heavy Animations on Mobile
```css
.animated-element {
  animation: complexAnimation 2s ease;
}

@media (max-width: 768px) {
  .animated-element {
    animation: none;
  }
}

/* Or respect user preferences */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
  }
}
```

#### 2. Optimize Images
```css
/* Use srcset for responsive images */
<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 480px) 400px,
         (max-width: 768px) 800px,
         1200px"
  alt="Description"
/>
```

#### 3. Lazy Loading
```html
<img src="image.jpg" loading="lazy" alt="Description" />
```

### Touch Interactions

```css
/* Remove tap highlight on mobile */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Smooth scrolling on iOS */
body {
  -webkit-overflow-scrolling: touch;
}

/* Prevent zoom on input focus (iOS) */
input, textarea, select {
  font-size: 16px; /* Minimum to prevent zoom */
}

/* Touch-friendly hover states */
@media (hover: hover) {
  .button:hover {
    /* Desktop hover styles */
  }
}

@media (hover: none) {
  .button:active {
    /* Mobile active/touch styles */
  }
}
```

### Viewport Meta Tag

```html
<!-- Essential for responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Prevent zoom (use carefully) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### Testing Checklist

- [ ] Test on real devices
- [ ] Test in both orientations
- [ ] Test touch interactions
- [ ] Test form inputs
- [ ] Test navigation
- [ ] Test modals/overlays
- [ ] Test animations
- [ ] Test images
- [ ] Test typography
- [ ] Test performance
- [ ] Run Lighthouse audit
- [ ] Check accessibility

### Common Pitfalls to Avoid

1. **Fixed widths** - Use max-width instead
2. **Viewport units without fallbacks** - vh can be tricky on mobile
3. **Hover-only interactions** - Provide touch alternatives
4. **Small touch targets** - Minimum 44x44px
5. **Horizontal scrolling** - Use overflow-x: hidden
6. **Fixed positioning** - Can cause issues on mobile
7. **Large images** - Optimize and use responsive images
8. **Complex animations** - Can cause performance issues
9. **Tiny text** - Minimum 16px for body text
10. **Ignoring landscape mode** - Test both orientations

### Best Practices

1. **Mobile-first approach** - Start with mobile, enhance for desktop
2. **Progressive enhancement** - Basic functionality for all, enhanced for capable devices
3. **Touch-friendly** - Large tap targets, proper spacing
4. **Performance** - Optimize images, minimize animations
5. **Accessibility** - Proper contrast, keyboard navigation
6. **Testing** - Test on real devices regularly
7. **Consistency** - Maintain design consistency across breakpoints
8. **Content priority** - Show most important content first on mobile
9. **Simplify** - Reduce complexity on smaller screens
10. **Iterate** - Continuously improve based on user feedback

### Resources

- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS Tricks - Complete Guide to Responsive Design](https://css-tricks.com/guides/responsive-design/)
- [Google Web Fundamentals - Responsive Design](https://developers.google.com/web/fundamentals/design-and-ux/responsive)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Responsive Design Checker](https://responsivedesignchecker.com/)

### Tools

- **Chrome DevTools** - Device mode
- **Firefox DevTools** - Responsive design mode
- **Safari DevTools** - Responsive design mode
- **BrowserStack** - Real device testing
- **Lighthouse** - Performance audit
- **Responsively** - Multi-device preview
- **Sizzy** - Browser testing tool

### Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Lighthouse
lighthouse http://localhost:5173 --view

# Check bundle size
npm run build && ls -lh dist/assets
```
