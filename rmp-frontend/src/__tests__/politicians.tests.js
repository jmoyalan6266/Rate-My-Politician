import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import Politicians from "../components/Politicians/PoliticianModel"

configure({ adapter: new Adapter() })

describe("Test Politician Model page views", () => {
	test("Politicians", () => {
		const politiciansTest = shallow(<Politicians />)
		expect(politiciansTest).toMatchSnapshot()
	})
})
