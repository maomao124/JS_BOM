/**
 * Project name(项目名称)：JS_BOM
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/18
 * Time(创建时间)： 20:15
 * Version(版本): 1.0
 * Description(描述)： 浏览器对象模型（Browser Object Model，简称 BOM
 */

//
// 属性	描述
// closed	返回窗口是否已被关闭
// defaultStatus	设置或返回窗口状态栏中的默认文本
// document	对 Document 对象的只读引用
// frames	返回窗口中所有已经命名的框架集合，集合由 Window 对象组成，每个 Window 对象在窗口中含有一个 <frame> 或 <iframe> 标签
// history	对 History 对象的只读引用，该对象中包含了用户在浏览器中访问过的 URL
// innerHeight	返回浏览器窗口的高度，不包含工具栏与滚动条
// innerWidth	返回浏览器窗口的宽度，不包含工具栏与滚动条
// localStorage	在浏览器中以键值对的形式保存某些数据，保存的数据没有过期时间，会永久保存在浏览器中，直至手动删除
// length	返回当前窗口中 <iframe> 框架的数量
// location	引用窗口或框架的 Location 对象，该对象中包含当前 URL 的有关信息
// name	设置或返回窗口的名称
// navigator	对 Navigator 对象的只读引用，该对象中包含当前浏览器的有关信息
// opener	返回对创建此窗口的 window 对象的引用
// outerHeight	返回浏览器窗口的完整高度，包含工具栏与滚动条
// outerWidth	返回浏览器窗口的完整宽度，包含工具栏与滚动条
// pageXOffset	设置或返回当前页面相对于浏览器窗口左上角沿水平方向滚动的距离
// pageYOffset	设置或返回当前页面相对于浏览器窗口左上角沿垂直方向滚动的距离
// parent	返回父窗口
// screen	对 Screen 对象的只读引用，该对象中包含计算机屏幕的相关信息
// screenLeft	返回浏览器窗口相对于计算机屏幕的 X 坐标
// screenTop	返回浏览器窗口相对于计算机屏幕的 Y 坐标
// screenX	返回浏览器窗口相对于计算机屏幕的 X 坐标
// sessionStorage	在浏览器中以键值对的形式存储一些数据，数据会在关闭浏览器窗口或标签页之后删除
// screenY	返回浏览器窗口相对于计算机屏幕的 Y 坐标
// self	返回对 window 对象的引用
// status	设置窗口状态栏的文本
// top	返回最顶层的父窗口


window.defaultStatus = "123"
document.write(window.defaultStatus + "<br>");
document.write(window.innerHeight + "<br>");
document.write(window.innerWidth + "<br>");
document.write(window.length + "<br>");
document.write(window.location + "<br>");
document.write(window.opener + "<br>");
document.write(window.outerHeight + "<br>");
document.write(window.outerWidth + "<br>");
document.write(window.parent + "<br>");
document.write(window.screenLeft + "<br>");
document.write(window.screenTop + "<br>");
document.write(window.screenX + "<br>");
document.write(window.screenY + "<br>");