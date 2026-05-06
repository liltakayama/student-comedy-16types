const types = [
  ["BWCL", "発明家", "Inventor", "枠組み×論理で新形式を発明する人"],
  ["BWCS", "驚かせ屋", "Surpriser", "独創フォーマットで意外性を仕掛ける"],
  ["TWCL", "分析家", "Analyst", "仕組みを解剖し緻密に組む"],
  ["TWCS", "哲学者", "Philosopher", "常識外から論理を突き詰める"],
  ["BWFL", "天才型", "Genius", "直感素材を論理で研磨する"],
  ["BWFS", "アーティスト", "Artist", "感覚を作品のように仕上げる"],
  ["TWFL", "ジャーナリスト", "Journalist", "現実素材をロジカルに編集"],
  ["TWFS", "演説家", "Speaker", "情熱で場を巻き込む"],
  ["BACL", "演出家", "Director", "演者を配置して舞台設計"],
  ["BACS", "演技派女優", "Actress", "緻密な演技でリアリティを生む"],
  ["TACL", "軍曹", "Sergeant", "秩序と役割で機能美を追求"],
  ["TACS", "戦士", "Soldier", "立ち位置で戦う即応型"],
  ["BAFL", "魔性の女", "Beauty", "魅力×直感で場を支配"],
  ["BAFS", "野獣", "Beast", "エネルギーで押し切る剛腕"],
  ["TAFL", "政治家", "Politician", "空気を読み場を動かす調停者"],
  ["TAFS", "祭司", "Ritual", "美学を儀式のように貫く"]
];

const container = document.getElementById("types-container");

types.forEach(([code, name, english, catchText]) => {
  const card = document.createElement("div");
  card.className = "type-card";

  card.innerHTML = `
    <div class="type-code">${code}</div>
    <h2 class="type-name">${name}</h2>
    <div class="type-english">${english}</div>
    <p class="type-catch">${catchText}</p>
  `;

  container.appendChild(card);
});
