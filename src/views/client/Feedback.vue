<template>
  <main>
    <div class="sm: container; bg-gray-100 min-h-screen flex pt-5">
      <div class="w-full">
        <div class="bg-gray-200 p-10 rounded-lg shadow md:w-3/4 mx-auto">
          <div class="sm:flex-col ">
            <div class="relative overflow-x-auto">
              <h3 class="text-center font-semibold text-4xl mb-11">今日用餐滿意程度</h3>

              <div>
                <div class="grid gap-4 grid-cols-6 text-center text-gray-500 mb-8 border-2 border-b-gray-500">
                  <p></p>
                  <p>非常滿意</p>
                  <p>滿意</p>
                  <p>普通</p>
                  <p>不滿意</p>
                  <p>非常不滿意</p>
                </div>
                <form action="submitForm" id="feedbackForm">
                  <div class="text-xl font-semibold grid gap-4 grid-cols-6 text-center mb-5 items-center">
                    <div>服務品質</div>
                    <div class="grid justify-items-center" v-for="option in feedbackOptions">
                      <input :value="option.value" v-model="form.quality" type="radio" name="quality"
                        class="radio text-orange-500 checked:bg-orange-500 checked:border-orange-400 focus:outline-orange-400" />
                    </div>
                  </div>
                  <div class="text-xl font-semibold grid gap-4 grid-cols-6 text-center mb-5 items-center">
                    <div>點餐流程</div>
                    <div class="grid justify-items-center" v-for="option in feedbackOptions">
                      <input :value="option.value" v-model="form.process" type="radio" name="process"
                        class="radio text-orange-500 checked:bg-orange-500 checked:border-orange-400 focus:outline-orange-400" />
                    </div>
                  </div>
                  <div class="text-xl font-semibold grid gap-4 grid-cols-6 text-center mb-5 items-center">
                    <div>出餐速度</div>
                    <div class="grid justify-items-center" v-for="option in feedbackOptions">
                      <input :value="option.value" v-model="form.speed" type="radio" name="speed"
                        class="radio text-orange-500 checked:bg-orange-500 checked:border-orange-400 focus:outline-orange-400" />
                    </div>
                  </div>
                  <div class="text-xl font-semibold grid gap-4 grid-cols-6 text-center mb-5 items-center">
                    <div>餐點口味</div>
                    <div class="grid justify-items-center" v-for="option in feedbackOptions">
                      <input :value="option.value" v-model="form.flavor" type="radio" name="flavor"
                        class="radio text-orange-500 checked:bg-orange-500 checked:border-orange-400 focus:outline-orange-400" />
                    </div>
                  </div>
                  <div class="text-xl font-semibold grid gap-4 grid-cols-6 text-center mb-5 items-center">
                    <div>餐點價格</div>
                    <div class="grid justify-items-center" v-for="option in feedbackOptions">
                      <input :value="option.value" v-model="form.price" type="radio" name="price"
                        class="radio text-orange-500 checked:bg-orange-500 checked:border-orange-400 focus:outline-orange-400" />
                    </div>
                  </div>
                  <div class="text-xl font-semibold grid gap-4 grid-cols-6 text-center mb-5 items-center">
                    <div>環境衛生</div>
                    <div class="grid justify-items-center" v-for="option in feedbackOptions">
                      <input :value="option.value" v-model="form.sanitation" type="radio" name="sanitation"
                        class="radio text-orange-500 checked:bg-orange-500 checked:border-orange-400 focus:outline-orange-400" />
                    </div>
                  </div>
                  <div class="text-xl font-semibold grid gap-4 grid-cols-6 text-center mb-5 items-center">
                    <div>整體印象</div>
                    <div class="grid justify-items-center" v-for="option in feedbackOptions">
                      <input :value="option.value" v-model="form.impress" type="radio" name="impress"
                        class="radio text-orange-500 checked:bg-orange-500 checked:border-orange-400 focus:outline-orange-400" />
                    </div>
                  </div>
                  <div class="text-xl font-semibold grid gap-4 grid-cols-6 text-center mb-5 items-center">
                    <div>意見回饋</div>
                    <textarea v-model="form.feedback"
                      class="col-span-5 border-orange-200 focus:ring-orange-300 focus:border-orange-300 border-2 border-solid"
                      name="feedback" id="feedback" cols="30" rows="5"></textarea>
                  </div>
                  <div class="mb-5 flex justify-center">
                    <button @click="openModal"
                      class="block w-full md:w-auto text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-500"
                      type="button">
                      送出
                    </button>
                    <!-- Main modal -->
                    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center">
                      <div class="fixed bg-black opacity-50"></div>

                      <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                        <div>
                          <h2 class="text-center text-2xl font-bold mb-4">今日用餐滿意程度</h2>
                          <p class="text-center text-orange-400 text-xl">感謝您的回饋，期待下次再相遇。<br>
                            祝您有美好的一天。
                          </p>
                        </div>
                        <div class="mt-6 flex justify-center">
                          <button @click="goback"
                            class="block w-full justify-center md:w-auto text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-500">確定</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isOpen = ref(false);

    const openModal = () => {
      isOpen.value = true;
    };

    const closeModal = () => {
      isOpen.value = false;
    };
    return {
      isOpen,
      openModal,
      closeModal,
    };
  },
  data() {
    return {
      form: {
        quality: '',
        process: '',
        speed: '',
        flavor: '',
        price: '',
        sanitation: '',
        impress: '',
        feedback: ''
      },
      feedbackOptions: [
        {
          name: '非常滿意',
          value: 5
        },
        {
          name: '滿意',
          value: 4
        },
        {
          name: '普通',
          value: 3
        },
        {
          name: '不滿意',
          value: 2
        },
        {
          name: '非常不滿意',
          value: 1
        }
      ],
    }
  },
  methods: {
    submitForm() {

    },
    openModal() {
      this.submitForm;
      this.isOpen = true; // 開啟 modal
    },
    goback(){
      this.$router.push({ path: '/Client' })
    },
  }
})
</script>
