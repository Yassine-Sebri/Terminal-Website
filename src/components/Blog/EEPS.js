import zero from "./img/EEPS/zero.png";
import one from "./img/EEPS/one.png";
import two from "./img/EEPS/two.png";
import three1 from "./img/EEPS/three1.png";
import three2 from "./img/EEPS/three2.png";
import four1 from "./img/EEPS/four1.png";
import four2 from "./img/EEPS/four2.png";
import four3 from "./img/EEPS/four3.png";
import five1 from "./img/EEPS/five1.png";
import five2 from "./img/EEPS/five2.png";
import five3 from "./img/EEPS/five3.png";
import five4 from "./img/EEPS/five4.png";

const EEPS = () => {
  return (
    <div>
      <br />
      <h1>Exploit Education: Phoenix - Stack</h1>
      2021-03-23
      <br />
      <br />
      I've been taking part of{" "}
      <a href="https://picoctf.org/" target="__blank">
        picoCTF
      </a>{" "}
      over the last couple of days. It has been a fun experience and I learned a
      lot from it. It also made me realize how lacking I am in the field of{" "}
      <span id="keyword">binary exploitation</span>. Sure, I know the basics of
      stack overflows and format vulnerabilities, but that's about it. That's
      why I decided to practice more using the{" "}
      <a target="__blank" href="https://exploit.education/phoenix/">
        Phoenix
      </a>{" "}
      machine from Exploit Education.
      <br />
      <br />
      The{" "}
      <a href="https://exploit.education/phoenix/stack-zero/" target="__blank">
        first level
      </a>{" "}
      is pretty simple. It sets value of the <span id="keyword">changeme</span>{" "}
      variable to 0 and asks us to change it. The program uses the{" "}
      <span id="keyword">gets</span> function, which would allow us to write
      beyond the space allocated for the <span id="keyword">buffer</span>{" "}
      variable. We know that <span id="keyword">buffer</span> only has 64 bytes
      allocated for it, and that the <span id="keyword">changeme</span> variable
      comes directly after, so we just have to provide 65 bytes of input.
      <br />
      <br />
      <img src={zero} alt="" />
      <br />
      <br />
      The{" "}
      <a href="https://exploit.education/phoenix/stack-one/" target="__blank">
        second level
      </a>{" "}
      asks us to set the value of the <span id="keyword">changeme</span> to
      something specific. This is done in order to teach us about{" "}
      <a href="https://en.wikipedia.org/wiki/Endianness" target="__blank">
        endianness
      </a>
      . I used python's <span id="keyword">struct</span> library to help me deal
      with endianness.
      <br />
      <br />
      <img src={one} alt="" />
      <br />
      <br />
      In the{" "}
      <a href="https://exploit.education/phoenix/stack-two/" target="__blank">
        third level
      </a>
      , We basically do the same thing but using environment variables.
      <br />
      <br />
      <img src={two} alt="" />
      <br />
      <br />
      <a href="https://exploit.education/phoenix/stack-three/" target="__blank">
        Level four
      </a>{" "}
      is where things start getting interesting. The point of this exercice is
      to redirect code execution to the <span id="keyword">complete_level</span>{" "}
      function. To do that, we first need to know where it's located in memory.
      I used the <span id="keyword">readelf</span> command for this.
      <br />
      <br />
      <img src={three1} alt="" />
      <br />
      <br />
      Now we just need to change the value of the function pointer.
      <br />
      <br />
      <img src={three2} alt="" />
      <br />
      <br />
      The{" "}
      <a href="https://exploit.education/phoenix/stack-four/" target="__blank">
        fifth level
      </a>{" "}
      asks us to redirect code execution without the code explicitly calling a
      function from the stack. We can do this by messing with how the stack is
      laid out. First, let us find the address of the{" "}
      <span id="keyword">complete_level</span> function.
      <br />
      <br />
      <img src={four1} alt="" />
      <br />
      <br />
      Next, let us see where the instruction pointer is. To do that, we make the
      padding unique enough to identify where it's located.
      <br />
      <br />
      <img src={four2} alt="" />
      <br />
      <br />
      Nice! We now know that the instruction pointer will point to whatever
      address we give after the 88th byte. Let's make the program return to the{" "}
      <span id="keyword">complete_level</span> function.
      <br />
      <br />
      <img src={four3} alt="" />
      <br />
      <br />
      <a href="https://exploit.education/phoenix/stack-five/" target="__blank">
        Level six
      </a>{" "}
      is where we perform our first buffer overflow attack. To do this, we first
      need to know where the buffer variable is located in memory. We can use{" "}
      <span id="keyword">gdb</span> to determine that.
      <br />
      <br />
      <img src={five1} alt="" />
      <br />
      <br />
      Next, we should determine where the instruction pointer is located.
      <br />
      <br />
      <img src={five2} alt="" />
      <br />
      <br />
      Looks like rbp and rip are located direclty after the buffer variable. Now
      we just need to find suitable shellcode. I like using{" "}
      <a
        target="__blank"
        href="http://shell-storm.org/shellcode/files/shellcode-806.php"
      >
        this one
      </a>
      . All that's left now is to write our script.
      <br />
      <br />
      <img src={five3} alt="" />
      <br />
      <br />
      It took me some time to get the right position for rip, but I did
      eventually. Now to try our exploit.
      <br />
      <br />
      <img src={five4} alt="" />
      <br />
      <br />
      <a href="https://exploit.education/phoenix/stack-six/" target="__blank">
        Level seven
      </a>{" "}
      is bascially an exercice for us to practice our newfound knowledge, while
      teaching us something new. The short answer to this challenge is{" "}
      <a
        href="https://www.welivesecurity.com/2016/05/10/exploiting-1-byte-buffer-overflows/"
        target="__blank"
      >
        1-byte buffer overflow
      </a>{" "}
      vulnerability. It's a cool trick that shows how even the smallest misstep
      can be exploited by an attacker.
      <br />
      <br />
      With that, the Stack part of Phoenix is over. I can't say that I learned a
      lot from this since I was already familiar with stack-based buffer
      overflows, but it was good to apply this knowledge on 64 bits
      architecture.
    </div>
  );
};

export default EEPS;
