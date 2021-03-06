const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      stickie: true,
      title: '导航一',
      style: {
        background: 'linear-gradient(45deg, #0b9ca7, #18b6c1)',
        textColor: '#FFF'
      },
      slot: {
          l: true,
          c: false,
          r: false
      },
      back: true
    }
  },

  onToast () {
    wx.showToast(
      {
        title: '弹窗成功'
      }
    )
  },
})