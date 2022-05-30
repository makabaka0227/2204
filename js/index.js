window.onload=(() => {
    let topNavLeft2 = document.querySelector('.topNavLeft2')
    console.log(topNavLeft2);
    let code = document.querySelector('.app')
    topNavLeft2.onmouseenter = function () {
        code.style.display = 'block'
    }
    topNavLeft2.onmouseout = function () {
        code.style.display = 'none'
    }
    //顶部右导航
    //个人中心
    let mine = document.querySelector('.mine');
    let mine_con = document.querySelector('.mine_con')
    //顶部导航栏右侧 客户服务
    let sever = document.querySelector('.sever')
    let sever_con = document.querySelector('.sever_con')
    //顶部导航栏右侧 充值中心
    let charge = document.querySelector('.charge')
    let charge_con = document.querySelector('.charge_con')
    
    //顶部导航栏右侧 消费者权益
    let customer = document.querySelector('.customer')
    let customer_con = document.querySelector('.customer_con')
    //顶部导航栏右侧 更多
    let more = document.querySelector('.more')
    let more_con = document.querySelector('.more_con')
    const option = (optionName,optionName_con)=>{
        optionName.onmouseenter = function() {
        optionName.style.background = '#fff'
        optionName_con.style.display = 'block'
        }
        optionName_con.onmouseenter = function() {
            optionName.style.background = '#fff'
            optionName_con.style.display = 'block'
        }
        optionName.onmouseleave = function() {
            optionName.style.background = '#000'
            optionName_con.style.display = 'none'
        }
        optionName_con.onmouseleave = function() {
            optionName.style.background = '#000'
            optionName_con.style.display = 'none'
        }
    }
    option(mine,mine_con);
    option(sever,sever_con);
    option(charge,charge_con);
    option(customer,customer_con);
    option(more,more_con);
})
