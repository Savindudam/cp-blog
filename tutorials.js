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
},

{
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
},

{
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
<p>After that, don't mix <code>cin/cout</code> with <code>scanf/printf</code>  they may not work well together because of the unsynced buffers.</p>

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
},

{
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

{
  slug: "include-bits-stdcpp",
  title: "Including the Entire Standard Library with bits/stdc++.h",
  topic: "Setup & Basics",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-07",
  excerpt: "Why this single header replaces dozens of separate includes and when you should (and shouldn't) use it.",
  tags: ["bits/stdc++.h", "includes", "header", "g++"],
  html: `
<p>You've probaly seen the line <code>#include &ltbits/stdc++.h&gt</code> in almost every competive programming code. It's not a standard C++ headerit's a <strong>GCC specific</strong> file that includes most of the standard library in one go. Let's talk about why we use it and when it's not a good idea.</p>

<h2>What does bits/stdc++.h do?</h2>
<p>Normaly, if you want to use <code>vector</code>, you have to write <code>#include &ltvector&gt</code>. For <code>algorithm</code>, <code>#include &ltalgorithm&gt</code>, and so on. With <code>bits/stdc++.h</code>, all of these are included at once because this header itself includes all of them. That saves you a lot of typing and ensures you never forget an include.</p>

<h2>Why competive programmers love it</h2>
<ul>
  <li><strong>Speed</strong>  you don't waste time thinking about which headers to include.</li>
  <li><strong>Simplicity</strong>  one line to rule them all. Your template becomes very short.</li>
  <li><strong>Portability</strong>  every major online judge (Codeforces, AtCoder, CSES, etc.) uses g++ and supports this header.</li>
</ul>

<h2>The downside</h2>
<p>This header includes a massive amount of code, which can slow down compilation a bit. But in competive programs (usually only a few hundred lines) the compilation time is neglegible. The bigger issue is that it's not portable to other compilers like MSVC or Clang without extra setup. However, for CP purposes it's perfectly fine.</p>

<h2>What does it actually include?</h2>
<p>Althought the exact contents depend on the compiler version, bits/stdc++.h typicaly includes:</p>
<ul>
  <li>&ltiostream&,..gt, &ltiomanip&gt, &ltfstream&gt</li>
  <li>&ltstring&gt, &ltvector&gt, &ltdeque&gt, &ltlist&gt, &ltqueue&gt, &ltstack&gt</li>
  <li>&ltset&gt, &ltmap&gt, &ltunordered_set&gt, &ltunordered_map&gt</li>
  <li>&ltalgorithm&gt, &ltnumeric&gt, &ltfunctional&gt</li>
  <li>&ltbitset&gt, &ltcomplex&gt, &ltrandom&gt</li>
  <li>and many more...</li>
</ul>
<p>Pretty much anything you might need in a cp contest.</p>

<h2>How to get it on your system</h2>
<p>If you installed g++ (MinGW on Windows, or buildessential on Linux), bits/stdc++.h is already there. You can find it inside the compiler's include directory. In some older compilers it might be missing, but modern ones all have it.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Always put this include at the very top of your file.</li>
  <li>It's a g++ specific trick  don't expect it to work on arbitrary C++ compilers.</li>
  <li>For production code, it's better to include only what you need to keep compile times low.</li>
</ul>

<blockquote>When the clock is ticking and you need to write a quick bugfree solution, bits/stdc++.h is your best friend. Just remember it's a cp hack, not a generalpurpose practice.</blockquote>
`
},

{
  slug: "understanding-using-namespace-std",
  title: "Understanding the using namespace std Directive",
  topic: "Setup & Basics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "Why we write 'using namespace std' and what happends if we don't  the good, the bad, and the lazy.",
  tags: ["namespace", "std", "basics", "cpp"],
  html: `
<p>You've seen the line <code>using namespace std;</code> in practically every cp code snippet, but what does it actualy do? Basicaly, it saves you a bunch of typing. Without it, you'd have to write <code>std::</code> before every single standard library thing.</p>

<h2>What is a namespace?</h2>
<p>A namespace is like a container for names. The C++ standard library puts all its functions and classes inside the <strong>std</strong> namespace so they don't clash with your own names. For example, <code>cout</code> is realy <code>std::cout</code>, <code>vector</code> is <code>std::vector</code>, and so on.</p>

<h2>Without using namespace std</h2>
<pre><code>#include &ltbits/stdc++.h&gt
int main() {
    std::cout << "Hello\\n";
    std::vector&ltint&gt v;
    v.push_back(5);
    std::cout << v[0] << "\\n";
    return 0;
}</code></pre>
<p>As you can see, <code>std::</code> appears alot. In a competive program where speed matters, typing <code>std::</code> hundreds of times is just wastefull.</p>

<h2>With using namespace std</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;
int main() {
    cout << "Hello\\n";
    vector&ltint&gt v;
    v.push_back(5);
    cout << v[0] << "\\n";
    return 0;
}</code></pre>
<p>Much cleaner! Now the compiler automaticaly looks inside the <code>std</code> namespace when it sees <code>cout</code> or <code>vector</code>. This makes the code shorter and easier to read, which is exactly what we want in a contest.</p>

<h2>Is it dangrous?</h2>
<p>In large projects, using the whole <code>std</code> namespace can cause name conflicts (collisions). But in competive programming you normaly write short programs of a few hundred lines at most, so conflicts are super rare. Almost every cp'r uses it.</p>

<h2>What if you don't want the entire namespace?</h2>
<p>Some people prefere to bring in only specific things:</p>
<pre><code>using std::cout;
using std::cin;
using std::vector;</code></pre>
<p>This is a bit safer but more verbse. Honestly, in cp just go with <code>using namespace std;</code>  it's the standard.</p>

<h2>Things to rememeber</h2>
<ul>
  <li><code>using namespace std;</code> makes all standard library names avilable without the <code>std::</code> prefix.</li>
  <li>It is totaly fine for cp, but avoid it in large sofware projects.</li>
  <li>Always put it right after the includes, before your code.</li>
  <li>Don't use it inside header files if you ever make one (but in cp you rarely do).</li>
</ul>

<blockquote>Think of <code>using namespace std;</code> as a shortcut that removes unecessary noise from your code. In a timed contest, every saved keystroke is a small victory.</blockquote>
`
},

{
  slug: "compiling-cpp-with-gpp-flags",
  title: "Compiling C++ Code with g++ and Optimization Flags",
  topic: "Setup & Basics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "How to turn your .cpp file into a runnable program with g++ and what those magic flags like -O2 and -Wall actualy mean.",
  tags: ["g++", "compiling", "flags", "optimization"],
  html: `
<p>Writing code is only half the job. You need to turn that <code>.cpp</code> file into a working executble. In cp we use <strong>g++</strong>, the GNU C++ compiler. The terminal command might look intimidatng at first but its realy just a few ingredients.</p>

<h2>The basic compile command</h2>
<pre><code>g++ -std=c++11 -O2 -Wall test.cpp -o test</code></pre>
<p>Let's break it down piece by piece so you understand what each part does.</p>

<h2>g++</h2>
<p>This is the compiler itself. On Windows you typicly get it through MinGW; on Linux it's part of the <code>build-essential</code> package; on Mac you can get it via Xcode command line tools.</p>

<h2>-std=c++11</h2>
<p>This tells the compiler which version of the C++ standerd to use. Most modern judges support C++17, but C++11 is still a safe bet. With this flag you can use modern features like <code>auto</code>, rangebased for loops, and lambdas.</p>

<h2>-O2</h2>
<p>This is the <strong>optimization level</strong>. <code>-O2</code> tells the compiler to spend some extra time making your program run faster. It doesn't change the correctness, but can speed up your code by several times. Most cp solutions are compiled with <code>-O2</code>. You can also use <code>-O3</code> for slightly more agressive optimization, or <code>-Ofast</code> if you're feeling wild (but it might break some standard rules).</p>

<h2>-Wall</h2>
<p>This enables <strong>warnings</strong>. It tells the compiler to shout at you if it sees something suspicious  like using an uninitialized variable or a comparison that always comes out the same. These warnings are your friends; they catch bugs early. Always compile with <code>-Wall</code>.</p>

<h2>test.cpp and -o test</h2>
<p>The source file is <code>test.cpp</code>. The <code>-o test</code> part says "name the output execuitable <code>test</code>". On Windows this will become <code>test.exe</code>, on Linux it's just <code>test</code>. If you leave out <code>-o</code>, the default name is <code>a.out</code> (or <code>a.exe</code>).</p>

<h2>Running the program</h2>
<p>After compiling, you simply run:</p>
<pre><code>./test</code></pre>
<p>on Linux/Mac, or</p>
<pre><code>test.exe</code></pre>
<p>on Windows. The program will then wait for your input (as described in the problem) and print the output.</p>

<h2>Other usefull flags</h2>
<ul>
  <li><code>-g</code>  includes debugging information for tools like GDB.</li>
  <li><code>-DDEBUG</code>  defines a macro called DEBUG that you can use for conditional debug prints.</li>
  <li><code>-Wextra</code>  even more warnings.</li>
  <li><code>-std=c++17</code>  for C++17 (now widely supported).</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Always compile with at least <code>-O2</code> and <code>-Wall</code>.</li>
  <li>The <code>-std</code> flag should match what the judge uses (usually C++11 or later).</li>
  <li>On Windows, the executable may need to be in the same folder as any input files or you need to use full paths.</li>
</ul>

<blockquote>Compiling might seem like a boring step, but knowing how to squeeze every bit of performance with the right flags can save you from a TLE. Plus, warnings are like free code reviews  don't ignore them.</blockquote>
`
},

{
  slug: "fast-io-ios-sync-stdio-cin-tie",
  title: "Fast I/O: ios::sync_with_stdio and cin.tie",
  topic: "Setup & Basics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "How two magic lines can make your C++ I/O significantly faster and why they matter.",
  tags: ["fast I/O", "cin", "cout", "sync_with_stdio", "cin.tie"],
  html: `
<p>If you've ever submited a solution that looked correct but got Time Limit Exceeded (TLE), the culprit might be slow input/output. By default, C++ streams are synced with C standard I/O, which adds overhead. With two simple lines, you can uncouple them and make your <code>cin</code>/<code>cout</code> much faster.</p>

<h2>The magic incantation</h2>
<pre><code>ios::sync_with_stdio(false);
cin.tie(0);</code></pre>
<p>Add these at the very beginning of <code>main()</code>, before any I/O operations. Let's see what they actually do.</p>

<h2>ios::sync_with_stdio(false)</h2>
<p>By default, C++ keeps <code>cin</code>/<code>cout</code> and C's <code>scanf</code>/<code>printf</code> in sync. This means that after outputing with <code>cout</code>, the data is guaranteed to appear before any subsequent <code>scanf</code> reads. This syncing is conveniant but adds extra work. Setting <code>sync_with_stdio(false)</code> disconnects them, so <code>cin</code>/<code>cout</code> don't wait for each other. The result: <code>cin</code> and <code>cout</code> become roughly as fast as <code>scanf</code>/<code>printf</code> (or even faster in many cases).</p>
<p>Important: after doing this, you should NOT mix <code>cin</code>/<code>cout</code> with <code>scanf</code>/<code>printf</code>. The order of reads and writes may get scrambled. Pick one style and stick with it.</p>

<h2>cin.tie(0)</h2>
<p>Normaly, <code>cin</code> is tied to <code>cout</code>. This means that before every <code>cin</code> read, the output buffer is flushed (i.e., everything you printed is forced to appear). This is usefull for interactive programs, but in cp it's pure overhead. By calling <code>cin.tie(0)</code>, you untie them. Now <code>cin</code> won't force a flush, which speeds up reading significantly. If you still want to flush output, you can do it manualy with <code>cout << flush</code> or <code>endl</code> (but remember, <code>endl</code> also flushes, so use <code>"\\n"</code> instead).</p>

<h2>Complete example</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    
    int n;
    cin >> n;
    long long sum = 0;
    for (int i = 0; i < n; ++i) {
        int x; cin >> x;
        sum += x;
    }
    cout << sum << "\\n";
    return 0;
}</code></pre>
<p>This will read large inputs blazingly fast and output the answer without any unnecesary delays.</p>

<h2>What about scanf/printf?</h2>
<p>With this optimization, <code>cin</code>/<code>cout</code> are competitive with <code>scanf</code>/<code>printf</code>. Many cp'rs still use <code>scanf</code>/<code>printf</code> for very large input (like millions of numbers), but the difference is tiny. I prefer the cleaner syntax of <code>cin</code>/<code>cout</code> and just add the two speed-up lines.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Always add <code>ios::sync_with_stdio(false); cin.tie(0);</code> at the start of main if you use <code>cin</code>/<code>cout</code>.</li>
  <li>Don't mix <code>cin</code>/<code>cout</code> with <code>scanf</code>/<code>printf</code> after unsyncing.</li>
  <li>Use <code>"\\n"</code> instead of <code>endl</code> to avoid unneeded flushes.</li>
</ul>

<blockquote>Two lines of code can turn a TLE into an AC. Never forget to speed up your I/O  it's one of the simplest and most impactfull optimizations you can do.</blockquote>
`
},

{
  slug: "reading-integers-from-standard-input",
  title: "Reading Integers from Standard Input in C++",
  topic: "Input/Output",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-08",
  excerpt: "Everything about reading integers using cin and scanf  handling multiple inputs, loops, and common pitfalls.",
  tags: ["integers", "input", "cin", "scanf"],
  html: `
<p>Readng numbers from the input is probably the first thing you'll do in 99% of cp problems. Let's see all the ways to grab those intagers into your program.</p>

<h2>Reading a single integer</h2>
<pre><code>int x;
cin >> x;</code></pre>
<p>That's it. The same works for <code>long long</code> or any other numeric type. <code>cin</code> will skip any whitespace (spaces, newlines) and try to interpret the next characters as a number.</p>

<h2>Reading multiple integers</h2>
<pre><code>int a, b, c;
cin >> a >> b >> c;</code></pre>
<p>You can chain them. It doesn't matter if the numbers are on the same line or different lines  <code>cin</code> handles both.</p>

<h2>Reading an unknown amount of integers</h2>
<p>Sometimes the input doesn't tell you how many numbers there are. You can read until EOF (end of file):</p>
<pre><code>int x;
while (cin >> x) {
    // process x
}</code></pre>
<p>The condition <code>cin >> x</code> returns false when there's no more input (or the input cannot be parsed as an integer), so the loop stops automagically.</p>

<h2>Using scanf for even more control</h2>
<p>If you need to parse a specific format, <code>scanf</code> can be handy:</p>
<pre><code>int a, b;
scanf("%d %d", &a, &b);</code></pre>
<p>The <code>%d</code> means "decimal integer". For <code>long long</code> you'd use <code>%lld</code>. Note that you pass <em>pointers</em> to the variables (<code>&a</code>), not the variables themselves, because <code>scanf</code> needs to modify them.</p>

<h2>Reading into a vector</h2>
<p>A common pattern: read n integers into a vector.</p>
<pre><code>int n;
cin >> n;
vector&ltint&gt arr(n);
for (int i = 0; i < n; ++i) {
    cin >> arr[i];
}</code></pre>

<h2>Going faster</h2>
<p>If you're using <code>cin</code>, remember to add <code>ios::sync_with_stdio(false); cin.tie(0);</code> for speed. Without it, reading a million integers can be slow. With it, it's lightning.</p>

<h2>Things to rememeber</h2>
<ul>
  <li><code>cin >></code> automatically skips whitespace.</li>
  <li>Chain multiple reads with <code>>></code>.</li>
  <li>Use <code>while(cin >> x)</code> to read until EOF.</li>
  <li>With <code>scanf</code>, always pass the address (<code>&</code>) of the variable.</li>
</ul>

<blockquote>Reading input may seem trivial, but a single mistake here can waste hours of debugging. Know your tools so you can focus on the actual problem.</blockquote>
`
},

{
  slug: "readingstrings-from-cin",
  title: "Reading Strings from cin in C++",
  topic: "Input/Output",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "How to read words, lines, and full strings with spaces using cin, getline, and stringstream.",
  tags: ["strings", "input", "cin", "getline"],
  html: `
<p>Reading strings can be a bit trickier than reading numbers because strings may contain spaces, newlines, or special characters. Let's cover all the scenarious you'll encounter.</p>

<h2>Reading a single word</h2>
<p>Using <code>cin >></code> reads characters until it hits whitespace. So it reads exactly one <strong>word</strong>:</p>
<pre><code>string word;
cin >> word;</code></pre>
<p>If the input is "Hello world", <code>word</code> will contain only "Hello". The remaining "world" stays in the buffer for the next read.</p>

<h2>Reading multiple words</h2>
<pre><code>string first, last;
cin >> first >> last;
cout << "Hello, " << first << " " << last << "!\\n";</code></pre>
<p>Input: "John Doe" -> first = "John", last = "Doe".</p>

<h2>Reading a whole line (with spaces)</h2>
<p>When you need the entire line, including spaces, use <code>getline</code>:</p>
<pre><code>string line;
getline(cin, line);</code></pre>
<p>This reads everything until a newline character (Enter). The newline itself is consumed but not stored. If you previously used <code>cin >></code>, there might be a leftover newline in the buffer. In that case, the first <code>getline</code> will read an empty string. To fix it, call <code>cin.ignore()</code> after the last <code>cin >></code> before <code>getline</code>:</p>
<pre><code>int n;
cin >> n;
cin.ignore(); // ignore the trailing newline
string s;
getline(cin, s); // now reads the actual line</code></pre>

<h2>Reading until EOF (all lines)</h2>
<p>To read every line of input:</p>
<pre><code>string line;
while (getline(cin, line)) {
    // process each line
}</code></pre>

<h2>Parsing a line into separate words</h2>
<p>Sometimes you have a line of integers or words that you want to split. You can use a <code>stringstream</code>:</p>
<pre><code>string line = "10 20 30";
stringstream ss(line);
int x;
while (ss >> x) {
    cout << x << "\\n";
}</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li><code>cin >></code> reads a word (stops at whitespace).</li>
  <li><code>getline(cin, str)</code> reads a whole line.</li>
  <li>Be carefull mixing <code>cin >></code> and <code>getline</code>  <code>cin.ignore()</code> is your friend.</li>
  <li>Using <code>stringstream</code> is an easy way to split a string into tokens.</li>
</ul>

<blockquote>String input can be a source of annoying bugs because invisible newline characters get left in the buffer. Always test your reading logic on a small sample before writing the rest of the solution.</blockquote>
`
},

{
  slug: "handling-unknown-amount-of-input",
  title: "Handling Unknown Amount of Input with while(cin >> x)",
  topic: "Input/Output",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "What to do when you don't know how many numbers or strings the judge will send  the handy while(cin >> x) pattern.",
  tags: ["input", "cin", "EOF", "loop"],
  html: `
<p>Somtimes a problem won't tell you how many test cases or numbers are comming. They just give you a stream of data and expect you to process it all. In C++, the cleanest way to handle this is the <code>while(cin >> x)</code> loop. Let's see how it works and why it's so usefull.</p>

<h2>The basic pattern</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    
    int x;
    while (cin >> x) {
        // do something with x
        cout << x * 2 << "\\n";
    }
    return 0;
}</code></pre>
<p>This loop reads integers one by one until there is no more input. Each time <code>cin >> x</code> is evaluated, it returns <em>true</em> if the read succeedded, and <em>false</em> if it failed (because we hit endoffile or the next thing in the input wasn't a number). So the loop stops automaticly when the input runs out.</p>

<h2>How does it know when to stop?</h2>
<p>Input in cp usually comes from a file (even if it's just standard input). When the judge sends all the data and closes the stream, <code>cin</code> enters an "EOF" state. The next read attempt will set the stream's fail bit, and <code>cin >> x</code> will evaluate to false, ending the loop.</p>

<h2>What if the input has multiple data types?</h2>
<p>You can read more complex structures inside the loop. For example, reading pairs:</p>
<pre><code>int a, b;
while (cin >> a >> b) {
    cout << a + b << "\\n";
}</code></pre>
<p>This reads two integers per iteration. If the input has an odd number of numbers, the last <code>b</code> will fail and the loop will end without processing that incomplete pair. Be aware of that.</p>

<h2>Reading until a specific sentinel value</h2>
<p>Sometimes the input uses a special value to signal the end (like <code>0</code>). Then you can use a regular loop with a break condition:</p>
<pre><code>int x;
while (cin >> x) {
    if (x == 0) break;
    // process x
}</code></pre>

<h2>Reading strings without knowing the count</h2>
<p>The same pattern works for strings:</p>
<pre><code>string word;
while (cin >> word) {
    // process word
}</code></pre>

<h2>Mixing with getline</h2>
<p>If you need to switch from <code>>></code> to <code>getline</code> inside the loop, watch out for leftover newlines. It's often better to read everything with <code>getline</code> and then parse each line with <code>stringstream</code> if you're not sure about the input format.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>The condition <code>cin >> variable</code> returns a reference to the stream, which converts to <code>true</code> if the read succeeded, <code>false</code> otherwise.</li>
  <li>Use this pattern when the number of input elements is unknowen.</li>
  <li>Be carefull with the order of reads  if one read fails, the subsequent reads in the same condition will also fail.</li>
</ul>

<blockquote>The <code>while(cin >> x)</code> trick is one of those simple things that makes competive programming so much easier. It frees you from counting input sizes and lets you focus on the actual algorithm.</blockquote>
`
},

{
  slug: "output-formatting-cout-newline",
  title: "Output Formatting with cout and Newline",
  topic: "Input/Output",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-08",
  excerpt: "How to make your program's output look exactly the way the judge expects  spacing, newlines, and formatting tricks.",
  tags: ["output", "cout", "formatting", "newline"],
  html: `
<p>The judge is very picky about how your output looks. A missing space or an extra newline can turn a correct solution into a Wrong Answer. Let's learn to format output properly with <code>cout</code>.</p>

<h2>Basic chaining with cout</h2>
<pre><code>int a = 7, b = 3;
cout << a << " " << b << "\\n";
// Output: 7 3</code></pre>
<p>You can chain as many things as you want using the <code><<</code> operator. Each piece is printed right after the previous one, so if you need spaces you have to add them explicitely as <code>" "</code>.</p>

<h2>Newlines: \\n vs endl</h2>
<p>To move to the next line you have two options: <code>"\\n"</code> (the newline escape character) and <code>endl</code>. They both insert a newline, but <code>endl</code> also <strong>flushes the output buffer</strong>. Flushing means the program stops and writes everything immediately to the console or file. That extra work can be slow. So in cp you almost always want <code>"\\n"</code>.</p>
<pre><code>cout << "Hello\\n";        // fast
cout << "World" << endl; // slower, flushes</code></pre>
<p>Only use <code>endl</code> when you need the output to appear right away (e.g., in interactive problems where you ask a question and wait for an answer).</p>

<h2>Formatting floating point numbers</h2>
<p>When the problem asks for a certain number of decimal places, you can set the precision:</p>
<pre><code>double pi = 3.1415926535;
cout << fixed << setprecision(4) << pi << "\\n"; // 3.1416</code></pre>
<p><code>fixed</code> tells <code>cout</code> to always show the decimal part, and <code>setprecision(n)</code> sets the number of digits after the point. Don't forget to include <code>&ltiomanip&gt</code> (which is already in bits/stdc++.h).</p>

<h2>Formatting with printf (quick reference)</h2>
<p>If you prefer <code>printf</code>, the same formatting looks like:</p>
<pre><code>printf("%.4f\\n", pi); // 3.1416</code></pre>
<p><code>%d</code> for int, <code>%lld</code> for long long, <code>%f</code>/<code>%lf</code> for double, <code>%s</code> for Cstyle strings.</p>

<h2>Printing multiple values with a single newline</h2>
<p>A common pattern is to print all elements of a vector separated by spaces:</p>
<pre><code>for (int i = 0; i < v.size(); i++) {
    cout << v[i] << (i == v.size()-1 ? "\\n" : " ");
}</code></pre>
<p>This prints spaces between elements but no trailing space at the end of the line. Many judges are strict about that.</p>

<h2>Avoiding extra newlines</h2>
<p>Be careful not to accidently print a blank line at the end when the problem doesn't want it. If the problem says "print the answer for each test case on a new line", don't add an extra newline after the last answer.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Use <code>"\\n"</code> insread of <code>endl</code> for speed.</li>
  <li>Add spaces manually between outputs.</li>
  <li>Use <code>fixed</code> and <code>setprecision</code> to format decimals.</li>
  <li>Check the problem statement for the exact output format.</li>
</ul>

<blockquote>Output formatting is one of those things that seems trivial until you get a WA for a missing space. Always doublecheck the required format before submitting.</blockquote>
`
},

{
  slug: "using-scanf-and-printf",
  title: "Using scanf and printf Fast I/O",
  topic: "Input/Output",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-08",
  excerpt: "The oldschool C way of doing input/output that can still be the fastest option for huge datasets.",
  tags: ["scanf", "printf", "C I/O", "fast"],
  html: `
<p>Even though <code>cin</code> and <code>cout</code> can be made fast with the two magic lines, some problems with extreamly large input (millions of numbers) still benefit from <code>scanf</code> and <code>printf</code>. They are also more explicit about types. Let's learn how to use them properly.</p>

<h2>scanf  reading values</h2>
<p>The function <code>scanf</code> reads from standard input according to a <strong>format string</strong>. You tell it what type of data to expect and where to store it:</p>
<pre><code>int a, b;
scanf("%d %d", &a, &b);</code></pre>
<p>The format string <code>"%d %d"</code> means "two decimal integers possibly separated by whitespace". The <code>&</code> is the addressof operator: <code>scanf</code> needs to know where in memory to put the values. Forgetting the <code>&</code> is a very common bug (but usually not for strings).</p>

<h2>Format specifiers</h2>
<ul>
  <li><code>%d</code>  integer (<code>int</code>)</li>
  <li><code>%lld</code>  long long integer</li>
  <li><code>%f</code>  float</li>
  <li><code>%lf</code>  double</li>
  <li><code>%c</code>  single character</li>
  <li><code>%s</code>  Cstyle string (char array); stops at whitespace</li>
  <li><code>%x</code>  hexadecimal integer</li>
</ul>
<p>For <code>string</code> objects you can't use <code>%s</code> directly because <code>string</code> isn't a C array. Use <code>cin</code> for strings or read into a <code>char</code> buffer.</p>

<h2>printf  printing values</h2>
<p><code>printf</code> uses the same format specifiers but without the <code>&</code>:</p>
<pre><code>int x = 42;
long long big = 123456789LL;
printf("x = %d, big = %lld\\n", x, big);</code></pre>
<p>You can also control precision:</p>
<pre><code>double pi = 3.14159;
printf("%.2f\\n", pi); // 3.14</code></pre>

<h2>Speed comparison</h2>
<p>When reading or writing millions of numbers, <code>scanf</code>/<code>printf</code> can be slightly faster than <code>cin</code>/<code>cout</code> even with syncing disabled, because they have less overhead. However, for most problems the difference is negligible. Use what you are more comfortable with, but don't forget that mixing them after disabling sync is dangerous.</p>

<h2>Common pitfalls</h2>
<ul>
  <li>Forgetting the <code>&</code> before nonpointer variables  segfault or garbge values.</li>
  <li>Using the wrong format specifier (e.g., <code>%d</code> for <code>long long</code>)  undefined behavour.</li>
  <li>Leaving whitespace in the format string that doesn't match the input exactly. But <code>%d</code> and others automaticly skip leading whitespace, so it's generally safe.</li>
</ul>

<h2>Reading a full line with fgets</h2>
<p>If you need a whole line using C functions, you can use <code>fgets</code> on <code>stdin</code>, but it's more involved. In cp, getline(cin, str) is usually easier.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Use <code>%d</code> for int, <code>%lld</code> for long long, <code>%lf</code> for double.</li>
  <li>Always pass the address of variables to <code>scanf</code> (except strings/arrays).</li>
  <li>Don't mix <code>scanf</code>/<code>printf</code> with fast <code>cin</code>/<code>cout</code> unless you know what you're doing.</li>
</ul>

<blockquote><code>scanf</code> and <code>printf</code> have been around for decades and they aren't going anywhere. Knowing them can save you when you hit a monstrous input file.</blockquote>
`
},

{
  slug: "reading-whole-line-getline",
  title: "Reading a Whole Line with getline",
  topic: "Input/Output",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-15",
  excerpt: "How to read an entire line of text including spaces using getline, and the common newline trap after cin.",
  tags: ["getline", "strings", "input", "newline"],
  html: `
<p>Somtimes you need to read a full line that may contain spaces  like a sentence or a whole paragraph. The <code>getline</code> function is your freind. But beware: mixing <code>cin >></code> and <code>getline</code> can cause a classic bug that leaves you scratching your head. Let's clear it up.</p>

<h2>Basic getline usage</h2>
<pre><code>string line;
getline(cin, line);</code></pre>
<p>This reads everything from the current input position until a newline character (<code>'\\n'</code>). The newline itself is consumed but not stored. So <code>line</code> will contain the whole line (including spaces).</p>

<h2>The famous newline trap</h2>
<p>Imagine this code:</p>
<pre><code>int n;
cin >> n;
string s;
getline(cin, s);  // s ends up empty!</code></pre>
<p>Why does <code>s</code> stay empty? After <code>cin >> n</code>, the input still contains a newline character (the one you typed after the number). <code>getline</code> sees that newline immediatly and reads it as an empty line. To fix it, call <code>cin.ignore()</code> after the <code>cin >></code>:</p>
<pre><code>int n;
cin >> n;
cin.ignore(); // discard the leftover newline
string s;
getline(cin, s); // now reads the actual line</code></pre>

<h2>Reading an unknown number of lines</h2>
<p>If the input consists of several lines, you can loop until EOF:</p>
<pre><code>string line;
while (getline(cin, line)) {
    // process each line
}</code></pre>
<p>This works even if lines are empty  <code>getline</code> will return an empty string for blank lines, but the stream stays good.</p>

<h2>Parsing a line after reading</h2>
<p>Often you read a line containing several numbers. Use a <code>stringstream</code> to split it:</p>
<pre><code>string line;
getline(cin, line);
stringstream ss(line);
int x;
while (ss >> x) {
    // x is each integer on the line
}</code></pre>

<h2>When to prefer getline over cin &gt;&gt;</h2>
<ul>
  <li>When you need to preserve spaces inside a string.</li>
  <li>When the problem gives data line by line and each line may contain spaces.</li>
  <li>When you want to read until a specific delimiter (getline can take a third argument as delimiter).</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li><code>getline(cin, str)</code> reads a whole line (stops at newline).</li>
  <li>After <code>cin >></code>, always call <code>cin.ignore()</code> before <code>getline</code> to skip the leftover newline.</li>
  <li>Use <code>stringstream</code> to parse a line after reading it.</li>
  <li><code>getline</code> can also accept a delimiter: <code>getline(cin, str, ',')</code> reads until a comma.</li>
</ul>

<blockquote>Newline characters are invisible but powerfull. Mastering <code>getline</code> and <code>cin.ignore()</code> will save you from one of the most common beginner bugs in competitive programming.</blockquote>
`
},

{
  slug: "file-io-freopen-for-cp",
  title: "File I/O: freopen for Competitive Programming",
  topic: "Input/Output",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "How to redirect standard input/output to files using freopen  a required trick for some oldschool judges.",
  tags: ["freopen", "file", "input", "output"],
  html: `
<p>In 99% of modern cp platforms you just read from standard input and write to standard output. But some older judges, or specific contests like USACO, require you to read from an input file and write to an output file. Instead of rewriting your I/O code, you can simply redirect <code>cin</code> and <code>cout</code> to files using <code>freopen</code>.</p>

<h2>The magic lines</h2>
<pre><code>freopen("input.txt", "r", stdin);
freopen("output.txt", "w", stdout);</code></pre>
<p>Put these at the very beginning of <code>main()</code>, before any I/O. After that, every <code>cin</code> reads from <code>input.txt</code> and every <code>cout</code> writes to <code>output.txt</code>  just as if they were the terminal. You don't need to change any other part of your code.</p>

<h2>What do the arguments mean?</h2>
<ul>
  <li><strong>First argument:</strong> the filename (a Cstyle string).</li>
  <li><strong>Second argument:</strong> the mode. <code>"r"</code> = read mode, <code>"w"</code> = write mode (creates or overwrites the file), <code>"a"</code> = append mode.</li>
  <li><strong>Third argument:</strong> the stream to redirect. <code>stdin</code> is standard input, <code>stdout</code> is standard output. The function returns <code>FILE*</code> which you can store if you need to close the file later, but for cp you usually don't need to.</li>
</ul>

<h2>Example</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    freopen("in.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
    
    int n;
    cin >> n;
    vector&ltint&gt arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    
    // ... solve the problem ...
    
    cout << "Result: " << ans << "\\n";
    return 0;
}</code></pre>
<p>The program reads from <code>in.txt</code> and writes to <code>out.txt</code> without a single change to the logic.</p>

<h2>When to use file I/O vs standard I/O</h2>
<p>Modern platforms (Codeforces, AtCoder, CSES) use standard I/O, so you can ignore <code>freopen</code> entirely. But if you're practicing old USACO problems or some regional contests, you'll need it. Check the problem statement: if it says "Input: file" or gives filenames like "gift.in", you must use files.</p>

<h2>Using ifstream and ofstream as an alternative</h2>
<p>Instead of redirecting standard streams, you can create your own file stream objects:</p>
<pre><code>ifstream fin("input.txt");
ofstream fout("output.txt");
int x;
fin >> x;
fout << x * 2 << "\\n";</code></pre>
<p>This is more objectoriented, but it means you have to replace every <code>cin</code>/<code>cout</code> with <code>fin</code>/<code>fout</code> in your code. <code>freopen</code> is less work because you don't need to findandreplace anything.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Always place <code>freopen</code> before any I/O.</li>
  <li>The file must exist (for reading) or be created (for writing) in the working directory.</li>
  <li>On some systems, you may need to give the full path to the file if the judge doesn't use the current folder.</li>
  <li>Don't forget to remove or comment out <code>freopen</code> when submitting to a standard I/O judge.</li>
</ul>

<blockquote>File I/O might seem oldfashioned, but it's a necessary evil for a few contests. <code>freopen</code> makes the transition painless  two lines and you're done.</blockquote>
`
},

{
  slug: "integer-types-int-long-long",
  title: "Integer Types: int, long long, and Their Ranges",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-08",
  excerpt: "A detailed look at the integer data types in C++  their sizes, ranges, and when to use each one.",
  tags: ["int", "long long", "integer types", "ranges"],
  html: `
<p>Picking the right integer type is one of the first decisions you make when writing a cp solution. Get it wrong, and your program might overflow, give negative results when you expect positive, or just fail on large test cases. Let's learn the types and their limits so you never get caught out.</p>

<h2>The int type  32 bits of power</h2>
<p><code>int</code> is the most common integer type in C++. On modern systems it's a 32bit <strong>signed</strong> integer. That means it uses 32 binary digits to store the value, with one bit reserved for the sign (positive or negative). So the range is roughly:</p>
<pre><code>2,147,483,648  to  2,147,483,647</code></pre>
<p>Or more simply: about <strong>210<sup>9</sup> to 210<sup>9</sup></strong>. If your numbers stay inside that range, <code>int</code> is perfectly fine and uses the least memory. Most loop counters, array indices, and small values should be <code>int</code>.</p>
<pre><code>int a = 1000000;
int b = 2000;
int c = a + b; // no problem, 1,002,000 fits easily</code></pre>

<h2>When int isn't enought  introducing long long</h2>
<p>In many cp problems, values can grow larger than 2 billion. For example, if n = 10<sup>5</sup> and you need n(n+1)/2, that's about 510<sup>9</sup>  bigger than int can hold. <code>long long</code> is a 64bit signed integer with a massive range:</p>
<pre><code>9,223,372,036,854,775,808  to  9,223,372,036,854,775,807</code></pre>
<p>Or about <strong>910<sup>18</sup> to 910<sup>18</sup></strong>. That's enough for almost every cp problem. Most experienced programmers just <code>typedef long long ll;</code> and use <code>ll</code> for anything that could possibly get large.</p>
<pre><code>long long n = 100000;
long long sum = n * (n + 1) / 2; // safe, about 5e9, fits in long long</code></pre>

<h2>Other integer types you might see</h2>
<ul>
  <li><strong>short</strong>  16bit, rarely used in cp. Range 32767.</li>
  <li><strong>unsigned int</strong>  same 32 bits but only positive, range 0 to ~410<sup>9</sup>. Good for bitmasks.</li>
  <li><strong>unsigned long long</strong>  0 to ~1.810<sup>19</sup>.</li>
  <li><strong>char</strong>  8bit, often used for characters but can store small integers 128 to 127.</li>
</ul>

<h2>How to check the limits in code</h2>
<p>You can print the maximum value of a type using <code>&ltlimits&gt</code> (included in bits/stdc++.h):</p>
<pre><code>cout << INT_MAX << "\\n";      // 2147483647
cout << LLONG_MAX << "\\n";    // 9223372036854775807</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li><code>int</code> goes up to ~2.1e9. If values may exceed that, use <code>long long</code>.</li>
  <li>Signed integers use one bit for sign, so the max positive is half the absoute range.</li>
  <li>Unsigned types give you extra headroom if you know values are nonnegative.</li>
  <li>When in doubt, <code>long long</code> is cheap on modern computers  use it liberally.</li>
</ul>

<blockquote>Understanding integer ranges is like knowing the speed limit. You can drive an int on a small road, but on the autobahn of cp, you better have a long long.</blockquote>
`
},

{
  slug: "avoiding-overflow-multiplying-ints",
  title: "Avoiding Overflow When Multiplying ints",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-08",
  excerpt: "The classic mistake: multiplying two ints and getting a wrong result even though you store it in a long long.",
  tags: ["overflow", "multiplication", "int", "long long", "casting"],
  html: `
<p>This is probaly the number one bug that beginners hit. You wright a line like <code>long long result = a * a</code>, both a and a are ints, and the answer comes out completly garbled. Why? Because the multiplication happens <strong>before</strong> the assignment to <code>long long</strong>. Let's pick apart this sneaky pitfall.</p>

<h2>The exact problem</h2>
<pre><code>int a = 100000;
long long b = a * a;
cout << b << "\\n"; // you'd expect 10,000,000,000, but... SURPRISE!</code></pre>
<p>What actually happens: the compiler sees <code>a * a</code> where both operands are <code>int</code>. So it performs a 32bit multiplication. The result is larger than 2.1 billion, so it overflows inside the <code>int</code> range, wraps around to some garbage value (maybe negative), and <em>then</em> that garbage is assigned to the <code>long long b</code>. The damage is already done.</p>

<h2>How to fix it</h2>
<p>You need to tell the compiler to perform the multiplication in 64bit space. The easiest way is to cast one of the operands to <code>long long</code>:</p>
<pre><code>int a = 100000;
long long b = (long long)a * a; // works correctly now</code></pre>
<p>Or you can declare the variable as <code>long long</code> from the start:</p>
<pre><code>long long a = 100000;
long long b = a * a; // fine</code></pre>
<p>Some people use a suffix <code>1LL</code> to force a constant into long long:</p>
<pre><code>long long b = 1LL * a * a; // the 1LL ensures the whole expression is long long</code></pre>

<h2>The same bug in other contexts</h2>
<p>This issue isn't limited to multiplication. Similar problems can occur with <code>pow()</code>  which returns a <code>double</code>, not an integer. Or when mixing signed and unsigned types  the result can implicitly convert in suprising ways.</p>
<p>Also, watch out for division before multiplication. Since integer division truncates, the order matters:</p>
<pre><code>int a = 5, b = 2;
int c = a / b * b; // (5/2)*2 = 2*2 = 4, not 5</code></pre>

<h2>Using macros to prevent overflow</h2>
<p>Some cp'ers define a macro to make sure they never forget:</p>
<pre><code>#define int long long
// now everything is 64bit, but careful: you may get MLE if you use large arrays</code></pre>
<p>But this is a sledgehammer approach. It's better to be aware and explicit.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>In C++, the type of an expression is determined by the types of its operands, not by the type where the result is stored.</li>
  <li>Always cast at least one operand to <code>long long</code> before doing multiplication if there's any chance of overflow.</li>
  <li>Use <code>1LL * a * b</code> as a foolproof pattern.</li>
  <li>Compiler warnings (<code>-Wall</code>) may catch some overflow cases, but not all.</li>
</ul>

<blockquote>The overflow trap is subtle because your sample test might pass. Then the judge hits you with a test where numbers are just large enough to overflow. Learn to spot it before it bites.</blockquote>
`
},

{
  slug: "long-long-suffix-ll",
  title: "The long long Suffix LL in C++",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-08",
  excerpt: "Why you need to put LL after big constant numbers and what happends if you forget.",
  tags: ["long long", "suffix", "LL", "constants"],
  html: `
<p>When you write a huge number literal like <code>1234567899999</code>, the compiler has to decide what type to give it. By default, an integer literal without a suffix is <code>int</code> if it fits, otherwise <code>long</code> or <code>long long</code>. But sometimes you want to force it to be <code>long long</code> to avoid overflow or match a function parameter. The <code>LL</code> suffix does exactly that.</p>

<h2>What does LL stand for?</h2>
<p><code>LL</code> means <strong>long long</strong>. You can use lowercase <code>ll</code> too, but uppercase is more readable. There's also <code>ULL</code> for <strong>unsigned long long</strong>.</p>
<pre><code>auto a = 123456789123LL;       // a is long long
auto b = 123456789123;         // b is int if it fits, but this number is too big, will be long long anyway
auto c = 1000000 * 1000000;    // both operands int, overflow! Use 1000000LL
auto d = 0LL;                  // force zero to be long long for type deduction</code></pre>

<h2>When do you need LL?</h2>
<p>Any time you're doing arithmetic with constants that might exceed <code>int</code> range, slap <code>LL</code> on them. For example, when initialising a large constant:</p>
<pre><code>const long long MOD = 1000000007LL; // safe
const long long BIG = 1e18; // 1e18 is double, not integer! Use 1000000000000000000LL</code></pre>
<p>Also when you want to avoid implicit conversions in expressions with mixed types:</p>
<pre><code>long long ans = 0;
for (int i = 0; i < n; i++) {
    ans += 1LL * arr[i] * (arr[i] - 1) / 2; // 1LL ensures 64bit multiplication
}</code></pre>

<h2>Without LL: a subtle bug</h2>
<pre><code>long long x = 60 * 60 * 24 * 365; // 31,536,000, but wait: 60*60*24*365 = 31,536,000 fits in int? Actually 60*60*24*365 = 31,536,000, which fits.
// But if we increase to 60*60*24*365*100: overflow because intermediate is int.
long long y = 60 * 60 * 24 * 365 * 100LL; // one LL fixes it</code></pre>

<h2>What about ULL?</h2>
<p>If you need an unsigned 64bit constant, append <code>ULL</code>. For example, when dealing with bitmasks of size 64:</p>
<pre><code>unsigned long long mask = 1ULL << 63; // correct, because 1 << 63 is undefined for signed 32bit</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li><code>LL</code> tells the compiler: "treat this constant as long long".</li>
  <li>Use it to prevent overflow in constant expressions.</li>
  <li>Don't rely on the compiler to promote constants to long long  be explicit.</li>
  <li>For bitwise operations on 64bit values, use <code>ULL</code>.</li>
</ul>

<blockquote>The <code>LL</code> suffix is tiny but mighty. Omitting it has caused more midnight debugging sessions than many care to admit. Just develop the habbit of typing it.</blockquote>
`
},

{
  slug: "introduction-to-int128",
  title: "Introduction to the __int128_t Type",
  topic: "Numbers in C++",
  difficulty: "Medium",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "When even long long is not enough  the mysterious 128bit integer type available in g++.",
  tags: ["__int128", "128-bit", "large integers", "g++"],
  html: `
<p>Every once in a while you encounter a problem where the numbers are just obscenely huge  like 100-digit integers, or intermediate results bigger than 10<sup>18</sup>. <code>long long</code> tops out around 910<sup>18</sup>. But the g++ compiler offers a 128bit type, <code>__int128_t</code>, that can handle values up to about 10<sup>38</sup>. That's 170 undecillion  a number with 39 digits!</p>

<h2>What is __int128_t?</h2>
<p>It's a signed integer type that uses 128 bits of storage. The range is approximately:</p>
<pre><code>170,141,183,460,469,231,731,687,303,715,884,105,728
 to
 170,141,183,460,469,231,731,687,303,715,884,105,727</code></pre>
<p>That's roughly 1.710<sup>38</sup> to 1.710<sup>38</sup>. Pretty huge. There's also <code>__uint128_t</code> for the unsigned version.</p>

<h2>But it's not part of the C++ standard</h2>
<p><code>__int128_t</code> is a <strong>compiler extension</strong> specific to g++ (and some versions of Clang). It's not guaranteed to work on all judges, especialy older ones or those using different compilers. However, most modern cp platforms (Codeforces, AtCoder) use g++ and support it. Still, use it sparingly.</p>

<h2>Printing and reading __int128_t</h2>
<p>Here's the catch: the standard I/O streams (<code>cin</code>/<code>cout</code>) don't know how to handle <code>__int128_t</code> directly. If you try to print one, you'll get a compile error. You need to write a helper function:</p>
<pre><code>void print(__int128_t x) {
    if (x < 0) {
        putchar('-');
        x = -x;
    }
    if (x > 9) print(x / 10);
    putchar(x % 10 + '0');
}</code></pre>
<p>And to read, you'll likely read a string and parse it manualy. That's why many avoid <code>__int128</code> entirely and prefer using Python for problems needing gigantic integers.</p>

<h2>When is it really needed?</h2>
<p>Honestly, rarely. Most cp problems are designed so that <code>long long</code> suffices. But sometimes intermediate products during combinatorics or number theory can burst over <code>long long</code>. For example, multiplying two numbers around 10<sup>9</sup> gives 10<sup>18</sup>, which fits. But multiplying three such numbers overflows. If you need the exact integer without modulo for a comparison, <code>__int128</code> saves you.</p>

<h2>Example: safe multiplication overflow check</h2>
<pre><code>bool will_multiply_overflow(long long a, long long b) {
    __int128_t res = (__int128_t)a * b;
    return res > LLONG_MAX || res < LLONG_MIN;
}</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li><code>__int128_t</code> is g++ specific  not standard C++.</li>
  <li>You can't use <code>cin</code>/<code>cout</code> with it directly; write your own print function.</li>
  <li>Only use it when <code>long long</code> is genuinely insufficient.</li>
  <li>Keep a fallback solution using strings or Python if the judge doesn't support it.</li>
</ul>

<blockquote>Think of <code>__int128_t</code> as the nuclear option. It's there if you need it, but with great power comes great responsibility  and a bit of inconvenience.</blockquote>
`
},

{
  slug: "modular-arithmetic-basics-properties",
  title: "Modular Arithmetic: Basics and Properties",
  topic: "Numbers in C++",
  difficulty: "Medium",
  readMinutes: 9,
  date: "2026-05-08",
  excerpt: "Why modulo is everywhere in cp, how to compute with remainders, and the three magic properties that make it work.",
  tags: ["modulo", "arithmetic", "properties", "big numbers"],
  html: `
<p>You've seen "output answer modulo 10<sup>9</sup>+7" so many times. But why? And how do you compute efficiently without the numbers blowing up? Modular arithmetic is the secret sauce that keeps everything compact. Let's break it down.</p>

<h2>What is modulo?</h2>
<p>The expression <code>x mod m</code> (or <code>x % m</code> in C++) gives the remainder when <code>x</code> is divided by <code>m</code>. So 17 mod 5 = 2 because 17 = 3×5 + 2. The remainder always lies between 0 and m−1 (if x is positive; C++ negative % gives negative results, we'll handle that later).</p>

<h2>Why do we need it in cp?</h2>
<p>Answers can be astronomically huge. The number of ways to rearrrange a 100‑element array is 100! ≈ 9×10<sup>157</sup> – way beyond any standard type. But if we only need the remainder mod 1e9+7, we can compute using small numbers that fit in <code>int</code> or <code>long long</code>. The judge checks if your remainder is correct; they don't expect the full integer.</p>

<h2>The three golden properties</h2>
<p>The beauty of modular arithmetic is that you can take the remainder before or after operations and get the same result:</p>
<pre><code>(a + b) % m = ((a % m) + (b % m)) % m
(a − b) % m = ((a % m) − (b % m)) % m
(a × b) % m = ((a % m) × (b % m)) % m</code></pre>
<p>This means you can do <code>% m</code> after every single addition or multiplication, and the numbers stay within [0, m−1]. They never grow! That's the whole trick.</p>

<h2>Computing factorial modulo m</h2>
<pre><code>const int MOD = 1000000007;
long long fact = 1;
for (int i = 2; i <= n; i++) {
    fact = (fact * i) % MOD; // keep it small
}
cout << fact << "\\n";</code></pre>
<p>Even if n is 10<sup>5</sup>, fact never exceeds MOD.</p>

<h2>Handling subtraction and negative results</h2>
<p>In C++, if you do <code>a % m</code> and a is negative, the result is negative or zero. For instance, <code>-10 % 7</code> is <code>-3</code>. But we want the remainder in [0, m−1] (i.e., 4). So after any subtraction, do:</p>
<pre><code>int x = (a - b) % MOD;
if (x < 0) x += MOD;</code></pre>
<p>This trick guarantees a positive remainder. Always add <code>MOD</code> before modulo when you expect negatives.</p>

<h2>Modular division is different</h2>
<p>Notice I didn't list division. You can't just divide and take mod. For division, you need <strong>modular inverse</strong>, which we'll cover later under number theory. For now, just know that (a / b) % m is not (a % m) / (b % m). Forget that.</p>

<h2>Common moduli in cp</h2>
<ul>
  <li><strong>1,000,000,007 (1e9+7)</strong> – a prime, very common.</li>
  <li><strong>998,244,353</strong> – another prime, often used.</li>
  <li><strong>10<sup>9</sup>+9</strong> – also prime.</li>
  <li><strong>2<sup>64</sup></strong> – using unsigned long long overflow is effectively modulo 2<sup>64</sup> (but technically it's undefined behaviour in signed).</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Take modulo after every operation to keep numbers small.</li>
  <li>(a + b) % m = (a%m + b%m) % m, and same for − and ×.</li>
  <li>Division is not allowed in modular arithmetic without inverse.</li>
  <li>Always fix negative mod by adding MOD.</li>
</ul>

<blockquote>Mastering modular arithmetic turns impossibly large calculations into child's play. Once you internalise the three properties, you'll start sprinkling % MOD everywhere like hot sauce.</blockquote>
`
},

{
  slug: "calculating-factorials-modulo-m",
  title: "Calculating Factorials Modulo m",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-08",
  excerpt: "How to compute n! modulo a big prime without overflowing, using the modular trick you already know.",
  tags: ["factorial", "modulo", "big numbers", "math"],
  html: `
<p>Factorials grow incredibly fast. 10! is 3.6 million, 20! is 2.410<sup>18</sup>  already pushing the limits of a 64bit integer. 100! is astronomically huge. If you need to compute n! modulo some number m, you can't just compute n! first and then modulo. You have to modulo at every single multiplication step. Let's see how.</p>

<h2>The base case</h2>
<p>By definition, 0! = 1, and 1! = 1. So we start <code>long long fact = 1;</code>. Then loop from 2 up to n, multiplying and modding each iteration.</p>

<h2>Implementation</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    int n;
    cin >> n;
    const long long MOD = 1000000007;
    long long fact = 1;
    for (int i = 2; i <= n; i++) {
        fact = (fact * i) % MOD;
    }
    cout << fact << "\\n";
    return 0;
}</code></pre>
<p>That's it. Every time we multiply, the result is taken modulo <code>MOD</code>, so <code>fact</code> never exceeds <code>MOD-1</code>. Even for n = 10<sup>6</sup>, this loop runs fine.</p>

<h2>Why not compute n! first then % MOD?</h2>
<p>Because n! would have thousands of digits. C++ can't hold that. Even Python would struggle with memory and time for extremely large n. The iterative modulo approach keeps numbers small and fast.</p>

<h2>Precomputing factorials for many queries</h2>
<p>If your problem asks for factorial of different numbers multiple times, precompute an array <code>fact[0..MAX]</code> once and answer each query in O(1):</p>
<pre><code>const int MAX = 200000;
long long fact[MAX+1];
fact[0] = 1;
for (int i = 1; i <= MAX; i++) {
    fact[i] = (fact[i-1] * i) % MOD;
}
// later: cout << fact[query] << "\\n";</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li>0! = 1, not 0.</li>
  <li>Use <code>long long</code> for intermediate product to avoid overflow before modulo.</li>
  <li>Take <code>% MOD</code> after every multiplication, not only at the end.</li>
  <li>Precompute if you need many factorial values  it's O(MAX) once, O(1) per query.</li>
</ul>

<blockquote>Factorials are a building block for combinatorics, DP, and probability. Mastering the modular version early will pay off tenfold later.</blockquote>
`
},

{
  slug: "handling-negative-remainders-cpp",
  title: "Handling Negative Remainders in C++",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "C++ modulo operator behaves badly with negative numbers  here is the oneline fix you need to know.",
  tags: ["modulo", "negative", "remainder", "fix"],
  html: `
<p>If you've ever written <code>cout << -10 % 7;</code> and expected <code>4</code>, you were in for a shock. C++ gives you <code>-3</code>. That's because the <code>%</code> operator in C++ returns a remainder with the same sign as the left operand (the dividend). But in mathematics, we usually want the remainder to be in the range <code>[0, m-1]</code>. Let's see why this matters and how to fix it.</p>

<h2>The problem illustrated</h2>
<pre><code>int a = -10;
int m = 7;
int r = a % m;
cout << r << "\\n"; // prints -3</code></pre>
<p>In mathematical terms: -10 = (-2)*7 + 4. So the positive remainder is 4. But C++ chooses truncation towards zero: -10 = (-1)*7 + (-3). So it returns -3.</p>

<h2>When does this bite you?</h2>
<p>Any time you do modular subtraction. For example, in DP where you have <code>dp[i] = (dp[i-1] - something) % MOD</code>. If <code>dp[i-1]</code> was smaller than <code>something</code>, the result is negative, and <code>% MOD</code> makes it even more negative. Then later additions may still be negative, leading to wrong answers.</p>

<h2>The universal fix</h2>
<pre><code>int fix_mod(int x, int m) {
    x %= m;
    if (x < 0) x += m;
    return x;
}</code></pre>
<p>Or inline:</p>
<pre><code>int r = (a - b) % MOD;
if (r < 0) r += MOD;</code></pre>
<p>Some people write a oneliner:</p>
<pre><code>int r = ((a - b) % MOD + MOD) % MOD;</code></pre>
<p>The extra <code>+MOD</code> ensures the value is positive before the final modulo. This works but can be slightly overkill.</p>

<h2>When is the native behaviour okay?</h2>
<p>If you only do additions and multiplications and always mod positive numbers, it's fine. Also, some bitwise operations rely on the native behaviour. But in cp, 99% of the time you want the mathematical positive remainder.</p>

<h2>Negative mod with long long</h2>
<p>Same rules apply. Just use <code>fix_mod</code> for <code>long long</code> too.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>In C++, <code>a % m</code> has the same sign as <code>a</code>.</li>
  <li>Always apply <code>if (r < 0) r += m;</code> after subtractions in modular arithmetic.</li>
  <li>The fix is cheap and prevents mysterious negative outputs.</li>
  <li>Don't rely on <code>%</code> to do what you think it does  test it!</li>
</ul>

<blockquote>C++s modulo operator is like a mischievous gremlin. Feed it negative numbers and it bites. Tame it with that simple <code>if</code> statement and sleep soundly.</blockquote>
`
},

{
  slug: "floating-point-numbers-double-long-double",
  title: "Floating Point Numbers: double vs long double",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-08",
  excerpt: "Understanding how decimals are stored in C++, the difference between float, double, and long double, and when to use each.",
  tags: ["floating point", "double", "long double", "precision"],
  html: `
<p>Not every number is a nice integer. For geometry, probability, or physics problems, you need decimal numbers. C++ provides several floating point types, and picking the right one can be the difference between a correct answer and a precision error.</p>

<h2>The three musketeers</h2>
<ul>
  <li><strong>float</strong>  32bit, about 7 decimal digits of precision. Almost never used in cp; it's too imprecise.</li>
  <li><strong>double</strong>  64bit, about 1516 decimal digits of precision. The standard choice. All the maths functions (<code>sqrt</code>, <code>sin</code>, etc.) work with <code>double</code>.</li>
  <li><strong>long double</strong>  80bit (on g++), about 1819 decimal digits. Slightly more precise but slower, and not all judges support it uniformly. Use only if you really need the extra bits.</li>
</ul>

<h2>Why not just use long double always?</h2>
<p>Because it may be emulated in software on some platforms, making it slower. Also, printing it might need different format specifiers (<code>%Lf</code> in C). Most of the time, <code>double</code> is enough.</p>

<h2>Precision is not the same as accuracy</h2>
<p>A <code>double</code> can hold huge numbers (up to 10<sup>308</sup>) but only about 15 significant digits. That means if you have a number like 12345678901234567890, double will store it approximatly as 1.2345678901234567e19, losing the last few digits. For cp, as long as you compare with epsilon or print with limited precision, it's fine.</p>

<h2>Common pitfalls</h2>
<ul>
  <li>Never use <code>==</code> to compare two floating point numbers. Use an epsilon comparison.</li>
  <li>Be aware that some decimal values cannot be represented exactly in binary (like 0.1). Tiny errors accumulate.</li>
  <li>Input reading: <code>cin</code> handles <code>double</code> fine; <code>scanf("%lf")</code> for double, <code>scanf("%Lf")</code> for long double.</li>
</ul>

<h2>When to use double vs integer</h2>
<p>If the problem involves decimals at any point, use <code>double</code>. But if the problem asks for integer results (like counting something modulo a prime), stick to integers. Mixing them can cause subtle bugs.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Default choice: <code>double</code>.</li>
  <li>Use <code>long double</code> only if you need extreme precision and know the judge supports it.</li>
  <li>Floating point numbers sacrifice perfect accuracy for huge range  treat them with care.</li>
</ul>

<blockquote>Floats are like that friend who's always "around there" but never exact. Learn to live with their imprecision and they'll serve you well in geometry and probability problems.</blockquote>
`
},

{
  slug: "printing-floats-printf-precision",
  title: "Printing Floats with printf Precision",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "How to output decimal numbers with exactly the right number of decimal places  because the judge cares about that a lot.",
  tags: ["printf", "precision", "double", "output"],
  html: `
<p>When the problem says "print the answer with exactly 6 decimal places", they mean it. A missing zero at the end can get you Wrong Answer. Let's learn to format floating point output like a pro.</p>

<h2>The printf way (clean and controlable)</h2>
<pre><code>double pi = 3.14159265358979;
printf("%.2f\\n", pi);  // 3.14
printf("%.6f\\n", pi);  // 3.141593 (rounded!)
printf("%.10f\\n", pi); // 3.1415926536</code></pre>
<p>The format specifier <code>%.nf</code> means: print with n digits after the decimal point. It will round the last digit automatically.</p>

<h2>Printing with cout</h2>
<p>If you prefer <code>cout</code>, you'll need a couple of manipulators:</p>
<pre><code>#include &ltiomanip&gt // but bits/stdc++.h already includes it
double pi = 3.14159265358979;
cout << fixed << setprecision(6) << pi << "\\n"; // 3.141593</code></pre>
<p><code>fixed</code> forces the number to be printed in normal decimal notation (not scientific). <code>setprecision(n)</code> sets the number of digits after the decimal.</p>

<h2>Avoid scientific notation</h2>
<p>Without <code>fixed</code>, large or small numbers might be printed in scientific notation like <code>1.23e+10</code>, which the judge won't accept. Always use <code>fixed</code> when the output format says decimal places.</p>

<h2>Precision for long double</h2>
<p>For <code>long double</code>, <code>printf</code> uses <code>"%Lf"</code> with the same precision specifier: <code>printf("%.9Lf\\n", ldpi);</code>. For <code>cout</code>, <code>setprecision</code> works the same way; just make sure the variable is <code>long double</code>.</p>

<h2>Rounding behaviour</h2>
<p>Both <code>printf</code> and <code>cout</code> use "round half to even" (banker's rounding) by default. So 2.5 might round to 2, not 3, in some cases. If you absolutley need a specific rounding direction, you'll need additional logic. But for most problems, the default rounding is fine.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Always match the output format exactly  including trailing zeros.</li>
  <li>Use <code>printf("%.Nf")</code> or <code>cout << fixed << setprecision(N)</code>.</li>
  <li>Add <code>fixed</code> to cout to disable scientific notation.</li>
  <li>Precision refers to digits <em>after</em> the decimal point, not total significant digits.</li>
</ul>

<blockquote>The judge doesn't care that 3.14 and 3.140000 are the same number mathematically  if they ask for 6 decimals and you give 2, you lose. Precision printing is nonnegotiable.</blockquote>
`
},

{
  slug: "floating-point-equality-epsilon",
  title: "Floating Point Equality Comparison with Epsilon",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "Why you should never compare floats with == and how to do it correctly using a tiny epsilon value.",
  tags: ["floating point", "epsilon", "comparison", "precision"],
  html: `
<p>Here's a classic pitfall: you write <code>if (x == 1.0)</code> where <code>x</code> was computed as <code>0.1 + 0.1 + ...</code> ten times. Somehow, <code>x</code> ends up as 0.99999999999999989 and the condition fails. That's because floating point numbers are binary approximations, and some decimal numbers cannot be represented exactly. The fix: always compare with a tolerance, called epsilon.</p>

<h2>The golden rule</h2>
<p>Never use <code>==</code> on floats. Instead, check if the absolute difference is very small:</p>
<pre><code>double eps = 1e-9; // 0.000000001
if (abs(a - b) < eps) {
    // a and b are effectively equal
}</code></pre>
<p>The value of <code>eps</code> depends on the problem. 1e-9 is a common safe choice for double. For long double, you might use 1e-12 or 1e-15.</p>

<h2>Why does this happen?</h2>
<p>Computers store numbers in binary. Just like 1/3 cannot be written exactly in decimal (0.33333...), simple numbers like 0.1 have an infinite repeating representation in binary. When you do arithmetic, these tiny approximations accumulate. So the result of a calculation that should matematically be 1.0 might be 0.9999999999999999 or 1.0000000000000002.</p>

<h2>Comparing to zero</h2>
<p>Similarly, don't check <code>if (x == 0.0)</code>; use <code>if (abs(x) < eps)</code>.</p>

<h2>What about &lt; and &gt;</h2>
<p>Lessthan and greaterthan comparisons are generally safe because they are not as affected by tiny errors. However, if a value is supposed to be exactly 0.5 and it's 0.500000000000001, then <code>if (x < 0.5)</code> will be false  perhaps incorrectly. In critical cases, you might want to use epsilon there too: <code>if (x < 0.5 - eps)</code> to be safe.</p>

<h2>Epsilon for equality in geometry</h2>
<p>In geometry problems, coordinates are often integers, but distances and intersections involve square roots and divisions. Epsilon comparisons become crucial. A common value is 1e-9 for double and 1e-12 for long double.</p>

<h2>When can you skip epsilon?</h2>
<p>If the problem states that the inputs and outputs are integers and all operations are integeronly, you should stick to integers. Also, if you're only using floating point for output (like printing a rounded value), you might only need epsilon in internal logic, not in printing.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Never use <code>==</code> on floats  always <code>abs(a - b) < eps</code>.</li>
  <li>Choose epsilon based on required precision: 1e-9 is typical for double.</li>
  <li>Floating point errors are not bugs  they're a fundamental limitation of binary representation.</li>
</ul>

<blockquote>Embracing epsilon is a rite of passage for every cp coder. Once you accept that floats are "close enough", a whole new world of geometry and numeric problems opens up.</blockquote>
`
},

{
  slug: "integers-exactly-in-floating-point",
  title: "Representing Integers Exactly in Floating Point",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "Belive it or not, double can hold whole numbers exactly up to a huge limit  learn the rule so you can use it safely.",
  tags: ["double", "integers", "precision", "representation"],
  html: `
<p>We just said floating point numbers are imprecise, but there's a twist: small integers can be stored <strong>exactly</strong> in <code>double</code>. Knowing where the boundry is can save you from unnecessary <code>long long</code> gymnastics.</p>

<h2>The magic number: 2<sup>53</sup></h2>
<p>A 64bit <code>double</code> uses 53 bits to store the mantissa (the actual digits). That means it can exactly represent all integers whose absolute value is less than or equal to <strong>2<sup>53</sup></strong>, which is roughly <code>9,007,199,254,740,992</code> (9e15). So any integer between 9e15 and 9e15 is stored without any loss.</p>
<pre><code>double d = 123456789012345; // exact! fits in 53 bits
cout << fixed << setprecision(0) << d << "\\n"; // prints exactly 123456789012345</code></pre>

<h2>Above that limit, things get wobbly</h2>
<p>Try storing 2<sup>53</sup> + 1 in a double:</p>
<pre><code>double d = 9007199254740993; // 2^53 + 1
cout << fixed << setprecision(0) << d << "\\n"; // might print 9007199254740992 -> wrong!</code></pre>
<p>Because the double can't represent odd numbers above 2<sup>53</sup>, it rounds to the nearest representable number. For large numbers, <code>double</code> acts like a sieve: only some integers pass through, the rest are approximated.</p>

<h2>When is this usefull in cp?</h2>
<ul>
  <li>When you need to do integer arithmetic but also need square roots or divisions that produce decimals. You can cast an <code>int</code> to <code>double</code>, do your operation, and cast back  as long as the intermediate value stays under 2<sup>53</sup>.</li>
  <li>In geometry problems, coordinates are often up to 10<sup>9</sup>; storing them as <code>double</code> is fine because 10<sup>9</sup> is way below 2<sup>53</sup>.</li>
</ul>

<h2>Comparison with long long</h2>
<p>A <code>long long</code> can hold up to ~9e18, which is larger than 2<sup>53</sup> (~9e15), but <code>long long</code> can't hold decimals. So they are used for different purposes. Don't use <code>double</code> for exact integer arithmetic if numbers exceed 2<sup>53</sup>.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Integers  2<sup>53</sup> are perfectly represented in <code>double</code>.</li>
  <li>Beyond that, <code>double</code> loses precision and starts rounding to multiples of 2, 4, etc.</li>
  <li>Use <code>long long</code> for exact large integer counting; use <code>double</code> only when decimal operations are unavoidable.</li>
  <li>Don't be fooled: <code>double</code> can hold integers, but it's not a replacement for <code>long long</code> in modular arithmetic.</li>
</ul>

<blockquote>Floats aren't evil; they just have strict boundries. Below 2<sup>53</sup>, they're your best friend; above that, they become a guessing game. Know the limit and you'll never be suprised.</blockquote>
`
},

{
  slug: "shortening-code-with-typedef",
  title: "Shortening Code with typedef (ll, vi, pi)",
  topic: "Coding Style",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "How to make long type names shorter using typedef  the first step to writing lite, fast cp code.",
  tags: ["typedef", "shorten", "long long", "vector", "pair"],
  html: `
<p>In competive programming, typing speed matters. Writing <code>long long</code> every time you declare a variable is tedious. The <code>typedef</code> keyword lets you create aliases for existing types. Almost every cp'er uses it to shrink their code.</p>

<h2>The most common typedefs</h2>
<pre><code>typedef long long ll;
typedef vector&ltint&gt vi;
typedef pair&ltint, int&gt pi;
typedef vector&ltpi&gt vpi;</code></pre>
<p>Now you can write:</p>
<pre><code>ll a = 123456789123LL;
vi arr = {1, 2, 3};
pi point = {5, 10};
vpi points;
points.push_back({1, 2});</code></pre>
<p>Much cleaner! This saves dozens of keystrokes over a 2hour contest.</p>

<h2>Modern alternative: using</h2>
<p>In modern C++ (C++11 and later), you can also use the <code>using</code> keyword:</p>
<pre><code>using ll = long long;
using vi = vector&ltint&gt;</code></pre>
<p>Both <code>typedef</code> and <code>using</code> do the same thing. <code>using</code> is a bit more readable, especially for complex types. You can pick either; they compile to identical code.</p>

<h2>More complex typedefs</h2>
<p>You can alias anything. For example, a vector of vectors (2D array):</p>
<pre><code>typedef vector&ltvi&gt vvi;  // or: using vvi = vector&ltvi&gt;
vvi grid(10, vi(10, 0)); // 10x10 grid of zeros</code></pre>
<p>Or a map from int to vector of strings:</p>
<pre><code>typedef map&ltint, vector&ltstring&gt&gt mivs;
mivs m; // much shorter than the full type</code></pre>

<h2>When to typedef</h2>
<p>Typedef anything you use more than two or three times in a program. In cp, <code>ll</code> is basically mandatory. Many people also typedef <code>vector&ltll&gt</code> to <code>vl</code>, <code>pair&ltll, ll&gt</code> to <code>pll</code>, etc.</p>

<h2>Potential pitfall: readability</h2>
<p>If you go overboard and typedef everything to single letters, your code might become unreadable to others. Strike a balance. But in cp, where only you and the judge read it, short is usually fine.</p>

<h2>Things to rememeber</h2>
<ul>
  <li><code>typedef</code> creates an alias for a type.</li>
  <li>Use <code>typedef long long ll</code> in every template.</li>
  <li>Also alias <code>vector&ltint&gt</code> to <code>vi</code> and <code>pair&ltint,int&gt</code> to <code>pi</code>.</li>
  <li>The modern <code>using</code> syntax is equivalent and sometimes clearer.</li>
</ul>

<blockquote>Shorter code is not just about laziness  it reduces visual clutter, making the logic easier to see. Start with <code>typedef long long ll;</code> and you've already improved your coding speed by 10%.</blockquote>
`
},

{
  slug: "defining-macros-with-define-in-cpp",
  title: "Defining Macros with #define in C++",
  topic: "Coding Style",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-08",
  excerpt: "How to use #define to create shortcuts, constants, and minifunctions  a powerfull but dangerous tool.",
  tags: ["macros", "define", "preprocessor", "shorten"],
  html: `
<p>After <code>typedef</code>, the next weapon in the codeshortening arsenal is <code>#define</code>. This is a preprocessor directive that does text substitution before the compiler even sees your code. It can make loops, pair accesses, and common operations much shorter  but it can also cause nasty bugs if not used carefully.</p>

<h2>How #define works</h2>
<p>The compiler runs a "preprocessor" that scans your code and replaces every occurrence of the macro with its definition. It's pure textual substitution  no type checking, no scope, no safety.</p>
<pre><code>#define MAX 100000
int arr[MAX]; // becomes int arr[100000]; after preprocessing</code></pre>

<h2>Simple constant macros</h2>
<pre><code>#define MOD 1000000007
#define PI 3.14159265358979
#define INF 1e18</code></pre>
<p>Now you can write <code>result % MOD</code> instead of <code>result % 1000000007</code>. Magic numbers become named, which also helps readability.</p>

<h2>Functionlike macros</h2>
<pre><code>#define SQ(x) (x)*(x)
cout << SQ(5) << "\\n"; // 25</code></pre>
<p>But beware! Because it's textual substitution, <code>SQ(3+2)</code> becomes <code>(3+2)*(3+2)</code> which is correct. But if you wrote the macro without parentheses around the parameters, disaster:</p>
<pre><code>#define BAD_SQ(x) x*x
cout << BAD_SQ(3+2) << "\\n"; // becomes 3+2*3+2 = 3+6+2 = 11, NOT 25!</code></pre>
<p>Always wrap macro parameters and the entire macro expression in parentheses.</p>

<h2>Macros for loops</h2>
<p>A classic loop macro:</p>
<pre><code>#define FOR(i, n) for (int i = 0; i < n; i++)
FOR(i, 10) {
    cout << i << " ";
}</code></pre>
<p>This cuts down typing alot. We'll cover more loop macros in a later tutorial.</p>

<h2>Risks of macros</h2>
<ul>
  <li>They ignore scope  can conflict with variable names.</li>
  <li>They have no type checking  passing wrong types leads to confusing errors.</li>
  <li>Multiple evaluation: if a macro repeats an argument, like <code>#define MAX(a,b) ((a)>(b)?(a):(b))</code>, calling <code>MAX(x++, y++)</code> will increment x or y twice!</li>
</ul>

<h2>When to use macros in cp</h2>
<p>Use them for simple constants, short loop abbreviations, and pair member access shortcuts (like <code>F</code> for <code>first</code>). Avoid overly complex macros that act like functions  inline functions or <code>auto</code> lambdas are safer and just as fast.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Macros are text substitution  they don't know C++.</li>
  <li>Always wrap parameters in parentheses: <code>#define F(x) ((x)*(x))</code>.</li>
  <li>They can lead to double evaluation bugs.</li>
  <li>Use sparingly; not every shortcut is worth the risk.</li>
</ul>

<blockquote>Macros are like a sharp knife: incredibly usefull when handled correctly, but easy to cut yourself. Once you've been bitten by a missing parenthesis, you'll never forget it.</blockquote>
`
},

{
  slug: "using-macros-for-f-s",
  title: "Using Macros for F(first) and S(second)",
  topic: "Coding Style",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-08",
  excerpt: "How a tiny #define can save you endless typing when accessing elements of a pair or a map iterator.",
  tags: ["macros", "first", "second", "pair"],
  html: `
<p>Working with <code>std::pair</code> is constant in cp  for coordinates, events, or storing two related values. Accessing <code>.first</code> and <code>.second</code> can become tedious. The solution: two simple macros.</p>

<h2>The classic pair macros</h2>
<pre><code>#define F first
#define S second</code></pre>
<p>Now, instead of writing:</p>
<pre><code>int x = p.first + q.second;
v.push_back(make_pair(y, x));
sort(v.begin(), v.end(), [](pair&ltint,int&gt a, pair&ltint,int&gt b) {
    return a.first < b.first;
});</code></pre>
<p>You write:</p>
<pre><code>int x = p.F + q.S;
v.PB(MP(y, x)); // if you also have PB and MP macros
sort(v.begin(), v.end(), [](pi a, pi b) {
    return a.F < b.F;
});</code></pre>
<p>It's a tiny change, but it saves a ton of typing across hundreds of lines. The code becomes more compact and easier to scan.</p>

<h2>What about maps?</h2>
<p>When iterating over a <code>map</code>, each element is a <code>pair&ltconst key_type, value_type&gt</code>. You can use <code>F</code> and <code>S</code> there too:</p>
<pre><code>map&ltstring, int&gt freq;
for (auto p
req) {
    cout << p.F << " appears " << p.S << " times\\n";
}</code></pre>

<h2>Possible pitfalls</h2>
<ul>
  <li>If you later use <code>F</code> as a variable name, it will be replaced by the macro. So avoid naming variables <code>F</code> or <code>S</code>. Use <code>first</code> and <code>second</code> as variable names only without macros.</li>
  <li>Don't use these macros in header files or code that others might import, as it alters their code too.</li>
</ul>

<h2>Together with other macros</h2>
<p>These are usually combined with <code>PB</code> (push_back) and <code>MP</code> (make_pair):</p>
<pre><code>#define PB push_back
#define MP make_pair
v.PB(MP(1, 2));
cout << v[0].F << " " << v[0].S << "\\n";</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li><code>#define F first</code> and <code>#define S second</code> are universal shortcuts in cp.</li>
  <li>They work on pairs, map entries, and any type with <code>.first</code>/<code>.second</code>.</li>
  <li>Avoid naming your own variables <code>F</code> or <code>S</code> after defining these macros.</li>
  <li>Combine with <code>PB</code> and <code>MP</code> for maximum laziness  I mean, productivity.</li>
</ul>

<blockquote>Some say these macros are ugly. I say they're beautiful. In the heat of a contest, every saved character brings you closer to the finish line.</blockquote>
`
},

{
  slug: "loop-macros-rep-i-a-b",
  title: "Loop Macros: REP(i,a,b) for Cleaner Code",
  topic: "Coding Style",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "Define a macro that makes writing for loops a breeze  REP(i, a, b) is the most beloved cp shortcut.",
  tags: ["macros", "loops", "REP", "for loop", "shorten"],
  html: `
<p>How many times do you write <code>for (int i = 0; i &lt n; i++)</code>? Hundreds per contest, maybe. That's a lot of boilerplate. The macro <code>REP(i, a, b)</code> compresses that into just a few characters. Let's see how it's defined and used.</p>

<h2>The definition</h2>
<pre><code>#define REP(i, a, b) for (int i = a; i &lt= b; i++)</code></pre>
<p>This macro creates a loop variable <code>i</code> that starts at <code>a</code>, runs while <code>i &lt= b</code>, and increments by 1 each time. So <code>REP(i, 1, n)</code> is a common way to iterate from 1 to n inclusive.</p>

<h2>Examples</h2>
<pre><code>// print numbers 1 to 10
REP(i, 1, 10) {
    cout << i << " ";
}

// fill an array
REP(i, 0, n-1) {
    cin >> arr[i];
}

// nested loops
REP(i, 1, n) {
    REP(j, 1, m) {
        dp[i][j] = ...;
    }
}</code></pre>

<h2>Variations</h2>
<p>Some programmers use slightly different macros:</p>
<ul>
  <li><code>#define REP(i, n) for (int i = 0; i &lt n; i++)</code>  when you always start from 0.</li>
  <li><code>#define REP1(i, n) for (int i = 1; i &lt= n; i++)</code>  for 1based loops.</li>
  <li><code>#define FOR(i, a, b) for (int i = a; i &lt b; i++)</code>  halfopen interval [a, b).</li>
</ul>
<p>Pick whichever you're comftable with and stick to it.</p>

<h2>Why inclusive bounds (a to b)?</h2>
<p>In cp, many problems are 1indexed. Using <code>&lt= b</code> saves you from writing <code>i &lt n+1</code> or remembering to add 1. It feels more natural.</p>

<h2>Dangers of loop macros</h2>
<p>If you use <code>REP(i, 1, 3*n)</code>, the condition becomes <code>i &lt= 3*n</code>. That's fine. But if you write <code>REP(i, 1, n/2)</code>, the macro becomes <code>for (int i = 1; i &lt= n/2; i++)</code>. That's still okay because the division is evaluated on each iteration, but it's not a problem. The only real danger is forgetting the parentheses in the definition (but in our case we don't need them because <code>a</code> and <code>b</code> are just expressions, not arguments of a functionlike macro).</p>
<p>Still, one must be careful: if <code>b</code> is a function call like <code>getSize()</code>, it will be called on each iteration. That could be inefficient. Usually it's fine.</p>

<h2>Combining with other macros</h2>
<p>With <code>REP</code>, your code can become very compact:</p>
<pre><code>#define REP(i, a, b) for (int i = a; i &lt= b; i++)
#define F first
#define S second
#define PB push_back
#define MP make_pair
int main() {
    int n; cin >> n;
    vector&ltpi&gt events;
    REP(i, 1, n) {
        int l, r; cin >> l >> r;
        events.PB(MP(l, r));
    }
    sort(events.begin(), events.end(), [](pi a, pi b) { return a.F &lt b.F; });
    // ...
}</code></pre>
<p>That's the dream  all set up in five macros, and your code flows without any visual clutter.</p>

<h2>Things to rememeber</h2>
<ul>
  <li><code>REP(i, a, b)</code> runs from a to b inclusive.</li>
  <li>You can define variations for 0based or halfopen loops.</li>
  <li>Loop macros save a huge amount of typing over a contest.</li>
  <li>Test your macros on a small program first to make sure parentheses aren't missing.</li>
</ul>

<blockquote>The REP macro is a love letter to lazy programmers. Write it once, and then forget <code>for (int i = ...</code> exists. Your keyboard will thank you.</blockquote>
`
},

{
  slug: "avoiding-pitfalls-macro-parameters",
  title: "Avoiding Pitfalls with Macro Parameters",
  topic: "Coding Style",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-08",
  excerpt: "Why macros can betray you when you pass expressions as arguments  and the simple fix that saves you.",
  tags: ["macros", "define", "pitfalls", "parentheses"],
  html: `
<p>We just learned how powerfull macros are for shortening code. But they have a dark side. Because macros do blind text substitution, passing complex expresions can lead to disasterous results. Let's look at the common traps and how to avoid them.</p>

<h2>The classic trap: missing parentheses</h2>
<pre><code>#define SQ(a) a*a
cout << SQ(3+3) << "\\n"; // Expect 36, but prints 15!</code></pre>
<p>What happened? The preprocessor replaced <code>SQ(3+3)</code> with <code>3+3*3+3</code>. C++ operator precedence then evaluated this as <code>3 + (3*3) + 3 = 3 + 9 + 3 = 15</code>. The multiplication binds tighter than addition, so the squaring only hapened to the second 3.</p>
<p>The fix: always wrap the macro's parameters and the entire expression in parentheses.</p>
<pre><code>#define SQ(a) ((a)*(a))
cout << SQ(3+3) << "\\n"; // ((3+3)*(3+3)) = 6*6 = 36. Correct!</code></pre>

<h2>The double evaluation trap</h2>
<p>Suppose you write a macro to return the maximum of two numbers:</p>
<pre><code>#define MAX(a,b) ((a)>(b)?(a):(b))
int x = 5, y = 3;
cout << MAX(x++, y++) << "\\n"; // looks innocent?</code></pre>
<p>After substitution: <code>((x++)>(y++)?(x++):(y++))</code>. If x > y, x is incremented twice, y once. If y > x, y is incremented twice. This leads to very confusing bugs. The lesson: don't use macros for things that might have side effects (increment, function calls, etc.). In modern C++, <code>inline</code> functions or <code>std::max</code> are safer.</p>

<h2>Macro name collisions</h2>
<p>Since macros don't respect namespaces or scoping, your macro might overwrite a variable name or a standard library name. For example, <code>#define max(a,b)</code> would clash with <code>std::max</code>. Or if you name your macro <code>left</code>, it will replace any variable called <code>left</code>. To avoid this, some programmers use long, distinctive macro names, but in cp short names are usually fine as long as you remember not to use them as variables.</p>

<h2>Multistatement macros</h2>
<p>When a macro contains multiple statments, wrap it in a <code>do { ... } while(0)</code> block so it acts as a single statement.</p>
<pre><code>#define CHECK(x) do { if ((x) < 0) cout << "error\\n"; } while(0)
if (flag) CHECK(value); else ... // works correctly now</code></pre>
<p>Without <code>do...while(0)</code>, the <code>if</code> / <code>else</code> might attach incorrectly.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Always wrap macro parameters and the whole result in parentheses: <code>#define F(a) ((a)*(a))</code>.</li>
  <li>Never use macros with arguments that have side effects (like <code>x++</code> or function calls).</li>
  <li>For multistatement macros, use <code>do { ... } while(0)</code> to avoid breaking control flow.</li>
  <li>Prefer <code>inline</code> functions or <code>constexpr</code> over functionlike macros when possible.</li>
</ul>

<blockquote>Macros are like a wild horse: powerfull but unpredictable. Treat them with respect, wrap everything in parentheses, and they'll serve you well. Ignore these rules and they'll buck you off at the worst possible moment.</blockquote>
`
},

{
  slug: "sum-formulas-natural-numbers",
  title: "Sum Formulas: 1+2+...+n and Closed Forms",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "The most famous sum formula in all of cp  how young Gauss solved it and why you'll use it constantly.",
  tags: ["sum", "formula", "Gauss", "O(1)", "math"],
  html: `
<p>If there's one math formula you absolutly must memorise for cp, it's this: the sum of the first n integers. You could write a loop, but why would you when it takes O(1) with a formula? Meet the "Gauss trick".</p>

<h2>The formula</h2>
<pre><code>1 + 2 + 3 + ... + n = n * (n + 1) / 2</code></pre>
<p>Legend says Carl Friedrich Gauss discovered this when he was around 10 years old. His teacher asked the class to add all numbers from 1 to 100, expecting them to be busy for a while. Gauss notised that you can pair up numbers from the ends: 1+100=101, 2+99=101, 3+98=101... there are 50 such pairs, so total = 50*101 = 5050. Genius.</p>

<h2>Why this is so importent</h2>
<p>In cp, you often need to compute sums over ranges, or count pairs, or analyze loops. Knowing that 1..n sums to n(n+1)/2 lets you replace an O(n) loop with a single expression. For n = 10<sup>9</sup>, the loop would TLE; the formula gives the answer instantly.</p>
<pre><code>long long n; cin >> n;
cout << n * (n + 1) / 2 << "\\n";</code></pre>

<h2>Be carefull of overflow</h2>
<p>If n is up to 10<sup>9</sup>, n*(n+1) is about 10<sup>18</sup>, which fits in <code>long long</code>. Use <code>long long</code> for the calculation. If n is even larger (like 10<sup>18</sup>), the product might exceed 64bit, but that's rare in cp.</p>

<h2>General closedform formulas</h2>
<p>For any sum of the form <code>_{x=1}^{n} x^k</code>, there's a polynomial formula of degree k+1. For k=1 we just saw; for k=2 it's n(n+1)(2n+1)/6 (next tutorial); for higher powers there are formulas too, but they're less common. The key takeaway: if you see a sum over a range, think "closed form" before looping.</p>

<h2>Example: counting pairs</h2>
<p>How many unordered pairs (i, j) with 1  i < j  n? That's exactly (n choose 2) = n*(n-1)/2. This is the Gauss formula shifted. You'll see this in combinatorics and graph problems all the time.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Sum of 1..n = n*(n+1)/2. Memorise it! It's the single most usefull math formula in cp.</li>
  <li>Always use <code>long long</code> to avoid overflow.</li>
  <li>Look for symetry: many sums can be reduced to this base formula.</li>
</ul>

<blockquote>Gauss saved himself an hour of boring addition; you can save yourself a Time Limit Exceeded. When in doubt, think: can I replace this loop with n*(n+1)/2?</blockquote>
`
},

{
  slug: "sum-of-squares-formula",
  title: "Sum of Squares Formula Derivation",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "The formula for 1+2+...+n  less common than the Gauss sum, but still shows up in variance and geometry problems.",
  tags: ["sum of squares", "formula", "math", "closed form"],
  html: `
<p>After the simple sum, the next formula to tuck in your pocket is the sum of squares. You won't use it as often as n(n+1)/2, but when you need it, you'll be glad you memorised it.</p>

<h2>The formula</h2>
<pre><code>1 + 2 + 3 + ... + n = n * (n + 1) * (2n + 1) / 6</code></pre>
<p>So for n=5: 1+4+9+16+25 = 55. The formula gives 5*6*11/6 = 330/6 = 55. Matches.</p>

<h2>Where it comes from (quick intuition)</h2>
<p>The sum of squares can be proven by induction, but a nice geometric proof uses pyramids of cubes. Or you can remember that it's a cubic polynomial (degree 3) because we're summing a quadratic term. The coefficients can be found by solving a few equations. But you don't need the proof  just remember the formula.</p>

<h2>When does it appear in cp?</h2>
<ul>
  <li>Problems about variance or standard deviation: variance = (sum of squares)/n - (mean).</li>
  <li>Some geometry: squared distances often involve sums of squares.</li>
  <li>Counting problems: for example, the number of pairs (a,b) with certain properties might involve squares.</li>
  <li>Loop analysis: nested loops where something runs i times.</li>
</ul>

<h2>Overflow warning (again)</h2>
<p>n up to 10<sup>6</sup> gives n  10<sup>18</sup>, which fits in <code>long long</code>. For n = 10<sup>9</sup>, n = 10<sup>27</sup>  way too big. But then you'd usually need modulo arithmetic. So use <code>long long</code> with modulo if needed.</p>
<pre><code>const long long MOD = 1e9+7;
long long sum_squares_mod(long long n) {
    // (n*(n+1)*(2n+1)/6) % MOD, but division requires modular inverse
    // We can do: n%MOD * ((n+1)%MOD) %MOD * ((2*n+1)%MOD) %MOD * inv6 %MOD
    // But that's for later.
}</code></pre>

<h2>Other common sum formulas</h2>
<ul>
  <li>Sum of cubes: 1+2+...+n = [n(n+1)/2] (square of the Gauss sum!).</li>
  <li>Sum of first n even numbers: 2+4+...+2n = n(n+1).</li>
  <li>Sum of first n odd numbers: 1+3+...+2n-1 = n.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Sum of squares = n(n+1)(2n+1)/6.</li>
  <li>It's a cubic formula, so use big integer types.</li>
  <li>Don't confuse with the sum of first n numbers (which is quadratic).</li>
  <li>Sum of cubes is the square of the Gauss sum  a cute fact.</li>
</ul>

<blockquote>Sums of squares pop up when you least expect them. Keep this formula in your mental toolbox  it's another O(n) loop killer.</blockquote>
`
},

{
  slug: "arithmetic-progression-sum",
  title: "Arithmetic Progression Sum (a+...+b)",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-08",
  excerpt: "How to add up a sequence with constant step, like 3+7+11+15, instantly using the average trick.",
  tags: ["arithmetic progression", "sum", "formula", "average"],
  html: `
<p>An arithmetic progression (AP) is just a sequence where the difference between consecutive terms is constant. For example, 3, 7, 11, 15 has a common differnce of 4. The sum of such a sequence is super easy: just multiply the average of the first and last term by the number of terms.</p>

<h2>The formula</h2>
<pre><code>Sum = (first term + last term) * (number of terms) / 2</code></pre>
<p>More formally: if the sequence is a, a+d, a+2d, ..., b (with d not zero), the number of terms n = (b - a)/d + 1 (assuming b-a is divisible by d). Then sum = n * (a + b) / 2.</p>

<h2>Why it works</h2>
<p>Pair up the first and last, second and secondlast, etc. Each pair sums to a+b. There are n/2 such pairs. So total = (a+b) * n/2. Same Gauss trick, just applied to a general AP.</p>

<h2>Example 1: 3+7+11+15</h2>
<p>First=3, last=15, n=4. Sum = 4*(3+15)/2 = 4*18/2 = 36.</p>
<pre><code>// code
int a = 3, b = 15, d = 4;
int n = (b - a)/d + 1; // 4
int sum = n * (a + b) / 2; // 36</code></pre>

<h2>Example 2: sum of all multiples of k between L and R</h2>
<p>Multiples of k form an AP: k, 2k, 3k, ... So the sum of multiples of k up to N is k * (1 + 2 + ... + floor(N/k)) = k * (m*(m+1)/2) where m = N/k. You can combine this with the range sum.</p>

<h2>When is this usefull?</h2>
<ul>
  <li>Problems asking for sum of numbers with certain properties (divisible by k, leave remainder r, etc.).</li>
  <li>Loop analysis: if an inner loop runs i times starting at something and ending at something else, the total iterations can be expressed as AP sum.</li>
  <li>Any time you need to sum a range of numbers that are aritmetically spaced.</li>
</ul>

<h2>Handling large ranges</h2>
<p>Always use <code>long long</code> for the sum. n can be huge. And be careful with integer division: the formula involves a multiplication and then division by 2. Since the mathematical sum is always an integer, the product n*(a+b) is always even. So integer division is safe as long as you use exact arithmetic. Best practice: compute <code>(a + b) * n / 2</code> in one line with <code>long long</code>.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>AP sum = (first+last)*n/2.</li>
  <li>Number of terms n = (last - first)/d + 1.</li>
  <li>The formula works for any AP  ascending or descending.</li>
  <li>Always use <code>long long</code> and do multiplication before division.</li>
</ul>

<blockquote>The arithmetic progression sum is the Gauss trick on steroids. Once you see sequences with constant step, your brain should scream "AP sum!".</blockquote>
`
},

{
  slug: "geometric-progression-sum-formula",
  title: "Geometric Progression Sum Formula",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-08",
  excerpt: "How to sum sequences that grow (or shrink) by a constant ratio, like powers of 2 or repeating fractions.",
  tags: ["geometric progression", "sum", "formula", "ratio"],
  html: `
<p>A geometric progression (GP) is a sequence where each term is multiplied by a constant ratio to get the next. For example, 3, 6, 12, 24 has ratio 2. The sum of such a sequence has a nice closed form that appears in many algorithm analysis and bitmask problems.</p>

<h2>The formula</h2>
<pre><code>Sum = (first term * (ratio^n - 1)) / (ratio - 1)</code></pre>
<p>Where n is the number of terms. Equivalent form: sum = (last term * ratio - first term) / (ratio - 1). The second one is often handier when you know the last term.</p>

<h2>Derivation (quick sketch)</h2>
<p>Let S = a + ar + ar + ... + ar^{n-1}. Multiply by r: rS = ar + ar + ... + ar^n. Subtract: rS - S = ar^n - a => S = a(r^n - 1)/(r - 1). This is valid for any r  1. If r = 1, it's just n*a.</p>

<h2>Special case: powers of 2</h2>
<p>One of the most common GPs in cp is 1 + 2 + 4 + 8 + ... + 2^{k-1} = 2^k - 1. This appears everywhere in bitmasks: the sum of all powers of 2 up to 2^{k-1} equals the number with k ones in binary (i.e., 2^k - 1). For example, 1+2+4+8 = 15 = 2^4 - 1.</p>
<pre><code>// sum of first n powers of 2 starting from 1
long long sum = (1LL << n) - 1; // 2^n - 1</code></pre>

<h2>Another example: sum of 5, 25, 125, 625 (ratio 5, n=4)</h2>
<p>a=5, r=5, n=4 => sum = 5*(5^4-1)/(5-1) = 5*(625-1)/4 = 5*624/4 = 5*156 = 780. Check: 5+25=30, +125=155, +625=780. Correct.</p>

<h2>Infinite GP sum (|r| < 1)</h2>
<p>If the ratio's absolute value is less than 1 and we go to infinity, the sum converges to <strong>a / (1 - r)</strong>. This appears in probability problems (e.g., expected number of trials). For example, 1 + 1/2 + 1/4 + 1/8 + ... = 2. But in cp we rarely need infinite sums; usually it's finite.</p>

<h2>When to use in cp</h2>
<ul>
  <li>Bitmask problems: sum of 2's powers is always 2^k - 1.</li>
  <li>Recurrence relations: some DP transitions lead to geometric series.</li>
  <li>Probability: expected value problems often have geometric distribution, which uses the GP sum.</li>
  <li>Modular arithmetic: GP sum modulo m needs careful handling of division (modular inverse). We'll cover that in number theory.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>GP sum: a*(r^n - 1)/(r - 1).</li>
  <li>Power of 2 sum: 1+2+...+2^{k-1} = 2^k - 1.</li>
  <li>If ratio is 1, sum = n*a (trivial).</li>
  <li>Watch out for integer division: numerator is always divisible by (r-1) mathematically, but in code use <code>long long</code> to avoid overflow before division.</li>
</ul>

<blockquote>Geometric progressions sneak into problems about exponential growth. When you see numbers doubling or halving, think GP, and pull out the formula.</blockquote>
`
},

{
  slug: "harmonic-sum-upper-bound-log2",
  title: "Harmonic Sum Upper Bound with log2",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-09",
  excerpt: "How the harmonic series 1 + 1/2 + 1/3 + ... + 1/n grows, and why its upper bound is log2(n) + 1.",
  tags: ["harmonic sum", "logarithm", "upper bound", "analysis"],
  html: `
<p>The harmonik sum is one of those things that pops up when you're anaylzing algoritms  especialy nested loops that run n/1 + n/2 + n/3 + ... times. Let's understand how it behaves and what bound we can use for it.</p>

<h2>What is the harmonic sum?</h2>
<p>It's the sum of recopricals of the first n integers:</p>
<pre><code>H(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n</code></pre>
<p>It grows very slowly  even for n = 10<sup>9</sup>, H(n) is only about 21. So it's a very slowgrowng function, much slower than log n itself.</p>

<h2>The upper bound: log(n) + 1</h2>
<p>We can aproximate H(n) by grouping terms by powers of two. The trick is to round each denomintor down to the neerest power of two that doesn't exceed it. For example, for n = 6:</p>
<pre><code>1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6
 1 + 1/2 + 1/2 + 1/4 + 1/4 + 1/4</code></pre>
<p>Now, each group has a certain number of terms: the 1's? Actually we start with 1 (which is  1), then 1/2 ( 1/2), then 1/3 and 1/4 become two copies of 1/4? Wait, the classic method: group the terms into blocks of size 1, 2, 4, 8, ... doubling each time. Within block k (terms from 2<sup>k-1</sup>+1 to 2<sup>k</sup>), each term is at most 1/2<sup>k-1</sup>, and there are 2<sup>k-1</sup> terms, so the block sum  1. Thus H(n)  number of complete blocks + 1 (for the last partial block). Since the number of blocks up to n is about log(n), we get H(n)  log(n) + 1.</p>

<p>This bound is tight enough for most cp purposes. It tells us that if an algorithm does n/1 + n/2 + ... + n/n operations, it's O(n log n) because H(n) = O(log n).</p>

<h2>Why is this importent?</h2>
<p>Many algorithms, like the Sieve of Eratosthenes, have running time O(n log log n) but the simpler analysis using harmonic sum gives O(n log n). The harmonic bound helps in amortised analysis and when you need a quick upperbound for a series.</p>

<h2>The exact approximation</h2>
<p>The harmonic numbers can be closely approximated by ln(n) + , where   0.57721 is the EulerMascheroni constant. But the log bound is sufficient and easier to remember.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Harmonic sum H(n) = 1 + 1/2 + ... + 1/n.</li>
  <li>H(n)  log(n) + 1  great for quick complexity bounds.</li>
  <li>It grows very slowly; H(10^6)  14.4.</li>
  <li>Use grouping by powers of two to prove the bound.</li>
</ul>

<blockquote>The harmonic series is a sneaky one  it looks like it might diverge quickly, but it's actualy a logaritmik crawler. Knowing its bound turns O(n * H(n)) into the familiar O(n log n).</blockquote>
`
},

{
  slug: "set-theory-for-competitive-programmers",
  title: "Set Theory for Competitive Programmers",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-09",
  excerpt: "The basic language of sets  a mustknow for reading problem statments and undrestanding algorithms.",
  tags: ["sets", "set theory", "notation", "math", "basics"],
  html: `
<p>Before you can master <code>std::set</code> or bitmasks, you need to speak the language of sets. It's the foundaton for describing collections, subsets, and operations that appear in countless cp problems.</p>

<h2>What is a set?</h2>
<p>A set is a <strong>collecton of distinct elements</strong>. The order doesn't matter, and duplicates are ignored. For example, X = {2, 4, 7} is a set with three elements. The symble <code></code> or <code>{}</code> stands for the empty set.</p>
<p>The notation <code>x  S</code> means "x is an element of S". If x is not in S, we write <code>x  S</code>.</p>

<h2>Size (cardinallity)</h2>
<p>The number of elements in a set S is denotd by <code>|S|</code>. So |{2,4,7}| = 3.</p>

<h2>Subsets</h2>
<p>A set A is a <strong>subset</strong> of B if every element of A is also in B. We write <code>A  B</code>. For example, {2,4}  {2,4,7}. The empty set is a subset of every set.</p>
<p>Every set has itself as a subset. A <strong>proper</strong> subset is one that's strictly smaller, denotd <code>A  B</code>.</p>

<h2>Important number sets</h2>
<ul>
  <li><strong></strong>  natural numbers (usualy 0,1,2,... or sometimes starting from 1).</li>
  <li><strong></strong>  integers (... -2, -1, 0, 1, 2 ...).</li>
  <li><strong></strong>  rational numbers (fractions).</li>
  <li><strong></strong>  real numbers (includng , 2).</li>
</ul>
<p>You'll see these in problem statments, especialy in mathheavy tasks. They just describe the universal set from which elements are drawn.</p>

<h2>Why sets matter in cp</h2>
<p>Sets underpin many algorithms: graph nodes, visited states, DP subsets, and the <code>set</code> container itself. Knowing set notaton helps you read editorals and write clean reasoning.</p>
<p>Plus, the fact that a set with n elements has exactly <strong>2<sup>n</sup></strong> subsets is a cornerstone of bruteforce and bitmask DP. We'll cover that in the next tutorial.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>A set is a collection of distinct, unordered elements.</li>
  <li><code>|S|</code> gives size, <code></code> is empty.</li>
  <li><code></code> means "belongs to", <code></code> means subset.</li>
  <li>Common number sets: , , , .</li>
</ul>

<blockquote>Think of a set as a bag of unique stuff. Once you're comfotable with the notation, the rest of combinatorics becomes way easier.</blockquote>
`
},

{
  slug: "set-operations-union-intersection",
  title: "Set Operations: Union, Intersection, Complement",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-09",
  excerpt: "The four basic ways to combine sets  and how they map directly to C++ set functions and bitmasks.",
  tags: ["sets", "union", "intersection", "complement", "operations"],
  html: `
<p>Now that we know what sets are, let's learn the basic opperations you can perform on them. These form the buliding blocks for solving problems involving collections of objects.</p>

<h2>Intersection (A  B)</h2>
<p>The intersection of two sets contains only the elements that are in <strong>both</strong> A and B. For example, if A = {1,2,3} and B = {2,3,4}, then A  B = {2,3}. In C++, you can compute this with <code>std::set_intersection</code> or simply by checking membership.</p>

<h2>Union (A  B)</h2>
<p>The union combines all elements from A and B, without duplicates. So {1,2}  {2,3} = {1,2,3}. The union of two sets is the smallest set that contains both. In code, you can insert all elements from one set into another, or use <code>std::set_union</code>.</p>

<h2>Complement ( or A<sup>c</sup>)</h2>
<p>The complement of a set A consists of all elements (from a universal set U) that are <strong>not</strong> in A. For instance, if the universe is {1,2,3,4} and A = {1,2}, then the complement of A is {3,4}. Complements are often used in counting problems: sometimes it's easyer to count what you <em>don't</em> want and subtract from the total.</p>

<h2>Difference (A \\ B)</h2>
<p>The difference A \ B contains elements in A but not in B. So {1,2,3} \ {2,4} = {1,3}. Note that B might have elements not in A  they are ignored. This is handy when you need to exclude certian values.</p>

<h2>Visualising with Venn diagrams</h2>
<p>It helps to draw cirles overlapping. The intersection is the overlapping part, the union is both circles combined, the differnce is one circle with the overlap removed.</p>

<h2>How this connects to cp</h2>
<p>When you use <code>set<int></code> in C++, you're working with ordered sets. The operations <code>insert</code>, <code>erase</code>, and <code>count</code> are basic, but you can also think in terms of union/ intersection when merging data. More importantly, when working with bitmasks for small sets, union becomes <code>|</code>, intersection becomes <code>&</code>, and complement becomes <code>~</code>. That's a powerfull link that we'll exploite later.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Intersection = elements common to both.</li>
  <li>Union = all elements from both (no duplicates).</li>
  <li>Complement = everything not in the set (requires a universal set).</li>
  <li>Difference = elements in A but not in B.</li>
</ul>

<blockquote>Set operations are like the grammar of combinatoral reasoning. Once you internalise them, many problems reduce to simple unions and intersections.</blockquote>
`
},

{
  slug: "subsets-counting-2-power-n",
  title: "Subsets of a Set and Counting 2^n",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-09",
  excerpt: "Every set with n elements has exactly 2 subsets. Why this is true, and how it connects to binary representation.",
  tags: ["subsets", "counting", "2^n", "bitmask", "combinatorics"],
  html: `
<p>This is one of the most fundamental facts in all of cp: a set with n elements has exactly <strong>2<sup>n</sup></strong> distinct subsets. This includes the empty set and the set itself. Understanding this opens the door to bruteforce search, DP over subsets, and bitmask techniques.</p>

<h2>Why 2<sup>n</sup>?</h2>
<p>For each element, you have two choices: include it in the subset or exclude it. Since there are n independant choices, the total number of combinations is 22...2 (n times) = 2<sup>n</sup>. Simple but powerfull.</p>

<h2>Example: set {1,2,3}</h2>
<p>Its 8 subsets are: , {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}. You can see each element appears in exactly half of the subsets.</p>

<h2>Link to binary representaton</h2>
<p>If we assign each element an index 0,1,...,n-1, then every subset can be represented as an nbit integer where bit i is 1 if element i is included. For exmaple, for n=3, the subset {0,2} corresponds to the binary number 101 = 5. So loopng an integer from 0 to 2<sup>n</sup>-1 iterates through all subsets. This is the basis of bitmask iteration.</p>
<pre><code>for (int mask = 0; mask < (1 << n); mask++) {
    // process subset represented by mask
}</code></pre>

<h2>Counting subsets of a subset</h2>
<p>A set with k elements has 2<sup>k</sup> subsets. So if you have a subset of a larger set, you can quickly know how many subsubsets exist. This is a common trick in DP.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>A set of size n has exactly 2<sup>n</sup> subsets.</li>
  <li>Each element's inclusion/exclusion is independant  2 choices per element.</li>
  <li>Bitmasks are a direct implementation of this idea.</li>
  <li>For n  20, iterating 2<sup>n</sup> (~10<sup>6</sup>) subsets is feasible.</li>
</ul>

<blockquote>The 2<sup>n</sup> rule is the reason bruteforce search is possible for small n. Once you encode a subset as an integer, you can manipulate it with bitwise operations  fast and clean.</blockquote>
`
},

{
  slug: "logic-operators-and-or-not",
  title: "Logic Operators: AND, OR, NOT, IMPLIES, EQUIV",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-09",
  excerpt: "The truth tables and meanings of logical connectives  the building blocks of problem conditions and proofs.",
  tags: ["logic", "truth table", "AND", "OR", "NOT", "implication"],
  html: `
<p>Every condition in an <code>if</code> statment is a logical expression. Understanding the formal logic behind AND, OR, NOT, and the less obvious IMPLIES and EQUIV will make you better at reading proofs and constructing complex conditions.</p>

<h2>Truth values</h2>
<p>In binary logic, a statment is either <strong>true (1)</strong> or <strong>false (0)</strong>. The following table summrises the basic operators:</p>

<table border="1" cellpadding="4">
  <tr><th>A</th><th>B</th><th>A</th><th>A  B</th><th>A  B</th><th>A  B</th><th>A  B</th></tr>
  <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
</table>

<h2>NOT ()  negaton</h2>
<p>The simplest: flips the truth value. In C++: <code>!A</code>.</p>

<h2>AND ()  conjuction</h2>
<p>True only if <strong>both</strong> operands are true. In C++: <code>A && B</code>.</p>

<h2>OR ()  disjunction</h2>
<p>True if <strong>at least one</strong> operand is true. In C++: <code>A || B</code>.</p>

<h2>IMPLIES ()  implcation</h2>
<p>"If A then B". The only case where it's false is when A is true and B is false. This sometimes confuses beginers: if the premise is false, the implication is considered true regardless of B. For example, "If I win the lottery, I'll buy a car"  if you don't win the lottery, the promise is still valid. In logic, false  anything is true.</p>

<h2>EQUIV ()  equivelence</h2>
<p>True when A and B have the same truth value. In C++: <code>A == B</code> for booleans.</p>

<h2>Quantifiers:  and </h2>
<p>While not exactly operators, you'll see <strong></strong> (for all) and <strong></strong> (there exists) in problem statements. They describe conditions over a set: <code>x  S: P(x)</code> means "for every element x in S, property P holds". <code>x  S: P(x)</code> means "there is at least one x in S such that P(x) holds". In code,  is a loop that checks all elements;  is a loop that can stop early.</p>

<h2>Things to rememeber</h2>
<ul>
  <li> = AND,  = OR,  = NOT.</li>
  <li> (implies) is only false when true  false.</li>
  <li> (iff) is true when both are equal.</li>
  <li>Quantifiers turn "all" and "exists" into precise logic.</li>
</ul>

<blockquote>Logic is the skeleton of an algorithm. If you can translate a problem's conditions into logical expressons, you're halfway to the solution.</blockquote>
`
},

{
  slug: "universal-existential-quantifiers-logic",
  title: "Universal and Existential Quantifiers in Logic",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-09",
  excerpt: "How 'for all' and 'there exists' show up in problem statments and how you implement them in code.",
  tags: ["logic", "quantifiers", "for all", "there exists", "predicates"],
  html: `
<p>You've definetly seen phrases like "for all i" or "there exists a value x" in problem statments. These are quantifiers, and they give precisly the condition you need to check. Let's break them down.</p>

<h2>  the universal quantifier (for all)</h2>
<p>The symble  (upsidedown A) means <strong>"for every"</strong> or <strong>"for all"</strong>. A statment like <code>x  S: P(x)</code> says that the property P(x) must hold for every single element x in the set S. If even one element fails, the whole thing is false.</p>
<p>In C++, you'd implement this with a loop that checks all elements and break early if any fails:</p>
<pre><code>bool allPositive = true;
for (int x : arr) {
    if (x <= 0) { allPositive = false; break; }
}</code></pre>

<h2>  the existential quantifier (there exists)</h2>
<p>The symble  (backward E) means <strong>"there is at least one"</strong>. So <code>x  S: P(x)</code> is true if you can find some x in S satisfing the condition. Only one is enough.</p>
<p>In code, you search for any element that mathes and stop when you find it:</p>
<pre><code>bool anyEven = false;
for (int x : arr) {
    if (x % 2 == 0) { anyEven = true; break; }
}</code></pre>

<h2>Nested quantifiers  order matters!</h2>
<p>Things get tricky when quantifiers are nested. For instance, <code>x y : y > x</code> means "for every x, there exists some y that is greater than x". This is true for integers (you can always add 1). But swap them: <code>y x : y > x</code> means "there's a single y that's greater than every x"  false for integers, because there's no largest number.</p>
<p>In cp, you rarely write deeply nested quantifiers, but understanding the order helps interpret problem conditions correctly.</p>

<h2>Predicates</h2>
<p>A predicate is just a funtion that returns true or false given its argumets. For example, <code>P(n)</code> could be "n is prime". Then n, P(n) would mean "all natural numbers are prime" (false). Predicates are the building blocks of quantified statements.</p>

<h2>Things to rememeber</h2>
<ul>
  <li> = "for all"  implemented as a loop that checks every element.</li>
  <li> = "there exists"  implemented as a search loop that can stop early.</li>
  <li>Order of quantifiers matters:  is different from .</li>
  <li>Predicates are booleanvalued functions.</li>
</ul>

<blockquote>Quantifiers make informal conditions formal. If a problem says "every pair satisfies...", you know exactly what to loop over. They're like the exclamation marks of logical sentences.</blockquote>
`
},

{
  slug: "functions-floor-ceil-min-max",
  title: "Functions: Floor, Ceil, Min, Max in C++",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-09",
  excerpt: "The four most common utility functions in cp  how they work and how to use them without traps.",
  tags: ["functions", "floor", "ceil", "min", "max", "cmath"],
  html: `
<p>Four tiny functions that you'll use in almost every contest: <code>floor</code>, <code>ceil</code>, <code>min</code>, and <code>max</code>. They're simple, but a few subtelties can bite you.</p>

<h2>min and max  the easy ones</h2>
<p>Defined in the standard library (included via bits/stdc++.h), <code>min(a,b)</code> returns the smaller value, <code>max(a,b)</code> the larger. Works for ints, doubles, and any comparable types.</p>
<pre><code>int a = 5, b = 10;
cout << min(a, b) << "\\n"; // 5
cout << max(a, b) << "\\n"; // 10</code></pre>
<p>You can also pass an initializer list to get the min/max of several values: <code>min({a, b, c})</code>.</p>

<h2>floor  round down</h2>
<p><code>floor(x)</code> returns the greatest integer  x. For positive numbers it's like truncation, but for negatives it's different: floor(-2.3) = -3, because -3  -2.3 and -2 > -2.3.</p>
<pre><code>cout << floor(3.7) << "\\n";  // 3
cout << floor(-3.7) << "\\n"; // -4</code></pre>
<p>For integers, you don't need floor  just use integer division, but remember it truncates towards zero, not down!</p>

<h2>ceil  round up</h2>
<p><code>ceil(x)</code> returns the smallest integer  x. So ceil(3.2) = 4, ceil(-3.2) = -3.</p>
<pre><code>cout << ceil(3.2) << "\\n";  // 4
cout << ceil(-3.2) << "\\n"; // -3</code></pre>

<h2>Floating point dangers</h2>
<p>Because of floating point errors, <code>ceil(something)</code> might give an offbyone result. For example, if a computation should give exactly 3.0 but due to precision is 2.9999999999, ceil will give 3? Wait, 2.9999 ceil is 3 anyway? Actually ceil(2.9999999) = 3, so it's safe in that direction. But if a value is supposed to be an integer but becomes 3.0000000001, ceil gives 4, which is wrong. The safe way: avoid floating ceil/floor for integer arithmetic and use integer formulas instead.</p>

<h2>Integer ceil division trick</h2>
<p>To compute ceil(a / b) for positive integers a and b, do: <code>(a + b - 1) / b</code>. For example, ceil(10 / 3) = (10+3-1)/3 = 12/3 = 4. This avoids floats entirely.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>min(a,b) and max(a,b) are in <code>&ltalgorithm&gt</code>, but bits/stdc++.h includes them.</li>
  <li>floor goes down, ceil goes up  watch negative numbers.</li>
  <li>Avoid floating floor/ceil for integer division; use the integer trick.</li>
  <li>Prefer integer arithmetic whenever possible.</li>
</ul>

<blockquote>These little functions are the salt and pepper of cp code. Sprinkle them liberally, but don't let floating point errors ruin the dish.</blockquote>
`
},

{
  slug: "factorial-function-iterative-recursive",
  title: "Factorial Function: Iterative and Recursive Definitions",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-09",
  excerpt: "Two ways to compute n!  the simple loop and the elegant recursion  and why one is much faster.",
  tags: ["factorial", "recursion", "iterative", "math"],
  html: `
<p>The factorial of n, writen <code>n!</code>, is the product of all positive integers up to n. It's a fundemental building block in combinatorics. You can define it iterativly or recursivly, and both are worth knowing.</p>

<h2>The definions</h2>
<p>Formally:</p>
<pre><code>0! = 1
n! = n  (n-1)!   for n > 0</code></pre>
<p>Also expressed as a product: <code>n! = 1  2  3  ...  n</code>.</p>

<h2>Iterative version (loop)</h2>
<p>This is the most common in cp because it's fast and uses O(1) extra memory (besides the variable).</p>
<pre><code>long long fact(int n) {
    long long res = 1;
    for (int i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}</code></pre>
<p>It runs in O(n) time. For n up to 20, it fits in <code>long long</code>. Beyond that, you need modulo.</p>

<h2>Recursive version</h2>
<p>Directly from the definition:</p>
<pre><code>long long fact_rec(int n) {
    if (n == 0) return 1;
    return n * fact_rec(n - 1);
}</code></pre>
<p>This is elegant but uses O(n) stack space and can be slower due to function call overhead. It's a classic example of recursion, though you'll rarley use it in cp for factorials.</p>

<h2>Why recursion can be dangerus</h2>
<p>For n around 10<sup>5</sup>, the recursive version will cause a stack overflow because each call adds a new stack frame. The iterative version runs fine. In general, prefer iteration when the recursion depth can be large.</p>

<h2>Modular factorial</h2>
<p>Since factorials explode, you usually compute them modulo some big prime M. Just multiply and take <code>% M</code> each step:</p>
<pre><code>long long fact_mod(int n, long long MOD) {
    long long res = 1;
    for (int i = 2; i <= n; i++) {
        res = (res * i) % MOD;
    }
    return res;
}</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li>0! = 1 (by convention).</li>
  <li>Iterative factorial is O(n) and uses O(1) memory.</li>
  <li>Recursive factorial is O(n) but uses O(n) stack; avoid for large n.</li>
  <li>Always use modulo when n > 20 or so.</li>
</ul>

<blockquote>Factorials are the gateway drug to combinatorics. Once you can compute them efficently, combinations, permutations, and a whole world of counting problems become accessible.</blockquote>
`
},

{
  slug: "fibonacci-numbers-recursive-binet",
  title: "Fibonacci Numbers: Recursive and Closed-Form (Binet)",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-09",
  excerpt: "The famous Fibonacci sequence  how to compute it quickly with loops, and the surprizing closedform formula.",
  tags: ["fibonacci", "recursion", "Binet", "closed form", "math"],
  html: `
<p>The Fibonacci numbers are one of the most famous sequences in math. They appear in nature, art, and... competive programming. Learn them well.</p>

<h2>The sequence</h2>
<pre><code>F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)  for n > 1</code></pre>
<p>The first few are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...</p>

<h2>Recursive (naive) approach</h2>
<p>Directly translating the definition into recursion leads to exponental time O(2<sup>n</sup>).</p>
<pre><code>int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}</code></pre>
<p>This is terrible for n > 30; it recomputes the same values millions of times. Never use this in cp unless n is tiny.</p>

<h2>Iterative (loop)  O(n) time, O(1) space</h2>
<p>The efficient way:</p>
<pre><code>long long fib(int n) {
    if (n == 0) return 0;
    long long a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        long long c = a + b;
        a = b;
        b = c;
    }
    return b;
}</code></pre>
<p>This runs quickly and gives exact results up to n  92, beyond which <code>long long</code> overflows.</p>

<h2>Binet's closedform formula</h2>
<p>Astonishingly, there is an exact formula using the golden ratio :</p>
<pre><code>F(n) = (^n - ^n) / 5
where  = (1+5)/2  1.618,  = (1-5)/2  -0.618</code></pre>
<p> is the golden ratio,  is its negative recprocal. Since || < 1, ^n becomes negligibale for large n, so F(n)  ^n / 5 (rounded to the nearest integer). This gives an O(1) approximation, but floating point errors make it unrelyable for larger n. In cp, stick to the iterative method or use matrix exponentiation for O(log n) (which we'll cover later).</p>

<h2>Modular Fibonacci</h2>
<p>Fibonaci numbers grow so fast that they're often computed modulo something. In the iterative method, just do <code>c = (a + b) % MOD</code>. That's enough for most problems.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Fibonacci is defined by F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).</li>
  <li>Naive recursion is O(2^n)  avoid it.</li>
  <li>Iterative loop is O(n) and very simple.</li>
  <li>Binet's formula is cool but not practical for large n due to precision.</li>
  <li>Use modulo for large Fibonacci numbers.</li>
</ul>

<blockquote>Fibonacci numbers are like the hello world of dynamic programming. They teach you how to go from a simple recursive formula to an efficent iterative solution.</blockquote>
`
},

{
  slug: "logarithms-log2-log10-natural-log",
  title: "Logarithms: log2, log10, and Natural Log",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-09",
  excerpt: "Understanding logarithms in base 2, 10, and e  the math that explains why O(log n) algorithms are so fast.",
  tags: ["logarithm", "log2", "log10", "natural log", "math"],
  html: `
<p>Algorithms like binary search, balanced trees, and divideandconquer all have O(log n) complextiy. But what exactly is a logarithm, and how do you compute it in C++? Let's demystify logs.</p>

<h2>The intuition: how many divisions?</h2>
<p><code>log<sub>k</sub>(x)</code> answers: <strong>how many times can I divide x by k until I get to 1?</strong></p>
<p>For example, log<sub>2</sub>(32) = 5, because 32  16  8  4  2  1 (five halvings). That's exactly the number of steps in binary search on an array of size 32.</p>
<p>Equivalently, k<sup>a</sup> = x means a = log<sub>k</sub>(x). So log<sub>2</sub>(8) = 3 because 2 = 8.</p>

<h2>Common bases in cp</h2>
<ul>
  <li><strong>Base 2 (log2)</strong>: most common. It tells you the number of bits needed to represent n (ceil(log2(n))). The depth of a balanced tree. The number of times you can halve n.</li>
  <li><strong>Base 10 (log10)</strong>: number of decimal digits = floor(log10(n)) + 1.</li>
  <li><strong>Natural log (ln, base e)</strong>: used in calculus and probability. In cp, you might use it for the harmonic series bound ln(n)+.</li>
</ul>

<h2>Computing logs in C++</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    double x = 1000;
    cout << log2(x) << "\\n";   // 9.96578...   (binary log)
    cout << log10(x) << "\\n";  // 3            (decimal log)
    cout << log(x) << "\\n";    // 6.90775...   (natural log, base e)
    // Note: log2 and log10 are in cmath, included via bits/stdc++.h
    return 0;
}</code></pre>
<p>These return <code>double</code>. For integer log2, it's often faster and more precise to use bit operations: <code>31 - __builtin_clz(x)</code> (for a 32bit unsigned int). We'll cover bit tricks later.</p>

<h2>Properties of logarithms</h2>
<p>You don't need to prove these, just know they exist:</p>
<ul>
  <li>log(a  b) = log(a) + log(b)</li>
  <li>log(a / b) = log(a) - log(b)</li>
  <li>log(a<sup>n</sup>) = n  log(a)</li>
  <li>Change of base: log<sub>u</sub>(x) = log<sub>k</sub>(x) / log<sub>k</sub>(u). So log<sub>2</sub>(x) = log(x) / log(2) if needed.</li>
</ul>

<h2>Logarithmic time  the holy grail</h2>
<p>In cp, O(log n) is next best after O(1). For n = 10<sup>18</sup>, log<sub>2</sub>(n)  60. That's just 60 steps! That's why binary search is so powerfull.</p>
<p>When you see a problem with huge constraints but a solution involing "cut in half", you're probably dealing with a logarithmic algorithm.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>log<sub>2</sub>(n) = number of times you can halve n.</li>
  <li><code>log2(x)</code> in C++ returns double; use <code>__builtin_clz</code> for integer log2.</li>
  <li>log10 helps count decimal digits.</li>
  <li>Logarithms turn products into sums  usefull for avoiding overflow in some contexts.</li>
</ul>

<blockquote>Logarithms are the secret sauce behind efficent algorithms. They turn astronomically large input sizes into manageable step counts. Once you start thinking in logs, you'll never look at complexity the same way.</blockquote>
`
},

{
  slug: "properties-of-logarithms",
  title: "Properties of Logarithms: Product, Quotient, Power",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-09",
  excerpt: "Three simple rules that make logarithms easy to work with  and why they matter for algorithm analysis.",
  tags: ["logarithms", "properties", "product", "quotient", "power"],
  html: `
<p>You don't need to become a math wizard, but knowing the basic propertis of logarithms helps enormusly with algorithm analysis and sometimes even in coding formulas. Let's go through the three main rules one by one.</p>

<h2>1. Product rule</h2>
<pre><code>log_k(a  b) = log_k(a) + log_k(b)</code></pre>
<p>In words: the logarithm of a product is the sum of the logarithms. This makes sense: if you take two numbers and multiply them, you're adding their "orders of magnitude". For example, log_2(84) = log_2(32) = 5, and log_2(8) + log_2(4) = 3 + 2 = 5. Matches.</p>

<h2>2. Quotient rule</h2>
<pre><code>log_k(a / b) = log_k(a) - log_k(b)</code></pre>
<p>Similarly, division becomes subtraction. So log_2(32 / 4) = log_2(8) = 3, and log_2(32) - log_2(4) = 5 - 2 = 3. This rule is handy when you're dealing with ratios.</p>

<h2>3. Power rule (the most importent one)</h2>
<pre><code>log_k(a^n) = n  log_k(a)</code></pre>
<p>This is the game changer. It says that the logarithm of a number raised to a power is that power times the log of the base number. For algorithm analysis, this means: if an algorithm has complexity proportional to n<sup>2</sup>, then log of that is 2  log(n). More importantly, it tells us that the number of digits in 2<sup>n</sup> is about n  log<sub>10</sub>(2).</p>

<h2>Why are these usefull in cp?</h2>
<ul>
  <li>Analyzing nested loops: if an algorithm does O(n<sup>k</sup>) operations, the log of that is k log n.</li>
  <li>Understanding why O(n log n) is so common: log(n!)  n log n by using the product rule repeatedly.</li>
  <li>Working with huge numbers: if a number is too big to store, its logarithm might still be manageable for comparisions.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Product  sum of logs.</li>
  <li>Quotient  difference of logs.</li>
  <li>Power  multiply the log.</li>
  <li>These rules work for any base k.</li>
</ul>

<blockquote>Logarithms turn scary operations into simple additions and multiplications. That's why we love them  they shrink exponential problems down to linear size in log space.</blockquote>
`
},

{
  slug: "change-of-base-formula-logarithms",
  title: "Change of Base Formula for Logarithms",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-09",
  excerpt: "How to convert between different log bases  a mustknow trick for computing logs in code.",
  tags: ["logarithms", "change of base", "formula", "math"],
  html: `
<p>Your computer can compute natural logs (base e), base10 logs, and base2 logs directly. But what if you need log in some other base, like log_3(x)? The changeofbase formula rescues you.</p>

<h2>The formula</h2>
<pre><code>log_u(x) = log_k(x) / log_k(u)</code></pre>
<p>In words: to compute the log of x in base u, pick any convinent base k (like e or 10), compute both logs in that base, and divide them. It's that simple.</p>

<h2>Example: log_3(81)</h2>
<p>We know 3^4 = 81, so log_3(81) = 4. Using change of base with natural log:</p>
<pre><code>log(81) / log(3)  4.394449 / 1.098612  4.0</code></pre>
<p>Works perfectly. In C++:</p>
<pre><code>double log3_81 = log(81) / log(3);
cout << fixed << setprecision(2) << log3_81 << "\\n"; // prints 4.00</code></pre>

<h2>Converting to log2</h2>
<p>If your compiler doesn't have <code>log2()</code> (it does in modern C++), you could do <code>log(x) / log(2)</code>. But it's better to use the builtin <code>log2(x)</code> for accuracy and speed. The changeofbase is still valuble for other bases like 3, 5, etc.</p>

<h2>Why it matters</h2>
<ul>
  <li>Algorithms with divideby3 require log_3(n) analysis.</li>
  <li>Some problems ask about digits in base b; you need log_b(10) or similar.</li>
  <li>You may need to compare two logs with different bases; change one to the other's base.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>log_u(x) = log_k(x) / log_k(u) for any positive k  1.</li>
  <li>Choose k = e (natural log) or k = 10 for computation.</li>
  <li>The formula works because logarithms are basically exponents.</li>
</ul>

<blockquote>Change of base is the universal adapter for logarithms. Once you know it, you can work in whatever base makes the problem easiest.</blockquote>
`
},

{
  slug: "number-of-digits-in-base-b-using-log",
  title: "Number of Digits in Base b Using logb",
  topic: "Mathematics",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-09",
  excerpt: "A neat little formula that tells you how many digits a number has in any base, using logarithms.",
  tags: ["digits", "base", "logarithm", "formula"],
  html: `
<p>How many bits does the number 1024 need? How many decimal digits in 10<sup>9</sup>? There's a simple logbased formula that answers these questions instantly.</p>

<h2>The formula</h2>
<pre><code>Digits of integer x in base b = floor(log_b(x)) + 1</code></pre>
<p>Provided x > 0. For x = 0, it's 1 digit (just "0").</p>

<h2>Example: decimal digits of 1234</h2>
<p>log_10(1234)  3.0913  floor = 3  +1 = 4 digits. Indeede, 1234 has 4 digits.</p>

<h2>Example: binary bits for 32</h2>
<p>log_2(32) = 5  floor = 5  +1 = 6 bits? Wait, 32 in binary is 100000, which has 6 bits. Correct. So a number that is exactly a power of 2 still follows the rule because floor(log2(32)) = 5.</p>

<h2>In code</h2>
<pre><code>int digits_decimal(int x) {
    return floor(log10(x)) + 1;
}
int bits_binary(int x) {
    return floor(log2(x)) + 1;
}</code></pre>
<p>But beware: floatingpoint precision might give you wrong floor for large x. For integers, you can often compute bits using <code>31 - __builtin_clz(x)</code> for 32bit unsigned ints, which is exact. For decimal digits, a loop dividing by 10 is safe and still O(log_10(n)).</p>

<h2>Why it's useful</h2>
<ul>
  <li>Determining array sizes when converting numbers to strings.</li>
  <li>Checking if a number fits in a certain bit width.</li>
  <li>Analyzing the growth of numbers in DP states.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Digits in base b = floor(log_b(x)) + 1.</li>
  <li>For binary, use builtin bit operations for exactness.</li>
  <li>The formula works because b<sup>k-1</sup>  x < b<sup>k</sup> means k = floor(log_b(x)) + 1.</li>
</ul>

<blockquote>A tiny formula, but it'll save you when you need to preallocate arrays or understand the size of your data. Logs make counting digits a breeze.</blockquote>
`
},

{
  slug: "time-complexity-intro-big-o",
  title: "Time Complexity Introduction and Big O Notation",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-09",
  excerpt: "What time complexity is, why it's the most importent concept in cp, and how to read Big O.",
  tags: ["time complexity", "Big O", "analysis", "algorithms"],
  html: `
<p>Time complexity is the language we use to describe how fast an algorithm is. In competive programming, an algorithm that's too slow is as good as wrong. Big O notation gives us a way to talk about speed without getting lost in hardware details.</p>

<h2>What is time complexity?</h2>
<p>It's an estimation of how the running time of an algorithm grows as the input size n grows. We don't count exact seconds (that depends on the CPU, compiler, etc.). Instead, we count the number of basic operations (additions, comparisons, array accesses) as a function of n, and then we keep only the dominant term, ignoring constants.</p>

<h2>Big O  the formal definishion (lite)</h2>
<p>We say an algorithm is <strong>O(f(n))</strong> if its running time is bounded by some constant times f(n) for large n. For example, O(n) means "roughly proportional to n". O(n<sup>2</sup>) means "roughly proportional to n squared". We drop lowerorder terms and constant multipliers because they don't matter for large n.</p>

<h2>Examples</h2>
<ul>
  <li>A single loop through n elements: <strong>O(n)</strong>.</li>
  <li>Two nested loops each running n times: <strong>O(n<sup>2</sup>)</strong>.</li>
  <li>Binary search on a sorted array: <strong>O(log n)</strong>.</li>
  <li>Sorting with merge sort: <strong>O(n log n)</strong>.</li>
</ul>

<h2>Why ignore constants?</h2>
<p>Because constants vary by implementation, language, and hardware. An O(n) algorithm that does 100n operations and an O(n) algorithm that does 2n operations are both O(n). The difference matters in practice but not in Big O analysis. In cp, constant factors do matter sometimes, but first we care about the asymptotic growth.</p>

<h2>How to read O(...)</h2>
<p>"O" stands for "order of". So O(n log n) means "on the order of n log n". You'll hear people say "that's an O(n^2) solution", meaning its time grows quadratically with the input size.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Big O estimates growth rate, not exact time.</li>
  <li>We keep only the dominant term: O(n^2 + n) becomes O(n^2).</li>
  <li>Constant factors are hidden: O(5n) = O(n).</li>
  <li>It's a worstcase bound unless stated otherwise.</li>
</ul>

<blockquote>Time complexity is the compass that guides your algorithmic choices. Before you write a single line, ask: is my idea going to be fast enough? Big O gives you the answer.</blockquote>
`
},

{
  slug: "estimating-algorithm-efficiency-big-o",
  title: "Estimating Algorithm Efficiency with Big O",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-09",
  excerpt: "How to look at an algorithm and quikly figure out its complexity by analysing loops and recursion.",
  tags: ["time complexity", "Big O", "estimation", "loops", "recursion"],
  html: `
<p>Now that we know what Big O is, let's learn how to calculat it for a piece of code. This is a skill that becomes second nature after some practice.</p>

<h2>Rule 1: Loops</h2>
<p>A loop that runs n times, doing constanttime work inside, is O(n).</p>
<pre><code>for (int i = 0; i < n; i++) {
    // O(1) work
}</code></pre>
<p>Two nested loops over n are O(n<sup>2</sup>):</p>
<pre><code>for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // O(1) work
    }
}</code></pre>
<p>If the inner loop depends on the outer, you sum the iterations: sum_{i=1}^{n} i  n^2/2 = O(n^2).</p>

<h2>Rule 2: Consecutive blocks</h2>
<p>If you have multiple blocks after each other, the total complexity is the <strong>maximum</strong> of them. O(n) + O(n<sup>2</sup>) = O(n<sup>2</sup>). The slowest block dominates.</p>

<h2>Rule 3: Recursion</h2>
<p>A recursive function that calls itself once with parameter n-1, like factorial, runs n times  O(n).</p>
<p>A function that calls itself twice with n-1 (like naive Fibonacci) creates an exponential tree  O(2<sup>n</sup>).</p>
<p>Divideandconquer that splits input in half and processes both halves, then merges in O(n), like merge sort: T(n) = 2T(n/2) + O(n)  O(n log n).</p>

<h2>Rule 4: Multiple variables</h2>
<p>If the loop depends on two different input sizes n and m, the complexity is O(nm) or O(n+m) depending. Always check which variables the problem gives.</p>

<h2>Common patterns</h2>
<ul>
  <li>Iterating over all pairs of n elements  O(n<sup>2</sup>).</li>
  <li>Iterating over all subsets of n elements  O(2<sup>n</sup>).</li>
  <li>Iterating over all permutations of n elements  O(n!).</li>
  <li>Sorting  O(n log n).</li>
  <li>Binary search  O(log n).</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Count loop iterations; multiply nested loops.</li>
  <li>Consecutive phases: take the worst.</li>
  <li>Recursion: write the recurrence and solve it (or know the common ones).</li>
  <li>Always check input constraints to choose the right algorithm.</li>
</ul>

<blockquote>Estimating complexity is like having a crystal ball. Before you run your code, you can predict if it'll pass or TLE. Master this, and you'll save hours of wasted submissions.</blockquote>
`
},
{
  slug: "time-complexity-simple-loops-on",
  title: "Time Complexity of Simple Loops O(n)",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-19",
  excerpt: "The simplest and most common complexity: a single loop that runs n times. Learn to spot it and estimate its runtime.",
  tags: ["time complexity", "Big O", "loops", "O(n)"],
  html: `
<p>A <strong>simple loop</strong> that iterates n times and does constanttime work inside is the quintessential O(n) algorithm. It's the baseline of efficiency  faster than O(n log n) and much faster than O(n<sup>2</sup>). Let's break down why it's O(n) and how to recognise it.</p>

<h2>What is O(n) in plain words?</h2>
<p>If you double the input size, the running time also roughly doubles. That's linear growth. For example, processing an array of 10,000 elements takes about twice as long as processing 5,000 elements.</p>

<h2>Example: sum of array elements</h2>
<pre><code>int sum = 0;
for (int i = 0; i < n; i++) {
    sum += arr[i];
}</code></pre>
<p>The loop runs exactly n times. Inside each iteration we do a constant amount of work (one addition). So total operations  n * constant  O(n).</p>

<h2>Another example: finding the maximum</h2>
<pre><code>int mx = arr[0];
for (int i = 1; i < n; i++) {
    if (arr[i] > mx) mx = arr[i];
}</code></pre>
<p>Again, n1 iterations, each with a comparison and maybe an assignment. Still O(n).</p>

<h2>Constant factors don't matter for Big O</h2>
<p>Whether the loop body does 2 operations or 20, we still call it O(n). The constant gets hidden. In practice, a loop that does 20 operations per iteration will be slower than one that does 2, but both scale linearly. When n is huge (10<sup>7</sup>), the constant <em>can</em> matter for passing time limits, but the asymptotic class is the same.</p>

<h2>When is a loop not O(n)?</h2>
<ul>
  <li>If the loop runs n<sup>2</sup> times (nested loops)  O(n<sup>2</sup>).</li>
  <li>If the loop variable doubles each time: <code>for (int i = 1; i < n; i *= 2)</code>  O(log n).</li>
  <li>If the loop runs a constant number of times (e.g., always 100)  O(1).</li>
</ul>

<h2>Realworld cp example: counting occurrences</h2>
<pre><code>int count = 0;
for (int i = 0; i < n; i++) {
    if (arr[i] == target) count++;
}
cout << count << "\\n";</code></pre>
<p>No matter where target appears, the loop must check every element in the worst case. That's O(n).</p>

<h2>How fast is O(n)?</h2>
<p>On a modern judge, an O(n) solution can handle n up to about 10<sup>7</sup> in one second, assuming simple operations. For n = 10<sup>5</sup> or 10<sup>6</sup>, you're perfectly safe. For n = 10<sup>8</sup>, even linear time might be too slow  then you need O(log n) or O(1).</p>

<h2>Things to rememeber</h2>
<ul>
  <li>A single loop from 0 to n1 is almost always O(n).</li>
  <li>Inside the loop, only constanttime operations (no nested loops, no recursion that depends on n).</li>
  <li>O(n) is often the target complexity for problems with n  10<sup>6</sup>  10<sup>7</sup>.</li>
  <li>Don't confuse O(n) with O(1)  a loop is never constant time unless n is bounded by a fixed number.</li>
</ul>

<blockquote>Mastering O(n) is the first step to understanding algorithm efficiency. Once you can instantly spot a linear loop, you'll quickly rule out solutions that are too slow.</blockquote>
`
},{
  slug: "time-complexity-nested-loops-onk",
  title: "Time Complexity of Nested Loops O(n^k)",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-19",
  excerpt: "When loops are inside loops, the runtime multiplies. Learn how two, three, or k nested loops lead to O(n^2), O(n^3), and beyond.",
  tags: ["time complexity", "nested loops", "Big O", "polynomial"],
  html: `
<p>Nested loops are the most common source of quadratic or cubic time complexity. If you have a loop inside another loop, the total number of iterations is the product of the iteration counts. This can quickly blow up your runtime if you're not careful.</p>

<h2>The basic rule</h2>
<p>If you have k nested loops, each running about n times, the complexity is <strong>O(n<sup>k</sup>)</strong>. For two loops: O(n<sup>2</sup>). For three loops: O(n<sup>3</sup>).</p>

<h2>Two nested loops O(n<sup>2</sup>)</h2>
<pre><code>for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // constant work
    }
}</code></pre>
<p>The inner loop runs n times for each of the n iterations of the outer loop, so total iterations = n * n = n<sup>2</sup>. That's about 10,000 iterations for n=100, but 10<sup>10</sup> for n=100,000  too many.</p>

<h2>Not all nested loops are O(n<sup>2</sup>)</h2>
<p>Sometimes the inner loop depends on the outer loop variable:</p>
<pre><code>for (int i = 0; i < n; i++) {
    for (int j = 0; j < i; j++) {
        // constant work
    }
}</code></pre>
<p>Total iterations = 0 + 1 + 2 + ... + (n-1) = n(n-1)/2 = O(n<sup>2</sup>) still! The constant factor changes (about half of n<sup>2</sup>), but the growth is still quadratic.</p>

<h2>Three nested loops O(n<sup>3</sup>)</h2>
<pre><code>for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        for (int k = 0; k < n; k++) {
            // constant work
        }
    }
}</code></pre>
<p>Total iterations = n * n * n = n<sup>3</sup>. For n=1000, that's one billion operations  usualy too slow.</p>

<h2>When is O(n<sup>2</sup>) acceptable?</h2>
<p>If n  5000, n<sup>2</sup> = 25 million, which can pass in about one second in C++. If n  1000, it's very safe. For n = 10<sup>5</sup>, n<sup>2</sup> = 10<sup>10</sup>  definetly not.</p>

<h2>Optimising nested loops</h2>
<p>Sometimes you can reduce the number of loops by using better algorithms. For example, instead of checking all pairs (O(n<sup>2</sup>)), you might sort and use two pointers (O(n log n)). Always look for ways to break out early or reduce the inner loop's range.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>k nested loops each of size n  O(n<sup>k</sup>).</li>
  <li>Even if the inner loop runs half the time, it's still O(n<sup>2</sup>).</li>
  <li>O(n<sup>2</sup>) is feasible for n up to ~10<sup>4</sup>; O(n<sup>3</sup>) for n up to ~500.</li>
  <li>Be suspicious of triple nested loops  they often signal a need for optimization.</li>
</ul>

<blockquote>Nested loops are like russian dolls  each layer multiplies the work. Always check the constraints before you write that second loop.</blockquote>
`
},{
  slug: "order-of-magnitude-time-complexity",
  title: "Order of Magnitude in Time Complexity",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-19",
  excerpt: "Understanding that constants don't matter  only the growth rate counts. Why we say O(n) instead of O(2n).",
  tags: ["order of magnitude", "Big O", "growth rate", "asymptotic"],
  html: `
<p>When we say an algorithm is O(n<sup>2</sup>), we don't mean it takes exactly n<sup>2</sup> seconds. We mean its running time grows <strong>like</strong> n<sup>2</sup> for large n. This is called the <strong>order of magnitude</strong>. It's about the shape of the growth curve, not the exact count.</p>

<h2>Why we ignore constants</h2>
<p>An algorithm that does 100n operations and another that does 2n operations are both O(n). For n = 1,000,000, one takes 100 million ops, the other 2 million  a big difference, but both are linear. When n becomes 10<sup>9</sup>, the ratio stays 50, but both are still far faster than any O(n<sup>2</sup>) algorithm. The constant matters, but the class is the same.</p>

<h2>Dominant term</h2>
<p>If an algorithm does 3n<sup>2</sup> + 5n + 100 operations, the n<sup>2</sup> term dominates for large n. The 5n and 100 become irrelevant. So we say it's O(n<sup>2</sup>).</p>

<h2>Examples of orders</h2>
<ul>
  <li>O(1): constant  doesn't grow with input.</li>
  <li>O(log n): grows very slowly (e.g., binary search).</li>
  <li>O(n): linear  doubles when input doubles.</li>
  <li>O(n log n): slightly more than linear (e.g., merge sort).</li>
  <li>O(n<sup>2</sup>): quadratic  quadruples when input doubles.</li>
  <li>O(2<sup>n</sup>): exponential  impossible for n > 30.</li>
</ul>

<h2>Comparing orders</h2>
<p>For large n, any O(n) algorithm beats any O(n<sup>2</sup>) algorithm, no matter the constants. O(log n) beats O(n). O(n log n) is between O(n) and O(n<sup>2</sup>). This hierachy is what we mean by "order of magnitute".</p>

<h2>Why it matters in cp</h2>
<p>When you see constraints like n  10<sup>5</sup>, you know an O(n<sup>2</sup>) solution will time out. You need O(n log n) or O(n). If n  20, O(2<sup>n</sup>) might be okay. The order tells you what's possible.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Big O hides constants and lowerorder terms.</li>
  <li>Focus on the highestpower term and the base of the log.</li>
  <li>Different orders of magnitude are the first filter for feasibility.</li>
  <li>Don't stress about exact operation counts  think in terms of growth.</li>
</ul>

<blockquote>Order of magnitude is like comparing a bicycle to a rocket. The exact speed doesn't matter when one is millions of times faster for big inputs.</blockquote>
`
},{
  slug: "phases-algorithms-total-complexity",
  title: "Phases in Algorithms and Total Complexity",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-19",
  excerpt: "When your algorithm does multiple steps one after another, the total time is the sum of each phase. But Big O keeps only the largest.",
  tags: ["phases", "total complexity", "Big O", "analysis"],
  html: `
<p>Many algorithms have distinct phases: first read input, then sort, then process. The total time is the sum of the times of each phase. But when we express it in Big O, we drop everything except the slowest (dominant) phase.</p>

<h2>The sum rule</h2>
<p>If Phase A takes O(f(n)) and Phase B takes O(g(n)), then total time is O(f(n) + g(n)) = O(max(f(n), g(n))). The slower phase dominates.</p>

<h2>Example: sort then scan</h2>
<pre><code>// Phase 1: sort the array  O(n log n)
sort(arr.begin(), arr.end());
// Phase 2: find maximum difference  O(n)
int diff = 0;
for (int i = 1; i < n; i++) {
    diff = max(diff, arr[i] - arr[i-1]);
}
// Total complexity: O(n log n + n) = O(n log n)
</code></pre>
<p>Since O(n log n) grows faster than O(n), we ignore the linear phase.</p>

<h2>Example: two independent O(n) phases</h2>
<pre><code>// Phase 1: sum all elements  O(n)
for (int i = 0; i < n; i++) sum += a[i];
// Phase 2: find minimum  O(n)
int mn = a[0];
for (int i = 1; i < n; i++) mn = min(mn, a[i]);
// Total: O(n + n) = O(2n) = O(n)
</code></pre>
<p>The constant 2 disappears; it's still O(n).</p>

<h2>When phases are not independent</h2>
<p>Sometimes the output of one phase becomes the input of the next, but the time analysis still adds them. For example, building a data structure (O(n)) then answering q queries (O(q log n)). Total = O(n + q log n). If q is also large, the O(q log n) may dominate.</p>

<h2>Common mistake: forgetting the slow phase</h2>
<p>If you have a O(n<sup>2</sup>) phase and then a O(n) phase, the total is O(n<sup>2</sup>). Don't be mislead by the fast phase  the slow one sets the limit.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Total complexity = sum of complexities of consecutive phases.</li>
  <li>In Big O, the largest term wins.</li>
  <li>If two phases have the same order, the constant adds up but the order stays the same.</li>
  <li>Always analyse the slowest part of your solution first.</li>
</ul>

<blockquote>A chain is only as strong as its weakest link. An algorithm is only as fast as its slowest phase. Find that phase and optimise it.</blockquote>
`
},{
  slug: "time-complexity-multiple-variables-onm",
  title: "Time Complexity with Multiple Variables O(nm)",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-19",
  excerpt: "Not all problems have a single input size. When you have two independent dimensions, the complexity can be O(nm)  product, not sum.",
  tags: ["time complexity", "multiple variables", "O(nm)", "analysis"],
  html: `
<p>Many problems give you two or more independent parameters: the length of a string and the number of queries, or the number of rows and columns in a grid. In such cases, the complexity often depends on the product, not just one variable.</p>

<h2>The product rule</h2>
<p>If you have nested loops where the outer loop runs n times and the inner loop runs m times (independent), the complexity is O(n * m). This is different from O(n<sup>2</sup>) because n and m can be different sizes.</p>

<h2>Example: grid traversal</h2>
<pre><code>// n rows, m columns
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        // constant work
    }
}
// Complexity = O(n * m)
</code></pre>
<p>If n = 1000 and m = 1000, it's 1e6 operations (fine). If n = 1000, m = 100000, it's 1e8 operations (maybe borderline).</p>

<h2>Another example: comparing two arrays</h2>
<pre><code>for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        if (a[i] == b[j]) count++;
    }
}
// O(n * m)
</code></pre>
<p>If n and m are both large (e.g., 10<sup>5</sup>), product is 10<sup>10</sup>  too slow. You need a better approach like hashing.</p>

<h2>When the loops are not nested</h2>
<p>If you have two separate loops, one over n and one over m, the complexity is O(n + m), not O(nm). For example: read n numbers, then read m numbers  that's linear in the sum.</p>

<h2>Multiple variables in Big O notation</h2>
<p>We write O(n + m) or O(n log n + m log m) or O(nm) explicitly. It's important to keep both variables when they are independent.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Nested loops over different sizes  O(n * m).</li>
  <li>Separate loops  O(n + m).</li>
  <li>Always check if n and m are both up to 10<sup>5</sup>, then O(nm) is impossible.</li>
  <li>Sometimes you can reduce O(nm) to O(n log n + m log n) using data structures.</li>
</ul>

<blockquote>Don't assume one variable dominates. Read the constraints carefully  the product might be the real monster.</blockquote>
`
},{
  slug: "recursion-time-complexity-analysis",
  title: "Recursion Time Complexity Analysis",
  topic: "Algorithm Analysis",
  difficulty: "Medium",
  readMinutes: 9,
  date: "2026-05-19",
  excerpt: "Analyzing recursive functions requires recurrence relations. Learn the master theorem and common patterns like binary search and divide & conquer.",
  tags: ["recursion", "time complexity", "recurrence", "master theorem"],
  html: `
<p>Recursion can be tricky to analyse because the function calls itself. The time complexity depends on how many recursive calls are made and how the input size shrinks each time. We use <strong>recurrence relations</strong> to model this.</p>

<h2>The basic idea</h2>
<p>Let T(n) be the time for input size n. If the function makes a recursive calls on subproblems of size n/b and does O(n<sup>k</sup>) work outside the calls, we write:</p>
<pre><code>T(n) = a * T(n/b) + O(n^k)</code></pre>

<h2>Example 1: linear recursion (factorial)</h2>
<pre><code>int fact(int n) {
    if (n == 0) return 1;
    return n * fact(n-1);
}</code></pre>
<p>Here, a=1, b=1? Actually n reduces by 1, not divided. Recurrence: T(n) = T(n-1) + O(1). This solves to O(n).</p>

<h2>Example 2: binary search</h2>
<pre><code>int binarySearch(int arr[], int l, int r, int x) {
    if (r >= l) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) return binarySearch(arr, l, mid-1, x);
        return binarySearch(arr, mid+1, r, x);
    }
    return -1;
}</code></pre>
<p>Recurrence: T(n) = T(n/2) + O(1). Solving: T(n) = O(log n).</p>

<h2>Example 3: merge sort</h2>
<pre><code>void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
        merge(arr, l, m, r); // O(n) time
    }
}</code></pre>
<p>Recurrence: T(n) = 2T(n/2) + O(n). Solves to O(n log n).</p>

<h2>The master theorem (quick reference)</h2>
<p>For T(n) = a T(n/b) + O(n<sup>k</sup>), where a  1, b > 1, k  0:</p>
<ul>
  <li>If a < b<sup>k</sup>  T(n) = O(n<sup>k</sup>)</li>
  <li>If a = b<sup>k</sup>  T(n) = O(n<sup>k</sup> log n)</li>
  <li>If a > b<sup>k</sup>  T(n) = O(n<sup>log<sub>b</sub> a</sup>)</li>
</ul>
<p>For merge sort: a=2, b=2, k=1. b<sup>k</sup> = 2, so a = b<sup>k</sup>  O(n log n).</p>

<h2>Exponential recursion: naive Fibonacci</h2>
<pre><code>int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}</code></pre>
<p>Recurrence: T(n) = T(n-1) + T(n-2) + O(1). This solves to O(2<sup>n</sup>)  very bad.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Write the recurrence: T(n) = a T(n/b) + f(n).</li>
  <li>Identify the number of calls (a) and the reduction factor (b).</li>
  <li>Memorise the master theorem for common cases.</li>
  <li>If the recursion splits into many calls with small reduction, expect exponential time.</li>
</ul>

<blockquote>Recursion is elegant but can hide explosion. Always write the recurrence and solve it before you code.</blockquote>
`
},{
  slug: "exponential-time-complexity-o2n",
  title: "Exponential Time Complexity O(2^n)",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-19",
  excerpt: "The red line: O(2^n) algorithms become impossibly slow for n > 30. Learn to recognise them and when they are actually acceptable.",
  tags: ["exponential", "O(2^n)", "time complexity", "subset"],
  html: `
<p>Exponential time is the nightmare of cp. When your algorithm runs in O(2<sup>n</sup>), even n = 50 gives a trillion operations  impossible. But for n  20, it's often the only way (e.g., bruteforcing all subsets). Let's understand where it comes from and when it's usable.</p>

<h2>What does O(2<sup>n</sup>) mean?</h2>
<p>It means the running time doubles (or multiplies by a constant factor) when you add just one more element. For n=10, about 1024 operations. For n=20, about 1 million. For n=30, about 1 billion. For n=40, 1 trillion  too many.</p>

<h2>Common sources of O(2<sup>n</sup>)</h2>
<ul>
  <li>Enumerating all subsets of a set of n elements: exactly 2<sup>n</sup> subsets.</li>
  <li>Enumerating all binary strings of length n: 2<sup>n</sup>.</li>
  <li>Naive recursion for Fibonacci (T(n) = T(n-1) + T(n-2)) gives about 1.618<sup>n</sup>, which is still exponential.</li>
  <li>Backtracking without pruning on n items.</li>
</ul>

<h2>Example: subset sum brute force</h2>
<pre><code>for (int mask = 0; mask < (1 << n); mask++) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        if (mask >> i & 1) sum += a[i];
    }
    if (sum == target) found = true;
}
// Complexity: O(2^n * n) which is still exponential.
</code></pre>
<p>For n=20, that's about 20 million operations  fine. For n=30, 30 billion  too slow.</p>

<h2>When is O(2<sup>n</sup>) acceptable?</h2>
<p>When constraints are small: n  20 or sometimes n  25. If the problem says "n  15", exponential is expected. If n  10<sup>5</sup>, you need polynomial time.</p>

<h2>Optimising exponential algorithms</h2>
<ul>
  <li>Meetinthemiddle reduces 2<sup>n</sup> to about 2<sup>n/2</sup> (e.g., from 2<sup>40</sup> to 2<sup>20</sup>).</li>
  <li>Pruning (branch and bound) can cut many branches.</li>
  <li>Bitmask DP often runs in O(2<sup>n</sup> * n) and is acceptable for n  20.</li>
</ul>

<h2>Other exponential growths</h2>
<p>O(3<sup>n</sup>) is even worse (e.g., enumerating all assignments to ternary variables). O(n!) is factorial  even worse than exponential. For n=10, n! = 3.6 million; n=20, n! is astronomically huge.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>2<sup>20</sup>  1 million, 2<sup>30</sup>  1 billion, 2<sup>40</sup>  1 trillion.</li>
  <li>Exponential solutions are only for tiny n (usually  20).</li>
  <li>If you see n  30, think about meetinthemiddle.</li>
  <li>Never write an exponential algorithm when n can be 10<sup>5</sup>  you'll TLE.</li>
</ul>

<blockquote>Exponential time is like a firework  impressive for small n, but it explodes in your face when n grows. Respect the limits.</blockquote>
`
},{
  slug: "common-complexity-classes",
  title: "Common Complexity Classes: O(1), O(log n), O(n), O(n log n), O(n^2), O(n^3)",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-19",
  excerpt: "The six most important time complexities you'll encounter, with examples and typical constraints for each.",
  tags: ["complexity classes", "Big O", "O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n^2)", "O(n^3)"],
  html: `
<p>You'll see these six complexity classes everywhere. Memorise them, understand their growth, and know roughly how large n can be for each to pass in 1 second on a modern judge.</p>

<h2>O(1)  constant time</h2>
<p>No matter the input size, the algorithm takes the same time. Examples: array access by index, arithmetic operations, hash table lookup. Constraints: any n (up to 10<sup>18</sup>).</p>

<h2>O(log n)  logarithmic</h2>
<p>Incredibly fast. Doubling n adds only one extra step. Examples: binary search, balanced tree operations, bit length functions. Typical max n: 10<sup>18</sup> (log2  60).</p>

<h2>O(n)  linear</h2>
<p>Time scales directly with n. Examples: scanning an array, finding min/max, simple loops. Typical max n: 10<sup>7</sup> to 10<sup>8</sup> in C++ with simple operations.</p>

<h2>O(n log n)  linearithmic</h2>
<p>Most efficient sorting algorithms (merge sort, heap sort, std::sort). Also many divide & conquer algorithms. Typical max n: 10<sup>6</sup> (1e6 * log2(1e6)  20e6 operations). Safe for n up to 210<sup>5</sup>.</p>

<h2>O(n<sup>2</sup>)  quadratic</h2>
<p>Two nested loops. Often the limit for brute force. Typical max n: 5000 to 10,000 (25 million to 100 million ops). For n=10<sup>5</sup>, quadratic is impossible.</p>

<h2>O(n<sup>3</sup>)  cubic</h2>
<p>Three nested loops. Examples: FloydWarshall, naive matrix multiplication. Typical max n: 500 (125 million ops). For n=1000, it's borderline.</p>

<h2>Comparison table (approximate max n for 1 second in C++)</h2>
<ul>
  <li>O(log n): n = 10<sup>18</sup> (unlimited)</li>
  <li>O(n): n = 10<sup>8</sup> (with simple ops)</li>
  <li>O(n log n): n = 210<sup>6</sup></li>
  <li>O(n<sup>2</sup>): n = 10<sup>4</sup></li>
  <li>O(n<sup>3</sup>): n = 500</li>
  <li>O(2<sup>n</sup>): n = 20</li>
  <li>O(n!): n = 10</li>
</ul>

<h2>How to decide which class you need</h2>
<p>Look at constraints. If n  10<sup>5</sup>, aim for O(n log n). If n  10<sup>4</sup>, O(n<sup>2</sup>) might pass. If n  500, O(n<sup>3</sup>) is okay. If n  20, think about exponential or bitmask.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>O(1) < O(log n) < O(n) < O(n log n) < O(n<sup>2</sup>) < O(n<sup>3</sup>) < O(2<sup>n</sup>).</li>
  <li>Constants matter but not for the class.</li>
  <li>Always match your algorithm's complexity to the constraints.</li>
  <li>When in doubt, aim for O(n log n)  it's almost always safe for cp.</li>
</ul>

<blockquote>The complexity class is your first filter. If your O(n<sup>2</sup>) algorithm meets n=10<sup>5</sup> constraints, you need a better plan.</blockquote>
`
},{
  slug: "polynomial-vs-np-hard-problems",
  title: "Polynomial vs NP-Hard Problems",
  topic: "Algorithm Analysis",
  difficulty: "Medium",
  readMinutes: 9,
  date: "2026-05-19",
  excerpt: "Why some problems seem impossible to solve efficiently  a gentle introduction to P, NP, and NPHard without heavy theory.",
  tags: ["P", "NP", "NP-hard", "complexity theory", "polynomial"],
  html: `
<p>You may have heard of "NPHard" problems like the travelling salesman problem (TSP). No one knows a fast (polynomial time) solution for them. In cp, if a problem is NPHard, you either solve it with exponential algorithms for small n or use approximation/heuristics. Let's break down what these terms mean.</p>

<h2>Polynomial time (P)</h2>
<p>An algorithm runs in <strong>polynomial time</strong> if its complexity is O(n<sup>k</sup>) for some constant k. Examples: O(n), O(n<sup>2</sup>), O(n<sup>3</sup>), O(n log n) (which is even smaller than n<sup>2</sup>). Polynomial time is considered "efficient". Most cp problems expect polynomial solutions.</p>

<h2>What is NP?</h2>
<p>NP stands for "nondeterministic polynomial time". A problem is in NP if a proposed solution can be <strong>verified</strong> in polynomial time. For example, given a Hamiltonian cycle in a graph, you can check it's valid quickly. But finding that cycle might be hard.</p>

<h2>NPHard and NPComplete</h2>
<p>A problem is <strong>NPHard</strong> if every problem in NP can be reduced to it in polynomial time. In simple words: it's at least as hard as the hardest problems in NP. If you could solve one NPHard problem in polynomial time, you could solve <em>all</em> NP problems in polynomial time. That's not known to be possible.</p>
<p><strong>NPComplete</strong> problems are those that are both in NP and NPHard. Examples: SAT, TSP, Hamiltonian path, subset sum.</p>

<h2>What does this mean for cp?</h2>
<p>If a problem is NPHard (like "find the shortest route visiting all cities"), you cannot expect a polynomial time solution for large n. The problem setter will give small constraints (n  20) so that exponential solutions like O(2<sup>n</sup> * n<sup>2</sup>) can pass. Or they might ask for an approximation or special case.</p>

<h2>Examples of NPHard problems you might see</h2>
<ul>
  <li>Travelling Salesman Problem (TSP)  find shortest Hamiltonian cycle.</li>
  <li>Subset Sum  does any subset sum to target? (but with small numbers it's pseudopolynomial).</li>
  <li>Graph coloring  assign colors to vertices with no adjacent same color.</li>
  <li>Clique  find the largest complete subgraph.</li>
</ul>

<h2>When you see small constraints (n  20)</h2>
<p>That's a strong hint that the problem might be NPHard and you should use bitmask DP, meetinthemiddle, or backtracking. For n  40, meetinthemiddle on subsets (2<sup>20</sup>) works.</p>

<h2>P vs NP  the million dollar question</h2>
<p>No one knows if P = NP. If it turned out that P = NP, many hard problems would have fast solutions. Most experts believe P  NP. In cp, we assume NPHard problems require exponential time for the worst case.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Polynomial time = efficient (O(n<sup>k</sup>)).</li>
  <li>NPHard = no known polynomial solution; expect small constraints.</li>
  <li>If a problem has n  20, think exponential (2<sup>n</sup>).</li>
  <li>Don't try to solve an NPHard problem with n=1000 using brute force  it's impossible.</li>
</ul>

<blockquote>NPHard problems are the boss fights of cp. They force you to be clever with exponential algorithms and tiny constraints. Respect them, but don't fear them  just read the limits.</blockquote>
`
},
{
  slug: "estimating-runtime-from-time-complexity",
  title: "Estimating Runtime from Time Complexity and Input Size",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-19",
  excerpt: "How to guess if your O(n^2) solution will pass when n = 10^5. Learn to multiply constants and compare with typical judge speed.",
  tags: ["runtime estimation", "time complexity", "Big O", "performance"],
  html: `
<p>You've computed the time complexity of your algorithm. Now what? Does it actualy run in time? You need to estimate the number of operations and compare it to the judge's speed. A typical online judge can handle about <strong>10<sup>8</sup> simple operations per second</strong> in C++ (give or take). Let's learn to estimate.</p>

<h2>The basic formula</h2>
<p>If your algorithm does f(n) operations, the runtime in seconds  f(n) / (operations per second). For n = 10<sup>5</sup>, an O(n) algorithm does about 10<sup>5</sup> ops  trivial. An O(n<sup>2</sup>) algorithm does 10<sup>10</sup> ops  about 100 seconds, too slow.</p>

<h2>Including constants</h2>
<p>Big O hides constants, but they matter for estimation. For example, scanning an array and doing 10 operations per element is O(n) but 10n operations. For n = 10<sup>7</sup>, that's 10<sup>8</sup> ops  still okay. But if you do 1000 operations per element, 10<sup>10</sup> ops  too slow.</p>

<h2>Common operation counts per second</h2>
<ul>
  <li>Simple loops with integer arithmetic: ~210<sup>8</sup> ops/sec.</li>
  <li>Heavy operations (division, modulo, function calls): ~510<sup>7</sup> ops/sec.</li>
  <li>STL operations (map, set) have higher constants.</li>
</ul>

<h2>Example: estimating for n = 10<sup>5</sup></h2>
<p>O(n log n) with n=1e5: n log2 n  1e5 * 17 = 1.7e6 ops  fast. O(n<sup>2</sup>) with n=1e5: 1e10 ops  impossible. O(n sqrt(n)) with n=1e5: sqrt(1e5)  316, product  3.16e7  borderline but often passes.</p>

<h2>How to test locally</h2>
<p>Before submitting, run your code on the maximum input size (generated randomly) and see if it finishes under 2 seconds. If it's close, optimise: use faster I/O, avoid unnecessary copies, use arrays instead of vectors when possible.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Judge speed varies  some are slower (1e8 ops/sec), some faster (3e8).</li>
  <li>Always add a safety margin  if your estimate says 0.9 seconds, it might TLE on slower hardware.</li>
  <li>Use <code>chrono</code> to time your code locally.</li>
  <li>When in doubt, aim for complexity that's at least 10x below the limit.</li>
</ul>

<blockquote>Estimating runtime is like weather forecasting  not exact, but good enough to decide if you need an umbrella (or a better algorithm).</blockquote>
`
},{
  slug: "input-size-vs-required-time-complexity-table",
  title: "Input Size vs Required Time Complexity Table",
  topic: "Algorithm Analysis",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-19",
  excerpt: "A quick lookup table: given n, what complexity is needed to pass? From n=10 to n=10^8.",
  tags: ["time complexity", "input size", "table", "estimation"],
  html: `
<p>You see n  10<sup>5</sup> in the problem statement. You think of an O(n<sup>2</sup>) solution. Will it pass? Probably not. Here's a handy table that tells you what complexity you should aim for given the maximum input size. This is based on a judge doing about 10<sup>8</sup> operations per second.</p>

<h2>The master table</h2>
<table border="1" cellpadding="5">
  <tr><th>Input size n</th><th>Acceptable complexity</th><th>Example algorithms</th></tr>
  <tr><td>n  10</td><td>O(n!), O(2<sup>n</sup> * n)</td><td>brute force permutations, TSP</td></tr>
  <tr><td>n  20</td><td>O(2<sup>n</sup> * n), O(n<sup>3</sup>)</td><td>bitmask DP, DP over subsets</td></tr>
  <tr><td>n  30</td><td>O(2<sup>n/2</sup>)</td><td>meetinthemiddle</td></tr>
  <tr><td>n  500</td><td>O(n<sup>3</sup>)</td><td>FloydWarshall, DP on intervals</td></tr>
  <tr><td>n  5000</td><td>O(n<sup>2</sup>)</td><td>double loops, basic DP</td></tr>
  <tr><td>n  10<sup>5</sup></td><td>O(n log n), O(n sqrt(n))</td><td>sorting, divide & conquer, Fenwick tree</td></tr>
  <tr><td>n  10<sup>6</sup></td><td>O(n), O(n log n) borderline</td><td>linear scan, prefix sums</td></tr>
  <tr><td>n  10<sup>7</sup></td><td>O(n)</td><td>simple loop, reading input</td></tr>
  <tr><td>n > 10<sup>8</sup></td><td>O(log n), O(1)</td><td>binary search, math formula</td></tr>
</table>

<h2>How to use the table</h2>
<p>Look at the constraints. If n  2000, you can write O(n<sup>2</sup>) without worry. If n  200,000, you need O(n log n) or better. If n  10<sup>7</sup>, you can't even afford O(n log n)  keep it linear.</p>

<h2>What about multiple test cases?</h2>
<p>If there are T test cases each of size n, total work = T * f(n). If T is large (e.g., 10<sup>5</sup>), even O(n) per test case might be too slow. Then you need O(log n) or O(1) per test case.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Constants matter  a heavy O(n) with 1000 ops per element may be slower than a light O(n log n).</li>
  <li>Memory access patterns also affect runtime.</li>
  <li>When in doubt, write a quick local test with maximum input.</li>
  <li>For n  20, exponential is fine; for n  10<sup>5</sup>, exponential is suicide.</li>
</ul>

<blockquote>This table is your cheat sheet for every contest. Memorise it, and you'll never waste time on an algorithm that's doomed from the start.</blockquote>
`
},{
  slug: "maximum-subarray-sum-problem-statement",
  title: "Maximum Subarray Sum Problem Statement",
  topic: "Classic Problems",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-19",
  excerpt: "The problem that teaches you to go from O(n^3) to O(n)  a must-know for every coder.",
  tags: ["maximum subarray", "Kadane", "problem statement", "classic"],
  html: `
<p>The <strong>maximum subarray sum</strong> problem is one of the most famous in cp. Given an array of integers (which can be negative), find the contiguous subarray (nonempty) with the largest sum. Sounds simple, but it's a perfect playground for optimising from brute force to linear time.</p>

<h2>Formal definition</h2>
<p>Input: an array A of length n (n  1). Output: max{ A[i] + A[i+1] + ... + A[j] } over all 1  i  j  n.</p>

<h2>Example</h2>
<pre><code>A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]</code></pre>
<p>The subarray [4, -1, 2, 1] has sum 4 + (-1) + 2 + 1 = 6. That's the maximum. No other contiguous segment gives a larger sum.</p>

<h2>Why it's important</h2>
<p>This problem appears directly in many contests, and its idea (Kadane's algorithm) is used in more complex DP problems like maximum submatrix sum, best time to buy/sell stock, and even in some tree path problems.</p>

<h2>Edge cases</h2>
<ul>
  <li>All numbers negative  the maximum subarray is the single largest element (least negative).</li>
  <li>All numbers positive  the whole array is the answer.</li>
  <li>Array of length 1  answer is that element.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Subarray must be contiguous (not subsequence).</li>
  <li>Empty subarray is usualy not allowed (sum would be 0, but if all numbers are negative, 0 would be wrong).</li>
  <li>The problem can be solved in O(n) with Kadane's algorithm.</li>
</ul>

<blockquote>Mastering maximum subarray sum is like learning to ride a bike  once you get it, you'll never forget, and it will take you places.</blockquote>
`
},
{
  slug: "brute-force-maximum-subarray-on3",
  title: "Brute Force O(n^3) Solution for Maximum Subarray Sum",
  topic: "Classic Problems",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-19",
  excerpt: "The most obvious solution: check every possible subarray. It's simple but unusable for large n.",
  tags: ["maximum subarray", "brute force", "O(n^3)", "nested loops"],
  html: `
<p>When you first see the maximum subarray sum problem, the natural idea is: try every possible starting index i, every possible ending index j, and sum the elements from i to j. That's three nested loops  O(n<sup>3</sup>). It works for n  200, but fails for n = 10<sup>5</sup>. Let's see the code and analize its inefficiency.</p>

<h2>The O(n<sup>3</sup>) implementation</h2>
<pre><code>int maxSum = INT_MIN;
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        int sum = 0;
        for (int k = i; k <= j; k++) {
            sum += arr[k];
        }
        maxSum = max(maxSum, sum);
    }
}
cout << maxSum << "\\n";</code></pre>

<h2>Why it's O(n<sup>3</sup>)</h2>
<p>Outer loop i: n iterations. Middle loop j: about n/2 on average. Inner loop k: about n/2 on average. Total  n * (n/2) * (n/2) = n<sup>3</sup>/4 = O(n<sup>3</sup>). For n=1000, that's 250 million operations  borderline but maybe okay in C++. For n=10<sup>4</sup>, it's 250 billion  impossible.</p>

<h2>When would you use this?</h2>
<p>Almost never. Only if n  200 and you're too lazy to optimise. But it's a good starting point to understand the problem and see how we can improve.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>This approach recomputes sums from scratch each time.</li>
  <li>It's very simple to code and hard to get wrong.</li>
  <li>But it's practicly useless for real cp problems.</li>
  <li>Always check constraints before writing triple loops.</li>
</ul>

<blockquote>O(n<sup>3</sup>) is the sledgehammer  it works when the nail is tiny, but for anything bigger you need precision tools.</blockquote>
`
},
{
  slug: "improving-maximum-subarray-to-on2",
  title: "Improving Maximum Subarray Sum to O(n^2)",
  topic: "Classic Problems",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-19",
  excerpt: "Remove the innermost loop by reusing prefix sums or cumulative totals. Now n=5000 becomes feasible.",
  tags: ["maximum subarray", "O(n^2)", "prefix sum", "optimization"],
  html: `
<p>The O(n<sup>3</sup>) solution recomputes the sum of each subarray from scratch. But we can be smarter: when we extend the ending index j by one, we just add the new element to the previous sum. That eliminates the innermost loop and brings complexity down to O(n<sup>2</sup>).</p>

<h2>The O(n<sup>2</sup>) implementation</h2>
<pre><code>int maxSum = INT_MIN;
for (int i = 0; i < n; i++) {
    int currentSum = 0;
    for (int j = i; j < n; j++) {
        currentSum += arr[j];
        maxSum = max(maxSum, currentSum);
    }
}
cout << maxSum << "\\n";</code></pre>
<p>We maintain <code>currentSum</code> for subarrays starting at i and ending at j, updating it in O(1) per j. Total operations  n * (n/2) = O(n<sup>2</sup>).</p>

<h2>How much better is it?</h2>
<p>For n=1000: O(n<sup>3</sup>) = 1e9 ops (too slow), O(n<sup>2</sup>) = 1e6 ops (fast). For n=5000: O(n<sup>2</sup>) = 25e6 ops  acceptable in C++. For n=10<sup>5</sup>, O(n<sup>2</sup>) = 1e10 ops  still too slow. So we need even better.</p>

<h2>Alternative: prefix sum array</h2>
<pre><code>vector&ltint&gt prefix(n+1, 0);
for (int i = 0; i < n; i++) prefix[i+1] = prefix[i] + arr[i];
int maxSum = INT_MIN;
for (int i = 0; i < n; i++)
    for (int j = i; j < n; j++)
        maxSum = max(maxSum, prefix[j+1] - prefix[i]);</code></pre>
<p>This also O(n<sup>2</sup>), but uses extra space. The incremental method is simpler.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Eliminating redundant recomputation is a common optimisation.</li>
  <li>O(n<sup>2</sup>) is good for n  5000, not for n  10<sup>5</sup>.</li>
  <li>This approach is still brute force over all start positions.</li>
  <li>Next step: Kadane's algorithm (O(n)).</li>
</ul>

<blockquote>Each optimisation step teaches you something new. Going from O(n<sup>3</sup>) to O(n<sup>2</sup>) shows the power of incremental updates.</blockquote>
`
},{
  slug: "kadanes-algorithm-on-maximum-subarray",
  title: "Kadane's Algorithm: O(n) Maximum Subarray Sum",
  topic: "Classic Problems",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-19",
  excerpt: "The famous linear time solution  keep track of the best subarray ending at each position. Simple and elegant.",
  tags: ["Kadane", "maximum subarray", "O(n)", "dynamic programming"],
  html: `
<p>Kadane's algorithm is a beautiful example of dynamic programming on the fly. The key insight: the maximum subarray ending at position i is either the element itself (starting a new subarray) or the previous best plus the current element. That gives us a simple recurrence and an O(n) solution.</p>

<h2>The recurrence</h2>
<p>Let dp[i] = maximum sum of a subarray that ends at index i. Then:</p>
<pre><code>dp[i] = max(arr[i], dp[i-1] + arr[i])</code></pre>
<p>Why? Because you either start fresh at i, or you extend the best subarray ending at i-1. Then the overall answer is max(dp[i]) over all i.</p>

<h2>The code (space optimised)</h2>
<pre><code>int currentSum = arr[0];
int maxSum = arr[0];
for (int i = 1; i < n; i++) {
    currentSum = max(arr[i], currentSum + arr[i]);
    maxSum = max(maxSum, currentSum);
}
cout << maxSum << "\\n";</code></pre>
<p>We don't need an array  just keep the previous value in a variable.</p>

<h2>Handling all negative numbers</h2>
<p>If all numbers are negative, the algorithm correctly picks the largest (least negative) single element. Because <code>max(arr[i], currentSum + arr[i])</code> will always choose arr[i] if currentSum is negative, so the maximum will be the maximum element.</p>

<h2>Why it's O(n)</h2>
<p>We pass through the array once, doing constant work per element. That's optimal because you have to look at every element at least once.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Kadane's algorithm is a form of DP with O(1) space.</li>
  <li>It works for both positive and negative numbers.</li>
  <li>If empty subarrays were allowed (sum 0), you'd initialise maxSum = 0 and currentSum = 0, and use max(0, currentSum + arr[i]).</li>
  <li>It's one of the most frequently asked interview questions.</li>
</ul>

<blockquote>Kadane's algorithm is like a magic trick  it looks too simple to work, but it's flawless. Once you see it, you'll never compute max subarray any other way.</blockquote>
`
},{
  slug: "step-by-step-kadane-cpp",
  title: "Step-by-Step Kadane's Algorithm in C++",
  topic: "Classic Problems",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-19",
  excerpt: "A detailed walkthrough of Kadane's algorithm with a concrete example and dry run.",
  tags: ["Kadane", "step by step", "C++", "walkthrough"],
  html: `
<p>Let's take the array <code>[-2, 1, -3, 4, -1, 2, 1, -5, 4]</code> and run Kadane's algorithm by hand. I'll show you how currentSum and maxSum change at each step. This will make the recurrence crystal clear.</p>

<h2>Initial state</h2>
<pre><code>arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
currentSum = arr[0] = -2
maxSum = -2</code></pre>

<h2>Step-by-step table</h2>
<table border="1" cellpadding="4">
  <tr><th>i</th><th>arr[i]</th><th>currentSum = max(arr[i], currentSum + arr[i])</th><th>maxSum = max(maxSum, currentSum)</th></tr>
  <tr><td>0</td><td>-2</td><td>initial -2</td><td>-2</td></tr>
  <tr><td>1</td><td>1</td><td>max(1, -2+1=-1) = 1</td><td>max(-2,1)=1</td></tr>
  <tr><td>2</td><td>-3</td><td>max(-3, 1-3=-2) = -2</td><td>max(1,-2)=1</td></tr>
  <tr><td>3</td><td>4</td><td>max(4, -2+4=2) = 4</td><td>max(1,4)=4</td></tr>
  <tr><td>4</td><td>-1</td><td>max(-1, 4-1=3) = 3</td><td>max(4,3)=4</td></tr>
  <tr><td>5</td><td>2</td><td>max(2, 3+2=5) = 5</td><td>max(4,5)=5</td></tr>
  <tr><td>6</td><td>1</td><td>max(1, 5+1=6) = 6</td><td>max(5,6)=6</td></tr>
  <tr><td>7</td><td>-5</td><td>max(-5, 6-5=1) = 1</td><td>max(6,1)=6</td></tr>
  <tr><td>8</td><td>4</td><td>max(4, 1+4=5) = 5</td><td>max(6,5)=6</td></tr>
</table>

<p>The final maxSum is 6, which comes from the subarray [4, -1, 2, 1] (indices 3 to 6).</p>

<h2>Reconstructing the subarray</h2>
<p>If you need the actual subarray (not just the sum), keep track of start and end indices. When currentSum becomes arr[i] (starting fresh), update a temporary start. When maxSum updates, record the current start and i as the best range.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Dry run with a small example to build intuition.</li>
  <li>The algorithm works in a single pass.</li>
  <li>It's easy to memorise once you understand the recurrence.</li>
  <li>Practice on random arrays to internalise it.</li>
</ul>

<blockquote>Walking through the algorithm step by step is like watching a master at work  you see the elegance unfold. Do it once, and you'll never forget.</blockquote>
`
},{
  slug: "efficiency-comparison-maximum-subarray",
  title: "Efficiency Comparison of Maximum Subarray Sum Algorithms",
  topic: "Classic Problems",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-19",
  excerpt: "O(n^3) vs O(n^2) vs O(n)  how much faster is Kadane? Numbers that will shock you.",
  tags: ["efficiency", "comparison", "Kadane", "maximum subarray"],
  html: `
<p>We've seen three solutions: O(n<sup>3</sup>), O(n<sup>2</sup>), and O(n). But what does that mean in actual runtime? Let's compare them for different input sizes. The differences are astronomical.</p>

<h2>Theoretical operation counts</h2>
<p>Assume n = 10,000.</p>
<ul>
  <li>O(n<sup>3</sup>): about 1e12 operations (impossible).</li>
  <li>O(n<sup>2</sup>): about 5e7 operations (0.5 seconds maybe).</li>
  <li>O(n): about 1e4 operations (instant).</li>
</ul>

<h2>Measured approximate times (C++, -O2)</h2>
<table border="1" cellpadding="5">
  <tr><th>n</th><th>O(n<sup>3</sup>)</th><th>O(n<sup>2</sup>)</th><th>O(n)</th></tr>
  <tr><td>100</td><td>0.05 sec</td><td>0.0001 sec</td><td>0.000001 sec</td></tr>
  <tr><td>1,000</td><td>50 sec</td><td>0.01 sec</td><td>0.00001 sec</td></tr>
  <tr><td>10,000</td><td>~14 hours</td><td>0.5 sec</td><td>0.0001 sec</td></tr>
  <tr><td>100,000</td><td>centuries</td><td>50 sec</td><td>0.001 sec</td></tr>
</table>

<p>As you can see, O(n<sup>3</sup>) becomes useless after n=500. O(n<sup>2</sup>) works up to n=10,000 but fails at n=100,000. O(n) handles n=10<sup>7</sup> with ease.</p>

<h2>Why the differences are so huge</h2>
<p>When n doubles, O(n) time doubles, O(n<sup>2</sup>) quadruples, O(n<sup>3</sup>) multiplies by 8. That's why algorithms with better complexity are nonnegotiable for large inputs.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Always aim for the lowest possible complexity class for your constraints.</li>
  <li>Kadane's algorithm is not just an optimisation  it's a necessity for large n.</li>
  <li>Constant factors matter, but never enough to make O(n<sup>2</sup>) beat O(n) for n=10<sup>5</sup>.</li>
  <li>When you have a choice, choose linear.</li>
</ul>

<blockquote>The gap between O(n<sup>2</sup>) and O(n) is the difference between waiting a minute and waiting a millisecond. That's the power of good algorithms.</blockquote>
`
},{
  slug: "introduction-to-sorting-algorithms",
  title: "Introduction to Sorting Algorithms",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-19",
  excerpt: "What sorting is, why it's everywhere, and a quick overview of the most important sorting algorithms.",
  tags: ["sorting", "algorithms", "comparison", "introduction"],
  html: `
<p>Sorting is the art of arranging elements in a specific order (ascending, descending, or custom). It's one of the most fundamental operations in computer science. In cp, you'll sort arrays, vectors, strings, and custom objects all the time. Let's see why it's so important and what your options are.</p>

<h2>What does sorting mean?</h2>
<p>Given an array of n elements, sorting rearranges them so that they follow a total order. For numbers, ascending order means each element is  the next. For strings, lexicographic order. Sorting makes many problems easier: searching becomes binary search, duplicates become adjacent, and you can use twopointer techniques.</p>

<h2>Common sorting algorithms (the ones you should know)</h2>
<ul>
  <li><strong>Bubble Sort</strong>  O(n<sup>2</sup>), simple but slow. Good for teaching.</li>
  <li><strong>Merge Sort</strong>  O(n log n), stable, divide & conquer.</li>
  <li><strong>Quick Sort</strong>  O(n log n) average, O(n<sup>2</sup>) worst, fast in practice.</li>
  <li><strong>Counting Sort</strong>  O(n + range), noncomparison, works for small integer ranges.</li>
  <li><strong>std::sort</strong>  hybrid (introsort), the one you'll use 99% of the time.</li>
</ul>

<h2>What is stable sorting?</h2>
<p>A stable sort preserves the relative order of equal elements. For example, if you sort people by age, two 25yearolds keep their original order. Merge sort is stable; quick sort (typical implementation) is not.</p>

<h2>In C++, you don't implement sorting yourself</h2>
<p>Unless you're learning, just use <code>std::sort</code> from <code>&ltalgorithm&gt</code>. It's optimised, fast, and works on any randomaccess container. For arrays: <code>sort(arr, arr+n)</code>. For vectors: <code>sort(v.begin(), v.end())</code>.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Sorting is the first step in many algorithms (binary search, two pointers, greedy intervals).</li>
  <li>The best generalpurpose sorts run in O(n log n).</li>
  <li>Comparison sorts cannot be faster than O(n log n) in the worst case (proved).</li>
  <li>For small n, even O(n<sup>2</sup>) sorts like insertion sort can be faster due to low overhead.</li>
</ul>

<blockquote>Sorting is the Swiss Army knife of cp  you'll reach for it constantly. Master the builtin sort and understand the theory behind it.</blockquote>
`
},{
  slug: "why-sorting-important-problem-solving",
  title: "Why Sorting Is Important in Problem Solving",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-19",
  excerpt: "From binary search to greedy algorithms, sorting unlocks solutions that would otherwise be impossible.",
  tags: ["sorting", "importance", "problem solving", "applications"],
  html: `
<p>You may wonder: why spend so much time on sorting? Because sorted data has magical properties. It allows you to use fast search, simplifies counting, and enables greedy strategies. Let me show you the most common ways sorting helps in cp.</p>

<h2>1. Binary search</h2>
<p>You can only binary search on a sorted array. Once sorted, you can find an element in O(log n) instead of O(n). Many problems are solved by sorting then binary searching the answer.</p>

<h2>2. Two pointers</h2>
<p>Problems like "find two numbers that sum to target" become O(n) after sorting (instead of O(n<sup>2</sup>)). You use one pointer at the start and one at the end.</p>

<h2>3. Greedy interval scheduling</h2>
<p>To maximise the number of nonoverlapping intervals, sort by end time. That's the classic greedy algorithm. Without sorting, you can't make the optimal choice.</p>

<h2>4. Finding duplicates or unique elements</h2>
<p>After sorting, equal elements are adjacent. You can scan once to count frequencies, find duplicates, or compress coordinates.</p>

<h2>5. Median and quantiles</h2>
<p>The median of an array is the middle element after sorting. Many problems ask for the minimum sum of absolute deviations  the answer is the median.</p>

<h2>6. Merge intervals</h2>
<p>To merge overlapping intervals, sort by start time, then scan. This is a classic coding interview problem.</p>

<h2>7. Custom sorting</h2>
<p>You can sort by multiple keys (e.g., first by length, then alphabetically). This allows you to order data exactly as needed for your algorithm.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Sorting is a preprocessing step that makes many problems tractable.</li>
  <li>It costs O(n log n), which is usually acceptable for n up to 10<sup>6</sup>.</li>
  <li>When stuck, think: "Can I sort the input to simplify the problem?"</li>
  <li>Never underestimate the power of sororder.</li>
</ul>

<blockquote>Sorting turns chaos into order. And from order, solutions emerge almost by themselves. That's why it's the first tool you should reach for.</blockquote>
`
},
{
  slug: "sorting-theory-inversions-bubble-sort",
  title: "Sorting Theory: Inversions and Bubble Sort",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-20",
  excerpt: "What is an inversion? How bubble sort works and why its number of swaps equals the inversion count.",
  tags: ["inversions", "bubble sort", "sorting theory", "swap count"],
  html: `
<p>Before we dive into fast sorting algorithms, let's understand a core concept: <strong>inversions</strong>. An inversion is a pair of elements that are out of order. Counting inversions tells you how far an array is from being sorted. Bubble sort, the simplest sort, directly relates to inversion count.</p>

<h2>What is an inversion?</h2>
<p>For an array A, a pair (i, j) with i < j and A[i] > A[j] is called an inversion. Example: [3, 1, 2] has inversions: (3,1) and (3,2)  2 inversions. A sorted array has 0 inversions. A reversed array has n(n-1)/2 inversions.</p>

<h2>Bubble sort algorithm</h2>
<p>Bubble sort repeatedly steps through the array, compares adjacent elements, and swaps them if they're in the wrong order. Each pass moves the largest unsorted element to its correct position at the end. After n-1 passes, the array is sorted.</p>
<pre><code>void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}</code></pre>

<h2>Why bubble sort is O(n<sup>2</sup>)</h2>
<p>Outer loop runs n times, inner loop runs about n/2 times on average  O(n<sup>2</sup>) comparisons. Swaps = number of inversions. In the worst case (reversed array), swaps = n(n-1)/2.</p>

<h2>Inversions and sorting lower bound</h2>
<p>Every swap reduces the inversion count by exactly 1. So any sorting algorithm that only swaps adjacent elements (like bubble sort) must perform at least as many swaps as there are inversions. That's why bubble sort is slow when inversions are many.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Inversion count measures disorder.</li>
  <li>Bubble sort is stable and inplace but too slow for large n.</li>
  <li>Number of swaps in bubble sort = number of inversions.</li>
  <li>You'll rarely use bubble sort in cp, but its concept is foundational.</li>
</ul>

<blockquote>Bubble sort is like watching paint dry  educational but painfully slow. Still, it teaches you the relationship between swaps and inversions.</blockquote>
`
},{
  slug: "bubble-sort-step-by-step-implementation",
  title: "Bubble Sort Step-by-Step Implementation",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-20",
  excerpt: "A detailed walkthrough of bubble sort with optimisation: early termination and pass-by-pass example.",
  tags: ["bubble sort", "implementation", "step by step", "optimisation"],
  html: `
<p>Let's implement bubble sort properly, including an optimisation: if no swaps occur in a pass, the array is already sorted and we can stop early. This makes bubble sort nearly O(n) for nearly sorted arrays.</p>

<h2>Basic bubble sort with early exit</h2>
<pre><code>void bubbleSort(int arr[], int n) {
    bool swapped;
    for (int i = 0; i < n-1; i++) {
        swapped = false;
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}</code></pre>

<h2>Step-by-step example on [5, 1, 4, 2, 8]</h2>
<p>Pass 1 (i=0):<br>
Compare 5>1? swap  [1,5,4,2,8]<br>
Compare 5>4? swap  [1,4,5,2,8]<br>
Compare 5>2? swap  [1,4,2,5,8]<br>
Compare 5>8? no swap.<br>
End pass 1, largest 8 at end.</p>
<p>Pass 2 (i=1):<br>
Compare 1>4? no.<br>
Compare 4>2? swap  [1,2,4,5,8]<br>
Compare 4>5? no.<br>
Swapped occured.</p>
<p>Pass 3 (i=2):<br>
Compare 1>2? no. 2>4? no. 4>5? no. No swaps  break.</p>

<h2>Complexity</h2>
<p>Worst case (reversed): O(n<sup>2</sup>). Best case (already sorted): O(n) because one pass detects no swaps. Average: O(n<sup>2</sup>).</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Always add the early termination flag  it's free and helps.</li>
  <li>Bubble sort is stable (equal elements keep relative order).</li>
  <li>It's useful only for very small n or educational purposes.</li>
  <li>In cp, you'll never use it for sorting  but the inversion concept matters.</li>
</ul>

<blockquote>Bubble sort optimisation is like putting a bandaid on a broken leg  it helps a little, but you still need real surgery (like merge sort).</blockquote>
`
},{
  slug: "number-of-inversions-sorting-lower-bound",
  title: "Number of Inversions and Sorting Lower Bound",
  topic: "Sorting",
  difficulty: "Medium",
  readMinutes: 8,
  date: "2026-05-20",
  excerpt: "Why comparison-based sorts cannot beat O(n log n). The inversion argument and decision tree model.",
  tags: ["inversions", "lower bound", "comparison sort", "O(n log n)"],
  html: `
<p>You may have heard: no comparison-based sorting algorithm can be faster than O(n log n) in the worst case. Why? The answer lies in inversions and information theory. Let's understand the proof intuitively.</p>

<h2>The inversion argument</h2>
<p>A sorted array has 0 inversions. Each comparison between two elements can reduce the number of possible permutations by at most half. There are n! possible permutations of n distinct elements. To identify which one we have, we need at least log2(n!) comparisons.</p>

<h2>Stirling's approximation</h2>
<p>log2(n!)  n log2 n - n log2 e + O(log n). So the minimum number of comparisons in the worst case is (n log n). This is a fundamental limit for any algorithm that only uses comparisons (no assumptions about data).</p>

<h2>Inversion count as a measure</h2>
<p>If an array has I inversions, the best comparison sort still needs at least log2(n!) comparisons, regardless of I. But algorithms like insertion sort run in O(n + I)  good for nearly sorted data. Merge sort always O(n log n).</p>

<h2>What about counting inversions efficiently?</h2>
<p>You can count inversions using merge sort in O(n log n). That's a classic problem. Just modify merge sort to count when an element from the right half is taken before the left half.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Comparison sorts have a lower bound of (n log n).</li>
  <li>Noncomparison sorts (counting sort, radix sort) can be O(n) but have restrictions.</li>
  <li>Inversion count can be computed with merge sort or Fenwick tree.</li>
  <li>Knowing the lower bound helps you appreciate why O(n log n) is optimal.</li>
</ul>

<blockquote>The n log n barrier is not a wall  it's a speed limit. You can't drive faster than it with comparisonbased algorithms. Accept it and move on.</blockquote>
`
},{
  slug: "merge-sort-algorithm-explained",
  title: "Merge Sort Algorithm Explained",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-20",
  excerpt: "Divide and conquer at its finest: split, sort recursively, then merge. Stable and always O(n log n).",
  tags: ["merge sort", "divide and conquer", "stable sort", "recursion"],
  html: `
<p>Merge sort is the classic example of divide and conquer. It's predictable: always O(n log n), stable, but uses extra memory. It's the algorithm behind many stable sorts in libraries. Let's understand how it works.</p>

<h2>The three steps</h2>
<ol>
  <li><strong>Divide:</strong> Split the array into two halves.</li>
  <li><strong>Conquer:</strong> Recursively sort each half.</li>
  <li><strong>Combine:</strong> Merge the two sorted halves into one sorted array.</li>
</ol>

<h2>Merging two sorted arrays</h2>
<p>You have two sorted subarrays. You compare the front elements, take the smaller one, and advance that pointer. This takes O(m) time for m total elements.</p>

<h2>Why it's always O(n log n)</h2>
<p>The recurrence: T(n) = 2T(n/2) + O(n). By master theorem, T(n) = O(n log n). This holds for all inputs  no worstcase slowdown.</p>

<h2>Space complexity</h2>
<p>Merge sort requires O(n) extra space for the temporary array during merging. There are inplace merge sorts, but they're complex and slower. In cp, extra memory is usually fine.</p>

<h2>Example dry run</h2>
<p>Array [38, 27, 43, 3, 9, 82, 10]<br>
Split: [38,27,43,3] and [9,82,10]<br>
Split further until single elements, then merge back.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Merge sort is stable (order of equal elements preserved).</li>
  <li>It's great for linked lists because merging doesn't need random access.</li>
  <li>It's the basis for counting inversions and external sorting.</li>
  <li>In cp, you'll rarely implement it  <code>std::stable_sort</code> often uses merge sort.</li>
</ul>

<blockquote>Merge sort is the reliable workhorse  never too fast, never too slow, always predictable. It's the sort you trust when you need guarantees.</blockquote>
`
},{
  slug: "implementing-merge-sort-in-cpp",
  title: "Implementing Merge Sort in C++",
  topic: "Sorting",
  difficulty: "Medium",
  readMinutes: 9,
  date: "2026-05-20",
  excerpt: "A complete, working C++ implementation of merge sort with a separate merge function and recursion.",
  tags: ["merge sort", "C++", "implementation", "recursion"],
  html: `
<p>Let's write a clean merge sort in C++. We'll use vector for simplicity, but the same logic works for arrays. We'll implement a <code>merge</code> function that combines two sorted halves into a temporary buffer.</p>

<h2>Full code</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

void merge(vector&ltint&gt &arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    vector&ltint&gt L(n1), R(n2);
    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(vector&ltint&gt &arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    vector&ltint&gt arr = {12, 11, 13, 5, 6, 7};
    mergeSort(arr, 0, arr.size() - 1);
    for (int x : arr) cout << x << " ";
    return 0;
}</code></pre>

<h2>Explanation of merge</h2>
<p>We create left and right copies, then compare their front elements, writing the smaller back into the original array. This is stable because when equal, we take from left first.</p>

<h2>Optimisation tips</h2>
<ul>
  <li>Use global temporary vector to avoid reallocation each call.</li>
  <li>For small subarrays (e.g., size < 16), switch to insertion sort for better cache performance.</li>
  <li>Iterative (bottomup) merge sort avoids recursion depth issues.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Merge sort is not inplace  it uses O(n) extra memory.</li>
  <li>Recursive depth is O(log n), safe for n up to 10<sup>6</sup>.</li>
  <li>For cp, use <code>std::sort</code> unless you need stability or custom merging.</li>
  <li>Implementing it yourself is excellent practice.</li>
</ul>

<blockquote>Writing merge sort from scratch is like building a clock  you understand every gear. Once you've done it, you'll never fear divide and conquer again.</blockquote>
`
},{
  slug: "merge-sort-time-complexity-onlogn",
  title: "Merge Sort Time Complexity O(n log n)",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-20",
  excerpt: "Deriving the recurrence T(n) = 2T(n/2) + O(n) and solving it using the master theorem or recursion tree.",
  tags: ["merge sort", "time complexity", "recurrence", "O(n log n)"],
  html: `
<p>Merge sort's time complexity is O(n log n) for all cases (best, average, worst). Let's derive it step by step using a recurrence relation.</p>

<h2>The recurrence</h2>
<p>Let T(n) be the time to sort n elements. Merge sort:</p>
<ul>
  <li>Divides into two halves: each of size n/2  T(n/2) each.</li>
  <li>Merges the two halves: O(n) time.</li>
</ul>
<p>So T(n) = 2T(n/2) + cn, where c is a constant.</p>

<h2>Solving by recursion tree</h2>
<p>Level 0: work = cn<br>
Level 1: 2 * (c n/2) = cn<br>
Level 2: 4 * (c n/4) = cn<br>
...<br>
Number of levels = log2 n.<br>
Total work = cn * log2 n = O(n log n).</p>

<h2>Master theorem verification</h2>
<p>For T(n) = aT(n/b) + O(n<sup>k</sup>), with a=2, b=2, k=1. Since a = b<sup>k</sup> (2 = 2<sup>1</sup>), case 2 applies: T(n) = O(n<sup>k</sup> log n) = O(n log n).</p>

<h2>Why it's not O(n<sup>2</sup>) ever</h2>
<p>Unlike quicksort, merge sort always splits exactly in half. There's no bad pivot case. That's why it's used in realtime systems where worstcase guarantees matter.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Merge sort is (n log n) for all inputs.</li>
  <li>Space complexity O(n) is the tradeoff.</li>
  <li>For large n, O(n log n) is much faster than O(n<sup>2</sup>).</li>
  <li>In cp, O(n log n) is the standard for sorting 10<sup>5</sup>10<sup>6</sup> elements.</li>
</ul>

<blockquote>O(n log n) is the goldilocks complexity  not too slow, not too fast, just right for most sorting tasks.</blockquote>
`
},{
  slug: "quick-sort-overview",
  title: "Quick Sort Overview",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-20",
  excerpt: "The fastest practical sorting algorithm on average, but with a dangerous worst case. How it works and when to use it.",
  tags: ["quick sort", "pivot", "partition", "in-place"],
  html: `
<p>Quick sort is the default sorting algorithm in many libraries because it's very fast in practice. It's inplace, cachefriendly, and averages O(n log n). But it has a worstcase O(n<sup>2</sup>) if you choose pivots poorly. Let's see how it works.</p>

<h2>The algorithm</h2>
<ol>
  <li>Pick a <strong>pivot</strong> element from the array.</li>
  <li><strong>Partition</strong> the array so that elements less than pivot come before, and greater after.</li>
  <li>Recursively sort the left and right subarrays.</li>
</ol>

<h2>Partition step (Lomuto scheme)</h2>
<pre><code>int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i+1], arr[high]);
    return i+1;
}</code></pre>

<h2>Why it's fast</h2>
<p>Inplace sorting means no extra memory allocation. The partition step has good locality of reference (cache friendly). On random data, pivot choices split evenly enough to give O(n log n).</p>

<h2>The worst case</h2>
<p>If the pivot is always the smallest or largest element (e.g., already sorted array with bad pivot choice), recursion becomes T(n) = T(n-1) + O(n) = O(n<sup>2</sup>). That's why randomising the pivot is essential.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Quick sort is not stable (equal elements may change order).</li>
  <li>Use random pivot or medianofthree to avoid worst case.</li>
  <li>In cp, <code>std::sort</code> is usually introsort (quick sort + heap sort fallback).</li>
  <li>For small arrays, quick sort switches to insertion sort.</li>
</ul>

<blockquote>Quick sort is the hare  blazing fast on average, but it can fall asleep (O(n<sup>2</sup>)) if you pick the wrong pivot. Always randomise.</blockquote>
`
},{
  slug: "lower-bound-comparison-sorting-nlogn",
  title: "Lower Bound for Comparison-Based Sorting n log n",
  topic: "Sorting",
  difficulty: "Medium",
  readMinutes: 8,
  date: "2026-05-20",
  excerpt: "A rigorous but intuitive proof that no comparison sort can do better than (n log n) comparisons.",
  tags: ["lower bound", "decision tree", "(n log n)", "information theory"],
  html: `
<p>You can't sort faster than O(n log n) using only comparisons. This is not a conjecture  it's a proven lower bound. Here's the intuition using decision trees.</p>

<h2>Decision tree model</h2>
<p>Any comparisonbased sorting algorithm can be represented as a binary tree. Each internal node is a comparison (a[i]  a[j]?). Each leaf is a permutation (the sorted order). There are n! possible permutations (leaves).</p>

<h2>Height of the tree</h2>
<p>A binary tree with L leaves has height at least ceil(log2 L). Here L  n!. So the minimum number of comparisons in the worst case is at least log2(n!).</p>

<h2>Stirling's approximation</h2>
<p>log2(n!) = n log2 n - n log2 e + O(log n). So lower bound = (n log n).</p>

<h2>What about average case?</h2>
<p>The average number of comparisons is also (n log n) for any comparisonbased sort. Some sorts (like quick sort) have better constants but same asymptotic.</p>

<h2>Noncomparison sorts bypass this</h2>
<p>Counting sort, radix sort, bucket sort don't use comparisons  they exploit the structure of keys (e.g., integers in a small range). They can achieve O(n + k) time, but at the cost of extra assumptions.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>This lower bound only applies to comparisonbased sorts.</li>
  <li>It's a worstcase bound, but average case is also (n log n).</li>
  <li>It's why we celebrate O(n log n) as optimal.</li>
  <li>Knowing it stops you from searching for a mythical O(n) comparison sort.</li>
</ul>

<blockquote>The (n log n) barrier is like the speed of light  you can approach it, but you cannot break it with comparisonbased tools.</blockquote>
`
},{
  slug: "counting-sort-on-non-comparison-sort",
  title: "Counting Sort: O(n) Non-Comparison Sort",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-20",
  excerpt: "When integer ranges are small, counting sort gives linear time. Perfect for sorting grades, ages, or any smalldomain data.",
  tags: ["counting sort", "linear time", "stable sort", "integer sort"],
  html: `
<p>Counting sort breaks the O(n log n) barrier by not comparing elements. Instead, it counts occurrences of each value. It runs in O(n + k) where k is the range of possible values. If k is O(n), then it's linear. But it only works for integers (or things that map to integers).</p>

<h2>How it works</h2>
<ol>
  <li>Find the range (min to max) of the array.</li>
  <li>Create a count array of size range+1, initialised to 0.</li>
  <li>Count each element: count[arr[i]]++.</li>
  <li>Compute prefix sums of count to get positions.</li>
  <li>Place elements into output array in stable order.</li>
</ol>

<h2>C++ implementation (stable version)</h2>
<pre><code>void countingSort(vector&ltint&gt &arr) {
    int maxVal = *max_element(arr.begin(), arr.end());
    vector&ltint&gt count(maxVal + 1, 0);
    for (int x : arr) count[x]++;
    for (int i = 1; i <= maxVal; i++) count[i] += count[i-1];
    vector&ltint&gt output(arr.size());
    for (int i = arr.size() - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    arr = output;
}</code></pre>

<h2>When to use it</h2>
<ul>
  <li>When the range k is not much larger than n (e.g., grades 0100, n=10,000).</li>
  <li>As a subroutine in radix sort.</li>
  <li>When you need a stable sort for integers.</li>
</ul>

<h2>Limitations</h2>
<p>It's not inplace; uses O(k) extra memory. If k is huge (e.g., up to 10<sup>9</sup>), counting sort is impossible. It also only works for discrete values with a known range.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Counting sort is linear when k = O(n).</li>
  <li>It's stable  good for multikey sorting (radix sort).</li>
  <li>Use it for problems with small value ranges (like ages, scores).</li>
  <li>Don't use it for 32bit integers unless you have a huge memory budget.</li>
</ul>

<blockquote>Counting sort is the cheat code for small ranges  it turns sorting into counting. Linear time is beautiful, but only when the range is kind.</blockquote>
`
},{
  slug: "using-cpp-sort-function-on-vectors",
  title: "Using C++ sort Function on Vectors",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-20",
  excerpt: "The one sort to rule them all: std::sort on vectors, arrays, and custom objects. Simple, fast, and flexible.",
  tags: ["std::sort", "vectors", "C++", "sorting"],
  html: `
<p>In 99% of cp problems, you don't need to implement your own sort. <code>std::sort</code> from <code>&ltalgorithm&gt</code> is extremely fast (introsort  hybrid of quick sort, heap sort, insertion sort). It works on any randomaccess container like vector and array.</p>

<h2>Basic usage on vector</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    vector&ltint&gt v = {5, 2, 8, 1, 9};
    sort(v.begin(), v.end());
    // v becomes {1, 2, 5, 8, 9}
    for (int x : v) cout << x << " ";
    return 0;
}</code></pre>

<h2>Sorting in descending order</h2>
<pre><code>sort(v.begin(), v.end(), greater&ltint&gt());</code></pre>

<h2>Sorting a plain array</h2>
<pre><code>int arr[] = {5, 2, 8, 1, 9};
int n = sizeof(arr)/sizeof(arr[0]);
sort(arr, arr + n);</code></pre>

<h2>Sorting with custom comparator (lambda)</h2>
<pre><code>vector&ltpair&ltint,int&gt&gt v = {{1,5}, {2,3}, {1,2}};
sort(v.begin(), v.end(), [](auto &a, auto &b) {
    if (a.first != b.first) return a.first < b.first;
    return a.second > b.second; // second descending
});</code></pre>

<h2>Sorting strings</h2>
<pre><code>vector&ltstring&gt words = {"apple", "banana", "kiwi"};
sort(words.begin(), words.end()); // lexicographic order</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li><code>std::sort</code> requires randomaccess iterators (vector, array, deque, string).</li>
  <li>It's not stable (equal elements may change order). Use <code>stable_sort</code> if needed.</li>
  <li>Time complexity: O(n log n) on average, but with a very low constant.</li>
  <li>Default is ascending (<). Use <code>greater&lt;T&gt;()</code> or custom lambda for other orders.</li>
  <li>It's the most used function in cp after cin/cout.</li>
</ul>

<blockquote>std::sort is your loyal steed  it will carry you through any sorting task. Learn its quirks, and you'll never look back.</blockquote>
`
},
{
  slug: "sorting-arrays-with-sort-in-cpp",
  title: "Sorting Arrays with sort in C++",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-20",
  excerpt: "Using std::sort on raw arrays  pointer arithmatic and the simple syntax you need.",
  tags: ["std::sort", "arrays", "C++", "sorting"],
  html: `
<p>Sorting a plain old Cstyle array is just as easy as sorting a vector. You pass two pointers: one to the first element and one to the position just after the last element. Let's see how it works.</p>

<h2>Basic syntax</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    int arr[] = {5, 2, 8, 1, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    sort(arr, arr + n);
    // arr becomes {1, 2, 5, 8, 9}
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    return 0;
}</code></pre>

<h2>Explanation of the pointers</h2>
<p><code>arr</code> is a pointer to the first element. <code>arr + n</code> points one past the last element (the "end" iterator). This is the same convention as <code>vector::begin()</code> and <code>vector::end()</code>. The sort function works on any randomaccess range.</p>

<h2>Sorting in descending order</h2>
<pre><code>sort(arr, arr + n, greater&ltint&gt());</code></pre>

<h2>Partial sorting (only first k elements)</h2>
<p>You can sort only a segment of the array:</p>
<pre><code>sort(arr + 2, arr + 7); // sorts indices 2..6</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li>You need to know the size n to compute <code>arr + n</code>.</li>
  <li>Array decay to pointer, so <code>sort(arr, arr+n)</code> works fine.</li>
  <li>Don't pass <code>arr + n</code> if n is the number of elements  it's correct.</li>
  <li>For multidimensional arrays, use <code>sort(&arr[0][0], &arr[0][0] + rows*cols)</code> to flatten.</li>
</ul>

<blockquote>Sorting raw arrays with std::sort is just as fast as vectors. The only extra step is calculating the end pointer. Easy peasy.</blockquote>
`
},
{
  slug: "sorting-strings-alphabetically-in-cpp",
  title: "Sorting Strings Alphabetically in C++",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-20",
  excerpt: "How to sort an array or vector of strings in lexicographic order using std::sort.",
  tags: ["strings", "alphabetical sort", "std::sort", "lexicographic"],
  html: `
<p>Strings in C++ can be compared using the usual relational operators (<, >, ==). That means sorting a collection of strings is straightforward  <code>std::sort</code> uses <code>operator&lt;</code> by default, which gives you alphabetical (lexicographic) order.</p>

<h2>Sorting a vector of strings</h2>
<pre><code>vector&ltstring&gt words = {"banana", "apple", "cherry", "date"};
sort(words.begin(), words.end());
// Result: apple, banana, cherry, date</code></pre>

<h2>Sorting an array of Cstyle strings</h2>
<pre><code>string arr[] = {"zebra", "alpha", "beta"};
int n = 3;
sort(arr, arr + n);
// arr becomes {"alpha", "beta", "zebra"}</code></pre>

<h2>Case sensitivity</h2>
<p>By default, uppercase letters come before lowercase because their ASCII values are smaller. <code>'A' (65) &lt; 'a' (97)</code>. So "Apple" comes before "apple". To do caseinsensitive sorting, use a custom comparator.</p>

<pre><code>sort(words.begin(), words.end(), [](const string &a, const string &b) {
    string lower_a = a, lower_b = b;
    transform(lower_a.begin(), lower_a.end(), lower_a.begin(), ::tolower);
    transform(lower_b.begin(), lower_b.end(), lower_b.begin(), ::tolower);
    return lower_a < lower_b;
});</code></pre>

<h2>Descending alphabetical order</h2>
<pre><code>sort(words.begin(), words.end(), greater&ltstring&gt());</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li>Lexicographic order is like dictionary order: compare first character, then second, etc.</li>
  <li>Shorter strings that are prefixes come first: "cat" < "catalog".</li>
  <li>If you need caseinsensitive, convert to lower case before compare.</li>
  <li>Sorting strings by length requires a custom comparator (covered later).</li>
</ul>

<blockquote>Sorting strings alphabetically is so common that std::sort does it out of the box. No extra work needed  just sort and smile.</blockquote>
`
},{
  slug: "sorting-with-custom-comparison-operators",
  title: "Sorting with Custom Comparison Operators",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-20",
  excerpt: "When default ascending isn't enough  write your own comparator function or lambda to control sort order.",
  tags: ["custom comparator", "lambda", "sort", "comparator"],
  html: `
<p>The power of <code>std::sort</code> comes from its third argument: a comparison function that tells sort which element should come first. You can use a function pointer, a functor, or a lambda. Let's explore all ways.</p>

<h2>Using a lambda (most common in cp)</h2>
<pre><code>vector&ltint&gt v = {5, 2, 8, 1, 9};
sort(v.begin(), v.end(), [](int a, int b) {
    return a > b; // descending
});</code></pre>

<h2>Using a function</h2>
<pre><code>bool cmp(int a, int b) {
    return a % 2 < b % 2; // evens first, then odds
}
sort(v.begin(), v.end(), cmp);</code></pre>

<h2>Using a functor (struct with operator())</h2>
<pre><code>struct {
    bool operator()(int a, int b) const { return a < b; }
} customLess;
sort(v.begin(), v.end(), customLess);</code></pre>

<h2>Sorting by absolute value</h2>
<pre><code>sort(v.begin(), v.end(), [](int a, int b) {
    return abs(a) < abs(b);
});</code></pre>

<h2>Important rule</h2>
<p>The comparator must define a <strong>strict weak ordering</strong>. That means:</p>
<ul>
  <li>irreflexive: cmp(x, x) is false.</li>
  <li>transitive: if cmp(a,b) and cmp(b,c) then cmp(a,c).</li>
  <li>antisymmetric: if cmp(a,b) then not cmp(b,a).</li>
</ul>
<p>Never return true for equal elements  use <code>&lt;</code> not <code>&lt;=</code>.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Lambda is the most convenient for oneoff custom sorts.</li>
  <li>Pass comparator by value (it's small).</li>
  <li>For complex logic, write a separate function for reusability.</li>
  <li>Always test your comparator on edge cases (equal elements, empty range).</li>
</ul>

<blockquote>Custom comparators turn sorting into a superpower. You can sort by any rule you can imagine  length, parity, absolute value, even by distance to a point.</blockquote>
`
},{
  slug: "sorting-pairs-by-first-and-second-element",
  title: "Sorting Pairs by First and Second Element",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-20",
  excerpt: "How to sort vector of pairs  primary key first, secondary key second, and custom orders.",
  tags: ["pairs", "sorting pairs", "std::pair", "custom sort"],
  html: `
<p>Pairs are everywhere in cp. Sorting a vector of pairs by default uses lexicographic order: compare first, then second if firsts are equal. That's often exactly what you want. But sometimes you need different orders  descending first, ascending second, etc.</p>

<h2>Default sorting (ascending first, then ascending second)</h2>
<pre><code>vector&ltpair&ltint,int&gt&gt v = {{1,5}, {2,3}, {1,2}};
sort(v.begin(), v.end());
// Result: (1,2), (1,5), (2,3)</code></pre>

<h2>Sort by first descending, then second ascending</h2>
<pre><code>sort(v.begin(), v.end(), [](auto &a, auto &b) {
    if (a.first != b.first) return a.first > b.first;
    return a.second < b.second;
});</code></pre>

<h2>Sort by second only (ignoring first)</h2>
<pre><code>sort(v.begin(), v.end(), [](auto &a, auto &b) {
    return a.second < b.second;
});</code></pre>

<h2>Using <code>std::pair</code>'s comparison operators</h2>
<p>You can also write custom comparator that uses <code>std::tie</code> for clarity:</p>
<pre><code>sort(v.begin(), v.end(), [](auto &a, auto &b) {
    return tie(a.first, a.second) < tie(b.first, b.second);
});</code></pre>

<h2>Sorting pairs with different types</h2>
<p><code>pair&ltint, string&gt</code> works the same  compare int, then string lexicographically.</p>

<h2>Things to rememeber</h2>
<ul>
  <li>Default pair sort is already very useful for many problems (e.g., sorting events by start time then end time).</li>
  <li>When you need a different order, write a lambda.</li>
  <li>To sort by second then first, just swap the comparison order in the lambda.</li>
  <li>Remember to use <code>auto &</code> to avoid copying pairs.</li>
</ul>

<blockquote>Pairs are the bread and butter of cp sorting. Mastering their custom ordering will save you from many nested comparators.</blockquote>
`
},{
  slug: "sorting-tuples-in-cpp",
  title: "Sorting Tuples in C++",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-20",
  excerpt: "Sorting vector of tuples  lexicographic by default, and how to customise for more than two fields.",
  tags: ["tuples", "std::tuple", "sorting", "lexicographic"],
  html: `
<p>When you need to store more than two values together, <code>std::tuple</code> is your friend. Like pairs, tuples can be sorted lexicographically by default (first element, then second, etc.).</p>

<h2>Default sorting of tuples</h2>
<pre><code>#include &ltbits/stdc++.h&gt
using namespace std;

int main() {
    vector&lttuple&ltint, int, int&gt&gt v = {
        {1, 5, 10},
        {2, 3, 0},
        {1, 2, 20},
        {1, 5, 5}
    };
    sort(v.begin(), v.end());
    // Order: (1,2,20), (1,5,5), (1,5,10), (2,3,0)
    for (auto [a,b,c] : v) {
        cout << a << " " << b << " " << c << "\n";
    }
    return 0;
}</code></pre>

<h2>Custom comparator for tuples</h2>
<p>You can write a lambda that compares specific fields in any order:</p>
<pre><code>sort(v.begin(), v.end(), [](auto &t1, auto &t2) {
    if (get<0>(t1) != get<0>(t2))
        return get<0>(t1) > get<0>(t2); // first descending
    if (get<1>(t1) != get<1>(t2))
        return get<1>(t1) < get<1>(t2); // second ascending
    return get<2>(t1) < get<2>(t2);     // third ascending
});</code></pre>

<h2>Using <code>std::tie</code> for cleaner code</h2>
<pre><code>sort(v.begin(), v.end(), [](auto &t1, auto &t2) {
    return tie(get<0>(t1), get<1>(t1), get<2>(t1)) >
           tie(get<0>(t2), get<1>(t2), get<2>(t2));
}); // descending lexicographic</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li><code>std::tuple</code> compares lexicographically  same as pair but for any number of elements.</li>
  <li>Use <code>std::get&lt;i&gt;(tuple)</code> to access elements (zerobased).</li>
  <li>C++17 structured bindings <code>auto [a,b,c] = tuple</code> make iteration nice.</li>
  <li>If you often use the same custom ordering, consider a struct with <code>operator&lt;</code>.</li>
</ul>

<blockquote>Tuples are like pairs on steroids. Sorting them is just as easy  default works, and custom comparators give you full control.</blockquote>
`
},{
  slug: "defining-operator-for-user-defined-structs",
  title: "Defining operator< for User-Defined Structs",
  topic: "Sorting",
  difficulty: "Medium",
  readMinutes: 7,
  date: "2026-05-20",
  excerpt: "How to make your own struct sortable by overloading the less-than operator inside the struct.",
  tags: ["operator<", "struct", "sorting", "overloading"],
  html: `
<p>When you have a struct with multiple fields, you can define <code>operator&lt;</code> inside it. Then <code>std::sort</code> will automatically use that ordering. This makes your code cleaner and reusable.</p>

<h2>Basic struct with operator<</h2>
<pre><code>struct Student {
    string name;
    int age;
    double score;
    
    bool operator<(const Student &other) const {
        if (score != other.score) return score > other.score; // higher score first
        if (age != other.age) return age < other.age;         // younger first
        return name < other.name;                             // alphabetical
    }
};

vector&ltStudent&gt students = {{"Alice", 20, 85.5}, {"Bob", 19, 92.0}, {"Alice", 19, 85.5}};
sort(students.begin(), students.end());</code></pre>

<h2>Why const and const reference?</h2>
<p>The <code>const</code> after the function means the operator does not modify the current object. Taking <code>const &</code> avoids copying. This is required for sorting because the comparator must not change the compared objects.</p>

<h2>Using <code>std::tie</code> inside operator<</h2>
<pre><code>bool operator<(const Student &other) const {
    return tie(score, age, name) > tie(other.score, other.age, other.name);
}</code></pre>

<h2>What if you need multiple different orderings?</h2>
<p>Don't define <code>operator&lt;</code> at all. Instead, write separate comparator functions or lambdas for each use case. Use <code>operator&lt;</code> only for the natural or most common ordering.</p>

<h2>Things to rememeber</h2>
<ul>
  <li><code>operator&lt;</code> must be <code>const</code> member function.</li>
  <li>It must define a strict weak ordering (same rules as comparator).</li>
  <li>You can also define <code>operator></code> etc., but sort only needs <code>&lt;</code>.</li>
  <li>For symmetric access, you may need to declare it as a friend if comparing private members.</li>
</ul>

<blockquote>Defining <code>operator&lt;</code> makes your structs "natively sortable". It's a beautiful abstraction that hides complexity inside the type.</blockquote>
`
},{
  slug: "external-comparison-functions-for-sort",
  title: "External Comparison Functions for sort",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 5,
  date: "2026-05-20",
  excerpt: "Writing comparator as a standalone function  great for reusability and when you don't want lambdas.",
  tags: ["comparator", "function", "sort", "reusability"],
  html: `
<p>Lambdas are convenient, but sometimes you want to reuse the same comparator in multiple places. Or you may be working in an environment without C++11 (rare). In those cases, define a regular function and pass its name to sort.</p>

<h2>Example: sorting by string length</h2>
<pre><code>bool lengthCompare(const string &a, const string &b) {
    if (a.length() != b.length()) return a.length() < b.length();
    return a < b; // if equal length, alphabetical
}

vector&ltstring&gt words = {"apple", "kiwi", "banana", "pear"};
sort(words.begin(), words.end(), lengthCompare);
// Result: pear, kiwi, apple, banana  (by length, then alphabetically)</code></pre>

<h2>Comparing points by distance from origin</h2>
<pre><code>struct Point { int x, y; };
bool distCompare(const Point &a, const Point &b) {
    return a.x*a.x + a.y*a.y < b.x*b.x + b.y*b.y;
}
sort(points.begin(), points.end(), distCompare);</code></pre>

<h2>Function vs lambda performance</h2>
<p>There is no runtime performance difference. The compiler can inline both. Use whichever makes your code clearer.</p>

<h2>When to use external functions</h2>
<ul>
  <li>When the same comparator is needed in several places.</li>
  <li>When the comparator is long and complex (lambdas can become hard to read).</li>
  <li>When you need to pass the comparator to other algorithms (like <code>lower_bound</code> with custom order).</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>The comparator function must return <code>bool</code> and take two arguments by const reference (to avoid copying).</li>
  <li>It must be a strict weak ordering (same rules).</li>
  <li>You can also use function objects (structs with <code>operator()</code>)  they are more flexible and can hold state.</li>
</ul>

<blockquote>External comparator functions are the oldschool, reliable way to sort. They may be less trendy than lambdas, but they work perfectly and are easy to test.</blockquote>
`
},{
  slug: "sorting-by-string-length-then-alphabetically",
  title: "Sorting by String Length Then Alphabetically",
  topic: "Sorting",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-20",
  excerpt: "A classic multikey sort: primary key = length, secondary key = lexicographic order.",
  tags: ["string length", "multi-key sort", "custom comparator", "lambda"],
  html: `
<p>Many problems require sorting strings first by their length, and then (if lengths are equal) by alphabetical order. This is a perfect example of a custom comparator with two keys.</p>

<h2>The comparator logic</h2>
<pre><code>bool compareLengthThenLex(const string &a, const string &b) {
    if (a.size() != b.size()) return a.size() < b.size();
    return a < b;
}</code></pre>

<h2>Using a lambda</h2>
<pre><code>vector&ltstring&gt words = {"cat", "dog", "banana", "apple", "bat"};
sort(words.begin(), words.end(), [](const string &a, const string &b) {
    if (a.length() != b.length()) return a.length() < b.length();
    return a < b;
});
// Result: bat, cat, dog, apple, banana</code></pre>

<h2>Why this order?</h2>
<p>First, shorter strings come first. Among strings of the same length, they are sorted alphabetically. So "bat" (3 letters) comes before "apple" (5 letters). Among "cat", "bat", "dog" (all length 3), alphabetical order gives "bat", "cat", "dog".</p>

<h2>Reverse order (longest first)</h2>
<pre><code>if (a.length() != b.length()) return a.length() > b.length();</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li>Always check primary key first. Only if equal, compare secondary key.</li>
  <li>Use <code>size()</code> or <code>length()</code> for strings  same thing.</li>
  <li>You can extend to third, fourth keys similarly.</li>
  <li>This pattern works for any two (or more) properties.</li>
</ul>

<blockquote>Sorting by length then alphabetically is the "hello world" of multikey sorting. Master it, and you'll be ready for any custom ordering.</blockquote>
`
},{
  slug: "binary-search-in-sorted-arrays",
  title: "Binary Search in Sorted Arrays",
  topic: "Searching",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-20",
  excerpt: "The most important search algorithm: O(log n) by cutting the search space in half each time.",
  tags: ["binary search", "sorted array", "O(log n)", "searching"],
  html: `
<p>Binary search is the algorithm that exploits sortedness. Given a sorted array, you can find an element in O(log n) time by repeatedly checking the middle and discarding half of the remaining elements. It's the foundation of many cp techniques.</p>

<h2>The idea</h2>
<ol>
  <li>Start with <code>low = 0</code>, <code>high = n-1</code>.</li>
  <li>While <code>low <= high</code>:
    <ul><li><code>mid = (low + high) / 2</code></li>
    <li>If <code>arr[mid] == target</code>, return mid.</li>
    <li>Else if <code>arr[mid] < target</code>, search right half: <code>low = mid + 1</code>.</li>
    <li>Else search left half: <code>high = mid - 1</code>.</li></ul>
  </li>
  <li>If not found, return -1 (or insertion point).</li>
</ol>

<h2>Standard iterative implementation</h2>
<pre><code>int binarySearch(int arr[], int n, int target) {
    int lo = 0, hi = n - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2; // prevents overflow
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}</code></pre>

<h2>Why <code>lo + (hi - lo) / 2</code> instead of <code>(lo + hi) / 2</code>?</h2>
<p>For large arrays, <code>lo + hi</code> could overflow the integer range. The subtraction version is safe.</p>

<h2>Recursive version</h2>
<pre><code>int binarySearchRec(int arr[], int lo, int hi, int target) {
    if (lo > hi) return -1;
    int mid = lo + (hi - lo) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) return binarySearchRec(arr, mid+1, hi, target);
    return binarySearchRec(arr, lo, mid-1, target);
}</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li>Binary search only works on <strong>sorted</strong> arrays.</li>
  <li>Time complexity: O(log n)  extremely fast.</li>
  <li>Space complexity: O(1) iterative, O(log n) recursive (due to call stack).</li>
  <li>Use <code>lower_bound</code> and <code>upper_bound</code> from STL for common binary search tasks.</li>
  <li>Watch out for infinite loops  ensure <code>lo</code> and <code>hi</code> update correctly.</li>
</ul>

<blockquote>Binary search is the algorithm that makes sorted data magical. Learn it inside out  you'll use it more often than any other search method.</blockquote>
`
},{
  slug: "implementing-binary-search-method-1-interval-halving",
  title: "Implementing Binary Search Method 1 (Interval Halving)",
  topic: "Searching",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-20",
  excerpt: "The classic while(lo <= hi) loop  simplest and most common binary search implementation.",
  tags: ["binary search", "interval halving", "implementation", "C++"],
  html: `
<p>The most straightfoward binary search keeps a closed interval <code>[lo, hi]</code> that always contains the target if it exists. At each step, you shrink the interval by half until it's empty. This method is easy to reason about and debug.</p>

<h2>The template</h2>
<pre><code>int binarySearch(const vector&ltint&gt &arr, int target) {
    int lo = 0, hi = arr.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1; // not found
}</code></pre>

<h2>Step-by-step example on [1,3,5,7,9], target=5</h2>
<ul>
  <li>lo=0, hi=4, mid=2  arr[2]=5  found, return 2.</li>
</ul>

<h2>Example target not found (target=4)</h2>
<ul>
  <li>lo=0, hi=4, mid=2  arr[2]=5 > 4, so hi=1.</li>
  <li>lo=0, hi=1, mid=0  arr[0]=1 < 4, so lo=1.</li>
  <li>lo=1, hi=1, mid=1  arr[1]=3 < 4, so lo=2.</li>
  <li>lo=2, hi=1  loop ends, return -1.</li>
</ul>

<h2>Edge cases</h2>
<ul>
  <li>Empty array: hi = -1, loop condition false  return -1.</li>
  <li>Single element: works correctly.</li>
  <li>Target smaller than all: lo stays 0, hi shrinks to -1  -1.</li>
  <li>Target larger than all: lo becomes n, hi stays n-1  -1.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>This method returns the index of the target, or -1 if not present.</li>
  <li>If you need the insertion point, use <code>lower_bound</code> or adjust the return.</li>
  <li>Always use <code>lo + (hi - lo)/2</code> to avoid overflow.</li>
  <li>In cp, you'll often use STL versions, but writing your own is good practice.</li>
</ul>

<blockquote>The intervalhalving method is the classic binary search  simple, robust, and easy to memorise. Master it, and you'll have a tool for a lifetime.</blockquote>
`
},
{
  slug: "binary-search-method-2-jump-search",
  title: "Binary Search Method 2 (Jump Search)",
  topic: "Searching",
  difficulty: "Easy",
  readMinutes: 7,
  date: "2026-05-21",
  excerpt: "An alternative binary search implementation that uses two pointers and a different invariant. Also known as the 'binary search on answer' style.",
  tags: ["binary search", "jump search", "binary search on answer", "invariant"],
  html: `
<p>The interval halving method (while lo <= hi) is great, but sometimes you need a different appraoch  one that maintains an invariant like <code>lo</code> always points to a position that is <em>not</em> valid and <code>hi</code> to a position that <em>is</em> valid. This is the "binary search on answer" style, also called jump search or binary search for first true.</p>

<h2>The invariant method</h2>
<p>We maintain two pointers: <code>lo</code> (always false/too small) and <code>hi</code> (always true/too big). The search space is (lo, hi]. We stop when <code>hi - lo == 1</code>, then hi is the answer. This is extremely usefull when searching for the smallest x such that a condition becomes true.</p>

<h2>Template for finding first index where predicate becomes true</h2>
<pre><code>int binarySearchFirstTrue(int lo, int hi, function&ltbool(int)&gt pred) {
    // pred(x) is false for x <= lo, true for x >= hi
    while (hi - lo > 1) {
        int mid = lo + (hi - lo) / 2;
        if (pred(mid)) hi = mid;
        else lo = mid;
    }
    return hi;
}</code></pre>

<h2>Example: find smallest index where arr[i] >= target</h2>
<pre><code>vector&ltint&gt arr = {1,3,5,7,9};
int target = 6;
// pred(mid) = arr[mid] >= target
int lo = -1, hi = arr.size(); // lo is out of bounds (invalid), hi is out of bounds (but we treat as valid)
while (hi - lo > 1) {
    int mid = lo + (hi - lo) / 2;
    if (arr[mid] >= target) hi = mid;
    else lo = mid;
}
// hi is the first index with arr[hi] >= target (3, since arr[3]=7)
cout << hi << "\\n";</code></pre>

<h2>Why use this method?</h2>
<p>It's ideal for <strong>binary search on answer</strong> problems: you have a monotonic predicate (false for small values, true for large ones) and you want the threshold. For example, finding the minimum speed to reach destination, or the smallest capacity to ship packages. The invariant is clean and avoids offbyone errors.</p>

<h2>Difference from interval halving</h2>
<ul>
  <li>Interval halving (lo <= hi) returns exact index of target.</li>
  <li>Invariant method (hi - lo > 1) returns first index where predicate becomes true, even if no exact match.</li>
  <li>The invariant method never checks equality; it only shrinks the range.</li>
</ul>

<h2>Things to rememeber</h2>
<ul>
  <li>Initialise lo to a value where pred(lo) is false (like -1).</li>
  <li>Initialise hi to a value where pred(hi) is true (like n).</li>
  <li>Loop condition: while (hi - lo > 1).</li>
  <li>Mid = lo + (hi - lo) / 2.</li>
  <li>If pred(mid) true, set hi = mid; else lo = mid.</li>
  <li>After loop, hi is the answer.</li>
</ul>

<blockquote>The invariant method is the secret weapon for binary search on answer. It's less errorprone and works beautifully for monotonic predicates.</blockquote>
`
},{
  slug: "cpp-lower-bound-upper-bound-equal-range",
  title: "C++ lower_bound, upper_bound, and equal_range",
  topic: "Searching",
  difficulty: "Easy",
  readMinutes: 8,
  date: "2026-05-21",
  excerpt: "The STL's binary search toolkit: find first not less, first greater, and the entire range of equal elements.",
  tags: ["lower_bound", "upper_bound", "equal_range", "STL", "binary search"],
  html: `
<p>Why write your own binary search when the STL gives you battletested functions? <code>lower_bound</code>, <code>upper_bound</code>, and <code>equal_range</code> are your best friends for sorted arrays. They return iterators, making them perfect for vectors and arrays.</p>

<h2>lower_bound  first position where element is not less than value</h2>
<p>Returns iterator to the first element that is <strong>>= value</strong>. If all elements are less, returns end().</p>
<pre><code>vector&ltint&gt v = {1,3,5,5,7,9};
auto it = lower_bound(v.begin(), v.end(), 5);
int idx = it - v.begin(); // 2 (first 5)
it = lower_bound(v.begin(), v.end(), 6);
idx = it - v.begin(); // 4 (first element >=6 is 7 at index 4)</code></pre>

<h2>upper_bound  first position where element is greater than value</h2>
<p>Returns iterator to the first element that is <strong>> value</strong>. Equivalent to first index where element > value.</p>
<pre><code>auto it = upper_bound(v.begin(), v.end(), 5);
int idx = it - v.begin(); // 4 (first element >5 is 7)
it = upper_bound(v.begin(), v.end(), 9);
idx = it - v.begin(); // 6 (end())</code></pre>

<h2>equal_range  both lower and upper bound in one call</h2>
<p>Returns a <code>pair</code> of iterators: first = lower_bound, second = upper_bound. This gives you the entire range of elements equal to value.</p>
<pre><code>auto range = equal_range(v.begin(), v.end(), 5);
for (auto it = range.first; it != range.second; ++it) {
    cout << *it << " "; // prints 5 5
}
int count = range.second - range.first; // 2</code></pre>

<h2>Using with arrays (raw pointers)</h2>
<pre><code>int arr[] = {1,3,5,5,7,9};
int n = 6;
int* lower = lower_bound(arr, arr + n, 5);
int pos = lower - arr; // 2</code></pre>

<h2>Custom comparator</h2>
<p>All three functions accept a custom comparator as fourth argument. For example, to search in descending order:</p>
<pre><code>sort(v.begin(), v.end(), greater&ltint&gt()); // descending
// lower_bound for descending means first not greater (i.e., <=)
auto it = lower_bound(v.begin(), v.end(), 5, greater&ltint&gt());</code></pre>

<h2>Things to rememeber</h2>
<ul>
  <li>All functions require the range to be sorted according to the same comparator.</li>
  <li>Complexity: O(log n) for randomaccess iterators (vector, array).</li>
  <li>For sets and maps, use their member functions <code>.lower_bound()</code> (faster).</li>
  <li>Use <code>binary_search</code> if you only need a boolean answer.</li>
  <li>These functions are the workhorses of cp  memorise them.</li>
</ul>

<blockquote>lower_bound and upper_bound turn binary search into a oneliner. Learn them, and you'll never write a binary search loop again  unless it's for the 'binary search on answer' pattern.</blockquote>
`
},


]