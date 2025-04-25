import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "@/components/Article";

describe("ARTICLE COMPONENT MUST HAVE ARTICLE TEXT IN IT ", () => {
  test("renders a sentence in DOM", () => {
    render(<Article />);
    const ArticleTitle = screen.getByText("ARTICLE");
    expect(ArticleTitle).toBeInTheDocument();
  });
});
