import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";


describe('Login Page Test', () => {
    const page: JSX.Element = <BrowserRouter><LoginPage /></BrowserRouter>
    it('Should have Welcome text', () => {
        render(page);
        const elemet = screen.getByText(/welcome, BCR Renters/i)
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

    it('Should have Login Button', () => {
        render(page);
        const elemet = screen.getByRole('button', { name: 'Sign In', })
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have Login with Google Button', () => {
        render(page);
        const elemet = screen.getByText(/login with google/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })
});