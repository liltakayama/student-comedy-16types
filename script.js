// 学生お笑い16タイプ診断 v2
// 4軸で判定します。
// B/T: Boke / Tsukkomi
// W/A: Writer / Actor
// C/F: Craftsman / Field
// L/S: Logic / Sense
//
// 1〜5の回答平均で判定します。
// 平均 > 3 なら右側のタイプ、平均 < 3 なら左側のタイプ。
// 平均 = 3 の場合は暫定的に右側へ寄せています。必要なら変更できます。

const questions = [
  // 1. B or T：1=ツッコミ寄り、5=ボケ寄り
  {
    id: "1-1",
    axis: "BT",
    text: "ピンネタを書くとしたら、自分のキャラはどちらに近いと思う？",
    leftLabel: "ツッコミ寄り",
    rightLabel: "ボケ寄り"
  },
  {
    id: "1-2",
    axis: "BT",
    text: "平場や日常生活での立ち回り",
    leftLabel: "誰かを立たせて面白くする",
    rightLabel: "自分が中心に立ちたい"
  },
  {
    id: "1-3",
    axis: "BT",
    text: "ノリが続いたときどうする？",
    leftLabel: "ツッコんだり降りたりする",
    rightLabel: "乗っかり続ける"
  },
  {
    id: "1-4",
    axis: "BT",
    text: "相手にボケられたときの反応",
    leftLabel: "ツッコむ",
    rightLabel: "さらにボケる"
  },
  {
    id: "1-5",
    axis: "BT",
    text: "相方と比べて自分は？（相方がいない時は、最も仲のいい同期）",
    leftLabel: "相方の方が面白いと思う",
    rightLabel: "自分の方が面白いと思う"
  },
  {
    id: "1-6",
    axis: "BT",
    text: "コンビネタでの立ち位置はどちらが多い？",
    leftLabel: "ツッコミ",
    rightLabel: "ボケ"
  },
  {
    id: "1-7",
    axis: "BT",
    text: "新しく入った大学のゼミやバイト先で、あなたのために歓迎会を開いてくれるそうです。その際、あなたは「学生芸人相手なら絶対に笑ってもらえるが、そうじゃない人には伝わらないかもしれない」という発言を思いつきました。どうする？",
    leftLabel: "言わない",
    rightLabel: "言う"
  },

  // 2. W or A：1=Writer、5=Actor
  {
    id: "2-1",
    axis: "WA",
    text: "ネタは普段書く？",
    leftLabel: "書く",
    rightLabel: "書かない"
  },
  {
    id: "2-2",
    axis: "WA",
    text: "コンビネタを書くとき、もしくはボケを考えるとき、どちらを意識する？",
    leftLabel: "誰かを立たせる",
    rightLabel: "自分を主役にする"
  },
  {
    id: "2-3",
    axis: "WA",
    text: "発想が浮かんだときはまずどうする？",
    leftLabel: "文字に起こしてみる",
    rightLabel: "声に出したり、演じてみる"
  },
  {
    id: "2-4",
    axis: "WA",
    text: "自分はどちらが得意だと思う？",
    leftLabel: "文章を書く",
    rightLabel: "人前で話す"
  },
  {
    id: "2-5",
    axis: "WA",
    text: "自分のネタはどちらであると思いますか？（ネタを書かない人は、平場でのキャラや大喜利の方式を参考に）",
    leftLabel: "誰がやっても成立する",
    rightLabel: "自分がやることで初めて成立する"
  },
  {
    id: "2-6",
    axis: "WA",
    text: "映画を作るとしたらどちらになりたい？",
    leftLabel: "脚本家",
    rightLabel: "役者"
  },
  {
    id: "2-7",
    axis: "WA",
    text: "後輩にネタのアドバイスを行うとき、どちらについて言及することが多い？",
    leftLabel: "ボケや大喜利など中身の部分",
    rightLabel: "見え方や使用する言葉などガワの部分"
  },

  // 3. C or F：1=Craftsman、5=Field
  {
    id: "3-1",
    axis: "CF",
    text: "どちらの方がネタを思いつく？",
    leftLabel: "一人でいる時",
    rightLabel: "誰かといる時"
  },
  {
    id: "3-2",
    axis: "CF",
    text: "あなたのネタやボケ方は......",
    leftLabel: "同じフォーマットが多い",
    rightLabel: "ネタやボケによって全く違う"
  },
  {
    id: "3-3",
    axis: "CF",
    text: "現実の事象をネタにするときは",
    leftLabel: "現実にあるルールや法則性から枠組みを作る",
    rightLabel: "具体的な出来事や人物から作る"
  },
  {
    id: "3-4",
    axis: "CF",
    text: "平場のスタイルは？",
    leftLabel: "事前に準備して臨む",
    rightLabel: "その場のノリに乗っかる"
  },
  {
    id: "3-5",
    axis: "CF",
    text: "エピソードトークのスタイルは？",
    leftLabel: "自分の話が多い",
    rightLabel: "他人の話が多い"
  },
  {
    id: "3-6",
    axis: "CF",
    text: "大喜利のスタイルは？",
    leftLabel: "意味から考える",
    rightLabel: "イメージから考える"
  },
  {
    id: "3-7",
    axis: "CF",
    text: "あなたの最も優れたネタはどのようにして思いついた？",
    leftLabel: "良いネタを作ろうとメモに向かい続けていた時",
    rightLabel: "お笑いのことを全く考えていない時にふと"
  },

  // 4. L or S：1=Logic、5=Sense
  {
    id: "4-1",
    axis: "LS",
    text: "人のネタを語るとき",
    leftLabel: "「なぜ」面白いのか、そのメカニズムを語る",
    rightLabel: "「どこが」面白かったか、具体的な箇所について語る"
  },
  {
    id: "4-2",
    axis: "LS",
    text: "あなたのネタは",
    leftLabel: "一般的なお笑いの作法に則っている",
    rightLabel: "自分独自のやり方に則っている"
  },
  {
    id: "4-3",
    axis: "LS",
    text: "平場ではどのように振舞う？",
    leftLabel: "立ち位置を考えてから発言する",
    rightLabel: "思いついたことをすぐ言う"
  },
  {
    id: "4-4",
    axis: "LS",
    text: "学生お笑いを始める前に面白いと思っていたネタを、今ではどう思うことが多い？",
    leftLabel: "今見ると面白くない",
    rightLabel: "今見ても面白いと思う"
  },
  {
    id: "4-5",
    axis: "LS",
    text: "「意味の分からない」ネタについて\n※「ウケている理由はわかるけど面白いと思えない」場合ではない。",
    leftLabel: "面白くないと思う",
    rightLabel: "面白いと思う"
  },
  {
    id: "4-6",
    axis: "LS",
    text: "あなたの美学はどちらに近い？",
    leftLabel: "自分が面白くても、ウケないと意味がない",
    rightLabel: "ウケていても、自分にとって面白くないと意味がない"
  },
  {
    id: "4-7",
    axis: "LS",
    text: "自身のネタにおいて、拍手笑いはどこで出ることが多い？",
    leftLabel: "バラシやツッコミの後など、拍手が出るように狙ったタイミング",
    rightLabel: "狙っていたわけではないが確かに面白い部分"
  }
];

const typeData = {
  BWCL: {
    name: "発明家",
    english: "Inventor",
    catch: "枠組み×論理で新形式を発明する人",
    description: "構造とロジックに強く、新しいフォーマットを作るのが得意。誰が演じても成立する設計で安定したウケを狙える。",
    strengths: ["形式設計", "再現性", "分析"],
    weaknesses: ["現場のノリ不足", "融通の利きにくさ"],
    roles: ["企画設計", "構成作家", "台本統括"]
  },
  BWCS: {
    name: "驚かせ屋",
    english: "Surpriser",
    catch: "独創フォーマットで意外性を仕掛ける",
    description: "独自の構造から意外性を生み、観客の予想を外すのが上手い。作品性の高いネタを量産できる。",
    strengths: ["仕掛け", "サプライズ", "独創"],
    weaknesses: ["わかりやすさ不足", "好み分かれる"],
    roles: ["企画", "トリック担当"]
  },
  TWCL: {
    name: "分析家",
    english: "Analyst",
    catch: "仕組みを解剖し緻密に組む",
    description: "笑いのメカニズムを言語化し、論理的に積み上げる。ツッコミや進行にも安定感がある。",
    strengths: ["構成力", "説明力", "再現性"],
    weaknesses: ["堅さ", "即興の伸び悩み"],
    roles: ["台本編集", "ツッコミ", "進行"]
  },
  TWCS: {
    name: "哲学者",
    english: "Philosopher",
    catch: "常識外から論理を突き詰める",
    description: "前提を疑い、思考で新しい面白さを掘る。コア層に刺さる深いネタを作りやすい。",
    strengths: ["視点の逆転", "思考の深さ"],
    weaknesses: ["伝わりやすさ", "専門化"],
    roles: ["コンセプト設計", "長尺企画"]
  },
  BWFL: {
    name: "天才型",
    english: "Genius",
    catch: "直感素材を論理で研磨する",
    description: "ひらめきを構造で磨き上げるハイブリッド。独自性と普遍性の両立が得意。",
    strengths: ["直感×論理", "編集力"],
    weaknesses: ["ムラ", "完璧主義"],
    roles: ["メインライター", "企画立案"]
  },
  BWFS: {
    name: "アーティスト",
    english: "Artist",
    catch: "感覚を作品のように仕上げる",
    description: "美学を重視しつつ作品性を高める。映像・音・小道具も含めて世界観で魅せる。",
    strengths: ["世界観", "演出美", "余白"],
    weaknesses: ["実戦向け調整が甘い"],
    roles: ["映像/小道具", "世界観監督"]
  },
  TWFL: {
    name: "ジャーナリスト",
    english: "Journalist",
    catch: "現実素材をロジカルに編集",
    description: "観察した出来事を整理し、説得力のあるネタに落とす。時事・実録系が強い。",
    strengths: ["取材力", "編集", "説得力"],
    weaknesses: ["ドライさ", "温度不足"],
    roles: ["取材コント", "ナレーション"]
  },
  TWFS: {
    name: "演説家",
    english: "Speaker",
    catch: "情熱で場を巻き込む",
    description: "情緒と勢いで説得するのが得意。トークイベントやライブで強さを発揮。",
    strengths: ["熱量", "カリスマ", "巻き込み"],
    weaknesses: ["論理の粗さ", "暴走"],
    roles: ["MC", "煽り", "フロントマン"]
  },
  BACL: {
    name: "演出家",
    english: "Director",
    catch: "演者を配置して舞台設計",
    description: "自分も出つつ全体の見取り図を作る。役割配分と見せ場作りが上手い。",
    strengths: ["俯瞰", "配置", "段取り"],
    weaknesses: ["自分のウケが薄くなる"],
    roles: ["演出", "キャスティング"]
  },
  BACS: {
    name: "演技派女優",
    english: "Actress",
    catch: "緻密な演技でリアリティを生む",
    description: "演技・キャラの完成度が高い。身体性でウケを取り、脚本も演技前提で設計する。",
    strengths: ["表現力", "没入感"],
    weaknesses: ["脚本依存度", "汎用性"],
    roles: ["役作り", "主演"]
  },
  TACL: {
    name: "軍曹",
    english: "Sergeant",
    catch: "秩序と役割で機能美を追求",
    description: "進行管理と即応が強み。現場の秩序を保ち、チームを動かす。",
    strengths: ["進行", "整理", "即応"],
    weaknesses: ["遊び不足", "厳格化"],
    roles: ["舞台監督", "進行ツッコミ"]
  },
  TACS: {
    name: "戦士",
    english: "Soldier",
    catch: "立ち位置で戦う即応型",
    description: "現場での切り返しが速く、要所で刺す。短距離走タイプ。",
    strengths: ["即興", "切り返し", "突破力"],
    weaknesses: ["長尺構成", "体力配分"],
    roles: ["短尺コーナー", "即興ツッコミ"]
  },
  BAFL: {
    name: "魔性の女",
    english: "Beauty",
    catch: "魅力×直感で場を支配",
    description: "魅力や雰囲気で空気を掌握。直感で笑いを引き寄せる。",
    strengths: ["カリスマ", "雰囲気", "牽引力"],
    weaknesses: ["技術説明が苦手"],
    roles: ["センター", "キャラ芸"]
  },
  BAFS: {
    name: "野獣",
    english: "Beast",
    catch: "エネルギーで押し切る剛腕",
    description: "体当たりのパワー型。勢いと身体性で笑いを取りに行く。",
    strengths: ["体力", "勢い", "破壊力"],
    weaknesses: ["精度", "繊細さ"],
    roles: ["体張り", "リアクション"]
  },
  TAFL: {
    name: "政治家",
    english: "Politician",
    catch: "空気を読み場を動かす調停者",
    description: "空気読解と立ち回りで全体最適を作る。MCや司会で真価を発揮。",
    strengths: ["空気読み", "配慮", "交渉"],
    weaknesses: ["主張が弱まる"],
    roles: ["司会", "企画調整"]
  },
  TAFS: {
    name: "祭司",
    english: "Ritual",
    catch: "美学を儀式のように貫く",
    description: "自分の美学に忠実で、独自世界を提示。コアファンが付きやすい。",
    strengths: ["一貫性", "世界観"],
    weaknesses: ["伝達性", "汎用性"],
    roles: ["世界観ネタ", "ソロ企画"]
  }
};

let currentIndex = 0;
let answers = [];

const axisValues = {
  BT: [],
  WA: [],
  CF: [],
  LS: []
};

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const surveyScreen = document.getElementById("survey-screen");
const resultScreen = document.getElementById("result-screen");

document.getElementById("start-btn").addEventListener("click", startDiagnosis);
document.getElementById("finish-btn").addEventListener("click", showResult);
document.getElementById("restart-btn").addEventListener("click", () => location.reload());
document.getElementById("copy-btn").addEventListener("click", copyResult);
document.getElementById("share-x-btn").addEventListener("click", shareToX);

function startDiagnosis() {
  const name = document.getElementById("user-name").value.trim();
  const consent = document.getElementById("research-consent").checked;
  const error = document.getElementById("start-error");

  if (!name) {
    error.textContent = "名前・ニックネームを入力してください。";
    return;
  }

  if (!consent) {
    error.textContent = "分析への使用に同意する場合のみ診断できます。";
    return;
  }

  error.textContent = "";
  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];
  document.getElementById("progress-text").textContent = `${currentIndex + 1} / ${questions.length}`;
  document.getElementById("progress-bar").style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  document.getElementById("question-title").textContent = `${q.id}　${q.text}`;

  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  const scaleWrap = document.createElement("div");
  scaleWrap.className = "scale-wrap";

  const labels = document.createElement("div");
  labels.className = "scale-labels";
  labels.innerHTML = `<span>${q.leftLabel}</span><span>${q.rightLabel}</span>`;

  const buttons = document.createElement("div");
  buttons.className = "scale-buttons";

  for (let value = 1; value <= 5; value++) {
    const btn = document.createElement("button");
    btn.className = "scale-btn";
    if (value === 1) {
  btn.innerHTML = `
    <div class="scale-inline">
      <span class="scale-number">1</span>
      <span class="scale-edge-label">${q.leftLabel}</span>
    </div>
  `;
}
else if (value === 5) {
  btn.innerHTML = `
    <div class="scale-inline">
      <span class="scale-number">5</span>
      <span class="scale-edge-label">${q.rightLabel}</span>
    </div>
  `;
}
else {
  btn.innerHTML = `
    <div class="scale-number-only">${value}</div>
  `;
}
    btn.onclick = () => answerQuestion(value);
    buttons.appendChild(btn);
  }

  scaleWrap.appendChild(labels);
  scaleWrap.appendChild(buttons);
  choices.appendChild(scaleWrap);
}

function answerQuestion(value) {
  const q = questions[currentIndex];

  axisValues[q.axis].push(value);
  answers.push({
    questionNumber: currentIndex + 1,
    id: q.id,
    question: q.text,
    axis: q.axis,
    value
  });

  currentIndex += 1;

  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    questionScreen.classList.add("hidden");
    surveyScreen.classList.remove("hidden");
  }
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function decideType() {
  const averages = {
    BT: average(axisValues.BT),
    WA: average(axisValues.WA),
    CF: average(axisValues.CF),
    LS: average(axisValues.LS)
  };

  const code =
    (averages.BT > 3 ? "B" : "T") +
    (averages.WA > 3 ? "A" : "W") +
    (averages.CF > 3 ? "F" : "C") +
    (averages.LS > 3 ? "S" : "L");

  return { code, averages };
}

function showResult() {
  const { code, averages } = decideType();
  const result = typeData[code];

  document.getElementById("result-code").textContent = code;
  document.getElementById("result-type").textContent = result.name;
  document.getElementById("result-english").textContent = result.english;
  document.getElementById("result-catch").textContent = result.catch;
  document.getElementById("result-description").textContent = result.description;

  document.getElementById("axis-badges").innerHTML = buildAxisBadges(code);
  renderList("strength-list", result.strengths);
  renderList("weakness-list", result.weaknesses);
  renderList("role-list", result.roles);

  surveyScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  saveResponse(code, result.name, averages);
}

function buildAxisBadges(code) {
  const axisMap = {
    B: ["Boke", "ボケ"],
    T: ["Tsukkomi", "ツッコミ"],
    W: ["Writer", "作家"],
    A: ["Actor", "役者"],
    C: ["Craftsman", "職人"],
    F: ["Field", "フィールド"],
    L: ["Logic", "ロジック"],
    S: ["Sense", "センス"]
  };

  return code.split("").map(letter => {
    const [en, ja] = axisMap[letter];
    return `<div class="axis-badge"><span>${letter}</span><strong>${en}</strong><small>${ja}</small></div>`;
  }).join("");
}

function renderList(elementId, items) {
  document.getElementById(elementId).innerHTML =
    items.map(item => `<li>${item}</li>`).join("");
}

function buildPayload(code, title, averages) {
  return {
    submittedAt: new Date().toISOString(),
    name: document.getElementById("user-name").value.trim(),
    consent: document.getElementById("research-consent").checked,
    resultCode: code,
    resultTitle: title,
    axisAverages: averages,
    axisValues,
    survey: {
      role: document.getElementById("survey-role").value,
      years: document.getElementById("survey-years").value,
      mbti: document.getElementById("survey-mbti").value,
      status: document.getElementById("survey-status").value,
      comment: document.getElementById("survey-comment").value
    },
    answers
  };
}

function saveResponse(code, title, averages) {
  const payload = buildPayload(code, title, averages);

  // たたき台では、まずブラウザ内に保存します。
  // 後でGoogleフォームやGoogle Apps Scriptに送信する処理へ差し替えます。
  fetch("https://script.google.com/macros/s/AKfycbxS53ZUhLHjHBO_z8eS7uJbXC3dZurqopRZLc4zqoDhudfuWjWjRFPF6x_ryKggjZRo/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  })
  .then(() => {
    document.getElementById("save-status").textContent = "結果を送信しました。";
  })
  .catch((error) => {
    console.error(error);
    document.getElementById("save-status").textContent = "送信に失敗しました。";
  });

  console.log("保存データ:", payload);
  document.getElementById("save-status").textContent =
    "このたたき台では、結果はこのブラウザ内に仮保存されています。Googleフォーム連携は次の段階で追加できます。";
}

function copyResult() {
  const code = document.getElementById("result-code").textContent;
  const resultText = document.getElementById("result-type").textContent;
  const english = document.getElementById("result-english").textContent;
  const catchText = document.getElementById("result-catch").textContent;
  navigator.clipboard.writeText(`学生お笑い16タイプ診断\n${resultText}（${code} / ${english}）\n${catchText}`);
  alert("結果をコピーしました。");
}

function shareToX() {
  const code = document.getElementById("result-code").textContent;
  const resultName = document.getElementById("result-type").textContent;
  const english = document.getElementById("result-english").textContent;
  const catchText = document.getElementById("result-catch").textContent;

  const diagnosisUrl = "https://あなたのGitHubユーザー名.github.io/リポジトリ名/";

  const text =
`学生お笑い16タイプ診断をやりました！

結果は
${resultName}（${code} / ${english}）

${catchText}

#学生お笑い16タイプ診断`;

  const shareUrl =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(text) +
    "&url=" +
    encodeURIComponent(diagnosisUrl);

  window.open(shareUrl, "_blank");
}
