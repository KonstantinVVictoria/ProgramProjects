class BinarySearchTree {

    /* Class containing left and right child of current node and key value*/
    class Node {
        int key;
        Node left, right;

        public Node(int item) {
            key = item;
            left = right = null;
        }
    }

    // Root of BST 
    Node root;
    // Constructor 
    BinarySearchTree() {
        root = null;
    }

    // Driver Program to test above functions 
    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree(); 

    }
} 