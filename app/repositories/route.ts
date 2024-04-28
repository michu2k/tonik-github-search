import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import {CONFIG} from "@/config";
import {gitHubApiUrlParamsSchema} from "@/utils/urlParams";

// Schema definition for the Github API response (Any data not included in this schema will be ignored)
const githubResponseSchema = z.object({
  total_count: z.number(),
  items: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      full_name: z.string(),
      owner: z.object({
        login: z.string(),
        avatar_url: z.string(),
      }),
      stargazers_count: z.number(),
      created_at: z.string(),
    }),
  ),
});

export async function GET({url}: NextRequest) {
  const {searchParams} = new URL(url);
  const {query, page, order, sort, limit} = gitHubApiUrlParamsSchema.parse(Object.fromEntries(searchParams));

  const apiOrder = order ? `&order=${order}` : "";
  const apiSort = sort ? `&sort=${sort}` : "";

  const response = await fetch(
    `${CONFIG.GITHUB_API_URL}/repositories?q=${query}&page=${page}&limit=${limit}${apiOrder}${apiSort}`,
    {
      headers: {
        Authorization: `token ${CONFIG.GITHUB_API_TOKEN}`,
      },
    },
  );

  const data = await response.json();
  const parsedData = githubResponseSchema.parse(data);

  return NextResponse.json(parsedData);
}
