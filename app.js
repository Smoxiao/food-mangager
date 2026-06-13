const STORAGE_KEY = "food-manager-state-v2";
const LEGACY_STORAGE_KEY = "food-manager-state-v1";
const OPENAI_API_KEY_STORAGE = "food-manager-openai-api-key-v1";
const categories = ["蔬菜", "水果", "肉蛋", "海鲜", "主食", "乳品", "调料", "其他"];
const storageLocations = ["冰箱冷藏", "冷冻室", "橱柜", "储物架", "台面", "其他"];
const dayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const mealSlots = ["早餐", "午餐", "晚餐", "加餐"];
const UI_TEXT = {
  appTitle: ["食物管家", "Food Manager"],
  loadDemo: ["载入示例数据", "Load demo data"],
  exportData: ["导出数据", "Export data"],
  importData: ["导入数据", "Import data"],
  languageLabel: ["语言", "Language"],
  stockSummary: ["库存食材", "Inventory"],
  expiringSummary: ["7天内到期", "Expiring in 7 days"],
  plannedSummary: ["已计划餐次", "Planned meals"],
  depletedSummary: ["已用完批次", "Used-up batches"],
  dashboardTab: ["看板", "Dashboard"],
  inventoryTab: ["库存", "Inventory"],
  mealTab: ["菜单", "Meals"],
  manageTab: ["分类/位置", "Categories/Locations"],
  dashboardTitle: ["饮食消耗看板", "Consumption Dashboard"],
  dashboardNote: ["统计最近 7 天的库存消耗和饮食分类均衡。", "Track recent consumption and category balance."],
  consumedKinds: ["消耗食材种类", "Consumed foods"],
  plannedCount: ["计划餐次", "Meal plans"],
  categoryCoverage: ["覆盖分类", "Categories"],
  categoryConsumption: ["分类消耗", "Category consumption"],
  quantitySummary: ["按数量汇总", "By quantity"],
  balanceTips: ["均衡提示", "Balance tips"],
  basedOnCategories: ["基于分类覆盖", "Based on categories"],
  totalConsumptionStats: ["消耗总统计", "Consumption summary"],
  allRecordsSummary: ["全部记录汇总", "All records"],
  inventoryInput: ["Inventory Input", "Inventory Input"],
  inventoryView: ["Inventory View", "Inventory View"],
  addInventoryTitle: ["录入库存", "Add Inventory"],
  foodLabel: ["食材", "Food"],
  qtyLabel: ["数量", "Quantity"],
  unitLabel: ["单位", "Unit"],
  caloriesLabel: ["每单位热量", "Calories per unit"],
  categoryLabel: ["分类", "Category"],
  expiryLabel: ["到期日", "Expiry"],
  storageLabel: ["贮藏位置", "Storage"],
  imageLabel: ["图片", "Image"],
  removeImage: ["移除图片", "Remove image"],
  addFood: ["添加食物", "Add food"],
  saveChanges: ["保存修改", "Save changes"],
  cancelEdit: ["取消编辑", "Cancel edit"],
  dailyConsume: ["日常消耗", "Daily consumption"],
  deductFromInventory: ["从库存直接扣除", "Deduct directly from inventory"],
  addSnack: ["加餐", "Snack"],
  allInventory: ["全部库存", "All inventory"],
  inventoryBatches: ["库存批次", "Inventory batches"],
  inventoryHintAll: ["查看当前库存、位置和到期状态。", "View current stock, locations, and expiry."],
  inventoryBatchHintAll: ["按每次进购的一批食材查看当前库存。", "View stock by each purchased batch."],
  inventoryBatchHintExpiring: ["只显示仍有库存且未来 7 天内到期的批次。", "Only batches in stock expiring within 7 days."],
  inventoryBatchHintDepleted: ["只显示数量为 0 的历史批次。", "Only historical batches with zero quantity."],
  resetAllInventory: ["回全部库存", "All inventory"],
  cardView: ["卡片", "Cards"],
  tableView: ["表格", "Table"],
  multiCategory: ["多选分类", "Multi-select categories"],
  showDepleted: ["显示已用完食材", "Show used-up foods"],
  allCategories: ["全部分类", "All categories"],
  allLocations: ["全部位置", "All locations"],
  sortByExpiry: ["按到期日", "By expiry"],
  sortByFood: ["按食材", "By food"],
  sortByQty: ["按数量", "By quantity"],
  mealInput: ["Meal Input", "Meal Input"],
  mealCalendarTitle: ["菜单输入与日历", "Meal Input & Calendar"],
  recipeByInventory: ["根据库存推荐菜谱", "Recipes from inventory"],
  onlineSearch: ["联网搜索", "Web search"],
  aiRecommend: ["AI推荐", "AI suggest"],
  generating: ["生成中", "Generating"],
  dateLabel: ["日期", "Date"],
  mealSlotLabel: ["餐次", "Meal"],
  mealNameLabel: ["菜名", "Dish name"],
  extraIngredients: ["备注食材", "Extra ingredients"],
  linkedInventoryFoods: ["关联库存食材", "Linked inventory foods"],
  deductWhenAdded: ["加入菜单时会自动扣库存", "Inventory is deducted when added."],
  addIngredient: ["加入食材", "Add food"],
  submitMeal: ["加入计划并扣库存", "Add plan & deduct"],
  saveMealEdit: ["保存菜单修改", "Save meal changes"],
  clearMeal: ["清空菜单", "Clear meal"],
  dailyMenu: ["每日菜单", "Daily menu"],
  prevWeek: ["上一周", "Previous week"],
  nextWeek: ["下一周", "Next week"],
  thisWeek: ["本周", "This week"],
  compact: ["简洁", "Simple"],
  today: ["今天", "Today"],
  mealHistory: ["菜单历史", "Meal history"],
  browseHistory: ["翻看以前安排过的菜单", "Review past meal plans"],
  options: ["Options", "Options"],
  manageTitle: ["分类与贮藏位置管理", "Categories & Storage"],
  manageNote: ["维护库存录入时的常用下拉选项。", "Manage dropdown options used when adding stock."],
  newCategory: ["新分类", "New category"],
  newStorage: ["新贮藏位置", "New storage"],
  add: ["添加", "Add"],
  templateTitle: ["库存数据模板", "Inventory data template"],
  templateHint: ["支持直接从 Excel 复制表格粘贴，也保留 JSON 导入。", "Paste from Excel, or import JSON."],
  excelPaste: ["Excel粘贴", "Excel paste"],
  json: ["JSON", "JSON"],
  downloadTemplate: ["下载模板", "Download template"],
  importCsv: ["导入CSV", "Import CSV"],
  templateColumns: ["Excel 列说明", "Excel columns"],
  name: ["名称", "Name"],
  heat: ["热量", "Calories"],
  importContent: ["导入内容", "Import content"],
  importPreview: ["导入预览", "Import preview"],
  waitingPaste: ["等待粘贴", "Waiting for paste"],
  loadSample: ["填入示例", "Fill sample"],
  loadExcelSample: ["填入 Excel 示例", "Fill Excel sample"],
  loadJsonSample: ["填入 JSON 示例", "Fill JSON sample"],
  appendImport: ["追加导入", "Append import"],
  replaceImport: ["覆盖导入", "Replace import"],
  sheetTemplateHint: ["支持直接从 Excel 复制整块表格粘贴，也支持 CSV 导入。", "Paste a full table from Excel, or import CSV."],
  jsonTemplateHint: ["保留 JSON 导入，适合备份模板或批量修改后再导入。", "Use JSON for backups or bulk edits before importing."],
  waitingJson: ["等待 JSON", "Waiting for JSON"],
  badFormat: ["格式有问题", "Format issue"],
  maintenance: ["维护操作", "Maintenance"],
  maintenanceHint: ["集中处理高风险操作，执行前会确认", "Risky actions are grouped here and require confirmation."],
  clearAllMeals: ["清空全部菜单计划", "Clear all meal plans"],
  removeDepleted: ["清理已用完库存批次", "Remove used-up batches"],
  clearInventory: ["清空全部库存", "Clear all inventory"],
  resetAllData: ["重置全部数据", "Reset all data"],
  export: ["Export", "Export"],
  exportNote: ["如果 Codex 浏览器没有直接下载，这里可以直接保存或复制完整数据。", "If the Codex browser cannot download directly, save or copy the full data here."],
  closeExport: ["关闭导出面板", "Close export panel"],
  saveToFile: ["保存到文件", "Save to file"],
  copyContent: ["复制内容", "Copy content"],
  exportContent: ["导出内容", "Export content"],
  select: ["选", "Select"],
  effectiveDate: ["有效期", "Expiry"],
  location: ["位置", "Location"],
  actions: ["操作", "Actions"],
  selectedCountPrefix: ["已选", "Selected"],
  pendingEditPrefix: ["待修改", "Pending"],
  rowUnit: ["行", "rows"],
  itemUnit: ["项", "items"],
  clearSelection: ["清空选择", "Clear selection"],
  batchSnack: ["批量加餐", "Batch snack"],
  cancelChanges: ["取消修改", "Cancel changes"],
  confirmChanges: ["确认修改", "Apply changes"],
  directTableEdit: ["直接改表格，支持复制粘贴，确认后再统一保存。", "Edit the table directly, paste from sheets, then apply changes."],
  checkFoodsForSnack: ["勾选食材，按各行数量一次加入今日加餐", "Select foods and add them as today's snack using row quantities."],
  edit: ["编辑", "Edit"],
  delete: ["删除", "Delete"],
  discard: ["丢", "Discard"],
  discardTitle: ["丢弃并扣库存", "Discard and deduct"],
  snackDeductTitle: ["加餐并扣库存", "Add snack and deduct"],
  processQty: ["处理份数", "Quantity to process"],
  noMatchingFood: ["还没有匹配的食物。", "No matching foods yet."],
  noAvailableInventory: ["暂无可用库存", "No available stock"],
  noLinkedFoods: ["还没有关联库存食材。", "No linked inventory foods yet."],
  notScheduled: ["未安排", "Unscheduled"],
  unnamedMeal: ["未命名菜单", "Unnamed meal"],
  useRecipe: ["套用", "Use"],
  breakfast: ["早餐", "Breakfast"],
  lunch: ["午餐", "Lunch"],
  dinner: ["晚餐", "Dinner"],
  snack: ["加餐", "Snack"]
};

const UI_ATTR_TEXT = {
  eggPlaceholder: ["鸡蛋", "Eggs"],
  unitPlaceholder: ["个/斤/包", "pcs/lb/pack"],
  autoEstimate: ["自动估算", "Auto estimate"],
  searchFoodCategoryLocation: ["搜索食材 / 分类 / 位置", "Search food / category / location"],
  searchFoodCategoryLocation2: ["搜索食物、分类或位置", "Search food, category, or location"],
  searchInventoryFood: ["搜索库存食材", "Search inventory foods"],
  mealNamePlaceholder: ["可不填，例如：番茄炒蛋", "Optional, e.g. tomato eggs"],
  extraIngredientsPlaceholder: ["可写不在库存里的配料", "Ingredients not in inventory"],
  apiKeyPlaceholder: ["OpenAI API Key，仅保存在本机浏览器", "OpenAI API Key, stored only in this browser"],
  newSnackCategory: ["例如：零食", "e.g. Snacks"],
  newHallCabinet: ["例如：玄关柜", "e.g. Entry cabinet"]
};
const CALORIE_LIBRARY = [
  { keywords: ["鸡胸", "鸡胸肉"], kcal: 133, mode: "per100g", serving: 120 },
  { keywords: ["鸡腿", "鸡肉"], kcal: 167, mode: "per100g", serving: 120 },
  { keywords: ["牛腩", "牛肉"], kcal: 250, mode: "per100g", serving: 100 },
  { keywords: ["五花肉"], kcal: 518, mode: "per100g", serving: 80 },
  { keywords: ["里脊", "猪肉"], kcal: 240, mode: "per100g", serving: 100 },
  { keywords: ["培根"], kcal: 405, mode: "per100g", serving: 40 },
  { keywords: ["火腿", "香肠"], kcal: 290, mode: "per100g", serving: 50 },
  { keywords: ["鸡蛋"], kcal: 78, mode: "unit", grams: 50 },
  { keywords: ["鸭蛋"], kcal: 130, mode: "unit", grams: 70 },
  { keywords: ["鹌鹑蛋"], kcal: 14, mode: "unit", grams: 10 },
  { keywords: ["虾仁", "虾"], kcal: 99, mode: "per100g", serving: 90 },
  { keywords: ["三文鱼"], kcal: 208, mode: "per100g", serving: 120 },
  { keywords: ["鳕鱼", "鱼"], kcal: 123, mode: "per100g", serving: 120 },
  { keywords: ["鱿鱼"], kcal: 92, mode: "per100g", serving: 100 },
  { keywords: ["豆腐"], kcal: 81, mode: "per100g", serving: 150 },
  { keywords: ["豆干", "香干"], kcal: 140, mode: "per100g", serving: 80 },
  { keywords: ["腐竹"], kcal: 457, mode: "per100g", serving: 40 },
  { keywords: ["牛奶"], kcal: 62, mode: "per100ml", serving: 250 },
  { keywords: ["酸奶"], kcal: 72, mode: "per100ml", serving: 180 },
  { keywords: ["奶酪", "芝士"], kcal: 328, mode: "per100g", serving: 30 },
  { keywords: ["燕麦"], kcal: 389, mode: "per100g", serving: 40 },
  { keywords: ["米饭"], kcal: 116, mode: "per100g", serving: 150 },
  { keywords: ["米", "糙米"], kcal: 346, mode: "per100g", serving: 80 },
  { keywords: ["面条", "挂面"], kcal: 286, mode: "per100g", serving: 100 },
  { keywords: ["意面"], kcal: 158, mode: "per100g", serving: 150 },
  { keywords: ["吐司", "面包"], kcal: 265, mode: "per100g", serving: 60 },
  { keywords: ["馒头"], kcal: 223, mode: "per100g", serving: 100 },
  { keywords: ["红薯", "地瓜"], kcal: 86, mode: "per100g", serving: 150 },
  { keywords: ["土豆", "马铃薯"], kcal: 77, mode: "per100g", serving: 150 },
  { keywords: ["玉米"], kcal: 96, mode: "per100g", serving: 150 },
  { keywords: ["南瓜"], kcal: 26, mode: "per100g", serving: 150 },
  { keywords: ["番茄", "西红柿"], kcal: 18, mode: "per100g", serving: 150 },
  { keywords: ["黄瓜"], kcal: 16, mode: "per100g", serving: 120 },
  { keywords: ["西兰花"], kcal: 34, mode: "per100g", serving: 120 },
  { keywords: ["菠菜"], kcal: 23, mode: "per100g", serving: 120 },
  { keywords: ["生菜"], kcal: 15, mode: "per100g", serving: 100 },
  { keywords: ["白菜"], kcal: 17, mode: "per100g", serving: 150 },
  { keywords: ["青椒", "彩椒"], kcal: 22, mode: "per100g", serving: 100 },
  { keywords: ["洋葱"], kcal: 40, mode: "per100g", serving: 100 },
  { keywords: ["蘑菇", "香菇", "金针菇"], kcal: 31, mode: "per100g", serving: 100 },
  { keywords: ["茄子"], kcal: 25, mode: "per100g", serving: 150 },
  { keywords: ["西葫芦"], kcal: 19, mode: "per100g", serving: 150 },
  { keywords: ["苹果"], kcal: 52, mode: "per100g", serving: 180 },
  { keywords: ["香蕉"], kcal: 89, mode: "per100g", serving: 120 },
  { keywords: ["橙子"], kcal: 47, mode: "per100g", serving: 180 },
  { keywords: ["草莓"], kcal: 32, mode: "per100g", serving: 120 },
  { keywords: ["蓝莓"], kcal: 57, mode: "per100g", serving: 80 },
  { keywords: ["坚果", "核桃", "腰果", "花生"], kcal: 607, mode: "per100g", serving: 20 },
  { keywords: ["饼干"], kcal: 433, mode: "per100g", serving: 30 },
  { keywords: ["巧克力"], kcal: 546, mode: "per100g", serving: 25 },
  { keywords: ["薯片"], kcal: 536, mode: "per100g", serving: 35 }
];
const CATEGORY_CALORIE_DEFAULTS = {
  蔬菜: { kcal: 28, mode: "per100g", serving: 120 },
  水果: { kcal: 55, mode: "per100g", serving: 150 },
  肉蛋: { kcal: 180, mode: "per100g", serving: 100 },
  海鲜: { kcal: 108, mode: "per100g", serving: 100 },
  主食: { kcal: 160, mode: "per100g", serving: 120 },
  乳品: { kcal: 62, mode: "per100ml", serving: 220 },
  调料: { kcal: 260, mode: "per100g", serving: 20 },
  其他: { kcal: 120, mode: "unit", grams: 100 }
};
const RECIPE_LIBRARY = buildRecipeLibrary();

const state = loadState();
let editingFoodId = null;
let editingMealId = null;
let mealConsumptions = [];
let activeView = "inventory";
let activeStockFilter = "all";
let activeCategoryFilters = new Set();
let inventoryViewMode = "card";
let draggedMealId = null;
let draggedMealFood = null;
let aiRecipeSuggestions = [];
let removeCurrentFoodImage = false;
let plannerStartDate = startOfWeek(new Date());
let compactPlannerView = false;
let selectedInventoryBatchIds = new Set();
let selectedInventoryBatchQtys = new Map();
let inventoryTableDrafts = new Map();
let inventoryTemplateMode = "sheet";

const els = {
  totalItems: document.querySelector("#totalItems"),
  expiringItems: document.querySelector("#expiringItems"),
  plannedMeals: document.querySelector("#plannedMeals"),
  lowStockItems: document.querySelector("#lowStockItems"),
  summaryCards: document.querySelectorAll("[data-summary]"),
  dashboardTab: document.querySelector("#dashboardTab"),
  inventoryTab: document.querySelector("#inventoryTab"),
  mealTab: document.querySelector("#mealTab"),
  manageTab: document.querySelector("#manageTab"),
  dashboardView: document.querySelector("#dashboardView"),
  inventoryView: document.querySelector("#inventoryView"),
  mealView: document.querySelector("#mealView"),
  manageView: document.querySelector("#manageView"),
  dashConsumedCount: document.querySelector("#dashConsumedCount"),
  dashMealCount: document.querySelector("#dashMealCount"),
  dashCategoryCount: document.querySelector("#dashCategoryCount"),
  categoryBalanceList: document.querySelector("#categoryBalanceList"),
  balanceTips: document.querySelector("#balanceTips"),
  consumptionStatsList: document.querySelector("#consumptionStatsList"),
  mealHistoryList: document.querySelector("#mealHistoryList"),
  inventoryDisplay: document.querySelector("#inventoryDisplay"),
  plannerDisplay: document.querySelector("#plannerDisplay"),
  stockViewTitle: document.querySelector("#stockViewTitle"),
  stockQuickHint: document.querySelector("#stockQuickHint"),
  resetStockFilter: document.querySelector("#resetStockFilter"),
  foodForm: document.querySelector("#foodForm"),
  foodSubmit: document.querySelector("#foodSubmit"),
  cancelFoodEdit: document.querySelector("#cancelFoodEdit"),
  foodName: document.querySelector("#foodName"),
  foodQty: document.querySelector("#foodQty"),
  foodUnit: document.querySelector("#foodUnit"),
  foodCalories: document.querySelector("#foodCalories"),
  foodCategory: document.querySelector("#foodCategory"),
  foodExpiry: document.querySelector("#foodExpiry"),
  foodStorage: document.querySelector("#foodStorage"),
  foodImage: document.querySelector("#foodImage"),
  foodImagePreview: document.querySelector("#foodImagePreview"),
  removeFoodImage: document.querySelector("#removeFoodImage"),
  manageCategoryInput: document.querySelector("#manageCategoryInput"),
  addCategoryOption: document.querySelector("#addCategoryOption"),
  categoryOptionList: document.querySelector("#categoryOptionList"),
  manageStorageInput: document.querySelector("#manageStorageInput"),
  addStorageOption: document.querySelector("#addStorageOption"),
  storageOptionList: document.querySelector("#storageOptionList"),
  inventoryTemplateHint: document.querySelector("#inventoryTemplateHint"),
  templateSheetMode: document.querySelector("#templateSheetMode"),
  templateJsonMode: document.querySelector("#templateJsonMode"),
  downloadInventoryTemplate: document.querySelector("#downloadInventoryTemplate"),
  inventoryTemplateFile: document.querySelector("#inventoryTemplateFile"),
  templateGuide: document.querySelector("#templateGuide"),
  inventoryTemplateInput: document.querySelector("#inventoryTemplateInput"),
  inventoryTemplatePreviewMeta: document.querySelector("#inventoryTemplatePreviewMeta"),
  inventoryTemplatePreview: document.querySelector("#inventoryTemplatePreview"),
  loadInventoryTemplateSample: document.querySelector("#loadInventoryTemplateSample"),
  importInventoryTemplateAppend: document.querySelector("#importInventoryTemplateAppend"),
  importInventoryTemplateReplace: document.querySelector("#importInventoryTemplateReplace"),
  dailyDate: document.querySelector("#dailyDate"),
  dailyFoodSearch: document.querySelector("#dailyFoodSearch"),
  dailyFood: document.querySelector("#dailyFood"),
  dailyQty: document.querySelector("#dailyQty"),
  dailyConsume: document.querySelector("#dailyConsume"),
  foodList: document.querySelector("#foodList"),
  searchInput: document.querySelector("#searchInput"),
  sortMode: document.querySelector("#sortMode"),
  storageFilter: document.querySelector("#storageFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  categoryMultiSelect: document.querySelector("#categoryMultiSelect"),
  cardInventoryView: document.querySelector("#cardInventoryView"),
  tableInventoryView: document.querySelector("#tableInventoryView"),
  showDepleted: document.querySelector("#showDepleted"),
  mealForm: document.querySelector("#mealForm"),
  mealSubmit: document.querySelector("#mealSubmit"),
  clearMealDraft: document.querySelector("#clearMealDraft"),
  cancelMealEdit: document.querySelector("#cancelMealEdit"),
  mealDate: document.querySelector("#mealDate"),
  mealSlot: document.querySelector("#mealSlot"),
  mealName: document.querySelector("#mealName"),
  mealIngredients: document.querySelector("#mealIngredients"),
  mealFoodSearch: document.querySelector("#mealFoodSearch"),
  mealFood: document.querySelector("#mealFood"),
  mealFoodQty: document.querySelector("#mealFoodQty"),
  addMealFood: document.querySelector("#addMealFood"),
  mealFoodList: document.querySelector("#mealFoodList"),
  recipeSuggestions: document.querySelector("#recipeSuggestions"),
  searchRecipesOnline: document.querySelector("#searchRecipesOnline"),
  openaiApiKey: document.querySelector("#openaiApiKey"),
  recipeModel: document.querySelector("#recipeModel"),
  aiRecommendRecipes: document.querySelector("#aiRecommendRecipes"),
  plannerGrid: document.querySelector("#plannerGrid"),
  plannerRangeLabel: document.querySelector("#plannerRangeLabel"),
  prevPlannerWeek: document.querySelector("#prevPlannerWeek"),
  compactPlannerView: document.querySelector("#compactPlannerView"),
  todayPlannerWeek: document.querySelector("#todayPlannerWeek"),
  nextPlannerWeek: document.querySelector("#nextPlannerWeek"),
  clearAllMealPlans: document.querySelector("#clearAllMealPlans"),
  removeDepletedFoods: document.querySelector("#removeDepletedFoods"),
  clearAllInventory: document.querySelector("#clearAllInventory"),
  resetAllData: document.querySelector("#resetAllData"),
  seedDemo: document.querySelector("#seedDemo"),
  exportData: document.querySelector("#exportData"),
  importData: document.querySelector("#importData"),
  languageSelect: document.querySelector("#languageSelect"),
  exportOverlay: document.querySelector("#exportOverlay"),
  closeExportOverlay: document.querySelector("#closeExportOverlay"),
  exportStatus: document.querySelector("#exportStatus"),
  saveExportFile: document.querySelector("#saveExportFile"),
  copyExportText: document.querySelector("#copyExportText"),
  exportText: document.querySelector("#exportText"),
  template: document.querySelector("#foodItemTemplate")
};

els.mealDate.value = toDateInput(new Date());
els.dailyDate.value = toDateInput(new Date());
els.openaiApiKey.value = localStorage.getItem(OPENAI_API_KEY_STORAGE) || "";
renderFoodImagePreview("");
enableDatePickers();
refreshFoodCaloriesEstimate(true);
setInventoryTemplateMode("sheet");
syncInventoryTemplatePreview();

els.languageSelect.value = getLanguage();
els.languageSelect.addEventListener("change", () => {
  state.settings.language = els.languageSelect.value === "en" ? "en" : "zh";
  saveAndRender();
});

function enableDatePickers() {
  for (const input of document.querySelectorAll('input[type="date"]')) {
    input.addEventListener("click", () => openDatePicker(input));
    input.addEventListener("focus", () => openDatePicker(input));
  }
}

function openDatePicker(input) {
  if (typeof input.showPicker !== "function" || input.dataset.pickerOpen === "1") return;
  input.dataset.pickerOpen = "1";
  try {
    input.showPicker();
  } catch {
    // Some browsers only allow showPicker from direct user gestures.
  } finally {
    setTimeout(() => {
      input.dataset.pickerOpen = "0";
    }, 180);
  }
}

function refreshFoodCaloriesEstimate(force = false) {
  if (!force && els.foodCalories.dataset.source === "manual" && els.foodCalories.value.trim()) return;
  const estimated = estimateFoodCalories(els.foodName.value, els.foodUnit.value, els.foodCategory.value);
  els.foodCalories.value = estimated ? String(estimated) : "";
  els.foodCalories.dataset.source = estimated ? "auto" : "manual";
}

els.foodForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const existingFood = editingFoodId ? getFood(editingFoodId) : null;
  const uploadedImage = els.foodImage.files && els.foodImage.files[0]
    ? await readImageFile(els.foodImage.files[0])
    : "";
  const food = {
    id: editingFoodId || crypto.randomUUID(),
    name: els.foodName.value.trim(),
    qty: toNumber(els.foodQty.value),
    unit: els.foodUnit.value.trim() || "份",
    calories: roundCalories(toEditableNumber(els.foodCalories.value, 0)),
    calorieSource: els.foodCalories.dataset.source || "auto",
    category: els.foodCategory.value,
    expiry: els.foodExpiry.value,
    storage: els.foodStorage.value,
    image: removeCurrentFoodImage ? "" : (uploadedImage || (existingFood && existingFood.image) || ""),
    createdAt: existingFood ? existingFood.createdAt : new Date().toISOString()
  };

  if (!food.name) return;

  const existingIndex = state.foods.findIndex((item) => item.id === food.id);
  if (existingIndex >= 0) {
    state.foods[existingIndex] = food;
  } else {
    state.foods.push(food);
  }

  resetFoodForm();
  saveAndRender();
});

els.cancelFoodEdit.addEventListener("click", resetFoodForm);

els.foodImage.addEventListener("change", async () => {
  removeCurrentFoodImage = false;
  const file = els.foodImage.files && els.foodImage.files[0];
  renderFoodImagePreview(file ? await readImageFile(file) : getEditingFoodImage());
});

els.removeFoodImage.addEventListener("click", () => {
  removeCurrentFoodImage = true;
  els.foodImage.value = "";
  renderFoodImagePreview("");
});

els.foodName.addEventListener("input", () => refreshFoodCaloriesEstimate());
els.foodUnit.addEventListener("input", () => refreshFoodCaloriesEstimate());
els.foodCategory.addEventListener("change", () => refreshFoodCaloriesEstimate(true));
els.foodCalories.addEventListener("input", () => {
  els.foodCalories.dataset.source = els.foodCalories.value.trim() ? "manual" : "auto";
});
els.foodCalories.addEventListener("blur", () => {
  if (!els.foodCalories.value.trim()) refreshFoodCaloriesEstimate(true);
});
els.dailyFoodSearch.addEventListener("input", renderInventoryOptions);
els.mealFoodSearch.addEventListener("input", renderInventoryOptions);
els.mealFoodSearch.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  addSelectedMealFood();
});
els.mealFoodQty.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  addSelectedMealFood();
});

els.dailyConsume.addEventListener("click", () => {
  const food = getFood(els.dailyFood.value);
  const qty = toNumber(els.dailyQty.value) || 1;
  if (!food || qty <= 0) return;
  if (!addInventorySnackMeal(food, qty, els.dailyDate.value || toDateInput(new Date()))) return;
  els.dailyQty.value = 1;
  saveAndRender();
});

els.addMealFood.addEventListener("click", () => {
  addSelectedMealFood();
});

function addSelectedMealFood() {
  const food = getFood(els.mealFood.value);
  const qty = toNumber(els.mealFoodQty.value) || 1;
  if (!food || qty <= 0) return;

  const existing = mealConsumptions.find((item) => item.foodId === food.id);
  if (existing) {
    existing.qty = Number((existing.qty + qty).toFixed(2));
  } else {
    mealConsumptions.push({
      foodId: food.id,
      foodName: food.name,
      qty,
      unit: food.unit,
      calories: food.calories,
      category: food.category,
      storage: food.storage
    });
  }
  els.mealFoodQty.value = 1;
  renderMealConsumptionDraft();
}

els.mealFoodList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-food-id]");
  if (!button) return;
  mealConsumptions = mealConsumptions.filter((item) => item.foodId !== button.dataset.foodId);
  renderMealConsumptionDraft();
});

els.mealFoodList.addEventListener("input", (event) => {
  const input = event.target.closest("input[data-food-id]");
  if (!input) return;
  const item = mealConsumptions.find((entry) => entry.foodId === input.dataset.foodId);
  if (!item) return;
  item.qty = Math.max(0, toNumber(input.value));
});

els.cancelMealEdit.addEventListener("click", resetMealForm);
els.clearMealDraft.addEventListener("click", resetMealForm);

els.mealHistoryList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-edit-meal-id]");
  if (!button) return;
  startMealEdit(button.dataset.editMealId);
});

els.recipeSuggestions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-recipe-index]");
  if (!button) return;
  const suggestion = getVisibleRecipeSuggestions()[Number(button.dataset.recipeIndex)];
  if (!suggestion) return;
  applyRecipeSuggestion(suggestion);
});

els.openaiApiKey.addEventListener("input", () => {
  localStorage.setItem(OPENAI_API_KEY_STORAGE, els.openaiApiKey.value.trim());
});

els.aiRecommendRecipes.addEventListener("click", fetchAiRecipeSuggestions);

els.searchRecipesOnline.addEventListener("click", () => {
  const query = getRecipeSearchQuery();
  if (!query) {
    alert("先添加一些非零食类库存食材，再进行搜索。");
    return;
  }
  window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank", "noopener");
});

els.mealForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const existingMeal = editingMealId ? getMeal(editingMealId) : null;
  mealConsumptions = mealConsumptions
    .map((item) => ({ ...item, qty: toNumber(item.qty) }))
    .filter((item) => item.qty > 0);
  if (existingMeal) restoreStockForMeal(existingMeal);
  if (!consumeStock(mealConsumptions)) {
    if (existingMeal) consumeStock(existingMeal.consumptions || []);
    return;
  }
  const mealName = getMealName();
  const dateChanged = existingMeal && existingMeal.date !== els.mealDate.value;
  const mealData = {
    id: existingMeal ? existingMeal.id : crypto.randomUUID(),
    date: els.mealDate.value,
    slot: els.mealSlot.value,
    name: mealName,
    ingredients: els.mealIngredients.value.trim(),
    consumptions: mealConsumptions.map((item) => ({ ...item })),
    order: existingMeal && !dateChanged ? existingMeal.order : nextMealOrder(els.mealDate.value)
  };

  if (mealData.slot === "加餐") {
    saveSnackMeal(mealData, existingMeal);
  } else if (existingMeal) {
    const index = state.meals.findIndex((meal) => meal.id === existingMeal.id);
    state.meals[index] = mealData;
  } else {
    state.meals.push(mealData);
  }

  resetMealForm();
  saveAndRender();
});

els.foodList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.classList.contains("batch-consume")) {
    addSelectedTableFoodsAsSnack();
    return;
  }

  if (button.classList.contains("batch-clear")) {
    clearInventoryBatchSelection();
    renderFoods();
    return;
  }

  const row = button.closest(".food-item, tr[data-id]");
  if (!row) return;
  const food = getFood(row.dataset.id);
  if (!food) return;

  if (button.classList.contains("edit")) {
    startFoodEdit(food);
    return;
  }

  if (button.classList.contains("consume")) {
    const qtyInput = row.querySelector(".quick-qty");
    const qty = toNumber(qtyInput && qtyInput.value) || 1;
    addInventorySnackMeal(food, qty, els.dailyDate.value || toDateInput(new Date()));
  }

  if (button.classList.contains("discard")) {
    const qtyInput = row.querySelector(".quick-qty");
    const qty = toNumber(qtyInput && qtyInput.value) || 1;
    addInventoryDiscardLog(food, qty, els.dailyDate.value || toDateInput(new Date()));
  }

  if (button.classList.contains("delete")) {
    state.foods = state.foods.filter((item) => item.id !== food.id);
    mealConsumptions = mealConsumptions.filter((item) => item.foodId !== food.id);
  }

  saveAndRender();
});

els.foodList.addEventListener("change", (event) => {
  const checkbox = event.target.closest(".inventory-batch-check");
  if (!checkbox) return;
  const row = checkbox.closest("tr[data-id]");
  if (!row) return;
  const foodId = row.dataset.id;
  if (checkbox.checked) {
    selectedInventoryBatchIds.add(foodId);
    if (!selectedInventoryBatchQtys.has(foodId)) {
      selectedInventoryBatchQtys.set(foodId, 1);
    }
  } else {
    selectedInventoryBatchIds.delete(foodId);
  }
  row.classList.toggle("is-selected", checkbox.checked);
  updateBatchSelectionSummary();
});

els.foodList.addEventListener("input", (event) => {
  const qtyInput = event.target.closest("tr[data-id] .quick-qty");
  if (!qtyInput) return;
  const row = qtyInput.closest("tr[data-id]");
  if (!row) return;
  selectedInventoryBatchQtys.set(row.dataset.id, toEditableNumber(qtyInput.value));
});

els.plannerGrid.addEventListener("click", (event) => {
  const editButton = event.target.closest("button[data-edit-meal-id]");
  if (editButton) {
    startMealEdit(editButton.dataset.editMealId);
    return;
  }

  const copyButton = event.target.closest("button[data-copy-meal-id]");
  if (copyButton) {
    copyMeal(copyButton.dataset.copyMealId);
    saveAndRender();
    return;
  }

  const button = event.target.closest("button[data-meal-id]");
  if (!button) return;
  deleteMeal(button.dataset.mealId);
  if (editingMealId === button.dataset.mealId) resetMealForm();
  saveAndRender();
});

els.plannerGrid.addEventListener("dragstart", (event) => {
  const foodTag = event.target.closest(".meal-food-tag");
  if (foodTag && foodTag.dataset.mealId && foodTag.dataset.mealFoodKey) {
    draggedMealFood = {
      mealId: foodTag.dataset.mealId,
      key: foodTag.dataset.mealFoodKey
    };
    draggedMealId = null;
    foodTag.classList.add("is-dragging");
    foodTag.closest(".meal-card")?.classList.add("is-dragging-food");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify({ type: "meal-food", ...draggedMealFood }));
    return;
  }

  const card = event.target.closest(".meal-card");
  if (!card) return;
  draggedMealId = card.dataset.mealId;
  draggedMealFood = null;
  card.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedMealId);
});

els.plannerGrid.addEventListener("dragover", (event) => {
  const column = event.target.closest(".day-column");
  if (!column || (!draggedMealId && !draggedMealFood)) return;
  event.preventDefault();
  column.classList.add("is-drop-target");
  event.dataTransfer.dropEffect = "move";
});

els.plannerGrid.addEventListener("dragleave", (event) => {
  const column = event.target.closest(".day-column");
  if (!column || column.contains(event.relatedTarget)) return;
  column.classList.remove("is-drop-target");
});

els.plannerGrid.addEventListener("drop", (event) => {
  const column = event.target.closest(".day-column");
  if (!column || (!draggedMealId && !draggedMealFood)) return;
  event.preventDefault();
  if (draggedMealFood) {
    moveMealConsumptionToDate(draggedMealFood.mealId, draggedMealFood.key, column.dataset.date);
  } else {
    moveMeal(draggedMealId, column.dataset.date, event.target.closest(".meal-card"));
  }
  draggedMealId = null;
  draggedMealFood = null;
  clearDropTargets();
  saveAndRender();
});

els.plannerGrid.addEventListener("dragend", () => {
  draggedMealId = null;
  draggedMealFood = null;
  clearDropTargets();
  for (const card of els.plannerGrid.querySelectorAll(".meal-card")) {
    card.classList.remove("is-dragging", "is-dragging-food");
  }
  for (const foodTag of els.plannerGrid.querySelectorAll(".meal-food-tag")) {
    foodTag.classList.remove("is-dragging");
  }
});

els.prevPlannerWeek.addEventListener("click", () => shiftPlannerWeek(-1));
els.compactPlannerView.addEventListener("click", () => {
  compactPlannerView = !compactPlannerView;
  renderPlanner();
});
els.todayPlannerWeek.addEventListener("click", () => {
  plannerStartDate = startOfWeek(new Date());
  renderPlanner();
});
els.nextPlannerWeek.addEventListener("click", () => shiftPlannerWeek(1));

els.clearAllMealPlans.addEventListener("click", () => {
  if (!state.meals.length) return;
  if (!confirm("确定清空全部菜单计划吗？已扣库存会恢复。")) return;
  clearMealPlan();
  resetMealForm();
  saveAndRender();
});

els.removeDepletedFoods.addEventListener("click", () => {
  const depletedCount = state.foods.filter((food) => food.qty <= 0).length;
  if (!depletedCount) return;
  if (!confirm(`确定清理 ${depletedCount} 个已用完库存批次吗？`)) return;
  state.foods = state.foods.filter((food) => food.qty > 0);
  mealConsumptions = mealConsumptions.filter((item) => getFood(item.foodId));
  saveAndRender();
});

els.clearAllInventory.addEventListener("click", () => {
  if (!state.foods.length) return;
  if (!confirm("确定清空全部库存吗？菜单历史和统计记录会保留。")) return;
  state.foods = [];
  mealConsumptions = [];
  resetFoodForm();
  renderMealConsumptionDraft();
  saveAndRender();
});

els.resetAllData.addEventListener("click", () => {
  if (!confirm("确定重置全部数据吗？库存、菜单、统计记录和自定义选项都会清空。")) return;
  state.foods = [];
  state.meals = [];
  state.logs = [];
  state.settings = normalizeSettings({});
  mealConsumptions = [];
  editingFoodId = null;
  editingMealId = null;
  plannerStartDate = startOfWeek(new Date());
  resetFoodForm();
  resetMealForm();
  saveAndRender();
});

els.searchInput.addEventListener("input", renderFoods);
els.sortMode.addEventListener("change", renderFoods);
els.categoryFilter.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category-filter]");
  if (!button) return;
  const category = button.dataset.categoryFilter;
  if (category === "all") {
    activeCategoryFilters.clear();
  } else if (!els.categoryMultiSelect.checked) {
    activeCategoryFilters = new Set([category]);
  } else if (activeCategoryFilters.has(category)) {
    activeCategoryFilters.delete(category);
  } else {
    activeCategoryFilters.add(category);
  }
  renderCategoryControls();
  renderFoods();
});
els.categoryMultiSelect.addEventListener("change", () => {
  if (!els.categoryMultiSelect.checked && activeCategoryFilters.size > 1) {
    activeCategoryFilters = new Set([[...activeCategoryFilters][0]]);
  }
  renderCategoryControls();
  renderFoods();
});
els.cardInventoryView.addEventListener("click", () => {
  inventoryViewMode = "card";
  renderInventoryViewMode();
  renderFoods();
});
els.tableInventoryView.addEventListener("click", () => {
  inventoryViewMode = "table";
  renderInventoryViewMode();
  renderFoods();
});
els.storageFilter.addEventListener("change", renderFoods);
els.showDepleted.addEventListener("change", renderFoods);

document.addEventListener("click", (event) => {
  const comboButton = event.target.closest("[data-combo]");
  if (comboButton) {
    toggleComboMenu(comboButton.dataset.combo);
    return;
  }

  const option = event.target.closest("[data-combo-option]");
  if (option) {
    applyComboOption(option.dataset.comboOption, option.dataset.value);
    return;
  }

  if (!event.target.closest(".combo-field")) {
    closeComboMenus();
  }
});

els.seedDemo.addEventListener("click", () => {
  state.foods = demoFoods();
  state.meals = demoMeals();
  state.logs = [];
  resetMealForm();
  resetFoodForm();
  saveAndRender();
});

els.exportData.addEventListener("click", () => {
  exportStateData();
});

function exportStateData() {
  try {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `food-manager-${toDateInput(new Date())}.json`;
    link.style.display = "none";
    document.body.append(link);
    link.click();
    setTimeout(() => {
      link.remove();
      URL.revokeObjectURL(url);
    }, 500);
  } catch (error) {
    alert(`导出失败：${error.message}`);
  }
}

els.loadInventoryTemplateSample.addEventListener("click", () => {
  els.inventoryTemplateInput.value = JSON.stringify([
    { name: "鸡蛋", qty: 12, unit: "个", calories: 78, category: "肉蛋", expiry: "2026-06-06", storage: "冰箱冷藏" },
    { name: "番茄", qty: 4, unit: "个", category: "蔬菜", expiry: "2026-06-05", storage: "台面" },
    { name: "牛奶", qty: 2, unit: "瓶", category: "乳品", expiry: "2026-06-08", storage: "冰箱冷藏" }
  ], null, 2);
});

els.importInventoryTemplateAppend.addEventListener("click", () => {
  importInventoryTemplate("append");
});

els.importInventoryTemplateReplace.addEventListener("click", () => {
  importInventoryTemplate("replace");
});

function importInventoryTemplate(mode) {
  const raw = String(els.inventoryTemplateInput.value || "").trim();
  if (!raw) {
    alert("先粘贴库存模板 JSON。");
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    const sourceFoods = Array.isArray(parsed) ? parsed : parsed && Array.isArray(parsed.foods) ? parsed.foods : null;
    if (!sourceFoods) {
      alert("模板格式不对，请使用数组，或包含 foods 数组的 JSON。");
      return;
    }

    const importedFoods = normalizeFoods(sourceFoods).map((food) => ({
      ...food,
      id: crypto.randomUUID()
    }));
    if (!importedFoods.length) {
      alert("模板里没有可导入的库存数据。");
      return;
    }

    if (mode === "replace") {
      if (!confirm(`将用模板覆盖当前 ${state.foods.length} 条库存数据，确定吗？`)) return;
      state.foods = importedFoods;
    } else {
      if (!confirm(`将向当前库存追加 ${importedFoods.length} 条数据，确定吗？`)) return;
      state.foods = [...state.foods, ...importedFoods];
    }

    clearInventoryBatchSelection();
    mealConsumptions = mealConsumptions.filter((item) => getFood(item.foodId));
    saveAndRender();
  } catch (error) {
    alert(`导入失败：${error.message}`);
  }
}

els.importData.addEventListener("change", async () => {
  const [file] = els.importData.files;
  if (!file) return;
  const data = normalizeState(JSON.parse(await file.text()));
  state.foods = data.foods;
  state.meals = data.meals;
  state.logs = data.logs;
  state.settings = data.settings;
  resetMealForm();
  els.importData.value = "";
  resetFoodForm();
  saveAndRender();
});

els.addCategoryOption.addEventListener("click", () => {
  addManagedOption("categories", els.manageCategoryInput.value);
  els.manageCategoryInput.value = "";
});

els.addStorageOption.addEventListener("click", () => {
  addManagedOption("storages", els.manageStorageInput.value);
  els.manageStorageInput.value = "";
});

els.categoryOptionList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-option]");
  if (!button) return;
  removeManagedOption("categories", button.dataset.option);
});

els.storageOptionList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-option]");
  if (!button) return;
  removeManagedOption("storages", button.dataset.option);
});

els.dashboardTab.addEventListener("click", (event) => {
  event.currentTarget.blur();
  switchView("dashboard");
});
els.inventoryTab.addEventListener("click", (event) => {
  event.currentTarget.blur();
  setStockFilter("all");
  switchView("inventory");
  renderFoods();
  renderSummary();
});
els.mealTab.addEventListener("click", (event) => {
  event.currentTarget.blur();
  switchView("meal");
});
els.manageTab.addEventListener("click", (event) => {
  event.currentTarget.blur();
  switchView("manage");
});
els.resetStockFilter.addEventListener("click", (event) => {
  event.currentTarget.blur();
  setStockFilter("all");
  switchView("inventory");
  renderFoods();
  renderSummary();
});

for (const card of els.summaryCards) {
  card.addEventListener("click", () => handleSummaryAction(card.dataset.summary));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSummaryAction(card.dataset.summary);
    }
  });
}

function saveAndRender() {
  pruneInventoryBatchSelection();
  pruneInventoryTableDrafts();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function pruneInventoryBatchSelection() {
  const validIds = new Set(state.foods.map((food) => food.id));
  selectedInventoryBatchIds = new Set([...selectedInventoryBatchIds].filter((id) => validIds.has(id)));
  for (const id of [...selectedInventoryBatchQtys.keys()]) {
    if (!validIds.has(id)) selectedInventoryBatchQtys.delete(id);
  }
}

function pruneInventoryTableDrafts() {
  const validIds = new Set(state.foods.map((food) => food.id));
  for (const id of [...inventoryTableDrafts.keys()]) {
    if (!validIds.has(id)) inventoryTableDrafts.delete(id);
  }
}

function render() {
  renderSummary();
  renderViewState();
  renderInventoryViewMode();
  renderOptionControls();
  renderInventoryOptions();
  renderFoods();
  renderRecipeSuggestions();
  renderMealConsumptionDraft();
  renderPlanner();
  renderDashboard();
  applyLanguage();
  applyOverflowTitles();
}

function renderInventoryViewMode() {
  els.cardInventoryView.classList.toggle("is-active", inventoryViewMode === "card");
  els.tableInventoryView.classList.toggle("is-active", inventoryViewMode === "table");
}

function renderOptionControls() {
  renderCategoryControls();
  renderStorageControls();
  renderManagedOptionLists();
}

function renderCategoryControls() {
  const selectedCategory = els.foodCategory.value || "蔬菜";
  const categoryList = getCategoryList();
  const availableCategories = [...new Set([selectedCategory, ...categoryList].filter(Boolean))];
  els.foodCategory.innerHTML = availableCategories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  els.foodCategory.value = availableCategories.includes(selectedCategory) ? selectedCategory : (availableCategories[0] || "");
  renderComboMenu(els.categoryMenu, "category", categoryList);
  activeCategoryFilters = new Set([...activeCategoryFilters].filter((category) => categoryList.includes(category)));
  els.categoryFilter.innerHTML = [
    `<button class="slicer-chip ${activeCategoryFilters.size ? "" : "is-active"}" type="button" data-category-filter="all">全部分类</button>`,
    ...categoryList.map((category) => `
      <button class="slicer-chip ${activeCategoryFilters.has(category) ? "is-active" : ""}" type="button" data-category-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>
    `)
  ].join("");
}

function renderStorageControls() {
  const selected = els.storageFilter.value || "all";
  const selectedStorage = els.foodStorage.value || "冰箱冷藏";
  const storageList = getStorageList();
  const availableStorages = [...new Set([selectedStorage, ...storageList].filter(Boolean))];
  els.foodStorage.innerHTML = availableStorages.map((storage) => `<option value="${escapeHtml(storage)}">${escapeHtml(storage)}</option>`).join("");
  els.foodStorage.value = availableStorages.includes(selectedStorage) ? selectedStorage : (availableStorages[0] || "");
  renderComboMenu(els.storageMenu, "storage", storageList);
  els.storageFilter.innerHTML = [
    '<option value="all">全部位置</option>',
    ...storageList.map((storage) => `<option value="${escapeHtml(storage)}">${escapeHtml(storage)}</option>`)
  ].join("");
  els.storageFilter.value = selected === "all" || storageList.includes(selected) ? selected : "all";
}

function renderComboMenu(container, type, options) {
  if (!container) return;
  container.innerHTML = options.map((option) => `
    <button type="button" data-combo-option="${type}" data-value="${escapeHtml(option)}">${escapeHtml(option)}</button>
  `).join("");
}

function toggleComboMenu(type, forceOpen = false) {
  const menu = type === "category" ? els.categoryMenu : els.storageMenu;
  const other = type === "category" ? els.storageMenu : els.categoryMenu;
  if (!menu) return;
  if (other) other.classList.add("hidden");
  if (forceOpen) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.toggle("hidden");
  }
}

function closeComboMenus() {
  if (els.categoryMenu) els.categoryMenu.classList.add("hidden");
  if (els.storageMenu) els.storageMenu.classList.add("hidden");
}

function applyComboOption(type, value) {
  if (type === "category") {
    els.foodCategory.value = value;
    refreshFoodCaloriesEstimate(true);
  } else {
    els.foodStorage.value = value;
  }
  closeComboMenus();
}

function renderManagedOptionLists() {
  renderOptionChipList(els.categoryOptionList, getCategoryList(), "分类");
  renderOptionChipList(els.storageOptionList, getStorageList(), "位置");
}

function renderOptionChipList(container, options, label) {
  if (!options.length) {
    container.innerHTML = `<p class="empty-state compact">还没有${label}选项。</p>`;
    return;
  }
  container.innerHTML = options.map((option) => `
    <span class="option-chip">
      ${escapeHtml(option)}
      <button type="button" data-option="${escapeHtml(option)}" aria-label="移除${escapeHtml(option)}">×</button>
    </span>
  `).join("");
}

function renderSummary() {
  els.totalItems.textContent = state.foods.filter((food) => food.qty > 0).length;
  els.expiringItems.textContent = state.foods.filter((food) => {
    const days = daysUntil(food.expiry);
    return food.qty > 0 && days >= 0 && days <= 7;
  }).length;
  els.plannedMeals.textContent = state.meals.length;
  els.lowStockItems.textContent = state.foods.filter((food) => food.qty <= 0).length;
  for (const card of els.summaryCards) {
    const key = card.dataset.summary;
    const active = activeView === "inventory" && (key === activeStockFilter || (key === "all" && activeStockFilter === "all"));
    card.classList.toggle("is-active", active);
  }
}

function renderInventoryOptions() {
  const dailySelected = els.dailyFood.value;
  const mealSelected = els.mealFood.value;
  const dailyFoods = getInventoryOptionFoods(els.dailyFoodSearch.value);
  const mealFoods = getInventoryOptionFoods(els.mealFoodSearch.value);
  const fallback = '<option value="">暂无可用库存</option>';
  els.dailyFood.innerHTML = renderFoodOptions(dailyFoods) || fallback;
  els.mealFood.innerHTML = renderFoodOptions(mealFoods) || fallback;
  if (dailyFoods.some((food) => food.id === dailySelected)) els.dailyFood.value = dailySelected;
  if (mealFoods.some((food) => food.id === mealSelected)) els.mealFood.value = mealSelected;
}

function getInventoryOptionFoods(query) {
  const words = String(query || "").trim().toLowerCase().split(/\s+/).filter(Boolean);
  return state.foods
    .filter((food) => food.qty > 0)
    .filter((food) => {
      if (!words.length) return true;
      const haystack = [food.name, food.category, food.storage, food.unit, food.expiry].join(" ").toLowerCase();
      return words.every((word) => haystack.includes(word));
    })
    .sort((a, b) => daysUntil(a.expiry) - daysUntil(b.expiry) || a.name.localeCompare(b.name, "zh-CN"))
    .slice(0, 20);
}

function renderFoodOptions(foods) {
  return foods.map((food) => `<option value="${food.id}">${escapeHtml(foodOptionLabel(food))}</option>`).join("");
}

function foodOptionLabel(food) {
  return [food.name, `${formatQty(food.qty)}${food.unit}`, food.calories ? `${food.calories} kcal/${food.unit}` : "", food.expiry ? `有效期 ${food.expiry}` : ""]
    .filter(Boolean)
    .join(" · ");
}

function renderFoods() {
  const query = els.searchInput.value.trim().toLowerCase();
  const storage = els.storageFilter.value;
  const foods = state.foods
    .filter((food) => matchesStockFilter(food))
    .filter((food) => els.showDepleted.checked || food.qty > 0)
    .filter((food) => !activeCategoryFilters.size || activeCategoryFilters.has(food.category))
    .filter((food) => storage === "all" || food.storage === storage)
    .filter((food) => [food.name, food.category, food.unit, food.storage].join(" ").toLowerCase().includes(query))
    .sort(sortFoods);

  els.foodList.replaceChildren();
  els.foodList.classList.toggle("table-food-list", inventoryViewMode === "table");
  els.foodList.classList.toggle("display-food-list", inventoryViewMode === "card");
  if (!foods.length) {
    els.foodList.innerHTML = '<p class="empty-state">还没有匹配的食物。</p>';
    return;
  }

  if (inventoryViewMode === "table") {
    renderEditableFoodTable(foods);
    return;
  }

  for (const food of foods) {
    const node = els.template.content.firstElementChild.cloneNode(true);
    const days = daysUntil(food.expiry);
    node.dataset.id = food.id;
    node.classList.toggle("depleted", food.qty <= 0);
    node.classList.toggle("warning", food.qty > 0 && days >= 0 && days <= 7);
    node.classList.toggle("expired", food.qty > 0 && days < 0);
    renderFoodThumb(node.querySelector(".food-thumb"), food);
    node.querySelector("strong").textContent = food.name;
    node.querySelector(".tag").textContent = food.category;
    node.querySelector(".meta").textContent = foodMetaText(food);
    els.foodList.append(node);
  }
}

function renderFoodTable(foods) {
  const batchBar = document.createElement("div");
  batchBar.className = "table-batch-bar";
  batchBar.innerHTML = `
    <span class="batch-summary">已选 ${selectedInventoryBatchIds.size} 项</span>
    <span>勾选食材，按各行数量一次加入今日加餐</span>
    <div class="batch-actions">
      <button class="ghost-button batch-clear" type="button">清空选择</button>
      <button class="ghost-button batch-consume" type="button">批量加餐</button>
    </div>
  `;
  els.foodList.append(batchBar);

  const table = document.createElement("table");
  table.className = "inventory-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th class="check-cell">选</th>
        <th>名称</th>
        <th>数量</th>
        <th>有效期</th>
        <th>分类</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");
  for (const food of foods) {
    const row = document.createElement("tr");
    row.className = food.qty <= 0 ? "depleted-row" : "";
    if (selectedInventoryBatchIds.has(food.id)) row.classList.add("is-selected");
    row.dataset.id = food.id;
    row.innerHTML = `
      <td class="check-cell"><input class="inventory-batch-check" type="checkbox" data-food-id="${escapeHtml(food.id)}" aria-label="选择${escapeHtml(food.name)}" ${food.qty <= 0 ? "disabled" : ""} ${selectedInventoryBatchIds.has(food.id) ? "checked" : ""}></td>
      <td>${escapeHtml(food.name)}</td>
      <td>${formatQty(food.qty)}${escapeHtml(food.unit)}</td>
      <td>${food.expiry ? escapeHtml(food.expiry) : ""}</td>
      <td>${escapeHtml(food.category)}</td>
      <td class="table-actions">
        <button class="mini-button edit" type="button" title="编辑" aria-label="编辑">✎</button>
        <input class="quick-qty" type="text" inputmode="decimal" value="${escapeHtml(String(selectedInventoryBatchQtys.has(food.id) ? selectedInventoryBatchQtys.get(food.id) : 1))}" title="处理份数" aria-label="处理份数">
        <button class="mini-button consume" type="button" title="加餐并扣库存" aria-label="加餐并扣库存">＋</button>
        <button class="mini-button discard" type="button" title="丢弃并扣库存" aria-label="丢弃并扣库存">丢</button>
        <button class="mini-button delete" type="button" title="删除" aria-label="删除">×</button>
      </td>
    `;
    tbody.append(row);
  }
  els.foodList.append(table);
  updateBatchSelectionSummary();
}

function renderEditableFoodTable(foods) {
  const batchBar = document.createElement("div");
  batchBar.className = "table-batch-bar";
  batchBar.innerHTML = `
    <span class="batch-summary">已选 ${selectedInventoryBatchIds.size} 项</span>
    <span class="edit-summary">待修改 ${inventoryTableDrafts.size} 行</span>
    <span>直接改表格，支持复制粘贴，确认后再统一保存。</span>
    <div class="batch-actions">
      <button class="ghost-button batch-clear" type="button">清空选择</button>
      <button class="ghost-button batch-consume" type="button">批量加餐</button>
      <button class="ghost-button table-reset" type="button">取消修改</button>
      <button class="ghost-button table-save" type="button">确认修改</button>
    </div>
  `;
  els.foodList.append(batchBar);

  const table = document.createElement("table");
  table.className = "inventory-table inventory-edit-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th class="check-cell">选</th>
        <th>名称</th>
        <th>数量</th>
        <th>单位</th>
        <th>有效期</th>
        <th>分类</th>
        <th>位置</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");

  for (const food of foods) {
    const draft = getInventoryTableDraftValues(food);
    const row = document.createElement("tr");
    row.className = food.qty <= 0 ? "depleted-row" : "";
    if (selectedInventoryBatchIds.has(food.id)) row.classList.add("is-selected");
    if (hasInventoryTableDraft(food.id)) row.classList.add("is-dirty");
    row.dataset.id = food.id;
    row.innerHTML = `
      <td class="check-cell"><input class="inventory-batch-check" type="checkbox" data-food-id="${escapeHtml(food.id)}" aria-label="选择${escapeHtml(food.name)}" ${food.qty <= 0 ? "disabled" : ""} ${selectedInventoryBatchIds.has(food.id) ? "checked" : ""}></td>
      <td>${escapeHtml(food.name)}</td>
      <td class="editable-cell">
        <input class="table-edit-input" type="text" inputmode="decimal" value="${escapeHtml(String(draft.qty))}" data-table-field="qty" aria-label="修改${escapeHtml(food.name)}数量">
      </td>
      <td>${escapeHtml(food.unit)}</td>
      <td class="editable-cell">
        <input class="table-edit-input" type="date" value="${escapeHtml(draft.expiry || "")}" data-table-field="expiry" aria-label="修改${escapeHtml(food.name)}有效期">
      </td>
      <td class="editable-cell">
        <select class="table-edit-select" data-table-field="category" aria-label="修改${escapeHtml(food.name)}分类">
          ${buildInventoryTableSelectOptions(getCategoryList(), draft.category)}
        </select>
      </td>
      <td class="editable-cell">
        <select class="table-edit-select" data-table-field="storage" aria-label="修改${escapeHtml(food.name)}位置">
          ${buildInventoryTableSelectOptions(getStorageList(), draft.storage)}
        </select>
      </td>
      <td class="table-actions">
        <button class="mini-button edit" type="button" title="编辑" aria-label="编辑">✎</button>
        <input class="quick-qty" type="text" inputmode="decimal" value="${escapeHtml(String(selectedInventoryBatchQtys.has(food.id) ? selectedInventoryBatchQtys.get(food.id) : 1))}" title="处理份数" aria-label="处理份数">
        <button class="mini-button consume" type="button" title="加餐并扣库存" aria-label="加餐并扣库存">＋</button>
        <button class="mini-button discard" type="button" title="丢弃并扣库存" aria-label="丢弃并扣库存">丢</button>
        <button class="mini-button delete" type="button" title="删除" aria-label="删除">×</button>
      </td>
    `;
    tbody.append(row);
  }

  els.foodList.append(table);
  updateBatchSelectionSummary();
}

function renderMealConsumptionDraft() {
  els.mealFoodList.replaceChildren();
  if (!mealConsumptions.length) {
    els.mealFoodList.innerHTML = '<p class="empty-state compact">还没有关联库存食材。</p>';
    return;
  }

  for (const item of mealConsumptions) {
    const row = document.createElement("div");
    row.className = "linked-item";
    row.innerHTML = `
      <span>${escapeHtml(item.foodName)}</span>
      <input class="linked-qty" type="text" inputmode="decimal" value="${formatQty(item.qty)}" data-food-id="${escapeHtml(item.foodId)}" aria-label="修改${escapeHtml(item.foodName)}数量">
      <em>${escapeHtml(item.unit)}</em>
      <button type="button" data-food-id="${item.foodId}" aria-label="移除">×</button>
    `;
    els.mealFoodList.append(row);
  }
}

function renderRecipeSuggestions() {
  const suggestions = getVisibleRecipeSuggestions();
  els.recipeSuggestions.replaceChildren();
  if (!suggestions.length) {
    els.recipeSuggestions.innerHTML = '<p class="empty-state compact">库存食材太少，先添加一些食材后再生成菜谱。</p>';
    return;
  }

  suggestions.forEach((suggestion, index) => {
    const card = document.createElement("article");
    card.className = "suggestion-card";
    card.innerHTML = `
      <div>
        <strong>${escapeHtml(suggestion.name)}</strong>
        <p>${escapeHtml(suggestion.reason)}</p>
      </div>
      <button class="ghost-button" type="button" data-recipe-index="${index}">套用</button>
    `;
    els.recipeSuggestions.append(card);
  });
}

function getVisibleRecipeSuggestions() {
  return aiRecipeSuggestions.length ? aiRecipeSuggestions : getRecipeSuggestions();
}

function renderDashboard() {
  const records = getConsumptionRecords(7);
  const totals = new Map();
  const foodNames = new Set();
  const mealDates = new Set();

  for (const record of records) {
    mealDates.add(record.date);
    for (const item of record.items) {
      const category = item.category || findFoodCategory(item.foodId) || "其他";
      totals.set(category, (totals.get(category) || 0) + toNumber(item.qty));
      if (item.foodName) foodNames.add(item.foodName);
    }
  }

  const totalQty = [...totals.values()].reduce((sum, qty) => sum + qty, 0);
  els.dashConsumedCount.textContent = foodNames.size;
  els.dashMealCount.textContent = state.meals.filter((meal) => isWithinDays(meal.date, 7)).length;
  els.dashCategoryCount.textContent = totals.size;

  els.categoryBalanceList.replaceChildren();
  if (!totals.size) {
    els.categoryBalanceList.innerHTML = '<p class="empty-state compact">最近 7 天还没有消耗记录。</p>';
  } else {
    for (const [category, qty] of [...totals.entries()].sort((a, b) => b[1] - a[1])) {
      const percent = totalQty ? Math.round((qty / totalQty) * 100) : 0;
      const row = document.createElement("div");
      row.className = "balance-row";
      row.innerHTML = `
        <div>
          <strong>${escapeHtml(category)}</strong>
          <span>${formatQty(qty)} 份量 · ${percent}%</span>
        </div>
        <div class="balance-bar"><i style="width:${percent}%"></i></div>
      `;
      els.categoryBalanceList.append(row);
    }
  }

  renderBalanceTips(totals);
  renderConsumptionStats(getConsumptionRecords(3650));
  renderMealHistoryList();
}

function renderBalanceTips(totals) {
  const present = new Set([...totals.keys()]);
  const tips = [];
  if (!present.size) {
    tips.push("先录入菜单或日常消耗，看板会自动统计。");
  }
  if (!hasCategoryLike(present, "蔬菜")) tips.push("最近蔬菜消耗偏少，可以安排青菜、番茄或菌菇。");
  if (!hasCategoryLike(present, "肉") && !hasCategoryLike(present, "蛋") && !hasCategoryLike(present, "乳")) {
    tips.push("蛋白类覆盖偏少，可以加入鸡蛋、肉类、豆制品或乳品。");
  }
  if (!hasCategoryLike(present, "主食")) tips.push("主食记录偏少，注意搭配米饭、面、土豆或杂粮。");
  if (present.size >= 4) tips.push("分类覆盖不错，最近饮食比较丰富。");

  els.balanceTips.innerHTML = tips.map((tip) => `<p class="tip-item">${escapeHtml(tip)}</p>`).join("");
}

function renderConsumptionStats(records) {
  els.consumptionStatsList.replaceChildren();
  if (!records.length) {
    els.consumptionStatsList.innerHTML = '<p class="empty-state compact">还没有消耗统计。</p>';
    return;
  }

  const itemTotals = new Map();
  const categoryTotals = new Map();
  let totalQty = 0;
  let mealCount = 0;
  let dailyCount = 0;
  let discardCount = 0;

  for (const record of records) {
    if (record.type === "meal") mealCount += 1;
    if (record.type === "daily") dailyCount += 1;
    if (record.type === "discard") discardCount += 1;
    for (const item of record.items) {
      const qty = toNumber(item.qty);
      totalQty += qty;
      const foodName = item.foodName || "食材";
      const category = item.category || findFoodCategory(item.foodId) || "其他";
      itemTotals.set(foodName, (itemTotals.get(foodName) || 0) + qty);
      categoryTotals.set(category, (categoryTotals.get(category) || 0) + qty);
    }
  }

  const sortedFoods = [...itemTotals.entries()].sort((a, b) => b[1] - a[1]);
  const topFoods = sortedFoods.slice(0, 5);
  const cloudFoods = sortedFoods.slice(0, 18);
  const topCategories = [...categoryTotals.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4);
  const calorieSeries = getRecentCalorieSeries(7);
  const todayCalories = calorieSeries[calorieSeries.length - 1] ? calorieSeries[calorieSeries.length - 1].calories : 0;
  const averageCalories = calorieSeries.length
    ? roundCalories(calorieSeries.reduce((sum, item) => sum + item.calories, 0) / calorieSeries.length)
    : 0;
  els.consumptionStatsList.innerHTML = `
    <section class="stats-grid">
      <article class="stat-tile" style="${statTileStyle(0)}"><strong>${records.length}</strong><span>消耗记录</span></article>
      <article class="stat-tile" style="${statTileStyle(1)}"><strong>${formatQty(totalQty)}</strong><span>总消耗量</span></article>
      <article class="stat-tile" style="${statTileStyle(2)}"><strong>${todayCalories}</strong><span>今日热量 kcal</span></article>
      <article class="stat-tile" style="${statTileStyle(3)}"><strong>${averageCalories}</strong><span>7日平均 kcal</span></article>
      <article class="stat-tile" style="${statTileStyle(4)}"><strong>${mealCount}</strong><span>菜单扣库</span></article>
      <article class="stat-tile" style="${statTileStyle(5)}"><strong>${dailyCount + discardCount}</strong><span>其他扣库</span></article>
    </section>
    <section class="stats-section">
      <strong>每日热量估算</strong>
      ${renderDailyCalorieRows(calorieSeries)}
    </section>
    <section class="stats-section">
      <strong>常消耗食材</strong>
      ${renderRankRows(topFoods, "foods")}
    </section>
    <section class="stats-section">
      <strong>分类汇总</strong>
      ${renderRankRows(topCategories, "categories")}
    </section>
    <section class="stats-section">
      <strong>消耗词云</strong>
      ${renderWordCloud(cloudFoods)}
    </section>
  `;
}

function renderDailyCalorieRows(series) {
  if (!series.some((item) => item.calories > 0)) {
    return '<p class="empty-state compact">最近 7 天还没有可计算热量的记录。</p>';
  }
  const max = Math.max(...series.map((item) => item.calories), 1);
  return series.map((item, index) => {
    const percent = Math.max(8, Math.round((item.calories / max) * 100));
    return `
      <div class="calorie-row">
        <div>
          <strong>${escapeHtml(item.date.slice(5))}</strong>
          <span>${item.calories} kcal</span>
        </div>
        <div class="calorie-bar"><i style="width:${percent}%; ${dailyCalorieBarStyle(index)}"></i></div>
      </div>
    `;
  }).join("");
}

function renderWordCloud(entries) {
  if (!entries.length) return '<p class="empty-state compact">暂无数据。</p>';
  const max = Math.max(...entries.map((entry) => entry[1]), 1);
  return `
    <div class="word-cloud">
      ${entries.map(([name, qty], index) => {
        const level = Math.max(1, Math.min(5, Math.ceil((qty / max) * 5)));
        return `<span class="word-cloud-item level-${level}" style="${wordCloudStyle(index, qty, max)}" title="${formatQty(qty)}">${escapeHtml(name)}</span>`;
      }).join("")}
    </div>
  `;
}

function renderRankRows(entries, paletteType) {
  if (!entries.length) return '<p class="empty-state compact">暂无数据。</p>';
  const max = Math.max(...entries.map((entry) => entry[1]), 1);
  return entries.map(([name, qty], index) => {
    const percent = Math.max(6, Math.round((qty / max) * 100));
    const style = rankRowStyle(index, paletteType);
    return `
      <div class="rank-row" style="${style}">
        <span class="rank-index">${index + 1}</span>
        <div class="rank-copy">
          <strong>${escapeHtml(name)}</strong>
          <div class="rank-meter"><i style="width:${percent}%"></i></div>
        </div>
        <b>${formatQty(qty)}</b>
      </div>
    `;
  }).join("");
}

function statTileStyle(index) {
  const palette = [
    ["#fff5e5", "#ffd08a", "#d97706"],
    ["#ecfdf3", "#8ee3b0", "#059669"],
    ["#eff6ff", "#9abcf9", "#2563eb"],
    ["#fdf2f8", "#f6a6cf", "#db2777"],
    ["#eef2ff", "#b4befe", "#4f46e5"],
    ["#f0fdf4", "#86efac", "#16a34a"]
  ][index % 6];
  return `--tile-accent:${palette[2]}; --tile-bar:${palette[1]}; background:linear-gradient(180deg, ${palette[0]}, rgba(255,255,255,0.96)); border-color:${palette[1]}; box-shadow:0 12px 20px rgba(23,33,43,0.03);`;
}

function rankRowStyle(index, paletteType) {
  const palettes = paletteType === "categories"
    ? [
        ["rgba(125, 214, 210, 0.34)", "#14b8a6"],
        ["rgba(199, 210, 254, 0.34)", "#6366f1"],
        ["rgba(254, 202, 202, 0.34)", "#ef4444"],
        ["rgba(253, 230, 138, 0.34)", "#f59e0b"]
      ]
    : [
        ["rgba(165, 243, 252, 0.34)", "#06b6d4"],
        ["rgba(196, 181, 253, 0.34)", "#8b5cf6"],
        ["rgba(134, 239, 172, 0.34)", "#22c55e"],
        ["rgba(253, 224, 71, 0.34)", "#eab308"]
      ];
  const [bg, accent] = palettes[index % palettes.length];
  return `--rank-bar:${accent}; background:linear-gradient(90deg, ${bg}, rgba(255,255,255,0.96));`;
}

function wordCloudStyle(index, qty, max) {
  const hues = [18, 148, 205, 262, 325, 52];
  const hue = hues[index % hues.length];
  const alpha = 0.16 + ((qty / max) * 0.18);
  return `--cloud-hue:${hue}; --cloud-alpha:${alpha.toFixed(2)};`;
}

function dailyCalorieBarStyle(index) {
  const accents = ["#f97316", "#14b8a6", "#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#22c55e"];
  return `background:linear-gradient(90deg, ${accents[index % accents.length]}, rgba(255,255,255,0.35));`;
}

function renderMealHistoryList() {
  els.mealHistoryList.replaceChildren();
  const meals = [...state.meals].sort(sortMealsByDateDesc);
  if (!meals.length) {
    els.mealHistoryList.innerHTML = '<p class="empty-state compact">还没有菜单记录。</p>';
    return;
  }

  for (const meal of meals.slice(0, 40)) {
    const row = document.createElement("article");
    row.className = "record-item";
    const consumptions = Array.isArray(meal.consumptions) && meal.consumptions.length
      ? meal.consumptions.map((item) => `${item.foodName}${formatQty(item.qty)}${item.unit}`).join("、")
      : meal.ingredients || "未关联库存";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(meal.slot)} · ${escapeHtml(meal.name)}</strong>
        <p>${escapeHtml(consumptions)}</p>
      </div>
      <div class="record-actions">
        <time>${escapeHtml(meal.date || "")}</time>
        <button class="text-button" type="button" data-edit-meal-id="${escapeHtml(meal.id)}">编辑</button>
      </div>
    `;
    els.mealHistoryList.append(row);
  }
}

function getRecipeSuggestions() {
  const foods = getRecipeSourceFoods();
  const suggestions = [
    ...getLibraryRecipeSuggestions(foods),
    ...buildFlexibleSuggestions(foods)
  ];
  return uniqueSuggestions(suggestions).slice(0, 16);
}

function buildRecipeLibrary() {
  return [
    recipeTemplate("番茄炒蛋", "番茄和鸡蛋的经典快手菜。", [need(["番茄", "西红柿"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("青椒炒蛋", "青椒和鸡蛋一起炒，简单又下饭。", [need(["青椒", "彩椒"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("黄瓜炒蛋", "清爽脆口，做晚餐或加餐都轻松。", [need(["黄瓜"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("洋葱炒蛋", "洋葱微甜，鸡蛋能快速撑起一餐。", [need(["洋葱"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("番茄鸡蛋面", "主食加蛋和蔬菜，一锅就能完成。", [need(["番茄", "西红柿"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋"), need(["面", "挂面", "面条"], "主食")]),
    recipeTemplate("牛奶燕麦杯", "早餐向的轻食组合，适合早上快速准备。", [need(["牛奶"], "乳品"), need(["燕麦"], "主食")]),
    recipeTemplate("水果酸奶碗", "乳品和水果一起搭配，适合早餐或加餐。", [need(["酸奶", "牛奶"], "乳品"), need([], "水果")]),
    recipeTemplate("鸡蛋三明治", "吐司加鸡蛋的经典早餐。", [need(["吐司", "面包"], "主食"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("奶香吐司早餐", "牛奶和主食组合，早上准备负担小。", [need(["牛奶"], "乳品"), need(["吐司", "面包"], "主食")]),
    recipeTemplate("虾仁滑蛋", "虾仁和鸡蛋都很快熟，适合快手菜。", [need(["虾仁", "虾"], "海鲜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("西兰花虾仁", "蔬菜和海鲜搭配清爽，午晚餐都合适。", [need(["西兰花"], "蔬菜"), need(["虾仁", "虾"], "海鲜")]),
    recipeTemplate("蒜蓉西兰花", "西兰花单独也能做出清爽配菜。", [need(["西兰花"], "蔬菜"), need(["蒜"], "调料", true)]),
    recipeTemplate("清炒青菜", "适合优先处理叶菜类库存。", [need(["青菜", "菠菜", "生菜", "油麦菜", "白菜"], "蔬菜")]),
    recipeTemplate("蒜蓉生菜", "一把生菜就能做的快手热菜。", [need(["生菜"], "蔬菜"), need(["蒜"], "调料", true)]),
    recipeTemplate("青椒肉丝", "青椒和肉丝最适合做米饭伴侣。", [need(["青椒", "彩椒"], "蔬菜"), need(["猪肉", "牛肉", "鸡肉"], "肉蛋")]),
    recipeTemplate("洋葱炒牛肉", "洋葱带甜，牛肉带香，适合工作日晚餐。", [need(["洋葱"], "蔬菜"), need(["牛肉"], "肉蛋")]),
    recipeTemplate("土豆烧鸡", "土豆吸味，鸡肉饱腹感强。", [need(["土豆", "马铃薯"], "蔬菜"), need(["鸡肉", "鸡腿", "鸡胸"], "肉蛋")]),
    recipeTemplate("土豆炖牛肉", "适合把主菜和配菜一次安排完整。", [need(["土豆", "马铃薯"], "蔬菜"), need(["牛肉", "牛腩"], "肉蛋")]),
    recipeTemplate("白菜豆腐煲", "豆腐和白菜很适合做暖胃的一锅菜。", [need(["白菜"], "蔬菜"), need(["豆腐"], "其他")]),
    recipeTemplate("番茄豆腐汤", "番茄带酸味，豆腐补足蛋白。", [need(["番茄", "西红柿"], "蔬菜"), need(["豆腐"], "其他")]),
    recipeTemplate("香菇鸡片", "菌菇和鸡肉的组合稳定好用。", [need(["香菇", "蘑菇", "金针菇"], "蔬菜"), need(["鸡肉", "鸡腿", "鸡胸"], "肉蛋")]),
    recipeTemplate("金针菇肥牛卷", "菌菇加牛肉，适合做热锅快炒。", [need(["金针菇", "蘑菇"], "蔬菜"), need(["牛肉"], "肉蛋")]),
    recipeTemplate("茄子肉末", "茄子和肉末很适合下饭。", [need(["茄子"], "蔬菜"), need(["猪肉", "牛肉", "鸡肉"], "肉蛋")]),
    recipeTemplate("西葫芦炒蛋", "西葫芦出水快，鸡蛋能帮你快速成菜。", [need(["西葫芦"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("豆角炒肉", "适合把豆角类库存做成一盘主菜。", [need(["豆角", "四季豆"], "蔬菜"), need(["猪肉", "鸡肉", "牛肉"], "肉蛋")]),
    recipeTemplate("菜花炒肉", "花菜和肉类搭配，做法稳妥。", [need(["花菜", "菜花", "西兰花"], "蔬菜"), need(["猪肉", "鸡肉", "牛肉"], "肉蛋")]),
    recipeTemplate("土豆丝", "只有土豆也能快速安排一道菜。", [need(["土豆", "马铃薯"], "蔬菜")]),
    recipeTemplate("蛋炒饭", "米饭和鸡蛋的万用收尾方案。", [need(["米饭", "米", "饭"], "主食"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("蔬菜炒饭", "主食和蔬菜混炒，适合清库存。", [need(["米饭", "米", "饭"], "主食"), need([], "蔬菜")]),
    recipeTemplate("虾仁炒饭", "海鲜和主食合并成一份完整简餐。", [need(["米饭", "米", "饭"], "主食"), need(["虾仁", "虾"], "海鲜")]),
    recipeTemplate("什锦炒面", "面食配蔬菜和蛋白，适合做一盘式晚餐。", [need(["面", "挂面", "面条"], "主食"), need([], "蔬菜"), need(["鸡蛋", "鸡肉", "牛肉", "虾"], "", true)]),
    recipeTemplate("鸡肉蔬菜拌面", "主食和蛋白一起安排，适合工作日。", [need(["面", "挂面", "面条"], "主食"), need(["鸡肉"], "肉蛋"), need([], "蔬菜")]),
    recipeTemplate("牛肉蔬菜盖饭", "米饭搭配牛肉和蔬菜，饱腹感稳定。", [need(["米饭", "米", "饭"], "主食"), need(["牛肉"], "肉蛋"), need([], "蔬菜")]),
    recipeTemplate("咖喱鸡肉饭", "鸡肉、主食和蔬菜可以一次组合。", [need(["鸡肉"], "肉蛋"), need(["米饭", "米", "饭"], "主食"), need(["土豆", "胡萝卜", "洋葱"], "蔬菜", true)]),
    recipeTemplate("牛奶玉米浓汤", "奶香和玉米很适合早餐或轻晚餐。", [need(["牛奶"], "乳品"), need(["玉米"], "主食")]),
    recipeTemplate("冬瓜虾仁汤", "汤菜型选择，适合清爽晚餐。", [need(["冬瓜"], "蔬菜"), need(["虾仁", "虾"], "海鲜")]),
    recipeTemplate("南瓜粥", "主食和南瓜组合，做早餐很稳。", [need(["南瓜"], "蔬菜"), need(["米", "糙米"], "主食")]),
    recipeTemplate("红薯酸奶碗", "适合做加餐或早餐。", [need(["红薯", "地瓜"], "主食"), need(["酸奶", "牛奶"], "乳品")]),
    recipeTemplate("香干肉丝", "豆干和肉丝搭配，口感更丰富。", [need(["香干", "豆干"], "其他"), need(["猪肉", "牛肉", "鸡肉"], "肉蛋")]),
    recipeTemplate("豆腐蔬菜锅", "豆腐是很好用的蛋白基底。", [need(["豆腐"], "其他"), need([], "蔬菜")]),
    recipeTemplate("鸡蛋蔬菜卷", "蔬菜加蛋，适合轻食或早餐。", [need(["鸡蛋", "蛋"], "肉蛋"), need([], "蔬菜")]),
    recipeTemplate("水果奶昔", "水果和乳品一起做成顺口饮品。", [need([], "水果"), need(["牛奶", "酸奶"], "乳品")]),
    recipeTemplate("番茄牛肉面", "番茄汤底配牛肉和面，适合一锅完成。", [need(["番茄", "西红柿"], "蔬菜"), need(["牛肉"], "肉蛋"), need(["面", "挂面", "面条"], "主食")]),
    recipeTemplate("番茄虾仁面", "番茄和虾仁都偏清爽，适合快煮。", [need(["番茄", "西红柿"], "蔬菜"), need(["虾仁", "虾"], "海鲜"), need(["面", "挂面", "面条"], "主食")]),
    recipeTemplate("番茄豆腐煲", "番茄和豆腐一起炖，酸香又省事。", [need(["番茄", "西红柿"], "蔬菜"), need(["豆腐"], "其他")]),
    recipeTemplate("黄瓜鸡蛋汤", "黄瓜加蛋可以很快做成轻汤。", [need(["黄瓜"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("紫菜蛋花汤", "适合做简单配汤或宵夜。", [need(["紫菜"], "其他"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("豆腐蛋花汤", "豆腐和鸡蛋一起，蛋白更扎实。", [need(["豆腐"], "其他"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("蘑菇炒蛋", "菌菇和鸡蛋搭配，做法稳定。", [need(["蘑菇", "香菇", "金针菇", "杏鲍菇"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("蘑菇鸡肉饭", "鸡肉、菌菇和主食一起安排更省心。", [need(["蘑菇", "香菇", "金针菇", "杏鲍菇"], "蔬菜"), need(["鸡肉", "鸡腿", "鸡胸"], "肉蛋"), need(["米饭", "米", "饭"], "主食")]),
    recipeTemplate("蘑菇牛肉饭", "菌菇和牛肉做盖饭很顺手。", [need(["蘑菇", "香菇", "金针菇", "杏鲍菇"], "蔬菜"), need(["牛肉"], "肉蛋"), need(["米饭", "米", "饭"], "主食")]),
    recipeTemplate("土豆鸡蛋饼", "土豆加蛋适合早餐或加餐。", [need(["土豆", "马铃薯"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("洋葱土豆饼", "洋葱和土豆都容易消耗，适合煎制。", [need(["洋葱"], "蔬菜"), need(["土豆", "马铃薯"], "蔬菜")]),
    recipeTemplate("洋葱鸡蛋盖饭", "洋葱带甜味，拌饭会比较顺口。", [need(["洋葱"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋"), need(["米饭", "米", "饭"], "主食")]),
    recipeTemplate("白菜粉丝煲", "白菜和粉丝都很适合做一锅暖菜。", [need(["白菜"], "蔬菜"), need(["粉丝", "粉条"], "主食")]),
    recipeTemplate("白菜肉片汤", "白菜和肉片一起煮，适合清淡晚餐。", [need(["白菜"], "蔬菜"), need(["猪肉", "牛肉", "鸡肉"], "肉蛋")]),
    recipeTemplate("青椒鸡丁", "青椒和鸡肉搭配稳定，下饭也快。", [need(["青椒", "彩椒"], "蔬菜"), need(["鸡肉", "鸡腿", "鸡胸"], "肉蛋")]),
    recipeTemplate("青椒土豆丝", "两种常见蔬菜就能安排一盘。", [need(["青椒", "彩椒"], "蔬菜"), need(["土豆", "马铃薯"], "蔬菜")]),
    recipeTemplate("西兰花鸡胸", "高蛋白搭配蔬菜，适合工作日。", [need(["西兰花"], "蔬菜"), need(["鸡肉", "鸡胸"], "肉蛋")]),
    recipeTemplate("西兰花牛肉", "牛肉和西兰花的组合饱腹感稳定。", [need(["西兰花"], "蔬菜"), need(["牛肉"], "肉蛋")]),
    recipeTemplate("蒜香虾仁意面", "虾仁和主食组合，适合快速一盘餐。", [need(["虾仁", "虾"], "海鲜"), need(["意面", "面", "挂面", "面条"], "主食"), need(["蒜"], "调料", true)]),
    recipeTemplate("玉米鸡蛋杯", "玉米和鸡蛋适合做早餐或轻加餐。", [need(["玉米"], "主食"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("玉米牛奶杯", "牛奶和玉米做成热饮或早餐都方便。", [need(["玉米"], "主食"), need(["牛奶"], "乳品")]),
    recipeTemplate("牛奶鸡蛋羹", "蛋羹做法简单，适合早晚轻食。", [need(["牛奶"], "乳品"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("豆腐蒸蛋", "豆腐和蒸蛋一起，口感更软也更稳。", [need(["豆腐"], "其他"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("虾仁豆腐煲", "豆腐吸味，虾仁提鲜，很适合一锅炖。", [need(["豆腐"], "其他"), need(["虾仁", "虾"], "海鲜")]),
    recipeTemplate("鸡肉豆腐锅", "蛋白来源更集中，适合想吃得扎实一点的时候。", [need(["豆腐"], "其他"), need(["鸡肉", "鸡腿", "鸡胸"], "肉蛋")]),
    recipeTemplate("番茄牛腩饭", "番茄和牛肉适合配米饭做成浓汁一餐。", [need(["番茄", "西红柿"], "蔬菜"), need(["牛肉", "牛腩"], "肉蛋"), need(["米饭", "米", "饭"], "主食")]),
    recipeTemplate("胡萝卜鸡肉饭", "胡萝卜配鸡肉和主食，适合便当。", [need(["胡萝卜"], "蔬菜"), need(["鸡肉", "鸡腿", "鸡胸"], "肉蛋"), need(["米饭", "米", "饭"], "主食")]),
    recipeTemplate("胡萝卜炒蛋", "胡萝卜和鸡蛋适合做成甜口快手菜。", [need(["胡萝卜"], "蔬菜"), need(["鸡蛋", "蛋"], "肉蛋")]),
    recipeTemplate("南瓜牛奶粥", "南瓜和牛奶一起会比较顺口，适合早餐。", [need(["南瓜"], "蔬菜"), need(["牛奶"], "乳品")]),
    recipeTemplate("红薯牛奶杯", "红薯和牛奶是很省事的饱腹组合。", [need(["红薯", "地瓜"], "主食"), need(["牛奶"], "乳品")]),
    recipeTemplate("香蕉酸奶杯", "水果和酸奶组合稳定，适合加餐。", [need(["香蕉"], "水果"), need(["酸奶"], "乳品")]),
    recipeTemplate("苹果酸奶碗", "苹果和酸奶偏清爽，适合早餐。", [need(["苹果"], "水果"), need(["酸奶"], "乳品")]),
    recipeTemplate("水果燕麦杯", "水果加燕麦，适合做快速早餐。", [need([], "水果"), need(["燕麦"], "主食")]),
    recipeTemplate("吐司火腿蛋", "主食、蛋和肉能快速拼成早餐。", [need(["吐司", "面包"], "主食"), need(["鸡蛋", "蛋"], "肉蛋"), need(["火腿", "午餐肉"], "肉蛋", true)]),
    recipeTemplate("三明治简餐", "有主食加蛋白就能先凑出一份轻食。", [need(["吐司", "面包"], "主食"), need(["鸡蛋", "火腿", "午餐肉", "鸡肉"], "肉蛋")]),
    recipeTemplate("鸡蛋拌面", "鸡蛋和面条是最省库存的一类组合。", [need(["鸡蛋", "蛋"], "肉蛋"), need(["面", "挂面", "面条"], "主食")]),
    recipeTemplate("牛肉拌面", "有牛肉和面条时可以很快组成正餐。", [need(["牛肉"], "肉蛋"), need(["面", "挂面", "面条"], "主食")]),
    recipeTemplate("鸡肉炒面", "鸡肉和主食配蔬菜就能完成一盘。", [need(["鸡肉", "鸡腿", "鸡胸"], "肉蛋"), need(["面", "挂面", "面条"], "主食"), need([], "蔬菜", true)]),
    recipeTemplate("白菜炒面", "白菜快消耗时很适合和面一起处理。", [need(["白菜"], "蔬菜"), need(["面", "挂面", "面条"], "主食")]),
    recipeTemplate("什锦蔬菜汤", "多种蔬菜可以集中清一波库存。", [need([], "蔬菜"), need([], "蔬菜", true)]),
    recipeTemplate("鸡肉蔬菜汤", "鸡肉加蔬菜，适合偏轻的晚餐。", [need(["鸡肉", "鸡腿", "鸡胸"], "肉蛋"), need([], "蔬菜")]),
    recipeTemplate("豆腐海鲜汤", "豆腐和海鲜一起偏鲜，适合一锅炖。", [need(["豆腐"], "其他"), need(["虾仁", "虾", "鱼"], "海鲜")]),
    recipeTemplate("牛奶水果昔", "乳品和水果一起，适合做冷饮加餐。", [need(["牛奶", "酸奶"], "乳品"), need([], "水果")])
  ];
}

function recipeTemplate(name, reason, needs) {
  return { name, reason, needs };
}

function need(keywords, category = "", optional = false) {
  return {
    keywords: Array.isArray(keywords) ? keywords.filter(Boolean) : [keywords].filter(Boolean),
    category,
    optional
  };
}

function getLibraryRecipeSuggestions(foods) {
  return RECIPE_LIBRARY
    .map((template) => scoreRecipeTemplate(template, foods))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 24)
    .map(({ score, ...suggestion }) => suggestion);
}

function scoreRecipeTemplate(template, foods) {
  const used = new Set();
  const items = [];
  const requiredNeeds = template.needs.filter((item) => !item.optional);
  let matchedRequired = 0;
  let score = 0;
  let expiringCount = 0;

  for (const itemNeed of template.needs) {
    const match = findFoodForNeed(foods, itemNeed, used);
    if (!match) continue;
    used.add(match.food.id);
    items.push({
      foodId: match.food.id,
      foodName: match.food.name,
      qty: defaultRecipeQty(match.food),
      unit: match.food.unit,
      calories: match.food.calories,
      category: match.food.category,
      storage: match.food.storage
    });
    score += match.score * 4;
    if (!itemNeed.optional) matchedRequired += 1;
    const expiryDays = daysUntil(match.food.expiry);
    if (expiryDays >= 0 && expiryDays <= 3) expiringCount += 1;
  }

  const minRequired = requiredNeeds.length <= 2 ? requiredNeeds.length : Math.max(2, Math.ceil(requiredNeeds.length * 0.67));
  if (matchedRequired < minRequired || !items.length) return null;
  const completeness = requiredNeeds.length ? matchedRequired / requiredNeeds.length : 1;
  score += completeness * 30 + expiringCount * 3;

  return {
    name: template.name,
    reason: buildRecipeReason(template, items, expiringCount),
    items,
    score
  };
}

function findFoodForNeed(foods, itemNeed, used) {
  const candidates = foods
    .filter((food) => !used.has(food.id))
    .map((food) => ({ food, score: needMatchScore(food, itemNeed) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || daysUntil(a.food.expiry) - daysUntil(b.food.expiry) || b.food.qty - a.food.qty);
  return candidates[0] || null;
}

function needMatchScore(food, itemNeed) {
  const name = String(food.name || "").toLowerCase();
  const category = String(food.category || "");
  const keywordScore = itemNeed.keywords.some((keyword) => name.includes(String(keyword).toLowerCase())) ? 3 : 0;
  const categoryScore = !itemNeed.keywords.length && itemNeed.category && category.includes(itemNeed.category) ? 1 : 0;
  return keywordScore + categoryScore;
}

function buildRecipeReason(template, items, expiringCount) {
  const expiringNames = items
    .filter((item) => {
      const food = getFood(item.foodId);
      const days = food ? daysUntil(food.expiry) : 9999;
      return days >= 0 && days <= 3;
    })
    .map((item) => item.foodName);
  const reason = expiringCount && expiringNames.length
    ? `优先利用${expiringNames.join("、")}，${template.reason}`
    : template.reason;
  return suggestionReasonWithCalories(reason, items);
}

function buildFlexibleSuggestions(foods) {
  const byName = (keyword) => foods.find((food) => food.name.includes(keyword));
  const byCategory = (keyword) => foods.filter((food) => food.category.includes(keyword));
  const suggestions = [];
  const vegetables = byCategory("蔬菜");
  const proteins = foods.filter((food) => food.category.includes("肉") || food.category.includes("蛋") || food.category.includes("海鲜"));
  const staples = byCategory("主食");
  const dairy = byCategory("乳");
  const fruits = byCategory("水果");
  const expiring = foods.filter((food) => {
    const days = daysUntil(food.expiry);
    return days >= 0 && days <= 2;
  });

  const egg = byName("蛋");
  const tomato = byName("番茄") || byName("西红柿");
  if (egg && tomato) suggestions.push(makeSuggestion("番茄炒蛋", [tomato, egg], "适合优先消耗番茄和鸡蛋。"));
  if (vegetables.length && proteins.length) suggestions.push(makeSuggestion(`${vegetables[0].name}炒${proteins[0].name}`, [vegetables[0], proteins[0]], "蔬菜和蛋白组合，午餐晚餐都顺手。"));
  if (staples.length && proteins.length) suggestions.push(makeSuggestion(`${proteins[0].name}${staples[0].name}简餐`, [proteins[0], staples[0]], "主食加蛋白，能快速组成一餐。"));
  if (staples.length && vegetables.length) suggestions.push(makeSuggestion(`${vegetables[0].name}${staples[0].name}便当`, [vegetables[0], staples[0]], "主食搭配蔬菜，适合打包或快餐。"));
  if (dairy.length && fruits.length) suggestions.push(makeSuggestion("水果乳品杯", [dairy[0], fruits[0]], "水果和乳品适合做早餐或加餐。"));
  if (expiring.length >= 2) suggestions.push(makeSuggestion("临期食材清理餐", expiring.slice(0, 3), "优先处理快到期的库存。"));
  if (!suggestions.length && foods.length) {
    suggestions.push(makeSuggestion(`${foods[0].name}简餐`, foods.slice(0, Math.min(3, foods.length)), "根据当前库存自动组合。"));
  }
  return suggestions;
}

function suggestionCalories(items) {
  return roundCalories(items.reduce((sum, item) => sum + (getItemCalories(item) * toNumber(item.qty)), 0));
}

function suggestionReasonWithCalories(reason, items) {
  const calories = suggestionCalories(items);
  return calories ? `${reason} · 约${calories} kcal` : reason;
}

function getRecipeSearchQuery() {
  const foods = getRecipeSourceFoods()
    .slice(0, 5)
    .map((food) => food.name);
  return foods.length ? `${foods.join(" ")} 菜谱 做法` : "";
}

function getRecipeSourceFoods() {
  return state.foods
    .filter((food) => food.qty > 0)
    .filter((food) => !isSnackFood(food))
    .sort((a, b) => daysUntil(a.expiry) - daysUntil(b.expiry));
}

async function fetchAiRecipeSuggestions() {
  const apiKey = els.openaiApiKey.value.trim();
  const foods = getRecipeSourceFoods().slice(0, 14);
  if (!apiKey) {
    alert("先填写 OpenAI API Key。");
    return;
  }
  if (!foods.length) {
    alert("先添加一些非零食类库存食材，再让 AI 推荐。");
    return;
  }

  const previousText = els.aiRecommendRecipes.textContent;
  els.aiRecommendRecipes.disabled = true;
  els.aiRecommendRecipes.textContent = tr("generating");

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: els.recipeModel.value || "gpt-5-mini",
        input: buildRecipePrompt(foods),
        max_output_tokens: 900
      })
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error && data.error.message ? data.error.message : "请求失败");
    }

    const text = extractResponseText(data);
    const parsed = parseJsonFromText(text);
    const recipes = normalizeAiSuggestions(parsed.recipes || parsed);
    if (!recipes.length) throw new Error("没有生成可关联库存的菜谱");
    aiRecipeSuggestions = recipes;
    renderRecipeSuggestions();
  } catch (error) {
    alert(`AI 推荐失败：${error.message}`);
  } finally {
    els.aiRecommendRecipes.disabled = false;
    els.aiRecommendRecipes.textContent = previousText;
  }
}

function buildRecipePrompt(foods) {
  const inventory = foods.map((food) => ({
    foodId: food.id,
    name: food.name,
    qty: food.qty,
    unit: food.unit,
    calories: food.calories || "未识别",
    category: food.category,
    storage: food.storage,
    expiry: food.expiry || "未填写"
  }));

  return [
    "你是一个家庭菜谱助手。请根据库存生成 3 到 5 个中文家常菜谱建议。",
    "规则：只使用我提供的 foodId；不要推荐零食；优先使用临期食材；数量不要超过库存；菜名简短；reason 一句话说明为什么推荐。",
    "只返回 JSON，不要 markdown，不要解释。格式：",
    '{"recipes":[{"name":"菜名","reason":"推荐原因","items":[{"foodId":"库存ID","qty":1}]}]}',
    `库存：${JSON.stringify(inventory)}`
  ].join("\n");
}

function extractResponseText(data) {
  if (data.output_text) return data.output_text;
  if (!Array.isArray(data.output)) return "";
  return data.output.flatMap((item) => item.content || [])
    .map((part) => part.text || part.value || "")
    .join("\n");
}

function parseJsonFromText(text) {
  const clean = String(text || "").replace(/```json|```/g, "").trim();
  try {
    return JSON.parse(clean);
  } catch {
    const objectStart = clean.indexOf("{");
    const objectEnd = clean.lastIndexOf("}");
    if (objectStart >= 0 && objectEnd > objectStart) {
      return JSON.parse(clean.slice(objectStart, objectEnd + 1));
    }
    const arrayStart = clean.indexOf("[");
    const arrayEnd = clean.lastIndexOf("]");
    if (arrayStart >= 0 && arrayEnd > arrayStart) {
      return JSON.parse(clean.slice(arrayStart, arrayEnd + 1));
    }
    throw new Error("返回内容不是有效 JSON");
  }
}

function normalizeAiSuggestions(rawRecipes) {
  const recipes = Array.isArray(rawRecipes) ? rawRecipes : [];
  return recipes.map((recipe, index) => {
    const items = (Array.isArray(recipe.items) ? recipe.items : [])
      .map((item) => {
        const food = getFood(item.foodId);
        if (!food || food.qty <= 0 || isSnackFood(food)) return null;
        const qty = Math.min(food.qty, Math.max(0.1, toNumber(item.qty) || defaultRecipeQty(food)));
        return {
          foodId: food.id,
          foodName: food.name,
          qty: Number(qty.toFixed(2)),
          unit: food.unit,
          calories: food.calories,
          category: food.category,
          storage: food.storage
        };
      })
      .filter(Boolean);

    return {
      name: String(recipe.name || `AI 推荐 ${index + 1}`).slice(0, 24),
      reason: suggestionReasonWithCalories(String(recipe.reason || "由 AI 根据当前库存生成。").slice(0, 80), items),
      items
    };
  }).filter((recipe) => recipe.items.length).slice(0, 8);
}

function makeSuggestion(name, foods, reason) {
  const items = foods.filter(Boolean).map((food) => ({
    foodId: food.id,
    foodName: food.name,
    qty: defaultRecipeQty(food),
    unit: food.unit,
    calories: food.calories,
    category: food.category,
    storage: food.storage
  }));
  return {
    name,
    reason: suggestionReasonWithCalories(reason, items),
    items
  };
}

function isSnackFood(food) {
  return [food.category, food.name]
    .filter(Boolean)
    .some((value) => value.includes("零食"));
}

function defaultRecipeQty(food) {
  if (food.qty <= 1) return food.qty;
  if (food.unit === "个" || food.unit === "只") return Math.min(2, food.qty);
  if (isGramUnit(food.unit)) return Math.min(food.qty, 100);
  if (isKilogramUnit(food.unit)) return Math.min(food.qty, 0.1);
  if (food.unit === "ml" || food.unit === "毫升") return Math.min(food.qty, 250);
  if (food.unit === "l" || food.unit === "升") return Math.min(food.qty, 0.25);
  return 1;
}

function uniqueSuggestions(suggestions) {
  const seen = new Set();
  return suggestions.filter((suggestion) => {
    const key = suggestion.name;
    if (seen.has(key) || !suggestion.items.length) return false;
    seen.add(key);
    return true;
  });
}

function applyRecipeSuggestion(suggestion) {
  els.mealName.value = suggestion.name;
  mealConsumptions = suggestion.items
    .filter((item) => getFood(item.foodId))
    .map((item) => ({ ...item }));
  renderMealConsumptionDraft();
}

function getMealName() {
  const typedName = els.mealName.value.trim();
  if (typedName) return typedName;
  const linkedNames = mealConsumptions.map((item) => item.foodName).filter(Boolean);
  if (linkedNames.length) {
    return `${els.mealSlot.value} · ${linkedNames.slice(0, 3).join("、")}`;
  }
  return `${els.mealSlot.value}计划`;
}

function renderPlanner() {
  const days = plannerWeekDays();
  els.plannerGrid.replaceChildren();
  els.plannerGrid.classList.toggle("is-compact", compactPlannerView);
  els.compactPlannerView.classList.toggle("is-active", compactPlannerView);
  const visibleWeek = plannerWeekOnlyDays();
  els.plannerRangeLabel.textContent = `${toDateInput(visibleWeek[0])} - ${toDateInput(visibleWeek[6])}`;

  for (const date of days) {
    const column = document.createElement("article");
    column.className = "day-column";
    const dateText = toDateInput(date);
    column.dataset.date = dateText;
    const meals = state.meals
      .filter((meal) => meal.date === dateText)
      .sort(sortMeals);

    column.innerHTML = `
      <div class="day-title">
        <strong>${dayNames[date.getDay()]}</strong>
        <span>${dateText.slice(5)}</span>
      </div>
    `;

    if (!meals.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "未安排";
      column.append(empty);
    }

    for (const meal of meals) {
      const card = document.createElement("div");
      const title = document.createElement("strong");
      const ingredients = document.createElement("p");
      const consumed = document.createElement("p");
      const actions = document.createElement("div");
      const edit = document.createElement("button");
      const copy = document.createElement("button");
      const remove = document.createElement("button");

      card.className = "meal-card";
      card.classList.toggle("is-compact", compactPlannerView);
      card.classList.toggle("is-editing", editingMealId === meal.id);
      card.draggable = true;
      card.dataset.mealId = meal.id;
      title.textContent = compactPlannerView ? meal.slot : `${meal.slot} · ${meal.name}`;
      const consumedText = meal.consumptions && meal.consumptions.length
        ? meal.consumptions.map((item) => `${item.foodName}${formatQty(item.qty)}${item.unit}`).join("、")
        : "";
      const compactFoodsText = meal.consumptions && meal.consumptions.length
        ? meal.consumptions.map((item) => item.foodName).join("、")
        : meal.name;
      consumed.textContent = compactPlannerView ? compactFoodsText : (consumedText ? `已扣库存：${consumedText}` : "未关联库存");
      actions.className = "meal-card-actions";
      edit.type = "button";
      edit.dataset.editMealId = meal.id;
      edit.title = "编辑";
      edit.setAttribute("aria-label", "编辑");
      edit.textContent = "✎";
      copy.type = "button";
      copy.dataset.copyMealId = meal.id;
      copy.title = "复制到同一天";
      copy.setAttribute("aria-label", "复制到同一天");
      copy.textContent = "⧉";
      remove.type = "button";
      remove.dataset.mealId = meal.id;
      remove.title = "删除";
      remove.setAttribute("aria-label", "删除");
      remove.textContent = "×";
      actions.append(edit, copy, remove);
      card.append(title);
      if (!compactPlannerView && meal.ingredients) {
        ingredients.textContent = meal.ingredients;
        card.append(ingredients);
      }
      if (consumed.textContent) card.append(consumed);
      if (!compactPlannerView) card.append(actions);
      column.append(card);
    }

    els.plannerGrid.append(column);
  }
  scrollPlannerToCurrentRange();
}

function moveMeal(mealId, targetDate, targetCard) {
  const meal = state.meals.find((item) => item.id === mealId);
  if (!meal || !targetDate) return;
  const targetMealId = targetCard && targetCard.dataset.mealId !== mealId ? targetCard.dataset.mealId : null;
  const dayMeals = state.meals
    .filter((item) => item.date === targetDate && item.id !== mealId)
    .sort(sortMeals);

  meal.date = targetDate;
  const targetIndex = targetMealId ? dayMeals.findIndex((item) => item.id === targetMealId) : -1;
  if (targetIndex >= 0) {
    dayMeals.splice(targetIndex, 0, meal);
  } else {
    dayMeals.push(meal);
  }

  dayMeals.forEach((item, index) => {
    item.order = index + 1;
  });
}

function clearDropTargets() {
  for (const column of els.plannerGrid.querySelectorAll(".day-column")) {
    column.classList.remove("is-drop-target");
  }
}

function shiftPlannerWeek(offset) {
  const next = new Date(plannerStartDate);
  next.setDate(next.getDate() + offset * 7);
  plannerStartDate = startOfWeek(next);
  renderPlanner();
}

function startMealEdit(mealId) {
  const meal = getMeal(mealId);
  if (!meal) return;
  switchView("meal");
  editingMealId = meal.id;
  plannerStartDate = startOfWeek(new Date(`${meal.date}T00:00:00`));
  els.mealDate.value = meal.date;
  els.mealSlot.value = meal.slot;
  els.mealName.value = meal.name;
  els.mealIngredients.value = meal.ingredients || "";
  mealConsumptions = Array.isArray(meal.consumptions)
    ? meal.consumptions.map((item) => ({ ...item }))
    : [];
  els.mealSubmit.textContent = tr("saveMealEdit");
  els.cancelMealEdit.classList.remove("hidden");
  renderMealConsumptionDraft();
  renderPlanner();
  els.mealForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetMealForm() {
  editingMealId = null;
  els.mealName.value = "";
  els.mealIngredients.value = "";
  mealConsumptions = [];
  els.mealSubmit.textContent = tr("submitMeal");
  els.cancelMealEdit.classList.add("hidden");
  renderMealConsumptionDraft();
}

function startFoodEdit(food) {
  switchView("inventory");
  editingFoodId = food.id;
  removeCurrentFoodImage = false;
  els.foodName.value = food.name;
  els.foodQty.value = food.qty;
  els.foodUnit.value = food.unit;
  els.foodCalories.value = food.calories ? String(food.calories) : "";
  els.foodCalories.dataset.source = food.calorieSource || (food.calories ? "manual" : "auto");
  els.foodCategory.value = food.category;
  els.foodExpiry.value = food.expiry;
  els.foodStorage.value = food.storage;
  els.foodImage.value = "";
  renderFoodImagePreview(food.image || "");
  els.foodSubmit.textContent = tr("saveChanges");
  els.cancelFoodEdit.classList.remove("hidden");
  els.foodName.focus();
}

function handleSummaryAction(summary) {
  if (summary === "planned") {
    setStockFilter("all");
    switchView("meal");
    setTimeout(() => els.plannerDisplay.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
    return;
  }

  setStockFilter(summary || "all");
  switchView("inventory");
  renderFoods();
  renderSummary();
  setTimeout(() => els.inventoryDisplay.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
}

function setStockFilter(filter) {
  activeStockFilter = filter || "all";
  els.showDepleted.checked = activeStockFilter === "depleted";
  els.searchInput.value = "";
  els.sortMode.value = activeStockFilter === "expiring" ? "expiry" : els.sortMode.value;
  els.storageFilter.value = "all";
  activeCategoryFilters.clear();
}

function switchView(view) {
  activeView = view;
  renderViewState();
}

function renderViewState() {
  const showDashboard = activeView === "dashboard";
  const showInventory = activeView === "inventory";
  const showMeal = activeView === "meal";
  const showManage = activeView === "manage";
  els.dashboardView.classList.toggle("hidden", !showDashboard);
  els.inventoryView.classList.toggle("hidden", !showInventory);
  els.mealView.classList.toggle("hidden", !showMeal);
  els.manageView.classList.toggle("hidden", !showManage);
  els.dashboardTab.classList.toggle("is-active", showDashboard);
  els.inventoryTab.classList.toggle("is-active", showInventory);
  els.mealTab.classList.toggle("is-active", showMeal);
  els.manageTab.classList.toggle("is-active", showManage);
  els.dashboardTab.setAttribute("aria-selected", String(showDashboard));
  els.inventoryTab.setAttribute("aria-selected", String(showInventory));
  els.mealTab.setAttribute("aria-selected", String(showMeal));
  els.manageTab.setAttribute("aria-selected", String(showManage));

  const labels = {
    all: ["全部库存", "查看当前库存、位置和到期状态。"],
    expiring: ["7天内到期", "只显示未来7天内到期的食材。"],
    low: ["低库存", "只显示数量小于或等于1的食材。"]
  };
  const batchLabels = {
    all: ["库存批次", "按每次进购的一批食材查看当前库存。"],
    expiring: ["7天内到期", "只显示仍有库存且未来 7 天内到期的批次。"],
    depleted: ["已用完批次", "只显示数量为 0 的历史批次。"]
  };
  const [title, hint] = batchLabels[activeStockFilter] || batchLabels.all;
  els.stockViewTitle.textContent = title;
  els.stockQuickHint.textContent = hint;
  els.resetStockFilter.classList.toggle("hidden", activeStockFilter === "all");
}

function matchesStockFilter(food) {
  if (activeStockFilter === "expiring") {
    const days = daysUntil(food.expiry);
    return food.qty > 0 && days >= 0 && days <= 7;
  }
  if (activeStockFilter === "depleted") {
    return food.qty <= 0;
  }
  if (activeStockFilter === "low") {
    return food.qty > 0 && food.qty <= 1;
  }
  return true;
}

function resetFoodForm() {
  editingFoodId = null;
  removeCurrentFoodImage = false;
  els.foodForm.reset();
  els.foodQty.value = 1;
  els.foodUnit.value = "份";
  els.foodCalories.value = "";
  els.foodCalories.dataset.source = "auto";
  els.foodCategory.value = "蔬菜";
  els.foodStorage.value = "冰箱冷藏";
  renderFoodImagePreview("");
  refreshFoodCaloriesEstimate(true);
  els.foodSubmit.textContent = tr("addFood");
  els.cancelFoodEdit.classList.add("hidden");
}

function getEditingFoodImage() {
  const food = editingFoodId ? getFood(editingFoodId) : null;
  return removeCurrentFoodImage ? "" : ((food && food.image) || "");
}

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")));
    reader.addEventListener("error", () => reject(new Error("图片读取失败")));
    reader.readAsDataURL(file);
  });
}

function renderFoodImagePreview(image) {
  els.foodImagePreview.replaceChildren();
  els.removeFoodImage.classList.toggle("hidden", !image);
  if (!image) {
    els.foodImagePreview.innerHTML = '<span>未选择图片，将自动匹配首字图。</span>';
    return;
  }
  const img = document.createElement("img");
  img.src = image;
  img.alt = "食物图片预览";
  els.foodImagePreview.append(img);
}

function renderFoodThumb(container, food) {
  container.replaceChildren();
  if (food.image) {
    const img = document.createElement("img");
    img.src = food.image;
    img.alt = "";
    container.append(img);
    return;
  }
  container.textContent = food.name.trim().slice(0, 1) || "食";
  container.style.background = autoFoodImageGradient(food);
}

function autoFoodImageGradient(food) {
  const seed = Array.from(food.name || food.category || "食")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const hue = seed % 360;
  return `linear-gradient(135deg, hsl(${hue}, 45%, 88%), hsl(${(hue + 38) % 360}, 48%, 68%))`;
}

function consumeStock(items) {
  const cleanItems = items.filter((item) => item.foodId && item.qty > 0);
  for (const item of cleanItems) {
    const food = getFood(item.foodId);
    if (!food) {
      alert("有食材已经不在库存里。");
      return false;
    }
    if (food.qty < item.qty) {
      alert(`${food.name} 库存不足，目前只有 ${formatQty(food.qty)}${food.unit}`);
      return false;
    }
  }

  for (const item of cleanItems) {
    const food = getFood(item.foodId);
    food.qty = Number((food.qty - item.qty).toFixed(2));
    if (food.qty < 0) food.qty = 0;
  }
  return true;
}

function addInventorySnackMeal(food, qty, date) {
  const cleanQty = toNumber(qty);
  if (!food || cleanQty <= 0) return false;
  const consumption = {
    foodId: food.id,
    foodName: food.name,
    qty: cleanQty,
    unit: food.unit,
    calories: food.calories,
    category: food.category,
    storage: food.storage
  };
  if (!consumeStock([consumption])) return false;
  const mealDate = date || toDateInput(new Date());
  state.meals.push({
    id: crypto.randomUUID(),
    date: mealDate,
    slot: "加餐",
    name: food.name,
    ingredients: "",
    consumptions: [consumption],
    order: nextMealOrder(mealDate)
  });
  plannerStartDate = startOfWeek(new Date(`${mealDate}T00:00:00`));
  return true;
}

function addSelectedTableFoodsAsSnack() {
  const consumptions = getSelectedBatchConsumptions();
  if (!selectedInventoryBatchIds.size) {
    alert("先在表格里勾选要加入加餐的食材。");
    return;
  }
  if (!consumptions.length) {
    alert("批量份数需要大于 0。");
    return;
  }
  const mealDate = els.dailyDate.value || toDateInput(new Date());
  const summaryText = consumptions.map((item) => `${item.foodName} ${formatQty(item.qty)}${item.unit}`).join("\n");
  const confirmed = confirm(`将把以下食材加入 ${mealDate} 的加餐并扣库存：\n\n${summaryText}\n\n确定继续吗？`);
  if (!confirmed) return;
  if (!consumeStock(consumptions)) return;
  const names = consumptions.map((item) => item.foodName);
  state.meals.push({
    id: crypto.randomUUID(),
    date: mealDate,
    slot: "加餐",
    name: names.length <= 2 ? names.join("、") : `${names[0]}等${names.length}样`,
    ingredients: "",
    consumptions,
    order: nextMealOrder(mealDate)
  });
  plannerStartDate = startOfWeek(new Date(`${mealDate}T00:00:00`));
  clearInventoryBatchSelection();
  saveAndRender();
}

function addInventoryDiscardLog(food, qty, date) {
  const cleanQty = toNumber(qty);
  if (!food || cleanQty <= 0) return false;
  const consumption = {
    foodId: food.id,
    foodName: food.name,
    qty: cleanQty,
    unit: food.unit,
    calories: food.calories,
    category: food.category,
    storage: food.storage
  };
  if (!consumeStock([consumption])) return false;
  state.logs.push({
    id: crypto.randomUUID(),
    date: date || toDateInput(new Date()),
    type: "discard",
    items: [consumption]
  });
  return true;
}

function getSelectedBatchConsumptions() {
  const consumptions = [];
  for (const foodId of selectedInventoryBatchIds) {
    const food = getFood(foodId);
    if (!food) continue;
    const qty = toEditableNumber(selectedInventoryBatchQtys.get(foodId));
    if (qty <= 0) continue;
    consumptions.push({
      foodId: food.id,
      foodName: food.name,
      qty,
      unit: food.unit,
      calories: food.calories,
      category: food.category,
      storage: food.storage
    });
  }
  return consumptions;
}

function clearInventoryBatchSelection() {
  selectedInventoryBatchIds.clear();
  selectedInventoryBatchQtys.clear();
  updateBatchSelectionSummary();
}

function updateBatchSelectionSummary() {
  const summary = els.foodList.querySelector(".batch-summary");
  if (summary) {
    summary.textContent = `已选 ${selectedInventoryBatchIds.size} 项`;
  }
  const clearButton = els.foodList.querySelector(".batch-clear");
  if (clearButton) {
    clearButton.disabled = !selectedInventoryBatchIds.size;
  }
}

function toEditableNumber(value, fallback = 1) {
  const text = String(value ?? "").trim();
  if (!text) return fallback;
  const number = Number(text);
  return Number.isFinite(number) ? number : fallback;
}

function deleteMeal(mealId) {
  const meal = state.meals.find((item) => item.id === mealId);
  if (!meal) return;
  restoreStockForMeal(meal);
  state.meals = state.meals.filter((item) => item.id !== mealId);
}

function copyMeal(mealId) {
  const meal = getMeal(mealId);
  if (!meal) return;
  const consumptions = Array.isArray(meal.consumptions) ? meal.consumptions.map((item) => ({ ...item })) : [];
  if (!consumeStock(consumptions)) return;
  state.meals.push({
    ...meal,
    id: crypto.randomUUID(),
    consumptions,
    order: nextMealOrder(meal.date)
  });
}

function clearMealPlan() {
  for (const meal of state.meals) {
    restoreStockForMeal(meal);
  }
  state.meals = [];
}

function restoreStockForMeal(meal) {
  const consumptions = Array.isArray(meal.consumptions) ? meal.consumptions : [];
  for (const item of consumptions) {
    if (!item || !item.qty) continue;
    const existing = getFood(item.foodId);
    if (existing) {
      existing.qty = Number((existing.qty + toNumber(item.qty)).toFixed(2));
      continue;
    }

    state.foods.push({
      id: item.foodId || crypto.randomUUID(),
      name: item.foodName || "恢复的食材",
      qty: toNumber(item.qty),
      unit: item.unit || "份",
      calories: roundCalories(toEditableNumber(item.calories, estimateFoodCalories(item.foodName, item.unit, item.category))),
      calorieSource: item.calories ? "manual" : "auto",
      category: item.category || "其他",
      expiry: "",
      storage: item.storage || "未设置位置",
      createdAt: new Date().toISOString()
    });
  }
}

function sortFoods(a, b) {
  if (els.sortMode.value === "name") return a.name.localeCompare(b.name, "zh-CN");
  if (els.sortMode.value === "qty") return a.qty - b.qty;
  return daysUntil(a.expiry) - daysUntil(b.expiry);
}

function daysUntil(dateText) {
  if (!dateText) return 9999;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(`${dateText}T00:00:00`);
  return Math.round((target - today) / 86400000);
}

function expiryText(dateText) {
  if (!dateText) return "未填写到期日";
  const days = daysUntil(dateText);
  if (days < 0) return `已过期 ${Math.abs(days)} 天`;
  if (days === 0) return "今天到期";
  return `${dateText} 到期，剩 ${days} 天`;
}

function batchStatusText(food) {
  if (food.qty <= 0) return "已用完，不计到期";
  return expiryText(food.expiry);
}

function foodMetaText(food) {
  const parts = [`${formatQty(food.qty)}${food.unit}`];
  if (food.calories > 0) parts.push(`约${formatQty(food.calories)} kcal/${food.unit}`);
  if (food.expiry) parts.push(food.qty <= 0 ? "已用完" : expiryText(food.expiry));
  return parts.join(" · ");
}

function estimateFoodCalories(name, unit, category) {
  const normalizedName = String(name || "").trim().toLowerCase();
  const normalizedUnit = String(unit || "份").trim().toLowerCase();
  const entry = CALORIE_LIBRARY.find((item) => item.keywords.some((keyword) => normalizedName.includes(keyword.toLowerCase())))
    || CATEGORY_CALORIE_DEFAULTS[category]
    || CATEGORY_CALORIE_DEFAULTS.其他;
  return roundCalories(convertCalorieEntry(entry, normalizedUnit));
}

function convertCalorieEntry(entry, unit) {
  if (!entry) return 0;
  if (entry.mode === "per100g") return convertPer100gCalories(entry.kcal, unit, entry.serving || 100);
  if (entry.mode === "per100ml") return convertPer100mlCalories(entry.kcal, unit, entry.serving || 250);
  return convertUnitCalories(entry.kcal, unit, entry.grams || entry.serving || 100);
}

function convertPer100gCalories(kcal, unit, serving) {
  if (isGramUnit(unit)) return kcal / 100;
  if (isKilogramUnit(unit)) return kcal * 10;
  if (unit.includes("斤")) return kcal * 5;
  if (unit.includes("两")) return kcal * 0.5;
  return kcal * serving / 100;
}

function convertPer100mlCalories(kcal, unit, serving) {
  if (unit === "ml" || unit === "毫升") return kcal / 100;
  if (unit === "l" || unit === "升") return kcal * 10;
  return kcal * serving / 100;
}

function convertUnitCalories(kcal, unit, grams) {
  if (isGramUnit(unit)) return grams ? kcal / grams : kcal / 100;
  if (isKilogramUnit(unit)) return grams ? (kcal / grams) * 1000 : kcal * 10;
  return kcal;
}

function isGramUnit(unit) {
  return unit === "g" || unit === "克";
}

function isKilogramUnit(unit) {
  return unit === "kg" || unit === "千克";
}

function roundCalories(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return 0;
  return Math.round(number);
}

function getItemCalories(item) {
  const explicit = toEditableNumber(item && item.calories, 0);
  if (explicit > 0) return explicit;
  const food = item && item.foodId ? getFood(item.foodId) : null;
  if (food && food.calories > 0) return food.calories;
  return estimateFoodCalories(item && item.foodName, item && item.unit, item && item.category);
}

function getMealCalories(meal) {
  return roundCalories((Array.isArray(meal && meal.consumptions) ? meal.consumptions : []).reduce((sum, item) => (
    sum + (getItemCalories(item) * toNumber(item.qty))
  ), 0));
}

function getRecentCalorieSeries(days = 7) {
  return Array.from({ length: days }, (_, index) => {
    const current = new Date();
    current.setDate(current.getDate() - (days - index - 1));
    const dateText = toDateInput(current);
    return {
      date: dateText,
      calories: roundCalories(getCaloriesForDate(dateText))
    };
  });
}

function getCaloriesForDate(dateText) {
  const mealCalories = state.meals
    .filter((meal) => meal.date === dateText)
    .reduce((sum, meal) => sum + getMealCalories(meal), 0);
  const logCalories = state.logs
    .filter((log) => log.date === dateText && log.type !== "discard")
    .reduce((sum, log) => sum + (Array.isArray(log.items) ? log.items.reduce((itemSum, item) => (
      itemSum + (getItemCalories(item) * toNumber(item.qty))
    ), 0) : 0), 0);
  return mealCalories + logCalories;
}

function batchCode(food) {
  const date = food.createdAt ? food.createdAt.slice(0, 10).replaceAll("-", "") : "new";
  return `${date}-${String(food.id || "").slice(0, 4)}`;
}

function nextSevenDays() {
  return Array.from({ length: 7 }, (_, index) => {
    const current = new Date();
    current.setDate(current.getDate() + index);
    return current;
  });
}

function plannerWeekDays() {
  const weekEnd = new Date(plannerStartDate);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const historicalDates = state.meals
    .map((meal) => meal.date)
    .filter(Boolean)
    .map((date) => new Date(`${date}T00:00:00`))
    .filter((date) => date < plannerStartDate);
  const start = historicalDates.length
    ? startOfWeek(new Date(Math.min(...historicalDates.map((date) => date.getTime()))))
    : new Date(plannerStartDate);
  const dayCount = Math.round((weekEnd - start) / 86400000) + 1;
  return Array.from({ length: Math.max(7, dayCount) }, (_, index) => {
    const current = new Date(start);
    current.setDate(current.getDate() + index);
    return current;
  });
}

function plannerWeekOnlyDays() {
  return Array.from({ length: 7 }, (_, index) => {
    const current = new Date(plannerStartDate);
    current.setDate(current.getDate() + index);
    return current;
  });
}

function scrollPlannerToCurrentRange() {
  const currentColumn = els.plannerGrid.querySelector(`[data-date="${toDateInput(plannerStartDate)}"]`);
  if (!currentColumn) return;
  requestAnimationFrame(() => {
    els.plannerGrid.scrollLeft = Math.max(0, currentColumn.offsetLeft - 8);
  });
}

function startOfWeek(value) {
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  const day = date.getDay() || 7;
  date.setDate(date.getDate() - day + 1);
  return date;
}

function toDateInput(value) {
  const local = new Date(value);
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
  return local.toISOString().slice(0, 10);
}

function mealOrder(slot) {
  const index = mealSlots.indexOf(slot);
  return index >= 0 ? index : 99;
}

function sortMeals(a, b) {
  const aOrder = Number.isFinite(Number(a.order)) ? Number(a.order) : mealOrder(a.slot);
  const bOrder = Number.isFinite(Number(b.order)) ? Number(b.order) : mealOrder(b.slot);
  return aOrder - bOrder || mealOrder(a.slot) - mealOrder(b.slot);
}

function nextMealOrder(dateText) {
  const orders = state.meals
    .filter((meal) => meal.date === dateText)
    .map((meal) => Number(meal.order))
    .filter(Number.isFinite);
  return orders.length ? Math.max(...orders) + 1 : 1;
}

function getFood(id) {
  return state.foods.find((food) => food.id === id);
}

function getMeal(id) {
  return state.meals.find((meal) => meal.id === id);
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function formatQty(value) {
  return Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 });
}

function getConsumptionRecords(days) {
  const mealRecords = state.meals
    .filter((meal) => isWithinDays(meal.date, days))
    .map((meal) => ({
      date: meal.date,
      type: "meal",
      title: `${meal.slot} · ${meal.name}`,
      items: Array.isArray(meal.consumptions) ? meal.consumptions : []
    }));
  const dailyRecords = state.logs
    .filter((log) => (log.type === "daily" || log.type === "discard") && isWithinDays(log.date, days))
    .map((log) => ({
      date: log.date,
      type: log.type,
      title: log.type === "discard" ? "丢弃" : "日常消耗",
      items: Array.isArray(log.items) ? log.items : []
    }));
  return [...mealRecords, ...dailyRecords].filter((record) => record.items.length);
}

function sortRecordsByDateDesc(a, b) {
  return `${b.date || ""}${b.title || ""}`.localeCompare(`${a.date || ""}${a.title || ""}`, "zh-CN");
}

function sortMealsByDateDesc(a, b) {
  const dateCompare = (b.date || "").localeCompare(a.date || "");
  if (dateCompare) return dateCompare;
  return sortMeals(a, b);
}

function isWithinDays(dateText, days) {
  if (!dateText) return false;
  const diff = daysUntil(dateText);
  return diff <= 0 && diff > -days;
}

function findFoodCategory(foodId) {
  const food = getFood(foodId);
  return food && food.category;
}

function hasCategoryLike(categoriesSet, keyword) {
  return [...categoriesSet].some((category) => category.includes(keyword));
}

function getCategoryList() {
  const customCategories = state.foods
    .map((food) => food.category)
    .filter(Boolean);
  const visibleDefaults = categories.filter((category) => !state.settings.hiddenCategories.includes(category));
  return [...new Set([...visibleDefaults, ...state.settings.categories, ...customCategories])].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function getStorageList() {
  const usedStorages = state.foods
    .map((food) => food.storage)
    .filter(Boolean);
  const visibleDefaults = storageLocations.filter((storage) => !state.settings.hiddenStorages.includes(storage));
  return [...new Set([...visibleDefaults, ...state.settings.storages, ...usedStorages])].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function addManagedOption(type, value) {
  const cleaned = value.trim();
  if (!cleaned) return;
  const hiddenType = type === "categories" ? "hiddenCategories" : "hiddenStorages";
  state.settings[hiddenType] = state.settings[hiddenType].filter((option) => option !== cleaned);
  if (!state.settings[type].includes(cleaned)) {
    state.settings[type].push(cleaned);
  }
  saveAndRender();
}

function removeManagedOption(type, value) {
  const defaults = type === "categories" ? categories : storageLocations;
  const hiddenType = type === "categories" ? "hiddenCategories" : "hiddenStorages";
  state.settings[type] = state.settings[type].filter((option) => option !== value);
  if (defaults.includes(value) && !state.settings[hiddenType].includes(value)) {
    state.settings[hiddenType].push(value);
  }
  saveAndRender();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY)) || {};
    return normalizeState(saved);
  } catch {
    return normalizeState({});
  }
}

function normalizeState(saved) {
  return {
    foods: normalizeFoods(saved.foods),
    meals: normalizeMeals(saved.meals),
    logs: Array.isArray(saved.logs) ? saved.logs : [],
    settings: normalizeSettings(saved.settings)
  };
}

function normalizeSettings(settings) {
  return {
    categories: Array.isArray(settings && settings.categories) ? settings.categories.filter(Boolean) : [],
    storages: Array.isArray(settings && settings.storages) ? settings.storages.filter(Boolean) : [],
    hiddenCategories: Array.isArray(settings && settings.hiddenCategories) ? settings.hiddenCategories.filter(Boolean) : [],
    hiddenStorages: Array.isArray(settings && settings.hiddenStorages) ? settings.hiddenStorages.filter(Boolean) : [],
    language: settings && settings.language === "en" ? "en" : "zh"
  };
}

function normalizeFoods(foods) {
  return Array.isArray(foods) ? foods.map((food) => {
    const normalized = {
      id: food.id || crypto.randomUUID(),
      name: food.name || "未命名食物",
      qty: toNumber(food.qty),
      unit: food.unit || "份",
      category: food.category || "其他",
      expiry: food.expiry || "",
      storage: food.storage || "未设置位置",
      image: food.image || "",
      createdAt: food.createdAt || new Date().toISOString()
    };
    const explicitCalories = toEditableNumber(food.calories, 0);
    return {
      ...normalized,
      calories: roundCalories(explicitCalories || estimateFoodCalories(normalized.name, normalized.unit, normalized.category)),
      calorieSource: food.calorieSource || (explicitCalories ? "manual" : "auto")
    };
  }) : [];
}

function normalizeMeals(meals) {
  return Array.isArray(meals) ? meals.map((meal) => ({
    id: meal.id || crypto.randomUUID(),
    date: meal.date || toDateInput(new Date()),
    slot: mealSlots.includes(meal.slot) ? meal.slot : "晚餐",
    name: meal.name || "未命名菜谱",
    ingredients: meal.ingredients || "",
    consumptions: Array.isArray(meal.consumptions) ? meal.consumptions : [],
    order: Number.isFinite(Number(meal.order)) ? Number(meal.order) : mealOrder(meal.slot)
  })) : [];
}

function demoFoods() {
  const offset = (days) => {
    const current = new Date();
    current.setDate(current.getDate() + days);
    return toDateInput(current);
  };
  return [
    { id: crypto.randomUUID(), name: "鸡蛋", qty: 8, unit: "个", category: "肉蛋", storage: "冰箱冷藏", expiry: offset(10) },
    { id: crypto.randomUUID(), name: "番茄", qty: 4, unit: "个", category: "蔬菜", storage: "台面", expiry: offset(3) },
    { id: crypto.randomUUID(), name: "牛奶", qty: 1, unit: "瓶", category: "乳品", storage: "冰箱冷藏", expiry: offset(1) },
    { id: crypto.randomUUID(), name: "米饭", qty: 2, unit: "盒", category: "主食", storage: "冷冻室", expiry: offset(5) },
    { id: crypto.randomUUID(), name: "青菜", qty: 1, unit: "把", category: "蔬菜", storage: "冰箱冷藏", expiry: offset(2) }
  ];
}

function demoMeals() {
  return [];
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function replaceBoundElement(key) {
  const current = els[key];
  if (!current) return null;
  const clone = current.cloneNode(true);
  current.replaceWith(clone);
  els[key] = clone;
  return clone;
}

function upgradeSpecialImportAndExportUi() {
  replaceBoundElement("exportData");
  replaceBoundElement("downloadInventoryTemplate");
  replaceBoundElement("loadInventoryTemplateSample");
  replaceBoundElement("importInventoryTemplateAppend");
  replaceBoundElement("importInventoryTemplateReplace");

  els.exportData.addEventListener("click", () => {
    exportStateData();
  });
  els.saveExportFile.addEventListener("click", () => {
    saveExportFromOverlay();
  });
  els.copyExportText.addEventListener("click", () => {
    copyExportPayload();
  });
  els.closeExportOverlay.addEventListener("click", hideExportOverlay);
  els.exportOverlay.addEventListener("click", (event) => {
    if (event.target === els.exportOverlay) hideExportOverlay();
  });

  els.templateSheetMode.addEventListener("click", () => setInventoryTemplateMode("sheet"));
  els.templateJsonMode.addEventListener("click", () => setInventoryTemplateMode("json"));
  els.downloadInventoryTemplate.addEventListener("click", () => {
    downloadInventoryTemplate();
  });
  els.inventoryTemplateInput.addEventListener("input", syncInventoryTemplatePreview);
  els.inventoryTemplateFile.addEventListener("change", async () => {
    const [file] = els.inventoryTemplateFile.files;
    if (!file) return;
    const text = await file.text();
    setInventoryTemplateMode("sheet");
    els.inventoryTemplateInput.value = text;
    els.inventoryTemplateFile.value = "";
    syncInventoryTemplatePreview();
  });

  els.loadInventoryTemplateSample.addEventListener("click", () => {
    if (inventoryTemplateMode === "json") {
      els.inventoryTemplateInput.value = JSON.stringify([
        { name: "鸡蛋", qty: 12, unit: "个", calories: 78, category: "肉蛋", expiry: "2026-06-06", storage: "冰箱冷藏" },
        { name: "番茄", qty: 4, unit: "个", calories: 22, category: "蔬菜", expiry: "2026-06-05", storage: "台面" },
        { name: "牛奶", qty: 2, unit: "瓶", calories: 155, category: "乳品", expiry: "2026-06-08", storage: "冰箱冷藏" }
      ], null, 2);
    } else {
      els.inventoryTemplateInput.value = [
        "名称\t数量\t单位\t热量\t分类\t到期日\t贮藏位置",
        "鸡蛋\t12\t个\t78\t肉蛋\t2026-06-06\t冰箱冷藏",
        "番茄\t4\t个\t22\t蔬菜\t2026-06-05\t台面",
        "牛奶\t2\t瓶\t155\t乳品\t2026-06-08\t冰箱冷藏"
      ].join("\n");
    }
    syncInventoryTemplatePreview();
  });

  els.importInventoryTemplateAppend.addEventListener("click", () => {
    importInventoryTemplate("append");
  });
  els.importInventoryTemplateReplace.addEventListener("click", () => {
    importInventoryTemplate("replace");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.exportOverlay.classList.contains("hidden")) {
      hideExportOverlay();
    }
  });

  setInventoryTemplateMode("sheet");
}

function buildExportPayload() {
  return JSON.stringify(state, null, 2);
}

function getExportFilename() {
  return `food-manager-${toDateInput(new Date())}.json`;
}

function showExportOverlay(message, payload = buildExportPayload()) {
  els.exportText.value = payload;
  els.exportStatus.textContent = message;
  els.exportOverlay.classList.remove("hidden");
  els.exportOverlay.setAttribute("aria-hidden", "false");
}

function hideExportOverlay() {
  els.exportOverlay.classList.add("hidden");
  els.exportOverlay.setAttribute("aria-hidden", "true");
}

function focusExportText() {
  els.exportText.focus();
  els.exportText.select();
}

async function exportStateData() {
  const payload = buildExportPayload();
  const filename = getExportFilename();
  const result = await saveExportPayload(payload, filename);

  if (result === "saved") {
    hideExportOverlay();
    alert(`已导出到 ${filename}`);
    return;
  }

  if (result === "downloaded") {
    showExportOverlay(`已尝试下载 ${filename}。如果 Codex 浏览器没有弹出下载，直接复制下面内容即可。`, payload);
  } else if (result === "cancelled") {
    showExportOverlay("你刚刚取消了保存。下面已经准备好完整数据，可以直接复制或再点一次保存到文件。", payload);
  } else {
    showExportOverlay("Codex 浏览器没有完成直接下载。下面已经准备好完整数据，可以直接复制，或点保存到文件。", payload);
  }

  focusExportText();
}

async function saveExportFromOverlay() {
  const payload = els.exportText.value || buildExportPayload();
  const filename = getExportFilename();
  const result = await saveExportPayload(payload, filename);

  if (result === "saved") {
    hideExportOverlay();
    alert(`已导出到 ${filename}`);
    return;
  }

  if (result === "downloaded") {
    els.exportStatus.textContent = `已再次尝试下载 ${filename}。如果还是没有弹出下载，直接复制下面内容即可。`;
  } else if (result === "cancelled") {
    els.exportStatus.textContent = "已取消保存。你可以继续复制下面的完整 JSON。";
  } else {
    els.exportStatus.textContent = "保存到文件没有成功。你可以直接复制下面的完整 JSON。";
  }

  focusExportText();
}

async function saveExportPayload(payload, filename) {
  if (typeof window.showSaveFilePicker === "function") {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: "JSON 文件",
            accept: { "application/json": [".json"] }
          }
        ]
      });
      const writable = await handle.createWritable();
      await writable.write(payload);
      await writable.close();
      return "saved";
    } catch (error) {
      if (error && error.name === "AbortError") return "cancelled";
    }
  }

  try {
    const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.body.append(link);
    link.click();
    setTimeout(() => {
      link.remove();
      URL.revokeObjectURL(url);
    }, 800);
    return "downloaded";
  } catch {
    return "failed";
  }
}

async function downloadInventoryTemplate() {
  const isJson = inventoryTemplateMode === "json";
  const filename = isJson ? "inventory-template.json" : "inventory-template.csv";
  const content = isJson
    ? JSON.stringify([
        { name: "鸡蛋", qty: 12, unit: "个", calories: 78, category: "肉蛋", expiry: "2026-06-06", storage: "冰箱冷藏" },
        { name: "番茄", qty: 4, unit: "个", calories: 22, category: "蔬菜", expiry: "2026-06-05", storage: "台面" },
        { name: "牛奶", qty: 2, unit: "瓶", calories: 155, category: "乳品", expiry: "2026-06-08", storage: "冰箱冷藏" }
      ], null, 2)
    : [
        "名称,数量,单位,热量,分类,到期日,贮藏位置",
        "鸡蛋,12,个,78,肉蛋,2026-06-06,冰箱冷藏",
        "番茄,4,个,22,蔬菜,2026-06-05,台面",
        "牛奶,2,瓶,155,乳品,2026-06-08,冰箱冷藏"
      ].join("\n");

  const result = await saveTextFile(content, filename, isJson ? "application/json" : "text/csv");
  if (result === "saved" || result === "downloaded") {
    alert(`模板已准备好：${filename}`);
    return;
  }

  els.inventoryTemplateInput.value = content;
  syncInventoryTemplatePreview();
  alert("浏览器没有直接下载模板，我已经把模板内容填进导入区了。");
}

async function saveTextFile(content, filename, mimeType) {
  if (typeof window.showSaveFilePicker === "function") {
    try {
      const extension = filename.includes(".") ? filename.slice(filename.lastIndexOf(".")) : ".txt";
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: "模板文件",
            accept: { [mimeType]: [extension] }
          }
        ]
      });
      const writable = await handle.createWritable();
      await writable.write(content);
      await writable.close();
      return "saved";
    } catch (error) {
      if (error && error.name === "AbortError") return "cancelled";
    }
  }

  try {
    const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.body.append(link);
    link.click();
    setTimeout(() => {
      link.remove();
      URL.revokeObjectURL(url);
    }, 800);
    return "downloaded";
  } catch {
    return "failed";
  }
}

async function copyExportPayload() {
  const payload = els.exportText.value || buildExportPayload();

  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(payload);
      els.exportStatus.textContent = "已复制完整 JSON。你可以直接粘贴保存成 .json 文件。";
      return;
    }
  } catch {
    // Fallback below.
  }

  focusExportText();
  try {
    if (document.execCommand("copy")) {
      els.exportStatus.textContent = "已复制完整 JSON。你可以直接粘贴保存成 .json 文件。";
      return;
    }
  } catch {
    // Manual copy fallback below.
  }

  els.exportStatus.textContent = "自动复制没有成功，内容已经选中，直接按 Ctrl+C 即可。";
}

function setInventoryTemplateMode(mode) {
  inventoryTemplateMode = mode === "json" ? "json" : "sheet";
  const isSheet = inventoryTemplateMode === "sheet";
  els.templateSheetMode.classList.toggle("is-active", isSheet);
  els.templateJsonMode.classList.toggle("is-active", !isSheet);
  els.templateGuide.classList.toggle("hidden", !isSheet);
  els.loadInventoryTemplateSample.textContent = isSheet ? tr("loadExcelSample") : tr("loadJsonSample");
  els.inventoryTemplateHint.textContent = isSheet
    ? tr("sheetTemplateHint")
    : tr("jsonTemplateHint");
  els.inventoryTemplateInput.placeholder = isSheet
    ? "名称\t数量\t单位\t热量\t分类\t到期日\t贮藏位置\n鸡蛋\t12\t个\t78\t肉蛋\t2026-06-06\t冰箱冷藏"
    : '[{"name":"鸡蛋","qty":12,"unit":"个","calories":78,"category":"肉蛋","expiry":"2026-06-06","storage":"冰箱冷藏"}]';
  syncInventoryTemplatePreview();
  applyLanguage();
}

function importInventoryTemplate(mode) {
  const raw = String(els.inventoryTemplateInput.value || "").trim();
  if (!raw) {
    alert(inventoryTemplateMode === "sheet" ? "先粘贴 Excel 表格或 CSV 内容。" : "先粘贴库存模板 JSON。");
    return;
  }

  try {
    const sourceFoods = parseInventoryTemplateSource(raw);
    const importedFoods = normalizeFoods(sourceFoods).map((food) => ({
      ...food,
      id: crypto.randomUUID()
    }));
    if (!importedFoods.length) {
      alert("模板里没有可导入的库存数据。");
      return;
    }

    if (mode === "replace") {
      if (!confirm(`将用模板覆盖当前 ${state.foods.length} 条库存数据，确定吗？`)) return;
      state.foods = importedFoods;
    } else {
      if (!confirm(`将向当前库存追加 ${importedFoods.length} 条数据，确定吗？`)) return;
      state.foods = [...state.foods, ...importedFoods];
    }

    clearInventoryBatchSelection();
    mealConsumptions = mealConsumptions.filter((item) => getFood(item.foodId));
    saveAndRender();
  } catch (error) {
    alert(`导入失败：${error.message}`);
  }
}

function parseInventoryTemplateSource(raw) {
  return inventoryTemplateMode === "json"
    ? parseInventoryTemplateJson(raw)
    : parseInventoryTemplateSheet(raw);
}

function parseInventoryTemplateJson(raw) {
  const parsed = JSON.parse(raw);
  const sourceFoods = Array.isArray(parsed) ? parsed : parsed && Array.isArray(parsed.foods) ? parsed.foods : null;
  if (!sourceFoods) throw new Error("JSON 需要是数组，或包含 foods 数组。");
  return sourceFoods;
}

function parseInventoryTemplateSheet(raw) {
  const lines = String(raw || "")
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line) => line.trim());
  if (!lines.length) return [];

  const delimiter = detectTemplateDelimiter(lines[0]);
  const rows = lines.map((line) => splitTemplateLine(line, delimiter));
  const hasHeader = isTemplateHeaderRow(rows[0]);
  const headers = hasHeader
    ? rows[0].map(mapTemplateHeader)
    : ["name", "qty", "unit", "calories", "category", "expiry", "storage"];
  const dataRows = hasHeader ? rows.slice(1) : rows;

  return dataRows
    .map((row) => templateRowToFood(row, headers))
    .filter((item) => item && item.name);
}

function detectTemplateDelimiter(line) {
  if (line.includes("\t")) return "\t";
  if (line.includes(",")) return ",";
  return ";";
}

function splitTemplateLine(line, delimiter) {
  if (delimiter === "\t") {
    return line.split("\t").map((cell) => String(cell || "").trim());
  }

  const cells = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"') {
      if (inQuotes && line[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === delimiter && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }

  cells.push(current.trim());
  return cells;
}

function isTemplateHeaderRow(row) {
  const mapped = row.map(mapTemplateHeader).filter(Boolean);
  return mapped.length >= 2 && mapped.includes("name");
}

function mapTemplateHeader(label) {
  const value = String(label || "").trim().toLowerCase();
  if (!value) return "";
  if (["名称", "食材", "name", "food"].includes(value)) return "name";
  if (["数量", "qty", "count"].includes(value)) return "qty";
  if (["单位", "unit"].includes(value)) return "unit";
  if (["热量", "卡路里", "每单位热量", "calories", "kcal"].includes(value)) return "calories";
  if (["分类", "category"].includes(value)) return "category";
  if (["到期日", "有效期", "到期", "expiry", "date"].includes(value)) return "expiry";
  if (["贮藏位置", "储藏位置", "位置", "storage", "place"].includes(value)) return "storage";
  return "";
}

function templateRowToFood(row, headers) {
  const food = {
    name: "",
    qty: 1,
    unit: "份",
    calories: "",
    category: "其他",
    expiry: "",
    storage: ""
  };

  row.forEach((cell, index) => {
    const key = headers[index] || ["name", "qty", "unit", "calories", "category", "expiry", "storage"][index] || "";
    if (!key) return;
    const value = String(cell || "").trim();
    if (!value) return;
    if (key === "qty") {
      food.qty = toEditableNumber(value, 1) || 1;
      return;
    }
    if (key === "calories") {
      food.calories = toEditableNumber(value, 0);
      return;
    }
    if (key === "expiry") {
      food.expiry = normalizeTemplateDate(value);
      return;
    }
    food[key] = value;
  });

  return food.name ? food : null;
}

function normalizeTemplateDate(value) {
  const clean = String(value || "").trim();
  const match = clean.match(/^(\d{4})[\/.-](\d{1,2})[\/.-](\d{1,2})$/);
  if (!match) return clean;
  return `${match[1]}-${match[2].padStart(2, "0")}-${match[3].padStart(2, "0")}`;
}

function syncInventoryTemplatePreview() {
  const raw = String(els.inventoryTemplateInput.value || "").trim();
  if (!raw) {
    els.inventoryTemplatePreviewMeta.textContent = inventoryTemplateMode === "sheet" ? tr("waitingPaste") : tr("waitingJson");
    els.inventoryTemplatePreview.innerHTML = '<p class="empty-state compact">这里会预览准备导入的库存数据。</p>';
    return;
  }

  try {
    const foods = parseInventoryTemplateSource(raw);
    renderInventoryTemplatePreview(foods);
  } catch (error) {
    els.inventoryTemplatePreviewMeta.textContent = tr("badFormat");
    els.inventoryTemplatePreview.innerHTML = `<p class="empty-state compact">${escapeHtml(error.message)}</p>`;
  }
}

function renderInventoryTemplatePreview(foods) {
  const rows = foods.slice(0, 6);
  els.inventoryTemplatePreviewMeta.textContent = `共 ${foods.length} 条，预览前 ${rows.length} 条`;
  if (!rows.length) {
    els.inventoryTemplatePreview.innerHTML = '<p class="empty-state compact">没有可预览的数据。</p>';
    return;
  }

  els.inventoryTemplatePreview.innerHTML = `
    <table class="template-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单位</th>
          <th>热量</th>
          <th>分类</th>
          <th>到期日</th>
          <th>贮藏位置</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map((food) => `
          <tr>
            <td>${escapeHtml(food.name || "")}</td>
            <td>${escapeHtml(String(food.qty || 1))}</td>
            <td>${escapeHtml(food.unit || "份")}</td>
            <td>${escapeHtml(food.calories ? String(food.calories) : "")}</td>
            <td>${escapeHtml(food.category || "其他")}</td>
            <td>${escapeHtml(food.expiry || "")}</td>
            <td>${escapeHtml(food.storage || "")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderPlanner() {
  const days = plannerWeekDays();
  els.plannerGrid.replaceChildren();
  els.plannerGrid.classList.toggle("is-compact", compactPlannerView);
  els.compactPlannerView.classList.toggle("is-active", compactPlannerView);
  const visibleWeek = plannerWeekOnlyDays();
  els.plannerRangeLabel.textContent = `${toDateInput(visibleWeek[0])} - ${toDateInput(visibleWeek[6])}`;

  for (const date of days) {
    const column = document.createElement("article");
    column.className = "day-column";
    const dateText = toDateInput(date);
    const dayCalories = roundCalories(getCaloriesForDate(dateText));
    column.dataset.date = dateText;
    const meals = state.meals
      .filter((meal) => meal.date === dateText)
      .sort(sortMeals);

    column.innerHTML = `
      <div class="day-head">
        <div class="day-title">
          <strong>${dayNames[date.getDay()]}</strong>
          <span>${dateText.slice(5)}</span>
        </div>
        <div class="day-calories">${dayCalories} kcal</div>
      </div>
    `;

    if (!meals.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "未安排";
      column.append(empty);
    }

    for (const meal of meals) {
      const card = document.createElement("div");
      const title = document.createElement("strong");
      const ingredients = document.createElement("p");
      const consumed = document.createElement("p");
      const actions = document.createElement("div");
      const edit = document.createElement("button");
      const copy = document.createElement("button");
      const remove = document.createElement("button");

      card.className = "meal-card";
      card.classList.toggle("is-compact", compactPlannerView);
      card.classList.toggle("is-editing", editingMealId === meal.id);
      card.draggable = true;
      card.dataset.mealId = meal.id;
      title.textContent = compactPlannerView ? meal.slot : `${meal.slot} · ${meal.name}`;
      const consumedText = meal.consumptions && meal.consumptions.length
        ? meal.consumptions.map((item) => `${item.foodName}${formatQty(item.qty)}${item.unit}`).join("、")
        : "";
      const compactFoodsText = meal.consumptions && meal.consumptions.length
        ? meal.consumptions.map((item) => item.foodName).join("、")
        : meal.name;
      consumed.textContent = compactPlannerView ? compactFoodsText : (consumedText ? `已扣库存：${consumedText}` : "未关联库存");
      actions.className = "meal-card-actions";
      edit.type = "button";
      edit.dataset.editMealId = meal.id;
      edit.title = "编辑";
      edit.setAttribute("aria-label", "编辑");
      edit.textContent = "✎";
      copy.type = "button";
      copy.dataset.copyMealId = meal.id;
      copy.title = "复制到同一天";
      copy.setAttribute("aria-label", "复制到同一天");
      copy.textContent = "⧉";
      remove.type = "button";
      remove.dataset.mealId = meal.id;
      remove.title = "删除";
      remove.setAttribute("aria-label", "删除");
      remove.textContent = "×";
      actions.append(edit, copy, remove);
      card.append(title);
      if (!compactPlannerView && meal.ingredients) {
        ingredients.textContent = meal.ingredients;
        card.append(ingredients);
      }
      if (consumed.textContent) card.append(consumed);
      if (!compactPlannerView) card.append(actions);
      column.append(card);
    }

    els.plannerGrid.append(column);
  }
  scrollPlannerToCurrentRange();
}

function updateBatchSelectionSummary() {
  const summary = els.foodList.querySelector(".batch-summary");
  if (summary) {
    summary.textContent = `已选 ${selectedInventoryBatchIds.size} 项`;
  }
  const editSummary = els.foodList.querySelector(".edit-summary");
  if (editSummary) {
    editSummary.textContent = `待修改 ${inventoryTableDrafts.size} 行`;
  }
  const clearButton = els.foodList.querySelector(".batch-clear");
  if (clearButton) {
    clearButton.disabled = !selectedInventoryBatchIds.size;
  }
  const resetButton = els.foodList.querySelector(".table-reset");
  if (resetButton) {
    resetButton.disabled = !inventoryTableDrafts.size;
  }
  const saveButton = els.foodList.querySelector(".table-save");
  if (saveButton) {
    saveButton.disabled = !inventoryTableDrafts.size;
  }
}

function getInventoryTableDraftValues(food) {
  const draft = inventoryTableDrafts.get(food.id) || {};
  return {
    qty: draft.qty ?? formatQty(food.qty),
    expiry: draft.expiry ?? food.expiry ?? "",
    category: draft.category ?? food.category ?? "其他",
    storage: draft.storage ?? food.storage ?? "未设置位置"
  };
}

function hasInventoryTableDraft(foodId) {
  return inventoryTableDrafts.has(foodId);
}

function buildInventoryTableSelectOptions(options, selectedValue) {
  const list = [...new Set([selectedValue, ...options].filter(Boolean))];
  return list.map((option) => `
    <option value="${escapeHtml(option)}" ${option === selectedValue ? "selected" : ""}>${escapeHtml(option)}</option>
  `).join("");
}

function normalizeInventoryTableValue(field, value) {
  if (field === "qty") return String(value ?? "").trim();
  if (field === "expiry") return normalizeTemplateDate(String(value ?? "").trim());
  return String(value ?? "").trim();
}

function stageInventoryTableEdit(foodId, field, value) {
  const food = getFood(foodId);
  if (!food) return;
  const normalizedValue = normalizeInventoryTableValue(field, value);
  const actualValue = normalizeInventoryTableValue(field, field === "qty" ? formatQty(food.qty) : food[field]);
  const draft = { ...(inventoryTableDrafts.get(foodId) || {}) };

  if (normalizedValue === actualValue) {
    delete draft[field];
  } else {
    draft[field] = normalizedValue;
  }

  if (Object.keys(draft).length) {
    inventoryTableDrafts.set(foodId, draft);
  } else {
    inventoryTableDrafts.delete(foodId);
  }
}

function updateInventoryTableRowDraftState(row) {
  if (!row) return;
  row.classList.toggle("is-dirty", hasInventoryTableDraft(row.dataset.id));
  updateBatchSelectionSummary();
}

function ensureInventorySelectOption(select, value) {
  if (!select || !value) return;
  const exists = [...select.options].some((option) => option.value === value);
  if (exists) return;
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  select.prepend(option);
}

function applyInventoryTablePaste(target, text) {
  const fields = ["qty", "expiry", "category", "storage"];
  const startField = target.dataset.tableField;
  const startFieldIndex = fields.indexOf(startField);
  const startRow = target.closest("tr[data-id]");
  if (startFieldIndex < 0 || !startRow) return;

  const rows = Array.from(els.foodList.querySelectorAll("tr[data-id]"));
  const startRowIndex = rows.indexOf(startRow);
  const lines = String(text || "").replace(/\r/g, "").split("\n").filter((line) => line.length);

  lines.forEach((line, rowOffset) => {
    const row = rows[startRowIndex + rowOffset];
    if (!row) return;
    const cells = line.split("\t");
    cells.forEach((cell, colOffset) => {
      const field = fields[startFieldIndex + colOffset];
      if (!field) return;
      const editor = row.querySelector(`[data-table-field="${field}"]`);
      if (!editor) return;
      const nextValue = normalizeInventoryTableValue(field, cell);
      if (editor.tagName === "SELECT") ensureInventorySelectOption(editor, nextValue);
      editor.value = nextValue;
      stageInventoryTableEdit(row.dataset.id, field, nextValue);
    });
    updateInventoryTableRowDraftState(row);
  });
}

function cancelInventoryTableEdits() {
  inventoryTableDrafts.clear();
  renderFoods();
}

function applyInventoryTableEdits() {
  if (!inventoryTableDrafts.size) return;

  const changes = [];
  for (const [foodId, draft] of inventoryTableDrafts.entries()) {
    const food = getFood(foodId);
    if (!food) continue;
    const nextQty = draft.qty != null ? toEditableNumber(draft.qty, NaN) : food.qty;
    if (!Number.isFinite(nextQty) || nextQty < 0) {
      alert(`数量填写不对：${food.name}`);
      return;
    }
    const nextExpiry = draft.expiry != null ? normalizeTemplateDate(draft.expiry) : food.expiry;
    const nextCategory = draft.category != null ? draft.category.trim() : food.category;
    const nextStorage = draft.storage != null ? draft.storage.trim() : food.storage;
    changes.push({
      food,
      nextQty,
      nextExpiry,
      nextCategory: nextCategory || "其他",
      nextStorage: nextStorage || "未设置位置"
    });
  }

  if (!changes.length) return;
  const summary = changes.slice(0, 8).map(({ food, nextQty, nextExpiry, nextCategory, nextStorage }) => (
    `${food.name}: ${formatQty(food.qty)} -> ${formatQty(nextQty)}${food.unit} / ${food.expiry || "无日期"} -> ${nextExpiry || "无日期"} / ${food.category} -> ${nextCategory} / ${food.storage} -> ${nextStorage}`
  )).join("\n");
  const moreText = changes.length > 8 ? `\n...另外还有 ${changes.length - 8} 行` : "";
  if (!confirm(`确认保存这 ${changes.length} 行库存修改吗？\n\n${summary}${moreText}`)) return;

  changes.forEach(({ food, nextQty, nextExpiry, nextCategory, nextStorage }) => {
    food.qty = nextQty;
    food.expiry = nextExpiry;
    food.category = nextCategory;
    food.storage = nextStorage;
    if (nextCategory && !state.settings.categories.includes(nextCategory) && !categories.includes(nextCategory)) {
      state.settings.categories.push(nextCategory);
    }
    if (nextStorage && !state.settings.storages.includes(nextStorage) && !storageLocations.includes(nextStorage)) {
      state.settings.storages.push(nextStorage);
    }
  });

  inventoryTableDrafts.clear();
  saveAndRender();
}

function bindEditableInventoryTableEvents() {
  els.foodList.addEventListener("change", (event) => {
    const editor = event.target.closest("tr[data-id] [data-table-field]");
    if (!editor) return;
    const row = editor.closest("tr[data-id]");
    stageInventoryTableEdit(row.dataset.id, editor.dataset.tableField, editor.value);
    updateInventoryTableRowDraftState(row);
  });

  els.foodList.addEventListener("input", (event) => {
    const editor = event.target.closest('tr[data-id] input[data-table-field="qty"]');
    if (!editor) return;
    const row = editor.closest("tr[data-id]");
    stageInventoryTableEdit(row.dataset.id, editor.dataset.tableField, editor.value);
    updateInventoryTableRowDraftState(row);
  });

  els.foodList.addEventListener("paste", (event) => {
    const editor = event.target.closest("tr[data-id] [data-table-field]");
    if (!editor) return;
    const text = event.clipboardData && event.clipboardData.getData("text/plain");
    if (!text) return;
    if (!text.includes("\t") && !text.includes("\n") && editor.tagName !== "SELECT") return;
    event.preventDefault();
    applyInventoryTablePaste(editor, text);
  });

  els.foodList.addEventListener("click", (event) => {
    const saveButton = event.target.closest(".table-save");
    if (saveButton) {
      applyInventoryTableEdits();
      return;
    }
    const resetButton = event.target.closest(".table-reset");
    if (resetButton) {
      cancelInventoryTableEdits();
    }
  });
}

function cloneMealConsumptions(items) {
  return Array.isArray(items)
    ? items
      .map((item) => ({ ...item, qty: toNumber(item.qty) }))
      .filter((item) => item.qty > 0)
    : [];
}

function mergeMealConsumptions(baseItems, extraItems) {
  const merged = new Map();
  for (const item of [...cloneMealConsumptions(baseItems), ...cloneMealConsumptions(extraItems)]) {
    const key = item.foodId || `${item.foodName}|${item.unit}`;
    if (merged.has(key)) {
      const current = merged.get(key);
      current.qty = Number((current.qty + item.qty).toFixed(2));
    } else {
      merged.set(key, { ...item });
    }
  }
  return [...merged.values()];
}

function mergeMealText(...values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))].join("；");
}

function buildSnackMealName(consumptions, fallbackName = "加餐") {
  const names = [...new Set(cloneMealConsumptions(consumptions).map((item) => item.foodName).filter(Boolean))];
  if (!names.length) return fallbackName || "加餐";
  if (names.length === 1) return names[0];
  if (names.length === 2) return names.join("、");
  return `${names[0]}等${names.length}样`;
}

function saveSnackMeal(mealData, existingMeal = null) {
  const mealDate = mealData.date || toDateInput(new Date());
  const cleanConsumptions = cloneMealConsumptions(mealData.consumptions);
  const mergeTarget = state.meals.find((meal) => (
    meal.date === mealDate
    && meal.slot === "加餐"
    && (!existingMeal || meal.id !== existingMeal.id)
  ));

  if (mergeTarget) {
    mergeTarget.consumptions = mergeMealConsumptions(mergeTarget.consumptions || [], cleanConsumptions);
    mergeTarget.ingredients = mergeMealText(mergeTarget.ingredients, mealData.ingredients);
    mergeTarget.name = buildSnackMealName(mergeTarget.consumptions, mergeTarget.name || mealData.name || "加餐");
    if (existingMeal && existingMeal.id !== mergeTarget.id) {
      state.meals = state.meals.filter((meal) => meal.id !== existingMeal.id);
    }
    return mergeTarget;
  }

  const savedMeal = {
    ...mealData,
    id: existingMeal ? existingMeal.id : (mealData.id || crypto.randomUUID()),
    date: mealDate,
    slot: "加餐",
    name: buildSnackMealName(cleanConsumptions, mealData.name || "加餐"),
    ingredients: String(mealData.ingredients || "").trim(),
    consumptions: cleanConsumptions,
    order: existingMeal ? mealData.order : nextMealOrder(mealDate)
  };

  if (existingMeal) {
    const index = state.meals.findIndex((meal) => meal.id === existingMeal.id);
    if (index >= 0) {
      state.meals[index] = savedMeal;
    } else {
      state.meals.push(savedMeal);
    }
  } else {
    state.meals.push(savedMeal);
  }

  return savedMeal;
}

function addInventorySnackMeal(food, qty, date) {
  const cleanQty = toNumber(qty);
  if (!food || cleanQty <= 0) return false;
  const consumption = {
    foodId: food.id,
    foodName: food.name,
    qty: cleanQty,
    unit: food.unit,
    calories: food.calories,
    category: food.category,
    storage: food.storage
  };
  if (!consumeStock([consumption])) return false;
  const mealDate = date || toDateInput(new Date());
  saveSnackMeal({
    id: crypto.randomUUID(),
    date: mealDate,
    slot: "加餐",
    name: food.name,
    ingredients: "",
    consumptions: [consumption],
    order: nextMealOrder(mealDate)
  });
  plannerStartDate = startOfWeek(new Date(`${mealDate}T00:00:00`));
  return true;
}

function addSelectedTableFoodsAsSnack() {
  const consumptions = getSelectedBatchConsumptions();
  if (!selectedInventoryBatchIds.size) {
    alert("先在表格里勾选要加入加餐的食材。");
    return;
  }
  if (!consumptions.length) {
    alert("批量份数需要大于 0。");
    return;
  }
  const mealDate = els.dailyDate.value || toDateInput(new Date());
  const summaryText = consumptions.map((item) => `${item.foodName} ${formatQty(item.qty)}${item.unit}`).join("\n");
  if (!confirm(`将把以下食材加入 ${mealDate} 的加餐并扣库存：\n\n${summaryText}\n\n确认继续吗？`)) return;
  if (!consumeStock(consumptions)) return;
  const names = consumptions.map((item) => item.foodName);
  saveSnackMeal({
    id: crypto.randomUUID(),
    date: mealDate,
    slot: "加餐",
    name: names.length <= 2 ? names.join("、") : `${names[0]}等${names.length}样`,
    ingredients: "",
    consumptions,
    order: nextMealOrder(mealDate)
  });
  plannerStartDate = startOfWeek(new Date(`${mealDate}T00:00:00`));
  clearInventoryBatchSelection();
  saveAndRender();
}

function copyMeal(mealId) {
  const meal = getMeal(mealId);
  if (!meal) return;
  const consumptions = cloneMealConsumptions(meal.consumptions);
  if (!consumeStock(consumptions)) return;
  if (meal.slot === "加餐") {
    saveSnackMeal({
      ...meal,
      id: crypto.randomUUID(),
      consumptions,
      order: nextMealOrder(meal.date)
    });
    return;
  }
  state.meals.push({
    ...meal,
    id: crypto.randomUUID(),
    consumptions,
    order: nextMealOrder(meal.date)
  });
}

bindEditableInventoryTableEvents();

upgradeSpecialImportAndExportUi();
render();

function normalizeDateText(value) {
  if (!value) return "";
  if (typeof value === "string") {
    const match = value.trim().match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
    if (match) {
      return `${match[1]}-${String(match[2]).padStart(2, "0")}-${String(match[3]).padStart(2, "0")}`;
    }
  }
  const date = value instanceof Date ? new Date(value.getTime()) : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toDateInput(value) {
  return normalizeDateText(value);
}

function snackSlotValue() {
  return mealSlots[mealSlots.length - 1] || "加餐";
}

function isSnackSlot(slot) {
  const text = String(slot || "");
  return text === snackSlotValue() || text.includes("加餐") || text.includes("鍔犻");
}

function normalizeMealSlot(slot) {
  if (mealSlots.includes(slot)) return slot;
  if (isSnackSlot(slot)) return snackSlotValue();
  return mealSlots[2] || mealSlots[0] || "";
}

function normalizeMealConsumptions(items) {
  return Array.isArray(items)
    ? items
      .map((item) => ({
        ...item,
        qty: toNumber(item.qty),
        foodName: String(item.foodName || "").trim(),
        unit: String(item.unit || "").trim()
      }))
      .filter((item) => item.qty > 0 && (item.foodId || item.foodName))
    : [];
}

function normalizeLogs(logs) {
  return Array.isArray(logs)
    ? logs.map((log) => ({
      id: log.id || crypto.randomUUID(),
      date: normalizeDateText(log.date) || toDateInput(new Date()),
      type: log.type || "daily",
      items: normalizeMealConsumptions(log.items)
    }))
    : [];
}

function normalizeMealDraft(meal) {
  const slot = normalizeMealSlot(meal && meal.slot);
  const consumptions = normalizeMealConsumptions(meal && meal.consumptions);
  return {
    id: (meal && meal.id) || crypto.randomUUID(),
    date: normalizeDateText(meal && meal.date) || toDateInput(new Date()),
    slot,
    name: String((meal && meal.name) || "").trim() || (isSnackSlot(slot) ? snackSlotValue() : (mealSlots[2] || mealSlots[0] || "菜单")),
    ingredients: String((meal && meal.ingredients) || "").trim(),
    consumptions,
    order: Number.isFinite(Number(meal && meal.order)) ? Number(meal.order) : mealOrder(slot)
  };
}

function resequenceMealsByDate(meals) {
  const sorted = [...meals].sort((a, b) => {
    const dateCompare = (a.date || "").localeCompare(b.date || "");
    if (dateCompare) return dateCompare;
    return sortMeals(a, b);
  });
  let currentDate = "";
  let currentOrder = 0;
  for (const meal of sorted) {
    if (meal.date !== currentDate) {
      currentDate = meal.date;
      currentOrder = 1;
    } else {
      currentOrder += 1;
    }
    meal.order = currentOrder;
  }
  return sorted;
}

function mergeSameDaySnackMeals(meals) {
  const mergedByDate = new Map();
  const result = [];
  const sorted = [...meals].sort((a, b) => {
    const dateCompare = (a.date || "").localeCompare(b.date || "");
    if (dateCompare) return dateCompare;
    return sortMeals(a, b);
  });

  for (const meal of sorted) {
    if (!isSnackSlot(meal.slot)) {
      result.push({ ...meal, slot: normalizeMealSlot(meal.slot) });
      continue;
    }

    const key = meal.date;
    const current = mergedByDate.get(key);
    if (!current) {
      const nextMeal = {
        ...meal,
        slot: snackSlotValue(),
        name: buildSnackMealName(meal.consumptions, meal.name || snackSlotValue()),
        ingredients: String(meal.ingredients || "").trim()
      };
      mergedByDate.set(key, nextMeal);
      result.push(nextMeal);
      continue;
    }

    current.consumptions = mergeMealConsumptions(current.consumptions, meal.consumptions);
    current.ingredients = mergeMealText(current.ingredients, meal.ingredients);
    current.name = buildSnackMealName(current.consumptions, current.name || meal.name || snackSlotValue());
    current.order = Math.min(toNumber(current.order) || 999, toNumber(meal.order) || 999);
  }

  return resequenceMealsByDate(result);
}

function normalizeMeals(meals) {
  const normalized = Array.isArray(meals) ? meals.map((meal) => normalizeMealDraft(meal)) : [];
  return mergeSameDaySnackMeals(normalized);
}

function normalizeState(saved) {
  return {
    foods: normalizeFoods(saved && saved.foods),
    meals: normalizeMeals(saved && saved.meals),
    logs: normalizeLogs(saved && saved.logs),
    settings: normalizeSettings(saved && saved.settings)
  };
}

function saveAndRender() {
  state.meals = normalizeMeals(state.meals);
  state.logs = normalizeLogs(state.logs);
  pruneInventoryBatchSelection();
  pruneInventoryTableDrafts();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function saveSnackMeal(mealData, existingMeal = null) {
  const mealDate = normalizeDateText(mealData.date) || toDateInput(new Date());
  const cleanConsumptions = normalizeMealConsumptions(mealData.consumptions);
  const mergeTarget = state.meals.find((meal) => (
    meal.date === mealDate
    && isSnackSlot(meal.slot)
    && (!existingMeal || meal.id !== existingMeal.id)
  ));

  if (mergeTarget) {
    mergeTarget.slot = snackSlotValue();
    mergeTarget.consumptions = mergeMealConsumptions(mergeTarget.consumptions || [], cleanConsumptions);
    mergeTarget.ingredients = mergeMealText(mergeTarget.ingredients, mealData.ingredients);
    mergeTarget.name = buildSnackMealName(mergeTarget.consumptions, mergeTarget.name || mealData.name || snackSlotValue());
    if (existingMeal && existingMeal.id !== mergeTarget.id) {
      state.meals = state.meals.filter((meal) => meal.id !== existingMeal.id);
    }
    return mergeTarget;
  }

  const savedMeal = {
    ...mealData,
    id: existingMeal ? existingMeal.id : (mealData.id || crypto.randomUUID()),
    date: mealDate,
    slot: snackSlotValue(),
    name: buildSnackMealName(cleanConsumptions, mealData.name || snackSlotValue()),
    ingredients: String(mealData.ingredients || "").trim(),
    consumptions: cleanConsumptions,
    order: existingMeal ? mealData.order : nextMealOrder(mealDate)
  };

  if (existingMeal) {
    const index = state.meals.findIndex((meal) => meal.id === existingMeal.id);
    if (index >= 0) {
      state.meals[index] = savedMeal;
    } else {
      state.meals.push(savedMeal);
    }
  } else {
    state.meals.push(savedMeal);
  }

  return savedMeal;
}

function addInventorySnackMeal(food, qty, date) {
  const cleanQty = toNumber(qty);
  if (!food || cleanQty <= 0) return false;
  const consumption = {
    foodId: food.id,
    foodName: food.name,
    qty: cleanQty,
    unit: food.unit,
    calories: food.calories,
    category: food.category,
    storage: food.storage
  };
  if (!consumeStock([consumption])) return false;
  const mealDate = normalizeDateText(date) || toDateInput(new Date());
  saveSnackMeal({
    id: crypto.randomUUID(),
    date: mealDate,
    slot: snackSlotValue(),
    name: food.name,
    ingredients: "",
    consumptions: [consumption],
    order: nextMealOrder(mealDate)
  });
  plannerStartDate = startOfWeek(new Date(`${mealDate}T00:00:00`));
  return true;
}

function addSelectedTableFoodsAsSnack() {
  const consumptions = getSelectedBatchConsumptions();
  if (!selectedInventoryBatchIds.size) {
    alert("请先在表格里勾选要加入加餐的食材。");
    return;
  }
  if (!consumptions.length) {
    alert("批量份数需要大于 0。");
    return;
  }

  const mealDate = normalizeDateText(els.dailyDate.value) || toDateInput(new Date());
  const summaryText = consumptions.map((item) => `${item.foodName} ${formatQty(item.qty)}${item.unit}`).join("\n");
  if (!confirm(`将把以下食材加入 ${mealDate} 的加餐并扣库存：\n\n${summaryText}\n\n确认继续吗？`)) return;
  if (!consumeStock(consumptions)) return;

  saveSnackMeal({
    id: crypto.randomUUID(),
    date: mealDate,
    slot: snackSlotValue(),
    name: buildSnackMealName(consumptions, snackSlotValue()),
    ingredients: "",
    consumptions,
    order: nextMealOrder(mealDate)
  });

  plannerStartDate = startOfWeek(new Date(`${mealDate}T00:00:00`));
  clearInventoryBatchSelection();
  saveAndRender();
}

function copyMeal(mealId) {
  const meal = getMeal(mealId);
  if (!meal) return;
  const consumptions = cloneMealConsumptions(meal.consumptions);
  if (!consumeStock(consumptions)) return;
  if (isSnackSlot(meal.slot)) {
    saveSnackMeal({
      ...meal,
      id: crypto.randomUUID(),
      consumptions,
      order: nextMealOrder(meal.date)
    });
    return;
  }
  state.meals.push({
    ...meal,
    id: crypto.randomUUID(),
    consumptions,
    order: nextMealOrder(meal.date)
  });
}

function getMealConsumptionKey(item) {
  return item && (item.foodId || `${item.foodName || ""}|${item.unit || ""}`);
}

function removeMealConsumptionFromPlan(mealId, consumptionKey) {
  const meal = getMeal(mealId);
  if (!meal) return false;
  const items = normalizeMealConsumptions(meal.consumptions);
  const index = items.findIndex((item) => getMealConsumptionKey(item) === consumptionKey);
  if (index < 0) return false;

  const [removed] = items.splice(index, 1);
  restoreStockForMeal({ consumptions: [removed] });
  meal.consumptions = items;

  if (isSnackSlot(meal.slot)) {
    meal.slot = snackSlotValue();
    meal.name = buildSnackMealName(items, meal.name || snackSlotValue());
    if (!items.length) {
      state.meals = state.meals.filter((item) => item.id !== mealId);
      return true;
    }
  }

  return true;
}

function moveMealConsumptionToDate(mealId, consumptionKey, targetDate) {
  const meal = getMeal(mealId);
  const nextDate = normalizeDateText(targetDate);
  if (!meal || !nextDate) return false;
  if (isSnackSlot(meal.slot) && meal.date === nextDate) return false;

  const items = normalizeMealConsumptions(meal.consumptions);
  const index = items.findIndex((item) => getMealConsumptionKey(item) === consumptionKey);
  if (index < 0) return false;

  const [moved] = items.splice(index, 1);
  meal.consumptions = items;

  if (isSnackSlot(meal.slot)) {
    meal.slot = snackSlotValue();
    meal.name = buildSnackMealName(items, meal.name || snackSlotValue());
    if (!items.length) {
      state.meals = state.meals.filter((item) => item.id !== mealId);
    }
  }

  saveSnackMeal({
    id: crypto.randomUUID(),
    date: nextDate,
    slot: snackSlotValue(),
    name: moved.foodName || snackSlotValue(),
    ingredients: "",
    consumptions: [moved],
    order: nextMealOrder(nextDate)
  });

  if (editingMealId === mealId) {
    const latestMeal = getMeal(mealId);
    if (!latestMeal) {
      resetMealForm();
    } else {
      mealConsumptions = cloneMealConsumptions(latestMeal.consumptions);
      els.mealName.value = latestMeal.name || "";
      els.mealIngredients.value = latestMeal.ingredients || "";
      renderMealConsumptionDraft();
    }
  }

  return true;
}

function buildCompactMealFoodsText(meal) {
  const names = [...new Set(normalizeMealConsumptions(meal.consumptions).map((item) => item.foodName).filter(Boolean))];
  return names.join("、");
}

function buildMealHoverText(meal, foodItems) {
  const parts = [`${normalizeMealSlot(meal.slot)} · ${meal.name || "未命名菜单"}`];
  if (meal.ingredients) parts.push(`备注：${meal.ingredients}`);
  if (foodItems.length) {
    parts.push(`食材：${foodItems.map((item) => `${item.foodName || "食材"} ${formatQty(item.qty)}${item.unit || ""}`).join("、")}`);
  }
  return parts.join("\n");
}

function renderPlanner() {
  const days = plannerWeekDays();
  els.plannerGrid.replaceChildren();
  els.plannerGrid.classList.toggle("is-compact", compactPlannerView);
  els.compactPlannerView.classList.toggle("is-active", compactPlannerView);
  const visibleWeek = plannerWeekOnlyDays();
  els.plannerRangeLabel.textContent = `${toDateInput(visibleWeek[0])} - ${toDateInput(visibleWeek[6])}`;

  for (const date of days) {
    const column = document.createElement("article");
    column.className = "day-column";
    const dateText = toDateInput(date);
    const dayCalories = roundCalories(getCaloriesForDate(dateText));
    column.dataset.date = dateText;
    const meals = state.meals
      .filter((meal) => normalizeDateText(meal.date) === dateText)
      .sort(sortMeals);

    column.innerHTML = `
      <div class="day-head">
        <div class="day-title">
          <strong>${dayNames[date.getDay()]}</strong>
          <span>${dateText.slice(5)}</span>
        </div>
        <div class="day-calories">${dayCalories} kcal</div>
      </div>
    `;

    if (!meals.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "未安排";
      column.append(empty);
    }

    for (const meal of meals) {
      const foodItems = normalizeMealConsumptions(meal.consumptions);
      const slotText = normalizeMealSlot(meal.slot);
      const card = document.createElement("div");
      const top = document.createElement("div");
      const slot = document.createElement("span");
      const title = document.createElement("strong");
      const actions = document.createElement("div");
      const edit = document.createElement("button");
      const copy = document.createElement("button");
      const remove = document.createElement("button");
      const fullTitle = buildMealHoverText(meal, foodItems);

      card.className = "meal-card";
      card.classList.toggle("is-compact", compactPlannerView);
      card.classList.toggle("is-editing", editingMealId === meal.id);
      card.draggable = true;
      card.dataset.mealId = meal.id;
      card.dataset.slot = slotText;
      card.title = fullTitle;

      top.className = "meal-card-top";
      slot.className = "meal-slot-pill";
      slot.textContent = slotText;
      slot.title = slotText;
      title.className = "meal-name";
      title.textContent = meal.name || "未命名菜单";
      title.title = fullTitle;
      top.append(slot, title);

      if (!compactPlannerView && String(meal.ingredients || "").trim()) {
        const note = document.createElement("p");
        note.className = "meal-inline-note";
        note.textContent = meal.ingredients.trim();
        note.title = meal.ingredients.trim();
        card.append(note);
      }

      if (foodItems.length) {
        if (compactPlannerView) {
          const compactFoods = document.createElement("p");
          compactFoods.className = "meal-inline-note";
          compactFoods.textContent = buildCompactMealFoodsText(meal);
          compactFoods.title = compactFoods.textContent;
          if (compactFoods.textContent) card.append(compactFoods);
        } else {
          const foodList = document.createElement("div");
          foodList.className = "meal-food-tags";
          for (const item of foodItems) {
            const foodRow = document.createElement("div");
            const name = document.createElement("span");
            const qty = document.createElement("b");
            const foodRemove = document.createElement("button");

            foodRow.className = "meal-food-tag";
            foodRow.draggable = true;
            foodRow.dataset.mealId = meal.id;
            foodRow.dataset.mealFoodKey = getMealConsumptionKey(item);
            foodRow.title = `${item.foodName || "食材"} ${formatQty(item.qty)}${item.unit || ""}`;
            name.textContent = item.foodName || "食材";
            name.title = item.foodName || "食材";
            qty.textContent = `${formatQty(item.qty)}${item.unit || ""}`;
            qty.title = qty.textContent;

            foodRemove.type = "button";
            foodRemove.className = "meal-food-remove";
            foodRemove.dataset.removeMealFoodId = meal.id;
            foodRemove.dataset.removeMealFoodKey = getMealConsumptionKey(item);
            foodRemove.title = "移除这个食材";
            foodRemove.setAttribute("aria-label", `移除${item.foodName || "食材"}`);
            foodRemove.textContent = "×";

            foodRow.append(name, qty, foodRemove);
            foodList.append(foodRow);
          }
          card.append(foodList);
        }
      }

      actions.className = "meal-card-actions";
      edit.type = "button";
      edit.dataset.editMealId = meal.id;
      edit.title = "编辑";
      edit.setAttribute("aria-label", "编辑");
      edit.textContent = "✎";
      copy.type = "button";
      copy.dataset.copyMealId = meal.id;
      copy.title = "复制到同一天";
      copy.setAttribute("aria-label", "复制到同一天");
      copy.textContent = "⧉";
      remove.type = "button";
      remove.dataset.mealId = meal.id;
      remove.title = "删除";
      remove.setAttribute("aria-label", "删除");
      remove.textContent = "×";
      actions.append(edit, copy, remove);

      if (!compactPlannerView) top.append(actions);
      card.prepend(top);
      column.append(card);
    }

    els.plannerGrid.append(column);
  }

  scrollPlannerToCurrentRange();
}

if (!window.__mealFoodRemoveBound) {
  els.plannerGrid.addEventListener("click", (event) => {
    const removeFoodButton = event.target.closest("button[data-remove-meal-food-id]");
    if (!removeFoodButton) return;
    event.stopPropagation();
    const mealId = removeFoodButton.dataset.removeMealFoodId;
    const consumptionKey = removeFoodButton.dataset.removeMealFoodKey;
    if (!mealId || !consumptionKey) return;
    if (!removeMealConsumptionFromPlan(mealId, consumptionKey)) return;

    if (editingMealId === mealId) {
      const latestMeal = getMeal(mealId);
      if (!latestMeal) {
        resetMealForm();
      } else {
        mealConsumptions = cloneMealConsumptions(latestMeal.consumptions);
        els.mealName.value = latestMeal.name || "";
        els.mealIngredients.value = latestMeal.ingredients || "";
        renderMealConsumptionDraft();
      }
    }

    saveAndRender();
  });
  window.__mealFoodRemoveBound = true;
}

function hoverTextForElement(element) {
  if (!element) return "";
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
    return String(element.value || element.placeholder || "").trim();
  }
  if (element instanceof HTMLSelectElement) {
    return String(element.selectedOptions[0]?.textContent || element.value || "").trim();
  }
  return String(element.textContent || "").replace(/\s+/g, " ").trim();
}

function getLanguage() {
  return state && state.settings && state.settings.language === "en" ? "en" : "zh";
}

function tr(key) {
  const entry = UI_TEXT[key];
  if (!entry) return key;
  return entry[getLanguage() === "en" ? 1 : 0];
}

function buildLanguageMaps(source) {
  const map = new Map();
  for (const [key, entry] of Object.entries(source)) {
    map.set(entry[0], key);
    map.set(entry[1], key);
  }
  return map;
}

function translateEntry(source, key) {
  const entry = source[key];
  return entry ? entry[getLanguage() === "en" ? 1 : 0] : "";
}

function applyLanguage() {
  const lang = getLanguage();
  const textMap = buildLanguageMaps(UI_TEXT);
  const attrMap = buildLanguageMaps({ ...UI_TEXT, ...UI_ATTR_TEXT });
  const translatedText = (value) => {
    const trimmed = String(value || "").trim();
    const key = textMap.get(trimmed);
    return key ? UI_TEXT[key][lang === "en" ? 1 : 0] : "";
  };
  const translatedAttr = (value) => {
    const trimmed = String(value || "").trim();
    const key = attrMap.get(trimmed);
    if (!key) return "";
    return UI_TEXT[key]
      ? UI_TEXT[key][lang === "en" ? 1 : 0]
      : UI_ATTR_TEXT[key][lang === "en" ? 1 : 0];
  };

  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  document.title = tr("appTitle");
  if (els.languageSelect) els.languageSelect.value = lang;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, textarea")) continue;
    const nextText = translatedText(node.nodeValue);
    if (!nextText) continue;
    const leading = node.nodeValue.match(/^\s*/)[0];
    const trailing = node.nodeValue.match(/\s*$/)[0];
    nodes.push([node, `${leading}${nextText}${trailing}`]);
  }
  for (const [node, value] of nodes) {
    node.nodeValue = value;
  }

  for (const element of document.querySelectorAll("[placeholder], [title], [aria-label]")) {
    for (const attr of ["placeholder", "title", "aria-label"]) {
      if (!element.hasAttribute(attr)) continue;
      const nextValue = translatedAttr(element.getAttribute(attr));
      if (nextValue) element.setAttribute(attr, nextValue);
    }
  }
}

function isElementClipped(element) {
  if (!element) return false;
  return element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 1;
}

function applyOverflowTitles() {
  const selectors = [
    ".meal-card",
    ".meal-name",
    ".meal-inline-note",
    ".meal-food-tag",
    ".meal-food-tag span",
    ".meal-food-tag b",
    ".item-title strong",
    ".meta",
    ".record-item strong",
    ".record-item p",
    ".rank-copy strong",
    ".inventory-table td",
    ".inventory-table input",
    ".inventory-table select",
    ".table-edit-input",
    ".table-edit-select",
    ".linked-item span",
    ".suggestion-card strong",
    ".suggestion-card p"
  ].join(",");

  requestAnimationFrame(() => {
    for (const element of document.querySelectorAll(selectors)) {
      const existingTitle = element.getAttribute("title");
      if (existingTitle && !element.matches("input, select")) continue;
      const text = hoverTextForElement(element);
      if (!text) continue;
      const alwaysUseful = element.matches("input, select, .meal-card, .meal-food-tag");
      if (alwaysUseful || isElementClipped(element)) {
        element.title = text;
      }
    }
  });
}

state.meals = normalizeMeals(state.meals);
state.logs = normalizeLogs(state.logs);
localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
render();
