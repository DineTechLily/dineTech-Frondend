<template>
  <div class="bg-primary-bg h-screen w-screen overflow-hidden">
    <MenuHeader @changeCategory="setMenu" />
    <div class="flex justify-between h-[calc(100%-80px)]">
      <Transition name="fade">
        <main v-show="menu.length > 1" class="px-12 py-4 overflow-auto">
          <div class="flex flex-wrap items-center gap-6">
            <MealCard
              v-for="meal in menu"
              :key="meal._id"
              :meal="meal"
              @click="openMealModal('add')"
            />
          </div>
        </main>
      </Transition>
      <MenuSidebar class="w-[340px]" @click:list="openMealModal('edit')" />
    </div>
  </div>
  <Transition name="fade">
    <CheckInForm v-if="!isCheckIn" />
  </Transition>
  <MealModal ref="mealModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapWritableState } from 'pinia'
import { useClientStore } from '@/stores/clientStore'
import CheckInForm from '@/components/client/mainMenu/CheckInForm.vue'
import MenuHeader from '@/components/client/mainMenu/MenuHeader.vue'
import MenuSidebar from '@/components/client/mainMenu/MenuSidebar.vue'
import MealCard from '@/components/client/mainMenu/MealCard.vue'
import { apiGetMenu } from '@/apis/client'
import type { Menu } from '@/types/menuTypes'
import MealModal from '@/components/client/mainMenu/MealModal.vue'

export default defineComponent({
  components: {
    CheckInForm,
    MenuHeader,
    MenuSidebar,
    MealCard,
    MealModal
  },
  data() {
    return {
      origin: [] as Menu,
      menu: [] as Menu
    }
  },
  computed: {
    ...mapState(useClientStore, ['isCheckIn']),
    ...mapWritableState(useClientStore, ['sidebarExpand'])
  },
  methods: {
    setMenu(category: string) {
      switch (category) {
        case '主餐':
          this.menu = this.origin.filter(
            (item) => item.category === 'risotto' || item.category === 'pasta'
          )
          break
        case '甜點':
          this.menu = this.origin.filter((item) => item.category === 'dessert')
          break
        case '飲料':
          this.menu = this.origin.filter((item) => item.category === 'drink')
          break
        default:
          this.menu = this.origin
          break
      }
    },
    async getMenu() {
      try {
        const { data } = await apiGetMenu()
        this.origin = data.data_item
        this.setMenu('主餐')
      } catch (err) {
        console.error(err)
      }
    },
    openMealModal(type: string) {
      ;(this.$refs.mealModal as typeof MealModal).open(type)
    }
  },
  created() {
    this.getMenu()
    this.sidebarExpand = false
  }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
