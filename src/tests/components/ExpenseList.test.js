import React from 'react'
import { shallow } from 'enzyme'
import { ExpenceList } from '../../components/ExpenceList'
import expences from '../fixtures/expences'

test ('should render ExpenceList with expences', () => {
  const wrapper = shallow(<ExpenceList expences={expences} />)
  expect(wrapper).toMatchSnapshot()
})

test ('should render ExpenceList with empty message', () => {
  const wrapper = shallow(<ExpenceList expences={[]} />)
  expect(wrapper).toMatchSnapshot()
})
