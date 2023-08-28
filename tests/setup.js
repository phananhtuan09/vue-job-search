import { cleanup } from '@testing-library/vue'
import * as matchers from '@testing-library/jest-dom/matchers'
import { expect, afterEach } from 'vitest'

expect.extend(matchers)

// Unmounts component after testing
afterEach(() => {
  cleanup()
})
