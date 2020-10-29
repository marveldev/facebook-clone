const request = indexedDB.open('facebook', 3);

request.onsuccess = () => {
  const database = request.result;
  const transaction = database.transaction(['bio'], 'readwrite')
  const store = transaction.objectStore('bio');
  store.add({text: 'This is a sample Text', userPhoto: 'This is a sample image'})
}

request.onupgradeneeded = () => {
  const database = request.result;
  database.createObjectStore('bio', { autoIncrement: true });
  database.createObjectStore('post-item', { keyPath: 'postItemId' });
}

request.onerror = () => {
  console.log('request unsuccessful');
}

const addEntryToDb = (storeName, entry) => {
  const database = request.result;
  const transaction = database.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName)
  store.add(entry);

  transaction.oncomplete = () => {
    alert (`entry added sucessfully to ${storeName}`)
  }

  transaction.onerror = () => {
    console.log(`error adding to ${storeName}`)
  }
}

const getEntryFromDb = (storeName) => {
  const data = new Promise((resolve, reject) => {
    const database = request.result
    const transaction = database.transaction([storeName]);
    const store = transaction.objectStore(storeName)
    const getData = store.getAll();
  
    getData.onsuccess = () => {
      resolve(getData.result)
    }
  
    getData.onerror = () => {
      console.log(`error adding to 'item'`)
      reject(getData.error);
    }
  })
  return Promise.resolve(data);
}

const clearAllEntries = (storeName) => {
  const database = request.result;
  const transaction = database.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  store.clear();
}

export { request, addEntryToDb, getEntryFromDb, clearAllEntries };
