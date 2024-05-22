# Blog full stack API test

<!--toc:start-->

- [Blog full stack API test](#blog-full-stack-api-test)
  - [How to](#how-to)
    - [Locally](#locally)
      - [Requirements](#requirements)
      - [Install packages](#install-packages)
    - [Run](#run)
  - [Other](#other)

<!--toc:end-->

## How to

Clone this repository locally or test the application directly on its deploy url.

### Locally

Clone and setup the following:

#### Requirements

This APP works with `postgresql` for data persistence.
For just some text you don't need the actual `postgresql` server installed.
The deploy test is using a vercel-hosted `psql` database which works with remote connections.

This definition is set inside `package.json` like so:

```json
{
  ...
  "scripts": {
    ...
    "build": "prisma generate && next build",
    "postinstall": "prisma generate"
  },
  ...
}
```

Check [this](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/vercel-caching-issue) resource for more info

If you want to make your own DB, I recommend the following:

- Fork this repo and make a new Vercel linked to it
- Install the `Vercel CLI` locally as a global resource
- Pull your latest env variables from Vercel after initializing a `postgresql` db under **Storage**
- Push the local Prisma scheme and initialize the db remotely
- Check with `npx prisma studio`
- Update the prisma client if you're editing or modifying the schema file
- Run dev

```sh
# Install vercel cli
npm i -g vercel@latest

# Pull your remote env variables
vercel env pull .env

# Push your schema
npx prisma db push

# Check the remote schema
# You can do direct CRUD operations here as well
npx prisma studio

# Update the prisma client on every modification
npx prisma generate

```

#### Install packages

After cloning `cd` into the repo
And install necessary dependencies (if using linux you might need to sudo it).

```sh
cd blog-api
npm install
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Other

> [!NOTE]
> Some HTTP methods were refactored to work with [Next.js'](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) best practices
