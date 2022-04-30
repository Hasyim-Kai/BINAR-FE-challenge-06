import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";


describe('Register Page Test', () => {
    it('Should have Create new Account text', () => {
        render(<BrowserRouter><RegisterPage /></BrowserRouter>);
        const elemet = screen.getByText(/Create new Account/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have email input field', () => {
        render(<BrowserRouter><RegisterPage /></BrowserRouter>);
        const elemet = screen.getByPlaceholderText(/Contoh: johndee@gmail.com/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })


    it('Should have Password input field', () => {
        render(<BrowserRouter><RegisterPage /></BrowserRouter>);
        const elemet = screen.getByPlaceholderText('6+ karakter')
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have Register Button', () => {
        render(<BrowserRouter><RegisterPage /></BrowserRouter>);
        const elemet = screen.getByRole('button', { name: 'Sign Up', })
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have already have Account text', () => {
        render(<BrowserRouter><RegisterPage /></BrowserRouter>);
        const elemet = screen.getByText(/Already have an account ? Login/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })
});