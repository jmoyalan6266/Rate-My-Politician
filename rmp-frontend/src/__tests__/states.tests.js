import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import States from "../components/States/StateModel"

configure({ adapter: new Adapter() })

describe("Test State Model page views", () => {
	test("States", () => {
		const statesTest = shallow(<States />)
		expect(statesTest).toMatchSnapshot()
	})
})