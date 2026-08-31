(function () {
  "use strict";

  const STORAGE_KEY = "stock-why-language";
  const supported = new Set(["zh", "en"]);
  const originals = new WeakMap();
  let dictionary = {};

  const manual = {
    "涨跌溯源图谱": "Stock Why · Causal Market Map",
    "生物医药溯源图谱": "Stock Why · Biopharma Map",
    "🧭 AI 半导体": "🧭 AI & Semiconductors",
    "🧭 AI 半导体图": "🧭 AI & Semiconductor Map",
    "🧬 生物医药": "🧬 Biopharma",
    "🧬 生物医药图": "🧬 Biopharma Map",
    "stock-why 溯源图谱 · 点节点看来龙去脉": "stock-why causal map · Select a node to trace what drives it",
    "导览": "Guide",
    "生物医药 · 导览": "Biopharma · Guide",
    "公司": "Company",
    "主题 / 赛道": "Theme / Market",
    "股票 / 资产": "Stocks / Assets",
    "行业 / 主题": "Industries / Themes",
    "异动": "Move",
    "催化剂": "Catalyst",
    "因果链": "Causal Chain",
    "来源": "Sources",
    "待补": "Research Queue",
    "待补（问到就长出）": "Research queue — expands with every new question",
    "成员标的": "Companies / Assets",
    "成员 / 要点": "Companies / Key Points",
    "上游 · 谁影响它": "Upstream · What drives it",
    "下游 · 它影响谁": "Downstream · What it affects",
    "关联实体 · 未上市 (PRIVATE)": "Related Entity · Private",
    "未上市（引力中心）": "Private Company (Center of Gravity)",
    "未上市": "Private",
    "改变命运": "transformative",
    "增量": "incremental",
    "板块火": "the sector is hot",
    "已建立关系": "Established relationship",
    "成分 / 包含（ETF）": "ETF holding / inclusion",
    "同类 / 竞争": "Peer / competitor",
    "潜在上下游": "Potential upstream / downstream",
    "关系（合作 / 归属）": "Relationship (partnership / category)",
    "竞争 / 同类": "Competitor / peer",
    "潜在关系": "Potential relationship",
    "打开产业链导览": "Open industry guide",
    "打开板块导览": "Open sector guide",
    "关闭导览": "Close guide",
    "切换明暗主题": "Switch color theme",
    "关闭": "Close",
    "可拖动": "Drag to move",
    "代工 · 把设计变成实物": "Foundry · Turning designs into silicon",
    "算力芯片 · 干活的大脑": "Compute Chips · The engines doing the work",
    "存储 HBM 三强 · 喂饱大脑的内存": "The HBM Big Three · Memory feeding the compute engines",
    "物理下游 · 芯片装进机房怎么跑": "Physical Infrastructure · Making chips work inside data centers",
    "能源最上游 · 电从哪来": "Power Generation · Where the electricity comes from",
    "板块母节点 · 温度计": "Sector Benchmark · The market thermometer",
    "需求侧 · 掏钱买算力的应用巨头": "Demand Side · The giants paying for compute",
    "四条最值得记住的主线": "Four Investment Threads to Remember",
    "两条最值得记住的主线": "Two Investment Threads to Remember",
    "领跑者，药效领先，美国肥胖市场 >60%，上调指引": "Market leader with the strongest efficacy profile, more than 60% of the U.S. obesity market, and raised guidance",
    "（利润率还在扩张，证据最硬）>": "(margins are still expanding — the strongest ROI evidence) >",
    "（有真实 AI 收入，但利润率被 capex 压）>": "(real AI revenue, but capex is weighing on margins) >",
    "分化 = 这波行情的关键词。": "Divergence is the defining feature of this market.",
    "杀的是估值，不是基本面。": "The selloff is about valuation, not broken fundamentals.",
    "供给侧卖铲子，需求侧掏钱包。": "The supply side sells the picks and shovels; the demand side pays the bill.",
    "AI 资本循环——闭环的引力中心。": "The AI capital loop — the center of gravity of the entire system.",
    "重要性(materiality)：": "Materiality:",
    "同赛道≠都赢：": "A booming market does not mean every company wins:",
    "竞争里的输赢": "relative competitive performance",
    "，不是风口本身——别一听\"板块火\"就无脑买。": ", not the popularity of the theme itself. A hot sector is not a blank check.",
    "生物医药的涨跌，跟半导体是": "Biopharma and semiconductors follow",
    "两套逻辑": "two very different playbooks",
    "：这里股价由临床数据「二元」跳变、由竞争里的输赢决定，而不是线性的营收利润。": ": here, clinical readouts can create binary jumps, and competitive wins or losses matter more than a smooth revenue curve.",
    "🧩 自成一路": "🧩 Independent Compounders",
    "福泰 —": "Vertex —",
    "拖动节点整理布局 · 点节点看详情 · 本卡片可拖动 ⠿": "Drag nodes to arrange the map · Select a node for details · This card is draggable ⠿",
    "拖动节点整理 · 点节点看溯源 · 本卡片可拖动 ⠿": "Drag nodes to arrange the map · Select a node to trace the thesis · This card is draggable ⠿",
    "🏠 网站首页": "🏠 Website Home"
  };

  function resolveInitialLanguage() {
    const requested = new URLSearchParams(location.search).get("lang");
    if (supported.has(requested)) return requested;
    const saved = localStorage.getItem(STORAGE_KEY);
    return supported.has(saved) ? saved : "zh";
  }

  window.stockWhyLanguage = resolveInitialLanguage();

  window.swText = function (value) {
    if (value == null || window.stockWhyLanguage !== "en") return value;
    const text = String(value);
    return manual[text] || dictionary[text] || text;
  };

  function replaceTextNode(node) {
    const original = originals.has(node) ? originals.get(node) : node.nodeValue;
    if (!originals.has(node)) originals.set(node, original);
    const trimmed = original.trim();
    if (!trimmed || !/\p{Script=Han}/u.test(trimmed)) {
      node.nodeValue = original;
      return;
    }
    const translated = window.swText(trimmed);
    if (translated === trimmed) {
      node.nodeValue = original;
      return;
    }
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    node.nodeValue = `${leading}${translated}${trailing}`;
  }

  function translateStaticDom() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style, [data-i18n-skip]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replaceTextNode);

    document.querySelectorAll("[aria-label], [title]").forEach(element => {
      for (const attribute of ["aria-label", "title"]) {
        if (!element.hasAttribute(attribute)) continue;
        const key = `attribute:${attribute}`;
        let saved = originals.get(element);
        if (!saved) {
          saved = {};
          originals.set(element, saved);
        }
        if (!(key in saved)) saved[key] = element.getAttribute(attribute);
        element.setAttribute(attribute, window.swText(saved[key]));
      }
    });

    const title = document.querySelector("title");
    if (title) replaceTextNode(title.firstChild);
  }

  function updateButton() {
    const button = document.getElementById("languageBtn");
    if (!button) return;
    const en = window.stockWhyLanguage === "en";
    button.innerHTML = en
      ? '<span>中</span><i>/</i><span class="active">EN</span>'
      : '<span class="active">中</span><i>/</i><span>EN</span>';
    button.setAttribute("aria-label", en ? "切换到中文" : "Switch to English");
  }

  function setLanguage(language, { persist = true } = {}) {
    if (!supported.has(language)) return;
    window.stockWhyLanguage = language;
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    if (persist) localStorage.setItem(STORAGE_KEY, language);

    const url = new URL(location.href);
    if (language === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);

    translateStaticDom();
    updateButton();
    window.dispatchEvent(new CustomEvent("stockwhy:languagechange", { detail: { language } }));
  }

  function installButton() {
    if (document.getElementById("languageBtn")) return;
    const style = document.createElement("style");
    style.textContent = `
      .language-toggle {
        position: fixed; top: 16px; right: 158px; z-index: 13;
        height: 38px; min-width: 74px; padding: 0 12px;
        display: inline-flex; align-items: center; justify-content: center; gap: 6px;
        border: 1px solid var(--hair); border-radius: 999px;
        background: var(--surface); color: var(--muted); cursor: pointer;
        font: 600 11px "Libre Franklin", system-ui, sans-serif;
        letter-spacing: .02em; box-shadow: 0 2px 12px rgba(0,0,0,.05);
      }
      .language-toggle:hover { background: var(--surface-2); }
      .language-toggle:focus-visible { outline: 2px solid var(--stock); outline-offset: 2px; }
      .language-toggle .active { color: var(--ink); }
      .language-toggle i { color: var(--hair); font-style: normal; }
      @media (max-width: 560px) { .language-toggle { right: 110px; min-width: 68px; padding: 0 10px; } }
    `;
    document.head.appendChild(style);

    const button = document.createElement("button");
    button.id = "languageBtn";
    button.className = "language-toggle";
    button.dataset.i18nSkip = "";
    button.addEventListener("click", () => {
      setLanguage(window.stockWhyLanguage === "en" ? "zh" : "en");
    });
    document.body.appendChild(button);
  }

  window.swSetLanguage = setLanguage;

  window.swInitI18n = async function () {
    try {
      const response = await fetch("./i18n-en.json", { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      dictionary = await response.json();
    } catch (error) {
      console.warn("English translation file could not be loaded; Chinese fallback remains available.", error);
    }
    installButton();
    setLanguage(window.stockWhyLanguage, { persist: false });
  };
})();
