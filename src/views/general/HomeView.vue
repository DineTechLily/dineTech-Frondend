<template>
  <TheHeader />
  <section class="bg-[url('@/assets/images/home/home-bg-landing.png')] bg-no-repeat bg-cover">
    <div class="sm:px-10 lg:px-20 2xl:px-60 mx-auto h-full flex flex-col">
      <div class="flex justify-between items-center pt-10">
        <h1 class="mb-40 whitespace-nowrap">
          <span class="block w-4 h-4 bg-primary-blue rounded-md"></span>
          <p class="text-5xl font-bold text-primary-orange leading-normal">聰明用餐，輕鬆經營</p>
          <p class="text-2.5xl">DineTech 是一套專為小型餐飲業者</p>
          <p class="text-2.5xl">設計的 iPad POS 點餐系統。</p>
        </h1>
        <img
          class="mt-8"
          src="@/assets/images/home/home-banner-landing.png"
          alt="DineTech 宣傳橫幅"
        />
      </div>
      <div class="flex flex-col items-center relative bottom-6">
        <span class="text-sm text-gray-9f mt-auto my-4">往下滾動查看更多</span>
        <button type="button">
          <span
            class="material-icons-outlined text-white bg-primary-orange p-1.5 rounded-full animate-bounce"
          >
            arrow_downward
          </span>
        </button>
      </div>
    </div>
  </section>
  <section class="sm:px-10 lg:px-20 2xl:px-60 mx-auto py-12 border-b border-gray-e9">
    <div class="text-center mb-8">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium mx-auto rounded-md mb-2"
      >
        產品特色
      </p>
      <h2 class="text-3.5xl font-bold">更快、也更簡單！經營一家餐廳最好幫手</h2>
      <p class="text-3.5xl font-bold text-primary-orange">是什麼讓我們如此與眾不同？</p>
      <p class="text-gray-9f my-2">
        <span class="block">
          DineTech 是一套現代化的雲端系統，除了提供簡單易用的介面和操作方式以外，我們也提供
        </span>
        <span class="block">24/7/365 全年無休的遠端技術支援服務，讓您用的放心！</span>
      </p>
    </div>
    <div class="flex justify-between items-center rounded-3xl overflow-hidden bg-gray-f7">
      <ul class="flex flex-col gap-y-8 p-12">
        <li class="flex items-start">
          <img src="@/assets/images/home/home-icon-feature-orange.png" alt="產品特色一裝飾圖示" />
          <div class="flex flex-col ps-6">
            <h3 class="text-lg font-bold">優異的使用體驗，POS 用起來就該這麼簡單</h3>
            <p class="text-sm text-gray-9f">
              DineTech
              提供更加簡單易用的介面和操作方式，讓店家和員工更加輕鬆地處理點餐、結帳等工作。
            </p>
          </div>
        </li>
        <li class="flex items-start">
          <img src="@/assets/images/home/home-icon-feature-yellow.png" alt="產品特色二裝飾圖示" />
          <div class="flex flex-col ps-6">
            <h3 class="text-lg font-bold">月費不到 1,000 元，小資也能使用 POS 系統</h3>
            <p class="text-sm text-gray-9f">
              DineTech 採取月費制，單一費率即可同步連線您店裡的所有 iPad ，不限營業額與收單筆數。
            </p>
          </div>
        </li>
        <li class="flex items-start">
          <img src="@/assets/images/home/home-icon-feature-blue.png" alt="產品特色三裝飾圖示" />
          <div class="flex flex-col ps-6">
            <h3 class="text-lg font-bold">多樣化的管理功能，不只是個點餐系統</h3>
            <p class="text-sm text-gray-9f">
              除了點餐功能，我們還提供了一系列像是客戶管理、訂單管理、優惠券管理等功能，讓管理者輕鬆過好每一天。
            </p>
          </div>
        </li>
        <li class="flex items-start">
          <img src="@/assets/images/home/home-icon-feature-gray.png" alt="產品特色四裝飾圖示" />
          <div class="flex flex-col ps-6">
            <h3 class="text-lg font-bold">全年無休的支援服務，不必在場也能解決問題</h3>
            <p class="text-sm text-gray-9f">
              我們有信心能夠全年無休地提供遠端技術支援，保證在您最需要的時候迅速解決各類突發狀況。
            </p>
          </div>
        </li>
      </ul>
      <img
        class="object-fill"
        src="@/assets/images/home/home-banner-feature.png"
        alt="產品特色直幅"
      />
    </div>
  </section>
  <section class="sm:px-10 lg:px-20 2xl:px-60 mx-auto py-12 border-b border-gray-e9">
    <div class="mb-8">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium rounded-md mb-2 text-center"
      >
        產品體驗
      </p>
      <h2 class="text-3.5xl font-bold">優異的使用體驗</h2>
      <p class="text-gray-9f my-2">
        <span class="block">
          POS 系統不應該是讓你頭痛的問題，而是幫助你提升業務的工具。我們的系統以使用者為中心，設計
        </span>
        <span class="block">簡單易用的界面，讓你不用花費太多時間學習就能輕鬆掌握。</span>
      </p>
    </div>
    <div class="flex justify-between rounded-3xl overflow-hidden">
      <img
        class="object-fill"
        src="@/assets/images/home/home-banner-experience.png"
        alt="產品體驗直幅"
      />
      <div
        class="flex flex-col justify-between items-start w-full bg-gray-f7 rounded-3xl ms-6 p-12"
      >
        <div class="w-10/12 mb-8">
          <h3 class="text-gray-66 font-bold text-2xl mb-4">我們引以為傲的點餐流程！</h3>
          <p class="text-gray-9f">
            系統提供簡單易懂的點餐流程，讓您的員工快速上手，大幅提升點餐效率。快速、準確、方便，每一位客人都能夠享受到無煩惱的用餐體驗。
          </p>
        </div>
        <img
          class="object-scale-down"
          src="@/assets/images/home/home-banner-experience-02.png"
          alt="產品體驗橫幅"
        />
      </div>
    </div>
  </section>
  <section class="sm:px-10 lg:px-20 2xl:px-60 mx-auto py-12 border-b border-gray-e9 bg-primary-bg">
    <div class="text-center mb-14">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium mx-auto rounded-md mb-2"
      >
        價格方案
      </p>
      <h2 class="text-3.5xl font-bold">您絕對負擔的起的價格！</h2>
      <p class="text-gray-9f my-2">
        不要讓昂貴的 POS 系統成為您開店的負擔！我們的系統以實惠的價格提供您所需的。
      </p>
    </div>
    <div class="flex justify-center items-center gap-6">
      <div class="w-1/3 border-4 border-gray-d4 rounded-3xl bg-secondary-white overflow-hidden">
        <div class="flex flex-col items-center pt-10 px-9 pb-6 border-gray-e9">
          <p class="flex items-center gap-x-4">
            <span class="material-icons-outlined bg-gray-f7 text-gray-66 p-3 rounded-full">
              account_balance_wallet
            </span>
            <span class="text-lg font-bold">個人方案</span>
          </p>
          <p class="flex items-center justify-center gap-2 mt-2.5">
            <span class="text-2xl font-semibold text-primary-orange">$</span>
            <span class="text-5xl font-semibold text-primary-orange">0</span>
          </p>
          <p class="text-gray-9f mt-4">限制營業額與收單筆數</p>
        </div>
        <div class="flex flex-col items-start pt-6 px-9 pb-10">
          <p class="mb-4">DineTech 提供以下功能：</p>
          <div class="flex flex-col gap-y-3 mb-7 min-h-[132px]">
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">10 GB 儲存空間</span>
            </p>
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">最多可支援 1 台裝置</span>
            </p>
          </div>
          <button
            class="block w-full py-3 bg-gray-e9 text-gray-33 rounded-md hover:bg-secondary-yellow ease-in duration-50"
            type="button"
          >
            選擇方案
          </button>
        </div>
      </div>
      <div
        class="w-1/3 border-4 border-primary-orange rounded-3xl bg-secondary-white overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.1)] relative bottom-5"
      >
        <div class="flex flex-col items-center pt-10 px-9 pb-6 border-gray-e9">
          <p class="flex items-center gap-x-4">
            <span class="material-icons-outlined bg-gray-f7 text-gray-66 p-3 rounded-full">
              business_center
            </span>
            <span class="text-lg font-bold">標準方案</span>
          </p>
          <p class="flex items-center justify-center gap-2 mt-2.5">
            <span class="text-2xl font-semibold text-primary-orange">$</span>
            <span class="text-5xl font-semibold text-primary-orange">999</span>
            <span class="font-bold text-gray-66">/ 月</span>
          </p>
          <p class="text-gray-9f mt-4">部分限制營業額與收單筆數</p>
        </div>
        <div class="flex flex-col items-start pt-6 px-9 pb-10">
          <p class="mb-4">DineTech 提供以下功能：</p>
          <div class="flex flex-col gap-y-3 mb-7 min-h-[132px]">
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">100 GB 儲存空間</span>
            </p>
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">最多可支援 5 台裝置</span>
            </p>
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">諮詢 DineTech 專家</span>
            </p>
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">額外裝置優惠</span>
            </p>
          </div>
          <button
            class="block w-full py-3 bg-gray-e9 text-gray-33 rounded-md hover:bg-secondary-yellow ease-in duration-50"
            type="button"
          >
            選擇方案
          </button>
        </div>
      </div>
      <div
        class="w-1/3 border-4 border-primary-blue rounded-3xl bg-secondary-white overflow-hidden"
      >
        <div class="flex flex-col items-center pt-10 px-9 pb-6 border-gray-e9">
          <p class="flex items-center gap-x-4">
            <span class="material-icons-outlined bg-gray-f7 text-gray-66 p-3 rounded-full">
              lan
            </span>
            <span class="text-lg font-bold">進階方案</span>
          </p>
          <p class="flex items-center justify-center gap-2 mt-2.5">
            <span class="text-2xl font-semibold text-primary-orange">$</span>
            <span class="text-5xl font-semibold text-primary-orange">2,490</span>
            <span class="font-bold text-gray-66">/ 月</span>
          </p>
          <p class="text-gray-9f mt-4">不限營業額與收單筆數</p>
        </div>
        <div class="flex flex-col items-start pt-6 px-9 pb-10">
          <p class="mb-4">DineTech 提供以下功能：</p>
          <div class="flex flex-col gap-y-3 mb-7 min-h-[132px]">
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">1 TB 儲存空間</span>
            </p>
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">最多可支援 15 台裝置</span>
            </p>
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">諮詢 DineTech 專家</span>
            </p>
            <p class="flex items-center gap-x-3.5">
              <span class="material-icons-outlined text-secondary-yellow rounded-full">
                check_circle
              </span>
              <span class="font-bold text-sm">額外裝置優惠</span>
            </p>
          </div>
          <button
            class="block w-full py-3 bg-gray-e9 text-gray-33 rounded-md hover:bg-secondary-yellow ease-in duration-50"
            type="button"
          >
            選擇方案
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="sm:px-10 lg:px-20 2xl:px-60 mx-auto py-12 border-b border-gray-e9">
    <div class="mb-8">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium rounded-md mb-2 text-center"
      >
        強大功能
      </p>
      <h2 class="text-3.5xl font-bold">多樣化的系統管理功能</h2>
      <p class="text-gray-9f my-2">
        <span class="block">
          自動確認訂位、顧客資料庫、記錄顧客喜好、統計數據等功能一應俱全，協助您提升管理效率
        </span>
        <span class="block">
          不需成為專家就能輕鬆利用數據制定成效報告、行銷企劃，成為店面再升級的最佳利器！
        </span>
      </p>
    </div>
    <div class="flex justify-between rounded-3xl overflow-hidden">
      <img
        class="object-fill"
        src="@/assets/images/home/home-banner-management.png"
        alt="功能特點直幅"
      />
      <div
        class="flex flex-col justify-between items-start w-full bg-gray-f7 rounded-3xl ms-6 p-12"
      >
        <ul class="flex flex-col gap-y-8">
          <li class="flex items-center">
            <img src="@/assets/images/home/home-icon-management-order-1.png" alt="功能特點一圖示" />
            <div class="flex flex-col ps-6">
              <h3 class="text-lg font-bold">資訊彙整，多重顯示</h3>
              <p class="text-sm text-gray-9f">
                隨時都可快速瀏覽每日訂候位列表、桌位圖以及顧客資訊，訂位從各平台串連，皆多重顯示，一覽無遺。
              </p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="@/assets/images/home/home-icon-management-order-2.png" alt="功能特點二圖示" />
            <div class="flex flex-col ps-6">
              <h3 class="text-lg font-bold">⾃動確認訂位</h3>
              <p class="text-sm text-gray-9f">
                顧客用餐前，系統再次自動寄送簡訊進行確認，降低人為疏失，訂位管理更有效率。
              </p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="@/assets/images/home/home-icon-management-order-3.png" alt="功能特點三圖示" />
            <div class="flex flex-col ps-6">
              <h3 class="text-lg font-bold">顧客資料庫</h3>
              <p class="text-sm text-gray-9f">
                餐廳可隨時調閱顧客跨餐廳、跨分店消費記錄，每筆訂候位都會存入後台，建立餐飲業龐大資料庫。
              </p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="@/assets/images/home/home-icon-management-order-4.png" alt="功能特點四圖示" />
            <div class="flex flex-col ps-6">
              <h3 class="text-lg font-bold">記錄顧客喜好</h3>
              <p class="text-sm text-gray-9f">
                這位客人不吃辣？這位客人喜歡坐室外？DineTech
                全部幫你記錄起來，餐廳可自訂客人喜好，往後對回頭客的新進訂候位就可以貼心應對！
              </p>
            </div>
          </li>
          <li class="flex items-center">
            <img src="@/assets/images/home/home-icon-management-order-5.png" alt="功能特點五圖示" />
            <div class="flex flex-col ps-6">
              <h3 class="text-lg font-bold">統計數據管理</h3>
              <p class="text-sm text-gray-9f">
                針對不同顧客，DineTech
                提供輔助行銷、數據收集、統計報表等顧客關係管理工具，增加餐廳好感度，有效提高顧客回頭率。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="sm:px-10 lg:px-20 2xl:px-60 mx-auto py-12 border-b border-gray-e9">
    <div class="text-center mb-8">
      <p
        class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium mx-auto rounded-md mb-2"
      >
        技術支援
      </p>
      <h2 class="text-3.5xl font-bold">全年無休的技術服務</h2>
      <p class="text-gray-9f my-2">
        <span class="block">
          我們的 POS 系統不僅價格實惠，還具備全年無休的技術支援服務。當您遇到任何問題時，
        </span>
        <span class="block">
          我們的專業團隊將隨時待命，為您提供快速而有效的幫助。無論是節假日還是晚上，
        </span>
        <span class="block">我們都會全力以赴，確保您的生意不會因技術問題而受到影響。</span>
      </p>
    </div>
    <div class="flex justify-center items-center rounded-3xl">
      <img
        class="object-fill"
        src="@/assets/images/home/home-banner-support.png"
        alt="技術支援橫幅"
      />
    </div>
  </section>
  <section class="sm:px-10 lg:px-20 2xl:px-60 mx-auto py-12 border-b border-gray-e9 bg-primary-bg">
    <div class="flex gap-x-6">
      <div class="w-1/3">
        <p
          class="w-20 h-8 leading-8 bg-primary-orange text-sm text-white font-medium text-center rounded-md mb-2"
        >
          預約諮詢
        </p>
        <h2 class="text-3.5xl font-bold">讓我們的諮詢團隊與您一起規劃出最合適的 POS 方案。</h2>
        <p class="text-gray-9f my-2">
          我們的諮詢團隊不僅在 POS
          系統的實施和設置方面經驗豐富，更重要的是，他們深刻理解餐飲行業的營運和管理，能夠為您提供最有價值的建議和支援。
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/general/TheHeader.vue'
import TheFooter from '@/components/general/TheFooter.vue'
import ContactForm from '@/components/general/ContactForm.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    ContactForm
  },
  data() {
    return {}
  }
})
</script>
