import { defineComponent } from "vue";
import type { ModalMixinData, ModalMixinMethods } from "@/types/modalTypes";

export default defineComponent({
  data(): ModalMixinData {
    return {
      showModal: false,
    };
  },
  methods: {
    open(this: ModalMixinData & ModalMixinMethods) {
      this.showModal = true;
    },
    close(this: ModalMixinData & ModalMixinMethods) {
      this.showModal = false;
    },
  },
});