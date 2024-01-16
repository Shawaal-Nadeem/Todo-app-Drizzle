# Hello World Vercel Postgres

Signup to [Vercel](https://vercel.com/)

Install the Vercel CLI:

    npm i -g vercel@latest

Create a new Project:

    npx create-next-app@latest

Deploy the project to Vercel:

    vercel

Now open [Dashboard](https://vercel.com/dashboard) in Browser

Open the Project Page you just created

Select the Storage Tab on the Project Page and Create a Vercel Postgres Database

Pull the env variables:

    vercel env pull .env.development.local

Install the library:

    npm i @vercel/postgres

Create route.ts file in app/api/todo directory

    npm run dev

Open the browser with this URL or make a GET request using Postman:

    http://localhost:3000/api/todo




# Drizzle-ORM and @vercel/postgres

## Quick start

First, create an NEXT Project using this command

```bash
npx create-next-app@latest

```

### step 2:

Create an postgres database in vercel dashboard

Open [https://vercel.com/dashboard] vercel dashboard

then goto storage Tab

Open [https://vercel.com/dashboard/stores] vercel Storage

### step 3

Click on Create Database and select vercel postgres from modal , then select project from listing if project is not available then open project in VS code and link that project to vercel for link use this command

```bash
vercel link

```

run this command in your project terminal for connection environment

```bash
vercel env pull .env.development.local
```

then also install this package

```bash
npm install @vercel/postgres
```

### step 4

Click on Storage Tab and select database
-1 click on Query Tab and create SQL Table using run this query

```sql
create Table todo(
id serial primary key,
taskname varchar(255),
)
```

### step 5

Open [https://github.com/drizzle-team/drizzle-orm](Drizzle-orm documentation)

Follow this [https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/pg-core/README.md](documentation) for Vercel Postgres


# TODO list API with Drizzle and vercel storage

1. Fist of all install

```	npm i drizzle-orm pg
	npm i -D @types/pg
	npm i -D drizzle-kit
	npm install @vercel/postgres
```
2.0 Create Postgres Database from Storage tab on vercel dashboard
2.1 Once DB created then create table from query tab
	
	CREATE TABLE todos(
	id serial PRIMARY KEY,
	taskName varchar(255),
	);

	
### 3.0 Connect your project with vercel DB you can connect it through two ways

3.1.1 - First deploy you project on vercel by running below command

	vercel

- Open project on dahboard click on storage tab and connect DB

3.1.2 - Secondly you can link your project with vercel

	vercel link 

3.2 Add below given parameters to your local environment to establish a connection between your project and the DB

```
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
```

simply run below command which will create ".env.development.local" file in your local porject along with above mentioned parameters

	vercel env pull .env.development.local



Now your project is connected with DB you can run it localy

  