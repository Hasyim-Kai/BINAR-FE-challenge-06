import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


describe('Login Page Test', () => {
    it('Should have Text to Welcome admin', () => {
        render(<BrowserRouter><DashboardPage /></BrowserRouter>);
        const elemet = screen.getByPlaceholderText(/welcome back Admin!/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })
});