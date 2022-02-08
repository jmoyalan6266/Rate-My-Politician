import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Splash from "../components/Splash/Splash";

test("Splash page renders", () => {
    const component = render(
        <BrowserRouter>
            <Splash />
        </BrowserRouter>
    );

    const element = component.getByText("The REAL Truth");
    expect(element).toBeDefined();
});
