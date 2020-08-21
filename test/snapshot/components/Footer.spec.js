import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils'

import Footer from 'components/Footer.vue'

describe('Footer.vue', () => {
  it('its a Vue instance', () => {
    const wrapper = shallowMount(Footer, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.vm).toBeTruthy();
  })

  it('renders static content as expected', () => {
    const wrapper = shallowMount(Footer, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
