/*
 * @Author: TonyJiangWJ
 * @Date: 2020-04-27 23:41:15
 * @Last Modified by: TonyJiangWJ
 * @Last Modified time: 2020-04-27 23:51:48
 * @Description: 测试锁屏功能
 */

let singletoneRequire = require('../lib/SingletonRequirer.js')(runtime, this)
let automator = singletoneRequire('Automator')
automator.lockScreen()