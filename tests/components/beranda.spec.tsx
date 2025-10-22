import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Beranda from "@/app/page";

afterEach(() => {
  cleanup();
});

describe("Beranda", () => {
  it("should render the page", async () => {
    render(<Beranda />);
    const heading = await screen.findByText("Selamat Datang di Lab");
    expect(heading).toBeDefined();
  });

  it("the carousel should be able to slide", () => {});
});