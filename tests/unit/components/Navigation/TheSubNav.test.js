import { render, screen } from '@testing-library/vue'

import TheSubNav from '../../../../src/components/Navigation/TheSubNav.vue'
import { describe, expect, it } from 'vitest'

describe('TheSubNav', () => {
  const renderTheSubnav = (routerName) => {
    render(TheSubNav, {
      global: {
        mocks: {
          $route: {
            name: routerName
          }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }

  it('does  display job count', () => {
    const routerName = 'JobResults'
    renderTheSubnav(routerName)
    const jobCount = screen.getByText('1653')
    expect(jobCount).toBeInTheDocument()
  })

  it('does Not display job count', () => {
    const routerName = 'Home'
    renderTheSubnav(routerName)
    const jobCount = screen.queryByText('1653')
    expect(jobCount).not.toBeInTheDocument()
  })
})
