import { fireEvent, render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

describe('renders Sidebar and toggles open/close', async () => {
    it('should be hidden on initial render', () => {
        const { getByRole } = render(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        )
        const sidebar = getByRole('navigation')
        waitFor(() => expect(sidebar).toHaveClass('hidden md:block'))
    })

    it('should be visible after first click', () => {
        const { getByRole } = render(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        )
        const button = getByRole('sidebar-hamburger')
        fireEvent.click(button)

        const sidebar = getByRole('navigation')
        waitFor(() => expect(sidebar).not.toHaveClass('hidden md:block'))
    })

    it('should be hidden after second click', () => {
        const { getByRole } = render(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        )

        const button = getByRole('button')
        fireEvent.click(button)

        const sidebar = getByRole('navigation')
        waitFor(() => expect(sidebar).toHaveClass('hidden md:block'))
    })
})
