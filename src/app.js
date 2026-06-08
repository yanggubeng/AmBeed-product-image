import { FROZEN_TEMPLATE_PARAMS } from "./frozen-template-params.js";

const CANVAS_WIDTH = 1448;
const CANVAS_HEIGHT = 1086;
const STANDARD_TEXT_AREA_ASPECT = 1920 / 1300;
const DEFAULT_PROJECTION = 0.82;
const DEFAULT_TEXT_SCALE = 0.88;
const DEFAULT_LINE_SCALE = 0.82;
const DEBUG_STORAGE_KEY = "ambeed-label-debug-config-v1";
const PRODUCTION_STORAGE_KEY = "ambeed-label-production-config-v1";
const DELETED_TEMPLATE_IDS_KEY = "ambeed-label-deleted-template-ids-v1";
const DEBUG_PASSWORD = "0000";
const MIN_BOX_SIZE = 20;
const HANDLE_SIZE = 7;
const ROW_SNAP_THRESHOLD = 6;

const PACKAGE_TEMPLATES = [
  {
    id: "HC00418",
    name: "HC00418 棕色冻存管 1.5ml",
    image: "./包装模板图/HC00418.png",
    spec: "1.5ml",
    material: "PP",
    labelArea: { x: 668, y: 438, width: 374, height: 253 },
    clipArea: { x: 668, y: 438, width: 129, height: 253 },
    brandArea: { x: 669, y: 694, width: 121, height: 58 },
    textScale: 0.88,
    lineScale: 0.82,
    curvePx: 8,
    curveCenter: 50,
    projection: 0.82,
  },
  {
    id: "HC00472",
    name: "HC00472 尖底可立冻存管 0.5mL",
    image: "./包装模板图/HC00472.png",
    spec: "0.5mL",
    material: "PP",
    labelArea: { x: 668, y: 503, width: 356, height: 241 },
    clipArea: { x: 668, y: 503, width: 113, height: 241 },
    brandArea: { x: 670, y: 741, width: 105, height: 53 },
    textScale: 0.88,
    lineScale: 0.82,
    curvePx: 9,
    curveCenter: 50,
    projection: 0.82,
  },
  {
    id: "HC00473",
    name: "HC00473 抑制剂二维码冻存管 0.75ML",
    image: "./包装模板图/HC00473.png",
    spec: "0.75ML",
    material: "PP",
    labelArea: { x: 684, y: 430, width: 380, height: 257 },
    clipArea: { x: 684, y: 430, width: 129, height: 257 },
    brandArea: { x: 693, y: 702, width: 114, height: 56 },
    textScale: 0.88,
    lineScale: 0.82,
    curvePx: 9,
    curveCenter: 50,
    projection: 0.82,
  },
  {
    id: "HC002",
    name: "HC002 棕色高端玻璃瓶 5ml",
    image: "./包装模板图/HC002.png",
    spec: "5ml",
    material: "玻璃",
    labelArea: { x: 648, y: 414, width: 326, height: 221 },
    clipArea: { x: 648, y: 414, width: 157, height: 221 },
    brandArea: { x: 650, y: 633, width: 153, height: 53 },
    textScale: 0.88,
    lineScale: 0.82,
    curvePx: 7,
    curveCenter: 50,
    projection: 0.82,
  },
  {
    id: "HC005",
    name: "HC005 棕色玻璃瓶 Z005M18 5ML",
    image: "./包装模板图/HC005.png",
    spec: "Z005M18 5ML",
    material: "玻璃",
    labelArea: { x: 615, y: 491, width: 261, height: 177 },
    clipArea: { x: 615, y: 491, width: 201, height: 177 },
    brandArea: { x: 623, y: 680, width: 193, height: 44 },
    textScale: 0.88,
    lineScale: 0.82,
    curvePx: 5,
    curveCenter: 50,
    projection: 0.82,
  },
  {
    id: "HC003",
    name: "HC003 棕色玻璃瓶 Z010M18 10ML",
    image: "./包装模板图/HC003.png",
    spec: "Z010M18 10ML",
    material: "玻璃",
    labelArea: { x: 631, y: 527, width: 202, height: 137 },
    clipArea: { x: 631, y: 527, width: 185, height: 137 },
    brandArea: { x: 636, y: 667, width: 178, height: 38 },
    textScale: 0.88,
    lineScale: 0.82,
    curvePx: 5,
    curveCenter: 50,
    projection: 0.82,
  },
  {
    id: "HC007",
    name: "HC007 棕色玻璃瓶 Z030M18 30ML",
    image: "./包装模板图/HC007.png",
    spec: "Z030M18 30ML",
    material: "玻璃",
    labelArea: { x: 631, y: 571, width: 244, height: 165 },
    clipArea: { x: 631, y: 571, width: 221, height: 165 },
    brandArea: { x: 634, y: 751, width: 212, height: 41 },
    textScale: 0.88,
    lineScale: 0.82,
    curvePx: 4,
    curveCenter: 50,
    projection: 0.82,
  },
  {
    id: "HC023",
    name: "HC023 白色圆瓶 100mL(28)",
    image: "./包装模板图/HC023.png",
    spec: "100mL(28)",
    material: "白色圆瓶",
    labelArea: { x: 660, y: 515, width: 167, height: 113 },
    clipArea: { x: 660, y: 515, width: 153, height: 113 },
    brandArea: { x: 662, y: 645, width: 144, height: 27 },
    textScale: 0.88,
    lineScale: 0.82,
    curvePx: 4,
    curveCenter: 50,
    projection: 0.82,
  },
];

const FIELD_DEFS = [
  { key: "productName", label: "产品名" },
  { key: "chineseName", label: "产品中文名" },
  { key: "catNo", label: "货号" },
  { key: "batchNo", label: "批次" },
  { key: "storage", label: "储存" },
  { key: "size", label: "规格" },
  { key: "purity", label: "纯度" },
];

const ROW_DEFS = [
  { key: "productName", label: "产品名", valueKey: "productName", weight: 700, kind: "title" },
  { key: "chineseName", label: "产品中文名", valueKey: "chineseName", weight: 700, kind: "chinese" },
  { key: "catNo", label: "货号", valueKey: "catNo", prefix: "货号", weight: 400, kind: "meta" },
  { key: "batchNo", label: "批次", valueKey: "batchNo", prefix: "批次", weight: 400, kind: "meta" },
  { key: "storage", label: "储存", valueKey: "storage", prefix: "储存", weight: 400, kind: "meta" },
  { key: "size", label: "规格", valueKey: "size", prefix: "规格", weight: 400, kind: "meta" },
  { key: "purity", label: "纯度", valueKey: "purity", prefix: "纯度", weight: 400, kind: "meta" },
];

mergeTemplateParams(PACKAGE_TEMPLATES, FROZEN_TEMPLATE_PARAMS);

const FALLBACK_TEST_ROWS = [
  {
    productName: "Tribromoethyl(2.5%)",
    chineseName: "三溴乙醇(无菌即用型）",
    catNo: "A14499275",
    batchNo: "A14499275-AH2",
    storage: "2-8℃避光",
    size: "10ml",
    purity: "0.99",
  },
  {
    productName: "Protease Inhibitor Cocktail",
    chineseName: "蛋白酶抑制剂（无EDTA)",
    catNo: "A1320914",
    batchNo: "A1320914-HB1",
    storage: "-20℃",
    size: "1mL",
    purity: "1",
  },
  {
    productName: "Human THBS1 (C-10His)/人THBS1蛋白(HEK293, C-10His)",
    chineseName: "",
    catNo: "A2900866",
    batchNo: "A2900866-AQ9",
    storage: "-20℃",
    size: "500μL*10mM(DMSO)",
    purity: "0.99",
  },
  {
    productName: "Phosphatase Inhibitor Cocktail (Tube A+B, 100X)",
    chineseName: "磷酸酶抑制剂(100X) (A管+B管) 100x",
    catNo: "A2679231",
    batchNo: "A2679231-HA4",
    storage: "-20℃",
    size: "1mL A + 1mL B",
    purity: "100x",
  },
];

const elements = {
  modeButtons: document.querySelectorAll("[data-mode]"),
  packageSelect: document.querySelector("#packageSelect"),
  packagePicker: document.querySelector("#packagePicker"),
  packagePickerButton: document.querySelector("#packagePickerButton"),
  packagePickerThumb: document.querySelector("#packagePickerThumb"),
  packagePickerName: document.querySelector("#packagePickerName"),
  packagePickerMenu: document.querySelector("#packagePickerMenu"),
  sampleSelect: document.querySelector("#sampleSelect"),
  newTemplateId: document.querySelector("#newTemplateId"),
  newTemplateName: document.querySelector("#newTemplateName"),
  newTemplateSpec: document.querySelector("#newTemplateSpec"),
  newTemplateMaterial: document.querySelector("#newTemplateMaterial"),
  newTemplateImage: document.querySelector("#newTemplateImage"),
  addTemplateButton: document.querySelector("#addTemplateButton"),
  replaceTemplateImage: document.querySelector("#replaceTemplateImage"),
  deleteTemplateButton: document.querySelector("#deleteTemplateButton"),
  templateManageStatus: document.querySelector("#templateManageStatus"),
  fieldForm: document.querySelector("#fieldForm"),
  labelX: document.querySelector("#labelX"),
  labelY: document.querySelector("#labelY"),
  labelW: document.querySelector("#labelW"),
  labelH: document.querySelector("#labelH"),
  clipX: document.querySelector("#clipX"),
  clipY: document.querySelector("#clipY"),
  clipW: document.querySelector("#clipW"),
  clipH: document.querySelector("#clipH"),
  textScale: document.querySelector("#textScale"),
  lineScale: document.querySelector("#lineScale"),
  curvePx: document.querySelector("#curvePx"),
  curveCenter: document.querySelector("#curveCenter"),
  projection: document.querySelector("#projection"),
  rowSelect: document.querySelector("#rowSelect"),
  rowX: document.querySelector("#rowX"),
  rowY: document.querySelector("#rowY"),
  rowW: document.querySelector("#rowW"),
  rowFontSize: document.querySelector("#rowFontSize"),
  rowSelectionStatus: document.querySelector("#rowSelectionStatus"),
  alignRowButtons: document.querySelectorAll("[data-align-rows]"),
  showGuides: document.querySelector("#showGuides"),
  renderButton: document.querySelector("#renderButton"),
  downloadPngButton: document.querySelector("#downloadPngButton"),
  downloadJpgButton: document.querySelector("#downloadJpgButton"),
  copyConfigButton: document.querySelector("#copyConfigButton"),
  copyConfigButtonMobile: document.querySelector("#copyConfigButtonMobile"),
  copyAllConfigButton: document.querySelector("#copyAllConfigButton"),
  solidifyCurrentButton: document.querySelector("#solidifyCurrentButton"),
  solidifyCurrentButtonMobile: document.querySelector("#solidifyCurrentButtonMobile"),
  resetCurrentButton: document.querySelector("#resetCurrentButton"),
  resetCurrentButtonMobile: document.querySelector("#resetCurrentButtonMobile"),
  currentTemplateName: document.querySelector("#currentTemplateName"),
  canvasSize: document.querySelector("#canvasSize"),
  canvas: document.querySelector("#previewCanvas"),
  debugPasswordOverlay: document.querySelector("#debugPasswordOverlay"),
  debugPasswordForm: document.querySelector("#debugPasswordForm"),
  debugPasswordInput: document.querySelector("#debugPasswordInput"),
  debugPasswordError: document.querySelector("#debugPasswordError"),
  debugPasswordCancel: document.querySelector("#debugPasswordCancel"),
};

const ctx = elements.canvas.getContext("2d");
let activeCtx = ctx;
const imageCache = new Map();
const state = {
  mode: "use",
  debugUnlocked: false,
  pendingMode: null,
  templates: structuredClone(PACKAGE_TEMPLATES),
  currentTemplateId: PACKAGE_TEMPLATES[0].id,
  testRows: structuredClone(FALLBACK_TEST_ROWS),
  currentSampleIndex: 0,
  values: structuredClone(FALLBACK_TEST_ROWS[0]),
  renderToken: 0,
  selectedRowKey: ROW_DEFS[0].key,
  selectedRowKeys: [ROW_DEFS[0].key],
  history: [],
  isRestoring: false,
};

const dragState = {
  active: false,
  target: null,
  action: null,
  handle: null,
  rowKey: null,
  pointerId: null,
  startPoint: null,
  startRect: null,
  startRow: null,
  startRows: null,
  startCurve: null,
  startCurveCenter: 50,
  snapGuides: [],
};

function serializeTemplate(template) {
  ensureTemplateDebugConfig(template);
  return {
    id: template.id,
    name: template.name,
    image: template.image,
    spec: template.spec,
    material: template.material,
    custom: Boolean(template.custom),
    labelArea: template.labelArea,
    clipArea: template.clipArea,
    brandArea: template.brandArea,
    textScale: template.textScale ?? DEFAULT_TEXT_SCALE,
    lineScale: template.lineScale ?? DEFAULT_LINE_SCALE,
    curvePx: template.curvePx ?? 0,
    curveCenter: template.curveCenter ?? 50,
    projection: template.projection ?? DEFAULT_PROJECTION,
    curve: template.curve,
    rows: template.rows,
  };
}

function getCurrentTemplate() {
  const template = state.templates.find((item) => item.id === state.currentTemplateId);
  ensureTemplateDebugConfig(template);
  return template;
}

function getTemplateById(templateId) {
  return state.templates.find((template) => template.id === templateId);
}

function getTemplateMeta(template) {
  return [template.spec, template.material].filter(Boolean).join(" / ");
}

function ensureTemplateDebugConfig(template) {
  if (!template) return;
  if (!template.curve) {
    template.curve = {
      leftY: 0,
      centerX: template.curveCenter ?? 50,
      centerY: template.curvePx ?? 0,
      rightY: 0,
    };
  }
  if (!Array.isArray(template.rows) || template.rows.length !== ROW_DEFS.length) {
    template.rows = createDefaultRows(template);
  }
}

function createDefaultRows(template) {
  const labelArea = template.labelArea;
  const textScale = template.textScale ?? DEFAULT_TEXT_SCALE;
  const lineScale = template.lineScale ?? DEFAULT_LINE_SCALE;
  const padX = clamp(labelArea.width * 0.075, 6, 16);
  const titleSize = Math.round(clamp(labelArea.width * 0.078 * textScale, 7, 34));
  const chineseSize = Math.round(clamp(labelArea.width * 0.056 * textScale, 6, 25));
  const metaSize = Math.round(clamp(labelArea.width * 0.042 * textScale, 5, 20));
  const top = clamp(labelArea.height * 0.06, 5, 14);
  const width = Math.max(20, Math.round(labelArea.width - padX * 2));
  let y = top;

  const rows = [
    { key: "productName", x: Math.round(padX), y: Math.round(y), width, fontSize: titleSize },
  ];
  y += titleSize * 1.35 * lineScale;
  rows.push({ key: "chineseName", x: Math.round(padX), y: Math.round(y), width, fontSize: chineseSize });
  y += chineseSize * 1.55 * lineScale;

  for (const key of ["catNo", "batchNo", "storage", "size", "purity"]) {
    rows.push({ key, x: Math.round(padX), y: Math.round(y), width, fontSize: metaSize });
    y += metaSize * 1.28 * lineScale;
  }
  return rows;
}

function getSelectedRow(template = getCurrentTemplate()) {
  ensureTemplateDebugConfig(template);
  return template.rows.find((row) => row.key === state.selectedRowKey) || template.rows[0];
}

function normalizeSelectedRows(template = getCurrentTemplate()) {
  ensureTemplateDebugConfig(template);
  const validKeys = new Set(template.rows.map((row) => row.key));
  if (!validKeys.has(state.selectedRowKey)) {
    state.selectedRowKey = template.rows[0]?.key || ROW_DEFS[0].key;
  }

  const requestedKeys = Array.isArray(state.selectedRowKeys) ? state.selectedRowKeys : [];
  const selected = new Set(requestedKeys.filter((key) => validKeys.has(key)));
  selected.add(state.selectedRowKey);
  state.selectedRowKeys = template.rows
    .map((row) => row.key)
    .filter((key) => selected.has(key));
  return state.selectedRowKeys;
}

function isRowSelected(rowKey) {
  return state.selectedRowKeys.includes(rowKey);
}

function selectOnlyRow(rowKey, template = getCurrentTemplate()) {
  state.selectedRowKey = rowKey;
  state.selectedRowKeys = [rowKey];
  normalizeSelectedRows(template);
}

function setPrimaryRow(rowKey, template = getCurrentTemplate()) {
  state.selectedRowKey = rowKey;
  if (!state.selectedRowKeys.includes(rowKey)) {
    state.selectedRowKeys.push(rowKey);
  }
  normalizeSelectedRows(template);
}

function toggleRowSelection(rowKey, template = getCurrentTemplate()) {
  const selected = new Set(normalizeSelectedRows(template));
  if (selected.has(rowKey) && selected.size > 1) {
    selected.delete(rowKey);
    if (state.selectedRowKey === rowKey) {
      state.selectedRowKey = [...selected][0];
    }
  } else {
    selected.add(rowKey);
    state.selectedRowKey = rowKey;
  }
  state.selectedRowKeys = template.rows
    .map((row) => row.key)
    .filter((key) => selected.has(key));
  normalizeSelectedRows(template);
}

function getSelectedRows(template = getCurrentTemplate()) {
  const selected = new Set(normalizeSelectedRows(template));
  return template.rows.filter((row) => selected.has(row.key));
}

function readStoredConfigs(storageKey) {
  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    window.localStorage.removeItem(storageKey);
    return [];
  }
}

function readDeletedTemplateIds() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(DELETED_TEMPLATE_IDS_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((id) => typeof id === "string") : [];
  } catch {
    window.localStorage.removeItem(DELETED_TEMPLATE_IDS_KEY);
    return [];
  }
}

function writeDeletedTemplateIds(templateIds) {
  try {
    const uniqueIds = [...new Set(templateIds.filter(Boolean))];
    window.localStorage.setItem(DELETED_TEMPLATE_IDS_KEY, JSON.stringify(uniqueIds));
    return true;
  } catch (error) {
    setTemplateManageStatus("保存失败：浏览器本地存储空间不足。");
    console.error(error);
    return false;
  }
}

function writeStoredConfigs(storageKey, configs) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(configs));
    return true;
  } catch (error) {
    const message = "保存失败：图片或模板数据过大，浏览器本地存储空间不足。";
    if (elements.templateManageStatus) {
      setTemplateManageStatus(message);
    }
    console.error(error);
    return false;
  }
}

function loadSavedConfigs(storageKey = DEBUG_STORAGE_KEY) {
  applyTemplateConfigs(readStoredConfigs(storageKey));
}

function saveAllConfigs() {
  if (state.mode !== "debug") return true;
  return writeStoredConfigs(
    DEBUG_STORAGE_KEY,
    state.templates.map((template) => serializeTemplate(template)),
  );
}

function removeStoredTemplate(storageKey, templateId) {
  const configs = readStoredConfigs(storageKey).filter((template) => template.id !== templateId);
  return writeStoredConfigs(storageKey, configs);
}

function clonePlain(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeTemplateParams(targetTemplates, savedTemplates) {
  if (!Array.isArray(savedTemplates)) return;
  for (const savedTemplate of savedTemplates) {
    let template = targetTemplates.find((item) => item.id === savedTemplate.id);
    if (!template) {
      if (!savedTemplate.id || !savedTemplate.image) continue;
      template = {
        id: savedTemplate.id,
        name: savedTemplate.name || savedTemplate.id,
        image: savedTemplate.image,
        spec: savedTemplate.spec || "",
        material: savedTemplate.material || "",
        custom: true,
        labelArea: savedTemplate.labelArea || { x: 560, y: 420, width: 340, height: 280 },
        clipArea: savedTemplate.clipArea || { x: 620, y: 420, width: 180, height: 260 },
        brandArea: savedTemplate.brandArea || { x: 620, y: 690, width: 180, height: 44 },
        textScale: savedTemplate.textScale ?? DEFAULT_TEXT_SCALE,
        lineScale: savedTemplate.lineScale ?? DEFAULT_LINE_SCALE,
        curvePx: savedTemplate.curvePx ?? 8,
        curveCenter: savedTemplate.curveCenter ?? 50,
        projection: savedTemplate.projection ?? DEFAULT_PROJECTION,
        curve: savedTemplate.curve,
        rows: savedTemplate.rows,
      };
      targetTemplates.push(template);
    }
    Object.assign(template, {
      name: savedTemplate.name || template.name,
      image: savedTemplate.image || template.image,
      spec: savedTemplate.spec ?? template.spec,
      material: savedTemplate.material ?? template.material,
      custom: savedTemplate.custom ?? template.custom,
      labelArea: savedTemplate.labelArea ? { ...savedTemplate.labelArea } : template.labelArea,
      clipArea: savedTemplate.clipArea ? { ...savedTemplate.clipArea } : template.clipArea,
      brandArea: savedTemplate.brandArea ? { ...savedTemplate.brandArea } : template.brandArea,
      textScale: savedTemplate.textScale ?? template.textScale,
      lineScale: savedTemplate.lineScale ?? template.lineScale,
      curvePx: savedTemplate.curvePx ?? template.curvePx,
      curveCenter: savedTemplate.curveCenter ?? template.curveCenter,
      projection: savedTemplate.projection ?? template.projection,
      curve: savedTemplate.curve ? { ...savedTemplate.curve } : template.curve,
      rows: Array.isArray(savedTemplate.rows)
        ? savedTemplate.rows.map((row) => ({ ...row }))
        : template.rows,
    });
    ensureTemplateDebugConfig(template);
  }
}

function applyTemplateConfigs(savedTemplates) {
  mergeTemplateParams(state.templates, savedTemplates);
}

function getTemplateConfigList(templates = state.templates) {
  return templates.map((template) => serializeTemplate(template));
}

function reloadTemplatesForCurrentMode() {
  const currentTemplateId = state.currentTemplateId;
  const deletedIds = new Set(readDeletedTemplateIds());
  state.templates = structuredClone(PACKAGE_TEMPLATES).filter((template) => !deletedIds.has(template.id));
  mergeTemplateParams(state.templates, readStoredConfigs(PRODUCTION_STORAGE_KEY));
  if (state.mode === "debug") {
    mergeTemplateParams(state.templates, readStoredConfigs(DEBUG_STORAGE_KEY));
  }
  state.templates = state.templates.filter((template) => !deletedIds.has(template.id));
  if (!state.templates.length) {
    const fallbackTemplate = structuredClone(PACKAGE_TEMPLATES[0]);
    deletedIds.delete(fallbackTemplate.id);
    writeDeletedTemplateIds([...deletedIds]);
    state.templates = [fallbackTemplate];
  }
  if (state.templates.some((template) => template.id === currentTemplateId)) {
    state.currentTemplateId = currentTemplateId;
  } else {
    state.currentTemplateId = state.templates[0].id;
  }
  normalizeSelectedRows();
}

function createHistorySnapshot() {
  return clonePlain({
    templates: getTemplateConfigList(),
    deletedTemplateIds: readDeletedTemplateIds(),
    currentTemplateId: state.currentTemplateId,
    selectedRowKey: state.selectedRowKey,
    selectedRowKeys: state.selectedRowKeys,
  });
}

function pushHistory() {
  if (state.isRestoring) return;
  state.history.push(createHistorySnapshot());
  if (state.history.length > 80) {
    state.history.shift();
  }
}

function undoLastChange() {
  const snapshot = state.history.pop();
  if (!snapshot) return;
  state.isRestoring = true;
  try {
    if (Array.isArray(snapshot.deletedTemplateIds)) {
      writeDeletedTemplateIds(snapshot.deletedTemplateIds);
    }
    applyTemplateConfigs(snapshot.templates);
    if (state.templates.some((template) => template.id === snapshot.currentTemplateId)) {
      state.currentTemplateId = snapshot.currentTemplateId;
    }
    if (ROW_DEFS.some((row) => row.key === snapshot.selectedRowKey)) {
      state.selectedRowKey = snapshot.selectedRowKey;
    }
    if (Array.isArray(snapshot.selectedRowKeys)) {
      state.selectedRowKeys = snapshot.selectedRowKeys;
    }
    saveAllConfigs();
    fillSelects();
    syncCoordInputs();
    renderPreview();
  } finally {
    state.isRestoring = false;
  }
}

function resetCurrentTemplate() {
  const defaults = PACKAGE_TEMPLATES.find((template) => template.id === state.currentTemplateId);
  const template = getCurrentTemplate();
  if (!defaults || !template) return;

  pushHistory();
  Object.assign(template, {
    labelArea: { ...defaults.labelArea },
    clipArea: { ...defaults.clipArea },
    brandArea: { ...defaults.brandArea },
    textScale: defaults.textScale ?? DEFAULT_TEXT_SCALE,
    lineScale: defaults.lineScale ?? DEFAULT_LINE_SCALE,
    curvePx: defaults.curvePx ?? 0,
    curveCenter: defaults.curveCenter ?? 50,
    projection: defaults.projection ?? DEFAULT_PROJECTION,
  });
  delete template.curve;
  delete template.rows;
  state.selectedRowKey = ROW_DEFS[0].key;
  state.selectedRowKeys = [ROW_DEFS[0].key];
  ensureTemplateDebugConfig(template);
  saveAllConfigs();
  syncCoordInputs();
  renderPreview();

  for (const button of [elements.resetCurrentButton, elements.resetCurrentButtonMobile]) {
    button.textContent = "已重置";
  }
  window.setTimeout(() => {
    for (const button of [elements.resetCurrentButton, elements.resetCurrentButtonMobile]) {
      button.textContent = "重置当前模板";
    }
  }, 1000);
}

function applyModeUi() {
  document.body.classList.toggle("mode-use", state.mode === "use");
  document.body.classList.toggle("mode-debug", state.mode === "debug");
  for (const button of elements.modeButtons) {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  }
  if (state.mode === "use") {
    elements.showGuides.checked = false;
  }
}

function showDebugPasswordDialog() {
  elements.debugPasswordOverlay.hidden = false;
  elements.debugPasswordInput.value = "";
  elements.debugPasswordError.textContent = "";
  window.setTimeout(() => elements.debugPasswordInput.focus(), 0);
}

function hideDebugPasswordDialog() {
  elements.debugPasswordOverlay.hidden = true;
  elements.debugPasswordInput.value = "";
  elements.debugPasswordError.textContent = "";
}

function unlockDebugMode() {
  if (state.debugUnlocked) return true;
  showDebugPasswordDialog();
  return false;
}

function submitDebugPassword(event) {
  event.preventDefault();
  if (elements.debugPasswordInput.value !== DEBUG_PASSWORD) {
    elements.debugPasswordError.textContent = "密码错误";
    elements.debugPasswordInput.select();
    return;
  }
  state.debugUnlocked = true;
  hideDebugPasswordDialog();
  setMode("debug");
}

function setMode(mode) {
  if (!["use", "debug"].includes(mode)) return;
  if (mode === "debug" && !unlockDebugMode()) {
    applyModeUi();
    return;
  }
  if (state.mode === "debug") {
    saveAllConfigs();
  }
  state.mode = mode;
  state.history = [];
  reloadTemplatesForCurrentMode();
  applyModeUi();
  fillSelects();
  syncCoordInputs();
  renderPreview();
}

function solidifyCurrentTemplate() {
  const currentConfig = serializeTemplate(getCurrentTemplate());
  const configs = readStoredConfigs(PRODUCTION_STORAGE_KEY);
  const existingIndex = configs.findIndex((template) => template.id === currentConfig.id);
  if (existingIndex >= 0) {
    configs[existingIndex] = currentConfig;
  } else {
    configs.push(currentConfig);
  }
  if (!writeStoredConfigs(PRODUCTION_STORAGE_KEY, configs)) return;
  saveAllConfigs();

  for (const button of [elements.solidifyCurrentButton, elements.solidifyCurrentButtonMobile]) {
    button.textContent = "已固化";
  }
  window.setTimeout(() => {
    for (const button of [elements.solidifyCurrentButton, elements.solidifyCurrentButtonMobile]) {
      button.textContent = "固化到使用模式";
    }
  }, 1200);
}

function setTemplateManageStatus(message) {
  elements.templateManageStatus.textContent = message;
}

function sanitizeTemplateId(value, fallback) {
  const normalized = String(value || "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
  return normalized || fallback;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("图片读取失败"));
    reader.readAsDataURL(file);
  });
}

async function readTemplateImageAsDataUrl(file) {
  const rawDataUrl = await readFileAsDataUrl(file);
  const image = await loadImage(rawDataUrl);
  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  const canvasContext = canvas.getContext("2d");
  canvasContext.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  imageCache.delete(rawDataUrl);
  return canvas.toDataURL("image/jpeg", 0.88);
}

function createTemplateFromCurrent({ id, name, spec, material, image }) {
  const base = serializeTemplate(getCurrentTemplate());
  return {
    ...base,
    id,
    name,
    spec,
    material,
    image,
    custom: true,
  };
}

async function addCustomTemplate() {
  if (state.mode !== "debug") return;
  const file = elements.newTemplateImage.files?.[0];
  if (!file) {
    setTemplateManageStatus("请先选择一张新模板图片。");
    return;
  }

  const fallbackId = `CUSTOM-${Date.now()}`;
  const id = sanitizeTemplateId(elements.newTemplateId.value, fallbackId);
  if (
    state.templates.some((template) => template.id === id) ||
    PACKAGE_TEMPLATES.some((template) => template.id === id)
  ) {
    setTemplateManageStatus(`模板编号 ${id} 已存在，请换一个编号。`);
    return;
  }

  try {
    const image = await readTemplateImageAsDataUrl(file);
    const name = elements.newTemplateName.value.trim() || `${id} 新包装模板`;
    const spec = elements.newTemplateSpec.value.trim();
    const material = elements.newTemplateMaterial.value.trim();
    const template = createTemplateFromCurrent({ id, name, spec, material, image });
    const deletedIds = readDeletedTemplateIds().filter((templateId) => templateId !== id);
    if (!writeDeletedTemplateIds(deletedIds)) return;
    state.templates.push(template);
    state.currentTemplateId = id;
    selectOnlyRow(ROW_DEFS[0].key, template);
    if (!saveAllConfigs()) return;
    fillSelects();
    syncCoordInputs();
    renderPreview();
    elements.newTemplateId.value = "";
    elements.newTemplateName.value = "";
    elements.newTemplateSpec.value = "";
    elements.newTemplateMaterial.value = "";
    elements.newTemplateImage.value = "";
    setTemplateManageStatus(`已添加 ${name}。调整完成后点击“固化到使用模式”。`);
  } catch (error) {
    setTemplateManageStatus(error.message);
  }
}

async function replaceCurrentTemplateImage() {
  if (state.mode !== "debug") return;
  const file = elements.replaceTemplateImage.files?.[0];
  if (!file) return;
  try {
    const image = await readTemplateImageAsDataUrl(file);
    const template = getCurrentTemplate();
    pushHistory();
    imageCache.delete(template.image);
    template.image = image;
    template.custom = template.custom || !PACKAGE_TEMPLATES.some((item) => item.id === template.id);
    if (!saveAllConfigs()) return;
    renderPackagePicker();
    renderPreview();
    elements.replaceTemplateImage.value = "";
    setTemplateManageStatus(`已替换 ${template.name} 的背景图。需要进入使用模式时请点击“固化到使用模式”。`);
  } catch (error) {
    setTemplateManageStatus(error.message);
  }
}

function deleteCurrentTemplate() {
  if (state.mode !== "debug") return;
  const template = getCurrentTemplate();
  if (!template) return;
  if (state.templates.length <= 1) {
    setTemplateManageStatus("至少需要保留一个包装模板。");
    return;
  }

  const confirmed = window.confirm(`确定删除“${template.name}”？删除后使用模式下也不会再显示。`);
  if (!confirmed) return;

  pushHistory();
  const deletedIds = new Set(readDeletedTemplateIds());
  deletedIds.add(template.id);
  if (!writeDeletedTemplateIds([...deletedIds])) return;
  if (!removeStoredTemplate(DEBUG_STORAGE_KEY, template.id)) return;
  if (!removeStoredTemplate(PRODUCTION_STORAGE_KEY, template.id)) return;

  imageCache.delete(template.image);
  state.templates = state.templates.filter((item) => item.id !== template.id);
  state.currentTemplateId = state.templates[0].id;
  state.selectedRowKey = ROW_DEFS[0].key;
  state.selectedRowKeys = [ROW_DEFS[0].key];
  fillSelects();
  syncCoordInputs();
  renderPreview();
  setTemplateManageStatus(`已删除 ${template.name}，使用模式下已同步隐藏。`);
}

function loadImage(src) {
  if (imageCache.has(src)) return imageCache.get(src);
  const promise = new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`图片加载失败：${src}`));
    image.src = src;
  });
  imageCache.set(src, promise);
  return promise;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (quoted) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (ch !== "\r") {
      cell += ch;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

function normalizeCsvRows(rows) {
  if (rows.length < 2) return [];
  const headers = rows[0].map((item) => item.trim());
  return rows
    .slice(1)
    .filter((row) => row.some((cell) => String(cell || "").trim()))
    .map((row) => {
      const record = Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]));
      return {
        productName: record["产品名"] || "",
        chineseName: record["产品中文名"] || "",
        catNo: record["货号"] || "",
        batchNo: record["批次"] || record["批次号"] || "",
        storage: record["储存"] || record["存储"] || "",
        size: record["规格"] || "",
        purity: record["纯度"] || "",
      };
    });
}

async function loadTestData() {
  try {
    const response = await fetch("./label-test-data.csv", { cache: "no-store" });
    if (!response.ok) return;
    const csvText = await response.text();
    const rows = normalizeCsvRows(parseCsv(csvText));
    if (rows.length) {
      state.testRows = rows;
      state.currentSampleIndex = 0;
      state.values = structuredClone(rows[0]);
    }
  } catch {
    state.testRows = structuredClone(FALLBACK_TEST_ROWS);
  }
}

function fillSelects() {
  elements.packageSelect.innerHTML = state.templates
    .map((template) => `<option value="${template.id}">${template.name}</option>`)
    .join("");
  elements.packageSelect.value = state.currentTemplateId;
  renderPackagePicker();

  elements.sampleSelect.innerHTML = state.testRows
    .map((row, index) => {
      const label = `${index + 1}. ${row.catNo || "未命名"} ${row.productName || ""}`.trim();
      return `<option value="${index}">${escapeHtml(label)}</option>`;
    })
    .join("");
  elements.sampleSelect.value = String(state.currentSampleIndex);
  fillRowSelect();
}

function renderPackagePicker() {
  const currentTemplate = getCurrentTemplate();
  elements.packagePickerThumb.src = currentTemplate.image;
  elements.packagePickerName.textContent = currentTemplate.name;
  elements.packagePickerButton.title = currentTemplate.name;
  elements.packagePickerMenu.innerHTML = state.templates
    .map((template) => {
      const selected = template.id === state.currentTemplateId;
      const meta = getTemplateMeta(template);
      return `
        <button
          class="template-picker-option${selected ? " is-selected" : ""}"
          type="button"
          role="option"
          aria-selected="${selected ? "true" : "false"}"
          data-template-id="${template.id}"
        >
          <img src="${template.image}" alt="" loading="lazy" />
          <span>
            <strong>${escapeHtml(template.name)}</strong>
            <span>${escapeHtml(meta || template.id)}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function setPackagePickerOpen(open) {
  elements.packagePicker.classList.toggle("is-open", open);
  elements.packagePickerButton.setAttribute("aria-expanded", open ? "true" : "false");
}

function selectTemplate(templateId) {
  if (!getTemplateById(templateId)) return;
  state.currentTemplateId = templateId;
  elements.packageSelect.value = templateId;
  ensureTemplateDebugConfig(getCurrentTemplate());
  normalizeSelectedRows();
  syncCoordInputs();
  renderPackagePicker();
  setPackagePickerOpen(false);
  renderPreview();
}

function handlePackageOptionSelect(event) {
  const option = event.target.closest("[data-template-id]");
  if (!option) return;
  event.preventDefault();
  event.stopPropagation();
  selectTemplate(option.dataset.templateId);
}

function fillRowSelect() {
  elements.rowSelect.innerHTML = ROW_DEFS.map(
    (row) => `<option value="${row.key}">${row.label}</option>`,
  ).join("");
  normalizeSelectedRows();
  elements.rowSelect.value = state.selectedRowKey;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildFieldForm() {
  elements.fieldForm.innerHTML = FIELD_DEFS.map(
    (field) => `
      <div class="text-field-row">
        <label for="field-${field.key}">${field.label}</label>
        <input id="field-${field.key}" type="text" data-field="${field.key}" value="${escapeHtml(
          state.values[field.key] || "",
        )}" />
      </div>
    `,
  ).join("");
}

function syncCoordInputs() {
  const template = getCurrentTemplate();
  ensureTemplateDebugConfig(template);
  elements.currentTemplateName.textContent = template.name;
  elements.canvasSize.textContent = `${CANVAS_WIDTH} x ${CANVAS_HEIGHT}`;
  elements.labelX.value = template.labelArea.x;
  elements.labelY.value = template.labelArea.y;
  elements.labelW.value = template.labelArea.width;
  elements.labelH.value = template.labelArea.height;
  elements.clipX.value = template.clipArea.x;
  elements.clipY.value = template.clipArea.y;
  elements.clipW.value = template.clipArea.width;
  elements.clipH.value = template.clipArea.height;
  elements.textScale.value = template.textScale ?? DEFAULT_TEXT_SCALE;
  elements.lineScale.value = template.lineScale ?? DEFAULT_LINE_SCALE;
  const curve = normalizeCurve(template);
  elements.curvePx.value = curve.centerY;
  elements.curveCenter.value = curve.centerX;
  elements.projection.value = template.projection ?? DEFAULT_PROJECTION;
  syncRowInputs();
}

function syncRowInputs() {
  const template = getCurrentTemplate();
  normalizeSelectedRows(template);
  const row = getSelectedRow(template);
  elements.rowSelect.value = row.key;
  elements.rowX.value = row.x;
  elements.rowY.value = row.y;
  elements.rowW.value = row.width;
  elements.rowFontSize.value = row.fontSize;
  elements.rowSelectionStatus.textContent = `已选 ${state.selectedRowKeys.length} 行`;
}

function syncValuesFromInputs() {
  for (const input of elements.fieldForm.querySelectorAll("[data-field]")) {
    state.values[input.dataset.field] = input.value;
  }
}

function normalizePurity(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const numeric = Number(raw);
  if (Number.isFinite(numeric) && numeric > 0 && numeric <= 1) {
    return `${Math.round(numeric * 10000) / 100}%`;
  }
  return raw;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setFont(size, weight = 400) {
  activeCtx.font = `${weight} ${size}px "Microsoft YaHei", "Noto Sans CJK SC", Arial, sans-serif`;
}

function withContext(nextCtx, callback) {
  const previousCtx = activeCtx;
  activeCtx = nextCtx;
  try {
    return callback();
  } finally {
    activeCtx = previousCtx;
  }
}

function splitLongToken(token, maxWidth) {
  const parts = [];
  let current = "";
  for (const ch of token) {
    const next = current + ch;
    if (current && activeCtx.measureText(next).width > maxWidth) {
      parts.push(current);
      current = ch;
    } else {
      current = next;
    }
  }
  if (current) parts.push(current);
  return parts;
}

function tokenize(value) {
  const text = String(value || "").trim();
  if (!text) return [];
  if (/[\u4e00-\u9fff]/.test(text)) {
    return Array.from(text);
  }
  return text.split(/(\s+)/).filter(Boolean);
}

function wrapText(value, maxWidth, maxLines) {
  const tokens = tokenize(value);
  const lines = [];
  let current = "";

  for (const token of tokens) {
    const candidate = current + token;
    if (!current || activeCtx.measureText(candidate).width <= maxWidth) {
      current = candidate;
      continue;
    }

    lines.push(current.trimEnd());
    current = token.trimStart();

    if (activeCtx.measureText(current).width > maxWidth) {
      const chunks = splitLongToken(current, maxWidth);
      current = chunks.pop() || "";
      lines.push(...chunks);
    }
  }

  if (current) lines.push(current.trimEnd());
  const limited = lines.slice(0, maxLines);
  if (lines.length > maxLines && limited.length) {
    limited[limited.length - 1] = ellipsize(limited[limited.length - 1], maxWidth);
  }
  return limited;
}

function ellipsize(value, maxWidth) {
  let text = String(value || "");
  if (activeCtx.measureText(text).width <= maxWidth) return text;
  while (text.length > 1 && activeCtx.measureText(`${text}…`).width > maxWidth) {
    text = text.slice(0, -1);
  }
  return `${text}…`;
}

function drawPrefixedLine(x, y, width, prefix, value, fontSize) {
  activeCtx.textBaseline = "top";
  setFont(fontSize, 700);
  const prefixText = `${prefix}：`;
  activeCtx.fillText(prefixText, x, y);
  const prefixWidth = activeCtx.measureText(prefixText).width;
  setFont(fontSize, 400);
  activeCtx.fillText(ellipsize(value, width - prefixWidth), x + prefixWidth, y);
}

function getRowDef(rowKey) {
  return ROW_DEFS.find((row) => row.key === rowKey);
}

function getRowText(row, values) {
  const rowDef = getRowDef(row.key);
  if (!rowDef) return "";
  const rawValue = rowDef.key === "purity" ? normalizePurity(values[rowDef.valueKey]) : values[rowDef.valueKey];
  if (!rawValue) return "";
  return rowDef.prefix ? `${rowDef.prefix}：${rawValue}` : rawValue;
}

function drawRow(row, values) {
  const rowDef = getRowDef(row.key);
  if (!rowDef) return;
  const rawValue = rowDef.key === "purity" ? normalizePurity(values[rowDef.valueKey]) : values[rowDef.valueKey];
  if (!rawValue) return;

  activeCtx.save();
  activeCtx.fillStyle = "#050505";
  activeCtx.textBaseline = "top";
  activeCtx.beginPath();
  activeCtx.rect(row.x, row.y - 1, row.width, row.fontSize * 1.35);
  activeCtx.clip();

  if (rowDef.prefix) {
    drawPrefixedLine(row.x, row.y, row.width, rowDef.prefix, rawValue, row.fontSize);
  } else {
    setFont(row.fontSize, rowDef.weight ?? 400);
    activeCtx.fillText(ellipsize(rawValue, row.width), row.x, row.y);
    if (row.key === "productName") {
      activeCtx.lineWidth = clamp(row.fontSize * 0.11, 1, 3);
      activeCtx.strokeStyle = "#050505";
      activeCtx.beginPath();
      activeCtx.moveTo(row.x, row.y + row.fontSize * 1.22);
      activeCtx.lineTo(row.x + row.width, row.y + row.fontSize * 1.22);
      activeCtx.stroke();
    }
  }

  activeCtx.restore();
}

function createLabelCanvas(template, values) {
  ensureTemplateDebugConfig(template);
  const labelArea = template.labelArea;
  const fullWidth = Math.max(20, Math.round(labelArea.width));
  const labelCanvas = document.createElement("canvas");
  labelCanvas.width = fullWidth;
  labelCanvas.height = Math.max(20, Math.round(labelArea.height));
  const labelCtx = labelCanvas.getContext("2d");
  labelCtx.clearRect(0, 0, labelCanvas.width, labelCanvas.height);
  withContext(labelCtx, () => {
    for (const row of template.rows) {
      drawRow(row, values);
    }
  });
  return labelCanvas;
}

function normalizeCurve(template) {
  ensureTemplateDebugConfig(template);
  const curve = template.curve;
  curve.leftY = Number.isFinite(Number(curve.leftY)) ? Number(curve.leftY) : 0;
  curve.centerX = Number.isFinite(Number(curve.centerX)) ? clamp(Number(curve.centerX), 0, 100) : 50;
  curve.centerY = Number.isFinite(Number(curve.centerY)) ? Number(curve.centerY) : template.curvePx ?? 0;
  curve.rightY = Number.isFinite(Number(curve.rightY)) ? Number(curve.rightY) : 0;
  template.curvePx = curve.centerY;
  template.curveCenter = curve.centerX;
  return curve;
}

function evaluateCurve(curve, x, width) {
  const x0 = 0;
  const x1 = clamp((curve.centerX / 100) * width, 1, Math.max(1, width - 1));
  const x2 = Math.max(2, width);
  const y0 = curve.leftY;
  const y1 = curve.centerY;
  const y2 = curve.rightY;
  const l0 = ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2));
  const l1 = ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2));
  const l2 = ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));
  return y0 * l0 + y1 * l1 + y2 * l2;
}

function drawCurvedLabelText(template, values) {
  const labelArea = template.labelArea;
  const clipArea = template.clipArea;
  const labelCanvas = createLabelCanvas(template, values);
  const width = Math.max(1, labelArea.width);
  const height = Math.max(1, labelArea.height);
  const projection = template.projection ?? DEFAULT_PROJECTION;
  const projectionDenominator = Math.asin(projection);
  const curve = normalizeCurve(template);
  const centerRatio = clamp(curve.centerX / 100, 0.01, 0.99);
  const centerX = centerRatio * (width - 1);
  const radius = Math.max(centerX, width - centerX, 1);

  ctx.save();
  ctx.beginPath();
  ctx.rect(clipArea.x, clipArea.y, clipArea.width, clipArea.height);
  ctx.clip();

  for (let dx = 0; dx < width; dx += 1) {
    const t = clamp((dx - centerX) / radius, -1, 1);
    const curvedT = Math.asin(clamp(t * projection, -projection, projection)) / projectionDenominator;
    const sourceX = clamp(centerX + curvedT * radius, 0, labelCanvas.width - 1);
    const sourceWidth = Math.max(0.2, Math.min(1.35, labelCanvas.width - sourceX));
    const yOffset = evaluateCurve(curve, sourceX, width);
    const alpha = 1 - Math.abs(t) * 0.1;
    ctx.globalAlpha = alpha;
    ctx.drawImage(
      labelCanvas,
      sourceX,
      0,
      sourceWidth,
      height,
      labelArea.x + dx,
      labelArea.y + yOffset,
      1,
      height,
    );
  }

  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawGuides(template) {
  const { labelArea, clipArea, brandArea } = template;
  ensureTemplateDebugConfig(template);
  ctx.save();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#006dff";
  ctx.strokeRect(labelArea.x, labelArea.y, labelArea.width, labelArea.height);
  drawBoxHandles(labelArea, "#006dff");

  drawCurveGuide(template);
  drawRowGuides(template);
  drawSnapGuides(template);

  ctx.strokeStyle = "#10a34a";
  ctx.strokeRect(clipArea.x, clipArea.y, clipArea.width, clipArea.height);
  drawBoxHandles(clipArea, "#10a34a");

  ctx.strokeStyle = "#f10000";
  ctx.strokeRect(brandArea.x, brandArea.y, brandArea.width, brandArea.height);
  ctx.restore();
}

function getCurveControlPoints(template) {
  const labelArea = template.labelArea;
  const curve = normalizeCurve(template);
  return {
    curveLeft: { x: labelArea.x, y: labelArea.y + curve.leftY },
    curveCenter: {
      x: labelArea.x + labelArea.width * (curve.centerX / 100),
      y: labelArea.y + curve.centerY,
    },
    curveRight: { x: labelArea.x + labelArea.width, y: labelArea.y + curve.rightY },
  };
}

function drawCurveGuide(template) {
  const labelArea = template.labelArea;
  const curve = normalizeCurve(template);
  ctx.save();
  ctx.strokeStyle = "#006dff";
  ctx.fillStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  for (let x = 0; x <= labelArea.width; x += 8) {
    const px = labelArea.x + x;
    const py = labelArea.y + evaluateCurve(curve, x, labelArea.width);
    if (x === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  const points = getCurveControlPoints(template);
  for (const point of Object.values(points)) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();
}

function getRowScreenRect(template, row) {
  const curve = normalizeCurve(template);
  const labelArea = template.labelArea;
  const rowMidX = row.x + row.width / 2;
  return {
    x: labelArea.x + row.x,
    y: labelArea.y + row.y + evaluateCurve(curve, rowMidX, labelArea.width),
    width: row.width,
    height: row.fontSize * 1.35,
  };
}

function drawRowGuides(template) {
  ctx.save();
  ctx.lineWidth = 1.5;
  const selectedKeys = new Set(normalizeSelectedRows(template));
  for (const row of template.rows) {
    const rect = getRowScreenRect(template, row);
    const primary = row.key === state.selectedRowKey;
    const selected = selectedKeys.has(row.key);
    ctx.strokeStyle = primary ? "#f59e0b" : selected ? "#0ea5e9" : "#a855f7";
    ctx.setLineDash(selected ? [] : [4, 3]);
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }
  ctx.setLineDash([]);
  ctx.restore();
}

function drawSnapGuides(template) {
  if (!dragState.active || dragState.target !== "row" || !dragState.snapGuides.length) return;
  const labelArea = template.labelArea;
  ctx.save();
  ctx.strokeStyle = "#06b6d4";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 5]);
  for (const guide of dragState.snapGuides) {
    ctx.beginPath();
    if (guide.axis === "x") {
      const x = labelArea.x + guide.value;
      ctx.moveTo(x, labelArea.y - 10);
      ctx.lineTo(x, labelArea.y + labelArea.height + 10);
    } else {
      const y = labelArea.y + guide.value;
      ctx.moveTo(labelArea.x - 10, y);
      ctx.lineTo(labelArea.x + labelArea.width + 10, y);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function drawBoxHandles(rect, color) {
  const handles = getRectHandles(rect);
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  for (const handle of Object.values(handles)) {
    ctx.fillRect(handle.x - HANDLE_SIZE / 2, handle.y - HANDLE_SIZE / 2, HANDLE_SIZE, HANDLE_SIZE);
    ctx.strokeRect(handle.x - HANDLE_SIZE / 2, handle.y - HANDLE_SIZE / 2, HANDLE_SIZE, HANDLE_SIZE);
  }
  ctx.restore();
}

async function renderPreview() {
  const token = ++state.renderToken;
  syncValuesFromInputs();
  const template = getCurrentTemplate();
  syncCoordInputs();

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  try {
    const image = await loadImage(template.image);
    if (token !== state.renderToken) return;
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawCurvedLabelText(template, state.values);
    if (state.mode === "debug" && elements.showGuides.checked) {
      drawGuides(template);
    }
  } catch (error) {
    ctx.fillStyle = "#111827";
    ctx.font = '18px "Microsoft YaHei", sans-serif';
    ctx.fillText(error.message, 32, 48);
  }
}

function downloadCanvas(type) {
  const template = getCurrentTemplate();
  const ext = type === "image/jpeg" ? "jpg" : "png";
  const quality = type === "image/jpeg" ? 0.92 : undefined;
  const link = document.createElement("a");
  const catNo = (state.values.catNo || "label").replace(/[^\w-]+/g, "_");
  link.download = `${template.id}_${catNo}.${ext}`;
  link.href = elements.canvas.toDataURL(type, quality);
  link.click();
}

function getCanvasPoint(event) {
  const rect = elements.canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * CANVAS_WIDTH,
    y: ((event.clientY - rect.top) / rect.height) * CANVAS_HEIGHT,
    scaleX: CANVAS_WIDTH / rect.width,
    scaleY: CANVAS_HEIGHT / rect.height,
  };
}

function getRectHandles(rect) {
  const x = rect.x;
  const y = rect.y;
  const right = rect.x + rect.width;
  const bottom = rect.y + rect.height;
  const midX = rect.x + rect.width / 2;
  const midY = rect.y + rect.height / 2;
  return {
    nw: { x, y },
    n: { x: midX, y },
    ne: { x: right, y },
    e: { x: right, y: midY },
    se: { x: right, y: bottom },
    s: { x: midX, y: bottom },
    sw: { x, y: bottom },
    w: { x, y: midY },
  };
}

function pointInRect(point, rect) {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  );
}

function hitHandle(point, rect, tolerance) {
  const handles = getRectHandles(rect);
  for (const [name, handle] of Object.entries(handles)) {
    if (Math.abs(point.x - handle.x) <= tolerance && Math.abs(point.y - handle.y) <= tolerance) {
      return name;
    }
  }
  return null;
}

function hitCurvePoint(point, template, tolerance) {
  const points = getCurveControlPoints(template);
  for (const [key, controlPoint] of Object.entries(points)) {
    if (Math.hypot(point.x - controlPoint.x, point.y - controlPoint.y) <= tolerance + 3) {
      return key;
    }
  }
  return null;
}

function hitRow(point, template) {
  ensureTemplateDebugConfig(template);
  for (const row of [...template.rows].reverse()) {
    const rect = getRowScreenRect(template, row);
    if (pointInRect(point, rect)) {
      return row.key;
    }
  }
  return null;
}

function hitInteractiveTarget(point) {
  const template = getCurrentTemplate();
  const tolerance = Math.max(6, point.scaleX * 7);
  const clipHandle = hitHandle(point, template.clipArea, tolerance);
  if (clipHandle) return { target: "clipArea", action: "resize", handle: clipHandle };

  const labelHandle = hitHandle(point, template.labelArea, tolerance);
  if (labelHandle) return { target: "labelArea", action: "resize", handle: labelHandle };

  const curvePoint = hitCurvePoint(point, template, tolerance);
  if (curvePoint) {
    return { target: "curve", action: "move", handle: curvePoint };
  }

  const rowKey = hitRow(point, template);
  if (rowKey) {
    return { target: "row", action: "move", rowKey };
  }

  if (pointInRect(point, template.clipArea)) {
    return { target: "clipArea", action: "move" };
  }

  if (pointInRect(point, template.labelArea)) {
    return { target: "labelArea", action: "move" };
  }

  return null;
}

function clampRect(rect) {
  const width = Math.max(MIN_BOX_SIZE, Math.round(rect.width));
  const height = Math.max(MIN_BOX_SIZE, Math.round(rect.height));
  const x = clamp(Math.round(rect.x), 0, CANVAS_WIDTH - width);
  const y = clamp(Math.round(rect.y), 0, CANVAS_HEIGHT - height);
  return { x, y, width, height };
}

function moveRect(startRect, dx, dy) {
  return clampRect({
    x: startRect.x + dx,
    y: startRect.y + dy,
    width: startRect.width,
    height: startRect.height,
  });
}

function resizeRect(startRect, handle, dx, dy) {
  let x = startRect.x;
  let y = startRect.y;
  let width = startRect.width;
  let height = startRect.height;

  if (handle.includes("w")) {
    x = startRect.x + dx;
    width = startRect.width - dx;
  }
  if (handle.includes("e")) {
    width = startRect.width + dx;
  }
  if (handle.includes("n")) {
    y = startRect.y + dy;
    height = startRect.height - dy;
  }
  if (handle.includes("s")) {
    height = startRect.height + dy;
  }

  if (width < MIN_BOX_SIZE) {
    if (handle.includes("w")) x = startRect.x + startRect.width - MIN_BOX_SIZE;
    width = MIN_BOX_SIZE;
  }
  if (height < MIN_BOX_SIZE) {
    if (handle.includes("n")) y = startRect.y + startRect.height - MIN_BOX_SIZE;
    height = MIN_BOX_SIZE;
  }

  return clampRect({ x, y, width, height });
}

function applyDrag(point) {
  if (!dragState.active) return;
  const template = getCurrentTemplate();
  const dx = point.x - dragState.startPoint.x;
  const dy = point.y - dragState.startPoint.y;

  if (dragState.target === "curve") {
    const curve = { ...dragState.startCurve };
    const labelArea = template.labelArea;
    if (dragState.handle === "curveLeft") {
      curve.leftY = Math.round(dragState.startCurve.leftY + dy);
    } else if (dragState.handle === "curveRight") {
      curve.rightY = Math.round(dragState.startCurve.rightY + dy);
    } else if (dragState.handle === "curveCenter") {
      curve.centerX = Math.round(clamp(((point.x - labelArea.x) / labelArea.width) * 100, 0, 100));
      curve.centerY = Math.round(dragState.startCurve.centerY + dy);
    }
    template.curve = curve;
    template.curvePx = curve.centerY;
    template.curveCenter = curve.centerX;
  } else if (dragState.target === "row") {
    const snap = getRowSnapAdjustment(template, dragState.startRows || [], dx, dy);
    dragState.snapGuides = snap.guides;
    for (const startRow of dragState.startRows || []) {
      const row = template.rows.find((item) => item.key === startRow.key);
      if (row) {
        row.x = Math.round(startRow.x + snap.dx);
        row.y = Math.round(startRow.y + snap.dy);
      }
    }
  } else if (dragState.action === "move") {
    dragState.snapGuides = [];
    template[dragState.target] = moveRect(dragState.startRect, dx, dy);
  } else if (dragState.action === "resize") {
    dragState.snapGuides = [];
    template[dragState.target] = resizeRect(dragState.startRect, dragState.handle, dx, dy);
  }

  syncCoordInputs();
  saveAllConfigs();
  renderPreview();
}

function getCursorForHit(hit) {
  if (!hit) return "default";
  if (hit.target === "curve") return "grab";
  if (hit.target === "row") return "move";
  if (hit.action === "move") return "move";
  const cursorMap = {
    n: "ns-resize",
    s: "ns-resize",
    e: "ew-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    se: "nwse-resize",
    ne: "nesw-resize",
    sw: "nesw-resize",
  };
  return cursorMap[hit.handle] || "default";
}

function bindCanvasInteractions() {
  elements.canvas.addEventListener("pointerdown", (event) => {
    if (state.mode !== "debug") return;
    const point = getCanvasPoint(event);
    const hit = hitInteractiveTarget(point);
    if (!hit) return;

    elements.showGuides.checked = true;
    const template = getCurrentTemplate();

    if (hit.target === "row") {
      if (event.shiftKey) {
        toggleRowSelection(hit.rowKey, template);
        syncRowInputs();
        event.preventDefault();
        renderPreview();
        return;
      }
      if (isRowSelected(hit.rowKey) && state.selectedRowKeys.length > 1) {
        setPrimaryRow(hit.rowKey, template);
      } else {
        selectOnlyRow(hit.rowKey, template);
      }
      syncRowInputs();
    }

    pushHistory();
    dragState.snapGuides = [];
    dragState.active = true;
    dragState.target = hit.target;
    dragState.action = hit.action;
    dragState.handle = hit.handle || null;
    dragState.rowKey = hit.rowKey || null;
    dragState.pointerId = event.pointerId;
    dragState.startPoint = point;
    dragState.startRect =
      hit.target === "labelArea" || hit.target === "clipArea"
        ? { ...template[hit.target] }
        : null;
    dragState.startRow =
      hit.target === "row"
        ? { ...template.rows.find((row) => row.key === hit.rowKey) }
        : null;
    dragState.startRows =
      hit.target === "row"
        ? getSelectedRows(template).map((row) => ({
            key: row.key,
            x: row.x,
            y: row.y,
            width: row.width,
            fontSize: row.fontSize,
          }))
        : null;
    dragState.startCurve = hit.target === "curve" ? { ...normalizeCurve(template) } : null;
    dragState.startCurveCenter = template.curveCenter ?? 50;
    elements.canvas.setPointerCapture(event.pointerId);
    elements.canvas.classList.add("is-dragging");
    event.preventDefault();
    renderPreview();
  });

  elements.canvas.addEventListener("pointermove", (event) => {
    const point = getCanvasPoint(event);
    if (dragState.active) {
      applyDrag(point);
      event.preventDefault();
      return;
    }
    elements.canvas.style.cursor = getCursorForHit(hitInteractiveTarget(point));
  });

  function endDrag(event) {
    if (!dragState.active) return;
    if (event.pointerId === dragState.pointerId) {
      dragState.active = false;
      dragState.target = null;
      dragState.action = null;
      dragState.handle = null;
      dragState.rowKey = null;
      dragState.pointerId = null;
      dragState.startPoint = null;
      dragState.startRect = null;
      dragState.startRow = null;
      dragState.startRows = null;
      dragState.startCurve = null;
      dragState.snapGuides = [];
      elements.canvas.classList.remove("is-dragging");
      if (elements.canvas.hasPointerCapture(event.pointerId)) {
        elements.canvas.releasePointerCapture(event.pointerId);
      }
      renderPreview();
    }
  }

  elements.canvas.addEventListener("pointerup", endDrag);
  elements.canvas.addEventListener("pointercancel", endDrag);
  elements.canvas.addEventListener("pointerleave", (event) => {
    if (!dragState.active) {
      elements.canvas.style.cursor = "default";
    } else {
      event.preventDefault();
    }
  });
}

function updateTemplateSlotFromInputs() {
  const template = getCurrentTemplate();
  template.labelArea = {
    x: Number(elements.labelX.value) || 0,
    y: Number(elements.labelY.value) || 0,
    width: Math.max(20, Number(elements.labelW.value) || 20),
    height: Math.max(20, Number(elements.labelH.value) || 20),
  };
  template.clipArea = {
    x: Number(elements.clipX.value) || 0,
    y: Number(elements.clipY.value) || 0,
    width: Math.max(20, Number(elements.clipW.value) || 20),
    height: Math.max(20, Number(elements.clipH.value) || 20),
  };
  template.textScale = Math.max(0.3, Number(elements.textScale.value) || DEFAULT_TEXT_SCALE);
  template.lineScale = Math.max(0.5, Number(elements.lineScale.value) || DEFAULT_LINE_SCALE);
  template.curvePx = clamp(Number(elements.curvePx.value) || 0, -40, 40);
  template.curveCenter = clamp(Number(elements.curveCenter.value) || 50, 0, 100);
  const curve = normalizeCurve(template);
  curve.centerY = template.curvePx;
  curve.centerX = template.curveCenter;
  template.projection = clamp(Number(elements.projection.value) || DEFAULT_PROJECTION, 0.2, 1);
  updateSelectedRowFromInputs(false);
  saveAllConfigs();
}

function updateSelectedRowFromInputs(shouldSave = true) {
  const template = getCurrentTemplate();
  const row = getSelectedRow(template);
  row.x = Math.round(Number(elements.rowX.value) || 0);
  row.y = Math.round(Number(elements.rowY.value) || 0);
  row.width = Math.max(10, Math.round(Number(elements.rowW.value) || 10));
  row.fontSize = Math.max(4, Math.round(Number(elements.rowFontSize.value) || 4));
  if (shouldSave) saveAllConfigs();
}

function getRowLayoutBox(row) {
  const height = row.fontSize * 1.35;
  return {
    left: row.x,
    top: row.y,
    right: row.x + row.width,
    bottom: row.y + height,
    centerX: row.x + row.width / 2,
    centerY: row.y + height / 2,
    height,
  };
}

function getRowsLayoutBounds(rows) {
  const boxes = rows.map(getRowLayoutBox);
  const left = Math.min(...boxes.map((box) => box.left));
  const right = Math.max(...boxes.map((box) => box.right));
  const top = Math.min(...boxes.map((box) => box.top));
  const bottom = Math.max(...boxes.map((box) => box.bottom));
  return {
    left,
    right,
    top,
    bottom,
    centerX: (left + right) / 2,
    centerY: (top + bottom) / 2,
  };
}

function findNearestSnap(points, candidates) {
  let nearest = null;
  for (const point of points) {
    for (const candidate of candidates) {
      const delta = candidate.value - point.value;
      const distance = Math.abs(delta);
      if (distance <= ROW_SNAP_THRESHOLD && (!nearest || distance < nearest.distance)) {
        nearest = { delta, distance, value: candidate.value };
      }
    }
  }
  return nearest;
}

function getRowSnapAdjustment(template, startRows, dx, dy) {
  const selectedKeys = new Set(startRows.map((row) => row.key));
  const movingRows = startRows.map((row) => ({
    ...row,
    x: row.x + dx,
    y: row.y + dy,
  }));
  const movingBounds = getRowsLayoutBounds(movingRows);
  const labelArea = template.labelArea;
  const xCandidates = [
    { value: 0 },
    { value: labelArea.width / 2 },
    { value: labelArea.width },
  ];
  const yCandidates = [
    { value: 0 },
    { value: labelArea.height / 2 },
    { value: labelArea.height },
  ];

  for (const row of template.rows) {
    if (selectedKeys.has(row.key)) continue;
    const box = getRowLayoutBox(row);
    xCandidates.push({ value: box.left }, { value: box.centerX }, { value: box.right });
    yCandidates.push({ value: box.top }, { value: box.centerY }, { value: box.bottom });
  }

  const xSnap = findNearestSnap(
    [
      { value: movingBounds.left },
      { value: movingBounds.centerX },
      { value: movingBounds.right },
    ],
    xCandidates,
  );
  const ySnap = findNearestSnap(
    [
      { value: movingBounds.top },
      { value: movingBounds.centerY },
      { value: movingBounds.bottom },
    ],
    yCandidates,
  );

  const guides = [];
  if (xSnap) guides.push({ axis: "x", value: xSnap.value });
  if (ySnap) guides.push({ axis: "y", value: ySnap.value });
  return {
    dx: dx + (xSnap?.delta || 0),
    dy: dy + (ySnap?.delta || 0),
    guides,
  };
}

function alignSelectedRows(mode) {
  const template = getCurrentTemplate();
  const rows = getSelectedRows(template);
  if (rows.length < 2) return;

  pushHistory();
  const boxes = rows.map(getRowLayoutBox);
  const left = Math.min(...boxes.map((box) => box.left));
  const right = Math.max(...boxes.map((box) => box.right));
  const top = Math.min(...boxes.map((box) => box.top));
  const bottom = Math.max(...boxes.map((box) => box.bottom));
  const centerX = (left + right) / 2;
  const centerY = (top + bottom) / 2;

  for (const row of rows) {
    const box = getRowLayoutBox(row);
    if (mode === "left") {
      row.x = Math.round(left);
    } else if (mode === "center") {
      row.x = Math.round(centerX - row.width / 2);
    } else if (mode === "right") {
      row.x = Math.round(right - row.width);
    } else if (mode === "top") {
      row.y = Math.round(top);
    } else if (mode === "middle") {
      row.y = Math.round(centerY - box.height / 2);
    } else if (mode === "bottom") {
      row.y = Math.round(bottom - box.height);
    }
  }

  syncRowInputs();
  saveAllConfigs();
  renderPreview();
}

async function copyCurrentConfig() {
  const template = getCurrentTemplate();
  syncValuesFromInputs();
  updateTemplateSlotFromInputs();
  const payload = JSON.stringify(
    serializeTemplate(template),
    null,
    2,
  );
  await navigator.clipboard.writeText(payload);
  elements.copyConfigButton.textContent = "已复制";
  elements.copyConfigButtonMobile.textContent = "已复制";
  window.setTimeout(() => {
    elements.copyConfigButton.textContent = "复制当前参数";
    elements.copyConfigButtonMobile.textContent = "复制当前参数";
  }, 1200);
}

async function copyAllConfig() {
  syncValuesFromInputs();
  updateTemplateSlotFromInputs();
  const payload = JSON.stringify(
    state.templates.map((template) => serializeTemplate(template)),
    null,
    2,
  );
  await navigator.clipboard.writeText(payload);
  elements.copyAllConfigButton.textContent = "已复制全部";
  window.setTimeout(() => {
    elements.copyAllConfigButton.textContent = "复制全部参数";
  }, 1200);
}

function bindEvents() {
  for (const button of elements.modeButtons) {
    button.addEventListener("click", () => {
      setMode(button.dataset.mode);
    });
  }

  window.addEventListener("keydown", (event) => {
    const key = String(event.key || "").toLowerCase();
    if (!(event.ctrlKey || event.metaKey) || event.altKey || event.shiftKey || key !== "z") return;
    const target = event.target;
    const isTextEditing =
      target?.matches?.('input[type="text"], textarea, [contenteditable="true"]') ?? false;
    if (isTextEditing) return;
    event.preventDefault();
    undoLastChange();
  });

  elements.packageSelect.addEventListener("change", () => {
    selectTemplate(elements.packageSelect.value);
  });

  elements.packagePickerButton.addEventListener("click", (event) => {
    event.stopPropagation();
    setPackagePickerOpen(!elements.packagePicker.classList.contains("is-open"));
  });

  elements.packagePickerMenu.addEventListener("pointerdown", handlePackageOptionSelect);
  elements.packagePickerMenu.addEventListener("click", handlePackageOptionSelect);

  document.addEventListener("click", (event) => {
    if (!elements.packagePicker.contains(event.target)) {
      setPackagePickerOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setPackagePickerOpen(false);
      if (!elements.debugPasswordOverlay.hidden) {
        hideDebugPasswordDialog();
      }
    }
  });

  elements.sampleSelect.addEventListener("change", () => {
    state.currentSampleIndex = Number(elements.sampleSelect.value) || 0;
    state.values = structuredClone(state.testRows[state.currentSampleIndex]);
    buildFieldForm();
    renderPreview();
  });

  elements.fieldForm.addEventListener("input", renderPreview);
  elements.rowSelect.addEventListener("change", () => {
    selectOnlyRow(elements.rowSelect.value);
    syncRowInputs();
    elements.showGuides.checked = true;
    renderPreview();
  });

  for (const input of [elements.rowX, elements.rowY, elements.rowW, elements.rowFontSize]) {
    input.addEventListener("input", () => {
      pushHistory();
      updateSelectedRowFromInputs();
      renderPreview();
    });
  }

  const tuningInputs = [
    elements.labelX,
    elements.labelY,
    elements.labelW,
    elements.labelH,
    elements.clipX,
    elements.clipY,
    elements.clipW,
    elements.clipH,
    elements.textScale,
    elements.lineScale,
    elements.curvePx,
    elements.curveCenter,
    elements.projection,
  ];
  for (const input of tuningInputs) {
    input.addEventListener("input", () => {
      pushHistory();
      updateTemplateSlotFromInputs();
      renderPreview();
    });
  }
  for (const button of elements.alignRowButtons) {
    button.addEventListener("click", () => {
      alignSelectedRows(button.dataset.alignRows);
    });
  }
  elements.showGuides.addEventListener("change", renderPreview);
  elements.renderButton.addEventListener("click", renderPreview);
  elements.downloadPngButton.addEventListener("click", () => downloadCanvas("image/png"));
  elements.downloadJpgButton.addEventListener("click", () => downloadCanvas("image/jpeg"));
  elements.copyConfigButton.addEventListener("click", copyCurrentConfig);
  elements.copyConfigButtonMobile.addEventListener("click", copyCurrentConfig);
  elements.copyAllConfigButton.addEventListener("click", copyAllConfig);
  elements.solidifyCurrentButton.addEventListener("click", solidifyCurrentTemplate);
  elements.solidifyCurrentButtonMobile.addEventListener("click", solidifyCurrentTemplate);
  elements.addTemplateButton.addEventListener("click", addCustomTemplate);
  elements.replaceTemplateImage.addEventListener("change", replaceCurrentTemplateImage);
  elements.deleteTemplateButton.addEventListener("click", deleteCurrentTemplate);
  elements.debugPasswordForm.addEventListener("submit", submitDebugPassword);
  elements.debugPasswordCancel.addEventListener("click", hideDebugPasswordDialog);
  elements.resetCurrentButton.addEventListener("click", resetCurrentTemplate);
  elements.resetCurrentButtonMobile.addEventListener("click", resetCurrentTemplate);
  bindCanvasInteractions();
}

async function init() {
  await loadTestData();
  applyInitialQueryParams();
  reloadTemplatesForCurrentMode();
  fillSelects();
  buildFieldForm();
  syncCoordInputs();
  bindEvents();
  applyModeUi();
  renderPreview();
  if (state.pendingMode) {
    setMode(state.pendingMode);
    state.pendingMode = null;
  }
}

function applyInitialQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const templateId = params.get("template");
  const sampleIndex = Number(params.get("sample"));
  if (templateId && state.templates.some((template) => template.id === templateId)) {
    state.currentTemplateId = templateId;
  }
  if (Number.isInteger(sampleIndex) && sampleIndex >= 0 && sampleIndex < state.testRows.length) {
    state.currentSampleIndex = sampleIndex;
    state.values = structuredClone(state.testRows[sampleIndex]);
  }
  if (params.get("guides") === "1") {
    elements.showGuides.checked = true;
  }
  if (params.get("mode") === "debug") {
    state.pendingMode = "debug";
  }
}

init();
