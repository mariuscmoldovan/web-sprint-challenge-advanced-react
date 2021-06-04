import React from "react";
import { findByTestId,  render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
    expect(header).toBeVisible()
});



test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const submitButton = screen.getByRole("button");
    // console.log(submitButton);
    userEvent.click(submitButton)
    
  
    const successMessage =  await screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toBeVisible();
});