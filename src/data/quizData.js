const quizData = {
  categories: ["야알못 탈출하기", "그 시절 우리가 좋아한 야구", "너의 팀을 알려줘"],
  quizzes: [
    // 규칙 & 용어
    {
      id: 1,
      category: "야알못 탈출하기",
      difficulty: "쉬움",
      question: "스트라이크 존의 뜻은?",
      choices: [
        "타자가 칠 수 있는 공의 영역",
        "투수가 반드시 던져야 하는 구역",
        "심판이 스트라이크로 판정하는 공이 지나가는 가상의 공간",
        "투수가 공을 던질 때 서야 하는 위치",
      ],
      correct: "심판이 스트라이크로 판정하는 공이 지나가는 가상의 공간",
    },
    {
      id: 2,
      category: "야알못 탈출하기",
      difficulty: "쉬움",
      question: "‘삼진 아웃’의 뜻은?",
      choices: [
        "타자가 세 번 자세를 바꿨다",
        "투수가 세 번 스트라이크를 던져 타자를 아웃시켰다",
        "타자가 세 번 베이스를 밟았다",
        "심판이 세 번 경고를 줬다",
      ],
      correct: "투수가 세 번 스트라이크를 던져 타자를 아웃시켰다",
    },
    {
      id: 3,
      category: "야알못 탈출하기",
      difficulty: "쉬움",
      question: "야구에서 ‘그랜드슬램’의 뜻은?",
      choices: [
        "홈런 4개 연속 치기",
        "만루에서 치는 홈런",
        "4번 타자가 친 홈런",
        "4회 연속 득점",
      ],
      correct: "만루에서 치는 홈런",
    },
    {
      id: 4,
      category: "야알못 탈출하기",
      difficulty: "쉬움",
      question: "‘파울볼’의 뜻은?",
      choices: [
        "타자가 친 공이 경기장 밖으로 나갔을 때",
        "투수가 던진 공이 스트라이크 존을 벗어났을 때",
        "타자가 친 공이 야구장 내 필드 밖으로 나갔을 때",
        "타자가 친 공이 1루 또는 3루 라인 밖으로 나간 공",
      ],
      correct: "타자가 친 공이 1루 또는 3루 라인 밖으로 나간 공",
    },
    {
      id: 5,
      category: "야알못 탈출하기",
      difficulty: "쉬움",
      question: "‘포볼’의 뜻은?",
      choices: [
        "투수가 4개의 볼을 던져 타자가 1루로 진루하는 것",
        "타자가 4개의 타석에서 안타를 친 것",
        "주자가 4루를 밟는 것",
        "수비수가 4번 실책하는 것",
      ],
      correct: "투수가 4개의 볼을 던져 타자가 1루로 진루하는 것",
    },

    // 역사
    {
      id: 6,
      category: "그 시절 우리가 좋아한 야구",
      difficulty: "중간",
      question:
        "KBO 리그 역사상 최초로 '와이어 투 와이어' 우승을 달성한 팀은 어디일까요?",
      choices: ["삼성 라이온즈", "기아 타이거즈", "SSG 랜더스", "LG 트윈스"],
      correct: "SSG 랜더스",
    },
    {
      id: 7,
      category: "그 시절 우리가 좋아한 야구",
      difficulty: "중간",
      question: "KBO 리그 역대 최다 세이브 기록을 보유한 선수는 누구일까요?",
      choices: ["오승환", "류현진", "양현종", "김광현"],
      correct: "오승환",
    },
    {
      id: 8,
      category: "그 시절 우리가 좋아한 야구",
      difficulty: "쉬움",
      question: "KBO 500홈런 기록을 최초로 달성한 선수는 누구일까요?",
      choices: ["이승엽", "최정", "양준혁", "심정수"],
      correct: "최정",
    },
    {
      id: 9,
      category: "그 시절 우리가 좋아한 야구",
      difficulty: "쉬움",
      question: "2024년 KBO 리그 우승 팀은 어디일까요?",
      choices: ["SSG 랜더스", "LG 트윈스", "기아 타이거즈", "두산 베어스"],
      correct: "기아 타이거즈",
    },
    {
      id: 10,
      category: "그 시절 우리가 좋아한 야구",
      difficulty: "중간",
      question:
        "한국 프로야구 최초 30-30 클럽(홈런, 도루 30개)을 달성한 선수는 누구일까요?",
      choices: ["박재홍", "이종범", "김도영", "이병규"],
      correct: "박재홍",
    },

    // 선수 & 팀
    {
    id: 11,
    category: "선수 & 팀",
    difficulty: "쉬움",
    question: "SSG 랜더스의 연고지는 어디일까요?",
    choices: ["대구", "부산", "인천", "광주"],
    correct: "인천"
  },
  {
    id: 12,
    category: "너의 팀을 알려줘",
    difficulty: "쉬움",
    question: "삼성 라이온즈는 몇 회의 한국시리즈 우승을 차지했을까요?",
    choices: ["2회", "4회", "8회", "10회"],
    correct: "8회"
  },
  {
    id: 13,
    category: "너의 팀을 알려줘",
    difficulty: "중간",
    question: "기아 타이거즈는 원래 어떤 팀 이름이었을까요?",
    choices: ["현대 유니콘스", "해태 타이거즈", "쌍방울 레이더스", "빙그레 이글스"],
    correct: "해태 타이거즈"
  },
  {
    id: 14,
    category: "너의 팀을 알려줘",
    difficulty: "중간",
    question: "두산 베어스의 상징 동물은 무엇일까요?",
    choices: ["호랑이", "곰", "사자", "독수리"],
    correct: "곰"
  },
  {
    id: 15,
    category: "너의 팀을 알려줘",
    difficulty: "중간",
    question: "KT 위즈가 KBO 1군에 정식 합류한 해는 언제일까요?",
    choices: ["2013년", "2015년", "2017년", "2019년"],
    correct: "2015년"
  }
  ],
};

export default quizData;
