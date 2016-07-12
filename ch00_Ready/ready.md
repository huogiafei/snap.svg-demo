Snap.svg 学习前准备
=================

####　　鉴于Snap.svg “精炼”的api文档，必须先把整个文档看个大概，再分一下类，比起英文排序这样写下来容易记多了 ####

**基于snap.svg V0.4.1** 

**API结构**

- Element 相当于Jquery的选择器
- Fragment 片段元素
- Matrix 图形变换的矩阵
- Paper 绘制矢量图
- Set 元素组合
- Snap 类似Jquery的全局方法
- Mina 动画函数

**Element** 

- node,type,attr
- getBBox
- outerSVG(toString),innerSVG,
- parent
- append(add),appendTo,prepend,prependTo
- before,after,insertBefore,insertAfter
- remove,select,selectAll
- addClass,removeClass,hasClass,toggleClass
- data,removeData
- asPX,clone,toDefs
- use,toPattern(pattern),marker
- getPointAtLength,getSubpath,getTotalLength
- click,dblclick,unclick,undblclick
- hover,unhover,drag,undrag
- mousedown,mouseout,mousemove,mouseover,mouseup,(un*)
- touchstart,touchmove,touchend,touchcancel,(un*)
- transform,animate,inAnim,stop


------------------------------

　　如果没有svg基础的话可以先看一下SVG Essential这本书恶补一下，或者直接按照snap,paper,element,fragment,set,matrix,mina去学习，
这里参考了张鑫旭大神的一些意见。



