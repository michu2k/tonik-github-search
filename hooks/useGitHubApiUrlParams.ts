import {CONFIG} from "@/config";
import {useSearchParams} from "next/navigation";
import {z} from "zod";

type GitHubApiUrlParams = z.infer<typeof gitHubApiUrlParamsSchema>;

const gitHubApiUrlParamsSchema = z.object({
  query: z.string().catch(""),
  page: z.number().catch(1),
  order: z.string().catch(""),
  sort: z.string().catch(""),
  limit: z.number().catch(CONFIG.COLLECTION_SIZE.DEFAULT),
});

/** This hook is used to get the URL paramaters that are used in the API. */
const useGitHubApiUrlParams = (): GitHubApiUrlParams => {
  const searchParams = useSearchParams();
  return gitHubApiUrlParamsSchema.parse(Object.fromEntries(searchParams));
};

export type {GitHubApiUrlParams};

export {useGitHubApiUrlParams};
