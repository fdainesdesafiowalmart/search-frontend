import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import NoResults from '../NoResults.vue'

describe('NoResults.vue', () => {
  it('its a Vue instance', () => {
    const wrapper = shallowMount(NoResults, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.vm).toBeTruthy();
  })

  it('renders static content as expected', () => {
    const wrapper = shallowMount(NoResults, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})