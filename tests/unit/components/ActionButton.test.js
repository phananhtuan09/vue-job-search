import { render, screen } from '@testing-library/vue'

import ActionButton from '../../../src/components/ActionButton.vue'
import { describe, expect, it } from 'vitest'

describe('ActionButton', () => {
  it('render text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toBeInTheDocument()
  })

  it('applies one of  serveral style to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toHaveClass('primary')
  })
})
