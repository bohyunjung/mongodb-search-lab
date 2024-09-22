# Live Demo Case 2

## Goal

- Some [documents](/docs/1-full-text-search/2-why-search.mdx) include instructor names in their frontmatter:

> ```yaml
> ---
> instructors:
>  - Jane Mongo
>  - Richard D. Bee
> ---
> ```

- Add the [`src/components/Instructors`](/src/components/Instructors/index.tsx) component:
  - Position it right above the footer of each document.
  - Use it to render the instructor names.

Start by swizzling `DocItem/Footer` in `@docusaurus/theme-classic`.

| BEFORE | AFTER |
| - | - |
| ![before](./before.png) | ![after](./after.png) |
