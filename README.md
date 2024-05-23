# Blog full stack API test

<!--toc:start-->

- [Blog full stack API test](#blog-full-stack-api-test)
  - [How to](#how-to)
    - [Requirements](#requirements)
    - [Packages and setup](#packages-and-setup)
    - [Recommended](#recommended)
    - [Run](#run)
  - [Other](#other)

<!--toc:end-->

## How to

- Clone the repository locally and setup a DB
- Or test the application directly through the deploy.

Clone and setup the following:

### Requirements

- Database
  - Depends on your setup
  - Install a compatible `postgresql` server
  - Setup a remote vercel-hosted db (recommended).
- Node

### Packages and setup

After cloning, `cd` into the repo
and install dependencies (if using linux you might need to sudo it).

```sh
cd blog-api
npm install
```

The app implements `postgresql` for data persistence.
For just some tests you don't need an actual `postgresql` server installed in your pc.
I recommend setting up a remote vercel-hosted db for compatibility.
The deploy implements that.

For a production build,
this config is set inside `package.json` like so:

```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "postinstall": "prisma generate"
  }
}
```

Check [this](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/vercel-caching-issue) resource for more info

### Recommended

I recommend the following:

- Fork this repo and make a new Vercel app linked to it
- In your dev environment, install the `Vercel CLI` as a global resource
- Pull your latest `env` variables from Vercel after initializing a `postgresql` db under **Storage**
- Push the local Prisma scheme and initialize the db remotely
- Check with `npx prisma studio`
- Update the prisma client if you're editing or modifying the schema file

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

### Run

```bash
npm run dev
```

Open [http://localhost:](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Other

> [!NOTE]
> Some HTTP methods were refactored to work with [Next.js'](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) best practices
