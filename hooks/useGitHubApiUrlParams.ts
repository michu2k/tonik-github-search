import {GitHubApiUrlParams, gitHubApiUrlParamsSchema} from "@/utils/urlParams";
import {useSearchParams} from "next/navigation";

/** This hook is used to get the URL paramaters that are used in the API. */
const useGitHubApiUrlParams = (): GitHubApiUrlParams => {
  const searchParams = useSearchParams();
  return gitHubApiUrlParamsSchema.parse(Object.fromEntries(searchParams));
};

export {useGitHubApiUrlParams};
