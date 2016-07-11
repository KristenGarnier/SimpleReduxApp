import expect from 'expect'
import {authorFormattedForDropDown} from './selectors'

describe('AUTHOR SELECTOR', () => {
  describe('Author formatted drop down', () => {
    it('Should return author data formated for use in drop down', () => {
      const authors = [
        { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
        { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' }
      ]

      const expected = [
        { value: 'cory-house', text: 'Cory House' },
        { value: 'scott-allen', text: 'Scott Allen' }
      ]

      expect(authorFormattedForDropDown(authors)).toEqual(expected)
    })
  })
})
