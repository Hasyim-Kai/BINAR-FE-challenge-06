import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";


describe('Register Page Test', () => {
    const page: JSX.Element = <BrowserRouter><RegisterPage /></BrowserRouter>
    it('Should have Create new Account text', () => {
        render(page);
        const elemet = screen.getByText(/Create new Account/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have email input field', () => {
        render(page);
        const elemet = screen.getByPlaceholderText(/Contoh: johndee@gmail.com/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })


    it('Should have Password input field', () => {
        render(page);
        const elemet = screen.getByPlaceholderText('6+ karakter')
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have Register Button', () => {
        render(page);
        const elemet = screen.getByRole('button', { name: 'Sign Up', })
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have already have Account text', () => {
        render(page);
        const elemet = screen.getByText(/Already have an account \? Login/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })
});