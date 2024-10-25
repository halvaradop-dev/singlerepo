import { describe, test, expect } from "vitest"
import { deepClone } from "../src/index"

describe("deepClone", () => {
    test("should return a new object with the same values", () => {
        const obj = {
            name: "foo",
            lastname: "bar",
            age: 20
        }
        const clone = deepClone(obj)
        expect(clone).not.toBe(obj)
    })

    test("should return a new object with the same values", () => {
        const obj = {
            name: "foo",
            lastname: "bar",
            age: 20
        }
        const clone = deepClone(obj)
        expect(obj.name).toBe("foo")
        expect(clone.lastname).toBe("bar")
    })

    test("should return a new object with the same values", () => {
        const obj = {
            name: "foo",
            lastname: "bar",
            age: 20,
            nested: {
                name: "foo",
                lastname: "bar",
                age: 20
            }
        }
        const clone = deepClone(obj)
        expect(clone).not.toBe(obj)
    })

    test("should return a new object with the same values", () => {
        const obj = {
            name: "foo",
            lastname: "bar",
            age: 20,
            nested: {
                name: "foo",
                lastname: "bar",
                age: 20
            },
            arr: [1, 2, 3, 4, 5]
        }
        const clone = deepClone(obj)
        expect(clone).not.toBe(obj)
    })

    test("should return a new object with the same values", () => {
        
    })
})