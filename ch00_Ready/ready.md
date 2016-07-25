Snap.svg 学习前准备
=================

####　　鉴于Snap.svg “精炼”的api文档，必须先把整个文档看个大概，再分一下类，比起字母排序这样学习下来好多了 ####

**基于snap.svg V0.4.1** 

**API结构**

- Element 相当于Jquery的选择器
- Fragment 片段元素
- Matrix 图形变换的矩阵
- Paper 绘制矢量图
- Set 元素组合
- Snap 类似Jquery的全局方法
- Mina 动画函数

**Element(1-17)** 

- node,type,attr
- getBBox
- outerSVG(toString),innerSVG
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

**Paper(18-24)**

- line,rect,circle,ellipse
- polyline,polygon,path
- el,image,text
- g/group,use
- gradient,filter
- svg,mask, ptrn
- toString, clear

**Set(25-27)**

- push,pop,forEach
- animate,bind
- clear,splice,exclude

**Mina(28-30)**

- backin,backout,bounce,elastic
- easein,easeinout,easeout,linear
- getById，time

**Snap.filter(31-33)**

- blur,brightness,contrast
- grayscale,hueRotate,invert
- saturate,sepia,shadow

**Snap.path(34-39)**

- bezierBBox (返回一个给定的三次贝塞尔曲线的边界框),toCubic(转换一个路径为一个全部路径段采用三次贝塞尔曲线表示的新路径)
- getBBox,getPointAtLength,getSubpath,getTotalLength
- intersection(返回两条路径的相交点)， isBBoxIntersect(两个盒子是否相交)
- isPointInside(给定点是否在闭合路径内部)， isPointInsideBBox(给定点是否在盒子内部)
- toAbsolute(转换路径坐标为绝对值),toRelative(转换路径坐标为相对值)
- map(把路径字符串按照矩阵转换)，findDotsAtSegment (回给定曲线上特定位置的点坐标)

**Snap(40-51)**

- Snap(创建一个svg元素)，format
- rad,deg,angle
- is,snapTo 
- getRGB,hsb,hsl,rgb
- color,hsb2rgb,hsl2rgb,rgb2hsb,rgb2hsl
- parsePathString,parseTransformString
- select,selectAll
- animation,animate
- parse,fragment
- ajax,load
- getElementByPoint,plugin
- Matrix,matrix

**Matrix(52-55)**

- add,invert,clone
- translate,scale,rotate
- x,y
- determinant,split,toTransformString



------------------------------

　　如果没有svg基础的话可以先看一下SVG Essential这本书恶补一下，或者直接按照snap,paper,element,fragment,set,matrix,mina去学习，
这里参考了张鑫旭大神的一些意见。



