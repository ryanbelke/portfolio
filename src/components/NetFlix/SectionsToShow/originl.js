/*       <Angles top="200vh" />
 <BaseHeader section />
 <BaseHeader angled />
 <FlexFull>
 <Left quarter noPadding>
 <H1 fontSize="4.5" noReduce weight="900" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Ryan Belke
 </H1>
 </Left>
 </FlexFull>

 <FlexFull marginTop="300px" className="secondary" >
 <Left half>
 <H1 fontSize="2.5" noReduce weight="400" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#fff" >
 Re-create the Netflix movie card.
 <hr />
 </H1>
 </Left>
 <Right half>
 <H1 fontSize="2.5" noReduce weight="400" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#fff" >
 Stack: React & CSS Modules
 <hr />
 </H1>
 </Right>

 </FlexFull>
 <FlexFull paper marginTop="100px" >
 <div className={css.rootContainer}>
 <Base data={data} />
 <div className={css.JawBoneCommon}>
 <Common data={data}/>
 </div>
 </div>
 </FlexFull>
 <FlexFull marginTop="300px" >
 <Left half>
 <Phone className="phone" mobile="left: 5vw; width: 300px">
 <AltImg src={googlespeed} widthPercent="98" height="450"
 transform="rotate(180deg)" alt="google search for orthodontist" />
 </Phone>
 </Left>
 <Right half>
 <H1 fontSize="2.5" noReduce weight="900" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Create a phone outline using CSS
 <hr/>
 </H1>
 <code style={styles.code}>
 box-shadow: inset 20px 24px 7px 1px #fff, inset 0 -5px 20px rgba(173,186,204,.25), 0 1px 6px rgba(0,21,64,.14), 10px -10px 20px rgba(0,21,64,.15);
 <br />
 align-items: center;
 <br />
 border-radius: 36px;
 <br />
 justify-content: center;
 <br />
 display: flex;
 <br />
 transform: rotate(180deg);
 <br />
 height: 540px;
 <br />
 width: 300px;
 <br />
 position: relative;
 <br />
 padding: 5px;</code>
 </Right>
 </FlexFull>
 <FlexFull  marginTop="150px">
 <Left half>
 <H1 fontSize="2.5" noReduce weight="900" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Controlled form using React + Material-ui & <br/><hr /> NodeJs + NodeMailer to send data.
 <hr/>
 </H1>
 <H1 fontSize="1.5" noReduce weight="900" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Full server side code here:
 </H1>
 <code style={styles.code}><a target="_blank" href="https://github.com/ryanbelke/portfolio/blob/master/src/components/InputForm/server.js">server.js</a></code>
 </Left>
 <Right half>
 <InputForm/>
 </Right>

 </FlexFull>

 <FlexFull marginTop="300px">
 <Left half>
 <H1 fontSize="2.5" noReduce weight="900" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Use styled-components to <br />create a custom mobile friendly flex grid.
 <hr/>
 </H1>
 <code style={styles.code}>
 Code: <a href="https://github.com/ryanbelke/portfolio/blob/master/src/components/Divs/FlexFull.js" target="_blank">FlexFull.js</a>
 <br /><br />
 <span style={styles.span}>Disclaimer: Flex grid for this demo does not work on mobile as a redudant FlexFull component is being placed inside of a Right component to show the layout and instructions side by side.</span>
 </code>
 </Left>
 <Right half>
 <H1 fontSize=".90" noReduce weight="100" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 <code style={styles.code}>{`<FlexFull border="2px solid black" />`}</code>
 </H1>
 <FlexFull border="2px solid black">
 <br /> <br />
 <br />
 <br />
 <br /><br />
 <br /><br />
 <br />
 </FlexFull>
 </Right>
 </FlexFull>
 <FlexFull marginTop="150px">
 <Left half>
 <H1 fontSize="1.5" noReduce weight="600" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Create {`<Left half />`} and {"<Right half />"} <br />component to create a left & right div
 <hr/>
 </H1>
 <code style={styles.code}>
 Code: <a href="https://github.com/ryanbelke/portfolio/blob/master/src/components/Divs/Left.js" target="_blank">Left.js</a>
 <br />Code: <a href="https://github.com/ryanbelke/portfolio/blob/master/src/components/Divs/Right.js" target="_blank">Right.js</a>
 </code>
 </Left>
 <Right noPadding half>
 <br />
 <br />

 <H1 fontSize="1.0" noReduce weight="100" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 <code style={styles.code}>
 {`<FlexFull border="2px solid black" />`}
 {`<Left half border="2px solid red" />`}
 <br />
 {`<Right half border="2px solid green" />`}
 {`</FlexFull>`}

 </code>
 </H1>
 <FlexFull border="2px solid black">
 <Left half border="3px solid red" />
 <Right half border="3px solid green" />
 <br /><br />
 <br />
 <br />
 <br /><br />
 <br /><br />
 <br />
 </FlexFull>
 </Right>
 </FlexFull>

 <FlexFull marginTop="150px">
 <Left half>
 <H1 fontSize="1.5" noReduce weight="600" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Simulate 1/3 divs the same way by passing in 'third' prop and adding either Left or Right component.
 <hr/>
 </H1>
 <code style={styles.code}>
 Code: <a href="https://github.com/ryanbelke/portfolio/blob/master/src/components/Divs/Left.js" target="_blank">Left.js</a>
 <br />
 Code: <a href="https://github.com/ryanbelke/portfolio/blob/master/src/components/Divs/Right.js" target="_blank">Right.js</a>
 </code>
 </Left>
 <Right half noPadding>
 <br />              <br />

 <H1 fontSize="1.0" weight="100" margin="10px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 <code style={styles.code}>
 {`<FlexFull border="2px solid black" />`}
 {`<Left third border="3px solid red" />`}
 <br />  {`<Left third border="3px solid blue" />`}
 <br />  {`<Right third border="3px solid green" />`}
 <br />      {`</FlexFull>`}
 </code>
 </H1>
 <FlexFull border="2px solid black">
 <br /><br />
 <br /><br />
 <br /><br />
 <br /><br />
 <br /><br />
 <Left third border="3px solid red" />
 <Left third border="3px solid blue" />
 <Right third border="3px solid green" />

 </FlexFull>
 </Right>
 </FlexFull>
 <FlexFull marginTop="150px">
 <Left half>
 <H1 fontSize="1.5" noReduce weight="600" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 On a mobile device the FlexFull component sets
 <br /><br /><code style={styles.code}>flex-direction: row;</code> <br /><br />and the Left and Right components stack on top of each other.
 <hr />
 </H1>
 <H1 fontSize="1.0" weight="100" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 <code style={styles.code}>
 {`<FlexFull border="2px solid black" />`}<hr />
 {`<Left half border="3px solid red" />`} <hr />
 <br />  {`<Right half border="3px solid green" />`} <hr />
 {`</FlexFull>`}
 </code>
 </H1>
 </Left>
 <Right half noPadding>
 <FlexFull border="2px solid black" flexDirection="column">
 <Left third border="3px solid red">
 <br /><br />
 <br /><br />
 <br /><br />
 </Left>
 <Right third border="3px solid green">
 <br /><br />
 <br /><br />
 </Right>
 </FlexFull>
 </Right>
 </FlexFull>
 <FlexFull marginTop="150px">
 <Left half>
 <H1 fontSize="1.5" noReduce weight="600" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Using styled-components you can use props to set custom CSS values without modifying a stylesheet
 <hr />
 </H1>
 <H1 fontSize="1.0" weight="100" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 <code style={styles.code}>
 {`<FlexFull border="2px solid black" />`}
 {`<Left half  border="3px solid red" />`} <hr />
 {`<Right half noPadding border="3px solid green" />`}
 <br />
 {`</FlexFull>`}
 <hr />

 </code>
 </H1>
 <code style={styles.code}>This is set by this line inside of the Right component
 <br />
 <br />
 {`padding: $ {(props) => props.noPadding ? '0px' : '30px'};`}</code>
 </Left>
 <Right half noPadding>
 <FlexFull border="2px solid black">
 <Left half border="3px solid red">
 <strong>Padding</strong>
 <br /><br />
 <br /><br />
 <br /><br />
 <br /><br />       <br /><br />
 <br /><br />
 <br />
 </Left>
 <Right noPadding half border="3px solid green">
 <strong> No Padding </strong>
 <br /><br />         <br /><br />
 <br /><br />       <br /><br />
 <br /><br />
 <br />
 <br />
 </Right>
 </FlexFull>
 </Right>
 </FlexFull>
 <FlexFull  marginTop="150px">
 <Left half>
 <H1 fontSize="1.5" noReduce weight="600" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Passing in custom CSS attributes as props
 <hr />
 </H1>
 <H1 fontSize="1.0" weight="100" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 <code style={styles.code}>
 {`<FlexFull border="2px solid black" />`}
 {`<Left half margin="0px 20px 40px 0px" border="3px solid red" />`} <hr />
 <br />  {`<Right half border="3px solid green" />`}
 {`</FlexFull>`}
 <hr />

 </code>
 </H1>
 <code style={styles.code}>This is set by this line inside of the component
 <br />
 <br />
 {`margin: $ {(props) => props.margin };`}</code>
 </Left>
 <Right half noPadding>
 <FlexFull border="2px solid black">
 <Left half margin="0px 20px 40px 0px" border="3px solid red">
 <strong>Margin 20px to right and 40px from bottom</strong>
 <br /><br />
 <br /><br />
 <br /><br />
 <br /><br />
 <br />
 </Left>
 <Right half border="3px solid green">
 <strong> No margin </strong>
 <br /><br />         <br /><br />
 <br /><br />
 <br />
 <br />
 </Right>
 </FlexFull>
 </Right>
 </FlexFull>
 <FlexFull marginTop="150px">
 <Left half>
 <H1 fontSize="1.5" noReduce weight="600" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141" >
 Adjusting the flex size of the components
 <hr />
 </H1>
 <H1 fontSize="1.0" weight="100" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 <code style={styles.code}>
 {`<FlexFull border="2px solid black" />`}
 {`<Left quarter border="3px solid red" />`} <hr />
 <br />   {`<Right three border="3px solid green" />`} <hr />
 {`</FlexFull>`}

 </code>
 </H1>
 <code style={styles.code}>Easily adjust your layout without countless classNames
 </code>
 </Left>
 <Right half noPadding>
 <FlexFull border="2px solid black">
 <Left quarter border="3px solid red">
 <strong>Quarter </strong>
 <br /><br />
 <br /><br />
 <br /><br />
 <br /><br />
 <br />
 </Left>
 <Right three border="3px solid green">
 <strong> Three Quarters </strong>
 <br /><br />         <br /><br />
 <br /><br />
 <br />
 <br />
 </Right>
 </FlexFull>
 </Right>
 </FlexFull>
 <AnglesFull top="735vh" />
 <FlexFull marginTop="150px">
 <Left half paper>
 <H1 fontSize="2.0" weight="900" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 Put an end to the
 <hr />
 <code>col-xs col-md col-xl </code>
 <hr />era with the ease of flexbox.
 </H1>
 <br />
 <H1 fontSize="1.5" weight="900" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 For a full site created using this method check out my site, <a href="https://www.hashtgd.com/" target="_blank">HASHTGD</a>
 </H1>
 </Left>
 <Right quarter margin="0px 60px">
 <H1 fontSize="2.22" weight="900" margin="5px 0px 20px 0px"
 fontFamily="'Lato', sans-serif" primary="#414141">
 Never write another stylesheet with <hr /><code>styled-components</code>
 </H1>
 </Right>
 </FlexFull>*/