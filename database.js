import AsyncStorage from '@react-native-community/async-storage';

async function saveItem(listItem, id) {
    listItem.id = new Date().getTime();
    const savedItems = await getItems();
console.log("save:", savedItems)
    if (id) {
        const index = await savedItems.findIndex(item => item.id === id);
        savedItems[index] = listItem;
    }
    else {
        savedItems.push(listItem);
    }


    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}

async function deleteItem(id){
    let savedItems = await getItems();
    const index = await savedItems.findIndex(item => item.id === id);
    savedItems.splice(index, 1);
    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}
function getItems() {
    return AsyncStorage.getItem('items')
        .then(response => {
            if (response)
                return Promise.resolve(JSON.parse(response));
            else
                return Promise.resolve([]);
        })
}


async function getItem(id) {
    const savedItems = await getItems();
    return savedItems.find(item => item.id === id);
}

module.exports = {
    saveItem,
    getItems,
    getItem,
    deleteItem
}
