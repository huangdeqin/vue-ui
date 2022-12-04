import {
    ref,
    computed,
    reactive
} from "vue";

function useTargetIndex (initialIndex) {
    const targetIndex = ref(initialIndex);

    function setTargetIndex (newIndex) {
        targetIndex.value = Number(newIndex);
    }

    return [
        targetIndex,
        setTargetIndex
    ]
}

function useRightListData (initialData, checkedData) {
    const rightListData = ref(initialData);

    function addRightListData (newData) { // [checkbox, checkbox]
        rightListData.value = [
            ...rightListData.value,
            ...newData
        ]

        checkedData.left = [];
    }

    function removeRightListData (newData) { // [checkbox, checkbox]
        newData.forEach(newItem => {
            rightListData.value = rightListData.value.filter(item => item.id !== newItem.id);
        });

        checkedData.right = [];
    }

    return [
        rightListData,
        addRightListData,
        removeRightListData
    ]
}

function useCheckedData () {
    const checkedData = reactive({
        left: [],
        right: []
    });

    function setCheckedData (checked, leftOrRight, item) {
        checked
            ? addCheckedData(leftOrRight, item)
            : removeCheckedData(leftOrRight, item.id);
    }

    function addCheckedData (leftOrRight, item) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left.push(item);
                break;
            case 'right':
                checkedData.right.push(item);
                break;
            default:
                break;
        }
    }

    function removeCheckedData (leftOrRight, id) {
        switch (leftOrRight) {
            case 'left':
                checkedData.left = checkedData.left.filter(item => item.id !== id);
                break;
            case 'right':
                checkedData.right = checkedData.right.filter(item => item.id !== id);
                break;
            default:
                break;
        }
    }

    return [
        checkedData,
        setCheckedData,
        addCheckedData,
        removeCheckedData
    ]
}

function useDragedItem () {
    const dragedItem = ref(null);

    function setDragedItem (item) {
        dragedItem.value = item;
    }

    return [
        dragedItem,
        setDragedItem
    ]
}

function useComputedData (data, targetIndex, rightListData, checkedData) {
    const leftTitle = computed(() => data[targetIndex.value].title);

    const leftListData = computed(() => {
        const {data: currentData} = data[targetIndex.value];

        return currentData.filter(item => {
            if (!rightListData.value.find(({id}) => item.id === id)) {
                return item;
            }
        })
    });

    const transferButtonDisabled = computed(() => ({
        left: checkedData.right.length === 0,
        right: checkedData.left.length === 0
    }))

    return {
        leftTitle,
        leftListData,
        transferButtonDisabled
    }
}

export {
    useTargetIndex,
    useRightListData,
    useCheckedData,
    useDragedItem,
    useComputedData
}