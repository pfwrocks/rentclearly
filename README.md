# RentClearly App

## Background
RentClearly is an innovative application designed to foster transparency in the rental property market. It enables users to share anonymized rental agreements, allowing others to see the actual "final" price of rental properties. This initiative helps potential renters make informed decisions by understanding real-world rental costs.

## Getting Started with RentClearly

This repository contains the primary codebase for the RentClearly App. Follow these steps to set up the application locally.

### Prerequisites

- Yarn package manager
- Supabase CLI
- Golang (for loading test data)

### Initial Setup

1. **Install Dependencies**: Run the following command to install the necessary dependencies.
   ```bash
   yarn install
   ```

2. **Install Supabase CLI**: Use Homebrew to install the Supabase CLI.
   ```bash
   brew install supabase/tap/supabase
   ```

3. **Start Local Supabase Instance**: You can start and stop this instance as needed.
   ```bash
   supabase start
   ```
   - **Note**: Access the local Supabase UI at http://localhost:54323

4. **Configure Environment Variables**: Update your `.env` file using the DB URL from the `supabase start/status` command. Refer to `.env.example` for guidance.

5. **Sync Prisma Schema to Database**: This step ensures your database schema is up to date.
   ```bash
   yarn sync
   ```

6. **Generate New Prisma Client**: Perform this step each time the schema is changed.
   ```bash
   yarn generate
   ```

### Loading Local Test Data

1. **Install Golang**: Follow the instructions at [Golang Installation Guide](https://go.dev/doc/install).

2. **Run the Scraper**:
   - In the `scraper/` directory, execute:
     ```bash
     go mod tidy
     go run main.go
     ```

3. **Seed the Database**:
   - From the root of the repository, run:
     ```bash
     yarn seed
     ```

4. **View Test Data**:
   - Use `yarn studio` to view all the test data loaded in.

With these steps, you should have a fully functional local instance of the RentClearly App.
