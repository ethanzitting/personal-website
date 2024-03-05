FROM ubuntu:jammy
COPY . .
RUN apt-get update && apt-get install -y curl unzip sudo
RUN usermod -aG sudo root
RUN curl -fsSL https://bun.sh/install | bash
RUN sudo /root/.bun/bin/bun install
CMD ["bun", "run", "start"]