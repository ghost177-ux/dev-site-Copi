<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Waybit site as a single scrolling Home with in-page navigation because the approved scope explicitly limits destinations to Home sections.

- Resolve segment menu destinations through the shared landing-page registry, with product overview fallbacks, so dedicated URLs remain authoritative on desktop and mobile.
- Keep the Food overview separate from the existing Varejo and Restaurant pages and reuse their headers and contact dialogs, so reference pages retain their presentation.
- Keep overview plan values in a browser-safe data module so pricing behavior can be tested without rendering the page.
