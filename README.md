# MONTAL — Maria Manukyan

Premium dual-direction landing page for White Glove cleaning and cleaning-business mentorship.

## Run locally
This is a dependency-free static site. Open `index.html` in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages
The workflow in `.github/workflows/deploy-pages.yml` publishes the root of this repository to GitHub Pages on every push to `main`. If Pages has never been configured for this repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.

## Before launch
- Replace the stock photography with approved White Glove / Maria photography.
- Confirm the actual service list and calculator rates in `index.html`; no prices are invented by default.
- Confirm the official booking/contact channel and program details.
- Add only real student cases and reviews, with permission and with the metric/time period clearly stated.

## Features
- Responsive split hero with pointer parallax.
- White Glove section with interactive before/after X-ray lens.
- Cleaning quote calculator that uses approved rates only; until rates are configured it shows “Стоимость уточняется”.
- Mentorship learning roadmap with interactive flip cards.
- Mobile navigation, scroll reveals, reduced-motion support, and accessible focus states.
