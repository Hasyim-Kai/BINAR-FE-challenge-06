import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";


describe('Home Page Test', () => {
    const page: JSX.Element = <BrowserRouter><HomePage /></BrowserRouter>
    it('Should have Header Text', () => {
        render(page);
        const elemet = screen.getByText(/Sewa & Rental Mobil Terbaik di kawasan \(Lokasimu\)/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })

    it('Should have Car Image', () => {
        render(page);
        const elemet = screen.getByAltText(/Car/i)
        expect(elemet).toBeInTheDocument();
        expect(elemet).toBeVisible();
    })
});