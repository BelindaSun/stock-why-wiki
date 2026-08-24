# 📈 Stock Why 维基 · 涨跌溯源

> **What is this? (English)** A self-growing investment knowledge graph, written in Chinese.
> Ask *"why did stock X move?"* and it traces the real catalyst, maps the **upstream** (what drives it)
> and **downstream** (what it affects) companies and industries, and saves each answer here — getting
> richer every time. Currently maps the full **AI-semiconductor supply chain**, from power generation to chips.
> 🧭 **Interactive graph:** https://belindasun.github.io/stock-why-wiki/ · Notes are in Chinese.

一个会**不断长大**的投资知识库：每次看到某只股票/资产涨跌，问一句"为什么"，就自动查清真实原因、画出它的**上游（谁影响它）**和**下游（它影响谁）**，并存进这里。问得越多，网织得越密。

> 🧭 **在线关系图** → https://belindasun.github.io/stock-why-wiki/
> 点节点看溯源、拖动整理布局、右上角有产业链「导览」。
>
> 目前有两张独立的图（互不相干）：
> - 🧭 **AI 半导体** → https://belindasun.github.io/stock-why-wiki/
> - 🧬 **生物医药** → https://belindasun.github.io/stock-why-wiki/graph-biotech.html

---

## 这是什么

不是股价预测工具，而是一台**因果地图机器**。它回答的不是"会不会涨"，而是"**这次涨跌的机制是什么、卡点在哪、钱流去了链条的哪一段**"。

由 Claude 的 [`stock-why`](skill/SKILL.md) skill 自动维护——在 Claude 里问一句，它就：
1. 联网查当天真实催化剂（区分"已确认" vs "可能因素"，查不到就如实说，不编）
2. 讲清因果链
3. 画出上下游公司/行业图谱
4. 存成 markdown、追加时间线、互相 `[[链接]]`

## 怎么读

| 想看什么 | 去哪 |
|---|---|
| 全部条目（最新在上） | [index.md](index.md) |
| 产业链导览（分层总览） | [overview.md](overview.md) |
| 单只资产的溯源 + 时间线 | [stocks/](stocks/) |
| 行业/主题 | [industries/](industries/) |
| 交互关系图（在线） | https://belindasun.github.io/stock-why-wiki/ |

## 目前覆盖

一条完整的 **AI 半导体产业链**（从发电到芯片）：
发电(GEV) → 供电散热(VRT) → 服务器(SMCI/DELL) → 芯片(NVDA/AMD/CBRS) ← HBM 内存(MU/SKHY/SSNLF) ← 代工(TSM) ← 光刻设备(ASML)，外加板块 ETF(SMH)。
另有一颗生物医药的种子：Moderna(MRNA)。

## 它是怎么长大的

每问一只新票，就多一份档案、多几条连线。GitHub 的提交历史会记录每一次增长——就像看着它一天天变厚。

---

_本仓库由 [Claude Code](https://claude.com/claude-code) 的 stock-why skill 自动维护。内容为个人研究记录，非投资建议。_
