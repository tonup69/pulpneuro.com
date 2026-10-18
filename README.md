# PulpNeuro Website

Static HTML/CSS/JS website for pulpneuro.com.

## Structure
- `index.html` — Homepage
- `platform.html` — Technology platform
- `disease-areas.html` — Disease focus areas
- `publications.html` — Publications list
- `team.html` — Team bios
- `contact.html` — Contact form
- `assets/css/main.css` — All styles
- `assets/js/main.js` — Nav behavior
- `assets/img/` — Images

## Deployment
Push to GitHub → GitHub Pages serves automatically.
pulpneuro.com DNS points to GitHub Pages via CNAME.

## Contact form
The form in `contact.html` posts to Web3Forms (https://api.web3forms.com/submit).
Submissions are tied to the access key in the form's hidden `access_key` field;
manage the key and notification email at web3forms.com.
