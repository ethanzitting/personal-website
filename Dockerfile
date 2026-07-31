FROM node:20-slim

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# The droplet has 961MB of RAM and no swap. A 2048 ceiling is fiction
# there: Node sees no reason to collect until it passes a limit it can
# never legally reach, so the kernel OOM-kills first — and it picks the
# fattest process, which is the running next-server, not the build.
# Keep this comfortably under physical RAM so V8 actually collects.
ENV NODE_OPTIONS="--max-old-space-size=512"

RUN apt-get update && apt-get install -y --no-install-recommends curl unzip \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
