FROM ubuntu:jammy
COPY . .

# Installing dependencies
RUN apt-get update && apt-get install -y curl unzip
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH=$PATH:/root/.bun/bin
RUN bun install

# Enabling HTTPS
#RUN apt update
#RUN apt install snapd -y
#RUN systemctl enable snapd
#RUN apt-get remove certbot
#RUN snap install --classic certbot
# RUN certbot certonly --standalone

CMD ["bun", "run", "start"]