window.TUTORIALS = [
{
    slug: "vscode-setup-guide",
    title: "Setting Up VS Code For CP",
    topic: "Environment",
    difficulty: "Easy",
    readMinutes: 5,
    date: "2026-05-01",
    excerpt: "A complete guide to setting up Visual Studio Code with the best extensions and tools for competitive programming.",
    tags: ["vscode", "setup", "tools"],
    html: `
<p>Umm so as first of everything we need to make out the surrounding for our coding workspace I personally suggest you all to use VS code since it's much great and updated than any other code editor .</p>
<h2>How to install vs code</h2>
<ul>
  <li><strong>For Windows :</strong> <a target="_blank" href="https://code.visualstudio.com/thank-you?dv=win64user">Download here </a></li>
  <li><strong>For MAC :</strong> <a target="_blank" href="https://code.visualstudio.com/thank-you?dv=osx">Download here </a></li>
  <li><strong>For Linux :</strong> <a target="_blank" href="https://code.visualstudio.com/thank-you?dv=linux64_deb">Download here (.deb) </a>&nbsp;&nbsp; <a target="_blank" href="https://code.visualstudio.com/thank-you?dv=linux64_rpm">Download here (.rpm)</a></li>


</ul>
<h2>Installing C++</h2>
<p>For installing c++ to your machine follow the steps in below.</p>
<ul>
     <li><strong>Windows </strong>: 
         <ol>
             <li>Download Mingw : <a target="_blank" href="https://downloads.sourceforge.net/project/mingw/Other/Other-README?ts=gAAAAABp9N9f49NrmfQe_P3VtlrP7nbyQD7cOr5J2SAMXrjFvjd9jCqt7NQXneQ1IPGg8CEX_xjHOPvyLRFZvjoMkMGoZcHQZA%3D%3D&r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Fmingw%2Ffiles%2Flatest%2Fdownload">Download here</a></li>
             <li>Install the Mingw package to your computer</li>
             <li>Save the location of your Mingw files</li>
             <li>Go to bin folder of Mingw and find the file <code> g++.exe</code>  &nbsp; and copy the path of it</li>
             <li>Search for <code>edit the system enviroment variables</code> in the windows search option </li>
             <li>Select <strong> Enviroment Variables </strong> click on the  <code>path</code>  option .</li>
             <li>Select new and paste the copied location of the <code>g++.exe</code> file and select ok .</li>
             <li>Open a new terminal and run <code>g++ --version</code> If it gives the version the installation is complete. </li>

         </ol></li>
    <li><strong>MAC </strong>:
        <ol>
             <li>Open the terminal and run the command <code>xcode-select --install</code> Click install when prompted.</li>
             <li>Try to use the command <code>g++ --version</code> If this gives the version as the output the installation is complete.

        </ol>
    <li><strong>Linux </strong>: 
        <ol>
             <li>Open a terminal and run the following commands <code>sudo apt update</code> &nbsp;&nbsp;<code>sudo apt install build-essential</code> Since cpp is an esssential pack for linux this command will install it correctly</li>
             <li>Try running <code>g++ --version</code> if this returns the version the installation is correct.
        </ol>

</ul>
<h2>Create the first cpp file with vs code</h2>
<ul>
    <li>Open vs code select open folder and open folder and then go to the sidebar and find the new file icon and create a new file named <code>new.cpp</code>.</li>
    <li>Inside that file write these lines</li>
    <pre><code>#include &ltbits/stdc++.h> 
using namespace std;

int main(){
   cout<<"Hello World"; 
   return 0;
   
}
</pre></code>
    <li>So as anyother language this is the basic command to print <code>Hello World </code> to run this open a new terminal in vs code and run <code> g++ new.cpp </code> and this will create a new executable file and then run the executable in the terminal by using the name of the executable such like if it's <code>a.exe</code> run this in the terminal <code>./a</code></li>
    
</ul>


<h2>Things to Remember</h2>
<ul>
    <li>Use the <strong>Bits</strong> library because it imports every essential module for competitive programming in beginner and intermidiate level</li>
    <li>Use the <strong>Namespace</strong> <code>std</code> to refrain from using the <strong>std::</strong> in every line.</li>
</ul>
&nbsp;
<blockquote>The best tool is the one you know how to use. Spend time mastering your editor!</blockquote>
`
},

{
  slug: "basics-functions-in-cpp",
  title: "Basics Functions In C++",
  topic: "First step for coding",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-07",
  excerpt: "The very first things you need to know about C++ functions before diving into competive programming.",
  tags: ["basics", "cpp", "functions"],
  html: `
<p>Alrite so you have your code editor ready and now its time to write your first C++ program. The most importent thing to understand is how functions work in C++, especialy the <code>main</code> function which is where your program always starts runing.</p>

<h2>The main function</h2>
<p>Every C++ program must have a <code>main</code> funtion. It looks like this :</p>
<pre><code>int main() {
    // your code goes here
    return 0;
}</code></pre>
<p>The <code>int</code> before main means the funtion returns an integer. Returning 0 tells the operating system that everything finished okay. Some compilers let you skip the return statment but it's good practise to include it.</p>

<h2>Printing things with cout</h2>
<p>To show output we use <code>cout</code> (pronounced "see-out"). It's part of the standard library and normaly you would write <code>std::cout</code> but we make it shorter with <code>using namespace std;</code>.</p>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    cout << "Hello, world!" << endl;
    return 0;
}</code></pre>
<p>Notice the double less-than signs <code><<</code>  they point the data towards <code>cout</code>. You can chain multiple things together like this :</p>
<pre><code>cout << "The answer is " << 42 << " for sure." << "\n";</code></pre>
<p>Using <code>"\\n"</code> is faster than <code>endl</code> because <code>endl</code> does an extra flush operation. In competive programming every microsecond counts so stick with <code>"\\n"</code>.</p>

<h2>Reading input with cin</h2>
<p>To get data from the user or from the judge, use <code>cin</code>:</p>
<pre><code>int age;
cin >> age;
string name;
cin >> name;</code></pre>
<p>The arrows point away from <code>cin</code> towards the variable. You can also read multiple values in one line :</p>
<pre><code>cin >> first >> second >> third;</code></pre>
<p>That's super handy for reading problems with many numbers.</p>

<h2>Other basic functions</h2>
<p>C++ has a ton of built-in functions you'll use every day. Some important ones are :</p>
<ul>
  <li><code>abs(x)</code>  absolute value</li>
  <li><code>max(a,b)</code> and <code>min(a,b)</code>  larger and smaller of two numbers</li>
  <li><code>swap(a,b)</code>  swaps the contents of two variables</li>
  <li><code>sort(begin, end)</code>  sorts an array or vector (but we'll cover that later)</li>
</ul>
<p>These are all avilable right away with no extra includes if you use <code>bits/stdc++.h</code>.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Every program needs a <code>main</code> function  that's where the magic starts.</li>
  <li>Use <code>cout <<</code> to print, <code>cin >></code> to read.</li>
  <li>Prefer <code>"\\n"</code> over <code>endl</code> for newlines.</li>
  <li>Use <code>using namespace std;</code> to avoid typing <code>std::</code> everywhere  but be careful not to overuse it in larger projects.</li>
</ul>

<blockquote>Getting comftable with basic input and output is the foundation of everything else. Once you can read data and print answers reliably, the real algorithm fun begins.</blockquote>
`
},{
  slug: "working-with-numbers-in-cpp",
  title: "Working With Numbers In C++",
  topic: "Numbers & Mathematics",
  difficulty: "Easy",
  readMinutes: 9,
  date: "2026-05-07",
  excerpt: "A deep dive into the integer types, modulo arithmetic, and how to avoid overflow while working with numbers.",
  tags: ["numbers", "math", "integers", "modulo"],
  html: `
<p>Numbers are at the hart of competive programming. You'll be adding, multiplying, and modding them all the time. But if you pick the wrong data type, your answer will be completly wrong due to overflow. Let's break it down.</p>

<h2>The int type  your goto soldier</h2>
<p>The <code>int</code> type is a 32bit integer. It can store values from about <strong>2 billion to +2 billion</strong>. For most simple problems this is enought. But be carefull: if you multiply two large ints, the result can be bigger than 2 billion and it will <em>overflow</em>  wrappig around to a negative number or something wierd.</p>
<pre><code>int a = 50000;
int b = 50000;
int c = a * b; // 2.5 billion  overflows! c will be negative or random</code></pre>

<h2>long long to the rescue</h2>
<p>When you expect numbers larger than 2 billion, switch to <code>long long</code>. It's 64bit and can hold values up to about <strong>9 quintillion</strong> (that's a 9 followed by 18 zeros). Use the <code>LL</code> suffix for large constants:</p>
<pre><code>long long big = 123456789123456789LL;</code></pre>
<p>Even if your final answer fits in int, intermediate calculations may overflow. So many programmers just typedef <code>long long</code> to <code>ll</code> and use it everywhere to be safe.</p>

<h2>Modular arithmetic  keeping things small</h2>
<p>A huge number of problems ask you to output the answer modulo some big prime, like <strong>10<sup>9</sup>+7</strong>. The trick is to take the remainder after every operation:</p>
<pre><code>long long mod = 1000000007;
long long result = 1;
for (int i = 1; i <= n; i++) {
    result = (result * i) % mod;
}
cout << result << "\n";</code></pre>
<p>That computes n! modulo mod without ever letting the number grow huge.</p>

<h2>Handling negative mod</h2>
<p>In C++, <code>%</code> on a negative number gives a negative remainder, which is almost never what you want. Fix it with:</p>
<pre><code>int x = -10;
int m = 7;
x = x % m;
if (x < 0) x += m;
// now x is 4</code></pre>

<h2>Floating point numbers  the sneaky ones</h2>
<p>For decimal values, you have <code>double</code> (64bit) and <code>long double</code> (80bit). But be carefull! Floats are not exact. Comparing them with <code>==</code> is risky because of tiny rounding errors. Always use an epsilon:</p>
<pre><code>if (abs(a - b) < 1e-9) {
    // a and b are equal enough
}</code></pre>

<h2>Quick refrence</h2>
<table border="1" cellpadding="5">
  <tr><th>Type</th><th>Size</th><th>Range (approx)</th></tr>
  <tr><td>int</td><td>32bit</td><td>2.110<sup>9</sup></td></tr>
  <tr><td>long long</td><td>64bit</td><td>9.210<sup>18</sup></td></tr>
  <tr><td>double</td><td>64bit</td><td>decimals, ~15 digits precision</td></tr>
</table>

<blockquote>Overflow bugs are silent killers in competive programming. When in doubt, use <code>long long</code> and take modulo early. Your future self will thank you.</blockquote>
`
},{
  slug: "input-and-output-in-cpp",
  title: "Input And Output In C++",
  topic: "Setup & Basics",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-07",
  excerpt: "All the ways to read input and write output in C++  from cin/cout to scanf/printf, plus file I/O.",
  tags: ["input", "output", "cin", "cout", "scanf"],
  html: `
<p>Reading and writing data is the first thing your program does. In competive programming you'll normaly use <strong>standard input</strong> and <strong>standard output</strong>  that is, the terminal, or a file if the judge requires it. Let's master every method.</p>

<h2>cin and cout  the easy way</h2>
<p>These are the C++ stream objects. They're simple and safe:</p>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;               // reads 2 integers
    cout << a + b << "\\n";       // prints their sum
    return 0;
}</code></pre>
<p><code>cin</code> skips whitespace (spaces, newlines) so you can read numbers however they're arranged.</p>

<h2>Supercharging cin/cout</h2>
<p>By default, cin/cout are a bit slow because they are synced with C's I/O. To make them blazing fast, add these two lines at the beginning of <code>main</code>:</p>
<pre><code>ios::sync_with_stdio(false);
cin.tie(0);</code></pre>
<p>After that, don't mix <code>cin/cout</code> with <code>scanf/printf</code>  they may not work well together beof the unsynced buffers.</p>

<h2>scanf and printf  the old C way</h2>
<p>Some problems have huge input (millions of numbers). In those cases <code>scanf</code> and <code>printf</code> can still be a tiny bit faster.</p>
<pre><code>int a, b;
scanf("%d %d", &a, &b);
printf("Sum: %d\\n", a + b);</code></pre>
<p>The <code>%d</code> is for integers, <code>%lld</code> for long long, <code>%s</code> for strings. It's a bit more verbse, but sometimes worth it for the speed.</p>

<h2>Reading whole lines and strings with spaces</h2>
<p>If you need to read a full line that may contain spaces, use <code>getline</code>:</p>
<pre><code>string sentence;
getline(cin, sentence);</code></pre>
<p>Beware: if you use <code>cin >></code> before <code>getline</code>, a leftover newline in the buffer can make <code>getline</code> read an empty line. The fix is <code>cin.ignore()</code> after the <code>cin >></code>.</p>

<h2>Reading until endoffile</h2>
<p>Sometimes the input size is not given; you have to read until there is no more data. This loop does it:</p>
<pre><code>int x;
wh(cin >> x) {
    // process x
}</code></pre>

<h2>File input/output</h2>
<p>Rarely, a contest requires reading from a file. You can redirect cin and cout with <code>freopen</code>:</p>
<pre><code>freopen("input.txt", "r", stdin);
freopen("output.txt", "w", stdout);</code></pre>
<p>Now all your <code>cin</code> calls read from the file, and <code>cout</code> writes to the file. Very conveniant.</p>

<blockquote>I/O speed can mean the difference between Accepted and Time Limit Exceded. Always add the two speed-up lines unless you know for sure that scanf/printf is needed.</blockquote>
`
},{
  slug: "cpp-competitive-programming-template",
  title: "Setting Up a C++ Competitive Programming Template",
  topic: "Setup & Basics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-07",
  excerpt: "The exact code snippet every competive programmer keeps ready at the start of a contest.",
  tags: ["cpp", "template", "setup"],
  html: `
<p>Every second matters in a contest. You don't want to waste time writing boilerplate code. That's where a template comes in. It's a prewritten skeleton that you copypaste at the beginning of each problm and it contains all the includes, typedefs, and speed up tricks you'll need.</p>

<h2>The holy grail template</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;
using ll = long long;
const ll MOD = 1e9+7;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    
    // your solution code goes here
    
    return 0;
}</code></pre>

<h2>Linebyline explenation</h2>
<ul>
  <li><strong>#include &ltbits/stdc++.h&gt</strong>  includes almost the entire standard library. This header is specific to g++ (the compiler used on most judges) and saves you from including dozens of individual headers like <code>iostream</code>, <code>vector</code>, etc.</li>
  <li><strong>using namespace std;</strong>  lets you write <code>cout</code> instead of <code>std::cout</code>. In competive programming, shorter is always better.</li>
  <li><strong>using ll = long long;</strong>  gives a short name (<code>ll</code>) to the 64bit integer. Most people also add similar typedefs for <code>vi</code> (vector<int>), <code>pi</code> (pair<int,int>), etc.</li>
  <li><strong>const ll MOD = 1e9+7;</strong>  the most common Modulo value. You'll use it everywhere.</li>
  <li><strong>ios::sync_with_stdio(false);</strong>  disconnects C++ streams from C streams, making cin/cout much faster.</li>
  <li><strong>cin.tie(0);</strong>  unties cin from cout, so that printing something doesn't force a flush of the output buffer before reading.</li>
</ul>

<h2>Adding your own macros</h2>
<p>Many programmers add more linesto this template to make loops and pair access shorter:</p>
<pre><code>#define F first
#define S second
#define PB push_back
#define MP make_pair
#define REP(i,a,b) for (int i = a; i &lt= b; i++)</code></pre>
<p>With these, <code>v.push_back(make_pair(x,y))</code> becomes just <code>v.PB(MP(x,y))</code> and loops become cleaner.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Create your template once and store it somewhere easily accessible.</li>
  <li>You can even configure your editor to autoinsert it when you create a new file.</li>
  <li>Don't overcomplicate it  keep it lite and fast to copy.</li>
</ul>

<blockquote>A good template is like a warmup that gets you into the coding zone instantly. Tune it to your liking and never start a contest without it.</blockquote>
`
},

e 

]