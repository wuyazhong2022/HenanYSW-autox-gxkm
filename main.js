console.show();
launchApp("河南药师网");
sleep(5000);
className("android.widget.TextView").text("公需科目").findOne().click()

sleep(2000);

 
var studyScore = id("tvStudyScore").findOne().text();

    
if (parseInt(studyScore) > 8) {

    console.log("学时已达标");     // break;

        
} else {
    console.log("学时未达标");
    enterStudy()
}

function enterStudy() {

    while (true) {

            
        var startBtns = text("开始学习").find();

            
        for (var i = 0; i < startBtns.length; i++) {

                
            startBtns[i].click();

                
            console.log("进入视频播放学习");


            // 获取TextView的text属性列表判断多个视频

            getText()

                 sleep(3000);

                
        }

           
    }

}

// 获取TextView的text属性列表判断多个视频

function getText() {
    sleep(3000);
    var textViewList = getTextViews();

    toastLog("获取到的TextView的text属性列表：" + textViewList);

    // 判断TextView的数量，执行不同的操作

    if (textViewList.length > 3) { // 如果TextView数量大于2，则有多个视频

        toastLog("检测到多个视频，执行多个视频播放检测函数");

        // 执行多个视频播放检测函数
        isPlayingFinished多个视频()


        

    } else { // 如果TextView数量等于2或小于1，则只有一个视频

        toastLog("检测到单个视频，执行单个视频播放检测函数");

        // 执行单个视频播放检测函数
        isPlayingFinished()
        // …
        sleep(2000);
        className("android.widget.TextView").text("返回课程").findOne().click()
        console.log("返回课程"); 
        sleep(2000);

    }
}


// 封装函数，遍历控件获取子控件的text属性

function getTextViews() {

    var textViewList = []; // 存储获取到的TextView的text属性

    var linearLayouts = className("android.widget.LinearLayout").find(); // 获取所有LinearLayout控件

    for (var i = 0; i < linearLayouts.length; i++) {

        var childTextViews = linearLayouts[i].find(className("android.widget.TextView")); // 获取当前LinearLayout控件下的所有TextView控件

        for (var j = 0; j < childTextViews.length; j++) {

            var text = childTextViews[j].text(); // 获取TextView的text属性

            if (text != "") { // 如果text属性不为空，则加入列表

                textViewList.push(text);

            }

        }

    }

    return textViewList; // 返回获取到的TextView的text属性列表

}




// 判断播放是否完成的函数
function isPlayingFinished() {
    // 增加一个线程验证弹窗
    threads.start(function() {
        // 检测有控件text("确认")
        while (true) {
            var confirmBtn = text("确认").findOne(1000);
            if (confirmBtn) {
                // 如果出现就点击确认
                confirmBtn.click();
                toastLog("点掉了弹窗")
                //break; // 跳出循环
            }
        }
    });
    // 增加一个线程偏移点击视频窗口获取播放时间
    threads.start(function() {
        while (true) {

            //查找控件
            var widget = text("返回课程").findOne();
            if (widget) {
                // 获取控件的坐标
                var bounds = widget.bounds();
                var x = bounds.left + bounds.width() / 2;
                var y = bounds.top + bounds.height() / 2 - 150;
                // 点击控件坐标偏左偏上的位置
                sleep(5000);
                longClick(x, y);
                sleep(1000);
                log(x, y);
                // 输出点击了
                console.log("点击了视频播放窗口");
                // sleep(1000);
                //break; // 跳出循环
            }
        }
    });
    //比对播放时间是否结束的函数
    checkPlayStatus()

    //break; // 跳出循环

}

// 定义一个函数，用于比对播放页面是否播放完成、两个控件的文本时间是否一样
function checkPlayStatus() {

    while (true) {

        var totalTime = id("tvTotalTime").findOne().text();
        var playTime = id("tvPlayTime").findOne().text();
        if (playTime == totalTime) {
            sleep(500);
            console.log("播放完成");
            sleep(500);
            console.log("调用检测是否还有视频没有播放");
            break;
        } else {

            sleep(500);
            console.log("没有播放完成");
            sleep(3000);
            //back()
            //break; // 跳出循环

        }

    }



}








function isPlayingFinished多个视频() {
var nonEmptyTextViewCount = 0; // 存储不为空的TextView数量

var targetTextViewIndex = 2; // 目标TextView的索引，从0开始

var textViewList = []; // 存储获取到的TextView的text属性

var linearLayouts = className("android.widget.LinearLayout").find(); // 获取所有LinearLayout控件

for (var i = 0; i < linearLayouts.length; i++) {

    var childTextViews = linearLayouts[i].find(className("android.widget.TextView")); // 获取当前LinearLayout控件下的所有TextView控件

    for (var j = 0; j < childTextViews.length; j++) {

        var text = childTextViews[j].text(); // 获取TextView的text属性

        if (text != "") { // 如果text属性不为空，则加入列表

            textViewList.push(text);

            nonEmptyTextViewCount++;

        }

        if (nonEmptyTextViewCount > targetTextViewIndex) { // 如果已经找到目标TextView，则点击进去

            var bounds = childTextViews[j].bounds();

            click(bounds.centerX(), bounds.centerY());

            console.log("进入第" + (targetTextViewIndex + 1) + "个TextView");
          
          sleep(2000);
          isPlayingFinished()  
            toastLog("0")

        }
toastLog("1")


    }
toastLog("2")
}
console.log("已完成所有TextView的遍历");
//isPlayingFinished()

}

//判断播放是否完成的函数
function isPlayingFinished22() {
    // 增加一个线程验证弹窗
    threads.start(function() {
        // 检测有控件text("确认")
        while (true) {
            var confirmBtn = text("确认").findOne(1000);
            if (confirmBtn) {
                // 如果出现就点击确认
                confirmBtn.click();
                toastLog("点掉了弹窗")
               // break; // 跳出循环
            }
        }
    });
    // 增加一个线程偏移点击视频窗口获取播放时间
    threads.start(function() {
        while (true) {

            //查找控件
            var widget = text("返回课程").findOne();
            if (widget) {
                // 获取控件的坐标
                var bounds = widget.bounds();
                var x = bounds.left + bounds.width() / 2;
                var y = bounds.top + bounds.height() / 2 - 150;
                // 点击控件坐标偏左偏上的位置
                sleep(5000);
                longClick(x, y);
                sleep(1000);
                log(x, y);
                // 输出点击了
                console.log("点击了视频播放窗口");
                // sleep(1000);
                //break; // 跳出循环
            }
        }
    });
    //比对播放时间是否结束的函数
    checkPlayStatus22()

    //break; // 跳出循环

}

// 定义一个函数，用于比对播放页面是否播放完成、两个控件的文本时间是否一样
function checkPlayStatus22() {

    while (true) {

        var totalTime = id("tvTotalTime").findOne().text();
        var playTime = id("tvPlayTime").findOne().text();
        if (playTime == totalTime) {
            sleep(500);
            console.log("播放完成结束循环");
            sleep(500);
            break;
        } else {

            sleep(500);
            console.log("没有播放完成");
            sleep(3000);
            //back()
            //break; // 跳出循环

        }

    }



}


