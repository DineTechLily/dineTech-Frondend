const getImageUrl = (path: string) => {
  return new URL(`../../assets/images/client/${path}`, import.meta.url).href;
};

export const activityList = [
  {
    id: 1,
    src: getImageUrl('client-banner-landing-01.png'),
    title: '期間限定🌸義式冰淇淋新上市',
    description:
      '義式冰淇淋，以義大利濃郁奶油為基底，口感濃郁、柔軟，帶有香濃的牛奶味，再搭配上各種新鮮水果、堅果、朱古力等多種口味，讓您品嚐到來自意大利的原汁原味冰淇淋風味！一份售價 NT. 80，數量有限，務必把握～',
    timestamp: '2023-05-31'
  },
  {
    id: 2,
    src: getImageUrl('client-banner-landing-02.png'),
    title: '手工烘焙🍪新鮮出爐的曲奇餅乾',
    description:
      '細膩的手工烘焙，完美的滋味。我們用心選擇上等原材料，經過巧妙的配方調配，為您獻上美味的小餅乾。每一口都彷彿觸動了味蕾的弦，散發著誘人的香氣，輕脆的口感讓您愛不釋口。品味一口，感受溫暖的幸福，讓手工烘焙小餅乾成為您忙碌生活中的甜蜜撫慰。',
    timestamp: '2023-05-31'
  },
  {
    id: 3,
    src: getImageUrl('client-banner-landing-03.png'),
    title: '狂歡來襲🍗炸物拼盤驚喜優惠',
    description:
      '狂歡來襲！現在購買我們的炸物拼盤，您將獲得驚喜的優惠！享受35%折扣，買一送一！您可以品嚐到美味無比的薯條、酥脆的炸雞塊以及烤得香嫩多汁的雞腿。這組絕佳組合將為您帶來美味的口感和滿足感。',
    timestamp: '2023-05-31'
  },
  {
    id: 4,
    src: getImageUrl('client-banner-landing-04.png'),
    title: '檸檬風味🍋新鮮鮭魚排限時特價',
    description:
      '檸檬鮭魚排限時特價，只需300元！我們選用新鮮的鮭魚，灑上檸檬汁調味，經烤箱烹調而成。每一口都帶來豐富的鮮嫩口感和清新的檸檬香氣。現在就來品嚐這款口感迷人的檸檬鮭魚排，讓您的味蕾沉浸在美味的享受中！',
    timestamp: '2023-05-31'
  },
  {
    id: 5,
    src: getImageUrl('client-banner-landing-05.png'),
    title: '美味無限🍔每日供應輕食料理',
    description:
      '品味美味無限！每日供應漢堡和炸魚薯條，饗您味蕾！我們的漢堡口感豐富，搭配酥脆的炸魚薯條，讓您愛不釋口。每一口都散發著美味的誘惑，帶給您滿滿的滿足感。無論是午餐還是晚餐，我們的食物都能為您帶來美味的享受。',
    timestamp: '2023-05-31'
  }
];