
import { mount} from 'vitest';
import {expect, test} from 'vitest';
import ToDoForm from './ToDoForm.vue';

test('YourComponent should emit "todo-added" event when the form is submitted with a non-empty label', async () => {
  // Mount the component
  const wrapper = mount(ToDoForm);

  // Find the input field and set its value
  const input = wrapper.find('input');
  await input.setValue('New Todo');

  // Find the form and trigger a submit event
  const form = wrapper.find('form');
  await form.trigger('submit.prevent');

  // Check if the emitted event contains the correct label
  expect(wrapper.emitted('todo-added')[0][0]).toBe('New Todo');
});

test('YourComponent should not emit "todo-added" event when the form is submitted with an empty label', async () => {
  // Mount the component
  const wrapper = mount(ToDoForm);

  // Find the form and trigger a submit event without setting the input value
  const form = wrapper.find('form');
  await form.trigger('submit.prevent');

  // Ensure that no event is emitted
  expect(wrapper.emitted('todo-added')).toBeUndefined();
});

