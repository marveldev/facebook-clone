const request = indexedDB.open('facebook', 2);

request.onsuccess = () => {
  const database = request.result;
  const transaction = database.transaction(['post'], 'readwrite')
  const store = transaction.objectStore('post');
  store.add({ description: 'Hey, I am Jane!' })
}

request.onupgradeneeded = () => {
  const database = request.result;
  database.createObjectStore('post', { autoIncrement: true});
}

request.onerror = () => {
  console.log('request unsuccessful');
}

const addEntryToDb = (userPost) => {
  const database = request.result;
  console.log(database);
  const transaction = database.transaction(['post'], 'readwrite');
  const store = transaction.objectStore('post')
  store.add({ userFeeling: userPost });

  transaction.oncomplete = () => {
    alert (`entry added sucessfully to ${'post'}`)
  }

  transaction.onerror = () => {
    console.log(`error adding to ${'post'}`)
  }
}

const getEntryFromDb = () => {
  const data = new Promise((resolve, reject) => {
    const database = request.result
    const transaction = database.transaction(['post']);
    const store = transaction.objectStore('post')
    const getData = store.getAll();
  
    getData.onsuccess = () => {
      resolve(getData.result)
    }
  
    getData.onerror = () => {
      console.log(`error adding to 'post'`)
      reject(getData.error);
    }
  })
  return Promise.resolve(data);
}

const clearAllEntries = () => {
  const database = request.result;
  const transaction = database.transaction(['post'], 'readwrite');
  const store = transaction.objectStore('post');
  store.clear();
}

export { request, addEntryToDb, getEntryFromDb, clearAllEntries };
