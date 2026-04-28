# Mobile Testing Checklist

## Quick Device Testing Guide

### 📱 iPhone Testing (Safari)
- [ ] iPhone 14 Pro Max (430 x 932)
- [ ] iPhone 14 Pro (393 x 852)
- [ ] iPhone SE (375 x 667)
- [ ] Test both portrait and landscape

### 📱 Android Testing (Chrome)
- [ ] Samsung Galaxy S23 Ultra (412 x 915)
- [ ] Google Pixel 7 (412 x 915)
- [ ] Samsung Galaxy A52 (360 x 800)

### 📱 Tablet Testing
- [ ] iPad Pro 12.9" (1024 x 1366)
- [ ] iPad Air (820 x 1180)
- [ ] iPad Mini (768 x 1024)

## Page-by-Page Checklist

### ✅ Home Page
- [ ] Hero section displays properly
- [ ] Profile image loads and scales
- [ ] Tech scroll animation works smoothly
- [ ] Preview cards are readable
- [ ] Stats display correctly
- [ ] All buttons are tappable

### ✅ About Page
- [ ] Profile image displays correctly
- [ ] Text is readable without zooming
- [ ] Focus cards stack properly
- [ ] Code snippet is readable
- [ ] All sections fit on screen

### ✅ Projects Page
- [ ] Project grid adjusts to screen size
- [ ] Project cards are readable
- [ ] Images load properly
- [ ] Filters work on mobile
- [ ] Modal opens and closes smoothly
- [ ] Modal content is scrollable

### ✅ Experience Page
- [ ] Timeline displays correctly
- [ ] Timeline cards are readable
- [ ] Company logos display properly
- [ ] Tags are readable
- [ ] Stats bar displays correctly
- [ ] Year badges are visible

### ✅ Blogs Page
- [ ] Blog grid adjusts properly
- [ ] Blog cards are readable
- [ ] Categories display correctly
- [ ] Read time is visible
- [ ] Filters work on mobile

### ✅ Contact Page
- [ ] Form inputs are easy to fill
- [ ] Contact items are tappable
- [ ] Form submits correctly
- [ ] Success/error messages display
- [ ] All fields are accessible

### ✅ Navigation
- [ ] Navbar collapses on mobile
- [ ] Mobile menu opens/closes
- [ ] All links are tappable
- [ ] Active state is visible
- [ ] Logo is visible
- [ ] Dock (if visible) works properly

### ✅ Footer
- [ ] CTA section displays correctly
- [ ] Contact button is tappable
- [ ] Profile info is readable
- [ ] Footer links work

### ✅ Components
- [ ] Chatbot opens/closes properly
- [ ] Chatbot window is usable
- [ ] Messages are readable
- [ ] Input field works
- [ ] Quick prompts are tappable
- [ ] Activities carousel scrolls smoothly
- [ ] FAQ section is readable

## Interaction Testing

### Touch Interactions
- [ ] Tap - All buttons respond
- [ ] Swipe - Carousels work
- [ ] Scroll - Smooth scrolling
- [ ] Pinch zoom - Disabled where needed
- [ ] Long press - No unwanted actions

### Form Testing
- [ ] Text inputs work
- [ ] Textarea works
- [ ] Buttons are tappable
- [ ] Validation messages display
- [ ] Keyboard doesn't cover inputs
- [ ] Submit works correctly

### Navigation Testing
- [ ] All internal links work
- [ ] External links open correctly
- [ ] Back button works
- [ ] Scroll to top works
- [ ] Smooth scrolling works

## Performance Testing

### Load Time
- [ ] Page loads in < 3 seconds
- [ ] Images load progressively
- [ ] No layout shifts
- [ ] Animations are smooth

### Scrolling
- [ ] Smooth scrolling
- [ ] No jank or stuttering
- [ ] Lazy loading works
- [ ] Infinite scroll (if any) works

### Animations
- [ ] Transitions are smooth
- [ ] No performance issues
- [ ] Reduced motion respected
- [ ] Hover states work (on touch)

## Visual Testing

### Layout
- [ ] No horizontal scrolling
- [ ] All content fits on screen
- [ ] Proper spacing maintained
- [ ] No overlapping elements
- [ ] Consistent alignment

### Typography
- [ ] All text is readable
- [ ] Font sizes are appropriate
- [ ] Line height is comfortable
- [ ] No text overflow
- [ ] Proper contrast

### Images
- [ ] All images load
- [ ] Images scale properly
- [ ] No distortion
- [ ] Proper aspect ratios
- [ ] Alt text present

### Colors & Contrast
- [ ] Sufficient contrast
- [ ] Colors are consistent
- [ ] Dark mode works (if applicable)
- [ ] Accent colors visible

## Browser Testing

### iOS Safari
- [ ] All features work
- [ ] No webkit-specific issues
- [ ] Touch events work
- [ ] Scrolling is smooth

### Chrome Mobile
- [ ] All features work
- [ ] No chrome-specific issues
- [ ] Touch events work
- [ ] Scrolling is smooth

### Firefox Mobile
- [ ] All features work
- [ ] No firefox-specific issues
- [ ] Touch events work
- [ ] Scrolling is smooth

## Accessibility Testing

### Screen Reader
- [ ] All content is accessible
- [ ] Proper heading hierarchy
- [ ] Alt text on images
- [ ] ARIA labels present

### Keyboard Navigation
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] All interactive elements accessible
- [ ] No keyboard traps

### Touch Targets
- [ ] All buttons are 44px minimum
- [ ] Proper spacing between targets
- [ ] Easy to tap without mistakes

## Common Issues to Check

### Layout Issues
- [ ] No content cut off
- [ ] No overlapping text
- [ ] No broken grids
- [ ] No misaligned elements

### Interaction Issues
- [ ] No unresponsive buttons
- [ ] No broken links
- [ ] No stuck modals
- [ ] No scroll issues

### Performance Issues
- [ ] No slow loading
- [ ] No janky animations
- [ ] No memory leaks
- [ ] No excessive repaints

## Testing Tools

### Browser DevTools
```
Chrome DevTools → Device Mode
Safari → Responsive Design Mode
Firefox → Responsive Design Mode
```

### Online Tools
- [BrowserStack](https://www.browserstack.com/) - Real device testing
- [LambdaTest](https://www.lambdatest.com/) - Cross-browser testing
- [Responsively](https://responsively.app/) - Multi-device preview

### Lighthouse Audit
```bash
# Run Lighthouse in Chrome DevTools
# Or use CLI:
npm install -g lighthouse
lighthouse https://your-site.com --view
```

### Performance Testing
```bash
# Check bundle size
npm run build
# Analyze with source-map-explorer or webpack-bundle-analyzer
```

## Quick Test Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Notes

- Test on real devices when possible
- Use both WiFi and cellular connections
- Test in different lighting conditions
- Get feedback from actual users
- Document any issues found
- Prioritize critical issues first

## Issue Reporting Template

```markdown
**Device**: iPhone 14 Pro
**OS**: iOS 17.0
**Browser**: Safari
**Screen Size**: 393 x 852
**Issue**: [Description]
**Steps to Reproduce**:
1. [Step 1]
2. [Step 2]
3. [Step 3]
**Expected**: [What should happen]
**Actual**: [What actually happens]
**Screenshot**: [If applicable]
```
