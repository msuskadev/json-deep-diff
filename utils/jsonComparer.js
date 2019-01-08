const { diff } = require('deep-diff');

function compare(previousObject, newObject) {
    let difference = diff(previousObject, newObject);
    let allChanges = [];

    difference.forEach((diff) => {
        let change = getChange(diff);

        if (change) {
            allChanges.push(change);
        }
    });

    return allChanges;
}

function getChange(diff) {
    if (!diff || !diff.kind) {
        return null;
    }

    switch (diff.kind) {
        case 'E': 
            return getEditChange(diff);        
        case 'D': 
            return getDeleteChange(diff);        
        case 'N':
            return getAddChange(diff)
        case 'A':
            // TODO
            break;
    }
}


function getEditChange(diffEdit) {
    return {
        previousValue: diffEdit.lhs,
        currentValue: diffEdit.rhs,
        action: "EDIT",        
        field: getPath(diffEdit)
    }
};

function getDeleteChange(diffDelete) {
    return {
        previousValue: diffDelete.lhs,
        currentValue: null,
        action: 'DELETE',        
        field: getPath(diffDelete)
    }
}

function getAddChange(diffNew) {
    return {
        previousValue: null,
        currentValue: diffNew.rhs,
        action: 'ADD',        
        field: getPath(diffNew)
    }
}

function getPath(diff) {
    return diff.path.toString().replace(',', '.');
}


module.exports = {
    compare
}