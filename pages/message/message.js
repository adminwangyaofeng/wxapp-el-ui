const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '全局消息',
      back: true
    },
    message: {
      typelist: ['success', 'warning', 'danger'],
      typelisti: 0,
      cont: `<div>现在时间是: </div><div>${new Date()}</div>`,
      type: 'success',
      icon: true,
      time: 3000
    }
  },

  onReady() {
    this.messgae = this.selectComponent(".messgae");
  },

  onPicker (e) {
    this.setData({
      'message.typelisti': e.detail.value
    })
  },

  onMessageShow() {
    var that = this;
    that.setData({
      'message.ing': true
    })
    that.messgae.onMessage({
      title: '通知:',
      cont: that.data.message.cont,
      time: that.data.message.time,
      icon: that.data.message.icon,
      type: that.data.message.typelist[that.data.message.typelisti],
      succeed() {
        wx.showToast({
          title: '成功',
          icon: 'none'
        })
        that.setData({
          'message.ing': false
        })
      }
    })
  }
})