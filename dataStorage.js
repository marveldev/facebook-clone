const request = indexedDB.open('facebook', 3);

request.onsuccess = () => {
  const database = request.result;
  const transaction = database.transaction(['item'], 'readwrite')
  const store = transaction.objectStore('item');
  store.add({text: 'This is a sample Text', userPhoto: 'This is a sample image'})
}

request.onupgradeneeded = () => {
  const database = request.result;
  database.createObjectStore('item', { autoIncrement: true });
}

request.onerror = () => {
  console.log('request unsuccessful');
}

const addEntryToDb = (entry) => {
  const database = request.result;
  console.log(database);
  const transaction = database.transaction(['item'], 'readwrite');
  const store = transaction.objectStore('item')
  store.add(entry);

  transaction.oncomplete = () => {
    alert (`entry added sucessfully to 'item'`)
  }

  transaction.onerror = () => {
    console.log(`error adding to 'item'`)
  }
}

const getEntryFromDb = () => {
  const data = new Promise((resolve, reject) => {
    const database = request.result
    const transaction = database.transaction(['item']);
    const store = transaction.objectStore('item')
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

const clearAllEntries = () => {
  const database = request.result;
  const transaction = database.transaction(['item'], 'readwrite');
  const store = transaction.objectStore('item');
  store.clear();
}

export { request, addEntryToDb, getEntryFromDb, clearAllEntries };
