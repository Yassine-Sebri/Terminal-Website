import ls from "./img/EENII/ls.png";
import backup from "./img/EENII/backup.png";
import ssh from "./img/EENII/ssh.png";
import hash from "./img/EENII/hash.png";
import john from "./img/EENII/john.png";
import level06 from "./img/EENII/level06.png";
import perl from "./img/EENII/perl.png";
import flag07 from "./img/EENII/flag07.png";
import wget from "./img/EENII/wget.png";
import level08 from "./img/EENII/level08.png";
import wireshark from "./img/EENII/wireshark.png";
import pass from "./img/EENII/pass.png";
import flag08 from "./img/EENII/flag08.png";
import code09 from "./img/EENII/code09.png";
import flag09 from "./img/EENII/flag09.png";

const EENII = () => {
  return (
    <div>
      <br />
      <h1>Exploit Education: Nebula - Part II</h1>
      2021-03-19
      <br />
      <br />
      <span id="keyword">Level05</span> asks us to look for directories with
      weak permissions. Let's check out the <span id="keyword">flag05</span>{" "}
      folder then.
      <br />
      <br />
      <img src={ls} alt="" />
      <br />
      <br />
      A backup file. I wonder what it contains?
      <br />
      <br />
      <img src={backup} alt="" />
      <br />
      <br />
      An ssh folder. Looks like we found our target, all that's left to do it to
      login.
      <br />
      <br />
      <img src={ssh} alt="" />
      <br />
      <br />
      And done. Now, let's move on to the next challenge.
      <br />
      <br />
      <span id="keyword">Level06</span> says that the credentials for flag06 are
      from a legacy unix system. To find it we just need to check the{" "}
      <span id="keyword">passwd</span> file.
      <br />
      <br />
      <img src={hash} alt="" />
      <br />
      <br />
      We use{" "}
      <a target="__blank" href="https://github.com/openwall/john">
        John the Ripper
      </a>{" "}
      to decrypt the hash.
      <br />
      <br />
      <img src={john} alt="" />
      <br />
      <br />
      Now that we the password, we just need to login.
      <br />
      <br />
      <img src={level06} alt="" />
      <br />
      <br />
      <span id="keyword">Level07</span> shows us a{" "}
      <span id="keyword">perl</span> script and asks us to find a vulnerability.
      <br />
      <br />
      <img src={perl} alt="" />
      <br />
      <br />
      If I had to guess, this would be a command injection vulnerability where
      we change the value of the host variable. Let's head to the{" "}
      <span id="keyword">flag07</span> directory to get more information.
      <br />
      <br />
      <img src={flag07} alt="" />
      <br />
      <br />
      The index.cgi file contains the code I showed earlier, and the thttpd.conf
      file tells us that the server is listening on port 7007. Now that we have
      all the information we need, let's exploit it.
      <br />
      <br />
      <img src={wget} alt="" />
      <br />
      <br />
      <span id="keyword">Level08</span> says that we have to exploit bad
      permissions again.
      <br />
      <br />
      <img src={level08} alt="" />
      <br />
      <br />
      That capture file looks interesting. Let's try seeing what it contains.
      <br />
      <br />
      <img src={wireshark} alt="" />
      <br />
      <br />
      Hmm, that password seems suspicious, let's inspect it further.
      <br />
      <br />
      <img src={pass} alt="" />
      <br />
      <br />
      0x7f corresponds to <span id="keyword">backspace</span>, so the real
      password is <span id="keyword">backd00rmate</span>.
      <br />
      <br />
      <img src={flag08} alt="" />
      <br />
      <br />
      <span id="keyword">Level09</span> asks us to find a vulenerability in this
      php code.
      <br />
      <br />
      <img src={code09} alt="" />
      <br />
      <br />I did something similar to this a while ago in{" "}
      <a target="__blank" href="https://www.hackthebox.eu/">
        Hack The Box
      </a>
      , so I knew what I had to do. The <span id="keyword">preg_replace</span>{" "}
      function can execute php code, so we just need to make our input go
      through there. An example of possible input is{" "}
      {/* eslint-disable-next-line */}
      {"[email {${SYSTEM($use_me)}}]"}. This matches the regex demanded by the
      preg_replace function, and tells the program to execute whatever is in the
      use_me variable.
      <br />
      <br />
      <img src={flag09} alt="" />
    </div>
  );
};

export default EENII;
