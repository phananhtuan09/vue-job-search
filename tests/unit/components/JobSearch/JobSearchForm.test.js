import { render, screen } from '@testing-library/vue'

import JobSearchForm from '../../../../src/components/JobSearch/JobSearchForm.vue'
import { describe, expect, it } from 'vitest'

import userEvent from '@testing-library/user-event'

describe('JobSearchForm', () => {
  describe('when user submit form', () => {
    it('directs user to job results page with users search parameters', async () => {
      const push = vi.fn()
      const $router = {
        push
      }
      render(JobSearchForm, {
        global: {
          mocks: {
            $router
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      const roleInput = screen.getByRole('textbox', {
        name: /role/i
      })
      await userEvent.type(roleInput, 'Vue Developer')
      const locationInput = screen.getByRole('textbox', {
        name: /where?/i
      })
      await userEvent.type(locationInput, 'Dallas')

      const submitButton = screen.getByRole('button', {
        name: /search/i
      })
      await userEvent.click(submitButton)
      expect(push).toHaveBeenCalledWith({
        name: 'JobResults',
        query: {
          role: 'Vue Developer',
          location: 'Dallas'
        }
      })
    })
  })
})
