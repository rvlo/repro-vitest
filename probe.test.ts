import { TZDate } from '@date-fns/tz'
import { expect, test } from 'vitest'

test('probe', () => {
  expect(TZDate).toBeTypeOf('function')
})
