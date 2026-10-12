# HUAWEI — 华为昇腾 Ascend
_Asset type: 未上市 private entity（关联实体口径：无股价，以出货/算力合约/公司声明记）_ · _Last updated: 2026-10-12_

华为自研 AI 芯片（昇腾系列：910/950DT/960DT 路线图）。**上市状态：未上市**——华为由员工持股会控股，从未上市、无公开财报、无招股书（公开事实，已核实）。国产 AI 芯片"两极"的另一极（对寒武纪）。

**驱动:** 国产替代(主)· 本土 AI 需求(次)

## 在图中的角色
昇腾升为实心节点的依据是三条线，各自口径如下：
1. **在华份额竞争（公司声明）**：徐直军 2026-09-17 称在华超过英伟达（销售额/份额各家表述不一，未给数字）——国产替代链条 AI 芯片供给侧"另一极"身份成立。
2. **价格信号（据报道）**：Reuters 2026-09-10 报道 950DT 涨价（主因 HBM 短缺）——供给紧俏的间接证据，非干净的需求议价权。
3. **本土 AI 需求锚（据报道）**：Bloomberg 2026-09-04 报道 DeepSeek 规划 ≥16 万片 950DT（推理用）——"本土 AI 需求"次驱动的实例。

**口径声明**：三条线都不是独立来源，而是公司声明加匿名信源报道。节点表达的是因果角色，不是事实断言。

**回看触发条件**：950DT 实际供货（Q4 2026）后、或出现独立第三方份额数据时，回头重核 `HUAWEI→NVDA`（"在华份额竞争"）与 `HUAWEI→LOCAL`（"DeepSeek 推理需求"）两条边的标签。

## Upstream — what drives it
- 代工 — [[688981.SS]] 中芯国际（据报道 Ascend 950 系列用 N+3 工艺，TrendForce 引 eastmoney 2026-04、TechTimes 2026-09）；先进制程产能与良率是出货上限
- HBM 供给 — HBM 短缺是 950DT 涨价的主因（据报道），也是交付节奏的约束
- 美国出口管制（实体清单）— "国产替代"需求的来源；NVDA 对华出口越紧，昇腾越刚需
- 本土 AI 需求 — DeepSeek 等国内大模型的推理需求（据报道）；训练据报道仍在英伟达

## Downstream — what it affects
- [[688256.SS]] 寒武纪 — 国产 AI 芯片两极的另一极；在华份额竞争（华为口径，未独立核实）
- [[NVDA]] 英伟达 — 在华份额竞争（华为口径）；出口管制是替代需求的开关
- 本土 AI 产业链 — 国产算力供给侧（推理为主）

## Related industries / themes
- [[industry:china-tech]] — 国产替代链条里"AI 芯片"这一环
- [[industry:ai-infrastructure]] — 全球 AI 算力的中国平行供给

---
## Timeline (newest first)

> 口径分级：**公司声明** = 华为官方口径，未独立核实；**据报道** = 匿名信源/单家媒体，未经双方确认；**已核实** = 多方交叉或公开可查。

## 2026-09-30 — DeepSeek 开源 Ascend 工具链（已核实，部分支持）
**口径:** 已核实（DeepSeek 官方微信 9-30 发文 + GitHub 可查；独立验证有瑕疵，见注）
**What happened:** 9-29/30 两日，DeepSeek 与华为联合发布开源 Ascend 编程工具：TileLang-Ascend、DeepGEMM-Ascend、DeepEP-Ascend 及三个已有项目的 Ascend 更新；双方共建 128 卡 Ascend 950 超节点（开发中）。
**注:** FourWeekMBA 核查：实际为 2 个新 repo + 3 个已有项目更新（媒体"六个模块"说法不实）；DeepEP-Ascend 带宽数据来自 proof-of-concept HDK（非公开分发版本）；Atlas 850E 商用固件按厂商计划约 2026-10-15 发布。

## 2026-09-21 — The Information：梁文锋称国产芯片训练是重大优先级（据报道，前瞻）
**口径:** 据报道（The Information 引述，梁文锋对投资者表述；TrendForce 9-23 有同向跟进）
**What happened:** DeepSeek CEO 梁文锋对投资者称国产芯片训练是重大优先级；华为训练芯片交付预计 Q4 2026 开始、延续至 Q1 2027。背景：此前 Ascend 910C 训练尝试失败（稳定性/互联/软件工具链，华为工程师曾驻场），DeepSeek 转回英伟达——这是第二轮尝试。
**注:** 交付尚未发生，属 forward-looking。

## 2026-09-17 — 徐直军称在华超过英伟达（销售额/份额，各家表述不一）（公司声明）
**口径:** 公司声明（华为 Connect Q&A 实录；各家转述口径不一，见注）
**What happened:** 华为轮值董事长徐直军在 Connect 大会后的媒体 Q&A 表示："It's pretty hard to collect data about the market share of Nvidia in China, but based on the data we have collected, Ascend has surpassed Nvidia."（The Register 9-30 引实录原话）
**注:** SCMP 写的是"市场份额"（market share），Gizmochina 标题写的是"sales"（销售额）；徐直军本人未给具体数字。"50% vs 8%"（Gelonghui 经 Futu）未证实——数字一律不用。

## 2026-09-10 — Reuters：950DT 报价涨至 ¥25 万以上（据报道，主因 HBM 短缺）
**口径:** 据报道（Reuters 9-10 独家，三名匿名知情人；华为未确认）
**What happened:** Ascend 950DT 指导价涨至 25 万元以上，较两个月前 +20–50%（视合同条款）；报道将原因归于 HBM 短缺；950DT Q4 供货。寒武纪 690、MetaX、燧原亦有同向调价。
**注:** 这更像成本和供给推高，不是干净的需求议价权证据。

## 2026-09-04 — Bloomberg：DeepSeek 规划 ≥16 万片 950DT（据报道，用于推理）
**口径:** 据报道（Bloomberg 9-4，三名知情人；双方均未确认）
**What happened:** DeepSeek 规划在乌兰察布 ~1GW 数据中心部署至少 16 万片 Ascend 950DT，**用于推理**；训练据报道仍在英伟达；多数产能到 2027 年底至 2028 年初，首批最早 Q4。
**注:** 写"推理需求（据报道）"，不写"训练搭载"。

## 2026-06-09 — 发改委 2 万亿智算计划（草案阶段，据报道）
**口径:** 据报道（Bloomberg 2026-06-09；8、9 月仍称草案）
**What happened:** 发改委牵头起草 5 年约 2 万亿元全国智算计划，要求 ≥80% 核心技术国产、华为被举例；2026-10 前未见执行或官方采购名单。

## Sources
- [The Register 2026-09-30：徐直军实录原话（market share 表述）](https://www.theregister.com/systems/2026/09/30/huawei-boss-claims-homegrown-ai-chip-sales-top-nvidia-in-china/5300266)
- [TrendForce 2026-10-07：徐直军表述跟进（via ijiwei）](https://www.trendforce.com/news/2026/10/07/news-huawei-says-ascend-market-share-has-surpassed-nvidia-in-china-backs-npo-over-cpo-for-optical-interconnects/)
- [Gizmochina 2026-10-08：徐直军表述跟进（sales 表述）](https://www.gizmochina.com/2026/10/08/huaweis-ai-chips-have-overtaken-nvidias-sales-in-china-a-meaningful-step-toward-building-a-homegrown-alternative/)
- [oossa.com：徐直军表述（market share）](https://www.oossa.com/en/huawei-says-its-ascend-chips-have-overtaken-nvidia-in-china)
- [Reuters 2026-09-10 via srnnews：950DT 涨价独家](https://srnnews.com/exclusive-chinas-ai-chipmakers-raise-prices-as-high-bandwidth-memory-shortage-bites/)
- [Reuters 2026-09-10 via Yahoo：950DT 涨价独家](https://y.gogonow.de/finance.yahoo.com/technology/ai/articles/exclusive-chinas-ai-chipmakers-raise-050223278.html)
- [TechTimes 2026-09-05：DeepSeek 16 万片（via Bloomberg 9-4）](https://www.techtimes.com/articles/326755/20260905/deepseeks-160000-chip-huawei-order-puts-prc-law-over-every-api-query.htm)
- [aistockwire：DeepSeek 16 万片（via Bloomberg 9-4）](https://aistockwire.com/blog/deepseek-160000-huawei-ascend-950dt-inner-mongolia-nvda-september-2026)
- [bbntimes：DeepSeek 16 万片（via Bloomberg 9-4）](https://www.bbntimes.com/technology/deepseek-plans-160-000-huawei-chips-for-a-1-gw-data-center)
- [SCMP 2026-09-30 via aichina.news：DeepSeek 开源 Ascend 工具（官方微信发文）](https://aichina.news/news/chinas-deepseek-open-sources-tools-to-help-huawei-chips-supplant-tlmtld/)
- [GitHub tile-ai/tilelang-ascend：Ascend 适配仓库](https://github.com/tile-ai/tilelang-ascend)
- [genztech.blog：deepseek-ai/DeepGEMM-Ascend、DeepEP-Ascend（9-29/30 建库）](https://genztech.blog/p/deepseek-huawei-ascend-tilelang-cuda-alternative/)
- [TrendForce 2026-09-23：DeepSeek 传扩大华为芯片训练用途（via The Information 同向）](https://www.trendforce.com/news/2026/09/23/news-deepseek-reportedly-expands-huawei-chips-to-ai-training-new-supply-could-arrive-in-4q26/)
- [TrendForce 2026-04-07：Ascend 950 PR 中芯 N+3（via eastmoney）](https://www.trendforce.com/news/2026/04/07/news-decoding-deepseek-v4-how-huaweis-ascend-950-pr-is-powering-chinas-push-to-break-cuda-dependence/)
- [TechTimes 2026-09-17：Ascend 950 系列中芯 N+3](https://www.techtimes.com/articles/327654/20260917/huawei-pulls-ascend-960-three-quarters-early-initiates-global-ai-interconnect-standard.htm)
- [TechTimes 2026-06-22：发改委 2 万亿计划草案（via Bloomberg 6-9）](http://www.techtimes.com/articles/318868/20260622/china-ai-data-center-grid-locks-out-nvidia-295-billion-domestic-chip-mandate.htm)
- [Reuters 2026-06-09 via goldsea：发改委 2 万亿计划](https://goldsea.com/article_details/china-prepares-295-billion-plan-to-fund-nationwide-ai-buildout)
