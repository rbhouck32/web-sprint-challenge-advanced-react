import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm, { handleSubmit } from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />); //Arrange, Act --------


    getByText(/checkout form/i);
    
});

test("form shows success message on submit with form details", () => {
 const { getByTestId } = render(<CheckoutForm />);


 getByTestId("successMessage");


});
