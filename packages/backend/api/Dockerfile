FROM oven/bun:1.4.4

WORKDIR /app

COPY package.json bun.lock ./
COPY packages/backend/api/package.json ./packages/backend/api/package.json

RUN bun install --frozen-lockfile

COPY packages/backend/api/ ./packages/backend/api/

WORKDIR /app/packages/backend/api

CMD ["bun","run","start:dev"]