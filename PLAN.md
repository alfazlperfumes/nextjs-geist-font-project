# Plan for Creating Al Fazl Perfumes eCommerce Website

## Information Gathered
- **Project Structure**: Next.js 15+ with TypeScript, shadcn/ui components, Tailwind CSS, Radix UI primitives.
- **Existing Setup**: Components in src/components/ui/, hooks in src/hooks/, lib/utils.ts, app in src/app/.
- **Task Requirements**:
  - Homepage with hero banner (brand name, tagline).
  - Product listing page (6 dummy perfumes with placeholders, names, descriptions, prices).
  - Product detail page (larger image, description, Add to Cart).
  - Shopping cart page (view/remove items).
  - Contact page with form (name, email, message).
  - About Us page.
  - Responsive navigation bar (Home, Shop, About Us, Contact).
  - Footer with social media icons (Facebook, Instagram) and copyright.
  - Design: Luxurious, traditional Arabian feel (colors: gold, black, white, deep red; elegant fonts).
  - Responsive design.
  - No external images except placehold.co placeholders.
  - No icon libraries; use inline SVG for social icons.
  - Dummy data for products.
- **Dependencies**: No new installations needed; use existing shadcn/ui, Tailwind.
- **State Management**: Use React Context for cart (simple in-memory).
- **Images**: Use https://placehold.co/ for placeholders with descriptive text.
- **Fonts**: Use Google Fonts for elegant typography.

## Plan
### File-Level Updates
1. **src/app/layout.tsx**: Update to include navigation and footer components, set global styles for Arabian theme.
2. **src/app/page.tsx**: Create homepage with hero banner.
3. **src/app/shop/page.tsx**: Create product listing page with 6 dummy products.
4. **src/app/product/[id]/page.tsx**: Create product detail page with Add to Cart.
5. **src/app/cart/page.tsx**: Create shopping cart page with view/remove functionality.
6. **src/app/contact/page.tsx**: Create contact page with form.
7. **src/app/about/page.tsx**: Create About Us page.
8. **src/components/Navigation.tsx**: Create responsive navigation bar component.
9. **src/components/Footer.tsx**: Create footer with social icons and copyright.
10. **src/components/ProductCard.tsx**: Create reusable product card component.
11. **src/context/CartContext.tsx**: Create context for cart state management.
12. **src/data/products.ts**: Create dummy product data.
13. **src/app/globals.css**: Update for custom theme colors (gold, deep red, etc.) without modifying the file directly (use Tailwind config if needed, but since rule is not to modify globals.css, use inline styles or custom CSS in components).

### Dependent Files to be Edited/Created
- New files: All listed above.
- Existing: src/app/layout.tsx (edit to add nav/footer), src/app/globals.css (but rule says NEVER modify, so avoid).
- No external dependencies to add.

### Followup Steps
1. Test the website locally using `npm run dev`.
2. Verify responsiveness on different screen sizes.
3. Test cart functionality (add, view, remove).
4. Test contact form (basic validation).
5. Ensure no console errors.
6. Use browser tools to check accessibility and performance.
