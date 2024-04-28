import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {useSearchParams} from "next/navigation";
import {GitHubApiUrlParams, getUrlParams} from "@/utils/getUrlParams";
import {GithubRepositories} from "@/app/repositories/route";

async function fetGitHubRepositories(urlParams: GitHubApiUrlParams): Promise<GithubRepositories> {
  // This function could be generic
  const queryParams = Object.entries(urlParams)
    .map(([key, value]) => `&${key}=${value}`)
    .join("");

  const response = await fetch(`/repositories?${queryParams}}`);
  return response.json();
}

const useGetGitHubRepositories = () => {
  const searchParams = useSearchParams();
  const urlParams = getUrlParams(searchParams);

  return useQuery({
    queryKey: ["repositories", urlParams],
    queryFn: () => fetGitHubRepositories(urlParams),
    placeholderData: keepPreviousData,
    enabled: Boolean(urlParams.query),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export {useGetGitHubRepositories};
