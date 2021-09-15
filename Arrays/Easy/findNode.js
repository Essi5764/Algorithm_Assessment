var doesNodeExist = function (root, x) {
    if (x <= 0) return false;
    output = [];
    for (i = 1; i < output.length; i++) {
        if(root == null) return false;
        if(output[i] === "0") root = root.left;
        else root = root.right;
    }
    
        return root !=null;
    }
    