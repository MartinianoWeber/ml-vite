import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../src/components/molecules/Item/Item";
import { MemoryRouter } from "react-router-dom";

// Mockea useNavigate
const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const mockItem = {
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
  condition: "Nuevo",
};

describe("Item Component", () => {
  it("should render item correctly", () => {
    render(
      <MemoryRouter>
        <Item
          id={mockItem.id}
          title={mockItem.title}
          price={mockItem.price}
          free_shipping={mockItem.free_shipping}
          location={mockItem.location}
          picture={mockItem.picture}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("$ 1.000")).toBeInTheDocument();
    expect(screen.getByText("Buenos Aires")).toBeInTheDocument();
    expect(screen.getByText("iPhone 12")).toBeInTheDocument();
    expect(screen.getByAltText("")).toBeInTheDocument();
  });

  it("should redirect to the correct item page when button is clicked", () => {
    render(
      <MemoryRouter>
        <Item
          id={mockItem.id}
          title={mockItem.title}
          price={mockItem.price}
          free_shipping={mockItem.free_shipping}
          location={mockItem.location}
          picture={mockItem.picture}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole("link");
    fireEvent.click(button);

    expect(mockedNavigate).toHaveBeenCalledWith(`/items/${mockItem.id}`);
  });

  it("should not render free shipping icon when free_shipping is false", () => {
    render(
      <MemoryRouter>
        <Item
          id={mockItem.id}
          title={mockItem.title}
          price={mockItem.price}
          free_shipping={false}
          location={mockItem.location}
          picture={mockItem.picture}
        />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("free-shipping")).not.toBeInTheDocument();
  });
});
