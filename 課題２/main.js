//地名
const municipalities = [
    {
        id: "awarashi",
        name: "あわら市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___あわら市.png",
        description: "あわら市は、福井県の最北端に位置しています。気候は、北陸地方の中でも比較的温暖で、気象環境は過ごしやすいものとなっています。美しい日本海、静かな湖や川、緑豊かな山々、優れた泉質の温泉、太陽をいっぱい浴びた農作物など、自然の恵みにあふれたところです。"
    },
    {
        id: "ikedachou",
        name: "池田町",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県__今立郡_池田町.png",
        description: "池田町は、人口約2000人の小さな町で、総面積の91.7%を山林が占めます。中央は盆地を形成し、肥沃な農地を有しています。そんな池田町には、「手づくりの暮らし」「思いやりの居場所」「あたりまえの幸せ」があります。"
    },
    {
        id: "eiheijichou",
        name: "永平寺町",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県__吉田郡_永平寺町.png",
        description: "永平寺町には県内最大の河川九頭竜川が中央を流れ、町内には国道416号線やえちぜん鉄道、北陸自動車道が通っています。多くの歴史文化資源が集積しているほか、福井大学医学部、福井県立大学など学術研究機関も立地しています。"
    },
    {
        id: "echizenshi",
        name: "越前市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___越前市.png",
        description: "越前市は、福井県のほぼ中央に位置し、関西・中京圏などの主要都市や福井市・敦賀市など周辺都市との交通の動脈となっています。東部の越前中央山脈、西部の丹生山地、南部の「越前冨士」と呼ばれる日野山など、400から700メートル級の山々に囲まれ、武生盆地をつくっています。"
    },
    {
        id: "echizenchou",
        name: "越前町",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県__丹生郡_越前町.png",
        description: "越前町は、嶺北地方西部に位置する人口約2万人強の町です。潮風が心地よい日本海の「海」に加え、懐かしい「土」の香りがする風土、優しい「里」が育んだ文化など、それぞれの特徴が合わさり、多彩な文化、多彩な風土を楽しめます。"
    },
    {
        id: "ooichou",
        name: "おおい町",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県__大飯郡_おおい町.png",
        description: "おおい町は、福井県の南西部に位置し、面積のほとんどを中山間地が占めています。町域の90％を占める山林と、若狭湾国定公園に面し、美しいリアス式の眺望が得られる海を中心に、豊かな自然に囲まれた町です。"
    },
    {
        id: "oonoshi",
        name: "大野市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___大野市.png",
        description: "大野市は、霊峰白山の支脈に囲まれた緑豊かな自然とおいしい水と食に恵まれ、歴史・文化・伝統が息づく城下町から成り立っています。また、福井県で最も面積が大きく、その約9割を森林が占める自然にあふれたまちで、日本百名山の「荒島岳あらしまだけ」をはじめ、四方をぐるりと美しい山々に囲まれています。"
    },
    {
        id: "obamashi",
        name: "小浜市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___小浜市.png",
        description: "小浜市は、福井県の南西部、若狭のほぼ中央に位置しています。北陸圏域の福井県にありながら、風俗、習慣、言語などは近畿圏域との歴史的・文化的つながりがあり、気候も概ね穏和・温暖です。"
    },
      {
        id: "katsuyamashi",
        name: "勝山市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___勝山市.png",
        description: "勝山市は、福井県の東北部に位置し、市の周辺は1,000メートル級の山々に囲まれています。市街地は九頭竜川の流れに沿って形成された河岸段丘に位置し、明治以来の地場産業である繊維産業を基幹産業とした商工業と、古くから農林業が盛んな水と緑の豊かな田園都市です。"
    },
      {
        id: "sakaishi",
        name: "坂井市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___坂井市.png",
        description: "坂井市は、福井県の北部に位置し、中部には福井県随一の穀倉地帯である広大な坂井平野が広がっています。鉄道は、令和6年3月に開業した北陸新幹線の芦原温泉駅が市西部に隣接し、広域的なアクセスが向上しています。"
    },
      {
        id: "sabaeshi",
        name: "鯖江市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___鯖江市.png",
        description: "鯖江市は、福井県のほぼ中央に位置し、市面積の多くが平坦地であり、東部および南西の一部が山地となっています。市の中央を低い丘陵が南北に細長く延び、これに沿って市街地が形成されています。"
    },
      {
        id: "takahamachou",
        name: "高浜町",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県__大飯郡_高浜町.png",
        description: "高浜町は、福井県の最西端に位置し、南西の飯盛山脈を背にして北は日本海に面しています。町の70％は山林で、日本海に注ぐ河川の流域に耕地約520haが帯状をなしています。"
    },
      {
        id: "tsurugashi",
        name: "敦賀市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___敦賀市.png",
        description: "敦賀市は、福井県の中央に位置し、北に敦賀湾口を開いて日本海に面し、他の三方は山岳が連なり、敦賀湾と平野部を囲んでいます。若狭湾に大きく張り出た敦賀半島と54kmに及ぶ海岸線が、敦賀湾を日本海の風や波浪から防ぎ、天然の良港を形成しています。"
    },
      {
        id: "fukuishi",
        name: "福井市",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県___福井市.png",
        description: "福井市は、九頭竜、足羽、日野の三大河川により形成された福井平野に発達してきました。市民に最も近い基礎自治体として、さらなる市民サービスの向上と人口減少社会や地域間競争に打ち勝つ活力ある地域づくりを実現するため、中核市に移行しました。福井県において政治、経済、文化の中心都市として発展を続けてきています。"
    },
      {
        id: "minamiechizenchou",
        name: "南越前町",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県__南条郡_南越前町.png",
        description: "南越前町は、福井県のほぼ中央、嶺北地域の南端に位置し、日本海に接する山・海・里の地形の変化に富んだ自然豊かな町です。山間部は寒暖の差が激しく、県下有数の多雪地帯で、昭和51年には一部地域が特別豪雪地帯に指定されています。"
    },
      {
        id: "mihamachou",
        name: "美浜町",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県__三方郡_美浜町.png",
        description: "美浜町が誇る自然の景観は、若狭湾の澄んだ海と白い砂浜、神秘的に輝く三方五湖、耳川の清流、緑深い森林です。基幹産業は、豊かな自然を生かした農林水産業で、近年は観光業との連携による都市部との交流が活発です。"
    },
      {
        id: "wakasachou",
        name: "若狭町",
        hintSpot: "この地図が示す市町はどこ？",
        image: "福井県__三方上中郡_若狭町.png",
        description: "若狭町は、福井県の南西部に位置し、 若狭湾国定公園の中心部にある、国際的に重要な湿地を保全するラムサール条約に登録された「三方五湖」、全国名水百選「瓜割の滝」、近畿一美しい川とされる1級河川「北川」など水資源が豊富な町です。"
    }
];

//観光
const sightseeing = [
    {
        id: "echizenoonojou",
        name: "越前大野城",
        hintSpot: "この観光地はどこ？",
        image: "越前大野城.jpg",
        description: "【大野市】織田信長のエリート家臣団「赤母衣衆(あかほろしゅう)」の一人、金森長近が築城。現在は気象条件によっては晩秋から春にかけて、大野盆地全体が雲海につつまれ、越前大野城だけが浮かんで見える幻想的な景色が見られることから「天空の城 越前大野城」としても注目されています。"
    },
    {
        id: "toujinbou",
        name: "東尋坊",
        hintSpot: "この観光地はどこ？",
        image: "東尋坊.jpg",
        description: "【坂井市三国町】崖っぷちに立つと思わず足がすくんでしまうほどの断崖絶壁！東尋坊は約1kmにおよぶ大規模な柱状節理です。世界でもこれほどまでに大規模な柱状節理は珍しく「世界三大絶勝」に数えられます。"
    },
    {
        id: "kehijinguu",
        name: "氣比(けひ)神宮",
        hintSpot: "この観光地はどこ？",
        image: "氣比神宮.jpg",
        description: "【敦賀市】佐渡ヶ島から漂着したムロで建立したと伝わる大鳥居は、木造としては、「広島・厳島神社」「奈良・春日大社」と並ぶ「日本三大木造鳥居」のひとつで、国の重要文化財に指定されています。"
    },
    {
        id: "fukuikenritsukyouryuhakubutsukan",
        name: "福井県立恐竜博物館",
        hintSpot: "この観光地はどこ？",
        image: "福井県立恐竜博物館.jpg",
        description: "【勝山市】恐竜を中心とした地質・古生物学専門の博物館。その規模と内容から、世界三大恐竜博物館の一つと称されています。50体もの恐竜全身骨格や巨大ジオラマ、大迫力のダイノシアターなどがあり、思わず息をのむ臨場感に包まれます。"
    },
    {
        id: "ichijoudaniasakurashiiseki",
        name: "一乗谷朝倉氏遺跡",
        hintSpot: "この観光地はどこ？",
        image: "一乗谷朝倉氏遺跡.jpg",
        description: "【福井市】戦国時代に朝倉氏五代が約100年間にわたって越前の国を支配した城下町跡。遺跡は、国の特別史跡・特別名勝、出土品は重要文化財に指定されています。"
    },
    {
        id: "awaraonsengai",
        name: "あわら温泉街",
        hintSpot: "この観光地はどこ？",
        image: "あわら温泉街.jpg",
        description: "【あわら市】福井県の代表的な温泉街。明治16年の開湯以来、たくさんのお客様をお迎えしてきたあわら温泉は、「関西の奥座敷」と呼ばれるほど風雅な温泉まちです。また、源泉が74本あり、旅館ごとに温泉の泉質や効能が異なるのも特徴です。"
    },
    {
        id: "echizensobanosato",
        name: "御誕生寺(ごたんじょうじ)",
        hintSpot: "この観光地はどこ？",
        image: "御誕生寺.jpg",
        description: "【越前市】静かな山間にある曹洞宗の寺院「御誕生寺」は、修行僧たちが日々修行に励む修行専門の寺。招き猫おみくじや猫の御朱印帳、猫だらけの御朱印もあり、猫好きさんがたくさん訪れています。"
    },
    {
        id: "daihonzaneiheiji",
        name: "大本山(だいほんざん)永平寺",
        hintSpot: "この観光地はどこ？",
        image: "大本山永平寺.jpg",
        description: "【永平寺町】1244年、道元禅師によって開かれた禅の修行道場。今も多くの修行僧が日々厳しい修行に励んでおり、参拝者はその様子を伺い知ることができます。"
    },
    {
        id: "suisyouhamakaisuiyokujou",
        name: "水晶浜海水浴場",
        hintSpot: "この観光地はどこ？",
        image: "水晶浜海水浴場.jpg",
        description: "【美浜町】県内外から海水浴客が訪れる海水浴場。砂粒が細かく、きらめく白い砂が特長。早朝からウィンドサーフィンなどのマリンスポーツを楽しむ人々も訪れるスポットです。"
    },
    {
        id: "kumagawajuku",
        name: "熊川宿(くまがわじゅく)",
        hintSpot: "この観光地はどこ？",
        image: "熊川宿.jpg",
        description: "【若狭町】熊川の宿は、若狭から京都を結ぶ重要な宿場で、特に天正17年以来発展を続けました。平成27年に熊川宿を含む鯖街道が「～御食国若狭と鯖街道～」として日本遺産に認定されました。"
    }
];

//特産品・名産品
const speciality = [
    {
        id: "echizengani",
        name: "越前がに",
        hintSpot: "この特産品・名産品は何？",
        image: "越前がに.jpg",
        description: "冬の日本海で寒くなるほど、脂がのって美味しくなる魚介類。その中で、冬の味覚の王者と呼ばれているのが「越前がに」です。その味のファンは全国に多数、食通もその美味しさを認めるほどです。"
    },
    {
        id: "fukuiamaebi_echizenebi",
        name: "ふくい甘えび 越前えび",
        hintSpot: "この特産品・名産品は何？",
        image: "越前えび.jpg",
        description: "福井県内で最も漁獲量が多い三国港の甘えびは、品質に対しての評価が高く絶品だと言われています。また、甘えびを狙う網の中にまれに入る幻のエビがあり、「越前えび」と呼ばれていました。その味わいは甘えびに勝るとも劣らない美味しさです。"
    },
    {
        id: "ichihomare",
        name: "いちほまれ",
        hintSpot: "この特産品・名産品は何？",
        image: "いちほまれ.png",
        description: "美味しいお米の代名詞である「コシヒカリ」は福井県が発祥！その美味しさに魅了され、全国各地で生産されるようになりました。「いちほまれ」が誕生したのは平成30年。コシヒカリを生んだ福井県がその技術の粋を集め、20万種から選び抜いた、まさに奇跡のお米です。"
    },
    {
        id: "soba",
        name: "そば",
        hintSpot: "この特産品・名産品は何？",
        image: "そば.jpg",
        description: "福井県は全国有数のそばどころです。その美味しさの原点は「在来種」にあり、小粒ながら味が濃く、香りに優れていると定評があります。全県域という大規模で栽培しているのは福井県だけ。まさに「在来種そば王国」なのです。"
    },
    {
        id: "koshinorubi-",
        name: "越のルビー",
        hintSpot: "この特産品・名産品は何？",
        image: "越のルビー.jpg",
        description: "「越のルビー」は福井県内で生産されるミディトマトの品種です。収穫時期は主に春と秋ですが、秋に収穫されるトマトは、熟する時間が長いため、春のものに比べ糖度が高い、美味しいトマトになります。"
    },
    {
        id: "wakasagyuu",
        name: "若狭牛",
        hintSpot: "この特産品・名産品は何？",
        image: "若狭牛.jpg",
        description: "自然豊かな越前若狭の四季に富んだ気候と豊かな風土の中で丹精込めてじっくりと育てられ、最高級の牛肉として全国的に知られる若狭牛は、明治時代から食用とされてきた伝統ある和牛です。肉質はサシがきめ細やかで風味豊かになっています。"
    },
    {
        id: "habutaemochi",
        name: "羽二重餅",
        hintSpot: "この特産品・名産品は何？",
        image: "羽二重餅.jpg",
        description: "羽二重織物の産地であった福井。その羽二重をイメージさせた菓子が登場したのは幕末の頃。明治38年には「羽二重餅」と命名され、現在では名実ともに福井を代表する銘菓です。きめの細かい餅菓子は、しなやかな肌触り、ほんのりとした甘さがあります。"
    },
    {
        id: "echizenwashi",
        name: "越前和紙",
        hintSpot: "この特産品・名産品は何？",
        image: "越前和紙.jpg",
        description: "「越前和紙」の特徴は、ぬくもりある優雅な肌合いと風格にあります。明治元年には日本最初のお札用紙に採用、美術界でも横山大観や平山郁夫などの芸術家に支持されました。"
    },
    {
        id: "echizenuchihamono",
        name: "越前打刃物",
        hintSpot: "この特産品・名産品は何？",
        image: "越前打刃物.jpg",
        description: "『越前打刃物』は、日本古来の火作り鍛造技術と手仕上げを主とした製品づくりが特長です。包丁については国内はもちろん、海外のプロの料理人からも絶賛され、高品質の製品を供給し続けています。"
    },
    {
        id: "funokarashiae",
        name: "へしこ",
        hintSpot: "この特産品・名産品は何？",
        image: "へしこ.jpg",
        description: "「へしこ」は鯖などの魚を塩漬けし、米糠に漬け込んで1年以上にわたり熟成させた発酵食品です。福井県沿岸部では、漁に出られない日が多い冬場の貴重なタンパク源として、昔から各家庭でつくられてきました。"
    },
];

//　↓　gemini加筆　ステージ設定
const STAGES = {
    municipalities: {data: municipalities, total: 17},
    sightseeing: {data: sightseeing, total: 10},
    speciality: {data: speciality, total: 10}
};
//　↑

//　↓ gemini削除
//クイズゲームの「基本ルール設定」と「プレイ中のデータを記憶する記録帳」
//const GAME_CONFIG = {
//    totalQuesitionsmunucipalities: 17,
//    totalQuesitionssightseeing: 10,
//    totalQuesitionsspeciality: 10,
//};
//　↑

let gameState = {
    //　↓　gemini加筆
    currentStageKey: null,
    //　↑
    currentQuestionIndex: 0,
    hasAnswered: false,
    //　↓　gemini加筆
    questions: [],
    score: 0
    //　↑
};

//　↓　gemini加筆
//配列をランダムにシャッフルする関数
function shuffleArray(array){
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
}
//　↑

//html(見た目)とmain.js(脳)をつなぐリモコンのボタンを準備している状態
const screenStart = document.getElementById("screen-start");
const screenStageselect = document.getElementById("screen-stageselect");
const screenGame = document.getElementById("screen-game");
const screenResult = document.getElementById("screen-result");

//ゲーム内でユーザーがクリックする「すべての操作ボタン」をJavaScript上に読み込み、後からクリックイベント(処理)を割り振れるように準備しているコード
const btnStart = document.getElementById("btn-start");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");
const btnSelect = document.getElementById("btn-select");

//ゲーム中に画面上のクイズ情報(問題番号、スコア、問題文、選択肢など)をリアルタイムに書き換えるための表示パーツを取得・保存するコード
const questionIndexEl = document.getElementById("question-index");
//　↓　gemini加筆
const questionTextEl = document.getElementById("question-text");
//　↑
const optionsGrid = document.getElementById("options-grid");
const questionImageEl = document.getElementById("question-image");

//ユーザーがクイズの選択肢を選んだ直後に表示される「正解・不正解の結果と解説(フィードバックエリア)」を操作するための要素を取得・保存するコード
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackDescription = document.getElementById("feedback-description");
//　↓　gemini加筆
const resultScore = document.getElementById("result-score");

// 画面切替関数
function showScreen(screen) {
    screenStart.classList.add("hidden");
    screenStageselect.classList.add("hidden");
    screenGame.classList.add("hidden");
    screenResult.classList.add("hidden");

    screen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//　↑

//ゲーム全体の状態遷移とインタラクションの全てを司る最も重要な部分
//　↓　gemini修正
//function initGame() {
function initGame(stageKey){
    const stage = STAGES[stageKey];
    if (!stage || stage.data.length === 0) return;
    //　↑

    //新しいゲームを開始（またはリトライ）する際に「前回のプレイ記録をすべてクリアし、完全に初期状態(まっさらな状態)に戻す」リセット処理
    //　↓　gemini加筆
    gameState.currentStageKey = stageKey;
    //　↑
    gameState.currentQuestionIndex = 0;
    gameState.hasAnswered = false;
    //　↓　gemini加筆
    gameState.score = 0;
    //　↑

    //今回のプレイで出題する10問をランダムに選んでセットする処理
    //　↓　gemini修正
    //const shuffled = shuffleArray(municipalities);
    //gamestate.questions = shuffled.slice(0, GAME_CONFIG.totalQuestions);
    gameState.questions = shuffleArray(stage.data);
    //　↑

    //準備されたデータをもとに「ゲーム画面」を表示し、第1問目の問題と選択肢を画面にセットしてゲームを開始する処理
    showScreen(screenGame);
    loadQuestion();
}

function loadQuestion() {
    //新しい問題を表示するタイミングで「その問題に対するプレイヤーの回答状態」をリセットする処理
    gameState.hasAnswered = false;
    //　↓　gemini削除
    //gameState.selectedOption = null;
    //　↑

    //選ばれた10問のリストの中から「いま解くべき問題のデータ」を1つだけ取り出して、使いやすい変数(currentQ)に保存する処理
    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    //　↓　gemini加筆
    const totalQ = gameState.questions.length;
    //　↑
    
    //　↓　gemini加筆
    // --- UI リセット部分 ---
    questionTextEl.textContent = currentQ.hintSpot;

    // 画像の表示制御
    if (currentQ.image) {
        questionImageEl.src = currentQ.image;
        questionImageEl.classList.remove("hidden"); // 画像があるなら表示
    } else {
        questionImageEl.src = "";
        questionImageEl.classList.add("hidden");    // 画像がないなら非表示
    }
    //　↑

    //新しい問題を表示する際に、画面の表示(UI)を最新の状態へリセット・更新する処理
    //問題番号の表示
    questionIndexEl.textContent = `第 ${gameState.currentQuestionIndex + 1} 問 / ${totalQ}問`;
    //問題文のセット
    questionTextEl.textContent = currentQ.hintSpot;
    //解説パネルの消去
    feedbackPanel.classList.add("hidden");
    
    //　↓　gemini加筆
    if (currentQ.image && currentQ.image.trim() !== "") {
        questionImageEl.src = currentQ.image;
        questionImageEl.style.display = "block";
    }else{
        questionImageEl.style.display = "none";
    }
    //　↑

    //正解1つと不正解3つを組み合わせた「4択の選択肢」をランダムに作成し、画面上にボタンとして生成・配置する処理
    //正解以外の選択肢だけを抽出
    //　↓　gemini修正
    //const wrongOptions = municipalities.filter(m => m.id !== currentQ.id);
    //const wrongOptions = sightseeing.filter(m => m.id !== currentQ.id);
    //const wrongOptions = speciality.filter(m => m.id !== currentQ.id);
    const stageData = STAGES[gameState.currentStageKey].data;
    const wrongOptions = stageData.filter(m => m.id !== currentQ.id);
    //　↑
    //抽出した不正解リストをシャッフルし、先頭から3つだけを切り出す
    const chosenWrong = shuffleArray(wrongOptions).slice(0, 3);
    //正解(currentQ)と不正解3つ(...chosenWrong)を合わせた計4つの要素を、最後にさらにもう一度シャッフル
    const options = shuffleArray([currentQ, ...chosenWrong]);
    
    //前の問題で使ったボタンを一度全て消去して画面を空にする
    optionsGrid.innerHTML = "";
    //　↓　gemini修正
    //options.forEach((opt, index) => {
    options.forEach(opt => {
    //　↑
        //JavaScript上で新しい<button>要素を動的に作成
        const btn = document.createElement("button");
        btn.className = "option-btn";
        //ボタンに市町村のID(data-id="5" など)を埋め込み、後からJavaScriptで識別しやすくする
        btn.setAttribute("data-id", opt.id);
        //ボタンの中に「市町村名」と、後で正解の「✓」や不正解の「✗」を表示するための「空のバッジ領域(option-badge」)を埋め込む
        btn.innerHTML = `
            <span>${opt.name}</span>
            <span class="option-badge"></span>
        `;
        
        //ボタンが押された時に、どのボタンが押されたか・正解のIDは何かを判定関数(handleSelectOption)へ渡して実行するようにセット
        btn.addEventListener("click", () => handleSelectOption(btn, opt.id, currentQ.id));
        //完成したボタンを画面のグリッド枠(optionsGrid)に順番に追加して表示
        optionsGrid.appendChild(btn);
    });
}

//プレイヤーが選択肢をクリックした瞬間に実行される「回答の受付け」と「ボタン見た目の変化（正解・不正解の演出）」を行う関数の前半部分
function handleSelectOption(buttonEl, selectedId, correctId) {
    //すでに回答済みの場合は return で処理を打ち切ります。これにより、ボタンを連打してスコアが何重にも加算されるのを防ぐ
    if (gameState.hasAnswered) return;
    //hasAnswered を true に切り替え、プレイヤーが選んだ選択肢のIDを記憶
    gameState.hasAnswered = true;
    //　↓　gemini削除
    //gameState.selectedOption = selectedId;
    //　↑

    //プレイヤーがクリックした選択肢のID（selectedId）と、正解のID（correctId）が一致しているかを判定（true または false）する
    const isCorrect = (selectedId === correctId);
    //　↓　gemini修正
    //const currentQ = gameState.questions[gameState.currentQuestionIndex];
    if (isCorrect){
        gameState.score += 1;
    }
    //　↑

    // Disable all options
    const buttons = optionsGrid.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
        //画面上にある4つの選択肢すべてを押せない状態（グレーアウト等）にする
        btn.disabled = true;
        const btnId = btn.getAttribute("data-id");
        if (btnId === correctId) {
            //正解のボタンに correct クラスを付与して「〇」マークを表示
            btn.classList.add("correct");
            btn.querySelector(".option-badge").textContent = "〇";
        } else if (btnId === selectedId) {
            //不正解のボタンに incorrect クラスを付与して「✕」マークを表示
            btn.classList.add("incorrect");
            btn.querySelector(".option-badge").textContent = "✕";
        }
    });

    // 回答した直後に「画面更新」「解説パネルの表示」「画面の自動スクロール」といった一連のフィードバック演出を行う処理
    if (isCorrect) {
       //文字色を緑色などにするCSSクラス（correct-title）を付与し、タイトルを「正解！」に変える
        feedbackTitle.className = "feedback-title correct-title";
        feedbackTitle.textContent = "正解！";
    } else {
        //文字色を赤色などにするCSSクラス（incorrect-title）を付与し、タイトルを「不正解」に変える
        feedbackTitle.className = "feedback-title incorrect-title";
        feedbackTitle.textContent = "不正解...";
    }
        
    //出題中の市町村が持つ解説テキスト（currentQ.description）を、解説欄の本文に挿入
    //　↓　gemini修正
    //feedbackDescription.textContent = currentQ.description;
    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    feedbackDescription.textContent = currentQ.description;
    //　↑
    //これまで隠れていた解説パネルから hidden クラスを取り外し、画面上に出現させる
    feedbackPanel.classList.remove("hidden");
    
    //出現した解説パネルの位置まで画面が滑らか（behavior: 'smooth'）にスクロール
    feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

//解説パネルなどにある「次の問題へ」ボタンが押されたときに実行される、クイズのページめくり・画面遷移をコントロールする処理。まだ解くべき問題が残っているか、それとも全問解き終わったかを判定する「分岐ハブ」の役割を果たす。
function handleNextQuestion() {
    //現在の問題インデックス（currentQuestionIndex）を +1 増加させる
    gameState.currentQuestionIndex++;
    
    //まだ問題が残っている場合（インデックスが設定した全問題数 totalQuestions より小さい場合
    //　↓　gemini修正
    //if (gameState.currentQuestionIndex < GAME_CONFIG.totalQuestions) { 
    if (gameState.currentQuestionIndex < gameState.questions.length){
        //　↑
        //次の問題・選択肢・地図ピンを画面にセットして更新
        loadQuestion();
     //すべての問題を解き終えた場合
    } else {
        //スコア計算やランク判定を行って結果画面へ移動
        showResults();
    }
}

function showResults(){
    //全10問のクイズが終了した際、プレイヤーの最終成績を結果画面のUI要素へ一括反映する処理
    //　↓　gemini修正
    //resultScore.textContent = `${gameState.score} / 100`;
    const totalQ = gameState.questions.length;
    resultScore.textContent = `正解数: ${gameState.score} / ${totalQ} 問`;
    showScreen(screenResult);
    //　↑
}

//　↓　gemini加筆

//イベントリスナの登録

//スタートボタンを押してステージ選択画面を表示
btnStart.addEventListener("click", () => {
    showScreen(screenStageselect);
});

//ステージ選択ボタンの処理
document.querySelectorAll(".stage-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const stageKey = btn.getAttribute("data-stage");
        initGame(stageKey);
    });
});

//クイズ画面「次の問題」ボタン
btnNext.addEventListener("click", () => {
    handleNextQuestion();
});

//結果画面「もう一度挑戦する」ボタン
btnRestart.addEventListener("click", () =>{
    initGame(gameState.currentStageKey);
});

//結果画面「ステージ選択画面に戻る」ボタン
btnSelect.addEventListener("click", () => {
    showScreen(screenStageselect);
});

//　↑