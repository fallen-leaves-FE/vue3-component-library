import Button from '@/Button/index.vue'
import { mount } from '@vue/test-utils'

describe('packages/Button/index.vue', () => {
	const wrapper = mount(Button, {
		props: {
			type: 'success',
			round: true
		}
	})

	test('测试classNames', () => {
		expect(wrapper.classes('fa-button--success')).toBe(true)
		expect(wrapper.classes('is-round')).toBe(true)
	})

	test('测试click', () => {
		wrapper.trigger('click')
		expect(wrapper.emitted()).toHaveProperty('click')
	})
})
