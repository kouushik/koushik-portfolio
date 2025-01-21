import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Component', () => {
    const renderWithRouter = (component) => {
        return render(
            <BrowserRouter>
                {component}
            </BrowserRouter>
        );
    };

    test('renders hero section with name', () => {
        renderWithRouter(<Home />);
        expect(screen.getByText(/Koushik Mannam/i)).toBeInTheDocument();
    });

    test('renders about section', () => {
        renderWithRouter(<Home />);
        expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    });

    test('renders tech stack section', () => {
        renderWithRouter(<Home />);
        expect(screen.getByText(/Tech Stack/i)).toBeInTheDocument();
    });

    test('renders projects section', () => {
        renderWithRouter(<Home />);
        expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    });
});