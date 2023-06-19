export const chooseAddress=()=>{
  return new Promise((reslove,reject)=>{
      wx.chooseAddress({
          success: (result) => {
              reslove(result);
          },
          fail: (err) => {
              reject(err)
          }
      });
  })
}
export const getSetting=()=>{
  return new Promise((reslove,reject)=>{
     wx.getSetting({
         success: (result) => { 
         },
         fail: (err) => {  reject(err)},
     });
       
  })
}

export const openSetting=()=>{
  return new Promise((reslove,reject)=>{
   wx.openSetting({
       success: (result) => {
          reslove(result);
       },
       fail: (err) => {reject(err)},
   });
  })
}

export const showModal=({content})=>{
  return new Promise((reslove,reject)=>{
  wx.showModal({
      title: '',
      content: content,
      success: (result) => {
              reslove(result);
      },
      fail: (err) => {
          reject(err);
      }
  });
    
  })
}
export const showToast=({title})=>{
  return new Promise((reslove,reject)=>{
      wx.showToast({
          title: title,
          icon: 'none',
          success: (result) => {
              reslove(result);
          },
          fail: (err) => {
              reject(err);
          },
        
      });
        
  })
}

export const login=()=>{
  return new Promise((reslove,reject)=>{
     wx.login({
         timeout:10000,
         success: (result) => {
          reslove(result);
         },
         fail: (err) => {
          reject(err);
      },
     });
       
        
  })
}

