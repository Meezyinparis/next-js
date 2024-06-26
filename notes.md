# Next Tips
## Special Files
- page.tsx: router
- layout.tsx: custom layout
- loading.tsx: loading UIs
- route.tsx: APIs
- not-found.tsx: custom not found errors
- error.tsx: custom general errors
## Caching
```ts
// caching means storing data somewhere
// either in memory, file system or network
{next: {revalidate: 10}} // updates data every 10 second
{caching: 'no-store'} // doesnt store datata
```

## General
- DaisyUI: bootstrap alternative for tailwind
- Event Handler only available with client components
- Static Rendering: Render at build time
- Dynamic Rendering: Render at request time
- Put your components in the components folder if its a general component, else put it inside its route folder
- Dynamic Route is a route with a parameter
- Route Parameters only work on route pages not on components
- I cant use the same dynamic route name if its in a tree structure
- [...slug] = catch-all segments
- [[...slug]] optinonal catch-all segments
- Use searchParams to access query string parameters ex: `sortOrder=name`
- When we use Tailwind, **ALL THE ELEMENTS** are unstyled. Use @apply on @layer to edit the styles.
- We cant use Link with a client component, so we need to use the Router Object
- useRouter with react/navigation
- Error components have to be a client component to send the error messages on the client side.
- We need to create a Global Error component for the rootlayout
- HTML: page files HTTP Requests: route files
  
