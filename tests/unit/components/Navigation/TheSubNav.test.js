import { render, screen } from '@testing-library/vue'

import TheSubNav from '../../../../src/components/Navigation/TheSubNav.vue'
import { describe, expect, it } from 'vitest'

describe('TheSubNav', () => {
  it('when user is on jobs page', () => {
    render(TheSubNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      },
      data() {
        return {
          onJobResultsPage: true
        }
      }
    })
    const jobCount = screen.getByText('1653')
    expect(jobCount).toBeInTheDocument()
  })

  describe('when user is not on jobs page', () => {
    it('does Not display job count', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })
      const jobCount = screen.queryByText('1653')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
