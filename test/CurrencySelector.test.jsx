import '@testing-library/jest-dom'
import { render, rerender, screen, fireEvent, cleanup } from '@testing-library/react'
import CurrencySelector, { AVAILABLE_CURRENCIES } from '../app/CurrencySelector'
import { after, before, it } from 'node:test'
 
describe('CurrencySelector', () => {
  test('renders all the currencies', () => {
    render(<CurrencySelector />)

    AVAILABLE_CURRENCIES.forEach(currency => {
      const currencySelector = screen.getByText(currency)
      expect(currencySelector).toBeInTheDocument()
    })
  })

  test('renders selected currency when clicked', () => {
    render(<CurrencySelector />)

    fireEvent.click(screen.getByTestId("availableLanguages").firstChild)

    expect(screen.getByTestId("availableLanguages").firstChild.classList.contains('selected')).toBe(true)
    expect(screen.getByTestId("selectedLanguages").children.length).toBe(1)
  })

  test('removes selected currency when clicked', () => {
    render(<CurrencySelector />)

    fireEvent.click(screen.getByTestId("availableLanguages").firstChild)
    fireEvent.click(screen.getByTestId("availableLanguages").firstChild)
 
    expect(screen.getByTestId("availableLanguages").firstChild.classList.contains('selected')).toBe(false)
    expect(screen.getByTestId("selectedLanguages").children.length).toBe(0)
  })

  test('removes selected currency when the cross is clicked', () => {
    render(<CurrencySelector />)
    
    fireEvent.click(screen.getByTestId("availableLanguages").firstChild)
    fireEvent.click(screen.getByTestId("removeCurrencyButton"))
 
    expect(screen.getByTestId("availableLanguages").firstChild.classList.contains('selected')).toBe(false)
    expect(screen.getByTestId("selectedLanguages").children.length).toBe(0)
  })
})