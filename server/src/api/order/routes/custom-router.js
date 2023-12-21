module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/order/customOrder',            /*orders */
        handler: 'order.customOrderControlller',
      },
    ],
  };