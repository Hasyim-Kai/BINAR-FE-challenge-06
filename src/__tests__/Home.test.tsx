import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";


describe('Home Page Test', () => {
    it('Should have Header Text', () => {
        render(<BrowserRouter><HomePage /></BrowserRouter>);
        const elemet = screen.getByPlaceholderText(/Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have Car Image', () => {
        render(<BrowserRouter><HomePage /></BrowserRouter>);
        const carImage = screen.getByRole('img')
        const elemet = screen.getByAltText(/Car/i)
        expect(elemet).toBeInTheDocument();
        expect(carImage).toBeVisible();
    })
});