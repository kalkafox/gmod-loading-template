const Background = () => {
  return (
    <svg
      className="object-cover fixed w-full h-full grid opacity-[0.01] -z-50"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 5000 5000"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="0"
            result="blur"></feGaussianBlur>
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
            result="good"></feColorMatrix>
          <feComposite
            in="SourceGraphic"
            in2="goo"
            operator="atop"></feComposite>
        </filter>
        <path
          d="M258,280C237,282 221,268 219,248Q214,220 244,220L261,221L258,280z"
          id="P0"></path>
        <path d="M261,254L249,262L239,244L261,244L261,254z" id="P1"></path>
        <path
          d="M233,239L265,236Q278,239 270,251C263,268 244,272 232,260Q220,248 233,239z"
          id="P2"></path>
        <path d="M232,260L231,245L255,231L265,264L232,260z" id="P3"></path>
        <path
          d="M242,218C274,221 288,252 269,277C264,281 258,283 250,283Q221,290 218,256C233,244 238,237 242,218z"
          id="P4"></path>
        <path d="M266,260L233,258L249,231L265,238L266,260z" id="P5"></path>
        <path
          d="M279,244Q272,289 232,274C234,255 234,245 234,225C246,235 251,234 259,221C260,238 264,242 279,244z"
          id="P6"></path>
        <path d="M261,238L265,254L238,260L248,234L261,238z" id="P7"></path>
        <path
          d="M237,227L269,268Q275,280 265,271C247,264 238,258 224,245L237,227z"
          id="P8"></path>
        <path d="M261,252L248,261L239,247L256,241L261,252z" id="P9"></path>
        <path
          d="M231,277L222,268L246,217C253,233 258,235 274,227C269,255 256,268 231,277z"
          id="P10"></path>
        <path d="M243,258L243,242L254,240L253,260L243,258z" id="P11"></path>
      </defs>
      <g id="group" fill="#FFF" filter="">
        <use x="-233" y="-176" href="#P4"></use>
        <use x="-191" y="31" href="#P7"></use>
        <use x="-274" y="458" href="#P6"></use>
        <use x="-105" y="705" href="#P7"></use>
        <use x="-155" y="935" href="#P5"></use>
        <use x="-44" y="1238" href="#P5"></use>
        <use x="-195" y="1499" href="#P5"></use>
        <use x="-32" y="1671" href="#P0"></use>
        <use x="-166" y="1907" href="#P0"></use>
        <use x="-256" y="2257" href="#P7"></use>
        <use x="-47" y="2438" href="#P3"></use>
        <use x="-136" y="2531" href="#P3"></use>
        <use x="-124" y="2926" href="#P0"></use>
        <use x="-217" y="3051" href="#P10"></use>
        <use x="-140" y="3378" href="#P6"></use>
        <use x="-305" y="3830" href="#P9"></use>
        <use x="-41" y="3847" href="#P8"></use>
        <use x="-65" y="4262" href="#P10"></use>
        <use x="-83" y="4382" href="#P9"></use>
        <use x="-235" y="4752" href="#P8"></use>
        <use x="-110" y="5003" href="#P7"></use>
        <use x="-256" y="5144" href="#P2"></use>
        <use x="41" y="-63" href="#P4"></use>
        <use x="156" y="42" href="#P6"></use>
        <use x="81" y="237" href="#P1"></use>
        <use x="-29" y="458" href="#P9"></use>
        <use x="54" y="891" href="#P9"></use>
        <use x="24" y="1021" href="#P3"></use>
        <use x="69" y="1272" href="#P0"></use>
        <use x="174" y="1738" href="#P9"></use>
        <use x="53" y="1789" href="#P8"></use>
        <use x="111" y="2015" href="#P1"></use>
        <use x="143" y="2306" href="#P4"></use>
        <use x="172" y="2667" href="#P11"></use>
        <use x="108" y="3044" href="#P7"></use>
        <use x="29" y="3269" href="#P3"></use>
        <use x="214" y="3408" href="#P3"></use>
        <use x="229" y="3624" href="#P5"></use>
        <use x="183" y="4002" href="#P2"></use>
        <use x="182" y="4131" href="#P6"></use>
        <use x="90" y="4480" href="#P9"></use>
        <use x="84" y="4665" href="#P8"></use>
        <use x="74" y="5056" href="#P1"></use>
        <use x="-4" y="5205" href="#P10"></use>
        <use x="370" y="-48" href="#P11"></use>
        <use x="381" y="52" href="#P11"></use>
        <use x="324" y="239" href="#P3"></use>
        <use x="514" y="737" href="#P11"></use>
        <use x="251" y="916" href="#P8"></use>
        <use x="393" y="1040" href="#P0"></use>
        <use x="305" y="1483" href="#P3"></use>
        <use x="305" y="1570" href="#P9"></use>
        <use x="432" y="1827" href="#P4"></use>
        <use x="414" y="2231" href="#P11"></use>
        <use x="535" y="2372" href="#P9"></use>
        <use x="366" y="2651" href="#P8"></use>
        <use x="317" y="2878" href="#P2"></use>
        <use x="300" y="3277" href="#P1"></use>
        <use x="454" y="3539" href="#P7"></use>
        <use x="311" y="3628" href="#P0"></use>
        <use x="377" y="3958" href="#P1"></use>
        <use x="397" y="4279" href="#P1"></use>
        <use x="293" y="4366" href="#P5"></use>
        <use x="267" y="4838" href="#P6"></use>
        <use x="489" y="5094" href="#P4"></use>
        <use x="303" y="5116" href="#P0"></use>
        <use x="585" y="-127" href="#P4"></use>
        <use x="723" y="158" href="#P3"></use>
        <use x="749" y="440" href="#P6"></use>
        <use x="517" y="558" href="#P1"></use>
        <use x="727" y="816" href="#P2"></use>
        <use x="553" y="1197" href="#P2"></use>
        <use x="534" y="1365" href="#P3"></use>
        <use x="717" y="1637" href="#P10"></use>
        <use x="701" y="1806" href="#P2"></use>
        <use x="617" y="2182" href="#P3"></use>
        <use x="555" y="2424" href="#P7"></use>
        <use x="717" y="2588" href="#P9"></use>
        <use x="749" y="2992" href="#P6"></use>
        <use x="644" y="3217" href="#P10"></use>
        <use x="565" y="3413" href="#P5"></use>
        <use x="494" y="3666" href="#P11"></use>
        <use x="534" y="4025" href="#P6"></use>
        <use x="741" y="4172" href="#P5"></use>
        <use x="619" y="4456" href="#P11"></use>
        <use x="666" y="4584" href="#P6"></use>
        <use x="541" y="4925" href="#P0"></use>
        <use x="522" y="5184" href="#P9"></use>
        <use x="756" y="-99" href="#P10"></use>
        <use x="982" y="169" href="#P2"></use>
        <use x="860" y="460" href="#P4"></use>
        <use x="855" y="694" href="#P2"></use>
        <use x="982" y="934" href="#P1"></use>
        <use x="916" y="1139" href="#P1"></use>
        <use x="975" y="1267" href="#P0"></use>
        <use x="1000" y="1732" href="#P9"></use>
        <use x="925" y="1963" href="#P10"></use>
        <use x="1008" y="2235" href="#P8"></use>
        <use x="991" y="2422" href="#P8"></use>
        <use x="772" y="2542" href="#P6"></use>
        <use x="983" y="3017" href="#P11"></use>
        <use x="843" y="3214" href="#P9"></use>
        <use x="869" y="3393" href="#P3"></use>
        <use x="820" y="3559" href="#P1"></use>
        <use x="863" y="3922" href="#P8"></use>
        <use x="814" y="4215" href="#P6"></use>
        <use x="1013" y="4466" href="#P10"></use>
        <use x="909" y="4764" href="#P6"></use>
        <use x="887" y="4888" href="#P7"></use>
        <use x="780" y="5288" href="#P0"></use>
        <use x="1157" y="-49" href="#P5"></use>
        <use x="1161" y="167" href="#P9"></use>
        <use x="1151" y="254" href="#P11"></use>
        <use x="1042" y="550" href="#P1"></use>
        <use x="1064" y="761" href="#P0"></use>
        <use x="1231" y="1176" href="#P2"></use>
        <use x="1076" y="1308" href="#P2"></use>
        <use x="1037" y="1612" href="#P4"></use>
        <use x="1273" y="1906" href="#P11"></use>
        <use x="1080" y="2229" href="#P1"></use>
        <use x="1049" y="2337" href="#P10"></use>
        <use x="1205" y="2741" href="#P7"></use>
        <use x="1049" y="2970" href="#P2"></use>
        <use x="1033" y="3201" href="#P4"></use>
        <use x="1043" y="3325" href="#P1"></use>
        <use x="1107" y="3673" href="#P9"></use>
        <use x="1061" y="3873" href="#P5"></use>
        <use x="1058" y="4152" href="#P2"></use>
        <use x="1243" y="4437" href="#P3"></use>
        <use x="1244" y="4802" href="#P4"></use>
        <use x="1252" y="4861" href="#P8"></use>
        <use x="1283" y="5098" href="#P2"></use>
        <use x="1442" y="-171" href="#P10"></use>
        <use x="1437" y="67" href="#P4"></use>
        <use x="1373" y="276" href="#P9"></use>
        <use x="1519" y="612" href="#P10"></use>
        <use x="1566" y="797" href="#P3"></use>
        <use x="1510" y="1204" href="#P8"></use>
        <use x="1343" y="1287" href="#P8"></use>
        <use x="1364" y="1504" href="#P5"></use>
        <use x="1366" y="1909" href="#P1"></use>
        <use x="1488" y="2033" href="#P10"></use>
        <use x="1342" y="2500" href="#P6"></use>
        <use x="1345" y="2745" href="#P10"></use>
        <use x="1314" y="3053" href="#P0"></use>
        <use x="1325" y="3159" href="#P2"></use>
        <use x="1351" y="3367" href="#P1"></use>
        <use x="1501" y="3747" href="#P4"></use>
        <use x="1387" y="3990" href="#P3"></use>
        <use x="1348" y="4080" href="#P3"></use>
        <use x="1334" y="4573" href="#P5"></use>
        <use x="1557" y="4642" href="#P9"></use>
        <use x="1497" y="4977" href="#P4"></use>
        <use x="1559" y="5194" href="#P9"></use>
        <use x="1575" y="-212" href="#P11"></use>
        <use x="1631" y="31" href="#P0"></use>
        <use x="1768" y="344" href="#P10"></use>
        <use x="1778" y="429" href="#P11"></use>
        <use x="1727" y="790" href="#P2"></use>
        <use x="1581" y="1041" href="#P3"></use>
        <use x="1772" y="1383" href="#P2"></use>
        <use x="1563" y="1717" href="#P8"></use>
        <use x="1809" y="1927" href="#P9"></use>
        <use x="1752" y="2013" href="#P11"></use>
        <use x="1782" y="2358" href="#P6"></use>
        <use x="1755" y="2626" href="#P9"></use>
        <use x="1774" y="2814" href="#P3"></use>
        <use x="1538" y="3286" href="#P7"></use>
        <use x="1659" y="3349" href="#P0"></use>
        <use x="1758" y="3675" href="#P3"></use>
        <use x="1600" y="3968" href="#P1"></use>
        <use x="1743" y="4287" href="#P9"></use>
        <use x="1678" y="4527" href="#P9"></use>
        <use x="1772" y="4746" href="#P2"></use>
        <use x="1648" y="5029" href="#P6"></use>
        <use x="1741" y="5230" href="#P4"></use>
        <use x="1880" y="-97" href="#P11"></use>
        <use x="2018" y="174" href="#P1"></use>
        <use x="1878" y="315" href="#P11"></use>
        <use x="1828" y="464" href="#P3"></use>
        <use x="1857" y="881" href="#P2"></use>
        <use x="2064" y="1129" href="#P10"></use>
        <use x="2075" y="1434" href="#P10"></use>
        <use x="1967" y="1661" href="#P9"></use>
        <use x="1848" y="1789" href="#P10"></use>
        <use x="2092" y="2235" href="#P11"></use>
        <use x="1919" y="2418" href="#P2"></use>
        <use x="1848" y="2648" href="#P11"></use>
        <use x="1857" y="2809" href="#P0"></use>
        <use x="1943" y="3272" href="#P0"></use>
        <use x="1873" y="3498" href="#P6"></use>
        <use x="2042" y="3826" href="#P4"></use>
        <use x="1962" y="4060" href="#P2"></use>
        <use x="2004" y="4309" href="#P4"></use>
        <use x="1827" y="4471" href="#P7"></use>
        <use x="1845" y="4800" href="#P1"></use>
        <use x="1852" y="4920" href="#P10"></use>
        <use x="1958" y="5244" href="#P1"></use>
        <use x="2178" y="-132" href="#P9"></use>
        <use x="2129" y="87" href="#P1"></use>
        <use x="2300" y="341" href="#P6"></use>
        <use x="2227" y="736" href="#P2"></use>
        <use x="2338" y="756" href="#P1"></use>
        <use x="2173" y="1059" href="#P3"></use>
        <use x="2178" y="1411" href="#P5"></use>
        <use x="2132" y="1694" href="#P7"></use>
        <use x="2343" y="1895" href="#P1"></use>
        <use x="2348" y="2094" href="#P9"></use>
        <use x="2344" y="2501" href="#P8"></use>
        <use x="2327" y="2731" href="#P6"></use>
        <use x="2247" y="2983" href="#P4"></use>
        <use x="2098" y="3207" href="#P9"></use>
        <use x="2298" y="3440" href="#P7"></use>
        <use x="2157" y="3798" href="#P9"></use>
        <use x="2333" y="3983" href="#P0"></use>
        <use x="2160" y="4214" href="#P5"></use>
        <use x="2286" y="4346" href="#P4"></use>
        <use x="2241" y="4705" href="#P2"></use>
        <use x="2341" y="4944" href="#P1"></use>
        <use x="2154" y="5121" href="#P1"></use>
        <use x="2433" y="-157" href="#P0"></use>
        <use x="2581" y="129" href="#P2"></use>
        <use x="2457" y="348" href="#P10"></use>
        <use x="2493" y="664" href="#P6"></use>
        <use x="2525" y="925" href="#P1"></use>
        <use x="2493" y="1197" href="#P10"></use>
        <use x="2377" y="1221" href="#P11"></use>
        <use x="2421" y="1629" href="#P3"></use>
        <use x="2565" y="1944" href="#P7"></use>
        <use x="2505" y="2044" href="#P1"></use>
        <use x="2525" y="2286" href="#P10"></use>
        <use x="2632" y="2577" href="#P2"></use>
        <use x="2411" y="2950" href="#P11"></use>
        <use x="2470" y="3236" href="#P0"></use>
        <use x="2627" y="3458" href="#P8"></use>
        <use x="2497" y="3650" href="#P0"></use>
        <use x="2584" y="3991" href="#P6"></use>
        <use x="2608" y="4262" href="#P0"></use>
        <use x="2366" y="4572" href="#P2"></use>
        <use x="2443" y="4826" href="#P0"></use>
        <use x="2398" y="4934" href="#P5"></use>
        <use x="2612" y="5118" href="#P10"></use>
        <use x="2746" y="-241" href="#P9"></use>
        <use x="2841" y="150" href="#P0"></use>
        <use x="2804" y="397" href="#P5"></use>
        <use x="2882" y="712" href="#P4"></use>
        <use x="2739" y="769" href="#P11"></use>
        <use x="2850" y="1095" href="#P5"></use>
        <use x="2825" y="1412" href="#P0"></use>
        <use x="2662" y="1557" href="#P10"></use>
        <use x="2731" y="1912" href="#P7"></use>
        <use x="2682" y="2057" href="#P6"></use>
        <use x="2877" y="2464" href="#P9"></use>
        <use x="2813" y="2567" href="#P4"></use>
        <use x="2659" y="2891" href="#P3"></use>
        <use x="2823" y="3081" href="#P4"></use>
        <use x="2713" y="3463" href="#P8"></use>
        <use x="2744" y="3661" href="#P1"></use>
        <use x="2715" y="4008" href="#P2"></use>
        <use x="2647" y="4224" href="#P10"></use>
        <use x="2690" y="4342" href="#P9"></use>
        <use x="2714" y="4788" href="#P4"></use>
        <use x="2685" y="4959" href="#P6"></use>
        <use x="2858" y="5178" href="#P6"></use>
        <use x="2953" y="-140" href="#P10"></use>
        <use x="3054" y="127" href="#P2"></use>
        <use x="3164" y="205" href="#P8"></use>
        <use x="2938" y="466" href="#P7"></use>
        <use x="3013" y="892" href="#P3"></use>
        <use x="3059" y="1106" href="#P4"></use>
        <use x="3020" y="1416" href="#P10"></use>
        <use x="3122" y="1470" href="#P8"></use>
        <use x="3000" y="1858" href="#P10"></use>
        <use x="3138" y="2146" href="#P9"></use>
        <use x="2915" y="2453" href="#P8"></use>
        <use x="2906" y="2647" href="#P11"></use>
        <use x="2984" y="2853" href="#P4"></use>
        <use x="3064" y="3193" href="#P8"></use>
        <use x="3022" y="3417" href="#P2"></use>
        <use x="2966" y="3752" href="#P8"></use>
        <use x="3138" y="4061" href="#P10"></use>
        <use x="3031" y="4181" href="#P11"></use>
        <use x="3044" y="4527" href="#P0"></use>
        <use x="3089" y="4839" href="#P8"></use>
        <use x="3050" y="4954" href="#P8"></use>
        <use x="3141" y="5109" href="#P3"></use>
        <use x="3239" y="-165" href="#P1"></use>
        <use x="3328" y="54" href="#P0"></use>
        <use x="3339" y="315" href="#P8"></use>
        <use x="3411" y="523" href="#P0"></use>
        <use x="3246" y="948" href="#P0"></use>
        <use x="3256" y="1071" href="#P2"></use>
        <use x="3352" y="1453" href="#P8"></use>
        <use x="3418" y="1509" href="#P9"></use>
        <use x="3172" y="1770" href="#P6"></use>
        <use x="3212" y="2099" href="#P10"></use>
        <use x="3408" y="2428" href="#P4"></use>
        <use x="3217" y="2748" href="#P11"></use>
        <use x="3457" y="2984" href="#P7"></use>
        <use x="3185" y="3107" href="#P9"></use>
        <use x="3365" y="3518" href="#P1"></use>
        <use x="3322" y="3774" href="#P11"></use>
        <use x="3339" y="3981" href="#P1"></use>
        <use x="3369" y="4239" href="#P8"></use>
        <use x="3268" y="4500" href="#P10"></use>
        <use x="3240" y="4832" href="#P3"></use>
        <use x="3317" y="4964" href="#P1"></use>
        <use x="3263" y="5260" href="#P6"></use>
        <use x="3523" y="-43" href="#P9"></use>
        <use x="3480" y="-13" href="#P0"></use>
        <use x="3610" y="311" href="#P10"></use>
        <use x="3479" y="672" href="#P5"></use>
        <use x="3677" y="980" href="#P3"></use>
        <use x="3628" y="1076" href="#P6"></use>
        <use x="3602" y="1460" href="#P0"></use>
        <use x="3657" y="1539" href="#P3"></use>
        <use x="3688" y="1980" href="#P5"></use>
        <use x="3540" y="2158" href="#P4"></use>
        <use x="3692" y="2349" href="#P10"></use>
        <use x="3457" y="2762" href="#P0"></use>
        <use x="3572" y="2908" href="#P1"></use>
        <use x="3641" y="3120" href="#P1"></use>
        <use x="3581" y="3461" href="#P1"></use>
        <use x="3507" y="3794" href="#P6"></use>
        <use x="3450" y="3925" href="#P8"></use>
        <use x="3504" y="4161" href="#P9"></use>
        <use x="3553" y="4579" href="#P0"></use>
        <use x="3518" y="4692" href="#P8"></use>
        <use x="3659" y="4877" href="#P11"></use>
        <use x="3466" y="5177" href="#P4"></use>
        <use x="3967" y="-248" href="#P6"></use>
        <use x="3771" y="156" href="#P8"></use>
        <use x="3889" y="295" href="#P11"></use>
        <use x="3845" y="511" href="#P4"></use>
        <use x="3820" y="757" href="#P8"></use>
        <use x="3814" y="1218" href="#P10"></use>
        <use x="3832" y="1335" href="#P7"></use>
        <use x="3939" y="1713" href="#P7"></use>
        <use x="3913" y="1822" href="#P0"></use>
        <use x="3833" y="2058" href="#P9"></use>
        <use x="3769" y="2295" href="#P3"></use>
        <use x="3946" y="2538" href="#P5"></use>
        <use x="3842" y="2906" href="#P4"></use>
        <use x="3910" y="3283" href="#P9"></use>
        <use x="3828" y="3455" href="#P8"></use>
        <use x="3715" y="3726" href="#P4"></use>
        <use x="3998" y="4017" href="#P4"></use>
        <use x="3765" y="4284" href="#P1"></use>
        <use x="3864" y="4525" href="#P2"></use>
        <use x="3792" y="4842" href="#P0"></use>
        <use x="3898" y="5008" href="#P4"></use>
        <use x="3706" y="5184" href="#P0"></use>
        <use x="4170" y="-186" href="#P8"></use>
        <use x="4177" y="118" href="#P6"></use>
        <use x="4164" y="350" href="#P3"></use>
        <use x="3997" y="517" href="#P6"></use>
        <use x="4135" y="712" href="#P9"></use>
        <use x="4238" y="1062" href="#P5"></use>
        <use x="4046" y="1364" href="#P1"></use>
        <use x="4196" y="1590" href="#P2"></use>
        <use x="3980" y="1812" href="#P6"></use>
        <use x="4188" y="2031" href="#P10"></use>
        <use x="4149" y="2467" href="#P2"></use>
        <use x="4071" y="2531" href="#P1"></use>
        <use x="4047" y="2918" href="#P10"></use>
        <use x="4205" y="3106" href="#P10"></use>
        <use x="4109" y="3338" href="#P4"></use>
        <use x="4085" y="3655" href="#P7"></use>
        <use x="4249" y="3878" href="#P6"></use>
        <use x="4210" y="4290" href="#P8"></use>
        <use x="4169" y="4545" href="#P8"></use>
        <use x="4205" y="4798" href="#P2"></use>
        <use x="4187" y="5083" href="#P3"></use>
        <use x="4125" y="5259" href="#P3"></use>
        <use x="4308" y="-282" href="#P10"></use>
        <use x="4406" y="-14" href="#P2"></use>
        <use x="4426" y="363" href="#P6"></use>
        <use x="4320" y="716" href="#P8"></use>
        <use x="4448" y="749" href="#P6"></use>
        <use x="4301" y="1185" href="#P0"></use>
        <use x="4402" y="1309" href="#P11"></use>
        <use x="4507" y="1507" href="#P3"></use>
        <use x="4523" y="1936" href="#P0"></use>
        <use x="4424" y="2148" href="#P11"></use>
        <use x="4452" y="2368" href="#P3"></use>
        <use x="4375" y="2571" href="#P6"></use>
        <use x="4275" y="3004" href="#P7"></use>
        <use x="4381" y="3067" href="#P8"></use>
        <use x="4506" y="3354" href="#P0"></use>
        <use x="4352" y="3825" href="#P1"></use>
        <use x="4360" y="3887" href="#P4"></use>
        <use x="4436" y="4081" href="#P0"></use>
        <use x="4301" y="4513" href="#P2"></use>
        <use x="4354" y="4580" href="#P6"></use>
        <use x="4348" y="5080" href="#P4"></use>
        <use x="4319" y="5200" href="#P3"></use>
        <use x="4655" y="-219" href="#P2"></use>
        <use x="4735" y="40" href="#P0"></use>
        <use x="4688" y="234" href="#P0"></use>
        <use x="4571" y="651" href="#P8"></use>
        <use x="4606" y="882" href="#P10"></use>
        <use x="4671" y="1037" href="#P8"></use>
        <use x="4745" y="1469" href="#P8"></use>
        <use x="4556" y="1592" href="#P7"></use>
        <use x="4621" y="1797" href="#P8"></use>
        <use x="4682" y="2043" href="#P7"></use>
        <use x="4677" y="2346" href="#P6"></use>
        <use x="4635" y="2682" href="#P3"></use>
        <use x="4724" y="2812" href="#P11"></use>
        <use x="4592" y="3160" href="#P0"></use>
        <use x="4570" y="3402" href="#P9"></use>
        <use x="4696" y="3690" href="#P8"></use>
        <use x="4618" y="3906" href="#P2"></use>
        <use x="4618" y="4080" href="#P2"></use>
        <use x="4669" y="4460" href="#P10"></use>
        <use x="4488" y="4586" href="#P9"></use>
        <use x="4622" y="4906" href="#P4"></use>
        <use x="4680" y="5210" href="#P5"></use>
        <use x="4902" y="-257" href="#P0"></use>
        <use x="4883" y="195" href="#P3"></use>
        <use x="4876" y="260" href="#P2"></use>
        <use x="4963" y="598" href="#P9"></use>
        <use x="4820" y="913" href="#P11"></use>
        <use x="4801" y="1187" href="#P2"></use>
        <use x="4964" y="1272" href="#P7"></use>
        <use x="4823" y="1517" href="#P8"></use>
        <use x="5010" y="1800" href="#P9"></use>
        <use x="4930" y="2259" href="#P7"></use>
        <use x="5037" y="2364" href="#P8"></use>
        <use x="4917" y="2642" href="#P1"></use>
        <use x="4900" y="2923" href="#P8"></use>
        <use x="4859" y="3155" href="#P2"></use>
        <use x="4881" y="3437" href="#P0"></use>
        <use x="4927" y="3635" href="#P7"></use>
        <use x="4806" y="3822" href="#P5"></use>
        <use x="4862" y="4129" href="#P2"></use>
        <use x="4771" y="4411" href="#P8"></use>
        <use x="4964" y="4841" href="#P4"></use>
        <use x="4966" y="5000" href="#P9"></use>
        <use x="4943" y="5166" href="#P3"></use>
        <use x="5181" y="-231" href="#P4"></use>
        <use x="5128" y="1" href="#P5"></use>
        <use x="5254" y="401" href="#P0"></use>
        <use x="5128" y="566" href="#P2"></use>
        <use x="5279" y="926" href="#P0"></use>
        <use x="5067" y="1042" href="#P2"></use>
        <use x="5092" y="1261" href="#P8"></use>
        <use x="5229" y="1650" href="#P4"></use>
        <use x="5055" y="1988" href="#P6"></use>
        <use x="5183" y="2241" href="#P9"></use>
        <use x="5217" y="2320" href="#P8"></use>
        <use x="5098" y="2774" href="#P5"></use>
        <use x="5038" y="2997" href="#P11"></use>
        <use x="5039" y="3155" href="#P2"></use>
        <use x="5116" y="3381" href="#P1"></use>
        <use x="5047" y="3597" href="#P4"></use>
        <use x="5150" y="3822" href="#P1"></use>
        <use x="5103" y="4269" href="#P8"></use>
        <use x="5132" y="4461" href="#P1"></use>
        <use x="5270" y="4733" href="#P11"></use>
        <use x="5267" y="4844" href="#P11"></use>
        <use x="5224" y="5161" href="#P1"></use>
      </g>
    </svg>
  );
};

export default Background;
