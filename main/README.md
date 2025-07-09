npm run build

> main@0.1.0 build
> next build

   ▲ Next.js 15.3.5

   Creating an optimized production build ...
 ✓ Compiled successfully in 7.0s

Failed to compile.

./src/app/cart/page.tsx
5:10  Error: 'Input' is defined but never used.  @typescript-eslint/no-unused-vars
34:73  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities

./src/app/checkout/page.tsx
2:8  Error: 'Link' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/login/page.tsx
37:18  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities

./src/app/page.tsx
4:28  Error: 'dummyCategories' is defined but never used.  @typescript-eslint/no-unused-vars
5:22  Error: 'BookOpen' is defined but never used.  @typescript-eslint/no-unused-vars
5:59  Error: 'Lightbulb' is defined but never used.  @typescript-eslint/no-unused-vars
5:70  Error: 'TrendingUp' is defined but never used.  @typescript-eslint/no-unused-vars
69:6  Warning: React Hook useEffect has a missing dependency: 'paginate'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/ui/input.tsx
4:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
