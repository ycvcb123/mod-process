## 高度灵活可配置的小程序进度条组件

用法:

```html
<mod-process 
    maxCount="{{maxCount}}" 
    joinedNum="{{joinedNum}}" 
    requireNum="{{requireNum}}" 
    processLen="{{processLen}}" 
    showScale="{{showScale}}" 
    showScaleVal="{{showScaleVal}}" 
    processItemLen="{{processItemLen}}"
    backgroundColor="{{backgroundColor}}" 
    activeColor="{{activeColor}}"
    showSuccess="{{showSuccess}}"
    activeInfo="{{activeInfo}}" 
    requireInfo="{{requireInfo}}">
</mod-process>
```

参数说明：

```javascript
{
    maxCount: '进度条最大数值',
    joinedNum: '进度条已完成数值',
    requireNum: '达成目标规定数值',
    processLen: '进度条长度',
    showScale: '是否显示刻度尺',
     showScaleVal: '是否显示刻度值',
    processItemLen: '单位刻度值',
    backgroundColor: '进度条底色',
    activeColor: '进度条动态变化颜色',
    showSuccess: '是否显示达成规定目标图标',
    activeInfo: '进度变化信息',
    requireInfo: '规定数量文字信息',
}
```

组件核心功能:

1. 任意设置进度条长度，样式呈现上有极大灵活性。
2. 任意设置刻度值，对不能整除的一些刻度和关键性位置做了特别处理。

详细逻辑见 示例demo:
## <span style="color: #f00">录制gif比较卡顿，真实效果如丝般顺滑</span>
<image style="width: 400px;" src="./process.gif"/>
