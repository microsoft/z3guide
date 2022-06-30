<html>
<head>
<title>Strings and Sequences in Z3</title>
<link rel=StyleSheet href="style.css" type="text/css">
</head>
<body>


<h1>Strings and Sequences in Z3</h1>
<p style="clear:both;">

</p>



<h2>Introduction</h2>
This section describes Z3's handling of strings, sequences 
and regular expressions. Z3 offers built-in support for 
using string constants and dedicated solvers for checking
satisfiability over constraints using strings, sequences 
and regular expressions.
Note that the (current) specialized solver is able to establish
satisfiability for a non-trivial class of formulas, but is far from 
a decision procedure: Z3 only solves string equalities using an incomplete 
heuristic solver (in spite of the existence of complete procedures)
and the full combination of lengths and sequences 
(and regular expressions) is not decidable anyway.
In Z3, strings are a special case of sequences, as set forth in 
<a href="http://research.microsoft.com/en-us/people/nbjorner/smtlibstr.pdf">
a now deprecated proposal on sequences in SMT-LIB</a>. 
The format for strings and regular expressions is mostly compatible 
with <a href="http://cvc4.cs.nyu.edu/wiki/Strings">CVC4's</a>.
Note that <a href="https://sites.google.com/site/z3strsolver/download">
Z3Str2</a> has been available since 2013 as a separate distribution.
It contains algorithms that offer an effective search space pruning 
for solving string equalities.
Strings are sequences over 8 bit bit-vectors. In addition, Z3 allows
constraints over sequences of arbitrary types.



<h2>Strings</h2>

<h3>Built-in types and constants</h3>
The name <tt>String</tt> is a built-in name for the String sort. 
String literals can furthermore be entered directly as literals 
delimited by quotes. The following example asks whether there are
strings <tt>a</tt> and <tt>b</tt> that concatenate to <tt>"abc"</tt> 
followed by <tt>b</tt>.

<pre pref="seq.1">
(declare-const a String)
(declare-const b String)
(assert (= (str.++ b a) (str.++ "abc" b)))
(check-sat)
(get-model)
</pre>

<h4>String literals</h4> 
Z3 follows the proposed SMT-LIB2.5 format for string 
literals. Thus, strings are enclosed using double quotes. A sequence 
of two adjacent double quotes within a string literal is used as the 
escape sequence for a quote. So for example <tt>"quote ""me"" on this"</tt> 
corresponds to the string <tt>quote "me" on this</tt>. Other 
characters are treated as part of the string. For example, a newline within a string 
is treated as a new-line character. 

<p>
To represent non-ASCII characters Z3 
treats the sequence <tt>\xHH</tt> where <tt>HH</tt> are two hexa-decimal 
numerals (using one of the characters, 0-9, a-f, A-F) as an encoding 
of an 8 bit character. 
Furthermore, the following escape sequences correspond to their ASCII escape encodings.
<table>
  <tr>
    <td>\a</td> <td>\b</td> <td>\f</td> <td>\n</td> <td>\r</td> <td>\t</td> <td>\v</td>
  </tr>
</table>
Note that other occurrences of the character <tt>\</tt> are treated as the charcter <tt>\</tt>.

The following example shows
three ways to enter the newline character.

</p>

<pre pref="seq.2">
(define-const a String "\x0a")
(define-const b String "
")
(define-const c String "\n")
(simplify (= a b))
(simplify (= a c))
(simplify (str.++ a b c))
</pre>

<h3>Operations</h3>
Let us start out with a summary of available string operations.

<table>
  <tr>
    <td>Operation</td>
    <td>Brief description</td>
  </tr>
  <tr> 
    <td><tt>(str.++ a b c)</tt></td>
    <td>String concatenation of one or more strings</td>
  </tr>
  <tr> 
    <td><tt>(str.len s)</tt></td>
    <td>String length. Returns an integer.</td>
  </tr>
  <tr> 
    <td><tt>(str.substr s offset length)</tt></td>
    <td>Retrieves substring of <tt>s</tt> at <tt>offset</tt></td>
  </tr>
  <tr> 
    <td><tt>(str.indexof s sub)</tt></td>
    <td>Retrieves first position of <tt>sub</tt> in <tt>s</tt>, -1 if there are no occurrences</td>
  </tr>
  <tr> 
    <td><tt>(str.indexof s sub offset)</tt></td>
    <td>Retrieves first position of <tt>sub</tt> at or after <tt>offset</tt> in <tt>s</tt>, -1 if there are no occurrences</td>
  </tr>
  <tr>
    <td><tt>(str.at s offset)</tt></td>
    <td>Substring of length 1 at <tt>offset</tt> in <tt>s</tt>.</td>
  </tr>
  <tr>
    <td><tt>(str.contains s sub)</tt></td>
    <td>Does <tt>s</tt> contain the substring <tt>sub</tt>?</td>
  </tr>
  <tr>
    <td><tt>(str.prefixof pre s)</tt></td>
    <td>Is <tt>pre</tt> a prefix of <tt>s</tt>?</td>
  </tr>
  <tr>
    <td><tt>(str.suffixof suf s)</tt></td>
    <td>Is <tt>suf</tt> a suffix of <tt>s</tt>?</td>
  </tr>
  <tr>
    <td><tt>(str.replace s src dst)</tt></td>
    <td>Replace the first occurrence of <tt>src</tt> by <tt>dst</tt> in <tt>s</tt>.</td>
  </tr>
  <tr>
    <td><tt>(str.to.int s)</tt></td>
    <td>Retrieve integer encoded by string <tt>s</tt> (ground rewriting only).</td>
  </tr>
  <tr>
    <td><tt>(int.to.str i)</tt></td>
    <td>Retrieve string encoding of integer <tt>i</tt> (ground rewriting only).</td>
  </tr>
</table>

<p>
Note that <tt>(str.indexof s offset)</tt> is shorthand for <tt>(str.indexof s offset 0)</tt>.
</p

<p>
Some operations have under-specified behavior on certain arguments.
Namely, <tt>(str.at s i)</tt> is unconstrained for indices that are either negative or beyond
<tt>(- (str.len s) 1)</tt>. Furthermore <tt>(str.substr s offset length)</tt> is under-specified
when the offset is outside the range of positions in <tt>s</tt> or <tt>length</tt> is negative or 
<tt>offset+length</tt> exceeds the length of <tt>s</tt>.
</p>


<h3>Examples</h3>

Basic string operations
<pre pref="seq.11">
(simplify (str.++ (str.at "abc" 1) (str.at "abc" 0)))
(simplify (str.indexof "abcabc" "a"))
(simplify (str.indexof "abcabc" "a" 1))
(simplify (str.substr "xxabcyy" 2 3))
</pre>

A string cannot overlap with two different characters.
<pre pref="seq.3">
(declare-const a String)
(assert (= (str.++ a "b") (str.++ "a" a)))
(check-sat)
</pre>

Strings <tt>a, b, c</tt> can have a non-trivial overlap.
<pre pref="seq.4">
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (= (str.++ a b) "abcd"))
(assert (= (str.++ b c) "cdef"))
(assert (not (= b "")))
(check-sat)
</pre>

There is a solution to <tt>a</tt> of length at most 2.
<pre pref="seq.5">
(declare-const a String)
(declare-const b String)
(assert (= (str.++ "abc" a) (str.++ b "cef")))
(assert (<= (str.len a) 2))
(check-sat)
</pre>

There is a solution to <tt>a</tt> that is not a sequence of "a"'s.
<pre pref="seq.6">
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (= (str.++ a "ab" b) (str.++ b "ba" c)))
(assert (= c (str.++ a b)))
(assert (not (= (str.++ a "a") (str.++ "a" a))))
(check-sat)
(get-model)
</pre>

Contains is transitive.
<pre pref="seq.7">
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (str.contains a b))
(assert (str.contains b c))
(assert (not (str.contains a c)))
(check-sat)
</pre>

But containment is not a linear order.
<pre pref="seq.8">
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (str.contains a b))
(assert (str.contains a c))
(assert (not (str.contains b c)))
(assert (not (str.contains c b)))
(check-sat)
(get-model)
</pre>

Any string is equal to the prefix and suffix that add up to a its length.
<pre pref="seq.12">
(declare-const a String)
(declare-const b String)
(declare-const c String)
(assert (str.prefixof b a))
(assert (str.suffixof c a))
(assert (= (str.len a) (+ (str.len b) (str.len c))))
(assert (not (= a (str.++ b c))))
(check-sat)
</pre>

<h2>Sequences</h2>

The sort constructor <tt>Seq</tt> can be used to create sequences over any base sort.
For example, a sequence of integers is <tt>(Seq Int)</tt>, and <tt>(Seq (_ BitVec 8))</tt>
is the definition of <tt>String</tt>.

<h3>Operations</h3>
Most string operations have corresponding sequence variants. In addition, there are operations
to create a unit sequence and the empty sequence over any base sort.

<table>
  <tr>
    <td>Operation</td>
    <td>Brief description</td>
  </tr>
  <tr> 
    <td><tt>(seq.unit elem)</tt></td>
    <td>Sequence with a single element <tt>elem</tt>.</td>
  </tr>
  <tr> 
    <td><tt>(as seq.empty (Seq Int))</tt></td>
    <td>The empty sequence of integers.</td>
  </tr>
  <tr> 
    <td><tt>(seq.++ a b c)</tt></td>
    <td>Concatenation of one or more sequences.</td>
  </tr>
  <tr> 
    <td><tt>(seq.len s)</tt></td>
    <td>Sequence length. Returns an integer.</td>
  </tr>
  <tr> 
    <td><tt>(seq.extract s offset length)</tt></td>
    <td>Retrieves sub-sequence of <tt>s</tt> at <tt>offset</tt></td>
  </tr>
  <tr> 
    <td><tt>(seq.indexof s sub)</tt></td>
    <td>Retrieves first position of <tt>sub</tt> in <tt>s</tt>, -1 if there are no occurrences</td>
  </tr>
  <tr> 
    <td><tt>(seq.indexof s sub offset)</tt></td>
    <td>Retrieves first position of <tt>sub</tt> at or after <tt>offset</tt> in <tt>s</tt>, -1 if there are no occurrences</td>
  </tr>
  <tr>
    <td><tt>(seq.at s offset)</tt></td>
    <td>Sub-sequence of length 1 at <tt>offset</tt> in <tt>s</tt>.</td>
  </tr>
  <tr>
    <td><tt>(seq.contains s sub)</tt></td>
    <td>Does <tt>s</tt> contain the sub-sequence <tt>sub</tt>?</td>
  </tr>
  <tr>
    <td><tt>(seq.prefixof pre s)</tt></td>
    <td>Is <tt>pre</tt> a prefix of <tt>s</tt>?</td>
  </tr>
  <tr>
    <td><tt>(seq.suffixof suf s)</tt></td>
    <td>Is <tt>suf</tt> a suffix of <tt>s</tt>?</td>
  </tr>
  <tr>
    <td><tt>(seq.replace s src dst)</tt></td>
    <td>Replace the first occurrence of <tt>src</tt> by <tt>dst</tt> in <tt>s</tt>.</td>
  </tr>
</table>

<h3>Examples</h3>

When inserting <tt>b</tt> at or after position 8, but before the length of the string, which is at least 10,
then the resulting string has the same length, and either character 8 or 9 are unchanged.
<pre pref="seq.9">
(declare-const s (Seq Int))
(declare-const t (Seq Int))
(declare-const j Int)
(declare-const b Int)

(assert (<= 10 (seq.len s)))
(assert (<= 8 j))
(assert (< j (seq.len s)))
(assert (= t (seq.++ (seq.extract s 0 j) (seq.unit b) (seq.extract s (+ j 1) (- (seq.len s) j 1)))))
(push)
(assert (not (= (seq.unit b) (seq.at t j))))
(check-sat)
(pop)
(push)
(assert (not (= (seq.len s) (seq.len t))))
(check-sat)
(pop)
(push)
(assert (not (= (seq.at s 8) (seq.at t 8))))
(assert (not (= (seq.at s 9) (seq.at t 9))))
(check-sat)
(pop)
</pre>


<h2>Regular Expressions</h2>
The sort constructor <tt>RegEx</tt> takes as argument a sequence type.
The set of regular expressions over strings is thus <tt>(RegEx String)</tt>.

<h3>Operations</h3>

<table>
  <tr>
    <td>Operation</td>
    <td>Brief description</td>
  </tr>
  <tr> 
    <td><tt>(str.to.re s)</tt></td>
    <td>Convert string to regular expression accepting <tt>s</tt>.</td>
  </tr>
  <tr> 
    <td><tt>(str.in.re s r)</tt></td>
    <td>Determine if <tt>s</tt> is in the language generated by <tt>r</tt>.</td>
  </tr>
  <tr> 
    <td><tt>re.allchar</tt></td>
    <td>The regular expression accepting every string.</td>
  </tr>
  <tr> 
    <td><tt>re.nostr</tt></td>
    <td>The regular expression rejecting every string.</td>
  </tr>
  <tr> 
    <td><tt>(re.range ch1 ch2)</td>
    <td>The range of characters between <tt>ch1</tt> and <tt>ch2</tt>.</td>
  </tr>
  <tr> 
    <td><tt>(re.++ r1 r2 r3)</tt></td>
    <td>Concatenation of regular expressions.</td>
  </tr>
  <tr> 
    <td><tt>(re.* r)</tt></td>
    <td>Kleene star.</td>
  </tr>
  <tr> 
    <td><tt>(re.+ r)</tt></td>
    <td>Kleene plus.</td>
  </tr>
  <tr> 
    <td><tt>(re.opt r)</tt></td>
    <td>Zero or one use of <tt>r</tt>.</td>
  </tr>
  <tr> 
    <td><tt>((_ re.loop lo hi) r)</tt></td>
    <td>from <tt>lo</tt> to <tt>hi</tt> number of repetitions of <tt>r</tt>.</td>
  </tr>  
  <tr> 
    <td><tt>(re.union r1 r2)</tt></td>
    <td>The union of regular languages.</td>
  </tr>
  <tr> 
    <td><tt>(re.inter r1 r2)</tt></td>
    <td>The intersection of regular languages. </td>
  </tr>

  <tr> 
    <td><tt>(seq.to.re s)</tt></td>
    <td>Convert sequenceto regular expression accepting <tt>s</tt>.</td>
  </tr>
  <tr> 
    <td><tt>(seq.in.re s r)</tt></td>
    <td>Determine if sequence <tt>s</tt> is in the language generated by <tt>r</tt>.</td>
  </tr>
  <tr> 
    <td><tt>(as re.all R)</tt></td>
    <td>The regular expression of sort <tt>R</tt> accepting every sequence.</td>
  </tr>
  <tr> 
    <td><tt>(as re.empty R)</tt></td>
    <td>The regular expression of sort <tt>R</tt> rejecting every sequence.</td>
  </tr>


</table>

<p>
The <tt>re.range</tt> operator expects two strings each encoding a single character.
For example <tt>(str.range "a" "\xff")</tt> is a valid range of characters, 
while <tt>(str.range "aa" "")</tt> is not associated with any specified range. 
</p>

<p> For added compatibility with CVC4's format, 
Z3 also accepts expressions of the form <tt>(re.loop r lo hi)</tt>.
Z3 understands only the meaning of these terms when <tt>lo, hi</tt> are 
integer numerals.
</p>

<h3>What (not) to expect of regular expressions</h3>
Z3 converts regular expressions into non-deterministic finite automata and 
expands membership constraints over symbolic strings and sequences 
when it tries to satisfy constraints. This approach works for many
membership and non-membership constraints, but is not a complete 
procedure (and even less complete when there are other constraints 
on the symbolic strings).
It also does not handle regular expressions symbolic sequences (it allows
to express non-regular languages).
Thus, the string <tt>s</tt> in <tt>(str.to.re s)</tt> should be 
a string literal. You can write formulas with equalities over 
regular expressions, but chances are that Z3 will not do anything 
profound with them. Therefore, for now, use regular expressions only in
constraints of the form <tt>(str.in.re s r)</tt>.

<h3>Examples</h3>

The maximal length is 6 for a string of length 2 repeated at most 3 times.
<pre pref="seq.10">
(declare-const a String)
(push)
(set-info :status sat)
(assert (str.in.re a ((_ re.loop 1 3) (str.to.re "ab"))))
(assert (= (str.len a) 6))
(check-sat)
(get-model)
(pop)

(push)
(set-info :status unsat)
(assert (str.in.re a ((_ re.loop 1 3) (str.to.re "ab"))))
(assert (> (str.len a) 6))
(check-sat)
(pop)
</pre>
 
</body>
</html>


<pre> 
Other potential examples:

(push)
(set-info :status sat)
(assert (str.prefixof a b))
(assert (str.prefixof a c))
(assert (not (str.prefixof b c)))
(assert (not (str.prefixof c b)))
(check-sat)
(pop)


; length
(push)
(set-info :status sat)
(assert (= a "abcde"))
(assert (<= (str.len a) 5))
(check-sat)
(pop)


; replace


(push)
(set-info :status sat)
(assert (= "ab" (str.replace a "ab" "")))
(check-sat)
(pop)

</pre>