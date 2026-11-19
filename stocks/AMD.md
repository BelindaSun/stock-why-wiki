# AMD — Advanced Micro Devices
_Asset type: stock (NASDAQ)_ · _Last updated: 2026-11-19_

CPU + GPU 双线厂商,AI 加速器(Instinct MI 系列)是 [[NVDA]] 在训练/推理市场的头号挑战者。2026 年 AI 概念龙头之一,估值随之被推到极高。

## Upstream — what drives it
- [[TSM]] 台积电 — MI 系列 GPU 与 EPYC/Ryzen 全靠台积电先进制程代工,产能/良率是物理约束
- AI agent 负载叙事(Meta Muse) — agent 常驻后台、多任务并行,推理算力需求被重估,是 9/21 万亿行情的直接叙事源(见 2026-09-22 条目)
- HBM 高带宽内存 — AI 加速器性能与成本的关键瓶颈,供给来自 SK海力士/三星/美光
- 先进封装(CoWoS) — 与 [[NVDA]] 抢同一批封装产能
- AI 资本开支周期 — 云厂商(超大规模数据中心)的 capex 意愿决定 MI 订单

## Downstream — what it affects
- 云厂商客户 — Microsoft/Meta/OpenAI/Oracle 采用其 Helios AI 机架系统
- [[ANTHROPIC]] — 7/22 战略合作:至多 2GW MI450(Helios)+ 至多 $50 亿股权投资(IPO 私募配售已落 $25 亿),Anthropic 采购额可 >$200 亿;上市前一度是其"代理票"
- [[NVDA]] 英伟达 — 直接竞争对手,两者常同涨同跌(AI 芯片贝塔),但客户流向此消彼长
- [[CBRS]] Cerebras 等推理新贵 — 同抢推理市场,AMD 收购 Taalas 强化推理
- PC/服务器 CPU 市场 — EPYC 抢 Intel 份额,是其"非 AI"稳定盘

## Related industries / themes
- [[industry:ai-infrastructure]] — 加速但估值敏感度飙升:市场开始担心"AI 是否超支"
- [[industry:semiconductors]] — 强势但高分化,高估值个股对任何瑕疵零容忍

---
## Timeline (newest first)

## 2026-11-19 — 做空报告狙击:固件流入实体清单企业的指控,盘中一度 -11.2%
**Move:** 昨收 $530.14(11-18 +5.31%);今开 $542、最高 **$555(+4.7%)**;美东 10:27 Hunterbrook 报告发布时股价约 $530,半小时内最低 **$470.56(-11.2%)**,收盘 **$489.19(-7.72%)**
**Catalyst confidence:** confirmed(报告发布与价格反应:Reuters 等多源);指控本身 **未证实**(报告方自认不知代码来源与许可情况,Reuters 无法独立核实,AMD 当日已回应否认)

**What happened:**
- **指控(报告《AMD 也有自己的中国问题》,Hunterbrook Media,其基金 Hunterbrook Capital 已公开做空 AMD):** ① [[industry:china-tech]] 浪潮旗下 IEIT Systems(2025 年 3 月被列入美国实体清单)此后仍把至少 **6 个新版 AMD 启动固件**做进 BIOS 更新,最新一版 2026-10-19 发布(Turin EPYC 平台);② 与 IEIT 关系密切的三家销售商(中国 Maginfra、新加坡 Kaytus、加州 Aivres)的固件与 IEIT **99.94% 相同**,疑似换牌销售 IEIT 设计的服务器——而 Aivres 是 AMD 官网列名的 Instinct 服务器伙伴;③ AMD 2025 年有 $6,700 万许可收入来自两家 2019 年已被列清单的中国芯片合资企业。中国占 AMD FY2025 收入 22.4%($77.5 亿,按账单地口径)。
- **报告的自我限定:** 不知道 IEIT 如何获得代码、是否有许可允许,明言其发现**不构成** AMD 违反出口管制的认定。杀伤力不在坐实,在框架。
- **AMD 当日回应(否认):** AMD 向 Bloomberg 表示指控"歪曲"(misrepresent)其业务与关系,称遵守美国出口管制法并有严格合规流程;WSJ 同日报 AMD 发言人同样表态。指控仍未证实,无监管跟进。
- **为什么跌这么狠——位置与时点:** 11 月 AMD 是全场最热的票之一:黄仁勋离职引发的资金轮动 + Anthropic 上市"代理票"叙事,11 月上旬五日约 +45%(据 Finwire),远期 PE 约 30 倍([[NVDA]] 约 10 倍,LSEG 口径);今早又摸高 $555。ANT 首日指示价约 $99.82 不及灰市预期,代理票本就在"卖事实"模式里,报告正好在最高点引爆。
- **基本面背景(非本次催化):** Q3 营收 $134 亿创纪录(+45%),数据中心 $85.5 亿(+97%);与 [[ANTHROPIC]] 的 2GW MI450 合作(7/22)与 $25 亿 IPO 配售刚落地。

**Causal chain:**
1. 指控把 AMD 拖进与 NVDA 同类的"中国问题"框架 → AMD 此前被当作相对干净的替代选项,这个相对叙事被打破,是跌幅的核心
2. 固件是 EPYC 服务器生态的底层:若商务部跟进,敞口不止 AI GPU,还包括服务器 CPU 基本盘 + 三家明面销售商,比单一产品线大
3. 高位 + 利空突袭放大波动:两日摸高 $555、估值容错极低,半小时 -11% 是拥挤交易的踩踏形态
4. ANT 靴子落地 → 代理票 sell-the-news 与做空报告叠加,买盘当天缺席
5. 接下来裁判:AMD 已回应否认,商务部是否表态、IEIT 更新是否继续 — 无监管跟进则属"指控定价"(历史上多为买入机会侧),有跟进则升级为基本面事件

**Sources:**
- [Reuters: AMD shares slide as report says China links could invite US scrutiny](https://www.reuters.com/world/china/amd-shares-slide-report-says-china-links-could-invite-us-scrutiny-2026-11-19/)
- [AIStockWire: AMD stock falls on Hunterbrook short](https://aistockwire.com/blog/amd-stock-falls-hunterbrook-short-ieit-china-firmware-blacklist-november-2026)
- [OfficeChai: AMD shares fall over 9% after Hunterbrook report](https://officechai.com/ai/amd-shares-fall-over-9-after-short-seller-hunterbrook-says-its-firmware-keeps-turning-up-at-a-blacklisted-chinese-server-maker/)
- [TipRanks/The Fly: AMD says Hunterbrook report misrepresents practices, Bloomberg reports](https://www.tipranks.com/news/the-fly/amd-says-hunterbrook-report-misrepresents-practices-bloomberg-reports-thefly-news) · [WSJ: AMD sheds $67 billion as Anthropic debuts](https://www.wsj.com/livecoverage/anthropic-ipo-stock-market-today-11-19-2026/card/amd-sheds-67-billion-as-anthropic-debuts-kcfCndmmwbmDF1H0hhoD)

## 2026-09-22 — 首破万亿:AI 硬件全线重估,"第二供货源"叙事兑现
**Move:** 美东 9/21 +9.9% 收 $615.52(盘中最高 $616.69),市值史上首次突破 $1 万亿;五连涨约 +25%;年内约 +177~185%(日期按"市场反应日"记:美东 9/21 收盘对应北京 9/22,延用 9/17 FOMC 条目的北京口径)
**Catalyst confidence:** confirmed(路透/Morningstar/Dow Jones Market Data)

**What happened:**
这次没有单一 headline 催化,是 AI 硬件的一次整体重估。直接导火索是 Meta 的 Muse(一周 50 万用户)让市场重新理解算力需求:Mizuho 分析师称 AI agent 掀起芯片和网络股的"全面抢购"(full-blown feeding frenzy)——agent 在后台持续运行、多任务并行,"算力含义远大于简单的聊天机器人查询"。AMD 被市场从"英伟达的遥远追随者"重估为"算力的真正第二供货源"。基本面也在配合:Q2 营收 $11.54B(+50%),数据中心 $6.7B(+107%)成增长引擎;CEO 称 2027 年数据中心销售额翻倍。当天 [[INTC]] +12%、ARM +17%、费半 +4.29%,全板块共振。AMD 成为第四家**美国**万亿芯片公司([[NVDA]]/博通/[[MU]]之后;台积电同为万亿芯片公司但为台企,不计入"美国"口径);一年前市值仅约 $2550 亿。

**Causal chain:**
1. Muse 等 agent 型 AI 爆发 → 市场意识到持续运行型负载的算力需求远大于聊天机器人时代
2. AI 硬件整体被重估 → 芯片股普涨,资金寻找"NVDA 之外的敞口"
3. AMD 数据中心 +107%,"第二供货源"叙事被验证 → 从高贝塔跟随者升级为独立主线
4. 里程碑效应自我强化 → $1 万亿整数关口突破,动量资金接力

**注:** 与 8/24 那条"情绪杀"正好镜像——当时是"涨太多+预期太满"的均值回归,这次是叙事从"AI 是否超支"的怀疑转向"agent 算力新周期"的确信。SpaceX 转投 NVDA 的客户流失担忧暂时被搁置,但并未消失。

**Sources:**
- [Reuters: AMD becomes latest chipmaker to reach $1 trillion valuation](https://www.reuters.com/business/amd-becomes-latest-chipmaker-reach-1-trillion-valuation-ai-demand-2026-09-21/)
- [Morningstar: AMD hits a major milestone as AI stocks blaze higher](https://www.morningstar.com/news/marketwatch/2026092197/amd-hits-a-major-milestone-as-ai-stocks-blaze-higher)
- [Notebookcheck: AMD joins the $1 trillion club](https://www.notebookcheck.net/AMD-joins-the-1-trillion-club-leaving-Intel-behind.1404984.0.html)

## 2026-08-24 — 一个月狂跌:AI 交易降温 + 客户流失 + 高估值获利了结
**Move:** 7 月单月 -18%(月末一周 -10%);8 月初财报后继续下杀,跌破 $500 关口;费半三日创 3 月以来最大跌幅
**Catalyst confidence:** confirmed(财报/客户新闻)+ likely(估值/宏观)

**What happened:**
AMD 不是暴雷,而是"涨太多 + 预期太满"后的均值回归。年内一度 +126%、TTM 市盈率高达 ~123 倍(行业均值仅 ~35),把增长完美定价。7-8 月接连遇到:AI 是否超支的担忧、马斯克宣布 SpaceX 只买 [[NVDA]] 芯片(客户流失信号)、DeepSeek 传自研 AI 芯片(潜在去 AMD/NVDA 化)、7/22 Advancing AI 大会没给出足够的"近期变现惊喜"、8 月初 Q2 虽超预期(营收 +50% 到 $11.5B)但被"买预期卖事实"砸盘。叠加美债收益率上行、宏观不确定,高贝塔芯片股首当其冲。

**Causal chain:**
1. 年内 +126%、市盈率 ~123x → 完美定价,任何瑕疵都被放大
2. AI 超支担忧 + 收益率上行 → 高估值成长股估值端(分母)承压,板块性杀估值
3. SpaceX 转向只买 NVDA + DeepSeek 传自研芯片 → 直接打击"AMD 抢份额"的核心叙事,客户集中/流失风险重定价
4. 7/22 大会利好不及预期 + 8 月财报超预期仍下跌 → "买预期卖事实",高预期无法被满足
5. 费半三日暴跌(3 月来最大)→ 板块贝塔踩踏,AMD 作为高贝塔龙头跌幅放大

**注:** 期间也有利好被忽视——拿下 Microsoft 为 Helios 新客户(加入 Meta/OpenAI/Oracle)、收购推理专家 Taalas。说明这波是"情绪+估值"杀,不是基本面崩。

**Sources:**
- [Motley Fool: Why AMD tumbled 18% in July](https://www.fool.com/investing/2026/08/10/why-amd-stock-tumbled-18-in-july/)
- [Motley Fool: Why AMD dropped today (Aug 5)](https://www.fool.com/investing/2026/08/05/why-amd-stock-dropped-today/)
- [Intellectia: AMD shares drop as major customer shifts to rival](https://intellectia.ai/news/stock/amd-shares-drop-as-major-customer-shifts-to-rival-for-ai-chips)
- [Benzinga: AMD falling ahead of August earnings](https://www.benzinga.com/trading-ideas/movers/26/07/60731189/amd-stock-drops-why-chipmaker-shares-are-falling-ahead-of-august-earnings)
- [CNBC: AMD Helios, Microsoft joins as buyer](https://www.cnbc.com/2026/07/20/amd-helios-microsoft-ai-nvidia.html)
- [Invezz: AMD slips even as it acquires Taalas](https://invezz.com/news/2026/08/07/amd-stock-slips-even-as-it-makes-an-acquisition-to-compete-with-nvidia/)
