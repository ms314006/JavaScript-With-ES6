import '@babel/polyfill';

const fetchDataPromise = (success = true) => {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => {
        resolve('<h1>載入完成</h1>');
      }, 3000);
    } else {
      reject(new Error('<h1>載入失敗</h1>'));
    }
  });

  return promise;
};

const getInitialData = async () => {
  let data = '<h1>無資料</h1>';
  data = await fetchDataPromise();
  return data;
};

getInitialData().then((data) => {
  document.getElementById('root').innerHTML = data;
});
