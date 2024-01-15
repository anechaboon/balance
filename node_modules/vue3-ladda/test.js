import { mount } from '@vue/test-utils'
import VueLadda from './src/vue-ladda.vue';

describe('VueLadda', () => {
  it('require given "loading" prop', () => {
    spyOn(console, 'error').and.callFake((msg) => {
      expect(msg.startsWith('[Vue warn]: Missing required prop: "loading"')).toBeTruthy();
    })
    const wrapper = mount(VueLadda);
  })

  it('sets the correct default data', () => {
    const wrapper = mount(VueLadda);
    expect(wrapper.props('buttonClass')).toBe('ladda-button');
    expect(wrapper.props('dataStyle')).toBe('expand-left');
    expect(wrapper.props('progress')).toBe(0);
  });

  it('test custom button class', () => {
    let bsClasses = 'btn btn-primary';
    const wrapper = mount(VueLadda, {propsData: {buttonClass: bsClasses}});
    expect(wrapper.props('buttonClass')).toBe(bsClasses);
  });
});
