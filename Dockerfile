FROM hayd/ubuntu-deno:1.9.2

RUN deno install --unstable -A -f -n aleph https://deno.land/x/aleph@v0.3.0-beta.19/cli.ts

WORKDIR /app
ADD . /app