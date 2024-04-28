import {afterEach, vi} from "vitest";
import {cleanup} from "@testing-library/react";

afterEach(() => {
  cleanup();
});

const mocks = vi.hoisted(() => {
  return {
    useSearchParams: vi.fn(),
  };
});

vi.mock("next/navigation", async (importOriginal) => {
  const nextNavigation = await importOriginal<typeof import("next/navigation")>();

  return {
    ...nextNavigation,
    useSearchParams: mocks.useSearchParams.mockReturnValue([]),
  };
});

export {mocks};
