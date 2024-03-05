FROM ubuntu:jammy
COPY . .
RUN apt-get update && apt-get install -y curl unzip
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH=$PATH:/root/.bun/bin
RUN bun install
CMD ["bun", "run", "start"]