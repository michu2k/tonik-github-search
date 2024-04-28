import {z} from "zod";
import {CONFIG} from "@/config";

type GitHubApiUrlParams = z.infer<typeof gitHubApiUrlParamsSchema>;

// Schema definition for the Github API URL parameters
const gitHubApiUrlParamsSchema = z.object({
  query: z.string().catch(""),
  page: z.number().catch(1),
  order: z.string().catch(""),
  sort: z.string().catch(""),
  limit: z.number().catch(CONFIG.COLLECTION_SIZE.DEFAULT),
});

/** Extract and validate the URL parameters */
function getUrlParams(searchParams: URLSearchParams): GitHubApiUrlParams {
  return gitHubApiUrlParamsSchema.parse(Object.fromEntries(searchParams));
}

export type {GitHubApiUrlParams};

export {getUrlParams};
