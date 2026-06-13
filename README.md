# Food Manager / 食物管家

一个纯浏览器运行的食材库存和每日菜单管理工具。它可以记录库存批次、有效期、贮藏位置、每日菜单、库存消耗、卡路里估算和简单的饮食统计。

## 功能

- 录入库存食材，支持分类、贮藏位置、有效期、图片和热量。
- 查看库存卡片或表格，表格模式可以批量修改和批量加入今日加餐。
- 安排每日菜单，菜单和库存消耗自动关联。
- 支持拖动菜单和单个食材到其他日期。
- 统计消耗记录、分类汇总、每日卡路里和词云。
- 支持导入/导出数据，方便备份和迁移。
- 支持中文和英文界面切换。
- 可选接入 OpenAI API，根据库存推荐菜谱。

## 使用方式

直接打开 `index.html` 即可使用，也可以部署到 GitHub Pages。

如果只想发给别人一个文件，可以使用 `food-manager-single.html`，它已经把 CSS 和 JS 打包进同一个 HTML 文件。

## 数据说明

所有数据默认只保存在当前浏览器的 `localStorage` 中，不会自动上传到服务器。

因此：

- 换浏览器、换电脑、换网址后，需要先导出数据，再导入。
- 从本地 `file://` 页面切换到 GitHub Pages 后，也需要重新导入数据。
- 不要把自己的导出数据文件提交到公开仓库。
- 不要把真实的 OpenAI API Key 写进源码。

## GitHub Pages 部署

1. 把这个目录上传到 GitHub 仓库。
2. 进入仓库的 `Settings`。
3. 打开 `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub 生成访问链接。

## Recommended Repository Structure

```text
food-manager/
  index.html
  styles.css
  app.js
  food-manager-single.html
  README.md
  .gitignore
```

