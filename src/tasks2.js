/*

** Understand how the keyPress copied code working !!
a: one key press show some emoji [for change direction snake func]
b: prees again on OTHER key - will remove the emoji - and so on [for change direction snake func]
1. Make that for each key press - only one img will show up (and remove the previous img) 
2. Set inside the downHandler func - a if statements for each key (up, down..) and allSnake[i+num] match that contional 

b: create RIGHT keydown event ( = 1 press is enough) and NOT keypress evnet

c: make the snake change his index by keydonw rught event that's above
d: learn the grid index distance for handle cross screen issu

e: MAYBE - grid the grid again by 2 loops = i + j indexes
f: if e happend: take care the key down event with that 2D grid

g: if e didn't happend:  take care for all keydown event by caculate the corners & all bprder distance
=====================

2. press arrows will make the sanke move
* NOR snake start to moving to the right auto even no pressing arrows
a: define speed move
b: define cross the screen
c: define change directions 
d: click on playbutton will start moving the snake to the right auto
e: click on playbutton will remove the playbutton
-------

4. display fruits in rand place ;VV

5. add score table

6. add score value for eat fruits

7. vanish fruits in rand time / optional

8. end the game when the snake touch himself = head on body or head on tail

==============================================

9. BONUSE:

I define levels

a: define faster speeds for the snake movment

b: define faster fruit display

c: define faster fruit vanish

----

II define sounds

a: sound for eat fruit

b: sound for game over

c: sound for vanish fruit

*/