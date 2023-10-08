import { render } from '@testing-library/react'
import { it } from 'vitest'
import About from '../pages/About'

describe('renders About component', () => {

    it('displays title', () => {
        const { getByText } = render(<About />)
        const titleElement = getByText(/About/i)
        expect(titleElement).toBeInTheDocument()
    })

    it('displays 3 paragraphs', () => {
        const { getAllByText } = render(<About />)
        const paragraphs = getAllByText(/Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut in fugiat excepturi et quas voluptates cumque earum cupiditate neque provident veritatis numquam id repellat maiores tempora minus, quis consectetur aspernatur?/i)
        expect(paragraphs).toHaveLength(3);
    })
})
