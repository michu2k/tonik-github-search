import {useSearchParams} from "next/navigation";
import {afterEach, describe, expect, it} from "vitest";
import {renderHook} from "@testing-library/react";
import {mocks} from "@/tests/vitest-setup";
import {CONFIG} from "@/config";
import {getUrlParams} from "./getUrlParams";

describe("getUrlParams", () => {
  afterEach(() => {
    mocks.useSearchParams.mockRestore();
  });

  it("Returns default url parameters", () => {
    const defaultUrlParams = {
      query: "",
      page: 1,
      order: "",
      sort: "",
      limit: CONFIG.COLLECTION_SIZE.DEFAULT,
    };

    const {result} = renderHook(() => useSearchParams());
    const urlParams = getUrlParams(result.current);

    expect(urlParams).toEqual(defaultUrlParams);
  });

  it("Returns the changed limit", () => {
    mocks.useSearchParams.mockReturnValue([["limit", "30"]]);

    const {result} = renderHook(() => useSearchParams());
    const {limit} = getUrlParams(result.current);

    expect(limit).toBe(30);
  });

  it("Returns the second page", () => {
    mocks.useSearchParams.mockReturnValue([["page", "2"]]);

    const {result} = renderHook(() => useSearchParams());
    const {page} = getUrlParams(result.current);

    expect(page).toBe(2);
  });
});
