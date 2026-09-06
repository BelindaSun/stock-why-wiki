# NVDA — NVIDIA Corporation
_Asset type: stock_ · _Last updated: 2026-09-06_

## Upstream — what drives it
- [[TSM]] 台积电 — 独家代工 Nvidia 先进制程 GPU，产能/良率直接决定供给
- [[SK Hynix]] / [[MU]] 美光 — HBM 高带宽内存是 AI 芯片瓶颈，供给紧张则限制出货
- AI 资本开支（大客户 [[MSFT]] [[GOOGL]] [[AMZN]] [[META]]）— 云厂商的 capex 就是 Nvidia 的订单簿
- [[ASML]] — 光刻设备，决定整个先进制程产能的上限

## Downstream — what it affects
- [[SMCI]] / [[DELL]] — AI 服务器组装厂，靠 Nvidia GPU 出货
- [[AMD]] — 直接竞争对手，常与 NVDA 同向或对冲波动
- 电力/电网设备（[[ETN]] [[GEV]]）— GPU 集群拉动数据中心用电，间接下游
- [[SMH]] / [[SOXX]] 半导体 ETF — NVDA 权重大，其涨跌带动整个板块
- Hugging Face（拟收购,~$130亿,2026-09）— 开源模型分发平台;NVDA 向上吃到"开发者入口/模型分发"层,超出纯硬件

## Related industries / themes
- [[industry:ai-infrastructure]] — 加速，订单簿 2026–2027 已达 $1T
- [[industry:macro-rates]] — 利率是其高估值的"分母",收益率回落对其估值端利好
- [[industry:semiconductors]] — 强势，费城半导体指数今年 +63%（NVDA 仅 +21%，跑输板块）

---
## Timeline (newest first)

## 2026-09-03 — 斥资 ~$130 亿收购 Hugging Face:从"卖铲子"向上吃到模型分发层
**Move:** 9/2 签署 definitive agreement,9/3 确认;非纯价格事件,属重大战略 M&A
**Catalyst confidence:** confirmed(公司公告/8-K)

**What happened:** Nvidia 同意以约 **$129 亿**(现金付股东)+ **$10 亿**留才股权收购 **Hugging Face**——全球最大的开源 AI 模型/数据集社区平台(1800 万+ 开发者、300 万+ 模型、50 万+ 数据集)。预计 2027 上半年完成。这是 Nvidia 第二大收购(仅次于去年约 $200 亿的 Groq 资产)。承诺保持平台开放、继续支持其他芯片厂商。

**为什么重要(战略含义 > 短期股价):**
Nvidia 一直是"卖铲子"的(GPU + CUDA),这笔收购是它**向上游吃到"模型分发 + 开发者生态"层**的一步——从卖硬件,到掌握开发者从哪里下载、部署模型的入口。

**Causal chain:**
1. AI 竞争的下一层是"开发者心智 + 模型分发",而非只是算力
2. Hugging Face 是开源模型事实上的"应用商店"/中立枢纽 → 谁拥有它,谁就握住开发者入口
3. Nvidia 收购它 → CUDA(底层)+ Hugging Face(分发)双护城河,把生态锁得更深
4. 承诺"保持开放、支持他厂芯片" → 既安抚社区,又降低反垄断阻力(否则中立枢纽被芯片龙头收购必遭审查)

**值得盯的张力:**
- **中立性 vs 归属**:Hugging Face 的价值来自"中立",被最大芯片商收购后,竞品([[AMD]]/[[AVGO]] 客户)会不会担心被边缘化?开放承诺能否兑现是关键
- **反垄断**:一个"卖铲人"收购"开发者入口",大概率引来监管审查(参考它对 [[GOOGL]] 反垄断的观察)
- **对模型层的微妙关系**:更贴近 [[OPENAI]]/[[ANTHROPIC]] 所在的模型分发层,合作与竞争的边界变模糊

**Sources:** [NVIDIA Blog: NVIDIA to Acquire Hugging Face](https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/) · [CNBC: Nvidia agrees to buy Hugging Face for almost $13B](https://www.cnbc.com/2026/09/03/nvidia-agrees-to-buy-hugging-face-for-almost-13-billion-ai-expansion.html) · [Bloomberg: Nvidia acquires Hugging Face for ~$13B](https://www.bloomberg.com/news/articles/2026-09-03/nvidia-agrees-to-13-billion-deal-for-ai-platform-hugging-face) · [SEC 8-K (NVDA, 2026-09-02)](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000078/nvda-20260902.htm)

## 2026-08-27 — 财报炸裂,股价跳涨:悬念揭晓,前跌后涨
**Move:** 8/26 盘后财报后,8/27 股价涨约 6%,单日市值 +约 $4400 亿;收于约 $210(仍低于 5 月高点 $236)
**Catalyst confidence:** confirmed(财报)

**What happened:** 接上一条"财报前观望性回调"——悬念揭晓,结果远超预期,资金回补。Q2(截至 7/26)营收 **$962 亿(同比 +106%)**,数据中心创纪录 **$890 亿(+117%)**,均超预期。但真正引爆的是**指引**:Q3 指引 $1080 亿(超共识),且喊出 2027 日历年**约 +70% 增长**(近乎分析师预期的两倍),靠 Vera Rubin 平台(已满产、称史上最快 ramp)。这打破了它此前连续 4 个季度"财报后即跌"的魔咒。

**Causal chain:**
1. 财报前市场担忧 AI 需求见顶 → 观望减仓(上一条)
2. 实际数据中心 +117%、Vera Rubin 获所有超大厂订单 → 证伪"见顶"叙事
3. 2027 年 +70% 增长指引 → 把 AI 需求可见度大幅拉长,重定价整个 AI 交易
4. 作为全图中心节点 → NVDA 跳涨带动 [[SMH]] 板块 + 存储/电力/服务器全链情绪
**值得注意:** 财报同时有"内存成本压毛利"的小瑕疵——管理层指引毛利率将从本季约 75% 探底至 FY27 Q4 的 **71-72%**;但被 70% 增长指引完全盖过。另一个信号:对上游的**供给承诺翻倍到约 $2790 亿**(锁定产能)。这印证了本 wiki 的一条主线——市场此刻仍在奖励"确定性",而 NVDA 给出了最强的需求可见度。
**盯的变量(供投资记录):** 毛利率探底 71-72% 是否如期企稳、Vera Rubin ramp 速度、供给承诺兑现。
**Sources:** [Fortune: Nvidia doubles Q2 revenue to $96B](https://fortune.com/2026/08/26/nvidia-results-q2-earnings/) · [CNBC: Nvidia adds $400B+ after blowout earnings](https://www.cnbc.com/2026/08/27/nvidia-nvda-q2-earnings.html) · [CNBC: Huang forecasts 70% FY2028 growth](https://www.cnbc.com/2026/08/26/nvidia-nvda-earnings-report-q2-2027-live-updates.html) · [24/7 Wall St: NVDA surges 6% on 70% growth forecast](https://247wallst.com/investing/2026/08/27/nvidia-surges-6-as-a-70-growth-forecast-overrides-a-memory-margin-warning-amd-and-intel-tick-up/)

## 2026-08-23 — 财报前连续回调，非利空驱动
**Move:** 连跌 6 天，10 日内约 -4.13%（8/21 当日 -0.98%）  ·  **Catalyst confidence:** confirmed（时点明确）
**What happened:** 这不是坏消息导致的下跌，而是**财报前的观望性回调**。Nvidia 将于 8/26 盘后公布 FY2027 Q2（截至 7/26）业绩，市场在等这份"AI 风向标"给出 AI 需求的确认，落地前资金倾向减仓避险。
**Causal chain:**
1. Q2 财报临近（8/26）→ 2. 结果不确定、被视为整个 AI 交易的定调时刻 → 3. 短线资金财报前降风险 → 4. 连续几日温和下滑（属波动，非趋势反转）
**值得注意的背景:** 今年 NVDA +21% 明显跑输费城半导体指数 +63%，即板块强、个股弱；分析师预期本季 EPS 约 $2.35（同比 +80%），Vera Rubin 芯片下半年出货，2026–2027 订单簿约 $1T。
**Sources:** [Motley Fool 8/21](https://www.fool.com/investing/2026/08/21/prediction-nvidia-stock-will-go-parabolic-after-aug-26-here-are-2-3-trillion-reasons-why/) · [StockInvest NVDA](https://stockinvest.us/stock/NVDA)
