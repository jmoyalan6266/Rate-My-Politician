import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Splash from "../components/Splash/Splash"

configure({ adapter: new Adapter() })

describe("Test page views", () => {
    test("Splash", () => {
        const splashTest = shallow(<Splash />)
        expect(splashTest).toMatchSnapshot()
    })
})
