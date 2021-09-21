//Given a complete (virtual) binary tree, 
//return true/false if the given target node 
//exists in the tree or not. Here, 
//the virtual means the tree nodes are 
//numbered assuming the tree is a complete binary tree.


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
    