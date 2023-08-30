import { render, screen } from '@testing-library/vue'

import MainNav from '../../../../src/components/Navigation/MainNav.vue'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'

describe('MainNav', () => {
  const $route = {
    name: 'Home'
  }

  const renderMainNav = () => {
    render(MainNav, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it('display company name', () => {
    renderMainNav()
    screen.getByText('Google Carrers')
  })
  it('displays menu items for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual(['Teams', 'Location', 'Benefits', 'Jobs', 'Students'])
  })
  describe('when user login ', () => {
    it('displays user profile picture', async () => {
      renderMainNav()

      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
