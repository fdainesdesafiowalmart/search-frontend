import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import NoSearch from '../NoSearch.vue'

describe('NoSearch.vue', () => {
  it('its a Vue instance', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.vm).toBeTruthy();
  })

  it('renders static content as expected', () => {
    const wrapper = shallowMount(NoSearch, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})