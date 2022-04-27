import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";


describe('App component', () => {
   it('alerts on submit click', async () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation();
      render(<App />);
      const elemet = screen.getByText(/submit/i)
      fireEvent.click(elemet);
      expect(elemet).toBeInTheDocument();
      expect(alertMock).toHaveBeenCalledTimes(1);
   })
});