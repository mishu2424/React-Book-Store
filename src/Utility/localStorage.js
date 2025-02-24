import { toast } from "react-toastify";

const getStoredList = (list) => {
    const getStoredLists=localStorage.getItem(list);
    if(getStoredLists){
        console.log('entered!')
        const receivedList=JSON.parse(getStoredLists);
        console.log(receivedList)
        return receivedList;
    }
    return [];
}

const addToLocalStorage = (id,list) =>{
    const storedList= getStoredList(list);
    console.log(storedList);
    if(storedList.includes(id)){
        console.log('already exists')
        alert('already exists!');
    }else{
        storedList.push(id);
        toast("This book has been added")
    }
    localStorage.setItem(list,JSON.stringify(storedList));
}

export {addToLocalStorage, getStoredList}