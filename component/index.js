module.exports = {
  util: {
    that: null,

    $(name_) {
      var $self = this;
      var $res = new Object({
        self: $self.that
      });
      return new Promise(function(resolve, reject) {
        wx.createSelectorQuery().in($self.that).selectAll(String(name_)).boundingClientRect(function(e) {
          e.forEach(function(i, index) {
            if (typeof name_ === 'string' && name_.split(',').length == 1 && e.length > 1) {
              $res[`${name_}${index}`] = i;
              $res.length = e.length;
            } else if (typeof name_ === 'string' && name_.split(',').length == e.length) {
              $res[name_.split(',').reverse()[index]] = i;
              $res.length = e.length;
            } else {
              $res[(e.length > 1 ? name_[index] : name_)] = i;
              $res.length = e.length;
            }
          })
          resolve($res);
        }).exec();
      })
    },

    $S(name_, callback) {
      var $self = this;
      var $res = new Object({
        self: $self.that
      });
      wx.createSelectorQuery().in($self.that).selectAll(String(name_)).boundingClientRect(function (e) {
        e.forEach(function (i, index) {
          if (typeof name_ === 'string' && name_.split(',').length == 1 && e.length > 1) {
            $res[`${name_}${index}`] = i;
            $res.length = e.length;
          } else if (typeof name_ === 'string' && name_.split(',').length == e.length) {
            $res[name_.split(',').reverse()[index]] = i;
            $res.length = e.length;
          } else {
            $res[(e.length > 1 ? name_[index] : name_)] = i;
            $res.length = e.length;
          }
        })
        callback($res);
      }).exec();
    },

    in (that_) {
      this.that = that_;
      return this.that ? true : false
    },
  },
}