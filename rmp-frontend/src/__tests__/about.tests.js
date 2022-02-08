import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import About from "../components/About/About"

configure({ adapter: new Adapter() })

describe("Test About page views", () => {
    test("About", () => {
        const aboutTest = shallow(<About />)
        expect(aboutTest).toMatchSnapshot()
    })
})
