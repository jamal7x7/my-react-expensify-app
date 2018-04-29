import React from 'react'
import { shallow } from 'enzyme'
import { NoMatchPage } from '../../components/NoMatchPage'


test('should render NoMatchPage correctly', () => {
  const wrapper = shallow(<NoMatchPage />)
  expect(wrapper).toMatchSnapshot()
})
