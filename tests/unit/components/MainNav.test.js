import { render, screen } from '@testing-library/vue'

import MainNav from '../../../src/components/MainNav.vue'
import { describe, expect, it } from 'vitest'

describe('MainNav', () => {
  it('display company name', () => {
    render(MainNav)
    screen.getByText('Google Carrers')
  })
  it('displays menu items for navigation', () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual(['Teams', 'Location', 'Benefits', 'Jobs', 'Students'])
  })
  describe('when user login ', () => {
    it('display user profile picture', () => {
      render(MainNav)
      const profileImage = screen.queryByRole('img', {
        name: /User profile image/i
      })
      expect(profileImage).toBeNull()
    })
  })
})
