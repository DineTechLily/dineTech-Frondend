<template>
  <MobileHeader v-if="isMobile()" />
  <DesktopHeader v-else />
  <section
    class="bg-primary-bg md:bg-[url('@/assets/images/home/home-bg-landing.png')] bg-no-repeat bg-cover overflow-hidden"
  >
    <div
      class="reveal-content px-3 sm:px-10 lg:px-20 2xl:px-60 mx-auto md:h-[calc(100vh-72px)] flex flex-col"
    >
      <div class="flex justify-between flex-col md:flex-row items-center pt-6 md:pt-10">
        <h1 class="md:mb-40 whitespace-nowrap">
          <span class="block w-4 h-4 bg-primary-blue rounded-md"></span>
          <p
            class="text-3.5xl md:text-5xl md:leading-normal font-bold text-primary-orange leading-normal"
          >
            聰明用餐，輕鬆經營
          </p>
          <p class="text-base leading-relaxed md:text-2.5xl md:leading-normal">
            DineTech 是一套專為小型餐飲業者
          </p>
          <p class="text-base leading-relaxed md:text-2.5xl md:leading-normal">
            設計的 iPad POS 點餐系統。
          </p>
        </h1>
        <img
          class="mt-6 md:mt-8 md:max-w-lg xl:max-w-full"
          :src="bannerUrl.landing"
          alt="DineTech 宣傳橫幅"
        />
      </div>
      <div class="reveal-content flex flex-col items-center relative py-6 md:py-0 xl:py-10">
        <span class="text-sm text-gray-9f mt-auto my-4">往下滾動查看更多</span>
        <a href="#features" class="hover:opacity-90">
          <span
            class="material-icons-outlined text-white bg-primary-orange p-1.5 rounded-full animate-bounce cursor-pointer"
          >
            arrow_downward
          </span>
        </a>
      </div>
    </div>
  </section>
  <section
    class="px-3 sm:px-10 lg:px-20 2xl:px-60 mx-auto py-6 md:py-12 border-b border-gray-e9 relative"
  >
    <span id="features" class="absolute -top-16 invisible"></span>
    <div class="reveal-content text-center mb-8">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium mx-auto rounded-md mb-3"
      >
        產品特色
      </p>
      <h2 class="text-2xl md:text-3.5xl font-bold md:mt-4 md:mb-2">
        更快、也更簡單！經營一家餐廳最好幫手
      </h2>
      <p class="text-2xl md:text-3.5xl font-bold text-primary-orange md:mb-4 md:mt-2">
        是什麼讓我們如此與眾不同？
      </p>
      <p class="text-sm md:text-base text-gray-9f my-2">
        <span class="md:block">
          DineTech 是一套現代化的雲端系統，除了提供簡單易用的介面和操作方式以外，我們也提供
        </span>
        <span class="md:block">24/7/365 全年無休的遠端技術支援服務，讓您用的放心！</span>
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row justify-between items-center rounded-3xl overflow-hidden bg-gray-f7"
    >
      <ul class="reveal-content flex flex-col gap-y-6 md:gap-y-8 py-6 px-3 md:p-12">
        <li
          v-for="feature in features"
          :key="feature.title"
          class="reveal-content flex flex-col md:flex-row items-center md:items-start"
        >
          <img :src="feature.iconUrl" alt="產品特色裝飾圖示" />

          <div class="flex flex-col items-center md:items-start md:ps-6">
            <h3 class="text-base md:text-lg font-bold mb-1 mt-2 md:my-1">
              {{ feature.title }}
            </h3>
            <p class="text-sm text-gray-9f text-center md:text-start">
              {{ feature.description }}
            </p>
          </div>
        </li>
      </ul>
      <img class="object-fill self-stretch" :src="bannerUrl.feature" alt="產品特色直幅" />
    </div>
  </section>
  <section class="px-3 sm:px-10 lg:px-20 2xl:px-60 mx-auto py-6 md:py-12 border-b border-gray-e9">
    <div class="reveal-content mb-6 md:mb-8 text-center md:text-start">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium rounded-md mb-3 text-center mx-auto md:ms-0"
      >
        產品體驗
      </p>
      <h2 class="text-2xl md:text-3.5xl font-bold md:my-4">優異的使用體驗</h2>
      <p class="text-sm md:text-base text-gray-9f my-2">
        <span class="md:block">
          POS 系統不應該是讓你頭痛的問題，而是幫助你提升業務的工具。我們的系統以使用者為中心，設計
        </span>
        <span class="md:block">簡單易用的界面，讓你不用花費太多時間學習就能輕鬆掌握。</span>
      </p>
    </div>
    <div
      class="flex flex-col-reverse md:flex-row justify-between rounded-3xl overflow-hidden gap-y-6 md:gap-0 md:gap-x-6"
    >
      <img class="object-fill self-stretch" :src="bannerUrl.experience" alt="產品體驗直幅" />
      <div
        class="flex flex-col justify-between items-start w-full bg-gray-f7 rounded-3xl py-6 px-3 md:p-12"
      >
        <div class="flex flex-col items-center md:items-start md:w-10/12 mb-6 md:mb-8">
          <h3 class="reveal-content text-gray-66 font-bold text-2xl mb-4">
            我們引以為傲的點餐流程！
          </h3>
          <p class="reveal-content text-gray-9f text-center md:text-start">
            系統提供簡單易懂的點餐流程，讓您的員工快速上手，大幅提升點餐效率。快速、準確、方便，每一位客人都能夠享受到無煩惱的用餐體驗。
          </p>
        </div>
        <img
          class="reveal-content object-scale-down"
          :src="bannerUrl.experience2"
          alt="產品體驗橫幅"
        />
      </div>
    </div>
  </section>
  <section
    class="px-3 sm:px-10 lg:px-20 2xl:px-60 mx-auto py-6 md:py-12 border-b border-gray-e9 bg-primary-bg relative"
  >
    <span id="pricing" class="absolute -top-16 invisible"></span>
    <div class="reveal-content text-center mb-6 md:mb-14">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium mx-auto rounded-md mb-3"
      >
        價格方案
      </p>
      <h2 class="text-2xl md:text-3.5xl font-bold md:my-4">您絕對負擔的起的價格！</h2>
      <p class="text-sm md:text-base text-gray-9f my-2">
        不要讓昂貴的 POS 系統成為您開店的負擔！我們的系統以實惠的價格提供您所需的一切。
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center gap-6 mx-9 md:mx-0">
      <div
        v-for="plan in plans"
        :key="plan.name"
        :class="plan.customClass"
        class="w-full md:w-1/3 border-4 rounded-3xl bg-secondary-white overflow-hidden"
      >
        <div
          class="reveal-content flex flex-col items-center p-6 pb-4 md:pt-10 md:px-9 md:pb-6 border-b border-gray-e9"
        >
          <p class="flex items-center gap-x-4">
            <span class="material-icons-outlined bg-gray-f7 text-gray-66 p-2 md:p-3 rounded-full">
              {{ plan.iconName }}
            </span>
            <span class="text-base md:text-lg font-bold">{{ plan.name }}</span>
          </p>
          <p class="flex items-center justify-center gap-2 mt-1 md:mt-2.5">
            <span class="text-2xl font-semibold text-primary-orange">$</span>
            <span class="text-5xl font-semibold text-primary-orange">{{ plan.pricing }}</span>
            <span v-if="+plan.pricing !== 0" class="font-bold text-gray-66">/ 月</span>
          </p>
          <p class="text-sm md:text-base text-gray-9f mt-3 md:mt-4">{{ plan.limitation }}</p>
        </div>
        <div class="reveal-content flex flex-col items-start p-6 pt-4 md:pt-6 md:px-9 md:pb-10">
          <p class="mb-2.5 md:mb-4">DineTech 提供以下功能：</p>
          <div class="flex flex-col gap-y-2 md:gap-y-3 mb-7 min-h-[108px] md:min-h-[132px]">
            <p v-for="item in plan.offerings" :key="item[0]" class="flex items-center gap-x-3.5">
              <span
                class="w-5 h-5 md:w-6 md:w-6 material-icons-outlined text-secondary-yellow rounded-full"
              >
                check_circle
              </span>
              <span class="font-bold text-sm">{{ item }}</span>
            </p>
          </div>
          <a
            href="#contact"
            class="block w-full py-3 bg-secondary-yellow md:bg-gray-e9 text-gray-33 text-center rounded-md md:hover:bg-secondary-yellow ease-in duration-50 cursor-pointer"
            @click="selectPlan(plan.name)"
          >
            選擇方案
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="px-3 sm:px-10 lg:px-20 2xl:px-60 mx-auto py-6 md:py-12 border-b border-gray-e9">
    <div class="reveal-content mb-6 md:mb-8 text-center md:text-start">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium rounded-md mb-3 text-center mx-auto md:ms-0"
      >
        強大功能
      </p>
      <h2 class="text-2xl md:text-3.5xl font-bold md:my-4">多樣化的系統管理功能</h2>
      <p class="text-sm md:text-base text-gray-9f my-2">
        <span class="md:block">
          自動確認訂位、顧客資料庫、記錄顧客喜好、統計數據等功能一應俱全，協助您提升管理效率
        </span>
        <span class="md:block">
          不需成為專家就能輕鬆利用數據制定成效報告、行銷企劃，成為店面再升級的最佳利器！
        </span>
      </p>
    </div>
    <div
      class="flex flex-col-reverse md:flex-row gap-y-6 md:gap-0 justify-between rounded-3xl overflow-hidden"
    >
      <img class="object-fill self-stretch" :src="bannerUrl.management" alt="功能特點直幅" />
      <div
        class="flex flex-col justify-between items-start w-full bg-gray-f7 rounded-3xl gap-y-6 md:gap-0 md:gap-x-6 py-6 px-3 md:p-12"
      >
        <ul class="flex flex-col gap-y-6 md:gap-y-8">
          <li
            v-for="feature in managementFeatures"
            :key="feature.title"
            class="reveal-content flex flex-col md:flex-row items-center"
          >
            <img :src="feature.iconUrl" alt="功能特點圖示" />
            <div class="flex flex-col items-center md:items-start md:ps-6">
              <h3 class="text-base md:text-lg font-bold">{{ feature.title }}</h3>
              <p class="text-sm text-center md:text-start text-gray-9f">
                {{ feature.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section
    class="px-3 sm:px-10 lg:px-20 2xl:px-60 mx-auto py-6 md:py-12 border-b border-gray-e9 relative"
  >
    <span id="support" class="absolute -top-16 invisible"></span>
    <div class="reveal-content text-center mb-6 md:mb-8">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium mx-auto rounded-md mb-3"
      >
        技術支援
      </p>
      <h2 class="text-2xl md:text-3.5xl font-bold md:my-4">全年無休的技術服務</h2>
      <p class="text-sm md:text-base text-gray-9f my-2">
        <span class="md:block">
          我們的 POS 系統不僅價格實惠，還具備全年無休的技術支援服務。當您遇到任何問題時，
        </span>
        <span class="md:block">
          我們的專業團隊將隨時待命，為您提供快速而有效的幫助。無論是節假日還是晚上，
        </span>
        <span class="md:block">我們都會全力以赴，確保您的生意不會因技術問題而受到影響。</span>
      </p>
    </div>
    <div class="flex justify-center items-center rounded-3xl">
      <img class="object-fill self-stretch" :src="bannerUrl.support" alt="技術支援橫幅" />
    </div>
  </section>
  <section
    class="px-3 sm:px-10 lg:px-20 2xl:px-60 mx-auto py-6 md:py-12 border-b border-gray-e9 bg-primary-bg relative"
  >
    <span id="contact" class="absolute -top-16 invisible"></span>
    <div class="flex flex-col items-center md:items-start md:flex-row gap-x-6">
      <div class="reveal-content md:w-1/3">
        <p
          class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium text-center rounded-md mb-3 mx-auto md:ms-0"
        >
          預約諮詢
        </p>
        <h2
          class="text-2xl md:text-3.5xl font-bold md:leading-tight md:my-4 text-center md:text-start md:my-4"
        >
          讓我們的諮詢團隊與您一起規劃出最合適的 POS 方案。
        </h2>
        <p class="text-sm md:text-base text-gray-9f mt-3 mb-6 md:my-2 text-center md:text-start">
          我們的諮詢團隊不僅在 POS
          系統的實施和設置方面經驗豐富，更重要的是，他們深刻理解餐飲行業的營運和管理，能夠為您提供最有價值的建議和支援。
        </p>
      </div>
      <ContactForm class="reveal-content" :planName="planName" />
    </div>
  </section>
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DesktopHeader from '@/components/general/DesktopHeader.vue'
import TheFooter from '@/components/general/TheFooter.vue'
import MobileHeader from '@/components/general/MobileHeader.vue'
import ContactForm from '@/components/general/ContactForm.vue'

/**
 * 首頁橫幅圖片路徑
 */
interface BannerUrl {
  landing: string
  feature: string
  support: string
  management: string
  experience: string
  experience2: string
}

export default defineComponent({
  components: {
    DesktopHeader,
    MobileHeader,
    TheFooter,
    ContactForm
  },
  data() {
    return {
      // 選擇方案名稱
      planName: '',
      // 產品特色
      features: [
        {
          iconUrl: this.getImageUrl('home/home-icon-feature-orange.png'),
          title: '優異的使用體驗，POS 用起來就該這麼簡單',
          description:
            'DineTech 提供更加簡單易用的介面和操作方式，讓店家和員工更加輕鬆地處理點餐、結帳等工作。'
        },
        {
          iconUrl: this.getImageUrl('home/home-icon-feature-yellow.png'),
          title: '月費不到 1,000 元，小資也能使用 POS 系統',
          description:
            'DineTech 採取月費制，單一費率即可同步連線您店裡的所有 iPad ，不限營業額與收單筆數。'
        },
        {
          iconUrl: this.getImageUrl('home/home-icon-feature-blue.png'),
          title: '多樣化的管理功能，不只是個點餐系統',
          description:
            '除了點餐功能，我們還提供了一系列像是客戶管理、訂單管理、優惠券管理等功能，讓管理者輕鬆過好每一天。'
        },
        {
          iconUrl: this.getImageUrl('home/home-icon-feature-gray.png'),
          title: '全年無休的支援服務，不必在場也能解決問題',
          description:
            '我們有信心能夠全年無休地提供遠端技術支援，保證在您最需要的時候迅速解決各類突發狀況。'
        }
      ],
      // 管理功能
      managementFeatures: [
        {
          iconUrl: this.getImageUrl('home/home-icon-management-order-1.png'),
          title: '資訊彙整，多重顯示',
          description:
            '隨時都可快速瀏覽每日訂候位列表、桌位圖以及顧客資訊，訂位從各平台串連，皆多重顯示，一覽無遺。'
        },
        {
          iconUrl: this.getImageUrl('home/home-icon-management-order-2.png'),
          title: '⾃動確認訂位',
          description: '顧客用餐前，系統再次自動寄送簡訊進行確認，降低人為疏失，訂位管理更有效率。'
        },
        {
          iconUrl: this.getImageUrl('home/home-icon-management-order-3.png'),
          title: '顧客資料庫',
          description:
            '餐廳可隨時調閱顧客跨餐廳、跨分店消費記錄，每筆訂候位都會存入後台，建立餐飲業龐大資料庫。'
        },
        {
          iconUrl: this.getImageUrl('home/home-icon-management-order-4.png'),
          title: '記錄顧客喜好',
          description:
            '這位客人不吃辣？這位客人喜歡坐室外？DineTech 全部幫你記錄起來，餐廳可自訂客人喜好，往後對回頭客的新進訂候位就可以貼心應對！'
        },
        {
          iconUrl: this.getImageUrl('home/home-icon-management-order-5.png'),
          title: '統計數據管理',
          description:
            '針對不同顧客，DineTech 提供輔助行銷、數據收集、統計報表等顧客關係管理工具，增加餐廳好感度，有效提高顧客回頭率。'
        }
      ],
      // 價格方案
      plans: [
        {
          name: '個人方案',
          iconName: 'account_balance_wallet',
          pricing: '0',
          limitation: '限制營業額與收單筆數',
          offerings: ['10 GB 儲存空間', '最多可支援 1 台裝置'],
          customClass: 'border-gray-d4'
        },
        {
          name: '標準方案',
          iconName: 'business_center',
          pricing: '999',
          limitation: '部分限制營業額與收單筆數',
          offerings: [
            '100 GB 儲存空間',
            '最多可支援 5 台裝置',
            '諮詢 DineTech 專家',
            '額外裝置優惠'
          ],
          customClass:
            'border-primary-orange md:shadow-[0_4px_24px_rgba(0,0,0,0.1)] md:relative md:bottom-5'
        },
        {
          name: '進階方案',
          iconName: 'lan',
          pricing: '2,499',
          limitation: '不限營業額與收單筆數',
          offerings: [
            '1 TB 儲存空間',
            '最多可支援 15 台裝置',
            '諮詢 DineTech 專家',
            '額外裝置優惠'
          ],
          customClass: 'border-primary-blue'
        }
      ]
    }
  },
  computed: {
    bannerUrl(): BannerUrl {
      const folder: string = this.isMobile() ? 'mobile' : 'desktop'
      const path: string = `home/${folder}`

      return {
        landing: this.getImageUrl(`${path}/home-banner-landing.png`),
        feature: this.getImageUrl(`${path}/home-banner-feature.png`),
        support: this.getImageUrl(`${path}/home-banner-support.png`),
        management: this.getImageUrl(`${path}/home-banner-management.png`),
        experience: this.getImageUrl(`${path}/home-banner-experience.png`),
        experience2: this.getImageUrl(`${path}/home-banner-experience-02.png`)
      }
    }
  },
  methods: {
    // 取得圖片路徑
    getImageUrl(path: string) {
      return new URL(`../../assets/images/${path}`, import.meta.url).href
    },
    // 判斷是否為手機裝置
    isMobile(): boolean {
      return screen.width < 768
    },
    // 更新選取方案名稱
    selectPlan(name: string) {
      this.planName = name
    },
    // 建立頁面區塊監控器
    createObserver() {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // 當進入畫面時
            if (entry.isIntersecting) {
              // 移除樣式
              entry.target.classList.remove('opacity-0', 'translate-y-12')
              // 新增樣式
              entry.target.classList.add('opacity-100', 'translate-y-0')
            }
          })
        },
        {
          threshold: this.isMobile() ? 0.2 : 0.5
        }
      )
    },
    // 監控內容
    observeContent() {
      const observer = this.createObserver()
      const content = document.querySelectorAll('.reveal-content')

      content.forEach((section) => {
        section.classList.add(
          'opacity-0',
          'translate-y-12',
          'relative',
          'transition',
          'duration-700',
          'delay-75'
        )
        observer.observe(section)
      })
    },
    // 取消內容監控
    unobserveContent() {
      const observer = this.createObserver()
      const content = document.querySelectorAll('.reveal-content')

      content.forEach((section) => {
        observer.unobserve(section)
      })
    }
  },
  mounted() {
    this.observeContent()
  },
  beforeUnmount() {
    this.unobserveContent()
  }
})
</script>
