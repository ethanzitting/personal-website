Hi, I'm Ethan! 👋

I enjoy solving complex problems in the web ecosystem.

You've reached the source code for my personal website: https://ethanzitting.com

Tools Used:
- NextJS
- Tailwind
- Typescript
- Docker

## Local development

```sh
npm install
npm run dev     # http://localhost:3000
```

Other scripts:

```sh
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (add --fix to auto-format)
```

Code style is 4-space indentation, enforced by `@stylistic/indent` in
[eslint.config.mjs](eslint.config.mjs) and mirrored in [.editorconfig](.editorconfig)
for editors. `npm run lint -- --fix` fixes indentation violations automatically.

## Deployment

The site is built and served as a container, fronted by Caddy on an external
`caddy` docker network:

```sh
docker compose up -d --build
```
