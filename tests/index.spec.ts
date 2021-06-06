function add (a: number, b: number): number {
	return a + b
}

describe('add', () => {
	test('add method', () => {
		const n = add(1, 2)
		expect(n).toBe(3)
	})
})
