import { render, screen } from '@testing-library/vue'

import TextInput from '../../../../src/components/Shared/TextInput.vue'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('TextInput', () => {
  it('communicates that user has entered character', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: ''
      }
    })

    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'NYC')
    const messages = emitted()['update:modelValue']
    expect(messages).toEqual([['N'], ['NY'], ['NYC']])
  })
})
