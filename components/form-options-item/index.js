// components/listItem/list-item.js
let globalData = getApp().globalData;

Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // item的高度
        height: {
            type: String,
            value: '110rpx'
        },
        // 是否有下边框（不占item高度）
        hasBottomBorder: {
            type: Boolean,
            value: false
        },
        // 是否有上边框（不占item高度）
        hasTopBorder: {
            type: Boolean,
            value: false
        },
        // 左边的文字描述
        tabName: {
            type: String
        },
        // item的marginTop
        marginTop: {
            type: String,
            value: '0rpx'
        },
        // 右边是否是计数器
        hasCounter: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        resDomain: globalData.resDomain,
        resVersion: globalData.resVersion,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        
    }
})
