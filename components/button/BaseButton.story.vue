<script setup lang="ts">
import {
  ControlsAddon,
  EventsAddon,
  eventCallback,
} from '@vitebook/vue/addons';
import { Variant } from '@vitebook/vue';
import { ref } from 'vue';
import Button from './BaseButton.vue';
const title = ref('Click Me');
const disabled = ref(false);
function onEnterDisabledButton() {
  disabled.value = true;
}
function onExitDisabledButton() {
  disabled.value = false;
}
</script>

<template>
  <div>
    <Variant name="Default" description="The default button.">
      <Button :disabled="disabled" @click="eventCallback">{{ title }}</Button>
    </Variant>

    <Variant
      name="Disabled"
      description="The disabled button."
      @enter="onEnterDisabledButton"
      @exit="onExitDisabledButton"
    >
      <Button :disabled="disabled">{{ title }}</Button>
    </Variant>

    <ControlsAddon>
      <label>Title <input v-model="title" type="text" /></label>
      <label style="margin-top: 24px">
        Disabled <input v-model="disabled" type="checkbox" />
      </label>
    </ControlsAddon>

    <EventsAddon />
  </div>
</template>
