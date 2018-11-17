Page({
    data: {
        maxCount: 30,
        scaleList: [],
        flagLeft: '',
        joinedNum: 20,
        joinedLen: '',
        animationData: {},
        animationCheck: {},
        testNum: 0
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        var that = this;
        var { maxCount, scaleList, joinedNum, joinedLen, testNum } = that.data;
        for (let i = 0; i < (maxCount / 5 + 1); i++) {
            scaleList.push({
                scale: 5 * i === 20 ? '成行' : 5 * i,
                left: i === (maxCount / 5) ? '538rpx' : `${i * (540 * 5 / maxCount)}rpx`,
                numLeft: `${i * (540 * 5 / maxCount) - 20}rpx`,
            });
            //成团标志位置
            if (5 * i === 20) {
                console.log(`${i * (540 * 5 / maxCount) - 20}rpx`);
                that.setData({
                    flagLeft: `${i * (540 * 5 / maxCount) - 20}rpx`
                })
            }
        }


        //已拼团进度条长度
        joinedLen = `${(joinedNum / maxCount) * 540}rpx`;

        //进度条
        var animation = wx.createAnimation({
            duration: 2000 * (joinedNum / maxCount),
            timingFunction: 'ease-in-out'
        });
        animation.width(joinedLen).step();
        //flag
        var animationCheck = wx.createAnimation({
            duration: 350,
            timingFunction: 'ease',
            // delay: 2000 * (joinedNum / maxCount)
        });
        animationCheck.scale(1.4).step().scale(1).step().scale(1.1).step().scale(1).step();

        this.setData({
            animationData: animation.export(),
        });

        setTimeout(() => {
            this.setData({
                animationCheck: animationCheck.export(),
            });
        }, 2000 * (joinedNum / maxCount));

        that.setData({
            scaleList,
            joinedLen
        })


        var s = setInterval(() => {
            if (testNum < joinedNum) {
                ++testNum;
            } else {
                clearInterval(s);
                return
            };

            this.setData({
                testNum: testNum
            })
        }, 2000 / maxCount)
    },
    test: function(e) {
        var that = this;
        var num = e.target.dataset.num;
        that.setData({
            joinedNum: num
        }, () => {
            var { maxCount, scaleList, joinedNum, joinedLen } = that.data;
            for (let i = 0; i < (maxCount / 5 + 1); i++) {
                scaleList.push({
                    scale: 5 * i === 20 ? '成行' : 5 * i,
                    left: i === (maxCount / 5) ? '538rpx' : `${i * (540 * 5 / maxCount)}rpx`,
                    numLeft: `${i * (540 * 5 / maxCount) - 20}rpx`,
                });
                //成团标志位置
                if (5 * i === 20) {
                    console.log('test::::', `${i * (540 * 5 / maxCount) - 20}rpx`);
                    that.setData({
                        flagLeft: `${i * (540 * 5 / maxCount) - 20}rpx`
                    })
                }
            }
            //已拼团进度条长度
            joinedLen = `${(joinedNum / maxCount) * 540}rpx`;
            var animation = wx.createAnimation({
                duration: 2000 * (joinedNum / maxCount),
                timingFunction: 'ease-in-out'
            });
            animation.width(joinedLen).step();
            this.setData({
                animationData: animation.export()
            });
            that.setData({
                scaleList,
                joinedLen
            })
        })
    }
})