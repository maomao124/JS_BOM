/**
 * Project name(项目名称)：JS_BOM
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/18
 * Time(创建时间)： 20:23
 * Version(版本): 1.0
 * Description(描述)： 无
 */

//
// window 对象中的方法
//
// 方法	            描述
// alert()	在浏览器窗口中弹出一个提示框，提示框中有一个确认按钮
// atob()	解码一个 base-64 编码的字符串
// btoa()	创建一个 base-64 编码的字符串
// blur()	把键盘焦点从顶层窗口移开
// clearInterval()	取消由 setInterval() 方法设置的定时器
// clearTimeout()	取消由 setTimeout() 方法设置的定时器
// close()	关闭某个浏览器窗口
// confirm()	在浏览器中弹出一个对话框，对话框带有一个确认按钮和一个取消按钮
// createPopup()	创建一个弹出窗口，注意：只有 IE 浏览器支持该方法
// focus()	使一个窗口获得焦点
// getSelection()	返回一个 Selection 对象，对象中包含用户选中的文本或光标当前的位置
// getComputedStyle()	获取指定元素的 CSS 样式
// matchMedia()	返回一个 MediaQueryList 对象，表示指定的媒体查询解析后的结果
// moveBy()	将浏览器窗口移动指定的像素
// moveTo()	将浏览器窗口移动到一个指定的坐标
// open()	打开一个新的浏览器窗口或查找一个已命名的窗口
// print()	打印当前窗口的内容
// prompt()	显示一个可供用户输入的对话框
// resizeBy()	按照指定的像素调整窗口的大小，即将窗口的尺寸增加或减少指定的像素
// resizeTo()	将窗口的大小调整到指定的宽度和高度
// scroll()	已废弃。您可以使用 scrollTo() 方法来替代
// scrollBy()	将窗口的内容滚动指定的像素
// scrollTo()	将窗口的内容滚动到指定的坐标
// setInterval()	创建一个定时器，按照指定的时长（以毫秒计）来不断调用指定的函数或表达式
// setTimeout()	创建一个定时器，在经过指定的时长（以毫秒计）后调用指定函数或表达式，只执行一次
// stop()	停止页面载入
// postMessage()	安全地实现跨源通信


// window.close();
// window.open();


// var ptag = document.getElementById('show_tag');
// var str;
//
// function myBtoa()
// {
//     str = btoa("JavaScript");
//     ptag.innerHTML = str;
// }
//
// function myAtob()
// {
//     ptag.innerHTML = typeof str;
//     if (str == undefined)
//     {
//         ptag.innerHTML = "请先点击 btoa() 按钮";
//         return;
//     }
//     ptag.innerHTML = atob(str);
// }
//
// function myAlert()
// {
//     alert("这是一个提示框！");
// }
//
// function myConfirm()
// {
//     var x;
//     var r = confirm("按下按钮!");
//     if (r == true)
//     {
//         x = "你按下了\"确定\"按钮!";
//     }
//     else
//     {
//         x = "你按下了\"取消\"按钮!";
//     }
//     ptag.innerHTML = x;
// }
//
// var myWin;
//
// function myOpen()
// {
//     if (myWin == undefined || (myWin != undefined && myWin.closed == true))
//     {
//         myWin = window.open('', '', 'width=200,height=100');
//     }
//     else
//     {
//         return;
//     }
// }
//
// function myMoveBy()
// {
//     if (myWin == undefined || myWin.closed == true)
//     {
//         myOpen();
//     }
//     myWin.moveBy(200, 200);
// }
//
// function myMoveTo()
// {
//     if (myWin == undefined || myWin.closed == true)
//     {
//         myOpen();
//     }
//     myWin.moveTo(0, 0);
// }
//
// function myPrint()
// {
//     print();
// }
//
// function myPrompt()
// {
//     var name = prompt("请输入你的名字。")
//     if (name != null && name != "")
//     {
//         ptag.innerHTML = "你好 " + name + "! 今天感觉如何?";
//     }
//     else
//     {
//         ptag.innerHTML = "你没有输入任何内容";
//     }
// }
//
// function myResizeBy()
// {
//     if (myWin == undefined || myWin.closed == true)
//     {
//         myOpen();
//     }
//     myWin.resizeBy(100, 100);
// }
//
// function myClose()
// {
//     myWin.close();
// }