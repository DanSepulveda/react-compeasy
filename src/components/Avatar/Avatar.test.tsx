import React from "react"
import { render, screen } from "@testing-library/react"
import Avatar from "./Avatar"

describe("Avatar Component", () => {
    test("renders the Avatar component", () => {
        render(<Avatar initials="Hello world!" />)
    })
    test("checking initials property", () => {
        render(<Avatar initials="Daniel Sepúlveda" />)
        expect(screen.getByText('DS')).toBe
    })
})