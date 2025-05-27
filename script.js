document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const restaurant = params.get('restaurant');
  const sub = params.get('sub');
  const menuList = document.getElementById('menu-list');

  // 메뉴 목록 페이지
  if (document.URL.includes('menu.html')) {
    document.getElementById('restaurant-title').textContent = `${restaurant} 식당`;

    const menus = {
      A7: ['참치마요 5000원', '치킨마요 5000원', '돈까스마요 5000원', '라면 3000원', '쫄면 3500원', '우동 3500원', '떡볶이+순대 5000원', '등심돈까스 6000원', '고치돈 6500원', '반반까스 7000원', '순대국밥 5500원', '돼지국밥 5500원', '부대찌개 5500원', '소고기육개장 6000원', '뚝배기불고기 6000원', '직화제육덮밥 5500원', '공기밥 1000원'],
      B2: ['정식(단일메뉴) 6000원'],
      C10: ['참치마요 3900원', '치즈라면 4300원', '떡만두라면 4300원', '우동 4900원', '물막국수 6500원', '비빔막국수 6900원', '차돌박이된장 6000원', '닭계장 7000원', '갈비탕 7500원', '볶음밥 6200원', '수제돈까스 6200원', '치즈돈까스 6600원', '고구마돈까스 6500원', '치반돈반 7500원', '고반돈반 7500원', '제육덮밥 6300원', '뚝배기날치알 6200원', '치킨마요덮밥 6500원', '짜장면 5000원', '짬뽕 6200원', '짬짜면 6600원', '고기짬뽕 7500원', '소차돌짬뽕 8000원', '공기밥 1000원', '쥬시쿨 300원'],
      D16: ['등심돈 6000원', '고치돈 6500원', '참치마요 5000원', '치킨마요 5000원', '우동 3500원', '냉우동 3500원', '쫄면 3500원', '돈까스카레덮밥 5000원', '치킨카레덮밥 5000원', '라구알라볼로네제파스타 6000원', '쉬림프로제파스타 6500원', '베이컨까르보나라+모닝빵 6500원', '오늘의 샐러드 5000원', 'BLT샌드위치 5000원', '튜나샌드위치 5000원', '텐더샌드위치 5500원', '플레인베이글 2900원', '블루베리베이글 3000원', '플레인스콘&딸기잼 3200원', '초코스콘 3000원', '소금빵 3500원', '오늘의샐러드+아메리카노 6000원', '오늘의샐러드+아샷추 7000원', 'BLT+아메리카노 6000원', '튜나+아메리카노 6000원', '텐더+아메리카노 6500원', 'BLT+아샷추 7000원', '튜나+아샷추 7000원', '텐더+아샷추 7500원'],
      'E4-소담한식 / 델리지오 / 별난국수 / 천원의 아침': ['순두부찌개 4800원', '치즈순두부찌개 5200원', '부대전골 5200원', '치즈부대전골 5600원', '불고기된장찌개 5000원', '된장찌개&비빔야채 4800원', '와촌돼지찌개 6000원', '돈육김치찌개 6000원', '소불고기뚝배기 6400원', '콩나물해장국 3900원', '닭설렁탕 5500원', '비빔야채추가 1000원', '돼지해장국 5500원', '순대국밥 5500원', '순살감자탕 5500원', '불낙비빔밥 5500원', '소시지오므라이스 5500원', '치즈로제찜닭 5800원', '치즈고추장제육 5800원', '치즈안동찜닭 5800원', '전주돌솥비빔밥 5300원', '치즈날치알돌솥밥 5400원', '김치치즈밥 5400원', '콩나물해장국 3900원', '돈육김치찌개 6000원', '오늘의특식 5500원', '칼국수 5500원', '얼큰칼국수 5700원', '멸치국수 4900원', '김치말이냉국수 4900원', '비빔국수 5300원', '모짜치즈제육 5800원', '치즈로제찜닭 5800원', '사랑식 1000원', '봉사식 1000원', '공기밥 1000원'],
      'E4-매울양양(마라탕)': ['마라탕-A코스 8500원', '마라탕-B코스 12000원', '빙홍차 3000원', '차파이 3000원', '빙탕설리 3000원', '코코넛쥬스 3000원', '매실쥬스 3000원', '왕라오지 3000원', '공기밥 1000원'],
      'E4-맘스터치': ['싸이 4900원', '불싸이 5100원', '딥치즈싸이 5400원', '화이트갈릭싸이 5500원', '에드워드리버거 8800원', '아라비아따치즈버거 7400원', '텍사스바베큐치킨버거 6600원', '싸이플렉스버거 8300원', '쉬림프싸이플렉스버거 7600원', '휠렛 5000원', '딥치즈 5400원', '화이트갈릭 5500원', '트리플딥치즈싸이 5700원', '통새우 3800원', '불고기 4200원', '디럭스불고기 5800원', '새우불고기 6300원', '인크레더블 6000원', '언빌리버블 6500원', '케이준떡강정 스몰 4300원', '간장마늘떡강정 스몰 4500원', '치파오떡강정 스몰 4500원', '케이준떡강정 레귤러 11700원', '간장마늘떡강정 레귤러 12200원', '치파오떡강정 레귤러 12200원', '싱글떡강정세트 9600원', '커플떡강정세트 20600원', '후라이드빅싸이순살 11900원', '양념빅싸이순살 13900원', '간장마늘빅싸이순살 13900원', '핫치즈빅싸이순살 14500원', '에드워드리빅싸이순살 14900원', '꿀간장누룽지빅싸이순살 14500원', '싱글순살세트 16900원', '커플순살세트 23800원', '싱글순살세트양념 18900원', '커플순살세트양념 25800원', '싱글순살세트간장 18900원', '커플순살세트간장 25800원', '싱글순살세트핫치즈 19500원', '커플순살세트핫치즈 26400원', '김떡만갈릭 3600원', '김떡만매콤 3600원', '할라피뇨너겟4개 2100원', '할라피뇨너겟10개 4600원', '팝콘볼 2700원', '팝콘볼고구마치즈 2700원', '치즈스틱 2100원', '치즈감자 2900원', '바삭크림치즈볼 2100원', '바삭크림치즈볼4개 3800원', '콘샐러드 1900원', '케이준양념감자(중) 2100원', '케이준양념감자(대) 3600원', '콜라 1600원', '사이다 1600원', '레몬에이드 2200원', '청포도에이드 2200원', '제로콜라 1600원'],
      'E4-홍대불고기 / 홍대함바그': ['산더미오이물냉면불고기세트 8700원', '불고기물냉면 7700원', '불고기비빔냉면 7700원', '불고기물비빔냉면 8700원', '불고기마요비빔밥 7000원', '날치알마요비빔밥 6000원', '참치마요비빔밥 6000원', '불고기라이스 7500원', '바삭비빔만두 5900원', '꼬마불고기 3300원', '매콤갈비 7500원', '달콤갈비 7500원', '반반갈비 7500원', '매콤함바그 7500원', '달콤함바그 7500원', '반반함바그 7500원', '매콤치킨스테이크 7500원', '달콤치킨스테이크 7500원', '반반치킨스테이크 7500원', '공기밥 1000원'],
      'E4-홍대보쌈 / 카츠3.9': ['보쌈정식 8000원', '마늘보쌈정식 9000원', '홍대보쌈 곱배기 10000원', '마늘보쌈 곱배기 11000원', '무김치추가 1000원', '더블카츠 7900원', '싱글카츠냉모밀 7900원', '카츠카레 7500원', '새우카레 7500원', '카츠나베 7900원', '새우튀김우동 6500원', '새우카레우동 6500원', '어묵우동 4900원', '단품모밀 4900원', '카츠단품 3900원', '카츠1장추가 2900원', '공기밥 1200원'],
    };

    if (restaurant === 'E4' && !sub) {
      // 하위 식당 선택 화면
      const subRestaurants = ['소담한식 / 델리지오 / 별난국수 / 천원의 아침', '매울양양(마라탕)', '맘스터치', '홍대불고기 / 홍대함바그', '홍대보쌈 / 카츠3.9'];
      subRestaurants.forEach(name => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = name;
        button.onclick = () => {
          window.location.href = `menu.html?restaurant=E4&sub=${encodeURIComponent(name)}`;
        };
        li.appendChild(button);
        menuList.appendChild(li);
      });
    } else {
      // 일반 메뉴
      const key = sub ? `E4-${sub}` : restaurant;
      const items = menus[key] || [];

      items.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        const img = document.createElement('img');

        img.src = `images/${item}.jpg`;
        img.alt = item;
        img.onerror = () => {
          img.src = 'images/default.jpg';
        };

        link.href = `review.html?restaurant=${restaurant}${sub ? `&sub=${encodeURIComponent(sub)}` : ''}&menu=${encodeURIComponent(item)}`;
        link.textContent = item;

        li.appendChild(img);
        li.appendChild(link);
        menuList.appendChild(li);
      });
    }
  }

  // 리뷰 페이지
  if (document.URL.includes('review.html')) {
    const menu = params.get('menu');
    const sub = params.get('sub');
    document.getElementById('menu-title').textContent = `리뷰: ${menu}`;

  // 메뉴 이미지 로드
    const menuImage = document.getElementById('menu-image');
    menuImage.src = `images/${menu}.jpg`;
    menuImage.onerror = () => {
      menuImage.src = 'images/default.jpg';
    };

    const reviewForm = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');

    function loadReviews() {
      reviewList.innerHTML = '';
      const key = `reviews_${restaurant}${sub ? `_${sub}` : ''}_${menu}`;
      const saved = localStorage.getItem(key);
      const reviews = saved ? JSON.parse(saved) : [];
      reviews.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${r.nickname}</strong> (${r.rating}점): ${r.content}`;
        reviewList.appendChild(li);
      });
    }

    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nickname = document.getElementById('nickname').value;
      const content = document.getElementById('content').value;
      const rating = document.getElementById('rating').value;
      const key = `reviews_${restaurant}${sub ? `_${sub}` : ''}_${menu}`;
      const reviews = JSON.parse(localStorage.getItem(key) || '[]');
      reviews.push({ nickname, content, rating });
      localStorage.setItem(key, JSON.stringify(reviews));
      reviewForm.reset();
      loadReviews();
    });

    loadReviews();
  }
});
