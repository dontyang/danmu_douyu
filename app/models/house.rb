require "selenium-webdriver"

# use chrome
driver = Selenium::WebDriver.for :chrome

driver.manage.timeouts.implicit_wait = 3

driver.navigate.to "http://www.kaipan01.cn/xhyf/2017/buyhouse0625bymatrix/index.shtml"

# 登录按钮　
new_login = driver.find_element css: 'body > div.warp > div > div.InCon > div.LoginBox > a'
new_login.click

#输入身份证
id_card = driver.find_element css: '#tbuseridcard1'
id_card.send_keys '420107199006244110'
#输入手机
phone = driver.find_element css: '#tbuserphone1'
phone.send_keys '13545025787'
#输入密码
password = driver.find_element css: '#tbuserpwd1'
password.send_keys '244110'

create_login = driver.find_element css: 'body > div.winpop.loginpop > div > div.popbox > a'
create_login.click

sleep 10