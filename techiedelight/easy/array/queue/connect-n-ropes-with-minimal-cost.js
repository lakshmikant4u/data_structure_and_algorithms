/** https://www.techiedelight.com/connect-n-ropes-with-minimal-cost/

Connect `n` ropes with minimal cost

Given n ropes of different lengths, connect them into a single rope with minimum cost. 
Assume that the cost to connect two ropes is the same as the sum of their lengths.

Input:  [5, 4, 2, 8]
 
Output: The minimum cost is 36
  
[5, 4, 2, 8] –> First, connect ropes of lengths 4 and 2 that will cost 6.
[5, 6, 8]    –> Next, connect ropes of lengths 5 and 6 that will cost 11.
[11, 8]      –> Finally, connect the remaining two ropes that will cost 19.
 
Therefore, the total cost for connecting all ropes is 6 + 11 + 19 = 36.

 */

// PriorityQueue in Javascript

function PriorityQueue(list = []) {
    this.array = [];
    this.enqueueList = function (list) {
        list.forEach(value => this.enqueue(value));
    };
    this.printCollection = function () {
        console.log(this.array);
    };
    this.enqueue = function (value) {
        if (this.isEmpty()) {
            this.array.push(value);
        } else {
            let added = false;
            for (let i = 0; i < this.array.length; i++) {
                if (value < this.array[i]) {
                    this.array.splice(i, 0, value);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.array.push(value);
            }
        }
    };
    this.dequeue = function () {
        let value = this.array.shift();
        return value;
    };
    this.front = function () {
        return this.array[0];
    };
    this.size = function () {
        return this.array.length;
    };
    this.isEmpty = function () {
        return this.array.length === 0;
    };
    this.enqueueList(list);
}

// let res = new PriorityQueue([5, 4, 2, 8]);

// Solution 1 using Priority Queue
const findMinimumCost = (list) => {
    if (list.length == 0) return 0;
    let pq = new PriorityQueue(list);
    while (pq.array.length > 1) {
        pq.enqueue(pq.front() + pq.front());
    }
    return pq.array[0];
}

console.log(findMinimumCost([5, 4, 2, 8])) // 19
