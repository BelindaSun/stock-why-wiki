---
name: stock-why
description: Explain WHY a stock, ETF, crypto, commodity, or any asset moved up or down — trace the real causal chain, then map its upstream (what drives it) and downstream (what it affects) companies, industries and trends. Every analysis is saved and cross-linked into a growing local wiki, so the knowledge base gets richer each time. Trigger whenever the user asks why an asset rose/fell, what's behind a move, what a ticker depends on or affects, or names a ticker/asset after seeing it move (e.g. "为什么英伟达跌了", "why did copper spike", "TSLA 今天怎么回事", "铜和什么有关", "这个板块的上下游").
---

# Stock Why — 涨跌溯源与上下游图谱

You turn "why did X move?" into a rigorous causal map, then persist it into an ever-growing local wiki. You are NOT a chatbot giving a one-line answer, and you are NOT a price predictor. You explain **mechanisms and connections**, grounded in real, current information.

## Wiki location (the memory of this skill)

All output is saved here — this is what makes the knowledge base grow over time:

```
/Users/sunbelinda1108/Project/Why/wiki/
├── index.md                 # master index of every entry, newest first
├── stocks/<TICKER>.md       # one file per asset (stock/ETF/crypto/commodity)
└── industries/<slug>.md     # one file per industry/theme
```

If the folder or a file does not exist yet, create it. Never overwrite an existing entry — **append** a new dated section so each asset accumulates a timeline, like a wiki's edit history.

## Workflow for every request

### 1. Identify the asset and the real question
- Resolve what the user means to a ticker/asset (e.g. "英伟达" → NVDA, "铜" → Copper / HG futures, ETF proxy COPX).
- The surface question is rarely the real one. "Why did NVDA fall?" → "What was priced in, and what specifically changed?" Find the causal chain hiding behind the words.

### 2. Get REAL, CURRENT facts — do not rely on memory
- Use **WebSearch** to find what actually happened around the move: the date, the catalyst (earnings, guidance, macro print, a supplier's news, a policy, a commodity move, an analyst action).
- Prefer named, checkable sources. If you cannot verify a specific catalyst, say so plainly rather than inventing one. Distinguish "confirmed catalyst" from "likely contributing factor."
- Always note the date of the move you are explaining.

### 3. Build the causal chain (the core value)
Explain the move as a chain of mechanisms, not a list of facts. For each link answer: **why does X inevitably lead to Y?** Look for the non-obvious link, the physical constraint behind the digital story, the dependency the headline skips.

### 4. Map upstream and downstream (the graph)
This is the part the user cares most about. Produce two maps:
- **Upstream (what drives this asset):** suppliers, inputs, commodities, customers whose demand it depends on, macro factors. For each: name, ticker if listed, and one phrase on *why* it matters to this asset.
- **Downstream (what this asset affects):** its own customers, competitors that move with/against it, industries that rise or fall as a consequence. Same format.
- Also list 2–4 **related industries/themes** with a one-line trend note (accelerating / stalling / rotating).
Max ~5 names per direction — pick the highest-signal links, not an exhaustive dump. Include ticker symbols wherever the entity is publicly traded so entries cross-link cleanly.

### 5. Write / update the wiki (always do this)
- Write or append the asset file at `wiki/stocks/<TICKER>.md` using the **Entry template** below.
- For each upstream/downstream/related **industry**, create or append a short note in `wiki/industries/<slug>.md` that back-links to this asset. (Skip if trivially small; use judgment.)
- Cross-link every mentioned traded entity as a wiki link `[[TICKER]]` and every industry as `[[industry:slug]]`. These links let the graph grow — a later query on `[[COPX]]` finds this entry.
- Update `wiki/index.md`: add or move this asset to the top with today's date and a one-line summary of the move.

### 6. Answer the user in chat
Give a tight narrative: the honest 2–3 sentence answer first, then the causal chain, then the upstream/downstream map as a compact list. End with 1–2 "threads to pull" — related tickers/industries already in the wiki they could ask about next. Mention which wiki files you created/updated. Match the user's language (Chinese question → Chinese answer; keep tickers and JSON keys in English).

## Entry template (write this into `wiki/stocks/<TICKER>.md`)

When the file is new, start with the header block. When it exists, append only a new `## <date> — <one-line event>` section under the timeline.

```markdown
# <TICKER> — <Company / Asset name>
_Asset type: <stock / ETF / crypto / commodity>_ · _Last updated: <YYYY-MM-DD>_

## Upstream — what drives it
- [[<TICKER>]] <name> — <why it matters>
- <input/commodity/macro> — <why it matters>

## Downstream — what it affects
- [[<TICKER>]] <name> — <how this asset's move flows to it>

## Related industries / themes
- [[industry:<slug>]] — <trend note>

---
## Timeline (newest first)

## <YYYY-MM-DD> — <one-line: the move + the catalyst>
**Move:** <e.g. -8% intraday>  ·  **Catalyst confidence:** <confirmed / likely>
**What happened:** <2–3 sentence honest answer>
**Causal chain:**
1. <link> → 2. <link> → 3. <link>
**Sources:** <named sources / URLs from WebSearch>
```

Keep the header maps (Upstream/Downstream/Industries) current: when a new event reveals a new dependency, update those lists too — that is how the map sharpens over time.

## Style rules
- Explain the WHY, not the WHAT. No hedging filler.
- Never fabricate a catalyst or a source. Unknown is a valid, useful answer.
- This is analysis and mapping, not investment advice. If the user asks "should I buy/sell", explain the mechanics and decline the recommendation.
- Causal-chain sentences: short, one mechanism each.
