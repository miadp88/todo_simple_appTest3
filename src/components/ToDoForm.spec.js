/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import TodoForm from './TodoForm.vue';

describe('TodoForm.vue', () => {
  it('emits todo-added event when form is submitted', async () => {
    const wrapper = mount(TodoForm);

    // Simulate user input
    const input = wrapper.find('input');
    await input.setValue('New Todo');

    // Simulate form submission
    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    // Check if the emitted event contains the correct label
    expect(wrapper.emitted('todo-added')[0][0]).toBe('New Todo');
  });

  it('does not emit todo-added event when form is submitted with an empty label', async () => {
    const wrapper = mount(TodoForm);

    // Simulate form submission with an empty input
    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    // Ensure that no event is emitted
    expect(wrapper.emitted('todo-added')).toBeUndefined();
  });
});
