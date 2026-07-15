// Rick and Morty Personality Quiz - Script

// ==================== 角色数据 ====================
const characters = {
    Rick: {
        name: "Rick Sanchez (瑞克)",
        displayName: "瑞克",
        image: "assets/rick.jpg",
        traits: ["脑子转得快", "不吃规矩这套", "嘴硬", "行动派"],
        preview: "“规则当然有用，主要是用来判断什么时候该无视它。”",
        comments: [
            "别把一道选择题想成宇宙伦理大会。",
            "犹豫超过十秒，我就默认你选最无聊的那个。",
            "别选听起来聪明的，选你真的会做的。",
            "这一题没有陷阱。也可能全是陷阱。",
            "快点，我车库里还有个宇宙等着爆炸。"
        ],
        reaction: "嗯，这个答案至少没浪费我的脑细胞。",
        quote: "“别误会，我不是在夸你。只是你还没蠢到让我关掉页面。”",
        description: "你习惯先拆问题，再拆规则。很多时候你不是故意唱反调，只是很难对低效和废话装作没看见。你嘴上总说不在乎，真遇到自己认定的人，还是会悄悄把最危险的部分接过去。"
    },
    Morty: {
        name: "Morty Smith (莫提)",
        displayName: "莫提",
        image: "assets/morty.jpg",
        traits: ["会怕但会去", "共情力强", "有底线", "念旧"],
        preview: "“我只是觉得，做选择前最好先看看有没有人会受伤。”",
        comments: [
            "哦天，这题怎么听起来又要出事了？",
            "你可以慢一点，但别让瑞克发现你在犹豫。",
            "选那个晚上睡觉不会心虚的答案吧。",
            "我觉得普通一点也没什么不好，真的。",
            "先说好，答完不会突然把我传送走吧？"
        ],
        reaction: "这个选择……听起来还算不会毁掉一个星球。",
        quote: "“至少你还会先想想，自己的选择会不会伤到谁。”",
        description: "你会紧张、会犹豫，但这不等于软弱。乱成一团的时候，你仍会问一句“这样做会不会伤到谁”。这份良心在瑞莫宇宙里稀缺得离谱，也是你真正靠得住的地方。"
    },
    Summer: {
        name: "Summer (桑美)",
        displayName: "桑美",
        image: "assets/summer.jpg",
        traits: ["反应快", "不服输", "会玩", "临场稳定"],
        preview: "“世界末日可以等一下，我先把这件事发完。”",
        comments: [
            "拜托，别选那个一看就很无聊的答案。",
            "这题我懂，重点不是对不对，是你敢不敢。",
            "别管他们怎么想，你又不是来竞选好孩子的。",
            "有时候先冲出去，路上再想也完全来得及。",
            "这道题要是发到网上，评论区一定会吵起来。"
        ],
        reaction: "终于有个不那么无聊的答案了。",
        quote: "“好吧，你确实比这家里大多数人更会活。”",
        description: "你很在意当下，也很会在混乱里迅速适应。别人以为你只关心好不好玩，你却常在关键时刻做出最干脆的决定。你要的不是被安排好，而是自己决定站哪边。"
    },
    Beth: {
        name: "Beth Sanchez (贝丝)",
        displayName: "贝丝",
        image: "assets/beth.jpg",
        traits: ["理性", "要强", "顾家", "不甘平淡"],
        preview: "“我能把生活安排好，不代表我不想把桌子掀了。”",
        comments: [
            "先诚实回答，别挑那个看起来最体面的。",
            "成年人最擅长的事，就是一边负责一边想逃跑。",
            "你真正想做什么，通常比“应该做什么”更明显。",
            "这题不难，难的是承认自己的答案。",
            "选吧，反正最后收拾残局的人大概率还是我。"
        ],
        reaction: "你比自己以为的更清楚想要什么。",
        quote: "“能把日子撑住，还保留一点不安分，挺像我的。”",
        description: "你能扛事，也习惯把情绪放到事情做完以后再处理。稳定对你很重要，但你并不甘心一眼看到生活的尽头。你真正纠结的，常常不是能不能做到，而是这是不是你自己选的。"
    },
    Jerry: {
        name: "Jerry Smith (杰瑞)",
        displayName: "杰瑞",
        image: "assets/jerry.jpg",
        traits: ["真诚", "重感情", "需要肯定", "有韧劲"],
        preview: "“普通有什么不好？普通人也可以做一份很不错的三明治。”",
        comments: [
            "我觉得这题没有标准答案。瑞克说我这么想就是错的。",
            "选一个让大家都舒服的，不也挺好吗？",
            "有时候承认自己不知道，也需要一点勇气。",
            "我支持你。不管你选什么，至少现在支持。",
            "别有压力，我也经常在第一步就开始有压力。"
        ],
        reaction: "我觉得这个答案挺好。真的，不是在安慰你。",
        quote: "“普通不是失败，至少我们真的在乎身边的人。”",
        description: "你在乎关系，也希望自己的努力能被看见。你未必总能抢到最亮眼的位置，但遇到低谷时，你往往比想象中更能熬。普通不是缺点，它只是意味着你愿意认真过好那些没人鼓掌的日子。"
    },
    MrPoopybutthole: {
        name: "Mr. Poopybutthole (屎洞先生)",
        displayName: "屎洞先生",
        image: "assets/poopybutthole.jpg",
        traits: ["乐观", "有戏", "意外坚强", "气氛担当"],
        preview: "“Ooh-wee！日子乱一点，故事才有得讲嘛。”",
        comments: [
            "Ooh-wee！凭感觉来，第一反应通常很诚实。",
            "这题让我想起一段不太方便展开的往事。",
            "生活很奇怪，但你还是可以选得开心一点。",
            "别怕选错，我的人生都错成连续剧了。",
            "Ooh-wee！最后几题也要好好玩呀。"
        ],
        reaction: "Ooh-wee！我喜欢这个选择！",
        quote: "“你的人生可能有点乱，但你总能笑着继续。”",
        description: "你看起来随和，真正遇到事却比很多人更能扛。你知道生活会突然拐向奇怪的方向，所以很少把一时的狼狈当成结局。能笑着继续，不是没心没肺，是你的恢复力。"
    }
};

const characterOrder = Object.keys(characters);

// ==================== 题目数据 ====================
const questions = [
    {
        question: "早上醒来，你的第一反应是？",
        options: [
            { text: "糟糕！我的实验还差最后一步！", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 3, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "又要被Rick叫去冒险了吗...", scores: { Rick: 1, Morty: 4, Summer: 3, Beth: 2, Jerry: 2, MrPoopybutthole: 1 } },
            { text: "先刷一下社交媒体看看动态", scores: { Rick: 1, Morty: 2, Summer: 4, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "希望今天能平平安安的", scores: { Rick: 0, Morty: 2, Summer: 1, Beth: 1, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你的朋友向你抱怨工作，你会？",
        options: [
            { text: "直接给TA一个创业idea，让TA直接炒老板", scores: { Rick: 4, Morty: 1, Summer: 3, Beth: 3, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "安静地听TA说完，然后说'我懂你'", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "和TA一起吐槽，然后约个下午茶", scores: { Rick: 1, Morty: 2, Summer: 4, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "建议TA换个角度看问题，多发现工作中的乐趣", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "面对一个完全陌生的领域，你会？",
        options: [
            { text: "管它是什么，先干了再说！", scores: { Rick: 4, Morty: 1, Summer: 3, Beth: 2, Jerry: 1, MrPoopybutthole: 4 } },
            { text: "算了算了，还是别碰比较好...", scores: { Rick: 1, Morty: 4, Summer: 1, Beth: 2, Jerry: 3, MrPoopybutthole: 1 } },
            { text: "先上网查查这个领域的内容", scores: { Rick: 3, Morty: 2, Summer: 4, Beth: 3, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "问问身边懂行的朋友", scores: { Rick: 1, Morty: 3, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "周末你更想做什么？",
        options: [
            { text: "搞点小发明或者做实验", scores: { Rick: 4, Morty: 1, Summer: 1, Beth: 4, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "宅在家里看剧、打游戏", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 1, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "和闺蜜逛街、喝奶茶", scores: { Rick: 0, Morty: 2, Summer: 4, Beth: 3, Jerry: 2, MrPoopybutthole: 1 } },
            { text: "搞个家庭聚会，大家一起吃饭", scores: { Rick: 1, Morty: 3, Summer: 2, Beth: 3, Jerry: 4, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "当你看到一个超难的谜题时，你会？",
        options: [
            { text: "哦？这有点意思，让我来解决它！", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 4, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "Morty！Morty！你快来看这个！", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 1, Jerry: 1, MrPoopybutthole: 1 } },
            { text: "拍照发朋友圈：好难啊！", scores: { Rick: 1, Morty: 2, Summer: 4, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "算了吧，让别人去想", scores: { Rick: 1, Morty: 3, Summer: 1, Beth: 1, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你的卧室通常是什么风格的？",
        options: [
            { text: "乱糟糟的实验室风格，到处是零件", scores: { Rick: 4, Morty: 2, Summer: 1, Beth: 2, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "简单整洁，有几本书就够了", scores: { Rick: 2, Morty: 4, Summer: 2, Beth: 3, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "粉嫩的少女风，到处是偶像海报", scores: { Rick: 0, Morty: 1, Summer: 4, Beth: 2, Jerry: 2, MrPoopybutthole: 1 } },
            { text: "温馨的家庭照和装饰画", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 3, Jerry: 4, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "如果可以穿越到任何地方，你最想去？",
        options: [
            { text: "宇宙边缘，看看外面还有什么", scores: { Rick: 4, Morty: 2, Summer: 3, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "一个和平安宁的小星球，度个假", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "未来世界，看看科技发展到什么程度", scores: { Rick: 3, Morty: 2, Summer: 4, Beth: 3, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "历史中的某个朝代，体验一下古人的生活", scores: { Rick: 2, Morty: 2, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "你处理压力时的方式是？",
        options: [
            { text: "喝酒！喝到世界变得有趣为止！", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 3, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "躲进被子里，希望问题自己消失", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 1, Jerry: 3, MrPoopybutthole: 1 } },
            { text: "和朋友聊天，倾诉一下就好了", scores: { Rick: 1, Morty: 2, Summer: 4, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "深呼吸，然后制定一个详细计划", scores: { Rick: 2, Morty: 2, Summer: 2, Beth: 4, Jerry: 3, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你的朋友们怎么形容你？",
        options: [
            { text: "疯狂！脑子里装的东西没人能理解", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "老实！是个可以信赖的朋友", scores: { Rick: 1, Morty: 4, Summer: 1, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "时尚！总是走在潮流的前沿", scores: { Rick: 1, Morty: 1, Summer: 4, Beth: 2, Jerry: 2, MrPoopybutthole: 1 } },
            { text: "温暖！是个贴心的好伙伴", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "当你做一个重要决定时，你更看重？",
        options: [
            { text: "逻辑和数据，理性分析最重要", scores: { Rick: 4, Morty: 1, Summer: 1, Beth: 4, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "自己的直觉，听从内心的声音", scores: { Rick: 1, Morty: 3, Summer: 3, Beth: 2, Jerry: 2, MrPoopybutthole: 3 } },
            { text: "大家的意见，民主决定", scores: { Rick: 1, Morty: 3, Summer: 2, Beth: 1, Jerry: 4, MrPoopybutthole: 1 } },
            { text: "后果和风险，稳妥第一", scores: { Rick: 2, Morty: 4, Summer: 1, Beth: 3, Jerry: 3, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你最害怕什么？",
        options: [
            { text: "无聊！无法忍受平淡的生活", scores: { Rick: 4, Morty: 1, Summer: 3, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "死亡！还有Rick叫我做危险的事", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "被朋友们孤立，没有人喜欢我", scores: { Rick: 1, Morty: 2, Summer: 4, Beth: 2, Jerry: 3, MrPoopybutthole: 1 } },
            { text: "失业或者失去家庭", scores: { Rick: 1, Morty: 2, Summer: 1, Beth: 3, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你理想的晚餐是？",
        options: [
            { text: "在银河系边缘的餐厅吃外星料理", scores: { Rick: 4, Morty: 1, Summer: 3, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "在家做意面，边吃边看电视", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "和闺蜜一起去网红餐厅打卡", scores: { Rick: 1, Morty: 1, Summer: 4, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "一家人整整齐齐吃什么不重要", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 3, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "当你和权威人士意见不合时，你会？",
        options: [
            { text: "据理力争，我才不管你是什么职位", scores: { Rick: 4, Morty: 1, Summer: 3, Beth: 3, Jerry: 1, MrPoopybutthole: 4 } },
            { text: "表面上同意，心里默默反对", scores: { Rick: 2, Morty: 4, Summer: 2, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "偷偷收集证据，等待时机反击", scores: { Rick: 3, Morty: 2, Summer: 4, Beth: 3, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "算了吧，多一事不如少一事", scores: { Rick: 1, Morty: 2, Summer: 1, Beth: 1, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你最想拥有哪种超能力？",
        options: [
            { text: "瞬间穿越任何维度的传送门", scores: { Rick: 4, Morty: 2, Summer: 2, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "隐身术，不想被发现的时候可以躲起来", scores: { Rick: 2, Morty: 4, Summer: 2, Beth: 1, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "冻龄术，永远保持年轻漂亮", scores: { Rick: 1, Morty: 1, Summer: 4, Beth: 3, Jerry: 2, MrPoopybutthole: 1 } },
            { text: "读心术，能理解别人的想法", scores: { Rick: 2, Morty: 2, Summer: 2, Beth: 3, Jerry: 3, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "在团队项目中，你通常扮演什么角色？",
        options: [
            { text: "领袖！没有我你们什么都搞不定", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 3, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "执行者！让我做什么我就做什么", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 2, Jerry: 3, MrPoopybutthole: 1 } },
            { text: "气氛担当！负责让大家开心", scores: { Rick: 2, Morty: 2, Summer: 4, Beth: 1, Jerry: 2, MrPoopybutthole: 3 } },
            { text: "协调者！确保大家沟通顺畅", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "你最喜欢的音乐类型是？",
        options: [
            { text: "电子乐和重金属，越躁越好", scores: { Rick: 4, Morty: 1, Summer: 3, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "轻音乐或者古典乐，让我平静下来", scores: { Rick: 2, Morty: 4, Summer: 1, Beth: 3, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "流行音乐和R&B，跟着节奏摇摆", scores: { Rick: 1, Morty: 1, Summer: 4, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "乡村音乐和民谣，温馨又治愈", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "当你犯了错，你会怎么做？",
        options: [
            { text: "承认？但这不是我的问题，是世界的错", scores: { Rick: 4, Morty: 1, Summer: 1, Beth: 2, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "紧张得要死，一直道歉", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 1, Jerry: 3, MrPoopybutthole: 1 } },
            { text: "先想想怎么甩锅给别人", scores: { Rick: 3, Morty: 2, Summer: 4, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "勇于承担责任，然后想办法弥补", scores: { Rick: 2, Morty: 3, Summer: 2, Beth: 4, Jerry: 3, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你最想在哪个虚构的世界里生活？",
        options: [
            { text: "Rick的多维宇宙，到处都是冒险", scores: { Rick: 4, Morty: 3, Summer: 3, Beth: 3, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "霍格沃茨，会魔法太酷了", scores: { Rick: 2, Morty: 3, Summer: 3, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "复仇者联盟的大厦，和超级英雄做朋友", scores: { Rick: 2, Morty: 2, Summer: 4, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "权力的游戏，算了太危险了...还是算了", scores: { Rick: 2, Morty: 1, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "你对于规则和秩序的看法是？",
        options: [
            { text: "规则是用来打破的，我不吃这一套", scores: { Rick: 4, Morty: 1, Summer: 3, Beth: 2, Jerry: 1, MrPoopybutthole: 4 } },
            { text: "规则虽然无聊，但没有规则更可怕", scores: { Rick: 1, Morty: 4, Summer: 1, Beth: 2, Jerry: 3, MrPoopybutthole: 1 } },
            { text: "看情况，有时候规则需要灵活变通", scores: { Rick: 3, Morty: 2, Summer: 4, Beth: 3, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "规则是维护社会秩序的必要存在", scores: { Rick: 1, Morty: 2, Summer: 1, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "如果你捡到一百万现金，你会？",
        options: [
            { text: "投资搞个项目，说不定能变成一千万", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 4, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "交给警察叔叔，诚实守信是美德", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "买买买！终于可以买想要的东西了！", scores: { Rick: 1, Morty: 1, Summer: 4, Beth: 2, Jerry: 2, MrPoopybutthole: 1 } },
            { text: "存银行里，利息够付房租就好", scores: { Rick: 1, Morty: 2, Summer: 1, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你最看重朋友的哪种品质？",
        options: [
            { text: "聪明！能和聪明人聊天才是享受", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 3, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "忠诚！不管发生什么都不会背叛我", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "有趣！能一起疯一起浪才是朋友", scores: { Rick: 3, Morty: 2, Summer: 4, Beth: 1, Jerry: 2, MrPoopybutthole: 3 } },
            { text: "包容！能接受真实的我不装不作", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "当你看到一只流浪小动物时，你会？",
        options: [
            { text: "考虑要不要把它改造成超级战宠", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 3, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "给它喂点吃的，可怜的小家伙", scores: { Rick: 1, Morty: 4, Summer: 3, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "拍照发朋友圈，好可爱啊！", scores: { Rick: 1, Morty: 1, Summer: 4, Beth: 2, Jerry: 2, MrPoopybutthole: 1 } },
            { text: "想养但不敢，还是怕麻烦...", scores: { Rick: 1, Morty: 3, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你的人生座右铭是什么？",
        options: [
            { text: "宇宙这么大，我想去看看", scores: { Rick: 4, Morty: 2, Summer: 3, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "平平淡淡才是真", scores: { Rick: 1, Morty: 3, Summer: 1, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } },
            { text: "活在当下，及时行乐", scores: { Rick: 2, Morty: 2, Summer: 4, Beth: 1, Jerry: 2, MrPoopybutthole: 3 } },
            { text: "天道酬勤，努力就会有回报", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 4, Jerry: 3, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你更喜欢什么样的社交方式？",
        options: [
            { text: "独来独往，一个人更自在", scores: { Rick: 4, Morty: 2, Summer: 1, Beth: 2, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "和最亲密的一两个朋友深度交流", scores: { Rick: 2, Morty: 4, Summer: 2, Beth: 3, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "参加各种派对，认识新朋友", scores: { Rick: 2, Morty: 1, Summer: 4, Beth: 1, Jerry: 2, MrPoopybutthole: 3 } },
            { text: "家庭聚会，和亲戚们聊聊天", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 3, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "面对未来，你最大的期待是？",
        options: [
            { text: "发现什么惊天大秘密，改变世界", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 3, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "找到一个真正懂我的人", scores: { Rick: 1, Morty: 4, Summer: 3, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "事业有成，成为别人羡慕的对象", scores: { Rick: 3, Morty: 1, Summer: 4, Beth: 3, Jerry: 2, MrPoopybutthole: 1 } },
            { text: "家庭幸福，孩子们健康成长", scores: { Rick: 1, Morty: 2, Summer: 2, Beth: 3, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "你认为解决冲突最好的方式是？",
        options: [
            { text: "直接干一架，谁拳头硬谁说了算", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "冷静下来好好沟通，互相理解", scores: { Rick: 2, Morty: 4, Summer: 2, Beth: 3, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "各退一步海阔天空，没必要争", scores: { Rick: 1, Morty: 3, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } },
            { text: "找个共同敌人，转移矛盾", scores: { Rick: 3, Morty: 2, Summer: 4, Beth: 2, Jerry: 1, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "如果你能改变世界的一件事，你会选择？",
        options: [
            { text: "让人类掌握无限能源，告别能源危机", scores: { Rick: 4, Morty: 2, Summer: 2, Beth: 4, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "消除所有的歧视和偏见", scores: { Rick: 2, Morty: 4, Summer: 3, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "让社交媒体消失，大家多见面", scores: { Rick: 2, Morty: 3, Summer: 1, Beth: 2, Jerry: 4, MrPoopybutthole: 2 } },
            { text: "给每个人发房发车，生活无忧", scores: { Rick: 2, Morty: 3, Summer: 3, Beth: 2, Jerry: 3, MrPoopybutthole: 2 } }
        ]
    },
    {
        question: "你在工作中的状态是？",
        options: [
            { text: "要么不做，要么做到极致", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 4, Jerry: 1, MrPoopybutthole: 2 } },
            { text: "勤勤恳恳，做好自己的本职工作", scores: { Rick: 1, Morty: 3, Summer: 2, Beth: 2, Jerry: 4, MrPoopybutthole: 1 } },
            { text: "摸鱼时间管理大师，上班也要快乐", scores: { Rick: 3, Morty: 2, Summer: 4, Beth: 1, Jerry: 2, MrPoopybutthole: 3 } },
            { text: "经常焦虑，担心做不好被批评", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 2, Jerry: 2, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "Smith 家突然空出一个座位，你会坐到谁旁边？",
        options: [
            { text: "瑞克旁边，顺便看看他又藏了什么发明", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 3, Jerry: 0, MrPoopybutthole: 2 } },
            { text: "莫提旁边，至少他会提醒我什么时候该跑", scores: { Rick: 1, Morty: 4, Summer: 2, Beth: 1, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "桑美旁边，离谱场面来了还能一起吐槽", scores: { Rick: 2, Morty: 2, Summer: 4, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "贝丝和杰瑞中间，我想先听听家长怎么说", scores: { Rick: 1, Morty: 2, Summer: 1, Beth: 4, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    },
    {
        question: "最后一个问题：你相信命运吗？",
        options: [
            { text: "命运？老子就是命运的主宰！", scores: { Rick: 4, Morty: 1, Summer: 2, Beth: 2, Jerry: 1, MrPoopybutthole: 3 } },
            { text: "不完全相信，但很多事情是注定的", scores: { Rick: 2, Morty: 4, Summer: 2, Beth: 3, Jerry: 3, MrPoopybutthole: 2 } },
            { text: "相信！我就是被命运眷顾的宠儿", scores: { Rick: 2, Morty: 2, Summer: 4, Beth: 2, Jerry: 2, MrPoopybutthole: 2 } },
            { text: "不太信，还是相信努力改变命运", scores: { Rick: 2, Morty: 2, Summer: 2, Beth: 4, Jerry: 4, MrPoopybutthole: 1 } }
        ]
    }
];

// ==================== 状态管理 ====================
let currentQuestion = 0;
let isAnswering = false;
let scores = {
    Rick: 0,
    Morty: 0,
    Summer: 0,
    Beth: 0,
    Jerry: 0,
    MrPoopybutthole: 0
};

// ==================== DOM 元素 ====================
const landingPage = document.getElementById('landing-page');
const quizPage = document.getElementById('quiz-page');
const loadingPage = document.getElementById('loading-page');
const resultPage = document.getElementById('result-page');
const progressBar = document.getElementById('progress');
const previewImage = document.getElementById('preview-image');
const previewName = document.getElementById('preview-name');
const previewLine = document.getElementById('preview-line');
const castChoices = document.querySelectorAll('.cast-choice');
const currentQuestionText = document.getElementById('current-q');
const totalQuestionsText = document.getElementById('total-q');
const questionNumber = document.getElementById('q-num');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const guideLabel = document.getElementById('guide-label');
const guideAvatar = document.getElementById('guide-avatar');
const guideName = document.getElementById('guide-name');
const guideLine = document.getElementById('guide-line');
const guideBubble = document.getElementById('guide-bubble');
const resultCharacterName = document.getElementById('result-character');
const resultImage = document.getElementById('result-image');
const resultPercentage = document.getElementById('result-percentage');
const resultDescription = document.getElementById('result-description');
const resultTraits = document.getElementById('result-traits');
const resultQuote = document.getElementById('result-quote');

function vibrate(pattern = 16) {
    navigator.vibrate?.(pattern);
}

function topCharacter(values) {
    return characterOrder.reduce((best, key) => values[key] > values[best] ? key : best);
}

function showCharacterPreview(characterKey) {
    const character = characters[characterKey];
    previewImage.src = character.image;
    previewImage.alt = character.displayName + '角色头像';
    previewName.textContent = character.displayName;
    previewLine.textContent = character.preview;

    castChoices.forEach(button => {
        const active = button.dataset.character === characterKey;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', active);
    });
}

function showGuide(characterKey, line, reacting = false) {
    const character = characters[characterKey];
    guideLabel.textContent = '本题旁听：' + character.displayName;
    guideAvatar.src = character.image;
    guideAvatar.alt = character.displayName + '角色头像';
    guideName.textContent = character.displayName;
    guideLine.textContent = line;
    guideBubble.classList.remove('reacting');
    if (reacting) guideBubble.classList.add('reacting');
}

// ==================== 页面切换 ====================
function showLandingPage() {
    landingPage.classList.remove('hidden');
    quizPage.classList.add('hidden');
    loadingPage.classList.add('hidden');
    resultPage.classList.add('hidden');
}

function showQuizPage() {
    landingPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    loadingPage.classList.add('hidden');
    resultPage.classList.add('hidden');
}

function showLoadingPage() {
    landingPage.classList.add('hidden');
    quizPage.classList.add('hidden');
    loadingPage.classList.remove('hidden');
    resultPage.classList.add('hidden');
}

function showResultPage(characterKey) {
    landingPage.classList.add('hidden');
    quizPage.classList.add('hidden');
    loadingPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    
    const character = characters[characterKey];
    const percentage = Math.round((scores[characterKey] / (questions.length * 4)) * 100);

    document.body.dataset.scene = String(characterOrder.indexOf(characterKey));
    
    resultCharacterName.textContent = character.name;
    resultImage.src = character.image;
    resultImage.alt = character.name + ' 角色头像';
    resultPercentage.textContent = percentage + '%';
    resultDescription.textContent = character.description;
    resultTraits.innerHTML = character.traits.map(trait => '<span class="trait-tag">' + trait + '</span>').join('');
    resultQuote.textContent = character.quote;
}

// ==================== 题目渲染 ====================
function renderQuestion() {
    const question = questions[currentQuestion];
    const visibleNumber = currentQuestion + 1;
    const guideKey = characterOrder[currentQuestion % characterOrder.length];
    const commentIndex = Math.floor(currentQuestion / characterOrder.length);

    isAnswering = false;
    document.body.dataset.scene = String(currentQuestion % characterOrder.length);
    showGuide(guideKey, characters[guideKey].comments[commentIndex]);
    questionText.textContent = question.question;
    currentQuestionText.textContent = visibleNumber;
    questionNumber.textContent = visibleNumber;
    totalQuestionsText.textContent = questions.length;
    progressBar.style.width = (visibleNumber / questions.length) * 100 + '%';
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.type = 'button';
        button.dataset.label = String.fromCharCode(65 + index);
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

// ==================== 选项选择 ====================
function selectOption(optionIndex) {
    if (isAnswering) return;
    isAnswering = true;
    vibrate(currentQuestion === questions.length - 1 ? [20, 30, 45] : 16);

    const question = questions[currentQuestion];
    const option = question.options[optionIndex];
    
    // 更新分数
    for (const [character, score] of Object.entries(option.scores)) {
        scores[character] += score;
    }

    const reactionKey = topCharacter(option.scores);
    document.body.dataset.scene = String(characterOrder.indexOf(reactionKey));
    showGuide(reactionKey, characters[reactionKey].reaction, true);
    
    // 禁用所有按钮
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
        if (idx === optionIndex) {
            btn.classList.add('selected');
        }
        btn.disabled = true;
    });
    
    // 延迟后进入下一题
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showLoadingPage();
            setTimeout(calculateResult, 1600);
        }
    }, 650);
}

// ==================== 计算结果 ====================
function calculateResult() {
    showResultPage(topCharacter(scores));
}

// ==================== 重新测试 ====================
function restartTest() {
    vibrate(20);
    currentQuestion = 0;
    isAnswering = false;
    scores = {
        Rick: 0,
        Morty: 0,
        Summer: 0,
        Beth: 0,
        Jerry: 0,
        MrPoopybutthole: 0
    };
    document.body.dataset.scene = '0';
    progressBar.style.width = '0%';
    currentQuestionText.textContent = '1';
    questionNumber.textContent = '1';
    showCharacterPreview('Rick');
    showLandingPage();
}

// ==================== 初始化 ====================
document.getElementById('start-btn').addEventListener('click', () => {
    vibrate(20);
    showQuizPage();
    renderQuestion();
});

document.getElementById('restart-btn').addEventListener('click', restartTest);

castChoices.forEach(button => {
    button.addEventListener('click', () => {
        vibrate(10);
        showCharacterPreview(button.dataset.character);
    });
});

// 初始化显示首页
showLandingPage();
