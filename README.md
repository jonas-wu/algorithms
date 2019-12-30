# algorithms

算法汇总

## 深度优先查找(DFS)

Depth First Search

[dfs.ts](./dfs.ts)

## 广度优先查找(BFS)

Breadth First Search

[bfs.ts](./bfs.ts)

## 防抖动、节流(debounce throttle)

防抖动 debounce

[debounce.html](./debounce.html)

节流 throttle

[throttle.html](./throttle.html)

## 十大排序

[参考链接](https://www.cnblogs.com/onepixel/articles/7674659.html)

![O(n)](./sort/img/sort-o.png)

### 冒泡排序(bubble sort)

它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

* 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
* 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
* 针对所有的元素重复以上的步骤，除了最后一个；
* 重复步骤1~3，直到排序完成。

![bubble sort](./sort/img/bubble-sort.gif)

[bubbleSort.ts](././sort/bubbleSort.ts)

### 选择排序(selection sort)

首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下：

* 初始状态：无序区为R[1..n]，有序区为空；
* 第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
* n-1趟结束，数组有序化了。

![selection sort](./sort/img/selection-sort.gif)

[selectionSort.ts](././sort/selectionSort.ts)

### 插入排序(insertion sort)

通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：

* 从第一个元素开始，该元素可以认为已经被排序；
* 取出下一个元素，在已经排序的元素序列中从后向前扫描；
* 如果该元素（已排序）大于新元素，将该元素移到下一位置；
* 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
* 将新元素插入到该位置后；
* 重复步骤2~5。

![insertion sort](./sort/img/insertion-sort.gif)

[insertionSort.ts](././sort/insertionSort.ts)

### 归并排序(merge sort)

该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。

* 把长度为n的输入序列分成两个长度为n/2的子序列；
* 对这两个子序列分别采用归并排序；
* 将两个排序好的子序列合并成一个最终的排序序列。

![merge sort](./sort/img/merge-sort.gif)

[mergeSort.ts](././sort/mergeSort.ts)

### 快速排序(quick sort)

快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）

* 从数列中挑出一个元素，称为 “基准”（pivot）；
* 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
* 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。

![quick sort](./sort/img/quick-sort.gif)

[quickSort.ts](././sort/quickSort.ts)
