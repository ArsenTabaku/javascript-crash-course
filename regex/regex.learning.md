# Characters (. \d)
.  => Matches any single character except new lines: \n, \r. Ex: /.y/ matches "my" and "ay", but not "yes", in "yes make my day".
\d => Matches any single digit. Equivalent to [0-9]. Ex: /\d/ or /[0-9]/ matches "2" in "B2 is the suite number".
\D => Matches any single character that is not a digit. Equivalent to [^0-9]. Ex: /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".
\w => Matches any single alphanumeric character, including the underscore. Equivalent to [A-Za-z0-9_]. Ex: /\w/ matches "a" in "apple", "5" in "5.2".
\W => Matches any single character that is not a word character. Equivalent to [^A-Za-z0-9_]. Ex: /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%".
\s => Matches a single white space character, including space, tab and other Unicode spaces. Ex: /\s\w*/ matches " bar" in "foo bar".
\S => Matches a single character other than white space. Ex: /\S\w*/ matches "foo" in "foo bar".

# Assertions - (^ and $)
^A  => Matches the beginning of input. Ex: /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".
$  => Matches the end of input. Ex: /t$/ does not match the "t" in "eater", but does match it in "eat".

# Groups and ranges - (| and [])
x|y    => Matches either "x" or "y". Ex: /green|red/ matches "green" in "green apple" and "red" in "red apple".
[abc]  => Matches a string that has either an a or a b or a c. Equivalent to [a-c] and (a|b|c).
[^abc] => Matches anything that is not enclosed in the brackets. Equivalent to [^a-c].


# Quantifiers - (* + ? and {})
abc*       => Matches a string that has "ab" followed by zero or more "c".
abc+       => Matches a string that has "ab" followed by one or more "c".
abc?       => Matches a string that has "ab" followed by zero or one "c".
abc{2}     => Matches a string that has "ab" followed by 2 "c".
abc{2,}    => Matches a string that has "ab" followed by 2 or more "c".
abc{2,5}   => Matches a string that has "ab" followed by 2 up to 5 "c".
a(bc)*     => Matches a string that has "a" followed by zero or more copies of the sequence bc".
a(bc){2,5} => Matches a string that has "a" followed by 2 up to 5 copies of the sequence "bc".

# Flags
g (global)      => Does not return after the first match, restarting the subsequent searches from the end of the previous match.
m (multi-line)  => When enabled ^ and $ will match the start and end of a line, instead of the whole string.
i (insensitive) => Makes the whole expression case-insensitive (for instance /aBc/i would match AbC).