# RentClearly App

The primary RentClearly App codebase
## Steps to get running locally

1. Install dependencies 
```bash
yarn install
```

2. Install supabase CLI
```bash
brew install supabase/tap/supabase
```

3. Start up a local supabase instance (note, you can stop and start as needed)
```bash
supabase start
```

4. Use the DB URL value of the supabase start/status command in a .env file, use the .env.example file for reference

Note: You can view the local supabase UI from http://localhost:54323

5. Push latest Prisma schema to DB
```bash
prisma db push
```

6. Generate a new Prisma client (I believe you need to do this each time you change the schema along with the `db push`)
```bash
prisma generate
```

7. Now pre-seed the database for local testing
```bash
prisma db seed
```

8. Now you can run the development server
```bash
yarn run dev
```
