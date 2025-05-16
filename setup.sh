#!/bin/bash

# Initialize npm project
npm init -y

# Install dependencies
npm install next@latest react@latest react-dom@latest
npm install qrcode @radix-ui/react-label @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate

# Install dev dependencies
npm install -D typescript @types/node @types/react @types/react-dom @types/qrcode autoprefixer postcss tailwindcss eslint eslint-config-next

# Initialize Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --use-npm --no-src-dir --skip-git 