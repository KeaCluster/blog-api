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
Make sure to have it locally installed and with a server up and running.

For local testing make sure to add your credentials inside a `.env.local` file.
Check `env.local.example` for an example structure

```env
DATABASE_URL="postgres://your_username:your_password@localhost:5432/your_database_name"
```

The name of the database doesn't matter. So long as it's empty.
With `pg` and `pg-hstore` the database will be automatically used.

Check the port for your local postgres port in use and modify if needed.

#### Install packages

After cloning `cd` into the repo
And install necessary dependencies (if using linux you might need to sudo it).

```sh
cd blog-api
npm init
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
