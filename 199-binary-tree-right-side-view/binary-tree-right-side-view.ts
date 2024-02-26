/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {

    function bfs(root:TreeNode): number[][] {
        const out: number[][] = root ? [[root.val]] : [[]];
        const needToVisit: TreeNode[] = [root];

        while(needToVisit.length) {
            let size = needToVisit.length;
            const level = [];

            while(size > 0) {
                const parent = needToVisit.shift();
                if (parent?.left || parent?.right) {
                    level.push(parent.left?.val);
                    level.push(parent.right?.val);
                }
                parent?.left && needToVisit.push(parent.left);
                parent?.right  && needToVisit.push(parent.right);
                size--;
            }

            level.length > 0 && out.push(level);
        }
        return out;
    }

    const levelNodes = bfs(root);

    const res = [];

    levelNodes.forEach(nodes => {
        let filtered = nodes.filter(val => !isNaN(val));

        if (filtered.length) {
            res.push(filtered[filtered.length-1]);
        }
    })

    return res;
    
};