<template>
  <div class="bg-primary-bg h-screen w-screen">
    <MenuHeader />
    <div class="flex justify-between h-[calc(100%-80px)]">
      <main class="px-12 py-4 overflow-auto">
        <div class="flex flex-wrap items-center gap-6">
          <MealCard v-for="meal in menu" :key="meal._id" :meal="meal" />
        </div>
      </main>
      <MenuSidebar class="min-w-[360px]" />
    </div>
  </div>
  <Transition name="fade">
    <CheckInForm v-if="!status.isCheckIn" @submit:checkIn="checkIn" />
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CheckInForm from '@/components/client/mainMenu/CheckInForm.vue'
import MenuHeader from '@/components/client/mainMenu/MenuHeader.vue'
import MenuSidebar from '@/components/client/mainMenu/MenuSidebar.vue'
import MealCard from '@/components/client/mainMenu/MealCard.vue'

export default defineComponent({
  components: {
    CheckInForm,
    MenuHeader,
    MenuSidebar,
    MealCard
  },
  data() {
    return {
      status: {
        isCheckIn: true
      },
      menu: [
        {
          _id: 'cb74de4f-a855-4980-9bf9-3e8c468e45e4',
          category: 'pasta',
          name: '香辣培根扁麵',
          price: 270,
          quantity: 40,
          description:
            '精選高品質麵條搭配精心調配的醬料，口感鮮嫩彈牙。每一口都能品味到麵條和醬料間完美的平衡，讓您彷彿置身於風景如畫的意大利小鎮。',
          img: 'https://drive.google.com/uc?export=view&id=1xZG8lUNnQ0tDBqrsx55AEra-JUKZiQUH',
          customization: [
            {
              name: '辣度',
              value: 'spicy',
              type: 'radio',
              options: [
                {
                  name: '不辣',
                  value: 'notSpicy',
                  price: 0
                },
                {
                  name: '小辣',
                  value: 'mild',
                  price: 0
                },
                {
                  name: '中辣',
                  value: 'medium',
                  price: 0
                },
                {
                  name: '大辣',
                  value: 'hot',
                  price: 0
                }
              ]
            },
            {
              name: '加麵',
              value: 'noodles',
              type: 'checkbox',
              price: 10
            },
            {
              name: '加起司',
              value: 'cheese',
              type: 'checkbox',
              price: 20
            }
          ]
        },
        {
          _id: '891aa7e9-c68b-40d1-bc54-c3a62d34e39d',
          category: 'risotto',
          name: '香辣培根扁麵',
          price: 270,
          quantity: 0,
          description:
            '選用精選米穀慢燉而成，口感細緻、香氣四溢。每一口都散發著濃郁的湯汁與新鮮的食材，每一種口味都能帶給您滿足的享受。',
          img: 'https://drive.google.com/uc?export=view&id=1czAR_iWtkoWNm89mXKI-u6zyTh8vKneu',
          customization: [
            {
              name: '加飯',
              value: 'noodles',
              type: 'checkbox',
              price: 10
            },
            {
              name: '加起司',
              value: 'cheese',
              type: 'checkbox',
              price: 20
            },
            {
              name: '加海苔',
              value: 'seaweed',
              type: 'checkbox',
              price: 20
            }
          ]
        }
      ]
    }
  },
  methods: {
    checkIn() {
      this.status.isCheckIn = true
    }
  }
})
</script>

<style scss scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
