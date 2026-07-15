// Rick and Morty Personality Quiz - Script

// ==================== 角色数据 ====================
const characters = {
    Rick: {
        name: "Rick Sanchez (瑞克)",
        traits: ["天才", "反叛", "理性", "冒险"],
        description: "你就是Rick Sanchez——全宇宙最聪明的科学家！你对无聊的社交毫无耐心，整天泡在车库里搞些疯狂的实验。对你来说，多重宇宙就是你的游乐场，死亡不过是换个维度继续玩。你的口头禅\"Wubba Lubba Dub Dub!\"已经成为你人生哲学的最佳注脚。你不在乎别人的眼光，因为99%的宇宙里你都是最酷的那个。科学万能，但酒精也是万能的——两者结合才是完美人生！"
    },
    Morty: {
        name: "Morty Smith (莫提)",
        traits: ["平庸", "顺从", "感性", "安稳"],
        description: "你是Morty Smith——那个总被Rick拖着冒险的可怜孩子。别看你总是紧张兮兮、畏畏缩缩的样子，其实你有着最善良的心和最强烈的道德感。你会在冒险途中担心每一个外星生物的安危，会为了帮助一个刚认识的朋友而冒险。你可能不是最聪明的，但你绝对是最有同情心的。在这个疯狂的多元宇宙里，你的'正常人'视角反而是最珍贵的存在！"
    },
    Summer: {
        name: "Summer (桑美)",
        traits: ["平庸", "反叛", "感性", "冒险"],
        description: "你是Summer——Morty的姐姐，一个典型的青少年！你追求潮流、关注社交媒体、渴望被认可，但内心深处其实有着比表面上更酷的一面。你会为了跟上潮流而冒险，也会在关键时刻爆发出惊人的勇气。你可能就是那种嘴上说着不在乎、心里却很在意一切的傲娇女孩。别担心，你的人气和你的冒险精神一样旺盛！"
    },
    Beth: {
        name: "Beth Sanchez (贝丝)",
        traits: ["天才", "顺从", "理性", "安稳"],
        description: "你是Beth Sanchez——Rick的女儿，一个心外科兽医！表面上你是个专业的兽医，梦想着能像父亲一样做更伟大的手术。但内心深处，你总是在纠结自己是不是真的值得被爱，是不是父亲的一个克隆体。你努力维持着看似完美的家庭生活，内心却渴望更多的冒险。别再纠结了，你就是你，独一无二的贝丝！"
    },
    Jerry: {
        name: "Jerry Smith (杰瑞)",
        traits: ["平庸", "顺从", "感性", "安稳"],
        description: "你是Jerry Smith——这个家里永远的loser，老爸老妈的出气筒。你没什么大本事，找工作总是碰壁，照顾孩子也是一团糟。但知道吗？正是你的'普通'让这个家庭保持正常运转。你会在家人需要时默默支持，会为了证明自己而努力（虽然总是失败）。也许你不是最成功的，但你绝对是最忠诚的家庭成员！加油Jerry，你可以的！"
    },
    MrPoopybutthole: {
        name: "Mr. Poopybutthole (屎洞先生)",
        traits: ["天才", "反叛", "感性", "冒险"],
        description: "你是Mr. Poopybutthole——那个住在Rick家里、偶尔出现的黄色小生物！你看起来人畜无害，其实经历比你看起来复杂得多。你来自另一个维度，靠着被Rick'收养'混进了这个家庭。你会弹钢琴、会唱歌、会在关键时刻用你独特的方式帮助大家。也许你看起来有点...呃...傻傻的，但你的存在本身就是对常规的一种挑战！"
    }
};

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
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultCharacter = document.getElementById('result-character');
const resultPercentage = document.getElementById('result-percentage');
const resultDescription = document.getElementById('result-description');
const resultTraits = document.getElementById('result-traits');

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
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentage = totalScore > 0 ? Math.round((scores[characterKey] / totalScore) * 100) : 0;
    
    resultCharacter.textContent = character.name;
    resultPercentage.textContent = percentage + '%';
    resultDescription.textContent = character.description;
    resultTraits.innerHTML = character.traits.map(trait => '<span class="trait-tag">' + trait + '</span>').join('');
}

// ==================== 题目渲染 ====================
function renderQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    
    progressBar.style.width = ((currentQuestion + 1) / questions.length) * 100 + '%';
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

// ==================== 选项选择 ====================
function selectOption(optionIndex) {
    const question = questions[currentQuestion];
    const option = question.options[optionIndex];
    
    // 更新分数
    for (const [character, score] of Object.entries(option.scores)) {
        scores[character] += score;
    }
    
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
            setTimeout(calculateResult, 2500);
        }
    }, 400);
}

// ==================== 计算结果 ====================
function calculateResult() {
    let maxScore = 0;
    let resultCharacter = 'Morty';
    
    for (const [character, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultCharacter = character;
        }
    }
    
    showResultPage(resultCharacter);
}

// ==================== 重新测试 ====================
function restartTest() {
    currentQuestion = 0;
    scores = {
        Rick: 0,
        Morty: 0,
        Summer: 0,
        Beth: 0,
        Jerry: 0,
        MrPoopybutthole: 0
    };
    showLandingPage();
}

// ==================== 初始化 ====================
document.getElementById('start-btn').addEventListener('click', () => {
    showQuizPage();
    renderQuestion();
});

document.getElementById('restart-btn').addEventListener('click', restartTest);

// 初始化显示首页
showLandingPage();
