
import AsyncStorage from '@react-native-community/async-storage';

async function saveItem(listItem){
    listItem.id = new Date().getTime();
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');

    if(respose){
        saveItem = JSON.parse(response);
        saveItem.push(listItem);
    }

    return AsyncStorage.setItem('items', JSON.stringify(savedItems));

}

module.exports={
    saveItem
}
 