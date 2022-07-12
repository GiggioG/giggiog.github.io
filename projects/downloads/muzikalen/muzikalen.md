# Muzikalen
## What is Muzikalen
Muzikalen is a cipher made for Bulgarian that resembles musical notes. It was made for me and the other boys in my class and the fact there were only 7 of us adds some limitations. It has a [WSID](https://giggiog.github.io/wsid) of 23.
## How to read the images in these docs
Anything black is the Muzikalen that the image's trying to show. Anything red is a placeholder to show you how things should be alined. Anything grey shows you what something means.
## The writing system
Everything resembles musical notes and is therefore written on a stave (5 lines).
Example sentence in Muzikalen:  
![](https://i.imgur.com/g21Aw2P.png)
## "English"
Muzikalen is a script made for the Bulgarian language, so it roughly follows [Bulgarian Phonology](https://en.wikipedia.org/wiki/Bulgarian_phonology).
## Structure
Each sentence is written on a seperate line (with a seperate stave).
Each line begins with a clef, signifying the topic.
Then, the top number of the time signature is the meta, and the lower one the version.
Next there is a colon and the actual sentence begins after it.
Each "syllable" is written as a note and each word is seperated by a barline.
### Topics
The clef signifying the topic of the sentence is one of the following:
![](https://i.imgur.com/VpM3WAY.png)
### Meta
A sentence's meta consists of 3 numbers: the sentence type, the sender and the recipient. The first one is from 0 to 3, and the second two are from 0 to 7. The meta is what results of gluing the 3 numbers' binary representations together and interpreting it in decimal.
#### Sentence type
* 0 (`00`) for statement
* 1 (`01`) for question
* 2 (`10`) for exclamation/command
* 3 (`11`) for title

#### Sender and recipient
* 0 (`000`) : in sender: `anonymous`, in recipient: `for everyone`
* 1-7 (`001`-`111`) : the 7 people in the group (agree on numbers beforehand)

### Version
The current version is `1`.
### Syllables
A "syllable" consists of a base and a tail.
#### Bases
Bases correspond to one of the following:
* a consonant
* placeholder consonant (no sound)
* punctuation

and are:
![](https://i.imgur.com/ah05rXV.png)
The placeholder is used in order to write consecutive vowels or words that start with a vowel. 
#### Tails
Tails act as the following sounds on every base besides punctuation:
![](https://i.imgur.com/HwcMJNs.png)
and act as the following punctuation marks on the punctuation base:
![](https://i.imgur.com/ldjD2gP.png)
The placeholder vowel has no sound and is used for consecutive consonants or for words that end in a vowel.
The "end sentence" punctuation mark depends on sentence type:
* `.` in statements
* `?` in questions
* `!` in exclamations/commands
* `nothing` in titles