GLayout
=====

This script modifies the height of the elements in a same line so they are better aligned.
The fix is applied in javascript because they are to many variables to take into account to handle 
everything in css when aligning multiple elements with each other. This simulates the horizontaly alignement of a table without having the 
"automatic resize to fit" verticaly . Also, using tables for non-tabular content should be avoided.

This code is requires to be implemented with enhance.js from masyl : https://github.com/masyl/enhance.js

Usage
--
Each elements in a same "line" will me align together using their respective indexes.

Ex. let say we have floated elements, 3 per rows and their content height varies, but you want the content to be aligned on 
same elements (here title, description  and links)

	<div class="fn-adjust-line">
		<div class="some-class">
			<h2 class="title fn-adjust-0">Title of the box</h2>
			<p class="description fn-adjust-1">
				Blah blah Foo bar
			</p>
			<div class="links fn-adjust-2">
				<a href="#">link 1</a>
				<a href="#">link 2</a>
				<a href="#">link 3</a>
			</div>
		</div>
		<div class="some-class">
			<h2 class="title fn-adjust-0">Title of the box</h2>
			<p class="description fn-adjust-1">
				Blah blah Foo bar<br />
				ok ok !
			</p>
			<div class="links fn-adjust-2">
				<a href="#">link 1</a>
				<a href="#">link 1</a>
				<a href="#">link 3</a>
			</div>
		</div>
		<div class="some-class">
			<h2 class="title fn-adjust-0">Title of the box<br /> on 2 lines</h2>
			<p class="description fn-adjust-1">
				Blah blah Foo bar<br />
				Some text longer<br />
				on multiple lines.
			</p>
			<div class="links fn-adjust-2">
				<a href="#">link 1</a>
			</div>
		</div>
	</div>
	
this will result in setting the same height on each item with the same index (fn-adjust-[index]).

###Without the script, the above would go like this:

<div class="fn-adjust-line">
	<div class="some-class" style="float:left;width:33%">
		<h2 class="title fn-adjust-0">Title of the box</h2>
		<p class="description fn-adjust-1">
			Blah blah Foo bar
		</p>
		<div class="links fn-adjust-2">
			<a href="#">link 1</a><br />
			<a href="#">link 2</a><br />
			<a href="#">link 3</a>
		</div>
	</div>
	<div class="some-class" style="float:left;width:33%">
		<h2 class="title fn-adjust-0">Title of the box</h2>
		<p class="description fn-adjust-1">
			Blah blah Foo bar<br />
			ok ok !
		</p>
		<div class="links fn-adjust-2">
			<a href="#">link 1</a><br />
			<a href="#">link 1</a><br />
			<a href="#">link 3</a>
		</div>
	</div>
	<div class="some-class" style="float:left;width:33%">
		<h2 class="title fn-adjust-0">Title of the box<br /> on 2 lines</h2>
		<p class="description fn-adjust-1">
			Blah blah Foo bar<br />
			Some text longer<br />
			on multiple lines.
		</p>
		<div class="links fn-adjust-2">
			<a href="#">link 1</a>
		</div>
	</div>
</div>

###With the script:

<div class="fn-adjust-line">
	<div class="some-class" style="float:left;width:33%">
		<h2 class="title fn-adjust-0" style="height:2em">Title of the box</h2>
		<p class="description fn-adjust-1" style="height:3em">
			Blah blah Foo bar
		</p>
		<div class="links fn-adjust-2" style="height:3em">
			<a href="#">link 1</a><br />
			<a href="#">link 2</a><br />
			<a href="#">link 3</a>
		</div>
	</div>
	<div class="some-class" style="float:left;width:33%">
		<h2 class="title fn-adjust-0" style="height:2em">Title of the box</h2>
		<p class="description fn-adjust-1" style="height:3em">
			Blah blah Foo bar<br />
			ok ok !
		</p>
		<div class="links fn-adjust-2" style="height:3em">
			<a href="#">link 1</a><br />
			<a href="#">link 1</a><br />
			<a href="#">link 3</a>
		</div>
	</div>
	<div class="some-class" style="float:left;width:33%">
		<h2 class="title fn-adjust-0" style="height:2em">Title of the box<br /> on 2 lines</h2>
		<p class="description fn-adjust-1" style="height:3em">
			Blah blah Foo bar<br />
			Some text longer<br />
			on multiple lines.
		</p>
		<div class="links fn-adjust-2" style="height:3em">
			<a href="#">link 1</a>
		</div>
	</div>
</div>