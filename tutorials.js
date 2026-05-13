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
},{
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
},{
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
<p>Much cleaner! Now the compiutomaticaly looks inside the <code>std</code> namespace when it sees <code>cout</code> or <code>vector</code>. This makes the code shorter and easier to reach is exactly what we want in a contest.</p>

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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
  slug: "printing-floats-printf-precision",
  title: "Printing Floats with printf Precision",
  topic: "Numbers in C++",
  difficulty: "Easy",
  readMinutes: 6,
  date: "2026-05-08",
  excerpt: "How to output decimal numbers with exactly the right number of decimal places  because the judge cares about that a lot.",
  tags: ["printf"precision", "double", "output"],
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








]