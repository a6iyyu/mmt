import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Home from "@/app/page";

afterEach(() => cleanup());

describe("Home", () => {
  it("Should render the page", async () => {
    render(<Home />);
    expect(await screen.findByText("Selamat Datang di Lab")).toBeDefined();
  });

  it("The carousel should be able to slide", () => {});
});