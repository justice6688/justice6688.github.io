不要把个人需要的文件/图片放在主题source文件夹里，因为在升级主题的过程中，可能会把文件覆盖删除了。
在Hexo根目录的source文件夹里，创建一个文件夹来放置个人文件/图片。文件夹不能命名为css、js和img
引用文件直接为 /文件夹名称/文件名

# Inject 自定义添加外链
# 如想添加额外的js/css/meta等等东西，可以在Inject里添加，支持添加到head(</body>标籤之前)和bottom(</html>标籤之前)。请注意：以标準的html格式添加内容
# 留意: 如果你的网站根目录不是’/‘,使用本地图片时，需加上你的根目录。
# 例如：网站是 https://yoursite.com/blog,引用css/xx.css，则设置为<link rel="stylesheet" href="/blog/css/xx.css">
inject:
  head: # - <link rel="stylesheet" href="/xxx.css">
    - <link rel="stylesheet" href="/myresource/mycss/mycss.css">
  bottom:
    # - <script src="xxxx"></script>


inject:
  head:
    # - <link rel="stylesheet" href="/xxx.css">
  bottom:
    - <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/GitHub用户名/GitHub用户名.github.io/css/Lete.css">
    - <script src="https://cdn.jsdelivr.net/gh/GitHub用户名/GitHub用户名.github.io/js/Lete.js"></script>
    # - <script src="xxxx"></script>


文章默认显示图片： themes\butterfly\scripts\filters\random_cover.js