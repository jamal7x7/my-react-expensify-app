import React from 'react'
import { shallow } from 'enzyme'
import { ExpenceDiscription } from '../../components/ExpenceListItem'
import expences from '../fixtures/expences'

test ('should render ExpenceListItem with discriptions', () => {
  const wrapper = shallow(<ExpenceDiscription  {...expences[0]} />)
  expect(wrapper).toMatchSnapshot()
})
