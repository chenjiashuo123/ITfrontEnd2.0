#订单界面（买/卖书籍）

#传入信息
'''
    orderID: 订单号
    picture: 书籍图片
    bookName: 书籍名
    author: 书籍作者
    price: 价格,
    state: 订单状态,
    time: 订单发起时间,
'''

#完成订单（传出信息）
{
    orderID：订单号
}

#取消订单（传出信息）
{
    orderID：订单号
}

#查看详细信息（传出信息）
{
    orderID：订单号
    isBuyer: 是否为买家
}