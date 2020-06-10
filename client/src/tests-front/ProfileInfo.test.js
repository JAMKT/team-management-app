import { shallow } from 'enzyme';
import React from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo.js';

//Testing if the ProfileInfo component is rendered
it('expect to render ProfileInfo component', () => {
    expect(shallow(<ProfileInfo />).length).toEqual(1)
})

//Take a snapshot of a component to track changes
//The test will fail if the changes are made in ProfileInfo component
//If you intended those changes, press u if the test fails to update the snapshot
it('expect to render ProfileInfo component (make a snapshot)', () => {
    expect(shallow(<ProfileInfo />).debug()).toMatchSnapshot();
})