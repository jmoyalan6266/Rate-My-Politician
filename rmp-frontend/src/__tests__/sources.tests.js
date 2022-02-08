import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import NewsModel from "../components/News/NewsModel"

configure({ adapter: new Adapter() })

describe("Test News Source Model page views", () => {
    test("News Sources", () => {
        const sourcesTest = shallow(<NewsModel />)
        expect(sourcesTest).toMatchSnapshot()
    })
})
