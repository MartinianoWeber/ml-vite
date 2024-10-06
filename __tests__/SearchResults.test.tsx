import { render, screen } from "@testing-library/react";
import ListItems from "../src/components/organisms/ListItems/ListItems";
import { MemoryRouter } from "react-router-dom"; // Importa MemoryRouter

const mockItems = [
  {
    id: "1",
    title: "iPhone 12",
    price: {
      currency: "USD",
      amount: 1000,
      decimals: 99,
    },
    free_shipping: true,
    location: "Buenos Aires",
    picture: "https://example.com/iphone12.jpg",
    condition: "new",
  },
  {
    id: "2",
    title: "Samsung S21",
    price: {
      currency: "USD",
      amount: 900,
      decimals: 99,
    },
    free_shipping: false,
    location: "Córdoba",
    picture: "https://example.com/s21.jpg",
    condition: "new",
  },
  {
    id: "3",
    title: "Google Pixel 5",
    price: {
      currency: "USD",
      amount: 800,
      decimals: 99,
    },
    free_shipping: true,
    location: "Rosario",
    picture: "https://example.com/pixel5.jpg",
    condition: "used",
  },
  {
    id: "4",
    title: "OnePlus 9",
    price: {
      currency: "USD",
      amount: 700,
      decimals: 50,
    },
    free_shipping: true,
    location: "Mendoza",
    picture: "https://example.com/oneplus9.jpg",
    condition: "new",
  },
];

describe("SearchResults Component", () => {
  test("renders 4 products", () => {
    render(
      <MemoryRouter>
        <ListItems data={mockItems} />
      </MemoryRouter>
    );
    const products = screen.getAllByRole("link");
    expect(products.length).toBe(4);

    const firstProduct = products[0];
    expect(firstProduct).toHaveAttribute("href", "/items/1");

    const secondProduct = products[1];
    expect(secondProduct).toHaveAttribute("href", "/items/2");

    const thirdProduct = products[2];
    expect(thirdProduct).toHaveAttribute("href", "/items/3");

    const fourthProduct = products[3];
    expect(fourthProduct).toHaveAttribute("href", "/items/4");
  });

  test("renders product information correctly", () => {
    render(
      <MemoryRouter>
        <ListItems data={mockItems} />
      </MemoryRouter>
    );

    expect(screen.getByText("$ 1.000")).toBeInTheDocument();
    expect(screen.getByText("Buenos Aires")).toBeInTheDocument();

    expect(screen.getByText("$ 900")).toBeInTheDocument();
    expect(screen.getByText("Córdoba")).toBeInTheDocument();

    expect(screen.getByText("$ 800")).toBeInTheDocument();
    expect(screen.getByText("Rosario")).toBeInTheDocument();

    expect(screen.getByText("$ 700")).toBeInTheDocument();
    expect(screen.getByText("Mendoza")).toBeInTheDocument();
  });

  test("renders product images correctly", () => {
    render(
      <MemoryRouter>
        <ListItems data={mockItems} />
      </MemoryRouter>
    );

    const images = screen.getAllByAltText("");
    expect(images.length).toBe(4);

    const firstImage = images[0];
    expect(firstImage).toHaveAttribute(
      "src",
      "https://example.com/iphone12.jpg"
    );

    const secondImage = images[1];
    expect(secondImage).toHaveAttribute("src", "https://example.com/s21.jpg");

    const thirdImage = images[2];
    expect(thirdImage).toHaveAttribute("src", "https://example.com/pixel5.jpg");

    const fourthImage = images[3];
    expect(fourthImage).toHaveAttribute(
      "src",
      "https://example.com/oneplus9.jpg"
    );
  });
});
