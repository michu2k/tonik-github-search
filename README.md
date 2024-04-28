# Github repository search

## Stack

- `Next.js` - Very popular, easy to scale framework, so it works great in both small and large applications.
- `Tailwind` - CSS framework that provides utilty classes that allow developers to create applications easier and faster.
- `Shadcn/ui`, `radix` - Set of re-usable components built using Tailwind with additional interactions handled by the Radix UI.
- `Zod` - A very good library for validating not only forms, but also API requests. I have been using Zod for a long time and that's why it was my number one choice.
- `TanStack Query` - It simplifies data fetching and caching without the need to build complex solutions yourself.
- `Vitest` - I used this package for unit testing as the package api seems a little bit simplier that Jest and I already had experience using vitest.

## Run the project

1. Clone the repository and install all dependencies using pnpm
2. Setup the environment variables
3. Start the development server using `pnpm run dev`

## Environment variables

Copy the keys from `.env.example` to the `.env.local` file and generate these values:

- `GITHUB_API_URL` - GitHub search API (https://api.github.com/search) - without `/` at the end.
- `GITHUB_API_TOKEN`- You can generate the GitHub token [here](https://github.com/settings/tokens?type=beta).

## Testing

The app uses Vitest for unit testing. To run unit tests, run `pnpm run test` command.

## Example routes

Instead of the URL you should use your localhost url (default localhost:3000)

- `URL/?query=React` - Get the list of repositories
- `URL/?query=React&page=3` - Get a third repository page
- `URL/?query=React&sort=stars` - Get repositories sorted by stars
- `URL/?query=React&order=asc` - Order records by asc (or desc)
- `URL/?query=React&limit=5` - Number of records
- `URL/?query=React&page=3&sort=stars&order=asc&limit=5` - ^All of the above included
