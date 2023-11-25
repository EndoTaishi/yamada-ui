import{j as e,F as u,a as n}from"./jsx-runtime-b08f8875.js";import{r as f}from"./index-8ee6c85d.js";import{M as a,a as s,b as d,c,d as mn,e as un}from"./dialog-c1e138b7.js";import{u as p}from"./index-34b9ab94.js";import{B as o}from"./button-a09a9cfc.js";import{W as D}from"./flex-b4dc1d01.js";import{T as m}from"./text-c7eceae7.js";import{C as hn}from"./container-72b57892.js";import{I as On}from"./image-0609fc88.js";import{H as Bn}from"./heading-e87eb660.js";import"./_commonjsHelpers-de833af9.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";import"./theme-provider-78d359c6.js";import"./factory-2d442159.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./component-911fdb88.js";import"./slide-da1b6d1b.js";import"./index-709acde9.js";import"./motion-5447b2d8.js";import"./utils-83ab8863.js";import"./forward-ref-cf7188bd.js";import"./fade-f5f4a666.js";import"./close-button-7784ce89.js";import"./use-component-style-b6002d28.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./container-portal-8be8bf32.js";import"./index-8bf7f4ad.js";import"./extends-90dea224.js";import"./slide-fade-523c2ff0.js";import"./scale-fade-31abeb34.js";import"./loading-9c6ba408.js";import"./use-image-9c7f5b4b.js";const Xn={title:"Components / Overlay / Modal",component:a},O=()=>{const{isOpen:l,onOpen:t,onClose:r}=p();return e(u,{children:[n(o,{onClick:t,children:"Open Modal"}),e(a,{isOpen:l,onClose:r,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:r,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},B=()=>{const{isOpen:l,onOpen:t,onClose:r}=p();return e(u,{children:[n(o,{onClick:t,children:"Open Modal"}),e(a,{isOpen:l,onClose:r,duration:.4,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:r,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},M=()=>{const[l,t]=f.useState("md"),{isOpen:r,onOpen:i,onClose:h}=p();return e(u,{children:[e(D,{gap:"md",children:[n(o,{onClick:()=>{t("sm"),i()},children:"Open sm Modal"}),n(o,{onClick:()=>{t("md"),i()},children:"Open md Modal"}),n(o,{onClick:()=>{t("lg"),i()},children:"Open lg Modal"}),n(o,{onClick:()=>{t("xl"),i()},children:"Open xl Modal"}),n(o,{onClick:()=>{t("full"),i()},children:"Open full Modal"})]}),e(a,{isOpen:r,onClose:h,size:l,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:h,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},C=()=>{const[l,t]=f.useState("center"),{isOpen:r,onOpen:i,onClose:h}=p();return e(u,{children:[e(D,{gap:"md",children:[n(o,{onClick:()=>{t("center"),i()},children:"Open center Modal"}),n(o,{onClick:()=>{t("top"),i()},children:"Open top Modal"}),n(o,{onClick:()=>{t("top-left"),i()},children:"Open top & left Modal"}),n(o,{onClick:()=>{t("left"),i()},children:"Open left Modal"}),n(o,{onClick:()=>{t("bottom-left"),i()},children:"Open bottom & left Modal"}),n(o,{onClick:()=>{t("bottom"),i()},children:"Open bottom Modal"}),n(o,{onClick:()=>{t("bottom-right"),i()},children:"Open bottom & right Modal"}),n(o,{onClick:()=>{t("right"),i()},children:"Open right Modal"}),n(o,{onClick:()=>{t("top-right"),i()},children:"Open top & right Modal"})]}),e(a,{isOpen:r,onClose:h,placement:l,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:h,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},k=()=>{const[l,t]=f.useState("scale"),{isOpen:r,onOpen:i,onClose:h}=p();return e(u,{children:[e(D,{gap:"md",children:[n(o,{onClick:()=>{t("scale"),i()},children:"Open scale Modal"}),n(o,{onClick:()=>{t("top"),i()},children:"Open top Modal"}),n(o,{onClick:()=>{t("left"),i()},children:"Open left Modal"}),n(o,{onClick:()=>{t("bottom"),i()},children:"Open bottom Modal"}),n(o,{onClick:()=>{t("right"),i()},children:"Open right Modal"})]}),e(a,{isOpen:r,onClose:h,animation:l,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:h,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},g=()=>{const l=p(),t=p();return e(u,{children:[n(o,{onClick:l.onOpen,children:"Open Modal"}),e(a,{isOpen:l.isOpen,onClose:l.onClose,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:l.onClose,children:"とじる"}),n(o,{colorScheme:"primary",onClick:t.onOpen,children:"あらすじ"})]}),e(a,{isOpen:t.isOpen,onClose:t.onClose,size:"sm",children:[n(s,{children:"あらすじ"}),n(d,{children:"地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。"}),e(c,{children:[n(o,{variant:"ghost",onClick:t.onClose,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})]})},A=()=>{const{isOpen:l,onOpen:t,onClose:r}=p();return e(u,{children:[n(o,{onClick:t,children:"Open Modal"}),e(a,{isOpen:l,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:r,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},y=()=>{const{isOpen:l,onOpen:t,onClose:r}=p();return e(u,{children:[n(o,{onClick:t,children:"Open Modal"}),e(a,{isOpen:l,onClose:r,children:[n(mn,{color:"gray.400"}),n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:r,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},S=()=>{const{isOpen:l,onOpen:t,onClose:r}=p();return e(u,{children:[n(o,{onClick:t,children:"Open Modal"}),e(a,{isOpen:l,onClose:r,withOverlay:!1,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:r,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},L=()=>{const{isOpen:l,onOpen:t,onClose:r}=p();return e(u,{children:[n(o,{onClick:t,children:"Open Modal"}),e(a,{isOpen:l,onClose:r,children:[n(un,{bg:"blackAlpha.300",backdropFilter:"blur(10px)"}),n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:r,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},v=()=>{const[l,t]=f.useState("inside"),{isOpen:r,onOpen:i,onClose:h}=p();return e(u,{children:[e(D,{gap:"md",children:[n(o,{onClick:()=>{t("inside"),i()},children:"Open inside scroll Modal"}),n(o,{onClick:()=>{t("outside"),i()},children:"Open outside scroll Modal"})]}),e(a,{isOpen:r,onClose:h,scrollBehavior:l,children:[n(s,{children:"ドラゴンボール"}),e(d,{children:[n(m,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),n(m,{children:"1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。 連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超 ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。"}),n(m,{children:"1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。"}),n(m,{children:"単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。"}),n(m,{children:"ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。"}),n(m,{children:"2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。"})]}),e(c,{children:[n(o,{variant:"ghost",onClick:h,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})},x=()=>{const{isOpen:l,onOpen:t,onClose:r}=p();return e(u,{children:[n(o,{onClick:t,children:"Open Modal"}),e(hn,{p:"md",gap:"md",rounded:"md",alignItems:"center",textAlign:"center",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[n(On,{src:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",maxW:"sm"}),n(Bn,{size:"xl",children:"『ドラゴンボール』（DRAGON BALL）"}),n(m,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),n(m,{children:"1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。 連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超 ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。"}),n(m,{children:"1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。"}),n(m,{children:"単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。"}),n(m,{children:"ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。"}),n(m,{children:"2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。"})]}),e(a,{isOpen:l,onClose:r,blockScrollOnMount:!1,children:[n(s,{children:"ドラゴンボール"}),n(d,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e(c,{children:[n(o,{variant:"ghost",onClick:r,children:"とじる"}),n(o,{colorScheme:"primary",children:"Wikipadia"})]})]})]})};var b,W,N;O.parameters={...O.parameters,docs:{...(b=O.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(N=(W=O.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var F,H,G;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} duration={0.4}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(G=(H=B.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var R,T,z;M.parameters={...M.parameters,docs:{...(R=M.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [size, setSize] = useState<ModalProps["size"]>("md");
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        setSize("sm");
        onOpen();
      }}>
          Open sm Modal
        </Button>

        <Button onClick={() => {
        setSize("md");
        onOpen();
      }}>
          Open md Modal
        </Button>

        <Button onClick={() => {
        setSize("lg");
        onOpen();
      }}>
          Open lg Modal
        </Button>

        <Button onClick={() => {
        setSize("xl");
        onOpen();
      }}>
          Open xl Modal
        </Button>

        <Button onClick={() => {
        setSize("full");
        onOpen();
      }}>
          Open full Modal
        </Button>
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(z=(T=M.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var P,w,I;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [placement, setPlacement] = useState<ModalProps["placement"]>("center");
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        setPlacement("center");
        onOpen();
      }}>
          Open center Modal
        </Button>

        <Button onClick={() => {
        setPlacement("top");
        onOpen();
      }}>
          Open top Modal
        </Button>

        <Button onClick={() => {
        setPlacement("top-left");
        onOpen();
      }}>
          Open top & left Modal
        </Button>

        <Button onClick={() => {
        setPlacement("left");
        onOpen();
      }}>
          Open left Modal
        </Button>

        <Button onClick={() => {
        setPlacement("bottom-left");
        onOpen();
      }}>
          Open bottom & left Modal
        </Button>

        <Button onClick={() => {
        setPlacement("bottom");
        onOpen();
      }}>
          Open bottom Modal
        </Button>

        <Button onClick={() => {
        setPlacement("bottom-right");
        onOpen();
      }}>
          Open bottom & right Modal
        </Button>

        <Button onClick={() => {
        setPlacement("right");
        onOpen();
      }}>
          Open right Modal
        </Button>

        <Button onClick={() => {
        setPlacement("top-right");
        onOpen();
      }}>
          Open top & right Modal
        </Button>
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose} placement={placement}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(I=(w=C.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var Z,_,j;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [animation, setAnimation] = useState<ModalProps["animation"]>("scale");
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        setAnimation("scale");
        onOpen();
      }}>
          Open scale Modal
        </Button>

        <Button onClick={() => {
        setAnimation("top");
        onOpen();
      }}>
          Open top Modal
        </Button>

        <Button onClick={() => {
        setAnimation("left");
        onOpen();
      }}>
          Open left Modal
        </Button>

        <Button onClick={() => {
        setAnimation("bottom");
        onOpen();
      }}>
          Open bottom Modal
        </Button>

        <Button onClick={() => {
        setAnimation("right");
        onOpen();
      }}>
          Open right Modal
        </Button>
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose} animation={animation}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(j=(_=k.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var E,q,J;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const firstControls = useDisclosure();
  const secondControls = useDisclosure();
  return <>
      <Button onClick={firstControls.onOpen}>Open Modal</Button>

      <Modal isOpen={firstControls.isOpen} onClose={firstControls.onClose}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={firstControls.onClose}>
            とじる
          </Button>
          <Button colorScheme="primary" onClick={secondControls.onOpen}>
            あらすじ
          </Button>
        </ModalFooter>

        <Modal isOpen={secondControls.isOpen} onClose={secondControls.onClose} size="sm">
          <ModalHeader>あらすじ</ModalHeader>

          <ModalBody>
            地球の人里離れた山奥に住む尻尾の生えた少年・孫悟空はある日、西の都からやって来た少女・ブルマと出会う。
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={secondControls.onClose}>
              とじる
            </Button>
            <Button colorScheme="primary">Wikipadia</Button>
          </ModalFooter>
        </Modal>
      </Modal>
    </>;
}`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(U=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalCloseButton color="gray.400" />

        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,nn,on;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} withOverlay={false}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(on=(nn=S.parameters)==null?void 0:nn.docs)==null?void 0:on.source}}};var en,tn,rn;L.parameters={...L.parameters,docs:{...(en=L.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />

        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(rn=(tn=L.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var ln,an,sn;v.parameters={...v.parameters,docs:{...(ln=v.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  const [scrollBehavior, setScrollBehavior] = useState<ModalProps["scrollBehavior"]>("inside");
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Wrap gap="md">
        <Button onClick={() => {
        setScrollBehavior("inside");
        onOpen();
      }}>
          Open inside scroll Modal
        </Button>

        <Button onClick={() => {
        setScrollBehavior("outside");
        onOpen();
      }}>
          Open outside scroll Modal
        </Button>
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>

          <Text>
            1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。
            連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超
            ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。
          </Text>

          <Text>
            1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。
          </Text>

          <Text>
            単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。
          </Text>

          <Text>
            ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。
          </Text>

          <Text>
            2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(sn=(an=v.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var dn,cn,pn;x.parameters={...x.parameters,docs:{...(dn=x.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Container p="md" gap="md" rounded="md" alignItems="center" textAlign="center" border="1px solid" borderColor="inherit" boxShadow="md">
        <Image src="https://dragon-ball-official.com/assets/img/intro/intro_2.png" maxW="sm" />

        <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>

        <Text>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Text>

        <Text>
          1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。
          連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超
          ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。
        </Text>

        <Text>
          1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。
        </Text>

        <Text>
          単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。
        </Text>

        <Text>
          ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。
        </Text>

        <Text>
          2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。
        </Text>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalHeader>ドラゴンボール</ModalHeader>

        <ModalBody>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
          <Button colorScheme="primary">Wikipadia</Button>
        </ModalFooter>
      </Modal>
    </>;
}`,...(pn=(cn=x.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};const Yn=["basic","withDuration","withSize","withPlacement","withAnimation","nestedModal","disabledCloseButton","customCloseButton","disabledOverlay","customOverlay","scrollBehavior","scrollOnMount"];export{Yn as __namedExportsOrder,O as basic,y as customCloseButton,L as customOverlay,Xn as default,A as disabledCloseButton,S as disabledOverlay,g as nestedModal,v as scrollBehavior,x as scrollOnMount,k as withAnimation,B as withDuration,C as withPlacement,M as withSize};
//# sourceMappingURL=modal.stories-0586d46c.js.map